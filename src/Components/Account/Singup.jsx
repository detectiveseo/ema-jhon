import React, { useRef, useState } from 'react';

const Singup = () => {
    //Form data store
    const handleForm = (e) => {
        e.preventDefault();

        const form = e.target;
        const emailInput = form.email.value;
        const passwordInput = form.password.value;
        console.log(emailInput, passwordInput);
    }
    //show password 
    const [passtype, setpassType] = useState(true);
    const handlePassType = () => {
        setpassType(!passtype);
    }


    const refElement = useRef("");
    const handleRef = (e) =>{
        e.target.focus();
    }
    return (
        <div className='w-6/12 mx-auto my-10'>
            <div className='w-6/12 mx-auto border border-slate-800 p-10'>
                <form onSubmit={handleForm}>
                    <label htmlFor="">Email
                        <input className='bg-slate-300 w-full text-stone-800 border border-slate-500 p-2' placeholder='enter your email' type="email" name="email" id="email" />
                    </label><br /> <br />
                    <label htmlFor=""><div className='flex justify-between'><span>Password</span><span onClick={handlePassType} className=' cursor-pointer'>Show password</span></div>
                        <input className='bg-slate-300 w-full text-stone-800 border border-slate-500 p-2' placeholder='enter your email' type={passtype ? "password" : "text"} name="password" id="password" /></label><br /> <br />
                    <div className='text-center'>
                        <input className='btn rounded-none' type="submit" value="Login" /></div>
                </form>
            </div>
        </div>
    );
};

export default Singup;