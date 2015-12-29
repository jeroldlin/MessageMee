window.onload = initialPage;

function initialPage(){
	$(document).ready(function(){
		startingEffects();
		setNavigation();
		$("#phoneNumberField").mask("(999)999-9999");
		navbarAutoCollapse();
		checkEntry();
	});
}

//functions for the starting effects
function startingEffects(){
	$("#sms").delay(500).fadeIn(1000);
	slideDownMenu();
	slideUpFooter();
	slideRightFooter();
	slideLeftFooter();
	slideRightFooterText();
	enterPhoneNumberPopUpExit()
	enterPhoneNumberPopUp();
}

function enterPhoneNumberPopUpExit(){
	$(document).ready(function(){
		$(document).click(function(){
			$(".bubble").fadeOut(200);
		});
		$(document).keypress(function(){
			$(".bubble").fadeOut(200);
		});
	})
}

function slideDownMenu(){
	var navBar = document.getElementById("Navbar");
	TweenMax.fromTo(navBar, 2, {"top":"-50px", "width":"100%", "opacity":"0.2", "position":"fixed"}, {top:0, opacity:1});
}

function slideUpFooter(){
	var footer = document.getElementsByTagName("footer");
	TweenMax.fromTo(footer, 2, {"bottom":"-50px", "width":"100%", "opacity":"0.2", "position":"fixed"}, {bottom:0, opacity:1});
}

function slideRightFooter(){
	var rightFooter = document.getElementById("rightFooter");
	var animate = TweenMax.fromTo(rightFooter, 2, {"right":"-50px", "position":"fixed"}, {right:0});
	animate.delay(2);
}

function slideLeftFooter(){
	var leftFooter = document.getElementById("leftFooter");
	var animate = TweenMax.fromTo(leftFooter, 2, {"left":"-50px", "position":"fixed"}, {left:0});
	animate.delay(2);
}

function slideRightFooterText(){
	var rightFooterText = document.getElementById("rightFooterText");
	var animate = TweenMax.fromTo(rightFooterText, 2, {"right":"-1000px", "position":"relative"}, {right:0});
	animate.delay(2);
}

function enterPhoneNumberPopUp(){
	var bubble = document.getElementsByClassName("bubble");
	var animate = TweenMax.fromTo(bubble, 0.5, {"top":"-100px", "position":"relative"}, {top:0, opacity:1});
	animate.delay(2);
}
//functions for the starting effects (end)

//Navigation modules
function setNavigation(){
	function changeToPageFadeStyle(buttonClass, pageId){
		$(document).ready(function(){
			$("."+buttonClass).click(function(){
				var leave = document.getElementsByClassName("center");
				var enter = document.getElementById(pageId);
				var animate1 = TweenMax.to(leave, 0.2, {opacity:0, display:"hidden", height:"0px", paddingTop:"0px", paddingBottom:"0px"});
				var animate2 = TweenMax.to(enter, 0.5, {opacity:1, display:"block", height:"auto", paddingTop:"70px", paddingBottom:"70px"});
				animate2.delay(0.3);
			});
		});
	}
	changeToPageFadeStyle("clickToSms", "sms");
	//changeToPageFadeStyle("clickToMms", "mms"); for extension
	//changeToPageFadeStyle("clickToContact", "contact");
	changeToPageFadeStyle("clickToAbout", "about");
}

function navbarAutoCollapse(){
	$(document).ready(function(){
		$("#menuButton").blur(function(){
			setTimeout(function(){ $("#myNavbar").collapse("hide") }, 200);
		});
	});
	$(document).ready(function(){//overwrite bootstrap css --better for phone & desktop
		$("#menuButton").on('mouseenter', function () {
			$("#menuButton").css("background-color", "black");
		});
		$("#menuButton").on('mouseleave', function () {
			$("#menuButton").css("background-color", "#6BC94A");
		});
		$("#myNavbar").on('hidden.bs.collapse', function () {
			$("#menuButton").css("background-color", "#6BC94A");
			$("#menuButton").on('mouseleave', function () {
				$("#menuButton").css("background-color", "#6BC94A");
			});
		});
		$("#myNavbar").on('show.bs.collapse', function () {
			$("#menuButton").css("background-color", "black");
			$("#menuButton").on('mouseleave', function () {
				$("#menuButton").css("background-color", "black");
			});
		});
	});
}
//Navigation modules (end)

//Check Entry
function checkEntry(){
	$(document).ready(function(){
		$(document).on("submit", (function(){
			if($("#phoneNumberField").val().length < 13){
				alert("Must enter a 10-digit number.");
				return false;
			}else if($("#messageField").val().length < 1){
				alert("Must enter message.");
				return false;
			}else{
				submitToTwilio();
				$("#phpResult").css("border-color", "#AFAFAF");
				return false;
			}
		}));
	});
	
	function submitToTwilio(){
		$.post(
				'send-text.php'
			,{
				phoneNumber: $('#phoneNumberField').val(),
				textMessage: $('#messageField').val(),
				contactName: $('#contactNameField').val()
			},
			function(result){
				$("#phpResult").append(result);
			}
		);
	}
}
//Check Entry (end)