import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/Firebase.config";
import { useState } from "react";

const Register = () => {
    const [registerError, setRegisterError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = (e) => {
        e.preventDefault(); // page won't reload

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        if (password.length < 6) {
            setRegisterError(
                "Password should be at least 6 characters or more"
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
                        className="mb-4 w-3/4 py-2 px-4 rounded-lg"
                        type="email"
                        name="email"
                        placeholder="enter your email"
                        required
                    />
                    <br />
                    <input
                        className="mb-4 w-3/4 py-2 px-4 rounded-lg"
                        type="password"
                        name="password"
                        placeholder="enter your password"
                        required
                    />
                    <br />
                    <input
                        className="btn btn-primary mb-4 w-3/4"
                        type="submit"
                        name="register"
                    />
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
