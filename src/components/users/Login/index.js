import './login.css'
import ApiService from '../../../services/ApiService';
import { useForm } from 'react-hook-form';
import {useEffect} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
/**
 * A form for logging in to the application
 * 
 * @returns A Login form component
 **/
const api = ApiService().useApi();
const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
}).required();
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const handleLogin = async (e) => {
        console.log(e);
        const { username, password } = e;
    }
    useEffect(() => {
        const subscription = watch((value, { name, type }) => console.log(value, name, type));
        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <div className="login-container">
            <div className="login-form">
                <h2 className="login-title">Welcome to AI Universe</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <input type="text" {...register("username", { required: true }) } placeholder="Username" />
                   
                    <input type="password" {...register("password", { required: true }) } placeholder="Password" />
                    <button type='submit'>Enter</button>
                </form>
            </div>
        </div>
    )
}

export default Login;