import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from 'next/router'
import { useAuth } from "../Context/Authcontext";
import { db } from '../firebase/clientApp';
import { collection, addDoc } from "firebase/firestore"; 

interface SignupType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  dateOfBirth: string;
}
const SignupPage = () => {
  const { signUp } = useAuth();
  const router = useRouter();
  const methods = useForm<SignupType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: SignupType) => {
    console.log(data);
    let data_uid = null;
    try {
      await signUp(data.email, data.password).then((userCredential) => {
        // Signed in 
        const userC = userCredential;
        if(userC){
          data_uid = userC.uid;
          console.log(data_uid);
        }
        // ...
      })
      const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
      };
      await addDoc(collection(db, "Users"), {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        dateOfBirth: user.dateOfBirth,
        uid: data_uid
      });
      router.push("/");
      //router.push("/dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  
  };

  return (
    <div className="sign-up-form container mx-auto w-96 mt-12 border-2 border-gray-400">
      <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">Sign Up</h2>
      <FormProvider {...methods}>
        <form action="" className="w-80 mx-auto pb-12 px-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                First Name
              </label>
            </div>

            <input
              type="text"
              {...register("firstName", { required: "First name is required" })}
              className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
            />
            {errors.firstName && <p className="text-red-400">{errors.firstName.message}</p>}
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                Last Name
              </label>
            </div>

            <input
              type="text"
              {...register("lastName", { required: "Last name is required" })}
              className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
            />
            {errors.lastName && <p className="text-red-400">{errors.lastName.message}</p>}
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                Email
              </label>
            </div>

            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
            />
            {errors.email && <p className="text-red-400">{errors.email.message}</p>}
          </div>
          <div className="mt-8">
  <div className="flex items-center justify-between">
    <label htmlFor="dateOfBirth" className="block mb-3 font-sans text-blue-900">
      Date of Birth
    </label>
  </div>

  <input
    id="dateOfBirth"
    type="date"
    {...register("dateOfBirth", {
      required: "Date of Birth is required",
    })}
    className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
  />
  {errors.dateOfBirth && (
    <p className="text-red-400">{errors.dateOfBirth.message}</p>
  )}
</div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                Password
              </label>
            </div>

            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
            />
            {errors.password && <p className="text-red-400">{errors.password.message}</p>}
          </div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="block mb-3 font-sans text-blue-900">
                Confirm Password
              </label>
            </div>

            <input
              type="password"
              {...register("passwordConfirm", {
                required: "Verify your password",
              })}
              className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
            />
            {errors.passwordConfirm && (
              <p className="text-red-400">{errors.passwordConfirm.message}</p>
            )}
          </div>
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className={`h-12 text-center w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
            >
              <p className="capitalize text-white font-normal">submit</p>
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignupPage;