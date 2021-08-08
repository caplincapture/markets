import axios from "axios";

const KEY = "AIzaSyAq4sV_Xogvvm_VGv2Lg7WcGqGjW4F79og";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
