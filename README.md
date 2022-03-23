# basic-middle-ware-error-handling

# About Repository:
This is a basic node-js server that I created to show the basic set-up of an express-js server middleware.

# Software(s) required:
* Latest stable version of Node Package Manager
* MongoDB Database

# Project Setup:
## NB!
Please make sure you have a running instance of Mongodb.

* Step 1:

Switch to the projects root directory and run `npm install` to install the required packages.

* Step 2:

In the projects root directory create a `.env` file and add the following variables:

`PORT`

`MONGO_URI`

* Step 3:

Run `npm  run dev` to start-up the server and access the end-points on `http://localhost:PORT/api/people`.

# Dependencies:
* EXPRESS
* MONGOOSE
* MORGAN

# Dev-dependencies:
* DOTENV
* NODEMON
