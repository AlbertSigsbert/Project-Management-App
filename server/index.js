const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require('./schema/schema');
const cors = require('cors');
const connectDB = require('./config/db');
const port = process.env.PORT;

//Init app
const app = express();

//Connect to DB
connectDB();

//Set CORS
app.use(cors());

//Set graphql express endpoint & middleware
app.use('/graphql', graphqlHTTP({
   schema,
   graphiql:process.env.NODE_ENV === 'development'
}));


//Listening for Requests
app.listen(port, console.log(`Server running on port ${port}`));
