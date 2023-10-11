using Business.Abstract;
using Business.DependencyResolvers.Ninject;
using Business.ServiceContracts.Wcf;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// ProductDetailService için özet açıklama
/// </summary>
public class ProductDetailService:IProductDetailService
{
    public ProductDetailService()
    {
        //
        //TODO: Buraya oluşturucu mantığı ekleyin
        //
    }

    IProductService _productService=InstanceFactory.GetInstance<IProductService>();

    public List<Product> GetAll()
    {
        return _productService.GetAll();
    }
}