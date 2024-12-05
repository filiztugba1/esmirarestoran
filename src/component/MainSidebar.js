import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router'dan Link kullanıyoruz.

function MainSidebar() {
  const [openMenus, setOpenMenus] = useState({
    product: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <aside className="main-sidebar">
      <section className="sidebar position-relative">
        <div className="multinav">
          <div className="multinav-scroll" style={{ height: "100%" }}>
            <ul className="sidebar-menu" data-widget="tree">
              <li>
                <Link to="/">
                  <i className="icon-Home"></i>
                  <span>Anasayfa</span>
                </Link>
              </li>

              <li>
                <Link to="/orders">
                  <i className="icon-Clipboard-check"></i>
                  <span>Siparişler</span>
                </Link>
              </li>

              <li
                className={`treeview ${openMenus.product ? "menu-open" : ""}`}
                onClick={() => toggleMenu("product")}
              >
                <a href="#">
                  <i className="icon-Clipboard-check"></i>
                  <span>Ürünler</span>
                  <span className="pull-right-container">
                    <i
                      className={`fa fa-angle-${
                        openMenus.product ? "down" : "right"
                      } pull-right`}
                    ></i>
                  </span>
                </a>
                <ul
                  className="treeview-menu"
                  style={{ display: openMenus.product ? "block" : "none" }}
                >
                  <li>
                    <Link to="/products">
                      <i className="icon-Commit"></i>Ürünler
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories">
                      <i className="icon-Commit"></i>Ürün Kategorileri
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/members">
                  <i className="icon-Group"></i>
                  <span>Üyeler</span>
                </Link>
              </li>

              <li>
                <Link to="/personel">
                  <i className="icon-User"></i>
                  <span>Personeller</span>
                </Link>
              </li>

              <li>
                <Link to="/tables">
                  <i className="icon-Dinner"></i>
                  <span>Masalar</span>
                </Link>
              </li>

              <li>
                <Link to="/settings">
                  <i className="icon-Settings"></i>
                  <span>Ayarlar</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </aside>
  );
}

export default MainSidebar;
