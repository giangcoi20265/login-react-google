import {GoogleLoginButton} from "react-social-login-buttons"
import {LoginSocialGoogle} from "reactjs-social-login"
function App() {
  return (
    <div >
     <LoginSocialGoogle
      clinet_id={
       "752457183785-8sr16u8g3ners6qr6ia7q0uad2360fra.apps.googleusercontent.com" 
      }
      scope="openid profile"
      discoveryDocs="class_spported"
      access_type="offline"
      onResolve={({provider,data})=>{
        console.log(provider,data)
      }}
      onReject={(err)=>{
        console.error("Error", err);
      }}
     >
    
     </LoginSocialGoogle>
    </div>
  );
}

export default App;
