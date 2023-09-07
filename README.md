# full-stack-movies
A follow along of the FreeCodeCamp Full Stack Development with Java Spring Boot, React, and MongoDB Youtube tutorial - [here].

[here]: (https://www.youtube.com/watch?v=5PdEmeopJVQ&t=326s&ab_channel=freeCodeCamp.org)

The backend tutorial uses:
- JDK17
- IntelliJ IDEA Community Edition
- MongoDB Atlas / Compass
- Spring Boot
- Postman

The frontend tutorial uses:
- VSCode


## Prerequisites
I have been self-teaching Java/React/HTML/CSS (doing online courses), and this is my first full stack application. I found this tutorial okay. The backend was explained really well and easy to follow. The frontend was hard - it was more just watching him code in some parts. So I had to look things up myself. I found it helpful that a lot of errors had been solved by people in the comments section.

Perhaps basic Java, HTML and CSS knowledge should be sufficient.

##
### Problems/Solutions
I hit some obstacles when following the video and by going through the comments you'll see others faced the same issues too. The tutors don't go through everything they do, especially the frontend section, and the material is also slighted data too. It's better to also take the code from their github repos (their links are in the video description) rather than only follow what is on the screen.

Problems from the backend tutorial:

- Use `${MONGO_DATABASE}` etc. not `${env.MONGO_DATABASE}`

Problems from the Front End tutorial:

- CORS error from the frontend running on port 3000 and the backend on port 8080. Resolve this by adding `@CrossOrigin` to MovieController.java and ReviewController.java.
- for the [axiosConfig.js](movies-frontend/src/api/axiosConfig.js) file, use your baseURL (don't need to set up ngrok).
- `create-react-app` has been depreciated but still usable.


