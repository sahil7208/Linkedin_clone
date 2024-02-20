import Header from "./Header"
import React from "react";
import Notificationleft from "./Notificationleft";
import styled from 'styled-components';
import NotificationRight from "./NotificationRight";
const Notification = () =>{
    return(
        <Container>
            <Header/>
            <Layout>
                <Notificationleft/>
                <NotificationRight/>
                <End>
                    <img src = "img1.png" alt = ""></img>
                    <Contents>
                        <p>
                            <span> About </span>
                            <span> Accesibility</span>
                            <span> Help Center</span>
                        </p>
                        <p>
                            <span> Privacy & Terms</span>
                            <span> Ad Choices</span>
                        </p>
                        <p>
                            <span> Advertising</span>
                            <span> Business Services </span>
                        </p>
                        <p>
                            <span> Get the LinkedIn app</span>
                            <span> More </span>
                        </p>
                    </Contents>
                </End>
            </Layout>
        </Container>
    )
}
const Layout = styled.div`
overflow-x: auto;
position: absolute;
top: 9%;
margin-top: 100px;
display: grid;
grid-template-areas: "notificationleft notificationright end";
grid-template-columns: minmax(0, 6fr) minmax(0, 12fr) minmax(0, 6fr);
column-gap: 25px;
row-gap: 25px;
margin: 25px 0;
@media(max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    overflow-x: hidden;
}
`;
const Container = styled.div`
`;
const End = styled.div`
position: fixed;
right: 2%;
img{
    border-radius: 5px;
    border: 1px solid rgb(177, 178, 179);
}
`;
const Contents = styled.div`
text-align: center;
margin-top: 5px;
font-size: 13px;

p{
    line-height: 30px;
}
span{
    padding: 0px 10px;
}
span:hover{
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
`;
export default Notification;
