"use client";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import Link from "next/link"; 

export const Navbar = () => {
  const navigation = [
    {
      name: "Product",
      href: "/",
      options: [
        { label: "test1", href: "/1" },
        { label: "test2", href: "/2" },
        { label: "test3", href: "/3" },
      ],
    },
    {
      name: "Solutions",
      href: "/",
      options: [
        { label: "test1", href: "/1" },
        { label: "test2", href: "/2" },
        { label: "test3", href: "/3" },
      ],
    },
    { name: "Courses", href: "/" },
    { name: "Membership", href: "/" },
  ];

  return (
    <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-2xl font-medium text-purple-950 dark:text-gray-100">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center">
            <span className="w-8 h-8">
              <Image src="/img/logo.png" alt="North" width={32} height={32} className="w-8" />
            </span>
            <span></span>
          </a>
        </Link>
      </div>

      {/* Mobile Menu */}
      <Disclosure as="div" className="absolute inset-y-0 right-0 flex items-center lg:hidden">
        {({ open }) => (
          <>
            <Disclosure.Button
              className="inline-flex items-center justify-center px-2 py-1 ml-auto text-gray-500 rounded-md hover:text-purple-950 focus:text-purple-950 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              aria-label="Toggle Menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`w-6 h-6 ${open ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                />
              </svg>
            </Disclosure.Button>

            <Disclosure.Panel className="absolute top-full left-0 w-full mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900">
              <div className="flex flex-col w-full">
                {navigation.map((item, index) => (
                  <div key={index}>
                    {/* Main Menu Item */}
                    <Link href={item.href} passHref legacyBehavior>
                      <a className="block px-4 py-2 text-gray-800 rounded-md dark:text-gray-200 hover:text-purple-950 focus:text-purple-950 focus:bg-indigo-100 dark:focus:bg-gray-800">
                        {item.name}
                        {item.options && (
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block ml-2">
                            <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                          </svg>
                        )}
                      </a>
                    </Link>

                    {/* Dropdown Menu Items */}
                    {item.options && (
                      <Disclosure.Panel className="pl-4 mt-1 space-y-1">
                        {item.options.map((option, idx) => (
                          <Link key={idx} href={option.href} passHref legacyBehavior>
                            <a className="block px-2 py-1 text-gray-600 rounded-md dark:text-gray-300 hover:text-purple-950 focus:text-purple-950 focus:bg-indigo-100 dark:focus:bg-gray-800">
                              {option.label}
                            </a>
                          </Link>
                        ))}
                      </Disclosure.Panel>
                    )}
                  </div>
                ))}
                <Link href="/" passHref legacyBehavior>
                  <a className="block px-6 py-2 mt-3 text-center text-white bg-purple-950 rounded-md lg:ml-5">
                    Get Started
                  </a>
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:items-center">
        <ul className="flex items-center justify-end flex-1 space-x-6 lg:space-x-8">
          {navigation.map((item, index) => (
            <li key={index} className="relative">
              <Link href={item.href} passHref legacyBehavior>
                <a className="inline-block px-4 py-2 text-lg font-normal text-gray-800 rounded-md dark:text-gray-200 hover:text-purple-950 focus:text-purple-950 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                  {item.name}
                  {item.options && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 inline-block ml-2">
                      <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              </Link>

              {/* Dropdown Menu for Desktop */}
              {item.options && (
                <ul className="absolute left-0 w-full mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-900 hidden">
                  {item.options.map((option, idx) => (
                    <li key={idx}>
                      <Link href={option.href} passHref legacyBehavior>
                        <a className="block px-4 py-2 text-gray-600 rounded-md dark:text-gray-300 hover:text-purple-950 focus:text-purple-950 focus:bg-indigo-100 dark:focus:bg-gray-800">
                          {option.label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action & Theme Switcher */}
      <div className="hidden space-x-4 lg:flex items-center">
        <Link href="/" passHref legacyBehavior>
          <a className="px-6 py-2 text-white bg-purple-950 rounded-md md:ml-5">
            Get Started
          </a>
        </Link>
      </div>
    </nav>
  );
};
