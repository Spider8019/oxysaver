import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: #66bcd2;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

const Announcement = () => {
  return (
    <Container>
        FREE SHIPPING!! for new users
    </Container>
  )
}

export default Announcement
