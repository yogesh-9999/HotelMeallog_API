const express= require('express')
const router =express.Router()
const {
    getFooditems,
  getHastags,
  getmealLogs,
  getuserlog,
  creatmealLog

}=require('../controller/Userlogs');

router.route('/').get(getmealLogs).post(creatmealLog);
router.route('/fooditems').get(getFooditems);
router.route('/hastags').get(getHastags);
router.route('/usermeal/:id').get(getuserlog);


module.exports=router