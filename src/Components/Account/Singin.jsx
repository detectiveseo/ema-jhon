import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Singin = () => {
    const handleForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    }

    const [passType, setPassType] = useState(true);
    const handlePassType = () => {
        setPassType(!passType)
    }
    return (
        <div className='w-6/12 mx-auto my-10'>
            <div className='w-6/12 mx-auto border border-slate-800 p-10'>
                <form onSubmit={handleForm}>
                    <label htmlFor="">Email
                        <input className='bg-slate-300 w-full text-stone-800 border border-slate-500 p-2' placeholder='enter your email' type="email" name="email" id="email" />
                    </label><br /> <br />
                    <label htmlFor=""><div className='flex justify-between'><span>Password</span><span onClick={handlePassType} className=' cursor-pointer'>Show password</span></div>
                        <input className='bg-slate-300 w-full text-stone-800 border border-slate-500 p-2' placeholder='enter your email' type={passType ? "password" : "text"} name="password" id="password" /></label>
                        <p>Are you new on this site? <Link className='text-purple-800' to="/registration">please register</Link></p><br />
                    <div className='text-center'>
                        <input className='btn rounded-none' type="submit" value="Login" /></div>
                </form>
            </div>
        </div>
    );
};

export default Singin;