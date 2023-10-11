using Microsoft.VisualStudio.TestTools.UnitTesting;
using DataAccess.Concrete.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete.EntityFramework.Tests
{
    [TestClass()]
    public class EfProductDalTests
    {
        [TestMethod()]
        public void Get_all_returns_all_products()
        {
            EfProductDal productDal = new EfProductDal();

            var result = productDal.GetList();

            Assert.AreEqual(77, result.Count);
        }
    }
}