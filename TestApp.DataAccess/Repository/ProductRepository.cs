using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestApp.DataAccess.Data;
using TestApp.Models;

namespace TestApp.DataAccess.Repository
{
    public class ProductRepository: Repository<Product>, IProductRepository
    {
        ApplicationDbContext _db;
        public  ProductRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }
        public void Update(Product product)
        {
            _db.Products.Update(product);
        }
    }
}
