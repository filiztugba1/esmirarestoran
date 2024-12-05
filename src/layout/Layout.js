import React from 'react';
import Header from '../component/Header';
import MainSidebar from '../component/MainSidebar';
import RightBar from '../component/RightBar';
import MainFooter from '../component/MainFooter';
import ControlSidebar from '../component/ControlSidebar';
import ControlSidebarBg from '../component/ControlSidebarBg';

function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <MainSidebar />
      <div className="content">{children}</div>
      <RightBar />
      <MainFooter />
      <ControlSidebar />
      <ControlSidebarBg />
    </div>
  );
}

export default Layout;
