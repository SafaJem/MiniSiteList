const express=require('express')
const router=express.Router()
const List=require('../models/List')

router.post('/add',async(req,res)=>{ 
    const {titre} = req.body

    try{
        const newList= new List({
            titre
        })
    const list =  await newList.save()
      res.json({
        message:'list added',list
    })
    }
    catch(err){console.log(err)}
})
router.get('/',async(req,res)=>{
    try{
        const lists=await List.find()
        res.json({message:"lists",lists})
    }
    catch(err){console.log(err)}

})
router.delete('/delete/:id',async(req,res)=>{
    const {id} =req.params
    try{
        const list=await List.findOneAndDelete({_id:id})
        res.json({message:"list deleted",list})
    }
    catch(err){console.log(err)}

})

router.put("/edit/:_id", async (req, res) => {
    const { _id } = req.params;
    try {
      const list = await List.findOneAndUpdate({ _id }, { $set: req.body },{new:true});
      res.json({ msg: "list edited", list });
    } catch (error) {
      console.log(error);
    }
  });


module.exports=router