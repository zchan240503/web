<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $index = 0;
        $tong = 0;
        while ($index < 101) {
            $tong += $index;
            $index++;
        }
        echo "<h2> 1+2+3+.....+100 =  $tong</h2>";
    }
?>
