import React, { useState } from "react";
import imgs from "./imgs/login-banner.svg";
import {
  Button,
  DialogTitle,
  IconButton,
  DialogContent,
  Typography,
  Dialog,
  DialogActions,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const LoginForm = ({open , onClose}) => {

  console.log(open )
  

  return (     
      <BootstrapDialog
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Login 
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => onClose()}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}x
        </IconButton>
        <DialogContent dividers>
          <div className=" flex justify-center items-center">
            <div className="flex bg-red-100 rounded-xl">
              <div>
                <img src={imgs} alt="img" />
              </div>
              <div className=" w-[460px] h-[510px] flex justify-center">
                <div>
                  <p className="font-semibold text-2xl pt-16">
                    {" "}
                    Login or Register
                  </p>
                  <p className="text-sm text-gray-500 pt-2">
                    {" "}
                    for Better Experience, Order tracking & Regular <br></br>{" "}
                    updates
                  </p>

                  <input
                    className="w-[300px] rounded-md py-3 mt-4"
                    type="text"
                    placeholder="    Enter Mobile Number"
                  />

                  <button className="block bg-gray-400 mt-3 py-3 px-[116px] rounded-xl font-semibold text-white">
                    {" "}
                    Send OTP
                  </button>

                  <p className="text-[10.5px] mt-3 text-gray-500">
                    By continuing I agree with the{" "}
                    <span className="underline">
                      {" "}
                      Privacy Policy,Terms & Conditions{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
  );
};
export default LoginForm;
