"use client";
import useAuth from "@/hooks/useAuth";
import createJWT from "@/utils/createJWT";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { handleSubmit, register, setValue } = useForm();
  const { createUser, profileUpdate } = useAuth();
  const search=useSearchParams();
  const from=search.get('redirectUrl') || '/';
  const {replace}=useRouter()

  const imageUpload = async (e) => {
    const formData = new FormData();
    if (!e.target.files[0]) return;
    formData.append("photo", e.target.files[0]);
    const toastId = toast.loading("image uploading...");
    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_UPLOAD_IMAGE}`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (!res.ok) throw new Error("Failed to upload image");
      const data = await res.json();
      toast.dismiss(toastId);
      toast.success("Image upload success");
      setValue("photo", data.data.url);
    } catch (error) {
      toast.error("image not upload");
      toast.dismiss(toastId);
    }
  };

  const onSubmit = async (data) => {
    const { email, password, name, photo } = data;
    const toastId = toast.loading("Loading...");
    try {
      const user = await createUser(email, password);
     await createJWT({email});
      await profileUpdate({
        displayName: name,
        photoURL: photo,
      });
      toast.dismiss(toastId);
      toast.success("Create Successfull");
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
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
            </div>
            <input
              onChange={imageUpload}
              type="file"
              class="file-input file-input-bordered file-input-primary w-full max-w-xs"
              {...register("photo", { required: true })}
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Signup</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
