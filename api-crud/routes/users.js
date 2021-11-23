import express from 'express';
import {  uid } from 'uid';
const router=express.Router();
const users=[]
router.get("/", (req, res) =>{
    res.send(users)});

router.post("/", (req, res) =>{
        //res.send("post")
        const user=req.body;
        
        const userid=uid();
        const userwithid={...user,id:uid()}
        users.push(userwithid)
        //res.send(`${user.name}`)
        res.send(`add datbase ${user.name}`)
        });
router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const finduser=users.find((user) =>user.id=id);
    res.send(finduser);
});
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
    users=users.filter((user) => user.id != id);
    res.send(`deleted ${id}`)
});
router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const {name,age,password,gender,country,phone}=req.body;

    const user=users.find((user) =>user.id=id);
    if(name)
    {
        user.name=name;
    }
    if(age)
    {
        user.age=age;
    }if(gender)
    {
        user.gender=gender;
    }
    if(password)
    {
        user.password=password;
    }
    if(country)
    {
        user.country=country;
    }
    if(phone)
    {
        user.phone=phone;
    }
    res.send(`updated ${id}`);
});
export  default router;
