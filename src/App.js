import React from 'react';
import './App.css';
import Layout from './layout/Layout';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Orders from './component/Orders';
import Products from './component/Products';
import Members from './component/Members';
import Personel from './component/Personel';

// Yeni Layout bileşeni
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const accessToken = localStorage.getItem('token');
  const giris = localStorage.getItem('giris');
  console.log("Token: " + accessToken);

  return (
    <BrowserRouter>
      {giris==1 ? (
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/members" element={<Members />} />
            <Route path="/personel" element={<Personel />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      ) : (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
