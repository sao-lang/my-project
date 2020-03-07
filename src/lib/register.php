<?php
    header('Content-Type:text/html;charset=utf8;');
    $uname = $_GET['username'];
    $upwd = $_GET['password'];
    $link = mysqli_connect("localhost","root","","stu_ma");
    $res = mysqli_query($link,"SELECT * FROM `users` WHERE `name` = '$uname'");
    $arr = mysqli_fetch_all($res,MYSQLI_ASSOC);
    mysqli_close($link);
    if($arr) {
        echo "该用户已存在";
    }else {
        $link_1 = mysqli_connect("localhost","root","","stu_ma");
        $res_1 = mysqli_query($link_1,"INSERT INTO `users`(`name`, `pwd`) VALUES ('$uname','$upwd')");
        mysqli_close($link_1);
        if($res_1){
            echo "注册成功";
        }
    }
    
    
?>