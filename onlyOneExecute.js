const exec = require("child_process").execSync;
const fs = require("fs");
const axios = require("axios");
const smartReplace = require("./smartReplace");


async function start() {
    console.log(`北京时间 (UTC+08)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}}`);
    if (process.env.JD_COOKIE) {
        console.log(`当前共${process.env.JD_COOKIE.split("&").length}个账号需要签到`);
    } else {
        console.log("请填写 JD_COOKIE 后在继续");
    }

    console.log("执行完毕");
}

start();
