<?php
  require_once __DIR__ . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'boot' . DIRECTORY_SEPARATOR . 'boot.php';
  use Hotel\Room;
  use Hotel\User;
  use Hotel\RoomType;

  $room = new Room();
  $cities = [];

  $type = new RoomType();
  $allTypes = [];

?>
<!DOCTYPE>
<html>
  <head>
    <meta charset= "UTF-8" >
    <meta name= "viewport" content=" width=device-width, initial-scale=1.0">
    <meta name="robots" content="index,follow">
    <link rel="icon" href="assets/css/images/favicon.jpg" type="image/x-icon">
    <title>College Link </title>
    <style type="text/css">
      body{
      background: #333;
      }
    </style>
    <link href="assets/css/style_one.css" type="text/css" rel="stylesheet"/  >
    <script src="http://code.jquery.com/jquery-2.1.3.js"></script>
    <script src="http://code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
    <script  src="assets/js/script.js" type="javascript"></script>
    <script  src="assets/js/datepickers.js" type="text/javascript"></script>
    <script  src="assets/pages/index.js" type="text/javascript"></script>
  </head>
  <body>
    <header>
      <div class="primary-menu text-right">
        <p class="main-logo">Hotels</p>
        <div class="nav">
          <label class="togle" for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle"/>
          <div class="menu">
            <ul>
              <li><a href="index.php" ><i class="fas fa-home"></i>Home</a></li>
              <?php if (empty(User::getCurrentUserId())){?>
              <li><a href="login.php"><i class="fas fa-sign-in-alt"></i>Login</a></li>
              <li><a href="register.php">Register</a></li>
              <?php }
              else {?>
                <li><a href="profile.php"><i class="fas fa-user"></i>Profile</a></li>
                <li><a href="actions/logout.php"><i class="fas fa-sign-out-alt"></i>Log Out</a></li>
              <?php } ?>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <main class="main-content view-hotel page-home" id="main-content">
      <div class="container">
        <section class="hero">
          <form name="listForm" class="listForm box" id="listForm" method="get" action="list.php" autocomplete="off" >
            <fieldset class="introduction" id="form-introduction">
              <div class="form-group inline-block">
                <select name="city" id="City_option" class= "check_cities text-center">
                  <option>City</option>
                    <?php
                    foreach ($cities as $city) {
                    ?>
                    <option value="<?php echo $city; ?>"><?php echo $city; ?></option>
                    <?php } ?>
                </select>
              </div>
              <div class="form-group inline-block">
                <select class= "check_rooms text-center check_cities" name="room_type">
                  <option>Room</option>
                    <?php
                    foreach ($allTypes as $roomType) {?>
                    <option value="<?php echo $roomType['type_id']; ?>"><?php echo $roomType['title']; ?></option>
                    <?php } ?>
                </select>
              </div>
            </fieldset>
            <fieldset class="date-picker">
              <div class="form-group inline-block">
                <label for="check_in_date"></label>
                <input id="check_in_date" name="check_in_date" placeholder="Check-in Date" type="text" class="text-center" >
              </div>
              <div class="form-group inline-block">
                <label for="check_out_date"></label>
                <input id="check_out_date" name="check_out_date" placeholder="Check-out Date" type="text" class="text-center">
              </div>
            </fieldset>
            <div class="action text-center">
              <input name="Search" class="submitbutton"   id="submitButton" type="submit" value="Search">
            </div>
          </form>
        </section>
      </div>
      <div class="container" id="container-search-result"></div>
    </main>
    <footer class="footer-index">
      <p> Copyright <i class="fas fa-copyright"></i> CollegeLink 2021</p>
    </footer>
    <link href="assets/css/small_monitor.css" type="text/css" rel="stylesheet"/>
    <link href="assets/css/tablet.css" type="text/css" rel="stylesheet"/>
    <link href="assets/css/mobile.css" type="text/css" rel="stylesheet"/>
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <link href="assets/css/fontawsome.min.css" rel="stylesheet" >
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  </body>
</html>
