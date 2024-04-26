/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser, updateUser } from "../redux/actions";
const CreateEditForm = ({ editUser, onCloseModal }) => {
  const [firstName, setFirstName] = useState(() =>
    editUser ? editUser.firstName : ""
  );
  const [lastName, setLastName] = useState(() =>
    editUser ? editUser.lastName : ""
  );
  const [email, setEmail] = useState(() => (editUser ? editUser.email : ""));
  const uuid = editUser?.uuid;
  const editingSession = Boolean(uuid);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    if (!editingSession && (!firstName || !lastName || !email)) return;
    if (!editingSession) {
      data.firstName = firstName;
      data.lastName = lastName;
      data.email = email;
    }
    if (editingSession) {
      if (firstName) data.firstName = firstName;
      if (lastName) data.lastName = lastName;
      if (email) data.email = email;
    }

    if (!editingSession) {
      dispatch(createUser(data));
      onCloseModal();
    } else if (editingSession) {
      dispatch(updateUser(data, uuid));
      onCloseModal();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[40vw] h-[400px] p-4 flex flex-col items-center"
    >
      <h1 className="text-3xl text-cyan-900 capitalize tracking-wide my-2 self-start font-extrabold">
        {editingSession ? "Edit User" : "Create User"}
      </h1>
      <div className="flex flex-col items-start w-full justify-between gap-2 mb-2 ">
        <label
          htmlFor="name"
          className="font-bold text-[1rem] uppercase text-cyan-900"
        >
          Name
        </label>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name="firstName"
          id="name"
          className=" bg-cyan-900 text-cyan-50 text-[1rem] placeholder:text-cyan-50 w-full h-[40px] focus:outline-none rounded-md p-2"
          placeholder="Enter User's Name"
        />
      </div>
      <div className="flex flex-col items-start w-full justify-between gap-2 mb-2">
        <label
          htmlFor="lastName"
          className="font-bold text-[1rem] uppercase text-cyan-900 whitespace-nowrap"
        >
          Last Name
        </label>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          name="lastName"
          id="lastName"
          className=" bg-cyan-900 text-cyan-50 text-[1rem] placeholder:text-cyan-50 w-full h-[40px] focus:outline-none rounded-md p-2"
          placeholder="Enter User's Last Name"
        />
      </div>
      <div className="flex flex-col items-start w-full justify-between gap-2 mb-2">
        <label
          htmlFor="email"
          className="font-bold text-[1rem] uppercase text-cyan-900 whitespace-nowrap"
        >
          Email
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          className=" bg-cyan-900 text-cyan-50 text-[1rem] placeholder:text-cyan-50 w-full h-[40px] focus:outline-none rounded-md p-2"
          placeholder="Enter User's Email id"
        />
      </div>
      <div className="self-end flex items mt-4 gap-4">
        <button className="px-[18px] text-cyan-50 rounded-lg py-[10px] bg-cyan-900">
          {editingSession ? "Update" : "Create"}
        </button>
        <button
          onClick={() => onCloseModal()}
          className="px-[18px] text-red-50 rounded-lg py-[10px] bg-red-900"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default CreateEditForm;
