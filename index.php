<!-- 

   Message Mee Messaging App
   
   Author: Jerry Lin
   Date:                

-->



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
   <meta name="viewport" content="width=device-width, initial-scale=1">
   <title>Message Mee - send SMS on the web</title>
   <link type="text/css" href="bootstrap.min.css" rel="stylesheet" />
   <link type="text/css" href="Style.css" rel="stylesheet" />
   <script src="jquery.min.js"></script>
   <script src="bootstrap.min.js"></script>
   <script src="jquery.maskedinput.js" type="text/javascript"></script>
   <script src="TweenMax.min.js" type="text/javascript"></script>
   <script src="WebDesign.js" type="text/javascript"></script>
</head>

<body>
<div id="body">
<!-- nav bar  -->
<div id="Navbar" >
<nav class="navbar navbar-inverse" id="Nav">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" id="menuButton">
      	Menu
      </button>
      <a class="navbar-brand clickToWelcome" href="#" style="color:white">Message Mee</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a href="#" id="NavLink" class="clickToSms">Texting Tool</a></li>
        <!-- <li><a href="#" id="NavLink" class="clickToMms">Send Picture</a></li>		for extension -->
        <!-- <li><a href="#" id="NavLink" class="clickToContact">Contact List</a></li>  for extension -->
        <li><a href="#" id="NavLink" class="clickToAbout">About</a></li>
      </ul>
    </div>
  </div>
</nav>
</div>
<!-- nav bar (end) -->

<!-- SMS tool -->
<div class="center" id="sms">
    <form><!-- action="send-text.php" method="post" old code, abandoned for jquery -->
        <div class="col-sm-6">
        	<div class="col-xs-12">
            	<label >Enter Phone Number:</label>
            </div>
            <div class="col-xs-6">
            	<input type="text" class="form-control" name="phoneNumber" id="phoneNumberField" autofocus />
            </div>
            <div class="col-xs-6 bubble">
            	Enter here
            </div>
			<div class="col-xs-12">
            	<label>Enter Reciver Name: (optional)</label>
            </div>
            <div class="col-xs-6">
                <input type="text" class="form-control" name="contactName" id="contactNameField" />
            </div>
        </div>
        <div class="col-sm-6">
            <div class="col-xs-12">
                <label>Enter Message:</label>
            </div>
            <div class="col-xs-12">
                <textarea class="form-control" rows="5" name="textMessage" id="messageField"></textarea>
                <input type="submit" class="btn btn-default" id="submitButton" value="Send" />
            </div>
        </div>
    </form>
    <div class="col-xs-12" id="phpResult">
    </div>
</div>
<!-- SMS tool (end) -->

<!-- MMS tool -->
<div class="center" id="mms">
this is mms tool
</div>
<!-- MMS tool (end) -->

<!-- contact list -->
<div class="center" id="contact">
	<?php
        $prod = $_COOKIE['MMcontactList'];
        $prod = stripslashes($prod);    	
        $prod = unserialize($prod);
        var_dump($prod);
        print_r(array_values($people));
	?>
</div>
<!-- contact list (end) -->

<!-- about -->
<div class="center" id="about">
Skills Assessment HW-15 for Jerry Lin
</div>
<!-- about (end) -->
</div>
</body>

<footer>
	<div id="leftFooter">	
		
	</div>
	<div id="rightFooter">
    	<span id="rightFooterText">
			Made by Jerry Lin
        </span>
	</div>
</footer>
</html>
