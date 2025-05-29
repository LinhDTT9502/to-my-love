import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEye,FaEyeSlash } from "react-icons/fa";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (user) {
    //         if (user.role === "Admin") {
    //             navigate("/admin/dashboard");
    //         } else if (user.role === "Owner") {
    //             navigate("/owner/dashboard");
    //         } else if (user.role === "Coordinator") {
    //             navigate("/coordinator/assign-orders");
    //         } else if (user.role === "BranchStaff") {
    //             navigate("/staff/list-orders");
    //         } else if (user.role === "Manager") {
    //             navigate("/manager/list-staffs");
    //         } else if (user.role === 'ContentStaff') {
    //             navigate('/content-staff/blogs');
    //         } else {
                
    //             navigate('/');
    //             dispatch(logout());
    //             localStorage.clear();
    //         }
    //     }
    // }, [user, navigate]);

const onSubmit = (data) => {
    const { userName, password } = data;
    if (userName === "Aliff Irfhan" && password === "30051995") {
        navigate("/home");
    } else {
        alert("Invalid username or password");
    }
};


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <style>
                {`
                @keyframes fade {
                    0%, 100% {
                        opacity: 0.5;
                    }
                    50% {
                        opacity: 1;
                    }
                }

                .animate-fade {
                    animation: fade 3s infinite;
                }
                `}
            </style>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-brrelative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-rose-200 opacity-30"></div>
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')] opacity-10"></div>
                    <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-transparent to-blue-500 opacity-20"></div>
                </div>

                <div className="w-full max-w-md px-8 py-10  rounded-2xl shadow-2xl z-10 transform transition duration-500 ease-in-out hover:scale-105 border border-blue-200">
                    <div className="flex flex-col items-center mb-8">
                        <h2 className="text-3xl font-bold text-rose-700 mb-2 text-center">Welcome home my love</h2>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="transform transition duration-300 ease-in-out hover:scale-105">
                            <div className="relative">
                                <input
                                    id="username"
                                    type="text"
                                    {...register("userName", {
                                        required: true,
                                        // maxLength: 20,
                                        // pattern: /^[a-zA-Z0-9_]+$/,
                                    })}
                                    className="w-full pl-10 pr-3 py-2 rounded-lg bg-blue-50 border border-blue-300 text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Username"
                                />
                            </div>
                            {errors.userName && (
                                <p className="mt-1 text-red-500 text-sm">{errors.userName.type === 'required' ? 'Username is required' : 'Invalid username format'}</p>
                            )}
                        </div>

                        <div className="transform transition duration-300 ease-in-out hover:scale-105">
                            <div className="relative">
                        
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", { required: "Password is required" })}
                                    className="w-full pl-10 pr-10 py-2 rounded-lg bg-blue-50 border border-blue-300 text-blue-800 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    onClick={togglePasswordVisibility}
                                >
                                {showPassword ? <FaEye /> : <FaEyeSlash /> }
                    
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-red-500 text-sm">{errors.password.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
