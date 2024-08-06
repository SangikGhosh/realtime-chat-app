import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import uploadFile from '../helpers/uploadFile';
import axios from 'axios'
import toast from 'react-hot-toast';
import { PiUserCircle } from "react-icons/pi";
import './all.css'
import video from '../assets/videobg.mp4';

const CheckEmailPage = () => {
  const [data,setData] = useState({
    email : "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e)=>{
    const { name, value} = e.target

    setData((preve)=>{
      return{
          ...preve,
          [name] : value
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    e.stopPropagation()

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/email`

    try {
        const response = await axios.post(URL,data)

        toast.success(response.data.message)

        if(response.data.success){
            setData({
              email : "",
            })
            navigate('/password',{
              state : response?.data?.data
            })
        }
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
  }


  return (
    <div className='videobg'>
        <video src={video} autoPlay loop muted />
        <div className='content'>

        <div className='text-white backdrop-blur-2xl w-full max-w-md  rounded overflow-hidden p-4 mx-auto'>

            <div className='w-fit mx-auto mb-2'>
                <PiUserCircle
                  size={80}
                />
            </div>

          <h2><center><u>Welcome to ChatBazz!</u></center></h2>

          <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>
              

              <div className='flex flex-col gap-3'>
                <label htmlFor='email'>Email :</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Enter your Email' 
                  className='bg-slate-200 px-2 py-1 focus:outline-primary text-black rounded'
                  value={data.email}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <button
               className='bg-blue-400 text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide gap-3'
              >
                Let's Go
              </button>

          </form>

          <p className='my-3 text-center'>New User ? <Link to={"/register"} className='hover:text-primary font-semibold'>Register</Link></p>
        </div>
    </div>
    </div>
  )
}

export default CheckEmailPage