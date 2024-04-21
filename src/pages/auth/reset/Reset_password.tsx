 import Login_img from '../../../assets/img/unboarding_imgs/login_img.jpg'
const Reset_password = () => {
  return (
    <>
    <div className="w-full h-screen">
   <div className="container md:flex md:flex-row">
    <div className="block md:w-1/2">
      <p className="text-text-primary text-3xl font-extrabold p-3"><span className="text-text-secondary font-bold text-5xl">MY</span>Unit</p>
      <p className="text-lg capitalize font-semibold p-3 ">Trouble Logging In?</p>
      <p className="text-lg capitalize p-3 leading-relaxed ">Enter the email address associated with your account and we'll send you a link to reset your password.</p>
      <form action="" className="p-3"> 
       <div className="block py-2">
        <label htmlFor="text-sm">Email</label>
        <input type="Email" className="block bg-gray-100 outline-none w-full h-[50px] rounded-lg px-3" placeholder="Enter a valid Email or phone number" />
       </div>  
       <div className="block py-2">
        <button className="block text-white bg-text-secondary outline-none w-full h-[50px] rounded-full " >Send me reset link</button>
       </div>

       <div className='block  p-3'>
        <p className="text-sm text-center hover:text-text-secondary "><a href="">Back to sign in</a></p>
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

export default Reset_password
