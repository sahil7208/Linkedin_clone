import Header from "./Header"
import React from "react";
import styled from 'styled-components';
import MessagingLeft from './MessagingLeft';
const Messaging = () =>{
    return(
        <Container>
            <Header/>
            <MessagingLeft/>
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
        </Container>
    )
}
const Container = styled.div` `;
const End = styled.div`
position: fixed;
right: 5%;
top: 15%;
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
export default Messaging;
