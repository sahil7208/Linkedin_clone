import Header from "./Header"
import React from "react";
import Jobleft from "./Jobleft";
import styled from 'styled-components';
import JobRight from "./JobRight";
const Job = () =>{
    return(
        <container>
            <Header/>
            <Layout>
                <Jobleft/>
                <JobRight/>
            </Layout>
            <BannerCard>
            <Title>
              <p>Job seeker guidance</p>
              <span>Recommended based on your activity</span>
            </Title>
            <Cont> I want to improve my resume </Cont>
            <Content>
              <p>
              Explore our curated guide of expert-led courses, such as how to improve your resume and grow your network, to help you land your next opportunity.
              </p>

            </Content>
            <Show> Show More <i class="fa-solid fa-arrow-right"></i></Show>
          </BannerCard> 
          <End>
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
        </container>
    )
}
const Layout = styled.div` 
overflow-x: auto;
position: absolute;
top: 9%;
margin-top: 100px;
display: grid;
grid-template-areas: "networkleft networkright bannercard";
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
const BannerCard = styled.div`
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: fixed;
right: 4%;
top: 13%;
max-width: 280px;
height: 250px;
border: none;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;
const Title = styled.div`
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
border: none;
padding: 10px;
p{
    font-size: 16px;

}
span{
    font-size: 12px;
}
`;
const Content = styled.div`
text-wrap: wrap;
padding: 10px;
font-size: 14px;
color:rgb( 89, 90, 92);
`;
const Cont = styled.div`
font-size: 16px;
height: 30px;
width: 100%;
background-color: rgb(235, 237, 240);
padding: 5px 10px;
`;
const End = styled.div`
position: fixed;
right: 6%;
top: 52%;
img{
    border-radius: 5px;
    border: 1px solid rgb(177, 178, 179);
}
`;
const Contents = styled.div`
text-align: center;
margin-top: 5px;
font-size: 12px;
color:rgb( 89, 90, 92);
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
const Show = styled.div`
font-size: 16px;
padding: 12px;
&:hover{
    color: blue;
}
`;

export default Job;
