/**
 * CRUD operations
 * adding new expenses-->add expense(post)
 * view existing ones-->get expense(get)
 * edit existing entries-->update expense(patch)
 * deleting entries-->delete expense(delete)
 *
 * adding a new user
 * validating existing user
 *
 * monthly analysis
 *
 */
/**
 * database-Expense Tracker
 * Collections 
 * i)Expense Details
 * 
 * 
 * 
 * 
 * 
 *          amount
 *          category
 *          date
 * ii)USerDetails
 *          username
 *          emailID
 *          password
 */
const {Expense}=require('./schema.js')
const express = require("express");
const mongoose = require("mongoose");

const app = express();

async function connnectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://asifkhan:8883007411@cluster1.xefnstf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1"
    );
    console.log("Connection have established");

    const port=process.env.PORT || 8000;
    app.listen(port, function () {
      console.log("Listening to port ${port}...");
    });
  } catch (error) {
    console.log(error);
    console.log("Couldn't establish DB connection:(");
  }
}

connnectToDb();
// app.get("/", function (request, response) {
//   response.status(200).json({ mesage: "hello" });
// });
/**
 * download git bash
 * take the link from empty repo 
 * git clone
 * and using bash create that in our local computer 
 * and paste the codes inside the empty folder
 * inside vs code use this comments
 * git add
 * git commit -m "crud operations(some message)"
 * git push
 */