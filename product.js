﻿$(document).ready(function () {
    try {
        loadDataTable();
        
    }
    catch (err) {
        console.error(err);
    }
});

let dataTable;

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {url:'/admin/product/getall'},
        "columns": [
            { data: 'title', "width": "15%" },
            { data: 'description', "width": "45%" },
            { data: 'author', "width": "15%" },
            { data: 'isbn', "width": "10%" },
            { data: 'listPrice', "width": "5%" },
            { data: 'category.name', "width": "10%" },
            {
                data: 'id',
                "render": function (data) {
                    return(`
                        <div class="btn-group" role="group">
                            <a href = "/admin/product/upsert/${data}" class="btn btn-primary" >
                                <i class="bi bi-pencil"></i>Edit
                            </a>
                            <a onclick = "Delete('/admin/product/delete/${data}')" class="btn btn-danger" >
                                <i class="bi bi-trash"></i>Delete
                            </a>
                        </div>
                        `);
                }
            }
        ]
    });
}


function Delete(url) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: "DELETE",
                success: function (data) {
                    dataTable.ajax.reload();
                    toastr.success(data.message);
                }
            })
        }
    });
}                             