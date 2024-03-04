import { Facebook, Instagram, MailOutline, Phone } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../responsive'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
`

const Logo = styled.h1``

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`

const Title = styled.h3`
  margin-bottom: 30px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`


const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row p-4 sm:p-20 gap-8 justify-between bg-[#66bcd2]">
      <div className="flex flex-col  mx-auto sm:mx-0">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-40" />
        </Link>
      </div>
      <div className="flex flex-row justify-between sm:justify-start sm:flex-col font-semibold">
        <Link className="my-2" to="/termsandcondition">
          Terms & Condition
        </Link>
        <Link className="my-2" to="/returnandrefundpolicy">
          Return & Refund Policy
        </Link>
      </div>
      <div className="flex flex-row justify-between sm:justify-start sm:flex-col font-semibold">
        <ContactItem>
          <Phone style={{ margindiv: '10px' }} /> +91 9660270277
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: '10px' }} /> www.oxysaver.shop
        </ContactItem>
      </div>
    </div>
  )
}

export default Footer
