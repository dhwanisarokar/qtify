import axios from "axios";

const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/top`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/albums/new`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENDPOINT}/songs`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const fetchGenres = async () => {
  try {
    const allObj = {
      key: "all",
      label: "All",
    }; // adding aditional obj because we also need all genres key or label

    const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
    const genresData = res.data.data;
    genresData.unshift(allObj);
    return genresData;
  } catch (error) {
    console.log(error);
  }
};
