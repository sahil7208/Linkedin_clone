import Header from "./Header";
import NetworkLeft from "./NetworkLeft";
import styled from 'styled-components';
import NetworkRight from "./NetworkRight";
const Network = () =>{
    return(
        <>
            <Header/>
            <Layout>
            <NetworkLeft/>
            <NetworkRight/>
            </Layout>
        </>
    )
}
const Layout = styled.div`
overflow-x: auto;
position: absolute;
top: 9%;
margin-top: 100px;
display: grid;
grid-template-areas: "networkleft networkright";
grid-template-columns: minmax(0, 6fr) minmax(0, 12fr);
column-gap: 25px;
row-gap: 25px;
margin: 25px 0;
@media(max-width: 768px){
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    overflow-x: hidden;
}`;
export default Network;