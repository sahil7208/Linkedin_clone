import styled from 'styled-components';
import React from 'react';
const MessagingLeft = () =>{
    return(
        <Container>
           <Left>
            <Title>
                <span> Messaging</span>
                <span>
                <i class="fa-solid fa-ellipsis"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                </span>
            </Title>
            <Search>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type = "text" placeholder = "Search Messages"></input>
                <i class="fa-solid fa-sliders"></i>
            </Search>
            <Message>
                <img src ="msg.png"/>
                <h3> No messages yet</h3>
                <p> Reach out and start a conversation to advance your career</p>
                <button> Send a Message </button>
            </Message>
           </Left>
           <Right>
            <Head>
                <span> New Message</span>
            </Head>
            <Input>
                <input type = "text" placeholder = "Type a name or multiple names"></input>
            </Input>
            <Text>
                <textarea placeholder = "Write a message" cols = "50" row = "60"/>
            </Text>
            <Send>
            <span>
            <i class="fa-regular fa-image"></i>
            <i class="fa-solid fa-paperclip"></i>
            <i class="fa-regular fa-face-smile"></i>
            </span>
            <span>
            <button> Send </button>
            <i class="fa-solid fa-ellipsis"></i>
            </span>
            </Send>
           </Right>
        </Container>
    )
}
const Container = styled.div`
height: 620px;
width:760px;
position: fixed;
left: 15%;

top: 15%;
border-radius: 20px;
background-color: white;
display: grid
grid-template-columns: repeat(2,1fr);
grid-gap: 20px;
`;
const Left = styled.div`
width: 322px;
height: 100%;

border-right: 2px solid rgb(187, 189, 191);

`;
const Right = styled.div`
width: 438px;
height: 100%;
position: fixed;
left: 39%;
top: 15%;
`;
const Head = styled.div`
padding: 17px;
border-bottom: 2px solid rgb(187, 189, 191);
`;
const Title = styled.div`
padding: 15px;
border-bottom: 2px solid rgb(187, 189, 191);
display: flex;
justify-content: space-between;
i{
    font-size: 24px;
    margin-left: 20px;
    color: grey;
    border-radius: 100%;
}
i:hover{
    background-color: rgb(235, 236, 237);
    cursor: pointer;
}
`;
const Search = styled.div`
height: 35px;
width: 300px;
margin: auto;
border-radius: 5px;
margin-top: 10px;
padding: 5px;
background-color: rgb(235, 237, 240);
input{
    background-color: transparent;
    border: none;
    width: 250px;
    height: 35px;
    margin: auto;
    outline: none;
}
&:hover{
    border: 2px solid black;
}
`;
const Message = styled.div`
text-align: center;
padding: 10px;
text-wrap: wrap;
line-height: 30px;

button{
    width: 150px;
    height: 40px;
    border-radius: 50px;
    background-color: transparent;
    margin-top: 10px;
}
button:hover{
    cursor: pointer;
    background-color: rgb(220, 221, 222);
}
`;
const Input = styled.div`
padding: 10px;
padding-left: 20px;
height: 35px;
border-bottom: 2px solid rgb(187, 189, 191);
input{
    height: 30px;
    width: 80%;
    border: none;
    border-radius: 50px;
}
input:hover{
    border: 2px solid black;
}
`;
const Text = styled.div`
position: relative;
top: 35%;
height: 100px;
border-top: 2px solid rgb(187, 189, 191);
border-bottom: 2px solid rgb(187, 189, 191);
padding: 10px;
textarea{
    height: 80px;
    background-color: rgb(235, 236, 237);
    border-radius: 10px;
    margin-left: 18px;
    outline: none;
    border: none;
    padding: 5px;
}
`;
const Send = styled.div`
display: flex;
justify-content: space-between;
position:relative;
top: 36%;

i{
    padding: 10px;
    font-size: 24px;
    border-radius: 100%;
    margin: 5px;
}
button{
    height: 40px;
    width: 100px;
    border-radius: 50px;
    border: none;
    margin-right: 5px;
}
button:hover{
    cursor: pointer;
}
i:hover{
    background-color: rgb(235, 236, 237);
    cursor: pointer;
}
`;

export default MessagingLeft;