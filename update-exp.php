<?php
	//update cookie expireation date
	echo "<p>I work!</p>";
	if(count($_COOKIE) <= 0) {
		echo "No cookie!";
		setcookie ("MMcontactList", "No contact", time() + (86400 * 30 * 365), "/");
	}else{
		echo "Yes cookie!";
	}
?>


