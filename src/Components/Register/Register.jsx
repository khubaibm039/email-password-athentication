const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault(); // page won't reload

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
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
                        id=""
                        placeholder="enter your email"
                    />
                    <br />
                    <input
                        className="mb-4 w-3/4 py-2 px-4 rounded-lg"
                        type="password"
                        name="password"
                        id=""
                        placeholder="enter your password"
                    />
                    <br />
                    <input
                        className="btn btn-primary mb-4 w-3/4"
                        type="submit"
                        name="register"
                        id=""
                    />
                </form>
            </div>
        </div>
    );
};

export default Register;
