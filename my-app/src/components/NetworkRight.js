import styled from 'styled-components'
import Card from './card';
const NetworkRight = () => {
    return(
        <Container>
          <FollowCard>
          <Title>
            <span>No pending invitations </span>
            <button> Manage </button>
          </Title>
          </FollowCard>
         <FollowCard>
          <Premium>
            <h5> Achieve your goals faster with Premium </h5>
            <span> See who's viewed your profile and directly message members outside of your network</span>
            <p> Millions of members use premium </p>
            <button> Try Premium for Free </button>
          </Premium>
          </FollowCard>
          <BannerCard>
            <Content>
                <span>People who are in the Software Development industry also follow these people</span>
                <p> See all</p>
            </Content>
            <Contain>
                <Card name = 'Manisha Patel' 
                qualification = 'HR Executive-Hiring || Devops Engineer || Wordpress developer || Accenture'
                followers = '12,711 followers'/>
                <Card name = 'Archy Gupta'
                qualification = 'Social Media Marketer | Content Marketing and Strategy| Freelancer'
                followers = '12,420 followers'/>
                <Card name = 'Akshay Saini'
                qualification = 'Software Engineer at Google | 200k@LinkedIn | #MotivationForTheDay'
                followers = '222,999 followers '/>
                <Card name = 'Aanchal Jain'
                qualification = 'Engineer @PayPal | Flipkart GWC'
                followers = '29,485 followers '/>
                <Card name = 'Mahima Hans'
                qualification = 'SWE at Microsoft | 75K+ Fam | Mentor at Preplaced & AlgoTutor'
                followers = '75,855 followers'/>
                <Card name = 'Shrayansh Jain'
                qualification = 'Helping Students || Free Guidance and Mentorship '
                followers = '13,551 followers '/>
                <Card name = 'Zoho'
                qualification = 'Software Development'
                followers = '1,304,043 followers'/>
                <Card name = 'moneycontrol.com'
                qualification = 'Know the economy through Moneycontrol, India’s No.1 financial portal'
                followers = '1,188,656 followers'/>
                <Card name = 'Sitaram Sahu'
                qualification = 'MTS1 at PayPal | YT: Concept && Coding | NIT Surathkal |190+ Calls on TopMate'
                followers = '54,688 followers '/>
                <Card name = 'Anushree Ramesh'
                qualification = 'ExBYJUs HR Internal Hiring at InCruiter| Tech & Non-Tech Hiring'
                followers = '7,311 followers'/>
                <Card name = 'Alankar Waghaye'
                qualification = 'SDE-2 @Disney+ Hotstar | Author "The Complete JavaScript"'
                followers = '15,551 followers '/>
                <Card name = 'Manish Agrahari'
                qualification = 'SDE-2 @Disney+ Hotstar | Author "The Complete JavaScript"'
                followers = '1,304,043 followers'/>

            </Contain>
      </BannerCard> 
        </Container>
    )
};

const Premium = styled.div`
word-wrap: wrap;
h5{
    color: black;
    padding-bottom: 10px;
}
button{
    height: 35px;
    width: 200px;
    font-size: 17px;
    border-radius: 25px;
    background-color: rgb(240, 134, 91);
    margin-top: 10px;
    font-weight: 5;
    border: none;
}
button:hover{
    background-color: (250, 54, 40);
    cursor: pointer;

}
@media(max-width:768px){
    h5{
    font-size: 18px;
}
button{
    font-size: 15px;
    width: 170px;
}
}
`;
const Container = styled.div`
position: relative;
left: 100%;
width:800px;
@media(max-width:768px){
  position:relative;
  left: 0%;
  overflow-x: hidden;
}
`;

const FollowCard = styled.div`
// overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
padding: 12px;
@media(max-width:768px){
    max-width: 330px;
    font-size: 12px;
}
`;

const Title = styled.div`
color: rgb(144, 144, 145);
display: float;
font-size: 18px;
button{
    color: rgb(144, 144, 145);
    float: right;
    background-color: white;
    border: none;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
    height: 25px;
}
button: hover{
    background-color: rgb(214, 213, 210);
}
`;
const Content = styled.div`
display: float;
p{
    float: right;
}
@media(max-width:768px){
    font-size: 18px;
}
`;
const Contain = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
flex-wrap: wrap;
`;
const BannerCard = styled(FollowCard)`
img{
  //width: 100%;
  //height: 100%;
}`;

export default NetworkRight;