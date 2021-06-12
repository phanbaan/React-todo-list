import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBuffer, FaEllipsisV, FaSearch } from "react-icons/fa";
import { Container } from "../../GlobalStyle";

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;
`;

export const NavLogo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex-basis: 22%;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 600;

  position: relative;

  &:after {
    position: absolute;
    content: "";
    right: 0;
    bottom: -15px;
    height: 60px;
    width: 1px;
    box-shadow: 1px 0px 8px 1px rgb(234 234 238 / 70%);
    background-color: #eaeaee;
  }
`;
export const NavIcon = styled(FaBuffer)`
  vertical-align: middle;
  margin-right: 1rem;
`;
export const NavContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SearchBox = styled.div`
  flex: 2;
  width: 100%;
  position: relative;
  padding: 0 4rem;
`;
export const SearchIcon = styled(FaSearch)`
  color: #9199c0;
  cursor: pointer;
  vertical-align: middle;
`;
export const SearchInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0.5rem 0.8rem;
  box-sizing: border-box;
  font-size: 1.6rem;
  color: #9199c0;
  &::placeholder {
    color: #9199c0;
  }
`;
export const NavSelect = styled.select`
  flex: 1;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1.8rem;
  color: #000;
  & option:hover {
    color: red;
    background: red;
    padding: 2rem;
  }
  position: relative;
`;
export const NavMenu = styled.div`
  flex: 2;
  justify-content: flex-end;
  text-align: right;
  cursor: pointer;
`;
export const MenuIcon = styled(FaEllipsisV)`
  margin-right: 4rem;
  color: #9199c0;
`;
