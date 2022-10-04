const {UserLog,FoodItems,Hastags} = require("../models/UserLog");
const asyncWrapper=require('../middleware/async')


const getHastags=asyncWrapper(async (req, res) => {
  
  const hastags = await Hastags.find({});
  res.status(200).json({ hastags });

})
const getFooditems=asyncWrapper(async(req,res)=>{
  const fooditems=await FoodItems.find({});
  res.status(200).json({fooditems});
})

const getmealLogs=asyncWrapper(async(req,res)=>{
  const mealLog=await UserLog.find({});
  res.status(200).json({mealLog});

})

const creatmealLog=asyncWrapper( async(req,res)=>{
  const hastags=req.body.hastag;
  const fooditems=req.body.fooditem;
  console.log(hastags);
  const mealLog=await UserLog.create(req.body);
  await Hastags.create(hastags);
  await FoodItems.create(fooditems);
console.log(hastags);

  res.status(200).json({mealLog});
})
const getuserlog=asyncWrapper( async (req,res)=>{

  const id=req.params.id;
  console.log(id);

  const userlog= await UserLog.find({userId :String(id)});

  if (!userlog) {
    return res.status(404).json({ msg: `no log with this id: ${id}` });
  }

  res.status(200).json({ userlog });
})






module.exports = {
  getFooditems,
  getHastags,
  getmealLogs,
  getuserlog,
  creatmealLog
};
