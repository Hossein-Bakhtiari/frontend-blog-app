import axios from "axios";

export const getAllPost = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/posts");
    console.log(data)
    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);
    throw new Error(error.message);
  }
};
