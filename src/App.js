import { useState } from "react";
import './App.css';
import FormInput from './components/FormInput.js';
import "./components/formInput.css";

const App = () => {
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label:"Email"
    },
    {
      id:3,
      name:"birthday",
      type:"text",
      placeholder:"Birthday",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      label:"Confirm Password"
    }
  ]

  const handleSubmit = (e)=>{
    e.preventDefault();
  };

  const onChange = (e)=>{
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key = {input.id} label="" name="username" {...input} value={values[input.name]} onChange={onChange} />
        ))}
       {/* <FormInput name="username" placeholder="Username"/>
        <FormInput name="email" placeholder="Email"/> 
        <FormInput name="fullname" placeholder="Full Name"/>
        <FormInput name="sth" placeholder="Sth else"/> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
