import React, { useState } from 'react'
function Members() {
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
                                <h3 className="page-title">Üyeler</h3>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                                            <li className="breadcrumb-item" aria-current="page">Üyeler</li>
                                            {/* <li className="breadcrumb-item active" aria-current="page">Sipariş Listesi</li> */}
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <button type="button" className="btn btn-success" onClick={() => OnOpenOrderModal()}>
                                Üye Ekle
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
                                                <h5>Üye Arama</h5>
                                                <hr />
                                                <div className='row'>
                                                    <div className='col-md-5'>
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



                                                    <div className='col-md-5'>
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

                                                    <div className='col-md-2' style={{ paddingLeft: 0 }}>
                                                        <button type="button" className="btn btn-success btn-sm mt-25" onClick={() => OnOpenOrderModal()}>
                                                            Üye Ara
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

                            <div class="col-12">
                                <h4 class="mt-30">Top Agent</h4>
                                <hr />
                            </div>

                            <div class="col-12 col-lg-3">
                                <div class="box ribbon-box">
                                    <div class="ribbon-two ribbon-two-primary"><span>CEO</span></div>
                                    <div class="box-header no-border p-0">
                                        <a href="#">
                                            <img class="img-fluid" src="../images/avatar/375x200/1.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div class="box-body">
                                        <div class="user-contact list-inline text-center">
                                            <a href="#" class="btn btn-circle mb-5 btn-facebook"><i class="fa fa-facebook"></i></a>
                                            <a href="#" class="btn btn-circle mb-5 btn-instagram"><i class="fa fa-instagram"></i></a>
                                            <a href="#" class="btn btn-circle mb-5 btn-twitter"><i class="fa fa-twitter"></i></a>
                                            <a href="#" class="btn btn-circle mb-5 btn-warning"><i class="fa fa-envelope"></i></a>
                                        </div>
                                        <div class="text-center">
                                            <h3 class="my-10"><a href="#">Tristan</a></h3>
                                            <h6 class="user-info mt-0 mb-10 text-fade">Designer</h6>
                                            <p class="text-fade w-p85 mx-auto">125 Ipsum Lorem Ave, Suite 458 New York, USA 154875 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="box ribbon-box">
                                    <div class="ribbon-two ribbon-two-danger"><span>MD</span></div>
                                    <div class="box-header no-border p-0">
                                        <a href="#">
                                            <img class="img-fluid" src="../images/avatar/375x200/2.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div class="box-body">
                                        <div class="text-center">
                                            <div class="user-contact list-inline text-center">
                                                <a href="#" class="btn btn-circle mb-5 btn-facebook"><i class="fa fa-facebook"></i></a>
                                                <a href="#" class="btn btn-circle mb-5 btn-instagram"><i class="fa fa-instagram"></i></a>
                                                <a href="#" class="btn btn-circle mb-5 btn-twitter"><i class="fa fa-twitter"></i></a>
                                                <a href="#" class="btn btn-circle mb-5 btn-warning"><i class="fa fa-envelope"></i></a>
                                            </div>
                                            <h3 class="my-10"><a href="#">Sophia</a></h3>
                                            <h6 class="user-info mt-0 mb-10 text-fade">Full Stack Developer</h6>
                                            <p class="text-fade w-p85 mx-auto">125 Ipsum Lorem Ave, Suite 458 New York, USA 154875 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="box ribbon-box">
                                    <div class="ribbon-two ribbon-two-success"><span>Owner</span></div>
                                    <div class="box-header no-border p-0">
                                        <a href="#">
                                            <img class="img-fluid" src="../images/avatar/375x200/3.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div class="box-body">
                                        <div class="text-center">
                                            <div class="user-contact list-inline text-center">
                                                <a href="#" class="btn btn-circle mb-5 btn-facebook"><i class="fa fa-facebook"></i></a>
                                                <a href="#" class="btn btn-circle mb-5 btn-instagram"><i class="fa fa-instagram"></i></a>
                                                <a href="#" class="btn btn-circle mb-5 btn-twitter"><i class="fa fa-twitter"></i></a>
                                                <a href="#" class="btn btn-circle mb-5 btn-warning"><i class="fa fa-envelope"></i></a>
                                            </div>
                                            <h3 class="my-10"><a href="#">Jacob</a></h3>
                                            <h6 class="user-info mt-0 mb-10 text-fade">Support Agent</h6>
                                            <p class="text-fade w-p85 mx-auto">125 Ipsum Lorem Ave, Suite 458 New York, USA 154875 </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3">
                                <div class="box">
                                    <div class="box-header no-border p-0">
                                        <a href="#">
                                            <img class="img-fluid" src="../images/avatar/375x200/4.jpg" alt="" />
                                        </a>
                                    </div>
                                    <div class="box-body">
                                        <div class="text-center">
                                            <div class="user-contact list-inline text-center">
                                                <a href="#" class="btn btn-circle mb-5 btn-facebook"><i class="fa fa-facebook"></i></a>
                                                <a href="#" class="btn btn-circle mb-5 btn-instagram"><i class="fa fa-instagram"></i></a>
                                                <a href="#" class="btn btn-circle mb-5 btn-twitter"><i class="fa fa-twitter"></i></a>
                                                <a href="#" class="btn btn-circle mb-5 btn-warning"><i class="fa fa-envelope"></i></a>
                                            </div>
                                            <h3 class="my-10"><a href="#">Isabella</a></h3>
                                            <h6 class="user-info mt-0 mb-10 text-fade">Designer</h6>
                                            <p class="text-fade w-p85 mx-auto">125 Ipsum Lorem Ave, Suite 458 New York, USA 154875 </p>
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
                            <h4 className="modal-title" id="myLargeModalLabel">Üye Ekle</h4>
                            <button type="button" className="close" onClick={OnCloseOrderModal}>×</button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Üye Grup:</label>
                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                <option selected="selected">Normal</option>
                                                <option>Trentyol</option>
                                                <option>Getir Yemek</option>
                                                <option>Migros yemek</option>
                                                <option>Yemk sepeti</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Üye Kartı:</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Ad Soyad:</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Firma:</label>
                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                <option selected="selected">Normal</option>
                                                <option>Trentyol</option>
                                                <option>Getir Yemek</option>
                                                <option>Migros yemek</option>
                                                <option>Yemk sepeti</option>
                                            </select>
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
                                            <label>E-Posta:</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Açıklama:</label>
                                            <div className="input-group">
                                                <textarea className="form-control" ></textarea>
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

                                    <div className='col-md-12'>
                                                        <div className="form-group">
                                                            <label>İl</label>
                                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                                <option selected="selected">Alabama</option>
                                                                <option>Alaska</option>
                                                                <option>California</option>
                                                                <option>Delaware</option>
                                                                <option>Tennessee</option>
                                                                <option>Texas</option>
                                                                <option>Washington</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className="form-group">
                                                            <label>İlçe</label>
                                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                                <option selected="selected">Alabama</option>
                                                                <option>Alaska</option>
                                                                <option>California</option>
                                                                <option>Delaware</option>
                                                                <option>Tennessee</option>
                                                                <option>Texas</option>
                                                                <option>Washington</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-12'>
                                                        <div className="form-group">
                                                            <label>Semt</label>
                                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                                <option selected="selected">Alabama</option>
                                                                <option>Alaska</option>
                                                                <option>California</option>
                                                                <option>Delaware</option>
                                                                <option>Tennessee</option>
                                                                <option>Texas</option>
                                                                <option>Washington</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-12'>
                                                        <div className="form-group">
                                                            <label>Adres Açıklama</label>
                                                            <textarea className="form-control" name="newAdres"></textarea>

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

export default Members;