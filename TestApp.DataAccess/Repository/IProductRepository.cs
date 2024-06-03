using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TestApp.DataAccess.Repository.IRepository;
using TestApp.Models;

namespace TestApp.DataAccess.Repository
{
    public interface IProductRepository : IRepository<Product>
    {
        void Update(Product obj);
    }
}
