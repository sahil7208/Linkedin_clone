import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Log from './components/Log';
import { useEffect } from 'react';
import { getUserAuth } from './components/index';
import { connect } from 'react-redux';
import Network from './components/Network';
import Job from './components/Job';
import Notification from './components/Notification';
import Messaging from './components/Messaging';
function App(props) {
  useEffect(()=>{
    props.getUserAuth();
  },[]);
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<Log/>}></Route>
          <Route path="/home" element={<><Header /><Home /></>} />
          <Route path="/network" element={<><Network /></>} />
          <Route path="/job" element={<><Job /></>} />
          <Route path="/notification" element={<><Notification /></>} />
          <Route path="/messaging" element={<><Messaging /></>} />
        </Routes>
      </Router>

    </div>
    </>
  );
}
const mapStateToProps = (state) =>{
  return{};
};
const mapDispatchToProps = (dispatch) =>({
  getUserAuth: () =>dispatch(getUserAuth())
});
export default connect (mapStateToProps,mapDispatchToProps)(App);
