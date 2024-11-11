import React, { useState } from 'react'
function Products() {
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

    const handleSubmit = (e) => {
        e.preventDefault(); // Sayfanın yeniden yüklenmesini önler
        console.log('Form Data:', formData);
        setMessage('Form successfully submitted!');

        // İsteğe göre burada API çağrısı yapabilirsiniz
    };
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
                    <form onSubmit={handleSubmit}>
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
                                                        <option>Alaska</option>
                                                        <option>California</option>
                                                        <option>Delaware</option>
                                                        <option>Tennessee</option>
                                                        <option>Texas</option>
                                                        <option>Washington</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='col-md-2'>
                                                <div className="form-group">
                                                    <label>Ürün Durum</label>
                                                    <select className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Seçiniz</option>
                                                        <option>Aktif</option>
                                                        <option>Pasif</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='col-md-2' style={{ paddingLeft: 0 }}>
                                                        <button type="button" className="btn btn-success btn-sm mt-25" onClick={() => OnOpenOrderModal()}>
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


                    <section class="content">
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
                    </section>
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
                            <h4 className="modal-title" id="myLargeModalLabel">Yeni Ürün</h4>
                            <button type="button" className="close" onClick={OnCloseOrderModal}>×</button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                <div className='col-md-4'>
                                                <div className="form-group">
                                                    <label>Ürün Kategorisi:</label>
                                                    <select className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Seçiniz</option>
                                                        <option>Alaska</option>
                                                        <option>California</option>
                                                        <option>Delaware</option>
                                                        <option>Tennessee</option>
                                                        <option>Texas</option>
                                                        <option>Washington</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                            <div className="form-group">
                                                    <label>Ürün Alt Kategorisi:</label>
                                                    <select className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Seçiniz</option>
                                                        <option>Alaska</option>
                                                        <option>California</option>
                                                        <option>Delaware</option>
                                                        <option>Tennessee</option>
                                                        <option>Texas</option>
                                                        <option>Washington</option>
                                                    </select>
                                                </div>
                                            </div>


                                            <div className='col-md-4'>
                                                        <div className="form-group">
                                                            <label>Ürün Sırası:</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

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
                                                            <label>Ürün Barkodu:</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-md-4">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Ürün Durumu</label>
										<div class="radio-list">
											<label class="radio-inline p-0 mr-10">
												<div class="radio radio-info">
													<input type="radio" name="radio" id="radio1" value="option1"/>
													<label for="radio1">Aktif</label>
												</div>
											</label>
											<label class="radio-inline">
												<div class="radio radio-info">
													<input type="radio" name="radio" id="radio2" value="option2"/>
													<label for="radio2">Pasif</label>
												</div>
											</label>
										</div>
									</div>
								</div>

                                                    <div class="col-md-4">
									<div class="form-group">
										<label class="font-weight-700 font-size-16">Ürün Fiyatı:</label>
										<div class="input-group">
											<div class="input-group-addon">TL</div>
											<input type="text" class="form-control" placeholder="270" /> </div>
									</div>
								</div>

                                                    <div className='col-md-4'>
                                                    <div class="form-group">
                                                        <label class="col-form-label">Ürün Resim</label>
                                                       
                                                            <div class="custom-file">
                                                                <input type="file" class="custom-file-input" id="customFile" />
                                                                <label class="custom-file-label" for="customFile">Görsel Seçiniz</label>
                                                            </div>
                                                       
                                                    </div> 
                                                    </div>
                                                    <div className='col-md-8'>
                                                        <div className="form-group">
                                                            <label>Ürün Detay:</label>
                                                            <div className="input-group">
                                                                <textarea type="text" className="form-control" ></textarea> 
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
                            </form>
                        </div>
                        <div className="modal-footer">
                           
                            <button type="button" className="btn btn-success text-right" style={{ float: 'right' }}>Ürün Ekle</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;