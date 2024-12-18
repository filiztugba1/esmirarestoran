

import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
function Orders() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const fetchData = async () => {
        const token = localStorage.getItem('token'); // Token'ı localStorage'dan al

        try {
            const response = await axios.get('http://siparisbankasi.com/orders', {
                headers: {
                    Authorization: `Bearer ${token}`, // Bearer Token başlığı ekle
                },

            });
            console.log('Data:', response.data);
            console.log('Status:', response.status);
            setData(response.data); // Gelen veriyi tablo için sakla
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            const status = error.status;
            console.log("eeeee="+status);
           
            setLoading(false);
            if (status === 401 || status === 400 || status===undefined) {
                window.location.href = '/Login';
                localStorage.setItem('giris', 0);
            }
        }
    };

    fetchData();
}, []);


    const columns = [
        {
            name: 'Sipariş id',
            selector: row => row.orderid,
            sortable: true, // Sıralanabilir
        },
        {
            name: 'Sipariş türü',
            selector: row => row.ordertype,
            sortable: true,
        },
        {
            name: 'Teslim zamanı',
            selector: row => row.deliverytime,
            sortable: true,
        },
        {
            name: 'Telefon',
            selector: row => row.userphone,
            sortable: true,
        },

        {
            name: 'Tutar',
            selector: row => row.generalamount,
            sortable: true,
        },

        {
            name: 'Ödeme tipi',
            selector: row => row.paymentcode,
            sortable: true,
        },

        {
            name: 'Üye',
            selector: row => row.username,
            sortable: true,
        },

        {
            name: 'Kurye',
            selector: row => row.namesurname,
            sortable: true,
        },
        {
            name: 'Durum',
            selector: row => row.courieroperation,
            sortable: true,
        },

        {
            name: 'Adres',
            selector: row => row.address,
            sortable: true,
        },

        {
            name: 'Tarih',
            selector: row => row.paymenttime,
            sortable: true,
        },
    ];




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
                                <h3 className="page-title">Siparişler</h3>
                                <div className="d-inline-block align-items-center">
                                    <nav>
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                                            <li className="breadcrumb-item" aria-current="page">Siparişler</li>
                                            {/* <li className="breadcrumb-item active" aria-current="page">Sipariş Listesi</li> */}
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                            <button type="button" className="btn btn-success" onClick={() => OnOpenOrderModal()}>
                                Sipariş Ekle
                            </button>
                        </div>

                    </div>
                    <section className="content">
                        <div className="row">
                            <div className="col-12">
                                <div className="box">
                                    <div className="box-body px-0">
                                        <div className="table-responsive rounded card-table">
                                            <DataTable
                                                columns={columns} // Tablo kolonları
                                                data={data} // Çekilen veri
                                                pagination // Sayfalandırmayı etkinleştir
                                                highlightOnHover // Satır üzerine gelince vurgula
                                            />
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
                            <h4 className="modal-title" id="myLargeModalLabel">Yeni Sipariş</h4>
                            <button type="button" className="close" onClick={OnCloseOrderModal}>×</button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col-md-9 modal-content-1'>
                                        <h5>Üye seçiniz</h5>
                                        <hr />
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='row'>
                                                    <div className='col-md-9'>
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
                                                    <div className='col-md-3' style={{ paddingLeft: 0 }}>
                                                        <button type="button" className="btn btn-success btn-xs mt-30" onClick={() => OnOpenOrderModal()}>
                                                            <i className='fa fa-search'></i>
                                                        </button>
                                                    </div>


                                                </div>
                                            </div>

                                            <div className='col-md-6'>
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
                                            <div className='col-md-12'>
                                                <div className="form-group">
                                                    <label>Adres Seç</label>
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

                                            <div className='col-md-12'>
                                                <div className='row'>

                                                    <div className='col-md-6'>
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
                                                    <div className='col-md-6'>
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
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>Adres Açıklama</label>
                                                            <textarea className="form-control" name="newAdres"></textarea>

                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className="form-group">
                                                            <label>Yeni Adres:</label>
                                                            <div className="input-group">
                                                                <textarea className="form-control" name="newAdres"></textarea>
                                                            </div>
                                                        </div>
                                                    </div>



                                                </div>
                                                <hr />


                                                <div className="container-full">
                                                    <div className="">
                                                        <div className="d-flex align-items-center">

                                                            <div className="mr-auto">
                                                                <h5 className="page-title">Ürün Seçiniz</h5>

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
                                                                <h5 className="page-title">Seçilen Ürünler</h5>

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



                                        </div>
                                    </div>
                                    <div className='col-md-3' style={{ padding: 10, background: "#ddd", borderRadius: 5 }}>
                                        <div className="form-group">
                                            <label className="col-form-label ">Sipariş Detay Teslim Saati</label>

                                            <input className="form-control" type="datetime-local" name="datetime" />

                                        </div>

                                        <div className="form-group">
                                            <label className="col-form-label ">Sipariş Tutarı</label>

                                            <input className="form-control" type="number" name="tutar" /> TL

                                        </div>

                                        <div className="form-group">
                                            <label className="col-form-label ">İskonto İndirim</label>

                                            <input className="form-control" type="number" name="tutar" />

                                            <div className="form-group ichack-input">
                                                <label>
                                                    <input type="radio" name="r3" className="flat-red" checked />
                                                    TL
                                                </label>
                                                <label>
                                                    <input type="radio" name="r3" className="flat-red" />
                                                    %yüzde
                                                </label>
                                            </div>


                                        </div>


                                        <div className="form-group">
                                            <label className="col-form-label ">İskonto İndirim</label>

                                            <input className="form-control" type="number" name="tutar" />

                                            <div className="form-group ichack-input">

                                                <label>
                                                    <input type="checkbox" name="r3" className="flat-red" />
                                                    Veresiye
                                                </label>
                                            </div>


                                        </div>

                                        <div className="form-group">
                                            <label>Ödeme Tipi</label>
                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                <option selected="selected">Nakit</option>
                                                <option>Kredi kartı</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Ödeme Durumu</label>
                                            <select className="form-control select2" style={{ width: "100%" }}>
                                                <option selected="selected">Ödedi</option>
                                                <option>Ödemedi</option>
                                            </select>
                                        </div>

                                        <div className="form-group">
                                            <label>Para Üstü</label>
                                            <input className="form-control" type="text" /> TL
                                        </div>

                                        <div className="form-group">
                                            <label>Sipariş Notu</label>
                                            <textarea className="form-control" name="r3" ></textarea>
                                        </div>

                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-success text-right" style={{ float: 'right' }}>Sipariş Onay</button>
                            <button type="button" className="btn btn-primary text-right" style={{ float: 'right' }}>Sipariş Yazdır</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;