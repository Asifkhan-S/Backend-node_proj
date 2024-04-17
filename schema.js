const mongoose=require('mongoose')

//Defining schema
//what are fields and what are the data are present in the collections are mentioned here
const expenseDetailSchema=new mongoose.Schema({
    amount:{
        type:Number
    },
    category:{
        type:String
    },
    date:{
        type:String
    }
})

//creating a model
//two parametetrs one is name of the collections second one is that schema
const Expense=mongoose.model('ExpenseDetails',expenseDetailSchema)

module.exports={ Expense }