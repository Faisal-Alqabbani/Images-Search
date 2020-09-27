import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Qqj2ma-fSV8rEJ7SJotWXFIqz3tZ6PLAOK37FvFPTbg",
  },
});
