<?php
    if($_SERVER["REQUEST_METHOD"] ==  "POST" ){
        $n = $_POST['n'];
        $tong = 0;
        for($i = 0; $i<= $n; $i++){
            $tong += $i / $i+1;
        }
        echo"<h2> tong = $tong</h2>";
    }
?>