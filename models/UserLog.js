const mongoose=require('mongoose')

const Hastagsschema=new mongoose.Schema({
id:Number,
name:String
})
const Hastags= mongoose.model('Hastags',Hastagsschema ,'Hastags')


const FoodItemsschema=new mongoose.Schema({
   id:Number,
   name:String
   })
 const FoodItems=  mongoose.model('FoodItems',FoodItemsschema ,'FoodItems')
   
const UserLogschema =new mongoose.Schema({

   userId:{
      type:String,
      required:[true,'must provide userId'],
   },

   logId:{
      type:String,
      required:[true,'must provide logId'],
   },
  hastag:Hastagsschema,
  fooditem:FoodItemsschema
   
    
})
const UserLog=mongoose.model('UserLog',UserLogschema);



module.exports= {
UserLog:UserLog,
FoodItems:FoodItems,
Hastags:Hastags
}