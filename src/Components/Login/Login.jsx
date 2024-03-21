import {
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [loginError, setLoginError] = useState("");
    const [success, setSuccess] = useState("");
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        //add validation
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setLoginError("");
                if (result.user.emailVerified) {
                    setSuccess("Login Successful");
                } else {
                    alert("please verify your email address");
                    return;
                }
            })
            .catch((error) => {
                console.log(error.message);
                setLoginError(error.message);
                setSuccess("");
            });
    };

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log("Please provide an email", emailRef.current.value);
            return;
        } else if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
        ) {
            console.log("Please write a valid email");
            return;
        }
        // send validation email
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log("please check your email");
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid">
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="email"
                                    ref={emailRef}
                                    className="input input-bordered"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    name="password"
                                    required
                                />
                                <label className="label">
                                    <a
                                        onClick={handleForgetPassword}
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                            <p>
                                New to this website? please
                                <Link
                                    className="text-green-600 ml-2"
                                    to={"/register"}
                                >
                                    Register here
                                </Link>
                            </p>
                        </form>
                    </div>
                    <div className="my-5 text-center">
                        {loginError && (
                            <p className="text-red-700"> {loginError} </p>
                        )}
                        {success && (
                            <p className="text-green-600">{success} </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
