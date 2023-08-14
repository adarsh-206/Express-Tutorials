/* Routers:- 

Allows you to define groups of routes under a common URL prefix and separate them into separate files or modules.
it is a way to organize and modularize your web application's routes and middleware.   

*/



/* Why Routers:- 

Suppose in an ecommerce app we have users, product, cart, etc. So we have to define seperate routes for them.
Router combines the similar routes and makes our code easy.  

*/



/* How to create Router:- 

1. Create a router instance using the express.Router() function.
2. Define routes using methods like router.get(), router.post(), router.put(), and router.delete().
3. "mount" router on a specific path using app.use().   

*/



/* What are middlewares? 

Middlewares are functions that have access to request object, response object, and next middleware function in the application's
request-response cycle. These function are used to modify request and response objects for tasks like adding response headers, etc.

Use-cases of middlewares:- 

1. Security check of user's token/access/auth.
2. Body parsing of request.
3. Sanitizing your data.
4. Login user



/* What should be the ideal folder structure?  Where should be the views be placed?
   Where should public assests placed?  How to link stylesheets?

The answer for all the above questions is Express Generator.

*/



/* What is Express Generator?

Express Generator is a command-line tool for quickly generating the basic structure of an Express.js application. 
It provides a scaffolding mechanism that creates a template project with predefined directory structures, files, and some initial code. 

                             npx express-generator   OR   npm i express-generator

The Express Generator tool generates an application skeleton with the following features:

    1. Directory Structure: It sets up a recommended directory structure for your Express application, including folders for routes, views, public assets, and more.
    2. Basic Server Setup: It creates a basic server setup with an entry point file (usually app.js or index.js) where you can configure your Express application.
    3. Route Templates: It generates route files with basic route handlers, allowing you to quickly add routes to your application.
    4. View Engine Configuration: If you choose to use a view engine like EJS or Pug, Express Generator can set up the necessary configurations and template files.
    5. Error Handling: It provides basic error handling middleware to catch and handle errors in your application.

*/
