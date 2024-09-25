"use client";
import Link from "next/link";
import React, { useState, useEffect, ReactNode } from "react";

interface User {
  username: string;
  id: Number;
  email: string;
}

const Header1: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const auth_user = localStorage.getItem("user");
    if (auth_user) {
      try {
        const parsedUser = JSON.parse(auth_user);
        setUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage", error);
        localStorage.removeItem("user");
      }
    }
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const logout = () => {
    localStorage.removeItem("jwt");
    setIsAuthenticated(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Icon/Logo Section */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-2">
              LMS
            </span>
          </a>
        </div>

        {/* Navigation Links Section */}
        <div className="hidden md:flex flex-grow justify-center space-x-8 rtl:space-x-reverse">
          <ul className="flex space-x-8">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Auth Buttons Section */}
        <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!isAuthenticated ? (
            <>
              <Link href="/auth/register">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-4"
                >
                  Register
                </button>
              </Link>
              <Link href="/auth/login">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-4"
                >
                  Login
                </button>
              </Link>
            </>
          ) : (
            <>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {user && (
                  <button className="block  px-3 text-gray-900 dark:text-white">
                    {user.username}
                  </button>
                )}
              </a>
              <Link href="/auth/login">
                <button
                  type="button"
                  onClick={logout}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Logout
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header1;
