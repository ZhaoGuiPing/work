export let a= 10;   //第一种方法  
export let  b =20;
export let c = 30;

let aa="hello";   //第二种方法
let bb="好好学习";
let cc="天天向上"

let firstName = "张三";
let lastName = "李四";
let year = 1987;
let box = {     
    num : 10
}

//第三种方法
export function show() {
    console.log("111");
    
}
export function hide() {
    console.log("222");
    
}
export function get() {
    console.log("333");
    
}


function getStyle(){
    console.log("获取样式");
}
function setStyle(){
    console.log("设置样式");
}

export{
    aa,
    bb,
    cc,
    getStyle as gs,
    setStyle as ss,
    firstName,
    lastName,
    year,
    box
}


import {demo,count} from "./login";  // 入口login模块,模块之间也可互相引，逻辑关系要理清
export {
    demo,count
}

















