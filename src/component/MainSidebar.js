import React, { useState }  from 'react' 
function MainSidebar() {
	const [openMenus, setOpenMenus] = useState({
		order: false,
		menus: false,
		customer: false,
		product:false
	  });
	  const toggleMenu = (menu) => {
		setOpenMenus((prevState) => ({
		  ...prevState,
		  [menu]: !prevState[menu],  // Menü durumunu tersine çevir
		}));
	  };
	
    return (
		<aside className="main-sidebar">
		<section className="sidebar position-relative">	
		  <div className="multinav">
			  <div className="multinav-scroll" style={{height: "100%"}}>	
				  <ul className="sidebar-menu" data-widget="tree">
					<li>
					  <a href="index.html">
						<i className="icon-Home"></i>
						<span>Anasayfa</span>
					  </a>
					</li>

					<li>
					  <a href="index.html">
						<i className="icon-Home"></i>
						<span>Siparişler</span>
					  </a>
					</li>

					<li  className={`treeview ${openMenus.product ? 'menu-open' : ''}`}  onClick={() => toggleMenu('product')}>
						<a href="#">
							<i className="icon-Clipboard-check"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i>
							<span>Ürünler</span>
							<span className="pull-right-container">
							<i className="fa fa-angle-right pull-right"></i>
							</span>
						</a>
						<ul  className="treeview-menu"  style={{ display: openMenus.product ? 'block' : 'none' }}>
							<li><a href="order.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ürünler</a></li>
							<li><a href="order_details.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Ürün Kategorileri</a></li>
						</ul>
					</li>


					<li>
					  <a href="index.html">
						<i className="icon-Home"></i>
						<span>Üyeler</span>
					  </a>
					</li>

					<li>
					  <a href="index.html">
						<i className="icon-Home"></i>
						<span>Personeller</span>
					  </a>
					</li>

					<li>
					  <a href="index.html">
						<i className="icon-Home"></i>
						<span>Masalar</span>
					  </a>
					</li>

					{/* <li>
					  <a href="index.html">
						<i className="icon-Home"></i>
						<span>Kuryeler</span>
					  </a>
					</li> */}

					<li>
					  <a href="index.html">
						<i className="icon-Home"></i>
						<span>Ayarlar</span>
					  </a>
					</li>

					


					{/* <li  className={`treeview ${openMenus.order ? 'menu-open' : ''}`}  onClick={() => toggleMenu('order')}>
						<a href="#">
							<i className="icon-Clipboard-check"><span className="path1"></span><span className="path2"></span><span className="path3"></span></i>
							<span>Order</span>
							<span className="pull-right-container">
							<i className="fa fa-angle-right pull-right"></i>
							</span>
						</a>
						<ul  className="treeview-menu"  style={{ display: openMenus.order ? 'block' : 'none' }}>
							<li><a href="order.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Order List</a></li>
							<li><a href="order_details.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Order Details</a></li>
						</ul>
					</li>
					<li className="treeview">
					  <a href="#">
						<i className="icon-Dinner"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span><span className="path5"></span></i>
						<span>Menus</span>
						<span className="pull-right-container">
						  <i className="fa fa-angle-right pull-right"></i>
						</span>
					  </a>
					  <ul className="treeview-menu">
						<li><a href="add_new_menu.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Add New Menu</a></li>
						<li><a href="menu_list.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Menu List</a></li>
						<li><a href="menu_categories.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Categories</a></li>
					  </ul>
					</li>
					<li className="treeview">
					  <a href="#">
						<i className="icon-Group"><span className="path1"></span><span className="path2"></span></i>
						<span>Customer</span>
						<span className="pull-right-container">
						  <i className="fa fa-angle-right pull-right"></i>
						</span>
					  </a>
					  <ul className="treeview-menu">
						<li><a href="add_new_menu.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Customer</a></li>
						<li><a href="members.html"><i className="icon-Commit"><span className="path1"></span><span className="path2"></span></i>Members</a></li>
					  </ul>
					</li>
					<li>
					  <a href="analysis.html">
						<i className="icon-Chart-line"><span className="path1"></span><span className="path2"></span></i>
						<span>Analysis</span>
					  </a>
					</li> */}
				</ul>
				</div>
			</div>
		</section>
	  </aside>
      
      );
}

export default MainSidebar;

