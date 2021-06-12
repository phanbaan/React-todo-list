import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavContent,
  SearchBox,
  SearchIcon,
  SearchInput,
  NavSelect,
  NavMenu,
  MenuIcon,
} from "./HeaderElement";
const Header = () => {
  return (
    <NavbarContainer>
      <NavLogo to="/">
        <NavIcon />
        Task Manage
      </NavLogo>
      <NavContent>
        <SearchBox>
          <SearchIcon />
          <SearchInput placeholder="Tìm kiếm ..." type="text" />
        </SearchBox>
        <NavSelect>
          <option value="1">Hoàn thành</option>
          <option value="1">Chưa làm</option>
          <option value="1">Đang làm</option>
        </NavSelect>
        <NavMenu>
          <MenuIcon />
        </NavMenu>
      </NavContent>
    </NavbarContainer>
  );
};

export default Header;
