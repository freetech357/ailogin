import './login.css'
/**
 * A form for logging in to the application
 * 
 * @returns A Login form component
 */
const Login = () => {
    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Welcome to AI Universe</h2>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button>Enter</button>
                </form>
            </div>
        </div>
    )
}

export default Login;