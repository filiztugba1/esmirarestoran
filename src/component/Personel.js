import React, { useState } from 'react'
function Personel() {
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
                                <h3 className="page-title">Personeller</h3>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                                            <li className="breadcrumb-item" aria-current="page">Personeller</li>
                                            {/* <li className="breadcrumb-item active" aria-current="page">Sipariş Listesi</li> */}
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <button type="button" className="btn btn-success" onClick={() => OnOpenOrderModal()}>
                                Personel Ekle
                            </button>
                        </div>

                    </div>

                    <section className="content" style={{ minHeight: "auto" }}>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="box">
                                        <div className="box-body px-0">

                                            <div className='col-12'>
                                                <h5>Personel Arama</h5>
                                                <hr />
                                                <div className='row'>


                                                    <div className='col-md-4'>
                                                        <div className="form-group">
                                                            <label>Adı:</label>
                                                            <div className="input-group">
                                                                <div className="input-group-addon">
                                                                    <i className="fa fa-user"></i>
                                                                </div>
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-3'>
                                                        <div className="form-group">
                                                            <label>Personel Tipi:</label>
                                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                                <option selected="selected">Müdür</option>
                                                                <option>Kurye</option>
                                                                <option>Getir Kurye</option>
                                                                <option>Migros Kurye</option>
                                                                <option>Yemek Sepeti Kurye</option>
                                                                <option>Kasiyer</option>
                                                                <option>Uzak Kurye</option>
                                                            </select>
                                                        </div>
                                                    </div>


                                                    <div className='col-md-3'>
                                                        <div className="form-group">
                                                            <label>Çalışma Durumu:</label>
                                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                                <option selected="selected">Tümü</option>
                                                                <option>Çalışıyor</option>
                                                                <option>Çalışmıyor</option>
                                                            </select>
                                                        </div>
                                                    </div>


                                                    <div className='col-md-2' style={{ paddingLeft: 0 }}>
                                                        <button type="button" className="btn btn-success btn-sm mt-25" onClick={() => OnOpenOrderModal()}>
                                                            Personel Ara
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
                            <div class="col-lg-12 col-md-12">
                                <div class="box">
                                    <div class="media-list media-list-divided media-list-hover">
                                        <div class="media align-items-center">
                                            <span class="badge badge-dot badge-danger"></span>
                                            <a class="avatar avatar-lg status-success" href="#">
                                                <img src="../images/avatar/1.jpg" alt="..." />
                                            </a>

                                            <div class="media-body">
                                                <p>
                                                    <a href="#"><strong>Aaron</strong></a>
                                                    <small class="sidetitle">Online</small>
                                                </p>
                                                <p>Designer</p>

                                                <nav class="nav mt-2">
                                                    <a class="nav-link" href="#"><i class="fa fa-facebook"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-twitter"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-github"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-linkedin"></i></a>
                                                </nav>
                                            </div>

                                            <div class="media-right gap-items">
                                                <a class="media-action lead" href="#" data-toggle="tooltip" title="" data-original-title="Orders"><i class="ti-shopping-cart"></i></a>
                                                <a class="media-action lead" href="#" data-toggle="tooltip" title="" data-original-title="Receipts"><i class="ti-receipt"></i></a>

                                                <div class="btn-group">
                                                    <a class="media-action lead" href="#" data-toggle="dropdown"><i class="ion-android-more-vertical"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-comments"></i> Messages</a>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-remove"></i> Remove</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="media align-items-center">
                                            <span class="badge badge-dot badge-warning"></span>
                                            <a class="avatar avatar-lg" href="#">
                                                <img src="../images/avatar/2.jpg" alt="..." />
                                            </a>

                                            <div class="media-body">
                                                <p>
                                                    <a href="#"><strong>Isaiah</strong></a>
                                                    <small class="sidetitle">Last seen: 2 hours ago</small>
                                                </p>
                                                <p>Full Stack Developer</p>

                                                <nav class="nav mt-2">
                                                    <a class="nav-link" href="#"><i class="fa fa-facebook"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-twitter"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-github"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-linkedin"></i></a>
                                                </nav>
                                            </div>

                                            <div class="media-right gap-items">
                                                <a class="media-action lead" href="#" data-toggle="tooltip" title="" data-original-title="Orders"><i class="ti-shopping-cart"></i></a>
                                                <a class="media-action lead" href="#" data-toggle="tooltip" title="" data-original-title="Receipts"><i class="ti-receipt"></i></a>
                                                <div class="btn-group">
                                                    <a class="media-action lead" href="#" data-toggle="dropdown"><i class="ion-android-more-vertical"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-comments"></i> Messages</a>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-remove"></i> Remove</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="media align-items-center">
                                            <span class="badge badge-dot badge-success"></span>
                                            <a class="avatar avatar-lg status-warning" href="#">
                                                <img src="../images/avatar/3.jpg" alt="..." />
                                            </a>

                                            <div class="media-body">
                                                <p>
                                                    <a href="#"><strong>Cameron</strong></a>
                                                    <small class="sidetitle">Last seen: 12 min ago</small>
                                                </p>
                                                <p>Support Agent</p>

                                                <nav class="nav mt-2">
                                                    <a class="nav-link" href="#"><i class="fa fa-facebook"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-twitter"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-github"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-linkedin"></i></a>
                                                </nav>
                                            </div>

                                            <div class="media-right gap-items">
                                                <a class="media-action lead" href="#" data-toggle="tooltip" title="" data-original-title="Orders"><i class="ti-shopping-cart"></i></a>
                                                <a class="media-action lead" href="#" data-toggle="tooltip" title="" data-original-title="Receipts"><i class="ti-receipt"></i></a>
                                                <div class="btn-group">
                                                    <a class="media-action lead" href="#" data-toggle="dropdown"><i class="ion-android-more-vertical"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-comments"></i> Messages</a>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-remove"></i> Remove</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                        <div class="media align-items-center">
                                            <span class="badge badge-dot badge-danger"></span>
                                            <a class="avatar avatar-lg status-success" href="#">
                                                <img src="../images/avatar/4.jpg" alt="..." />
                                            </a>

                                            <div class="media-body">
                                                <p>
                                                    <a href="#"><strong>Eli</strong></a>
                                                    <small class="sidetitle">Online</small>
                                                </p>
                                                <p>Support Agent</p>

                                                <nav class="nav mt-2">
                                                    <a class="nav-link" href="#"><i class="fa fa-facebook"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-twitter"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-github"></i></a>
                                                    <a class="nav-link" href="#"><i class="fa fa-linkedin"></i></a>
                                                </nav>
                                            </div>

                                            <div class="media-right gap-items">
                                                <a class="media-action lead" href="#" data-toggle="tooltip" title="" data-original-title="Orders"><i class="ti-shopping-cart"></i></a>
                                                <a class="media-action lead" href="#" data-toggle="tooltip" title="" data-original-title="Receipts"><i class="ti-receipt"></i></a>
                                                <div class="btn-group">
                                                    <a class="media-action lead" href="#" data-toggle="dropdown"><i class="ion-android-more-vertical"></i></a>
                                                    <div class="dropdown-menu dropdown-menu-right">
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-user"></i> Profile</a>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-comments"></i> Messages</a>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-phone"></i> Call</a>
                                                        <div class="dropdown-divider"></div>
                                                        <a class="dropdown-item" href="#"><i class="fa fa-fw fa-remove"></i> Remove</a>
                                                    </div>
                                                </div>

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
                <div className="modal-dialog modal-ml">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myLargeModalLabel">Personel Ekle</h4>
                            <button type="button" className="close" onClick={OnCloseOrderModal}>×</button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <div className='row'>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Personel Adı Soyadı:</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Cinsiyet:</label>
                                            <div class="form-group ichack-input form-radio-style">
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" checked />
                                                    Kadın
                                                </label>
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Erkek
                                                </label>

                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Telefon:</label>
                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask="'mask':[ '(999) 999-9999']" data-mask />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Personel Şifre:</label>
                                            <div className="input-group">
                                                <div className="input-group-addon">
                                                    <i className="fa fa-phone"></i>
                                                </div>
                                                <input type="text" className="form-control" data-inputmask="'mask':[ '(999) 999-9999']" data-mask />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Personel Tipi:</label>
                                            <div class="form-group ichack-input form-radio-style">
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" checked />
                                                    Yönetici
                                                </label>
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Kurye
                                                </label>
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Garson
                                                </label>

                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Kasiyer
                                                </label>
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Mutfak
                                                </label>

                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Genel
                                                </label>

                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Uzak Kurye
                                                </label>

                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Fiyuu Kurye
                                                </label>
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Maxijet Kurye
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Çalışma Durumu:</label>
                                            <div class="form-group ichack-input form-radio-style">
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" checked />
                                                    Çalışıyor
                                                </label>
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Çalışmıyor
                                                </label>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Uygulama Durumu:</label>
                                            <div class="form-group ichack-input form-radio-style">
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" checked />
                                                    Var
                                                </label>
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Yok
                                                </label>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Numaralar Gönderilsin:</label>
                                            <div class="form-group ichack-input form-radio-style">
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" checked />
                                                    Evet
                                                </label>
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Hayır
                                                </label>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Otomatik Sipariş Atama:</label>
                                            <div class="form-group ichack-input form-radio-style">
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" checked />
                                                    Evet
                                                </label>
                                                <label className='mr-2'>
                                                    <input type="radio" name="r3" class="flat-red" />
                                                    Hayır
                                                </label>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Adres:</label>
                                            <div className="input-group">
                                                <textarea className="form-control" ></textarea>
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

export default Personel;