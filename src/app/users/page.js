"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/feature/userSlice";
// import { getUsers } from "./redux/feature/userSlice";

export default function Home() {
  const dispatch = useDispatch();

  const { error, isLoading, user } = useSelector((store) => store?.user);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = dispatch(getUsers());
  };

  if (isLoading) {
    return (
      <div className="loader-box">
        <div className="loader"></div>
      </div>
     
    );
  }
  return (
    <main>
    
      <div className="mt-5">
        <center>
          <h3 class="text-3xl font-extrabold dark:text-white">User List</h3>
        </center>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 ml-64 p-8">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  City
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {user?.map((user) => {
                return (
                  <>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {user?.name}
                      </th>
                      <td className="px-6 py-4">{user?.email}</td>
                      <td className="px-6 py-4">{user?.phone}</td>
                      <td className="px-6 py-4">{user?.address?.city}</td>
                      <td className="px-6 py-4">
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </a>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
