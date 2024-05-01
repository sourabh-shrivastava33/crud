/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { FETCH_ALL_USERS } from "./redux/userActionTypes";
import { deleteUser, fetchAllUser } from "./redux/actions";
import { useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { MdDelete } from "react-icons/md";
import { MdModeEditOutline } from "react-icons/md";
import Modal from "./components/Modal";
import CreateEditForm from "./components/CreateEditForm";
function App() {
  const dispatch = useDispatch();
  const {
    users: { users: allUser },
  } = useSelector((state) => state.user);
  console.log(allUser);
  useEffect(() => {
    dispatch(fetchAllUser());
  }, [dispatch]);
  return (
    <div className="font-mono flex ">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />

        <div>
          <table className="w-[90%] mx-auto mt-8  ">
            <thead className="bg-cyan-800 text-cyan-50 ">
              <tr>
                <th className="w-[28rem] ">uuid</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allUser?.length > 0 ? (
                allUser.map((el) => {
                  return (
                    <tr key={el.uuid} className="h-[2.1rem] overflow-hidden">
                      <td className="text-center  font-semibold border border-gray-500 ">
                        {el.uuid}
                      </td>
                      <td className="text-center  font-semibold border border-gray-500 ">
                        {el.firstName}
                      </td>
                      <td className="text-center  font-semibold border border-gray-500 ">
                        {el.lastName}
                      </td>
                      <td className="text-center  font-semibold border border-gray-500 ">
                        {el.email}
                      </td>
                      <td className="text-center border border-gray-500 h-[2.1rem] ">
                        <MdDelete
                          className="text-xl text-cyan-800 cursor-pointer"
                          onClick={() => dispatch(deleteUser(el.uuid))}
                        />
                      </td>
                      <td className=" text-center border border-gray-500 h-[2.1rem] ">
                        <Modal>
                          <Modal.Open name="edit">
                            <MdModeEditOutline className="text-xl text-cyan-800 cursor-pointer" />
                          </Modal.Open>

                          <Modal.Window windowName="edit">
                            <CreateEditForm editUser={el} />
                          </Modal.Window>
                        </Modal>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>No Users Yet</tr>
              )}
            </tbody>
          </table>
          <div className="flex justify-end w-[90%] mx-auto ">
            <Modal>
              <Modal.Open name="createEdit">
                <button className="px-5 py-1 rounded-md bg-cyan-900 text-cyan-50 mt-3 text-sm hover:bg-cyan-600 transition-colors duration-300">
                  Create User
                </button>
              </Modal.Open>
              <Modal.Window windowName="createEdit">
                <CreateEditForm />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
