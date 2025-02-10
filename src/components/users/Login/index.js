import './login.css'
import ApiService from '../../../services/ApiService';
/**
 * A form for logging in to the application
 * 
 * @returns A Login form component
 **/
const api = ApiService().useApi();
const Login = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        
    }
    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Welcome to AI Universe</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button type='button' onClick={handleLogin}>Enter</button>
                </form>
            </div>
        </div>
    )
}

export default Login;