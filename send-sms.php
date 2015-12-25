<?php
 
require "/twilio-php/Services/Twilio.php";
 
// set your AccountSid and AuthToken from www.twilio.com/user/account
$AccountSid = "AC55efc93af45e31b82a6c22a13b991cd7";
$AuthToken = "585b2d09b95ad0fc310e58cedfc45409";
 
$client = new Services_Twilio($AccountSid, $AuthToken);

try {
$message = $client->account->messages->create(array(
    "From" => "331-215-5809",
    "To" => "630-885-9006",
    "Body" => "Test message to you, Jerry!",
));
} catch (Services_Twilio_RestException $e) {
    echo $e->getMessage();
}