import axios from "axios";


export default {
  search: function() {
      console.log("api working?")
    return axios.get("https://randomuser.me/api/?inc=name,email,picture&results=50");
  }
};