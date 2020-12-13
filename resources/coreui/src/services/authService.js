import axios from 'axios';
import {API, STORAGENAME} from "../environment";


const URL = API;
const storageName = STORAGENAME;

const postLogin = (data) => {
  return axios.post(`${URL}/login`, data);
}

const setCurrentUser = (user) => {
  localStorage.setItem(storageName, btoa(JSON.stringify(user)));
}

const getCurrentUser = () => {
  let user =  localStorage.getItem(storageName);
  if(user) {
    user = JSON.parse(atob(user));
  } else {
    user = {
      name:'',
      email:'',
      phone:'',
      image: ''
    }
  }
  return user;
}

const getToken = () => {
  const user = getCurrentUser();
  return user.token??null;
}

const removeCurrentUser = () => {
  localStorage.removeItem(storageName);
}

export {
  postLogin,
  setCurrentUser,
  getCurrentUser,
  getToken,
  removeCurrentUser
};
