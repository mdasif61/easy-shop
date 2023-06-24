"use client";
import { afterLoginNavData, beforeLoginNavData } from "@/data/navData";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const { uid, displayName, photoURL } = user || {};
  const navLinks = uid ? afterLoginNavData : beforeLoginNavData;
  const {replace}=useRouter();
  const path=usePathname()

  const handleLogout = async () => {
    try {
      await logOut();
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });
      const data = res.json();
      toast.success("logout success");
      if(path.includes('/dashboard' || '/profile')){
        replace('/')
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href="/">
          Easy Shop
        </Link>
      </div>
      <div className="flex-none">
        <div className="flex">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          ></label>
          <ul tabIndex={0} className="flex">
            {navLinks.map(({ path, title }) => (
              <li className="mx-5" key={path}>
                <Link href={path}>{title}</Link>
              </li>
            ))}
            {uid && (
              <li className="mx-5">
                <button onClick={handleLogout} className="btn btn-warning">
                  Logout
                </button>
              </li>
            )}
          </ul>
          <div className="w-10 rounded-full">
            <Image
              width={500}
              height={200}
              src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="image not found"
            />
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
