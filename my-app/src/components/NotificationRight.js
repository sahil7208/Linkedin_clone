import styled from 'styled-components'

const NotificationRight = (props) => {
    return(
        <Container>
         <FollowCard>
          <Buttons>
                <button className = "btn">All</button>
                <button>My Posts</button>
                <button> Mentions </button>
          </Buttons>
          </FollowCard>
          <BannerCard>
        <img
          src="nomsg.png"
          alt=""
        />
        <p> No New Notifications</p>
        <p><span> View other updates at Home</span></p>
        <a href ='home'><button>
            Go to Home
        </button></a>
      </BannerCard> 
        </Container>
    )
};

const Container = styled.div`
position: fixed;
left: 30%;
width:600px;
@media(max-width:768px){
  position:relative;
}
`;

const Buttons = styled.div`
padding: 5px;
button{
    height: 30px;
    width: 100px;
    border-radius: 50px;
    border: 1px solid rgb(130, 129, 129);
    background-color: transparent;
    margin-left: 10px;
}
button:hover{
    background-color: rgb(222, 217, 217);
    border: 1px solid rgb(77, 77, 77);
    cursor: pointer;

}
button:active{
    background-color: green;
   color: white;

}
.btn
{
    background-color: green;
    color: white;

}
`;
const FollowCard = styled.div`

overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 10px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
padding: 12px;
`;


const BannerCard = styled(FollowCard)`
text-align: center;
font-size: 20px;
font-weight: 100;
line-height: 35px;
color: rgb(38, 38, 38);
button{
    border: 1px solid rgb(26, 105, 201);
    height: 40px;
    width: 150px;
    border-radius: 50px;
    color: rgb(26, 105, 201);
    background-color: transparent;
    font-size: 18px;
}
button:hover{
    border: 2px solid rgb(26, 105, 201);
}
span{
    font-size: 18px;
}
`;

export default NotificationRight;