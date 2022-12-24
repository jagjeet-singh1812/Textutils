import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import N from './components/Navigationr';
import Textforms from './components/Textforms';
import React,{useState} from 'react';
import Alerts from './components/Alerts';
// import { type } from '@testing-library/user-event/dist/type';

let App=()=>{
const [alertmessages, setalert] = useState(
  // msg:"default message", color:"primary"
  // {msg:"",type:""}
  null
);

const showalert=(message,colortype)=>{
  setalert({
    msg:message,
    type: colortype
  })
  setTimeout(()=>{
setalert(null);
  },2000)
}


 const[mode,setmode]=useState('light');
   const setcolor=()=>{
    if(mode==='light'){
    setmode('dark');
    // console.log("entered dark mode");
    document.body.style.backgroundColor="#121212"
    showalert("Dark Mode has been Enabled!!!","info")
    document.title="TextUtils-Dark Mode"
    // setInterval(()=>{
    //   document.title="TextUtils is Amazing Website"
    // },2000);
    // setInterval(()=>{
    //   document.title="Install TextUtils"
    // },1500);
  }
  else{
    // console.log("entered ligth mode");
    setmode('light');
    document.body.style.backgroundColor="white"
    showalert("Light Mode has been Enabled!!!","primary")
    document.title="TextUtils-Light Mode"
  }
   }
  return (
    <>
    <N title='TextUtils' abouttext="About us" mode={mode} togglemode={setcolor}/> 
    {/* passing props or argument to rfc */}
    <Alerts alert={alertmessages}/>
    <div className="container">
    <Textforms heading="Enter Text you want to Analyse" mode={mode} showalert={showalert}/>
    </div>
    </>
  );
}

export default App;
