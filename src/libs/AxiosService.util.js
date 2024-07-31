/**
 * Created by charanjeetelectrovese@gmail.com on system AakritiS. on 03/04/18.
 */

import axios from "axios";
import Constants from "../config/constants";
import store from "../store";
import { actionLogoutUser } from "../actions/Auth.action";

export async function postRequest(url, params) {
  try {
    const tempRequest = await axios.post(`${Constants.DEFAULT_APP_URL}${url}`, {
      ...params,
    });
    if (tempRequest.status === 200) {
  
      if (tempRequest.data.response_code === 1) {
        return {
          error: false,
          message: "",
          data: tempRequest.data.response_obj,
          authorization: true,
          response_code: tempRequest.data.response_code,
        };
      }
      return {
        error: true,
        message: tempRequest.data.response_message,
        authorization: true,
        response_code: tempRequest.data.response_code,
      };
    }
  } catch (err) {
    if (err?.response?.status === 401) {
      store.dispatch(actionLogoutUser());
      return { error: true, authorization: false, response_code: 0 };
    }
    return {
      error: true,
      message: Constants.API_ERROR_OBJ[err.response.status] ?  `${Constants.API_ERROR_OBJ[err.response.status]}` : "Something Went Wrong",
      authorization: true,
    };
  }
}

export async function getRequest(url, params) {
  try {
    const tempRequest = await axios.get(`${Constants.DEFAULT_APP_URL}${url}`, {
      params: { ...params },
    });
    if (tempRequest.status === 200) {
    
      if (tempRequest.data.response_code === 1) {
        return {
          error: false,
          message: "",
          data: tempRequest.data.response_obj,
          authorization: true,
        };
      }
      return {
        error: true,
        message: tempRequest.data.response_message,
        authorization: true,
      };
    }
  } catch (err) {
    if (err.response.status === 401) {
      return { error: true, authorization: false };
    }
    return {
      error: true,
      message: Constants.API_ERROR_OBJ[err.response.status] ?  `${Constants.API_ERROR_OBJ[err.response.status]}` : "Something Went Wrong",
      authorization: true,
    };
  }
}

export async function formDataRequest(url, formData) {
 
  try {
    const tempRequest = await axios({
      method: "post",
      url: `${Constants.DEFAULT_APP_URL}${url}`,
      data: formData,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });
    if (tempRequest.status === 200) {
    
      if (tempRequest.data.response_code === 1) {
        return {
          error: false,
          message: "",
          data: tempRequest.data.response_obj,
          authorization: true,
        };
      }
      return {
        error: true,
        message: tempRequest.data.response_message,
        authorization: true,
      };
    }
  } catch (err) {
    if (err.response.status === 401) {
      return { error: true, authorization: false };
    }
    return {
      error: true,
      message: Constants.API_ERROR_OBJ[err.response.status] ?  `${Constants.API_ERROR_OBJ[err.response.status]}` : "Something Went Wrong",
      authorization: true,
    };
  }
}