import axios, { AxiosRequestConfig } from 'axios';

const API_URL_CARE_TAKER = 'https://dementia-care-service-vhiugihsdq-ew.a.run.app/userdetails/caretakerdetails?email=harit@db.com';

const API_URL_POST_PATIENT = 'https://dementia-care-service-vhiugihsdq-ew.a.run.app/userdetails/addPatient';

export const fetchPosts = async (payload: AxiosRequestConfig<any> | undefined) => {
  try {
    const response = await axios.get(API_URL_CARE_TAKER);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};


export const postSubmitData = async (payload: any) => {
    try {
      const response = await axios.post(API_URL_POST_PATIENT);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  };