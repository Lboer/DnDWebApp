<?php
// write de code naar een ander bestand, moet later onderaan komen
$file = "./saved.txt";
//Nu komt de code om variabelen vanuit JS naar PHP te sturen
foreach ($_POST as $post_var) {
    file_put_contents($file, $post_var, FILE_APPEND);
}
?>