import styled from 'styled-components';
const NetworkLeft = (props) => {
    return (
        <Container>
            <ArtCard>
                <UserInfo>
                    <span><h7> Manage my network </h7></span>
                    <Content>
                        <p className='bg'><i class="fa-solid fa-user-group"></i><span> Connections</span></p>
                        <p className='bg'><i class="fa-solid fa-user"></i><span> Following & followers</span></p>
                        <p className='bg'><i class="fa-solid fa-users"></i><span> Groups </span></p>
                        <p className='bg'><i class="fa-solid fa-calendar-days"></i><span> Events</span></p>
                        <p className='bg'><i class="fa-solid fa-pager"></i><span> Page</span></p>
                        <p className='bg'><i class="fa-solid fa-newspaper"></i><span> Newsletter</span></p>
                        <p className='bg'><i class="fa-solid fa-hashtag"></i><span> Hashtags</span></p>
                    </Content>
                    <Img>
                        <img src = "img1.png"/>
                    </Img>
                </UserInfo>
            </ArtCard>
        </Container>
    )
};

const Container = styled.div`
grid-area: leftside;
position: fixed;
left: 8%;
width: 312px;
@media(max-width:768px){
    position:relative;
    overflow-x: hidden;
    width:360px;
    left: -1%;
    overflow-x: hidden;
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
background-color: rgb(214, 213, 210);
}
  `;

const Content = styled.div`
color: rgb(144, 144, 145);
line-height: 42px;
margin-top: 10px;
border-bottom: 2px solid rgb(197, 197, 199);
padding-bottom: 10px;
cursor: pointer;
i{
    margin-right: 20px;
    font-size: 22px;
}
`;
const Img = styled.div`
padding-top: 10px;
border-bottom:2px solid rgb(197, 197, 199);
 `;
export default NetworkLeft;