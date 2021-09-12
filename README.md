# Amazon Clone project using React and Firebase 🚀✨

This project uses React and some of its functionalities like React Context Api and Firebase capabilities to host and authenticate users. Its just a simple replication with login and checkout functionality. 

Hosted URL on firebase : https://clone-2befd.web.app

## Few things to keep in mind 

* Npm modules required - firebase-tools , firebase , react-router-dom
* Do the firebase configuration correctly to deploy the app
 
## Firebase deployment 
 For Firebase deployment first go to your firebase console and create a web application . Copy the Config details from project settings to be used in [firebase.js](https://github.com/Dibyanshu-gtm/amazon-clone/blob/master/src/firebase.js) . Do the above step before you start to code the project. 
 
 For User authentication , Go to firebase Console and then to Authentication settings and enable Email & Password authentication. 

 For deploying the app ,  
 ```
  $  firebase login
 ```
This will prompt you to login to your firebase account
```
$ firebase init
```
Once you init firebase , it will show you various options on firebase tools. For hosting the app , Select Hosting and then select your firebase console project from your existing projects. Then you can select on the folder you want to deploy ( select build folder) and if its a Single page index.html or not ( In this case yes).  
  
  Now Just run npm build and then 
  ```
    firebase deploy
  ```
Enjoy the app 😊  
  


## Create React App help 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

