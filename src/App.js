import './App.css';
import Bottom from './mainpage/Bottompage';
import Toppage from './mainpage/Top-page';
import Nopage from './pages/Nopage';
import {Routes ,Route} from "react-router-dom";
import About  from "./pages/About/About";
import Contact from "./pages/Contact";
// import Home from "./pages/Home";
import Sign from "./pages/Sign";
// import Contact from './pages/Contact'
// import Lower from "./mainpage/Lower";
import "bootstrap/dist/css/bootstrap.min.css";
// import Auth from './Auth';
// import Login from './containers/Login';

function App() {
  return (
    <div className="App">
      <About/>
      <Routes>
        <Route index path="/" element={<><Toppage/> <Bottom/></>}/>
        <Route path='/sign' element={<Sign />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Nopage/>}/>
        {/* <Route path='/Login' element={<Login/>}/> */}
        {/* <Route path="/auth" element={<Auth />} /> */}
      </Routes>
    </div>
  );
}

export default App;
