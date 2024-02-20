import styled from 'styled-components';
const Card = (props) =>{
    return(
        <Contain>
            <Top/>
            <Img>
            <img src = "user.svg"/>
            </Img>
            <Content>
                <p> <b>{props.name}</b></p>
                <Para>
                <p> {props.qualification}</p>
                <p> {props.followers}</p>
                </Para>
            </Content>
            <Btn>
            <button>Follow</button>
            </Btn>
        </Contain>
    )}
const Contain = styled.div`
    width: 230px;
    height: 270px;
    background-color: rgb(214, 213, 210);
    border-radius: 10px;
    margin-bottom: 15px;
    @media(max-width:768px){
        width: 290px;
        margin-left: auto;
        margin-right: auto;
        overflow-x: hidden;
    }
    &:hover{
        cursor: pointer;
        box-shadow: 4px 2px 0px 1px rgb(97, 98, 99);
    }
`;
const Top =styled.div`
    width: 100%;
    height: 50px;
    background-color: blue;
    border-radius: 10px 10px 0 0;
`;
const Img = styled.div`
position: relative;
top: -10%;
left: 8%;
img{
    height: 70px;
    width: 70px;
    border-radius: 100%;
}
`;
const Btn = styled.div`
button{
    margin-left: 10px;
    margin-bottom: 5px;
    margin-top: 10px;
    border: 2px solid blue;
    color: blue;
    height: 25px;
    width: 90%;
    border-radius: 25px;
    &:hover{
        background-color: rgb(176, 204, 232);
        cursor: pointer;
    }
}
`;

const Content = styled.div`
    padding: 0 10px;
    font-size: 20px;
    line-height: 20px;
`;
const Para = styled.div`
    font-size: 14px;
`;
    
export default Card;
