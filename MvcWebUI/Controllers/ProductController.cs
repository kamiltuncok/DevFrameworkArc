using Business.Abstract;
using Entities.Concrete;
using MvcWebUI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcWebUI.Controllers
{
    public class ProductController : Controller
    {
        private IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        // GET: Product
        public ActionResult Index()
        {
            var model = new ProductListViewModel
            {
                Products = _productService.GetAll()
            };
            return View(model);
        }

        public string Add()
        {
            _productService.Add(new Product
            {
                CategoryId = 1
                ,
                ProductName = "PencilCase"
                ,
                QuantityPerUnit = "1"
                ,
                UnitPrice = 4
            }
            );
                return "Added";
        }
        
        public string AddUpdate(Product product1,Product product2)
        {
            _productService.TransactionOperation(new Product
            {
                CategoryId = 1
                ,
                ProductName = "Computer"
                ,
                QuantityPerUnit = "1"
                ,
                UnitPrice = 23
            }, new Product
            {
                CategoryId = 1
                ,
                ProductName = "Computer 2"
                ,
                QuantityPerUnit = "1"
                ,
                UnitPrice = 24,
                ProductId=80
            }
            );
            return "Done";
        }
    }
}