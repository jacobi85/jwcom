import React from 'react';
import profileImg from '../../assets/common/jacobwestman_header.jpg';
import logo from '../../assets/common/jacobwestman_logo@x2.gif';

function Header() {
  return (
    <header className="App-header">
      <div href="#" className="App-logo">
        <img src={logo} alt="logo" />
      </div>
      <img
        className="App-header__profile-img"
        src={profileImg}
        alt="jacobwestman_profile_header"
      />
    </header>
  );
}

export default Header;
