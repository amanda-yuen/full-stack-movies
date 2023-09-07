// config and export the Axios object that we will use to make HTTP request to the relevant remote API through this code

import axios from "axios";

export default axios.create({

    /* Ngrok is a service that you need to setup yourself and your baseURL will be different from his. 
    I googled it, set up an account, added ngrok extension to VS code and used the URL it generated instead. 
    That was when my CORS error went away. I didn't need the @CrossOrigin notation either.
    Ngrok is a software to create a tunnel from a local port to a remote server. */

    //baseURL = base address of the API endpoints that our client react application will be calling
    //when we use axios to call the end point, we won't need to repeat the base URL with each HTTP request in our code, 
    // we will only need to include the addtional path information required to target a specific endpoint.
    baseURL:'http://localhost:8080',

    // during the dev phase, the tech use by the remote machine to expose the relevant API endpoints is called ngrok
    // we need this setting so our client HTTP request to be blocked by CORS (cross origin resource sharing.)
    // - because the relevant web api is running in a different domain/origin, that CORS may block access to the endpoint
    // overcome the restrictions by CORS using this line
    headers: {"ngrok-skip-browser-warning": "true"}

});