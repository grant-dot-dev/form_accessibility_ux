import { TvIcon } from "@heroicons/react/24/outline";
import { useForm } from "react-hook-form";

type FormData = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
    agreeToTerms: boolean;
};

export const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gray-900">
            <div className="w-full max-w-md p-8 bg-black bg-opacity-75 rounded-lg">
                <div className="flex flex-row justify-center items-center gap-x-4">
                    <TvIcon className="h-12 w-12 text-red-500" />
                    <h1 className="text-7xl font-bold text-center text-white mb-4">G-Flix</h1>
                </div>
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    Sign Up
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                    </div>

                    {/* Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                    </div>

                    {/* Confirm Password */}
                    <div>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
                        />

                    </div>

                    {/* Agree to Terms */}
                    <div className="flex items-center text-gray-400 text-sm">
                        <input
                            type="checkbox"
                            id="agreeToTerms"
                            className="mr-2"
                        />
                        <label htmlFor="agreeToTerms" className="select-none">
                            I agree to the Terms and Conditions
                        </label>
                    </div>


                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded font-semibold transition"
                    >
                        Sign Up
                    </button>

                    {/* Already have account */}
                    <p className="text-center text-gray-400 text-sm mt-4">
                        Already have an account?{" "}
                        <a href="#" className="text-red-500 hover:underline">
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
        </div >
    );
};
