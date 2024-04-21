import { EyeClosed } from 'phosphor-react'
import  Login_img from '../../../assets/img/unboarding_imgs/login_img.jpg'
const User_login = () => {
  return (
    <>
   <div className="w-full h-screen">
   <div className="container md:flex md:flex-row">
    <div className="block md:w-1/2">
      <p className="text-text-primary text-3xl font-extrabold p-3"><span className="text-text-secondary font-bold text-5xl">MY</span>Unit</p>
      <p className="text-lg capitalize font-semibold p-3 ">Welcome back.</p>
      <form action="" className="p-3"> 
       <div className="block py-2">
        <label htmlFor="text-sm"><span className="text-red-500">*</span>Email</label>
        <input type="Email" className="block bg-gray-100 outline-none w-full h-[50px] rounded-lg px-3" placeholder="Enter a valid Email or phone number" />
       </div>

       <div className="block py-2">
        <label htmlFor="text-sm"><span className="text-red-500">*</span>Password</label>
        <input type="password" className="block bg-gray-100 outline-none w-full h-[50px] rounded-lg px-3" placeholder="atlist 6 digit" />
        <EyeClosed size={40} className='flex absolute top-10 right-0  justify-end px-1 cursor-pointer' />
       </div>

       
      <div className="flex justify-between gap-2 py-2">
        <div>
         <input type="checkbox" name="" id="" className="border bg-text-secondary border-text-secondary" />
       <label htmlFor="" className="px-2 text-xs">Remember Me</label>
        </div>

        <div>
        <p className="text-sm"><a href="">Forget Password</a></p>
        </div>
       </div>
      
       
       <div className="block py-2">
        <button className="block text-white bg-text-secondary outline-none w-full h-[50px] rounded-full " >Create Account</button>
       </div>
        

       

       <div className="flex justify-between gap-2 py-2">
        <div>
          <p className="text-sm"><a href="">Don't have an account?</a></p>
        </div>

        <div>
        <p className="text-sm"><a href="">sign up</a></p>
        </div>
       </div>
      </form>

    </div>

    
      <div className="hidden lg:block">
        <img src={Login_img} className="w-full h-screen rounded-bl-lg mr-0 object-fit" alt=""/>
        <p className="w-[450px] h-screen bg-opacity-20 bg-blur-lg bg-text-secondary backdrop-filter backdrop-blur-lg z-50 
         object-fit absolute top-0 left-5  rounded-3xl">
          <div className="block p-3 justify-items-center">
          <p className="text-text-primary text-3xl font-extrabold border-b-2 border-white w-[150px]"><span className="text-text-secondary font-bold text-5xl">MY</span>Unit</p>
          <h1 className="text-white text-lg py-3">We make payments simple</h1>
          <h1 className="text-white text-lg py-1">But Significant</h1>
          <h1 className="text-white text-xs ">Join 500+ Thousands of businesses using MyUnit around the world.</h1>
         </div>

         </p>
      
      </div>

    
      
   </div>
   </div>

    </>
  )
}

export default User_login