# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Structure of application

## App.js

This is the main java script file. 
All the components are importeded here.
Function to fetch API is here. This function is passed as props to Navbar component.
State of this funstion is passed to Users components as props.

## Users.js

This component receives props users and loading.
It makes decision of returning Loading or Users components.
It passes key and user as props to UserItem compoent.

## Loading.js

This component returns a spinner 'loader.gif' if Loading is true i.e in the period when API is being fetched.

## UserItem.js

This component uses props and puts data in a card grid layout.

# Netlify link

https://elastic-kilby-53d01d.netlify.app/
