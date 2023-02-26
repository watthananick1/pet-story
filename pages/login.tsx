import React from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "../Context/Authcontext";
import LoginGoogle from "../components/login_Google";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";


interface LoginType {
  email: string;
  password: string;
}
const LoginPage = () => {
  const { logIn } = useAuth();
  const router = useRouter();
  const methods = useForm<LoginType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: LoginType) => {
    console.log(data);
    try {
      await logIn(data.email, data.password);
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Card style={{ width: "auto" }}>
        <h2 className="px-12 mt-8 text-center text-2xl font-semibold text-blue-900">
          Log In
        </h2>
        <Card.Body>
          <FormProvider {...methods}>
            <Form
              action=""
              className="w-80 mx-auto pb-12 px-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="block mb-3 font-sans text-blue-900"
                  >
                    Email
                  </label>
                </div>
                <Form.Control
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.email && (
                  <p className="text-red-400">{errors.email.message}</p>
                )}
              </div>
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="block mb-3 font-sans text-blue-900"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`border border-solid rounded-lg ring:0 focus:ring-0 focus:outline-none border-gray-400 text-gray-500 text-normal py-3 h-12 px-6 text-lg w-full flex items-center`}
                />
                {errors.password && (
                  <p className="text-red-400">{errors.password.message}</p>
                )}
              </div>
              <div className="flex justify-center pt-8">
                <Button type="submit">submit</Button>
              </div>
              <div className="center">
                <p> OR </p>
                <LoginGoogle />
              </div>
            </Form>
          </FormProvider>
          <Link href="/signup">
            <p className="center">Signup</p>
          </Link>
          
        </Card.Body>
      </Card>
    </>
  );
};

export default LoginPage;
