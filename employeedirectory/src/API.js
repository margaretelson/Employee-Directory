import axios from "axios";
const BASEURL = "https://randomuser.me/api/?inc=name,email,picture&results=50";



export default {
  search: function() {
      console.log("api working?")
    return axios.get(BASEURL);

  }
};