import styled from 'styled-components';
import React from 'react';
const Notificationleft = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <Para>
                        <span> Manage your Notifications</span>
                        <Content> View Settings </Content>
                    </Para>
                </UserInfo>
            </ArtCard>
        </Container>
    )
};

const Container = styled.div`
grid-area: leftside;
position: fixed;
left: 10%;
width: 250px;
@media(max-width:768px){
    position:relative;
    overflow-x: hidden;
    width:360px;
    left: -1%;
    overflow-x: hidden;
}
`;
const Para = styled.div`
font-size: 20px;
padding: 15px 10px;
`;
const Content = styled.div`
color: blue;
line-height: 40px;
`;
const ArtCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 10px;
transition: box-shadow 83ms;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const UserInfo = styled.div`
padding: 12px 12px 16px;
word-wrap: break-word;
word-break: break-word;
text-align: left;
  `;

export default Notificationleft;