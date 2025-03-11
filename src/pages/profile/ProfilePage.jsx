import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/index/users.js";
import MainLayout from "../../components/MainLayout.jsx";
import ProfilePicture from "../../components/ProfilePicture.jsx";

const ProfilePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const {
    data: profileDate,
    isLoading: profileIsLoading,
    error: profileError,
  } = useQuery({
    queryFn: () => {
      return getUserProfile({ token: userState.userInfo.token });
    },
    queryKey: ["profile"],
  });

  useEffect(() => {
    if (!userState.userInfo) {
      navigate("/");
    }
  }, [navigate, userState.userInfo]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    values: {
      name: profileIsLoading ? "" : profileDate.name,
      email: profileIsLoading ? "" : profileDate.email,
    },
    mode: "onChange",
  });
  const submitHandler = (data) => {};

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm m-auto ">
          <ProfilePicture avatar={profileDate?.avatar} />
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  minLength: {
                    value: 1,
                    message: "Name length must be at least 1 charcter",
                  },
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                placeholder="Enter Name"
                className={`placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 
                    py-4 font-semibold block outline-none border ${
                      errors.name ? "border-red-500" : "border-[#c3cad9]"
                    }`}
              />
              {errors.name?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                {...register("email", {
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Enter a vaild email address",
                  },
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                })}
                placeholder="Enter Email"
                className={`placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 
                    py-4 font-semibold block outline-none border  ${
                      errors.email ? "border-red-500" : "border-[#c3cad9]"
                    } `}
              />
              {errors.email?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  minLength: {
                    value: 6,
                    message: "Password length must be at least 6 charcters",
                  },
                  required: {
                    value: true,
                    message: "password is required",
                  },
                })}
                placeholder="Enter Password"
                className={`placeholder:text-[#959ead] text-dark-hard rounded-lg px-5 
                py-4 font-semibold block outline-none border  ${
                  errors.password ? "border-red-500" : "border-[#c3cad9]"
                } `}
              />
              {errors.password?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isValid || profileIsLoading}
              className="bg-primary text-white font-bold text-lg py-4 px-8
            w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Register
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
