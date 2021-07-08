# CuriousJr_Assignment
## Description
In this project we've developed a service to generate digital ceritificate images based on the user input and upload these images on the server and making it available for the users requesting it.
## Tech Stack
  <li>Nodejs</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>ExpressJs</li>
  <li>Joi</li>
  <li>Mocha</li>
  <li>Jest</li>
  
## Code Setup Steps

##### 1. Clone The Project
```
 git clone https://github.com/Sr1yansh/CuriousJr_Assignment.git
```
##### 2. Navigate To the project root Directory and Run Following Command
```
npm install
```
##### 3. To start the server run the following command in the rood directory of the project
```
node app.js
```

## Usage

##### 1.API to generate Certificate

Method | POST
-------| ----
**URL**| your post api URL

##### Accepted Parameters


Parameters  | Type   | Description
------------- | -------------| ------
name  | string | name to be printed on the certificated
customText  | string | To overwrite default certificate text user can add their own custom text with "@@" as a seperator where provided name will be placed

##### Curl Request With Default Values
```
curl --location --request POST 'http://localhost:8081/staging/su/verloopBot' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userName":"Harshit",
    "city":"Bombay"
}'
```

##### 2. API to fetch the ceritificate

  Method | GET
-------| ----
**URL**| your get api URL

##### Accepted Parameters

Parameters  | Type   | Description
------------- | -------------| ------
{{id}}  | To be passed in the url i.e after base URL | It's a Id of certificate document that is generated and returned to user after certificate generation process

##### Curl Request With Default Values
```
curl --location --request GET 'http://localhost:8081/staging/su/affiliate/cityAndStates'
```
