import styled from 'styled-components';
import React from 'react';
const Jobleft = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <Content>
                        <p className='bg'><i class="fa-solid fa-bookmark"></i><span> My jobs</span></p>
                        <p className='bg'><i class="fa-solid fa-bell"></i><span> Job Alerts</span></p>
                        <p className='bg'><i class="fa-regular fa-calendar-check"></i><span> Skill Assesments </span></p>
                        <p className='bg'><i class="fa-regular fa-note-sticky"></i><span> Interview prep</span></p>
                        <p className='bg'><i class="fa-regular fa-file"></i><span> Resume Builder</span></p>
                        <p className='bg'><i class="fa-brands fa-youtube"></i><span> Job seeker guidance </span></p>
                        <p className='bg'><i class="fa-solid fa-gear"></i><span> Application Settings</span></p>
                    </Content>
                </UserInfo>
            </ArtCard>
            <button> <i class="fa-solid fa-pen-to-square"></i>Post a free job</button>
        </Container>
    )
};

const Container = styled.div`
grid-area: leftside;
position: fixed;
left: 10%;
width: 230px;
@media(max-width:768px){
    position:relative;
    overflow-x: hidden;
    width:360px;
    left: -1%;
    overflow-x: hidden;
}
button{
    color:rgb(38, 105, 222);
    height: 45px;
    width: 230px;
    border-radius: 50px;
    border: 1px solid rgb(38, 105, 222);
    background-color: transparent;
    font-size: 17px;
}
button:hover{
    background-color: rgb(204, 208, 227);
    border: 2px solid rgb(38, 105, 222);
    cursor: pointer;
}
`;

const ArtCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
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
h5{
    color: rgb(45, 45, 46);
}
img{
    width: 100%;
}
.bg:hover{
cursor: pointer;
}
  `;

const Content = styled.div`
color: black;
line-height: 50px;
margin-top: 10px;
padding-bottom: 10px;
cursor: pointer;
i{
    margin-right: 20px;
    font-size: 22px;
}
`;

export default Jobleft;