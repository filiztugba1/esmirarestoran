import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Products() {

    const [product, setProduct] = useState({
        product_name	: "",
        product_barcode:"",
        product_price: 0.0,
        category_id: 0,
        firmid:0,
        product_order:0,
        product_show:0,
        product_image: null, // Görsel dosyası
      });

    const [products, setProducts] = useState([]); // Veriyi saklamak için state
    const [modalTitle, setModalTitle] = useState("Yeni Ürün");
  
    const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true); // Yükleme durumu
	const [error, setError] = useState(null); // Hata durumu
    const [success, setSuccess] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null); 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
        console.log(name, value);
      };
      
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProduct({ ...product, product_image: file });
      };
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Ürünleri ve kategorileri paralel olarak çek
            const [productResponse, categoryResponse] = await Promise.all([
              axios.get("http://siparisbankasi.com/products", {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }),
              axios.get("http://siparisbankasi.com/categories", {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }),
            ]);
    
            // Ürünler için Base64 formatına çevir
            const productsWithBase64 = productResponse.data.map((product) => ({
              ...product,
              imageUrl: `data:image/png;base64,${product.product_image}`, // Görsel Base64 formatında
            }));
    
            // Kategorileri ve ürünleri ayrı ayrı state'e ata
            setProducts(productsWithBase64);
            setCategories(categoryResponse.data);
    
            setLoading(false); // Yükleme tamamlandı
          } catch (err) {
            const status = err.response?.status;
    
            // Giriş hatalarını kontrol et
            if (status === 401 || status === 400) {
              window.location.href = "/Login";
              localStorage.setItem("giris", 0);
            }
    
            setError(err.message); // Hata durumunu sakla
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
	


    const [openOrderModal, setOpenOrderModal] = useState({
        show: "",
        display: "none",
        ariamodal: false,
    });

    // Menüleri açmak ve kapatmak için toggle fonksiyonu
    const OnOpenOrderModal = () => {
        setOpenOrderModal({
            show: "show",
            display: "block",
            ariamodal: true,
        });
    };

    const OnCloseOrderModal = () => {
        setOpenOrderModal({
            show: "",
            display: "none",
            ariamodal: false,
        });
    };


    const [formData, setFormData] = useState({
        username: '',
        email: ''
    });

    const [message, setMessage] = useState('');

    // Formdaki değişiklikleri takip eden fonksiyon
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          // FormData oluşturulması
          const formData = new FormData();
          formData.append("product_name", product.product_name); // Ürün adı
          formData.append("product_price", product.product_price); // Ürün fiyatı
          formData.append("category_id", product.category_id); // Kategori ID
          formData.append("product_barcode", product.product_barcode); // Barkod
          formData.append("product_order", product.product_order); // Ürün sırası
          formData.append("product_show", product.product_show); // Aktif/Pasif durumu
          formData.append("product_description", product.product_description); // Ürün açıklaması
          const firmid = localStorage.getItem("firmid");
          formData.append("firmid", firmid);
          // Eğer bir görsel seçildiyse ekle
          if (product.product_image) {
            formData.append("picture", product.product_image); // API tarafında "picture" olarak kabul ediliyor
          }
      
          console.log("Gönderilen FormData:", Array.from(formData.entries())); // Debug için
      
          // API isteği gönderimi
          const response = await axios.post("http://siparisbankasi.com/ProductSave", formData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // API güvenliği için token
              "Content-Type": "multipart/form-data", // Dosya gönderimi için uygun content-type
            },
          });
      
          console.log("API yanıtı:", response.data);
      
          // Başarılı işlem sonrası formu sıfırlama
          setSuccess(true);
          OnCloseOrderModal();

          
          setError(null);
          setProduct({
            product_name: "",
            product_price: "",
            category_id: "",
            product_barcode: "",
            product_order: 0,
            product_show: 1,
            product_description: "",
            product_image: null, // Görsel sıfırlanır
          });
        } catch (err) {
          console.error("Hata oluştu:", err.response?.data || err.message);
          setSuccess(false);
          setError(err.response?.data?.message || "Ürün kaydedilemedi.");
        }
      };
      
    const handleTwoSubmit = (e) => {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini önler
        console.log('Form Data:', formData);
        setMessage('Form successfully submitted!');

        // İsteğe göre burada API çağrısı yapabilirsiniz
    };

    const handleEdit = (pro) => {
        setProduct(pro);
      
        OnOpenOrderModal();
        setModalTitle(pro.product_name +  " Güncelle");
        console.log(product);
      };

      const handleAdd = () => {
        setProduct({});
       
        OnOpenOrderModal();
        setModalTitle("Yeni Ürün");
        console.log("Ekleme işlemi");
      };
       // Başlığı Yeni Ürün olarak ayarla
      
    return (
        <>
            <div className="content-wrapper">
                <div className="container-full">
                    <div className="content-header">
                        <div className="d-flex align-items-center">

                            <div className="mr-auto">
                                <h3 className="page-title">Ürünler</h3>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                                            <li className="breadcrumb-item" aria-current="page">Ürünler</li>
                                            {/* <li className="breadcrumb-item active" aria-current="page">Sipariş Listesi</li> */}
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <button type="button" className="btn btn-success" onClick={() => OnOpenOrderModal()}>
                                Ürün Ekle
                            </button>
                        </div>

                    </div>

                    <section className="content" style={{minHeight: "auto"}}>
                    <form onSubmit={handleTwoSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body px-0">
                                        
                                    <div className='col-12'>
                                    <h5>Ürün Arama</h5>
                                    <hr/>
                                    <div className='row'>
                                    <div className='col-md-4'>
                                                        <div className="form-group">
                                                            <label>Ürün Adı:</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-4'>
                                                <div className="form-group">
                                                    <label>Ürün Kategorisi</label>
                                                    <select className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Seçiniz</option>
                                                        {categories.map((category, index) => (   <option value={category.category_id}>{category.category_name}</option>))}
                                                       
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='col-md-2'>
                                                <div className="form-group">
                                                    <label>Ürün Durum</label>
                                                    <select className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Seçiniz</option>
                                                        <option value="1">Aktif</option>
                                                        <option value="0">Pasif</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='col-md-2' style={{ paddingLeft: 0 }}>
                                                        <button type="submit" className="btn btn-success btn-sm mt-25" onClick={() => handleAdd()}>
                                                            Ürün Ara
                                                        </button>
                                                    </div>
                                    </div> 
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </form>
                    </section>

                    <section className="content">
      <div className="row">
        {products.map((product, index) => (
          <div key={index} className="col-xxxl-3 col-xl-4 col-lg-6 col-12">
            <div className="box food-box">
              <div className="box-body text-center">
                <div className="menu-item">
                  <img
                    src={product.product_image} // API'den gelen ürün görseli
                    className="img-fluid w-p75"
                    alt={product.product_name}
                  />
                </div>
                <div className="menu-details text-center">
                  <h4 className="mt-20 mb-10">{product.product_name}</h4>
                  <h6>{product.product_price} TL</h6>
                  <p>{product.category}</p>
                </div>
                <div className="act-btn d-flex justify-content-between">
                  <div className="text-center mx-5">
                    <a
                      href="#"
                      className="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"
                    >
                      <i className="fa fa-eye-slash"></i>
                    </a>
                    <small className="d-block">View</small>
                  </div>
                  <div className="text-center mx-5">
                    <a
                      href="#" onClick={() => handleEdit(product)}
                      className="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"
                    >
                      <i className="fa fa-edit"></i>
                    </a>
                    <small className="d-block">Düzenle</small>
                  </div>
                  <div className="text-center mx-5">
                    <a
                      href="#"
                      className="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"
                    >
                      <i className="fa fa-trash"></i>
                    </a>
                    <small className="d-block">Sil</small>
                  </div>
                  <div className="text-center mx-5">
                    <a
                      href="#"
                      className="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"
                    >
                      <i className="fa fa-plus-square-o"></i>
                    </a>
                    <small className="d-block">Duplicate</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
                    {/* <section class="content">
                        <div class="row">
                            <div class="col-xxxl-3 col-xl-4 col-lg-6 col-12">
                                <div class="box food-box">
                                    <div class="box-body text-center">
                                        <div class="menu-item"><img src="../images/food/dish-1.png" class="img-fluid w-p75" alt="" /></div>
                                        <div class="menu-details text-center">
                                            <h4 class="mt-20 mb-10">Kung Pao Tofu Recipe</h4>
                                            <h6>500 TL</h6>
                                            <p>Food/Noodle</p>
                                        </div>
                                        <div class="act-btn d-flex justify-content-between">
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                                <small class="d-block">View</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                                <small class="d-block">Edit</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                                <small class="d-block">Delete</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"><i class="fa fa-plus-square-o"></i></a>
                                                <small class="d-block">Duplicate</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxxl-3 col-xl-4 col-lg-6 col-12">
                                <div class="box food-box">
                                    <div class="box-body text-center">
                                        <div class="menu-item"><img src="../images/food/dish-2.png" class="img-fluid w-p75" alt="" /></div>
                                        <div class="menu-details text-center">
                                            <h4 class="mt-20 mb-10">Pan Seared Salmon </h4>
                                            <h6>500 TL</h6>
                                            <p>Food/Noodle</p>
                                        </div>
                                        <div class="act-btn d-flex justify-content-between">
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                                <small class="d-block">View</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                                <small class="d-block">Edit</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                                <small class="d-block">Delete</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"><i class="fa fa-plus-square-o"></i></a>
                                                <small class="d-block">Duplicate</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxxl-3 col-xl-4 col-lg-6 col-12">
                                <div class="box food-box">
                                    <div class="box-body text-center">
                                        <div class="menu-item"><img src="../images/food/dish-3.png" class="img-fluid w-p75" alt="" /></div>
                                        <div class="menu-details text-center">
                                            <h4 class="mt-20 mb-10">Dal Palak Recipe </h4>
                                            <h6>500 TL</h6>
                                            <p>Food/Noodle</p>
                                        </div>
                                        <div class="act-btn d-flex justify-content-between">
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                                <small class="d-block">View</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                                <small class="d-block">Edit</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                                <small class="d-block">Delete</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"><i class="fa fa-plus-square-o"></i></a>
                                                <small class="d-block">Duplicate</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxxl-3 col-xl-4 col-lg-6 col-12">
                                <div class="box food-box">
                                    <div class="box-body text-center">
                                        <div class="menu-item"><img src="../images/food/dish-4.png" class="img-fluid w-p75" alt="" /></div>
                                        <div class="menu-details text-center">
                                            <h4 class="mt-20 mb-10">Vegetable Jalfrezi</h4>
                                            <h6>500 TL</h6>
                                            <p>Food/Noodle</p>
                                        </div>
                                        <div class="act-btn d-flex justify-content-between">
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                                <small class="d-block">View</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                                <small class="d-block">Edit</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                                <small class="d-block">Delete</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"><i class="fa fa-plus-square-o"></i></a>
                                                <small class="d-block">Duplicate</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxxl-3 col-xl-4 col-lg-6 col-12">
                                <div class="box food-box">
                                    <div class="box-body text-center">
                                        <div class="menu-item"><img src="../images/food/dish-5.png" class="img-fluid w-p75" alt="" /></div>
                                        <div class="menu-details text-center">
                                            <h4 class="mt-20 mb-10">Palak Paneer Bhurji </h4>
                                            <h6>500 TL</h6>
                                            <p>Food/Noodle</p>
                                        </div>
                                        <div class="act-btn d-flex justify-content-between">
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                                <small class="d-block">View</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                                <small class="d-block">Edit</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                                <small class="d-block">Delete</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"><i class="fa fa-plus-square-o"></i></a>
                                                <small class="d-block">Duplicate</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxxl-3 col-xl-4 col-lg-6 col-12">
                                <div class="box food-box">
                                    <div class="box-body text-center">
                                        <div class="menu-item"><img src="../images/food/dish-6.png" class="img-fluid w-p75" alt="" /></div>
                                        <div class="menu-details text-center">
                                            <h4 class="mt-20 mb-10">Kadai Paneer Gravy</h4>
                                            <h6>500 TL</h6>
                                            <p>Food/Noodle</p>
                                        </div>
                                        <div class="act-btn d-flex justify-content-between">
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                                <small class="d-block">View</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                                <small class="d-block">Edit</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                                <small class="d-block">Delete</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"><i class="fa fa-plus-square-o"></i></a>
                                                <small class="d-block">Duplicate</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxxl-3 col-xl-4 col-lg-6 col-12">
                                <div class="box food-box">
                                    <div class="box-body text-center">
                                        <div class="menu-item"><img src="../images/food/dish-1.png" class="img-fluid w-p75" alt="" /></div>
                                        <div class="menu-details text-center">
                                            <h4 class="mt-20 mb-10">Gajar Matar Recipe</h4>
                                            <h6>500 TL</h6>
                                            <p>Food/Noodle</p>
                                        </div>
                                        <div class="act-btn d-flex justify-content-between">
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                                <small class="d-block">View</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                                <small class="d-block">Edit</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                                <small class="d-block">Delete</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"><i class="fa fa-plus-square-o"></i></a>
                                                <small class="d-block">Duplicate</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxxl-3 col-xl-4 col-lg-6 col-12">
                                <div class="box food-box">
                                    <div class="box-body text-center">
                                        <div class="menu-item"><img src="../images/food/dish-2.png" class="img-fluid w-p75" alt="" /></div>
                                        <div class="menu-details text-center">
                                            <h4 class="mt-20 mb-10">Aloo Tamatar Ki Sabzi </h4>
                                            <h6>500 TL</h6>
                                            <p>Food/Noodle</p>
                                        </div>
                                        <div class="act-btn d-flex justify-content-between">
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                                <small class="d-block">View</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                                <small class="d-block">Edit</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                                <small class="d-block">Delete</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"><i class="fa fa-plus-square-o"></i></a>
                                                <small class="d-block">Duplicate</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxxl-3 d-xxxl-none d-xl-block d-lg-none col-xl-4 col-lg-6 col-12">
                                <div class="box food-box">
                                    <div class="box-body text-center">
                                        <div class="menu-item"><img src="../images/food/dish-3.png" class="img-fluid w-p75" alt="" /></div>
                                        <div class="menu-details text-center">
                                            <h4 class="mt-20 mb-10">Vegan Thai Basil</h4>
                                            <h6>500 TL</h6>
                                            <p>Food/Noodle</p>
                                        </div>
                                        <div class="act-btn d-flex justify-content-between">
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-success-light btn-xs mb-5"><i class="fa fa-eye-slash"></i></a>
                                                <small class="d-block">View</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-danger-light btn-xs mb-5"><i class="fa fa-edit"></i></a>
                                                <small class="d-block">Edit</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-primary-light btn-xs mb-5"><i class="fa fa-trash"></i></a>
                                                <small class="d-block">Delete</small>
                                            </div>
                                            <div class="text-center mx-5">
                                                <a href="#" class="waves-effect waves-circle btn btn-circle btn-info-light btn-xs mb-5"><i class="fa fa-plus-square-o"></i></a>
                                                <small class="d-block">Duplicate</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>
            </div>

            <div
                className={`modal fade bs-example-modal-lg ${openOrderModal.show}`}
                style={{ display: openOrderModal.display }}
                aria-modal={openOrderModal.ariamodal}
                role="dialog"
            >
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myLargeModalLabel">{modalTitle}</h4>
                            <button type="button" className="close" onClick={OnCloseOrderModal}>×</button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                <div className='col-md-4'>
                                                <div className="form-group">
                                                    <label>Ürün Kategorisi:</label>
                                                    <select name="category_id"  value={product.product_category_id || ""}  onChange={handleInputChange} className="form-control select2" style={{ width: "100%" }} required >
                                                        <option selected="selected">Seçiniz</option>
                                                        {categories.map((category, index) => (   <option value={category.category_id} >{category.category_name}</option>))}
                                                       
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                            <div className="form-group">
                                                    <label>Ürün Alt Kategorisi:</label>
                                                    <select  onChange={handleInputChange}   value={product.product_category_id || ""} className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Seçiniz</option>
                                                        {categories.map((category, index) => (   <option value={category.category_id}>{category.category_name}</option>))}
                                                       
                                                    </select>
                                                </div>
                                            </div>
                                

                                            <div className='col-md-4'>
                                                        <div className="form-group">
                                                            <label>Ürün Sırası:</label>
                                                            <div className="input-group">
                                                                <input  onChange={handleInputChange}  value={product.product_order || ""}  type="text" name="product_order"  className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-4'>
                                                        <div className="form-group">
                                                            <label>Ürün Adı:</label>
                                                            <div className="input-group">
                                                                <input  onChange={handleInputChange} value={product.product_name || ""} name="product_name" type="text" className="form-control" required />
                                                            </div>
                                                        </div>
                                                    </div>

                                                 

                                                    <div className='col-md-4'>
                                                        <div className="form-group">
                                                            <label>Ürün Barkodu:</label>
                                                            <div className="input-group">
                                                                <input  onChange={handleInputChange} value={product.product_barcode || ""} type="text" name="product_barcode" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Ürün Durumu</label>
                                        <select onChange={handleInputChange} name="product_order" value={product.product_order || ""} className="form-control select2" style={{ width: "100%" }}>
                                                        <option value="1">Aktif</option>
                                                        <option value="0">Pasif</option>
                                                       
                                                    </select>
									</div>
								</div>

                                                    <div class="col-md-4">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Ürün Fiyatı:</label>
										<div class="input-group">
											<div class="input-group-addon">TL</div>
											<input onChange={handleInputChange} value={product.product_price || ""} name="product_price" type="text" class="form-control" required  /> </div>
									</div>
								</div>

                                                    <div className='col-md-4'>
                                                    <div class="form-group">
                                                        <label class="col-form-label">Ürün Resim</label>
                                                       
                                                            <div class="custom-file">
                                                                <input  onChange={handleFileChange} name="product_image" type="file" class="custom-file-input" id="customFile" />
                                                                <label class="custom-file-label" for="customFile">Görsel Seçiniz</label>
                                                            </div>
                                                       
                                                    </div> 
                                                    </div>
                                                    <div className='col-md-8'>
                                                        <div className="form-group">
                                                            <label>Ürün Detay:</label>
                                                            <div className="input-group">
                                                                <textarea onChange={handleInputChange} value={product.product_description || ""}  name="product_description" type="text" className="form-control" required ></textarea> 
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="container-full">
                                                    <div className="">
                                                        <div className="d-flex align-items-center">

                                                            <div className="mr-auto">
                                                                <h5 className="page-title">Alt Ürün Seçiniz</h5>

                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="box">
                                                                <div className="box-body px-0">
                                                                    <div className="table-responsive rounded card-table">
                                                                        <table className="table border-no" id="example1">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Ürün ID</th>
                                                                                    <th>Ürün Kategorisi</th>
                                                                                    <th>Ürün Alt Kategorisi</th>
                                                                                    <th>Ürün Adı</th>
                                                                                    <th>Fiyatı</th>
                                                                                    <th>Adet</th>
                                                                                    <th></th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr className="hover-primary">
                                                                                    <td>#245879</td>
                                                                                    <td>Pizzalar</td>
                                                                                    <td>1 bucuk</td>
                                                                                    <td>İtalyan Pizza</td>
                                                                                    <td>500</td>
                                                                                    <td>
                                                                                        <div className="input-group">
                                                                                            <input type="number" className="form-control" value={0} />
                                                                                        </div>

                                                                                    </td>
                                                                                    <td>
                                                                                        <div className="btn-group">
                                                                                            <a className='btn btn-success btn-xs' onClick={OnCloseOrderModal}><i className='fa fa-plus'></i></a>

                                                                                        </div>
                                                                                    </td>
                                                                                </tr>





                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="container-full">
                                                    <div className="">
                                                        <div className="d-flex align-items-center">

                                                            <div className="mr-auto">
                                                                <h5 className="page-title">Seçilen Alt Ürünler</h5>

                                                            </div>

                                                        </div>

                                                    </div>

                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="box">
                                                                <div className="box-body px-0">
                                                                    <div className="table-responsive rounded card-table">
                                                                        <table className="table border-no" id="example1">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Ürün ID</th>
                                                                                    <th>Ürün Kategorisi</th>
                                                                                    <th>Ürün Alt Kategorisi</th>
                                                                                    <th>Ürün Adı</th>
                                                                                    <th>Fiyatı</th>
                                                                                    <th>Adet</th>
                                                                                    <th></th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr className="hover-primary">
                                                                                    <td>#245879</td>
                                                                                    <td>Pizzalar</td>
                                                                                    <td>1 bucuk</td>
                                                                                    <td>İtalyan Pizza</td>
                                                                                    <td>500</td>

                                                                                    <td>4</td>
                                                                                    <td>
                                                                                        <div className="btn-group">
                                                                                            <a className='btn btn-danger btn-xs' onClick={OnCloseOrderModal}><i className='fa fa-minus'></i></a>

                                                                                        </div>
                                                                                    </td>
                                                                                </tr>

                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                    

                                </div>
                                <div className="modal-footer">
                           
                           <button type="submit" className="btn btn-success text-right" style={{ float: 'right' }}>Ürün Ekle</button>
                       </div>
                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;