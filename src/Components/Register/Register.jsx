import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";
import { IoMdEyeOff, IoIosEye } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");
    const [isShow, setIsShow] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault(); // page won't reload

        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setRegisterError(
                "Password should be at least 6 characters or more"
            );
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError(
                "your password should have at least one upper case characters."
            );
            return;
        }

        // reset error

        setRegisterError("");

        // create user
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                setSuccess("User Created Successful");
            })
            .catch((error) => {
                console.log(error.message);
                setRegisterError(error.message);
                setSuccess("");
            });
    };

    return (
        <div className="">
            <div className="mx-auto md:w-1/2">
                <h3 className="text-3xl mb-8">Please Register</h3>
                <form onSubmit={handleRegister}>
                    <input
                        className="mb-4 w-full py-2 px-4 rounded-lg"
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        required
                    />
                    <br />
                    <div className="relative ">
                        <input
                            className="w-full py-2 px-4 rounded-lg  "
                            type={isShow ? "text" : "password"}
                            name="password"
                            placeholder="enter your password"
                            required
                        />
                        <span
                            className="cursor-pointer text-2xl absolute top-2 right-2"
                            onClick={() => setIsShow(!isShow)}
                        >
                            {isShow ? <IoIosEye /> : <IoMdEyeOff />}
                        </span>
                    </div>
                    <br />
                    <div className="my-2">
                        <input
                            className="mr-2 "
                            type="checkbox"
                            name="terms"
                            id="terms"
                            required
                        />
                        <a href="">
                            <label htmlFor="terms">Accepts out terms</label>
                        </a>
                    </div>
                    <br />
                    <input
                        className="btn btn-primary my-4 w-full"
                        type="submit"
                        name="register"
                    />
                    <p>
                        Already have an account
                        <Link className="text-green-600 ml-2" to={"/login"}>
                            Login here
                        </Link>
                    </p>
                </form>
                {registerError && (
                    <p className="text-red-700">{registerError}</p>
                )}
                {success && <p className="text-green-500">{success}</p>}
            </div>
        </div>
    );
};

export default Register;
