import styled from 'styled-components'

const JobRight = (props) => {
    return(
        <Container>
         <FollowCard>
          <Title>
            
            <span>Get set up on LinkedIn</span>
            <span><i class="fa-solid fa-xmark"></i></span>
          </Title>
          <Card>
            <Bg>
              <img src = "jobs.png"/>
            </Bg>
            <Content>
              <p>Let recruiters know you're open to work and find your new job faster.</p>
              <button> Add Job Preference</button>
            </Content>
          </Card>
          </FollowCard>
          <BannerCard>
            <Title>
              <span>Suggested job Searches</span>
              <span><i class="fa-solid fa-xmark"></i></span>
            </Title>
            <Contents>
              <button> <i class="fa-solid fa-magnifying-glass"></i> marketing manager</button>
              <button> <i class="fa-solid fa-magnifying-glass"></i> hr </button>
              <button> <i class="fa-solid fa-magnifying-glass"></i> legal</button>
              <button> <i class="fa-solid fa-magnifying-glass"></i> sales</button>
              <button> <i class="fa-solid fa-magnifying-glass"></i> amazon</button>
              <button> <i class="fa-solid fa-magnifying-glass"></i> google</button>
              <button> <i class="fa-solid fa-magnifying-glass"></i> analyst</button>
            </Contents>
          </BannerCard> 
        </Container>
    )
};

const Container = styled.div`
grid-area: rightside;
position: fixed;
left: 29%;
width:600px;
@media(max-width:768px){
  position:relative;
}
`;

const FollowCard = styled.div`
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
padding: 12px;
`;

const Title = styled.div`
font-size: 19px;
color: black;
display: flex;
justify-content: space-between;
margin-left: 10px;

`;

const Card = styled.div`
margin: auto;
height: 300px;
width:550px;
border: 1px solid rgb(165, 166, 168);
margin-top: 20px;
border-radius: 10px;
`;
const Bg = styled.div`
height: 170px;
img{
  width: 550px;
  height: 170px;
  border-radius: 10px 10px 0 0;
}
border-bottom: 2px solid rgb(195, 166, 168);
`;
const BannerCard = styled(FollowCard)`
img{
  //width: 100%;
  //height: 100%;
}`;
const Content = styled.div`
margin-left: 18px;
font-size: 16px;
margin: 20px;
button{
  margin-top: 20px;
  background-color: blue;
  color: white;
  height: 40px;
  width: 200px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  border: none;
}
button:hover{
  cursor: pointer;
  background-color: rgb(5, 46, 128);
}
`;
const Contents = styled.div`
line-height: 25px;
padding: 15px;
button{
  color: blue;
  border: 1px solid blue;
  padding: 5px;
  margin: 5px;
  background-color: transparent;
  border-radius: 25px;
}
button:hover{
  border: 2px solid blue;
  cursor: pointer;
  background-color: rgb(189, 207, 242);
}
`;
export default JobRight;