import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "../components/Message";
import Loading from "../components/Loading";
import { getUserDetails, updateUser } from "../actions/userActions";
import Navbar from "../components/Navbar";
import { InputContainer } from "./ShippingScreen";
import { ButtonAddToCart2 } from "./CartScreen";

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  //   const userUpdate = useSelector((state) => state.userUpdate);
  //   const {
  //     loading: loadingUpdate,
  //     error: errorUpdate,
  //     success: successUpdate,
  //   } = userUpdate;

  useEffect(() => {
    if (!user.name || user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [dispatch, user, userId]);

  return (
    <>
      <Navbar />
      <Link to="/admin/userlist" className="btn-goback">
        Go Back
      </Link>
      <form className="form-edit">
        <h1>Edit User</h1>
        {loading ? (
          <Loading />
        ) : error ? (
          <Message color={"red"} />
        ) : (
          <>
            <InputContainer>
              <h2>Name</h2>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <h2>Email</h2>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <label>
                <p>Is Admin</p>
                <input
                  type="checkbox"
                  aria-label="Is Admin"
                  checked={isAdmin}
                  onChange={(e) => setIsAdmin(e.target.checked)}
                />
              </label>
            </InputContainer>
            <ButtonAddToCart2>Edit</ButtonAddToCart2>
          </>
        )}
      </form>
    </>
  );
};

export default UserEditScreen;
