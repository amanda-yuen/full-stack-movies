// config and export the Axios object that we will use to make HTTP request to the relevant remote API through this code

import axios from "axios";

export default axios.create({

    /* Ngrok is a software to create a tunnel from a local port to a remote server. */

    //baseURL = base address of the API endpoints that our client react application will be calling
    //when we use axios to call the end point, we won't need to repeat the base URL with each HTTP request in our code, 
    // we will only need to include the addtional path information required to target a specific endpoint.
    baseURL:'http://localhost:8080'
});