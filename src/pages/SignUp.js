import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <div class="h-screen min-h-screen max-h-screen bg-gray-200 flex justify-center items-center p-4">
        <div class="bg-white shadow w-full p-4 rounded shadow-2xl text-gray-700 sm:w-96">
          
          <p class="text-center pb-2 text-3xl">Sign Up</p>
          
          
          <form action="#" class="my-5">
            <div class="pb-5 text-sm text-center">
              <p>Already have an account? <span class="text-light-green"><Link to="/signin">Sign In</Link></span></p>
            </div>
            
            <div class="pb-5">
              <input type="text" class="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none" placeholder="Username or email"/>
            </div>
      
            <div class="pb-5">
              <input type="text" class="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none" placeholder="Password"/>
            </div>
            
            <div class="pb-5">
              <input type="checkbox"/>
              <label for="" class="ml-2">Remember password</label>
            </div>
      
            <div class="pb-5 text-right text-sm">
              <a href="/" class="text-light-green">Forgot your password?</a>
            </div>
      
            <button type="submit" class="bg-green p-2 w-full text-white rounded">Sign In</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignUp;