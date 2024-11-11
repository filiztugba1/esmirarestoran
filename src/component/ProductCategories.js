import React, { useState } from 'react'
function ProductCategories() {
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
                                <h3 className="page-title">Ürün Kategorileri</h3>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                                            <li className="breadcrumb-item" aria-current="page">Ürün Kategorileri</li>
                                            {/* <li className="breadcrumb-item active" aria-current="page">Sipariş Listesi</li> */}
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <button type="button" className="btn btn-success" onClick={() => OnOpenOrderModal()}>
                            Ürün Kategorisi Ekle
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
                                    <h5>Ürün Kategorisi Arama</h5>
                                    <hr/>
                                    <div className='row'>
                                    <div className='col-md-5'>
                                                        <div className="form-group">
                                                            <label>Kattegori Adı:</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                             

                                            <div className='col-md-5'>
                                                <div className="form-group">
                                                    <label>Kategori Durum</label>
                                                    <select className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Seçiniz</option>
                                                        <option>Aktif</option>
                                                        <option>Pasif</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='col-md-2' style={{ paddingLeft: 0 }}>
                                                        <button type="button" className="btn btn-success btn-sm mt-25" onClick={() => OnOpenOrderModal()}>
                                                            Kategori Ara
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
            <div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/sandwich.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Sandwich</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Burger"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/salads.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Salads</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Carrot"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/burgers.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Burgers</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Burger"><span class="path1"></span><span class="path2"></span><span class="path3"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/pizza.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Pizza's</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Pizza"></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/soups.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Soups</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Miso-soup"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/main.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Main Course</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Dinner1"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/noodles.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Noodles</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Sushi"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/rice.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Rice</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Miso-soup"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/starters.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Starters</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Fish"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
                <div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/subziyan.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Subziyan</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Miso-soup"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/dals.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Dals</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Miso-soup"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/breads.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Breads</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-French-Bread"></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/biryanis.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Pulao / Biryanis</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Miso-soup"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/dessert.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Dessert</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Ice-cream1"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
                <div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/mocktails.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Smoothies &amp; Mocktails</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Wine"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
									</div>
								</div>
							</div>
						</div>							
					</div>
				</div>
				<div class="col-xxxl-4 col-xl-4 col-lg-4 col-6">
					<div class="box overflow-h">
						<div class="box-body p-0">
							<div>
								<img class="rounded img-fluid" src="../images/food/icecream.jpg" alt="" />
							</div>
						</div>
						<div class="box-body">
							<div class="info-content">
								<h4 class="mb-10 mt-0">Ice Cream</h4>
								<div class="d-flex justify-content-between align-items-center">
									<h4 class="mb-0 text-primary">$6.53 to $10.99</h4>
									<div class="d-flex align-items-center">	
										<span class="font-size-18 mx-10 text-primary icon-Ice-cream"><span class="path1"></span><span class="path2"></span></span>
										<h5 class="text-black mb-0">12 Item</h5>
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
                            <h4 className="modal-title" id="myLargeModalLabel">Yeni Ürün Kategorisi Ekle</h4>
                            <button type="button" className="close" onClick={OnCloseOrderModal}>×</button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                <div className='col-md-12'>
                                                <div className="form-group">
                                                    <label>Ürün Kategorisi:</label>
                                                    <select className="form-control select2" style={{ width: "100%" }}>
                                                        <option selected="selected">Ana Kategori</option>
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
                                                            <label>Kategori Sırası:</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className='col-md-12'>
                                                        <div className="form-group">
                                                            <label>Kategori Adı:</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                 

                                
                                                    <div className='col-md-12'>
                                                    <div class="form-group">
                                                        <label class="col-form-label">Kategori Resim</label>
                                                       
                                                            <div class="custom-file">
                                                                <input type="file" class="custom-file-input" id="customFile" />
                                                                <label class="custom-file-label" for="customFile">Görsel Seçiniz</label>
                                                            </div>
                                                       
                                                    </div> 
                                                    </div>
                                                    <div className='col-md-12'>
                                                        <div className="form-group">
                                                            <label>Kategori Açıklama:</label>
                                                            <div className="input-group">
                                                                <textarea type="text" className="form-control" ></textarea> 
                                                            </div>
                                                        </div>
                                                    </div>

                                                  

                                              

                                                   
                                                        <div className="col-12">
                     
                                                            <div className="box">
                                                            
                                                                <div className="box-body px-0">
                                                               
                                                                <div className="col-12">
                                                                     <h5 className="page-title">Seçilen Kategorinin Alt Kategorileri</h5>
                                                                     </div>
                                                                    <div className="table-responsive rounded card-table">
                                                                        <table className="table border-no" id="example1">
                                                                            <thead>
                                                                                <tr>
                                                                                    <th>Kategori Adı</th>
                                                                                    <th>Kategori Sırası</th>
                                                                                    <th>Kategori Durumu</th>
                                                                                    <th></th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr className="hover-primary">
                                                                                  
                                                                                    <td>1 bucuk</td>
                                                                                    <td>1</td>
                                                                                    <td>Aktif</td>
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

export default ProductCategories;