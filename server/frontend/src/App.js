import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
// i added the inmport links
//import PostReview from "./components/Dealers/PostReview"
//import Dealer from "./components/Dealers/Dealer"
//import Dealers from './components/Dealers/Dealers';
// import Register from "./components/Register/Register";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
     {/* i addded the paths below */}
     {/*  <Route path="/dealer/:id" element={<Dealer/>} />*/}
     {/* <Route path="/dealers" element={<Dealers/>} />*/}
     {/*  not sure is needs an :ID parametet like dealer does below <Route path="/register" element={<Register/>}/> */}
     {/* <Route path="/postreview/:id" element={<PostReview/>} /> */}
    </Routes>
  );
}
export default App;
