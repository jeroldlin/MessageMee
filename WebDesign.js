window.onload = initialPage;

function initialPage(){
	startingEffects();
	setNavigation();
	$("#phoneNumberField").mask("(999)999-9999");
	navbarAutoCollapse();
	checkEntry();
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
	$("#Navbar").css({"top":"-50px", "width":"100%", "opacity":"0.2", "position":"fixed"});
	$("#Navbar").animate({top:0, opacity:1},2000);
}

function slideUpFooter(){
	$("footer").css({"bottom":"-50px", "width":"100%", "opacity":"0.2", "position":"fixed"});
	$("footer").animate({bottom:0, opacity:1},2000);
}

function slideRightFooter(){
	$("#rightFooter").css({"right":"-50px", "position":"fixed"});
	$("#rightFooter").delay(2000).animate({right:0},2000);
}

function slideLeftFooter(){
	$("#leftFooter").css({"left":"-50px", "position":"fixed"});
	$("#leftFooter").delay(2000).animate({left:0},2000);
}

function slideRightFooterText(){
	$("#rightFooterText").css({"right":"-1000px", "position":"relative"});
	$("#rightFooterText").delay(2000).animate({right:0},2000);
}

function enterPhoneNumberPopUp(){
	$(".bubble").css({"top":"-100px", "position":"relative"});
	$(".bubble").delay(300).animate({top:0, opacity:1},500);
}
//functions for the starting effects (end)

//Navigation modules
function setNavigation(){
	function changeToPageFadeStyle(buttonClass, pageId){
		$(document).ready(function(){
			$("."+buttonClass).click(function(){
				$(".center").fadeOut(200);
				$("#"+pageId).delay(300).fadeIn(500);
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
	$(document).ready(function(){//loose focus after menu has been closed --for phone
		$("#myNavbar").on('mouseover', function () {
			$("#menuButton").css("background-color", "black");
		});
		$("#myNavbar").on('hidden.bs.collapse', function () {
			$("#menuButton").css("background-color", "#6BC94A");
		});
		$("#myNavbar").on('show.bs.collapse', function () {
			$("#menuButton").css("background-color", "black");
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