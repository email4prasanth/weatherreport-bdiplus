### client and server Communication
- The process of connecting a React.js client with a Node.js server using the popular Express framework.
- Connect client and server | React JS, Node JS, Express | Send data from server to client | API
#### Topics:
- Setting up a React.js project and creating a user-friendly interface.
- Creating a Node.js server with Express for efficient server-side operations.
- Establishing API routes to enable communication between the client and server.
- Implementing data fetching and sending requests between React.js and Node.js.
- Handling CORS (Cross-Origin Resource Sharing) to ensure secure and seamless communication.
- Incorporating state management for efficient data handling in React.js.

- Create a server and client 
##### Step-1. Create server using Node.js
- Click on `server` and open the terminal and type 
```
mkdir server
cd .\server\
npm init (click enter for all)
```
- Now open the `server` folder you can find `package.json` is created.
```
npm i express nodemon body-parser
npm i axios cors dotenv
```
- you can see the `server` folder contain `node_modules` folder and `package-lock.json`. under `server` we need to create `index.js` since while builing package.json` we accepted **"main":"index.js"**
- steps to create index.js file
    - import express or constant
    - create variable app and insert express
    - create variable hostname and port
    - use listen start node.js server and logs a message on the console.
    - If you run the script `npm run start` it will through an error, to resolve this open `package.json` under scripts add **"start":"nodemon index.js"** instead of **test**. add `"type": "module"` in the package.json under main.

##### Step-2. Create client using React.js
- you can see client folder, open terminal `client`, create new React application
```
npx create-react-app client
```
- you can see folders `node_modules, public, src` and files `package-lock.json and package.json` and `README.md`.
```.
cd .\client\
npm install axios
npm start -y
```
- Remove the unwanted files under Public folder like `logo` and under src remove `apptest.js, logo.sgv, reportwebvitals.js`.
- In index.js remove `reportWebVitals`, edit App.js (install vs extension extensions like ES7 React/Redux snippets) 
#### install tailwind css in App.js
- Open `tailwindcss.com` - getstarted-- terminal copy install it in the clien side.
- use [link](https://github.com/Akintola97/weather-yt/blob/main/client/tailwind.config.js) and edit the file `tailwind.config.js`

- The App.js at client side is tested and working perfectly which means front end is working properly
- open [link](https://openweathermap.org/)
- a single zipcode is getting weather data, this shows the backend is communicating succesfully.

### Establish communication between frontend and backend
- Open client - src - create `components` folder and `Form.jsx` type rafce.
- Front end created search button
- it is working, install dependencies both frontend and backend to avoid unnecessay conflicts.

- Ceate `WeatherData.jsx` under `src/components` and search for `react router dom` npms. run under client `npm i react-router-dom`
- in App.js add add `import {Routers, Router} from 'react-router-dom'` to make this use under `index.js` 
- 1:11:09 weather data is coming.
- Frontend/client/reactjs running at 3000 port
- Backend/server/nodejs is running at 5000 port


- I pulled the code from repo, i open client where `node_modules` are not available so ran `npm install react-scripts@latest` then  `npm run start`.
- I open server and installed
```
npm i express nodemon body-parser axios cors dotenv
```
- `npm run build` is done on client proxy added along with home page
