import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { HOME_PATH, MENU_BUTTON, MENU_ITEMS } from "../lib/constants";
import { Link, NavLink } from "react-router-dom";
import HorizontalLine from "./HorizontalLine";

interface PropTypes {}

const Header: React.FC<PropTypes> = () => {
  return (
    <>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {MENU_ITEMS.map((m) => (
                <li key={m.url}>
                  <NavLink
                    to={m.url}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {m.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to={HOME_PATH}>
            <button className="btn btn-outline normal-case text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 7.5l.415-.207a.75.75 0 011.085.67V10.5m0 0h6m-6 0h-1.5m1.5 0v5.438c0 .354.161.697.473.865a3.751 3.751 0 005.452-2.553c.083-.409-.263-.75-.68-.75h-.745M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="navbar-end space-x-1">
          <ThemeSwitcher />
          <ul className="menu menu-horizontal px-1 hidden lg:flex space-x-2">
            {MENU_ITEMS.map((m) => (
              <li key={m.url}>
                <NavLink
                  to={m.url}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {m.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to={MENU_BUTTON.url}>
            <button className="btn btn-sm">{MENU_BUTTON.title}</button>
          </Link>
        </div>
      </div>
      <HorizontalLine />
    </>
  );
};

export default Header;
