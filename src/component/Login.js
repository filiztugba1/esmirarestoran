import React, { useState, useEffect } from 'react';

import axios from 'axios';
function Login() {
    const [credentials, setCredentials] = useState({ tel: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');



    const [openOrderModal, setOpenOrderModal] = useState({
        show: "",
        display: "none",
        ariamodal: false,
    });

    const [cities, setCities] = useState([]); // İl listesi
    const [districts, setDistricts] = useState([]); // İlçe listesi
    const [neighborhoods, setNeighborhoods] = useState([]); // Semt listesi

    const [selectedCity, setSelectedCity] = useState(""); // Seçilen il
    const [selectedDistrict, setSelectedDistrict] = useState(""); // Seçilen ilçe

    const [loading, setLoading] = useState(true);
    const [firm, setFirm] = useState([]);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFirm({ ...firm, [name]: value });
        console.log(name, value);
    };


    const [Sifrem, setSifrem] = useState({
        company_email: ""
    });


    const [openModal, setOpenModal] = useState({
        show: "",
        display: "none",
        ariamodal: false,
    });

    const handleInputChangeee = (e) => {
        const { name, value } = e.target;
        setSifrem((prevSifrem) => ({
            ...prevSifrem, // Önceki değerleri koru
            [name]: value, // Güncellenen alanı değiştir
        }));
        console.log("Güncel sifrem:", { ...Sifrem, [name]: value }); // Konsolda doğru çıktıyı göster
    };
    const [formData, setFormData] = useState({
        company_name: "",
        company_phone: "",
        company_gsm: "",
        company_website: "",
        company_email: "",
        company_city: "",
        company_district: "",
        company_neighborhood: "",
        company_address: "",
        password: ""
    });


    const handleInputChangee = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, // Önceki verileri koru
            [name]: value, // Güncellenen alanı değiştir
        }));
        console.log("Güncel formData:", formData);
    };

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get("http://siparisbankasi.com/city"); // İl listesi API
                setCities(response.data); // İl listesini state'e ata
                console.log(response.data);

            } catch (error) {
                console.error("İl listesi yüklenirken hata oluştu:", error);
            }
        };
        fetchCities();
    }, []);

    // İlçe listesini yükle (il değiştiğinde tetiklenir)
    useEffect(() => {
        if (!selectedCity) return;

        const fetchDistricts = async () => {
            try {
                const response = await axios.post(`http://siparisbankasi.com/district?citycode=${selectedCity}`);
                setDistricts(response.data);
                setNeighborhoods([]);
                setFormData((prevData) => ({
                    ...prevData,
                    company_city: selectedCity, // Doğru alana veri yazılıyor
                }));
            } catch (error) {
                console.error("İlçe listesi yüklenirken hata oluştu:", error);
            }
        };

        fetchDistricts();
    }, [selectedCity]);

    // Semt listesini yükle (ilçe değiştiğinde tetiklenir)
    useEffect(() => {
        if (!selectedDistrict) return;

        const fetchNeighborhoods = async () => {
            try {
                const response = await axios.post(
                    `http://siparisbankasi.com/localy?citycode=${selectedCity}&districtcode=${selectedDistrict}`
                );
                setNeighborhoods(response.data);
                setFormData((prevData) => ({
                    ...prevData,
                    company_district: selectedDistrict, // Doğru alana veri yazılıyor
                }));
            } catch (error) {
                console.error("Semt listesi yüklenirken hata oluştu:", error);
            }
        };

        fetchNeighborhoods();
    }, [selectedDistrict]);
    const OnOpenOrderModal2 = () => {
        setOpenModal({
            show: "show",
            display: "block",
            ariamodal: true,
        });
    };
    const OnCloseOrderModal2 = () => {
        setOpenModal({
            show: "",
            display: "none",
            ariamodal: false,
        });
    };

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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
            ...credentials,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Hata mesajını temizle

        try {
            // Axios ile POST isteği
            const response = await axios.post(
                `http://siparisbankasi.com/Login?tel=${credentials.tel}&password=${credentials.password}`, // URL parametreleriyle dinamik endpoint
                null, // API endpointi

                {
                    headers: {
                        'Content-Type': 'application/json', // JSON formatında gönderim
                    },
                }
            );
            const currentDateTime = new Date().toLocaleString();
            // Giriş başarılı ise AccessToken'ı kaydet
            console.log('Login successful:', response.data);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('tel', credentials.tel);
            localStorage.setItem('sifre', credentials.password);
            localStorage.setItem('giris', 1);

            // Kullanıcıyı yönlendir
            window.location.href = '/Orders'; // Giriş sonrası yönlendirme
        } catch (error) {
            // Hata durumunda mesajı belirle
            console.error('Login error:', error);

            if (error.response) {
                // API'den dönen hata mesajını göster
                setErrorMessage(
                    error.response.data.Message || 'Invalid username or password.'
                );
            } else if (error.request) {
                // Sunucuya ulaşılamadı
                setErrorMessage('Unable to reach the server. Please try again later.');
            } else {
                // Diğer hatalar
                setErrorMessage('An unexpected error occurred.');
            }
        }
    };

    const handleeSubmit = async (e) => {
        e.preventDefault();

        console.log("Gönderilecek formData:", formData);




        try {
            const response = await axios.post(
                'http://siparisbankasi.com/firmsave',

                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            console.log("Firma kayıt başarılı:", response.data);
            alert(response.data);
            OnCloseOrderModal();
        } catch (error) {
            console.error("Firma kayıt hatası:", error);
        }
    };
    const handleeeSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                `http://siparisbankasi.com/Iforgotmypassword?email=${Sifrem.company_email}`
            );
            console.log("Başarılı:", response.data);
            alert(response.data);
            OnCloseOrderModal2();
        } catch (error) {
            console.error("Hata:", error);
            alert(error.response?.data || "Bilinmeyen bir hata oluştu");
            
        }
    };


    return (
        <>
            <div className="container h-p100">
                <div className="row align-items-center justify-content-md-center h-p100">

                    <div className="col-12">
                        <div className="row justify-content-center no-gutters">
                            <div className="col-lg-5 col-md-5 col-12">
                                <div className="bg-white rounded30 shadow-lg">
                                    <div className="content-top-agile p-20 pb-0">
                                        <h2 className="text-primary">SİPARİŞBANKASI</h2>
                                        <p className="mb-0">LÜTFEN GİRİŞ YAPINIZ.</p>
                                    </div>
                                    <div className="p-40">
                                        {/*action="index.html" method="post"*/}
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text bg-transparent"><i className="ti-user"></i></span>
                                                    </div>
                                                    <input type="text" id="tel"
                                                        name="tel"
                                                        value={credentials.tel}
                                                        onChange={handleChange} className="form-control pl-15 bg-transparent" placeholder="Telefon no" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text  bg-transparent"><i className="ti-lock"></i></span>
                                                    </div>
                                                    <input type="password" name="password"
                                                        value={credentials.password}
                                                        onChange={handleChange} className="form-control pl-15 bg-transparent" placeholder="Şifre" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="checkbox">
                                                        <input type="checkbox" id="basic_checkbox_1" />
                                                        <label htmlFor="basic_checkbox_1">Beni Hatırla</label>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <div className="fog-pwd text-right">
                                                        <a href="#" onClick={() => OnOpenOrderModal2()} className="hover-warning"><i className="ion ion-locked"></i> Şifremi unuttum?</a><br />
                                                    </div>
                                                    {/* javascript:void(0) */}
                                                </div>
                                                <div className="col-12 text-center">
                                                    <button type="submit" className="btn btn-danger mt-10">Giriş</button>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <p className="mt-15 mb-0">Hesabınız yok mu? <a href="#" onClick={() => OnOpenOrderModal()} className="text-warning ml-5">Üye ol</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div id="chart"></div>
                                <div className="text-center">
                                    <p className="mt-20 text-white">- Sign With -</p>
                                    <p className="gap-items-2 mb-20">
                                        <a className="btn btn-social-icon btn-round btn-facebook" href="#"><i className="fa fa-facebook"></i></a>
                                        <a className="btn btn-social-icon btn-round btn-twitter" href="#"><i className="fa fa-twitter"></i></a>
                                        <a className="btn btn-social-icon btn-round btn-instagram" href="#"><i className="fa fa-instagram"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`modal fade bs-example-modal-lg ${openOrderModal.show}`}
                style={{ display: openOrderModal.display }}
                aria-modal={openOrderModal.ariamodal}
                role="dialog"
            >
                <div className="modal-dialog modal-xs">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myLargeModalLabel">Yeni Kayıt</h4>
                            <button type="button" className="close" onClick={OnCloseOrderModal}>×</button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleeSubmit}>
                                <div className='row'>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Firma Adı:</label>
                                            <div className="input-group">
                                                <input onChange={handleInputChangee} value={formData.company_name} type="text" name="company_name" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Telefon:</label>
                                            <div className="input-group">
                                                <input onChange={handleInputChangee} value={formData.company_phone} type="text" name="company_phone" className="form-control" />
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Gsm:</label>
                                            <div className="input-group">
                                                <input onChange={handleInputChangee} value={formData.company_gsm} type="text" name="company_gsm" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Şifre:</label>
                                            <div className="input-group">
                                                <input onChange={handleInputChangee} value={formData.password} type="password" name="password" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Web Site:</label>
                                            <div className="input-group">
                                                <input onChange={handleInputChangee} value={formData.company_website} type="text" name="company_website" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>E-Mail:</label>
                                            <div className="input-group">
                                                <input onChange={handleInputChangee} value={formData.company_email} type="text" name="company_email" className="form-control" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Şehir:</label>
                                            <select
                                                className="form-control"
                                                value={selectedCity}
                                                name='company_city'
                                                onChange={(e) => setSelectedCity(e.target.value)}
                                            >
                                                <option value="">İl Seçiniz</option>
                                                {cities.map((city) => (
                                                    <option key={city.city_code} value={city.city_code}>
                                                        {city.city_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>


                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>İlçe:</label>
                                            <select
                                                name='company_district'
                                                className="form-control"
                                                value={selectedDistrict}
                                                onChange={(e) => setSelectedDistrict(e.target.value)}
                                                disabled={!selectedCity} // İl seçilmediyse ilçe seçimi yapılamaz
                                            >
                                                <option value="">İlçe Seçiniz</option>
                                                {districts.map((district) => (
                                                    <option key={district.district_code} value={district.district_code}>
                                                        {district.district_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>



                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Semt:</label>
                                            {/* <select onChange={handleInputChangee}
                                                name='company_neighborhood' value={formData.company_email}
                                                className="form-control"
                                                disabled={!selectedDistrict} // İlçe seçilmediyse semt seçimi yapılamaz
                                            >
                                                <option value="">Semt Seçiniz</option>
                                                {neighborhoods.map((neighborhood) => (
                                                    <option key={neighborhood.localy_code} value={neighborhood.localy_code}>
                                                        {neighborhood.localy_name}
                                                    </option>
                                                ))}
                                            </select> */}

                                            <select
                                                name="company_neighborhood"
                                                value={formData.company_neighborhood} // Doğru alan seçildi
                                                onChange={handleInputChangee}
                                                className="form-control"
                                                disabled={!selectedDistrict}
                                            >
                                                <option value="">Semt Seçiniz</option>
                                                {neighborhoods.map((neighborhood) => (
                                                    <option key={neighborhood.localy_code} value={neighborhood.localy_code}>
                                                        {neighborhood.localy_name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>


                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Adres:</label>
                                            <div className="input-group">
                                                <textarea name='company_address' onChange={handleInputChangee} type="text" className="form-control" >
                                                </textarea>
                                            </div>
                                        </div>
                                    </div>








                                </div>
                                <div className="modal-footer">

                                    <button type="submit" className="btn btn-success text-right" style={{ float: 'right' }}>Kaydet</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
            {/* şifremi unuttum */}

            <div
                className={`modal fade bs-example-modal-lg ${openModal.show}`}
                style={{ display: openModal.display }}
                aria-modal={openModal.ariamodal}
                role="dialog"
            >
                <div className="modal-dialog modal-xs">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myLargeModalLabel">Yeni şifre kullanımı</h4>
                            <button type="button" className="close" onClick={OnCloseOrderModal2}>×</button>
                        </div>
                        <div className="modal-body">

                            <form onSubmit={handleeeSubmit}>
                                <div className='row'>

                                    <div className='col-md-12'>
                                        <div className="form-group">
                                            <label>Email:</label>
                                            <div className="input-group">
                                                <input
                                                    onChange={handleInputChangeee}
                                                    value={Sifrem.company_email} // State'teki `company_email` ile eşleştir
                                                    type="text"
                                                    name="company_email" // `name` key'i state'teki ile aynı
                                                    className="form-control"
                                                />   </div>
                                        </div>
                                    </div>



















                                </div>
                                <div className="modal-footer">

                                    <button type="submit" className="btn btn-success text-right" style={{ float: 'right' }}>Kaydet</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;

