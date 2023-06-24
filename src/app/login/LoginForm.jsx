"use client";
import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const LoginForm = () => {
  const { handleSubmit, register } = useForm();
  const { signIn } = useAuth();
  const search=useSearchParams()
  const from=search.get('redirectUrl') || '/'
  const {replace}=useRouter()
  const onSubmit = async (data) => {
    const { email, password } = data;
    const toastId = toast.loading("Loading...");
    try {
      const user = await signIn(email, password);
     await createJWT({email})
      toast.dismiss(toastId);
      toast.success("Login Successfull");
      replace(from)
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error.message || "user not found");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
