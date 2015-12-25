<?php
	/* Send an SMS using Twilio. You can run this file 3 different ways:
	 *
	 * - Save it as sendnotifications.php and at the command line, run 
	 *        php sendnotifications.php
	 *
	 * - Upload it to a web host and load mywebhost.com/sendnotifications.php 
	 *   in a web browser.
	 * - Download a local server like WAMP, MAMP or XAMPP. Point the web root 
	 *   directory to the folder containing this file, and load 
	 *   localhost:8888/sendnotifications.php in a web browser.
	 */

	// Step 1: Download the Twilio-PHP library from twilio.com/docs/libraries, 
	// and move it into the folder containing this file.
	require "twilio-php/Services/Twilio.php";

	// Step 2: set our AccountSid and AuthToken from www.twilio.com/user/account
	$AccountSid = "AC55efc93af45e31b82a6c22a13b991cd7";
	$AuthToken = "585b2d09b95ad0fc310e58cedfc45409";

	// Step 3: instantiate a new Twilio Rest Client
	$client = new Services_Twilio($AccountSid, $AuthToken);

	// Step 4: make an array of people we know, to send them a message. 
	// Feel free to change/add your own phone number and name here.
	
	/*---Leaving the Origional code --not using for single text
	 *$people = array(
	 *	"+16308859006" => "Jerry Lin",
	 *);
	*/
	

	// Step 5: Loop over all our friends. $number is a phone number above, and 
	// $name is the name next to it
	//foreach ($people as $number => $name) { --not using loop for single text

		$sms = $client->account->messages->sendMessage(

		// Step 6: Change the 'From' number below to be a valid Twilio number 
		// that you've purchased, or the (deprecated) Sandbox number
			"331-215-5809", 

			// the number we are sending to - Any phone number
			$_POST["phoneNumber"],

			// the sms body
			$_POST["textMessage"]
		);

		// Display a confirmation message on the screen **result see submitToTwilio function in WebDesign
		if (! $_POST["contactName"] == ""){
			echo "Sent message to " . $_POST["contactName"] . ":<br />" . $_POST["textMessage"] . "<br />";
		}else{
			echo "Sent message to " . $_POST["phoneNumber"] . " :<br />" . $_POST["textMessage"] . "<br />";
		}
	//}--not using loop for single text
?>


