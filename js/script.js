function checkDevice() {
	var r = document.querySelector(':root');
	var rs = getComputedStyle(r);
	if (rs.getPropertyValue('--mobile') == 1) {
		return true;
	} else {
		return false;
	}
}

function dropDown() {
    var dropDown = document.querySelector(".menu");
	if (checkDevice() == false) {
		if (dropDown.style.width == '30vw') {
			dropDown.style.width = "0vw";
			dropDown.style.left = "100vw";
		} else {
			dropDown.style.width = "30vw";
			dropDown.style.left = "70vw";
		}
	} else {
		if (dropDown.style.width == '90vw') {
			dropDown.style.width = "0vw";
			dropDown.style.left = "100vw";
		} else {
			dropDown.style.width = "90vw";
			dropDown.style.left = "10vw";
		}
	}
}

function quoteManager(cVal) {
	var image = document.querySelector(".clientPhoto");
	var name = document.querySelector(".clientName");
	var text = document.querySelector(".clientQuote");
	if (cVal == 1) {
		image.style.background = "url(images/client1.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Graham & Michele";
		text.innerHTML = "We were recommended Claritas by a friend who had worked with them for a number of years.  We are so glad we took that recommendation.  We get informative and impactful advice, specifically tailored to our needs and wishes, the advice is also delivered in a clear, concise, and friendly way.  It is genuinely comforting to think we have people we trust managing our finances, whilst still maintaining a level of control that allows us to carry on the lifestyle that we want.  We cannot recommend Krish and the team at Claritas highly enough and only wish we had started using them sooner.";
		document.getElementById("1").style.background = "gray";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
	} else if (cVal == 2) {
		image.style.background = "url(images/client2.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Tom & Emma";
		text.innerHTML = "We have been delighted in how useful our discussions with Krish and the team at Claritas have been for us.  Given we still have a long way to run in our careers before retirement, we did wonder whether wealth management advice was going to be for us, but we were keen to explore whether or not we were doing the right things in terms of planning for the future.  We were put at ease very quickly and have enjoyed the open dialogue with the Claritas team.  They have been very helpful in navigating our employee benefits packages and providing advice we how we can optimise our choices now to help with options over the next 20+ years.  The financial modelling exercise and advice provided by the team has brought to life our overall financial position both now and in the future, which in turn has given us the confidence to make spending and investment decisions so that we can enjoy the benefit of our hard work with our family.  We would highly recommend a consultation with Claritas.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "gray";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
	} else if (cVal == 3) {
		image.style.background = "url(images/client3.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Peter & Susan";
		text.innerHTML = "We have been with Claritas since the beginning; Tim and the team have always made us feel comfortable and relaxed in our future plans.<br><br>Planning for the future plus the unexpected could be seen as daunting however, with Tim and the team at our side we always feel we are ready for whatever happens. There is never any pressure to do anything we don’t feel comfortable with, and they have helped us set up for the future financially and with peace of mind. Tim always explains the options open to us, and covers many of the activities we wouldn’t have thought about.<br><br>The communications we receive and the access to online real time data via their website and app make us feel happy and secure with progress both financially and with our lifestyle decisions we make.<br><br>I see Claritas as our safety net, not just from a wealth management perspective, but also for our future life milestones.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "gray";
		document.getElementById("4").style.background = "white";
	} else if (cVal == 4) {
		image.style.background = "url(images/client4.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Ken & Jane";
		text.innerHTML = "To follow after 13th Feb (client on holiday). Please could you leave a space for them.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "gray";
	}
}

document.querySelector(".clientPhoto").style.background = "url(images/client1.jpg)";
document.querySelector(".clientPhoto").style.backgroundSize = "cover";
document.querySelector(".clientName").innerHTML = "Graham & Michele";
document.querySelector(".clientQuote").innerHTML = "We were recommended Claritas by a friend who had worked with them for a number of years.  We are so glad we took that recommendation.  We get informative and impactful advice, specifically tailored to our needs and wishes, the advice is also delivered in a clear, concise, and friendly way.  It is genuinely comforting to think we have people we trust managing our finances, whilst still maintaining a level of control that allows us to carry on the lifestyle that we want.  We cannot recommend Krish and the team at Claritas highly enough and only wish we had started using them sooner.";
document.getElementById("1").style.background = "gray";
document.getElementById("2").style.background = "white";
document.getElementById("3").style.background = "white";
document.getElementById("4").style.background = "white";