<?php
    header('Content-Type:text/html;charset=utf8;');
    $uname = $_GET['username'];
    $upwd = $_GET['password'];
    $link = mysqli_connect("localhost","root","","stu_ma");
    $res = mysqli_query($link,"SELECT * FROM `users` WHERE `name` = '$uname' AND `pwd` = '$upwd'");
    $arr = mysqli_fetch_all($res,MYSQLI_ASSOC);
    mysqli_close($link);
    if($arr){
        echo "登录成功";
    }else {
        echo "该用户不存在";
    }
?>