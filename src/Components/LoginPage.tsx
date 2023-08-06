import React from 'react';

const LoginPage= () => {
    return (
        <div className='h-4/6 bg-white w-96 drop-shadow-lg flex items-center flex-col p-8 gap-4 rounded'>
             <div className="text-center text-md font-semibold">
              Log in to continue
             </div>
             <input type="text" className="border-2 w-full rounded border-gray-300 focus:outline-none focus:border-blue-400 p-2" placeholder="Enter your email"/>
             <input type="password" className="border-2 w-full rounded border-gray-300 focus:outline-none focus:border-blue-400 p-2" placeholder="Enter your password"/>
             <button className="w-full rounded bg-blue-700 text-white p-2">Continue</button>
             <div className="text-gray-800">
                or continue with:
             </div>
             <button className="w-full rounded border-2 border-gray-300 flex justify-center items-center gap-2 p-2 font-semibold"><span><img src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png" width="24" height="24"/></span><span>Google</span></button>

        </div>
    );
}

export default LoginPage;