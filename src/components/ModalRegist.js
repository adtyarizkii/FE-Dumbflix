import React from "react";
import { Modal, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ModalRegist({
  registerShow,
  setRegisterShow,
  registerHere,
}) {
  return (
    <Modal
      size="md"
      show={registerShow}
      onHide={() => setRegisterShow(false)}
      centered
    >
      <Modal.Body className="bg-Modal">
        <div className="card-auth p-4">
          <div
            style={{
              fontSize: "30px",
              lineHeight: "49px",
              fontWeight: "700",
              color: "white",
            }}
            className="mb-2"
          >
            Register
          </div>
          {/* {message && message} */}
          <form>
            <div className="mt-3 form">
              <input
                type="email"
                placeholder="Email"
                // value={email}
                name="email"
                // onChange={handleChange}
                className="px-3 py-2 mt-3"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                // value={password}
                // onChange={handleChange}
                className="px-3 py-2 mt-3"
              />
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                // value={password}
                // onChange={handleChange}
                className="px-3 py-2 mt-3"
              />
              <input
                type="text"
                placeholder="Gender (L/P)"
                name="gender"
                // value={password}
                // onChange={handleChange}
                className="px-3 py-2 mt-3"
              />
              <input
                type="number"
                placeholder="Phone"
                name="phone"
                // value={password}
                // onChange={handleChange}
                className="px-3 py-2 mt-3"
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                // value={password}
                // onChange={handleChange}
                className="px-3 py-2 mt-3"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn">Register</button>
              <p className="warning">
                Already have an account?
                <button onClick={registerHere} className="btnHere">
                  Click here
                </button>
              </p>
            </div>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}
