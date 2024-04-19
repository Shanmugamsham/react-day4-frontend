
import createUsercontextdata from './Usercontex';
import axios from 'axios';
import React, { useEffect, useState ,useContext} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const UsercontextProvider = ({children}) => {
  

   
    const [username,setusername]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [msgerro,setmsgerror]=useState("")
    


    const [loginemail,setloginemail]=useState("")
    const [loginpassword,setloginpassword]=useState("")
    const [result,setresult]=useState("")

      

    const [emailiID,setemaiID]=useState("")
    const [token,settoken]=useState("")
 



    const handlesubmitforregister= async(e)=>{
        e.preventDefault()
        await axios.post("https://node-day4-resubmit.onrender.com/api/auth/signup",{name:username,email:email,password:password}).then((d)=>{
          if(d.request.status===200){
            toast.success(d.data.msg)
            setusername("")
            setemail("")
            setpassword("")
            setmsgerror("")
          }
            
        }).catch((dd)=>{
           toast.error(dd.response.data.msg)
        })
         
      }


 



 const handlesubmitforloginpage=async(e)=>{
    e.preventDefault()
    
     await axios.post("https://node-day4-resubmit.onrender.com/api/auth/login",{email:loginemail,password:loginpassword}).then((d)=>{
        console.log(d);
        
        toast.success(d.data.msg)
        settoken(d.data.token)
        setemaiID(d.data.user._id)
        if(!emailiID==""){
            useEffect(()=>{
                gettask()
             },[])
        }
        setloginemail("")
        setloginpassword("")
        
     
    }).catch((e)=>{
        toast.error(e.response.data.msg);
        
    })
}



  



    return (
        <>
       < createUsercontextdata.Provider    value={{
      
        username,setusername,email,setemail,password,setpassword,msgerro,setmsgerror,handlesubmitforregister,
        loginemail,loginpassword,result,setloginemail,setloginpassword,setresult,handlesubmitforloginpage}}>
         {children}
       </createUsercontextdata.Provider>
       <ToastContainer/>
       </>
    );
};

export default UsercontextProvider;