<?php
require_once __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'boot' . DIRECTORY_SEPARATOR . 'boot.php';


use Hotel\user;

// Remove user's token to logout
setcookie('user_token', null, time() + 0, '/' );
header(sprintf('Location: /public/index.php'));

?>