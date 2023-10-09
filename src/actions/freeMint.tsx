import axios from "axios";

export const actionSetFreeMintCount = (account: any) => {
  return axios
    .post("/api/free_mint/set_count", {
      addressWallet: account,
    })
    .then((res) => {
      return res.data;
    });
};

export const actionGetFreeMintCount = (account: any) => {
  return axios
    .post("/api/free_mint/get_count", {
      addressWallet: account,
    })
    .then((res) => {
      return res.data;
    });
};