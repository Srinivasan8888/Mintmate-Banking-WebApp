"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CustomInput } from "./CustomInput";
import { authFormSchema } from "@/lib/utils";



const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);

  const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof authFormSchema>) {
    console.log(values);
  }

  return (
    <div className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="flex cursor-pointer items-center gap-1 px-4">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="mintmate logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Mintmate
          </h1>
        </Link>
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">
          {/* Additional content for linked account */}
        </div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />

              <Button type="submit" className="form-btn">Submit</Button>
            </form>
          </Form>
        </>
      )}
    </div>
  );
};

export default AuthForm;
