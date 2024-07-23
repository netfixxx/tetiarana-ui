import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
    return (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 ">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Tetiarana</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered w-24 md:w-auto"
                        />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="Tailwind CSS Navbar component"
                                    src=""
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li>
                                <a>Settings</a>
                            </li>
                            <li>
                                <a>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mr-4 ml-4">
                    <input type="checkbox" className="toggle" defaultChecked />
                </div>
                <div>
                    <Link href="/login" legacyBehavior>
                        <a className="btn btn-primary">Se connecter</a>
                    </Link>
                </div>
                <div className="ml-2">
                    <Link href="/login" legacyBehavior>
                        <a className="btn btn-primary">Inscrivez</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
