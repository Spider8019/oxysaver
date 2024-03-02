import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const Container = styled.div`
  ${mobile({ height: '50px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity)
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 w-full items-center p-4">
      <div className="hidden sm:block">
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </Left>
      </div>

      <div className="mx-auto text-center flex-1 bg-red-300 flex justify-center ">
        <img src={logo} className="h-20 w-40" alt="Logo" />
      </div>
      <div className="flex gap-8 items-center justify-end">
        <Link to="/howtouse">
          <button className="shadow p-4 rounded bg-[#66bcd2]">How to Use</button>
        </Link>
        <div className="hidden sm:flex sm:flex-row-reverse gap-8 items-center justify-end">
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to="/login">
            <MenuItem>Sign In</MenuItem>
          </Link>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
