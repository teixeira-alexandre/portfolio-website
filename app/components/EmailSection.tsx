"use client";
import React, { FC } from "react";
import GithubIcon from "../../public/images/github-image.svg";
import LinkedInIcon from "../../public/images/linkedin-image.svg";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { sendEmail } from "../../utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const EmailSection: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect!
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com/teixeira-alexandre">
            <Image src={GithubIcon} alt="Github Icon" width={50} height={50} />
          </Link>
          <Link href="https://www.linkedin.com/in/alexandre-teixeira-a869622aa/">
            <Image
              src={LinkedInIcon}
              alt="LinkedIn Icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Full name
            </label>
            <input
              type="text"
              id="name"
              required
              className=" bg-[#18191E] border border-[#33353F] placeholder[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              placeholder="Full Name"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="text-white block text-sm mb-2 font-medium"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className=" bg-[#18191E] border border-[#33353F] placeholder[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              required
              placeholder="example@email.com"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className=" bg-[#18191E] border border-[#33353F] placeholder[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-3"
              placeholder=" Type your message"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
