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

var currentClient = 1;
async function quoteManager(cVal) {
	var image = document.querySelector(".clientPhoto");
	var name = document.querySelector(".clientName");
	var text = document.querySelector(".clientQuote");
	if (cVal == 1) {
		image.style.background = "url(https://claritaswm.co.uk/images/client8.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Jack & Lindsey";
		text.innerHTML = "I was introduced to Tim Walsham by a colleague in 2014 when I was investigating my options for early retirement. A major concern was whether my wife and I could maintain the lifestyle in retirement that we had enjoyed while I was working. Our financial affairs at that time were quite complicated, but with Tim’s expert help we developed a financial plan that allowed me to retire later that year.<br><br>Meeting Tim was definitely a life changing event for us. The biannual checkpoint meetings reinforce our confidence and give us an opportunity to adjust our plan based on changing world, market and personal circumstances. Many years later we can honestly say that thanks to a robust financial plan and Tim’s ongoing involvement we have been able to maintain our lifestyle without worrying that we might be depleting our resources too quickly. Life is good!<br><br>We particularly like that they are a small firm so we always see/talk with the same people and their fee structure is very transparent. Everyone in the Claritas team treats us as individuals and we really do feel like valued clients and not ‘just another customer’. Claritas takes care of our financial worries leaving us free to enjoy our retirement and we have no hesitation in recommending them.";
		document.getElementById("1").style.background = "gray";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
		document.getElementById("5").style.background = "white";
		document.getElementById("6").style.background = "white";
		document.getElementById("7").style.background = "white";
		document.getElementById("8").style.background = "white";
		document.getElementById("9").style.background = "white";
		document.getElementById("10").style.background = "white";
		
		currentClient = 1;
	} else if (cVal == 2) {
		image.style.background = "url(https://claritaswm.co.uk/images/client5.jpeg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Paul";
		text.innerHTML = "I have been working with Claritas since their inception and with Tim for many years before that, in that time they have earned my complete trust by providing a consistent and highly valuable service. Their investment strategies are well thought out and thoroughly researched resulting in consistent above market returns. Their approach is very open and every aspect of the advice is considered and explained. I get advice on all aspects of my financial dealings, not just the ones that they are directly involved with which over time has added significant value to their already excellent service. They have, on occasion, even advised with financial issues for my close relatives!<br><br>The overall service outside of the advice is equally excellent, everything is done very efficiently and they will use appropriate technology to make aspects of working with them easier. My particular favourite is the use of video 'talk overs' when they need to explain a change or a new investment. These are emailed to me so I can watch at my convenience, ask any questions and make a decision. That said, they are the most friendly and personable people to work with and very easy to get hold of if I simply need to discuss something.<br><br>All in all, I highly recommend Claritas as far and away the best IFA I have worked with.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "gray";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
		document.getElementById("5").style.background = "white";
		document.getElementById("6").style.background = "white";
		document.getElementById("7").style.background = "white";
		document.getElementById("8").style.background = "white";
		document.getElementById("9").style.background = "white";
		document.getElementById("10").style.background = "white";
		
		currentClient = 2;
	} else if (cVal == 3) {
		image.style.background = "url(https://claritaswm.co.uk/images/client2.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Tom & Emma";
		text.innerHTML = "We have been delighted in how useful our discussions with Krish and the team at Claritas have been for us.  Given we still have a long way to run in our careers before retirement, we did wonder whether wealth management advice was going to be for us, but we were keen to explore whether or not we were doing the right things in terms of planning for the future.<br><br>We were put at ease very quickly and have enjoyed the open dialogue with the Claritas team.  They have been very helpful in navigating our employee benefits packages and providing advice how we can optimise our choices now to help with options over the next 20+ years.<br><br>The financial modelling exercise and advice provided by the team has brought to life our overall financial position both now and in the future, which in turn has given us the confidence to make spending and investment decisions so that we can enjoy the benefit of our hard work with our family.  We would highly recommend a consultation with Claritas.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "gray";
		document.getElementById("4").style.background = "white";
		document.getElementById("5").style.background = "white";
		document.getElementById("6").style.background = "white";
		document.getElementById("7").style.background = "white";
		document.getElementById("8").style.background = "white";
		document.getElementById("9").style.background = "white";
		document.getElementById("10").style.background = "white";
		
		currentClient = 3;
	} else if (cVal == 4) {
		image.style.background = "url(https://claritaswm.co.uk/images/client1.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Graham & Michele";
		text.innerHTML = "We were recommended Claritas by a friend who had worked with them for a number of years.  We are so glad we took that recommendation.  We get informative and impactful advice, specifically tailored to our needs and wishes, the advice is also delivered in a clear, concise, and friendly way.<br><br>It is genuinely comforting to think we have people we trust managing our finances, whilst still maintaining a level of control that allows us to carry on the lifestyle that we want.<br><br>We cannot recommend Krish and the team at Claritas highly enough and only wish we had started using them sooner.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "gray";
		document.getElementById("5").style.background = "white";
		document.getElementById("6").style.background = "white";
		document.getElementById("7").style.background = "white";
		document.getElementById("8").style.background = "white";
		document.getElementById("9").style.background = "white";
		document.getElementById("10").style.background = "white";
		
		currentClient = 4;
	} else if (cVal == 5) {
		if (currentClient == 2) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client8.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Jack & Lindsey";
			text.innerHTML = "I was introduced to Tim Walsham by a colleague in 2014 when I was investigating my options for early retirement. A major concern was whether my wife and I could maintain the lifestyle in retirement that we had enjoyed while I was working. Our financial affairs at that time were quite complicated, but with Tim’s expert help we developed a financial plan that allowed me to retire later that year.<br><br>Meeting Tim was definitely a life changing event for us. The biannual checkpoint meetings reinforce our confidence and give us an opportunity to adjust our plan based on changing world, market and personal circumstances. Many years later we can honestly say that thanks to a robust financial plan and Tim’s ongoing involvement we have been able to maintain our lifestyle without worrying that we might be depleting our resources too quickly. Life is good!<br><br>We particularly like that they are a small firm so we always see/talk with the same people and their fee structure is very transparent. Everyone in the Claritas team treats us as individuals and we really do feel like valued clients and not ‘just another customer’. Claritas takes care of our financial worries leaving us free to enjoy our retirement and we have no hesitation in recommending them.";
			document.getElementById("1").style.background = "gray";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 1;
		} else if (currentClient == 3) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client5.jpeg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Paul";
			text.innerHTML = "I have been working with Claritas since their inception and with Tim for many years before that, in that time they have earned my complete trust by providing a consistent and highly valuable service. Their investment strategies are well thought out and thoroughly researched resulting in consistent above market returns. Their approach is very open and every aspect of the advice is considered and explained. I get advice on all aspects of my financial dealings, not just the ones that they are directly involved with which over time has added significant value to their already excellent service. They have, on occasion, even advised with financial issues for my close relatives!<br><br>The overall service outside of the advice is equally excellent, everything is done very efficiently and they will use appropriate technology to make aspects of working with them easier. My particular favourite is the use of video 'talk overs' when they need to explain a change or a new investment. These are emailed to me so I can watch at my convenience, ask any questions and make a decision. That said, they are the most friendly and personable people to work with and very easy to get hold of if I simply need to discuss something.<br><br>All in all, I highly recommend Claritas as far and away the best IFA I have worked with.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "gray";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 2;
		} else if (currentClient == 4) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client2.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Tom & Emma";
			text.innerHTML = "We have been delighted in how useful our discussions with Krish and the team at Claritas have been for us.  Given we still have a long way to run in our careers before retirement, we did wonder whether wealth management advice was going to be for us, but we were keen to explore whether or not we were doing the right things in terms of planning for the future.<br><br>We were put at ease very quickly and have enjoyed the open dialogue with the Claritas team.  They have been very helpful in navigating our employee benefits packages and providing advice how we can optimise our choices now to help with options over the next 20+ years.<br><br>The financial modelling exercise and advice provided by the team has brought to life our overall financial position both now and in the future, which in turn has given us the confidence to make spending and investment decisions so that we can enjoy the benefit of our hard work with our family.  We would highly recommend a consultation with Claritas.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "gray";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 3;
		} else if (currentClient == 5) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client1.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Graham & Michele";
			text.innerHTML = "We were recommended Claritas by a friend who had worked with them for a number of years.  We are so glad we took that recommendation.  We get informative and impactful advice, specifically tailored to our needs and wishes, the advice is also delivered in a clear, concise, and friendly way.<br><br>It is genuinely comforting to think we have people we trust managing our finances, whilst still maintaining a level of control that allows us to carry on the lifestyle that we want.<br><br>We cannot recommend Krish and the team at Claritas highly enough and only wish we had started using them sooner.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "gray";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 4;
		} else if (currentClient == 6) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client7.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "John";
			text.innerHTML = "I’m absolutely delighted with the service Claritas provides me.<br><br>They have given clear advice and recommendations to ensure my current finances are optimised.<br><br>I am very happy I am in safe hands and that my retirement plans are being actively managed. It’s a huge weight off my mind to have Claritas help plan my future.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "gray";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 5;
		} else if (currentClient == 7) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client3.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Peter & Susan";
			text.innerHTML = "We have been with Claritas since the beginning; Tim and the team have always made us feel comfortable and relaxed in our future plans.<br><br>Planning for the future plus the unexpected could be seen as daunting however, with Tim and the team at our side we always feel we are ready for whatever happens. There is never any pressure to do anything we don’t feel comfortable with, and they have helped us set up for the future financially and with peace of mind. Tim always explains the options open to us, and covers many of the activities we wouldn’t have thought about.<br><br>The communications we receive and the access to online real time data via their website and app make us feel happy and secure with progress both financially and with our lifestyle decisions we make.<br><br>I see Claritas as our safety net, not just from a wealth management perspective, but also for our future life milestones.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "gray";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 6;
		} else if (currentClient == 8) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client9.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Hazel";
			text.innerHTML = "Tim has been my financial advisor for about 15 years.<br><br>I have had financial advisers previously but as soon as I met Tim I realised that he operates in an entirely different way. He took the time to understand my attitude towards money, saving and risk. He listened and explained about financial issues that seemed opaque to me in a patient manner. This style of advice has continued over the years.<br><br>I have complete trust in him and in his advice which brings me peace of mind.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "gray";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 7;
		} else if (currentClient == 9) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client6.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Kevin & Lorraine";
			text.innerHTML = "Claritas have been a great help to us while we have been navigating our early retirement.<br><br>We have had excellent advice on pensions and have been guided through some difficult decisions.<br><br>We now have more organised finances and a clearer plan for our future.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "gray";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 8;
		} else if (currentClient == 10) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client10.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Reg & Linda";
			text.innerHTML = "We first met Tim with our existing financial adviser (who was retiring) who introduced us and recommended Tim to take on our portfolio. We immediately felt that Tim was a complete professional and when he told us he was forming his own Company and would we like to join him, we said yes with confidence. Since then Tim and all the team at Claritas have been dedicated to our financial needs and support.<br><br>Despite the turbulence in the markets Tim has offered a steady and knowledgeable service. Both of us have always been nervous about the risk we undertake in our investments, with Tim and his Team we feel confident our investments are managed properly and they have earned our trust.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "gray";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 9;
		} else if (currentClient == 11) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client4.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Ken & Jane";
			text.innerHTML = "We have been clients of Tim for over ten years and Claritas since it’s founding.<br><br>We have found them proactive and highly informative across a wide range of wealth management and financial planning topics and now rely upon them for all financial advice. We attribute much of our financial peace of mind to their capability and feel assured that they always have our financial goals front and centre in everything they do.<br><br>I would not hesitate to recommend them to friends and colleagues and indeed have done so several times.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "gray";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 10;
		} else if (currentClient == 1) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client4.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Ken & Jane";
			text.innerHTML = "We have been clients of Tim for over ten years and Claritas since it’s founding.<br><br>We have found them proactive and highly informative across a wide range of wealth management and financial planning topics and now rely upon them for all financial advice. We attribute much of our financial peace of mind to their capability and feel assured that they always have our financial goals front and centre in everything they do.<br><br>I would not hesitate to recommend them to friends and colleagues and indeed have done so several times.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "gray";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 10;
		}
	} else if (cVal == 6) {
		if (currentClient == 1) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client5.jpeg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Paul";
			text.innerHTML = "I have been working with Claritas since their inception and with Tim for many years before that, in that time they have earned my complete trust by providing a consistent and highly valuable service. Their investment strategies are well thought out and thoroughly researched resulting in consistent above market returns. Their approach is very open and every aspect of the advice is considered and explained. I get advice on all aspects of my financial dealings, not just the ones that they are directly involved with which over time has added significant value to their already excellent service. They have, on occasion, even advised with financial issues for my close relatives!<br><br>The overall service outside of the advice is equally excellent, everything is done very efficiently and they will use appropriate technology to make aspects of working with them easier. My particular favourite is the use of video 'talk overs' when they need to explain a change or a new investment. These are emailed to me so I can watch at my convenience, ask any questions and make a decision. That said, they are the most friendly and personable people to work with and very easy to get hold of if I simply need to discuss something.<br><br>All in all, I highly recommend Claritas as far and away the best IFA I have worked with.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "gray";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 2;
		} else if (currentClient == 2) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client2.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Tom & Emma";
			text.innerHTML = "We have been delighted in how useful our discussions with Krish and the team at Claritas have been for us.  Given we still have a long way to run in our careers before retirement, we did wonder whether wealth management advice was going to be for us, but we were keen to explore whether or not we were doing the right things in terms of planning for the future.<br><br>We were put at ease very quickly and have enjoyed the open dialogue with the Claritas team.  They have been very helpful in navigating our employee benefits packages and providing advice how we can optimise our choices now to help with options over the next 20+ years.<br><br>The financial modelling exercise and advice provided by the team has brought to life our overall financial position both now and in the future, which in turn has given us the confidence to make spending and investment decisions so that we can enjoy the benefit of our hard work with our family.  We would highly recommend a consultation with Claritas.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "gray";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 3;
		} else if (currentClient == 3) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client1.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Graham & Michele";
			text.innerHTML = "We were recommended Claritas by a friend who had worked with them for a number of years.  We are so glad we took that recommendation.  We get informative and impactful advice, specifically tailored to our needs and wishes, the advice is also delivered in a clear, concise, and friendly way.<br><br>It is genuinely comforting to think we have people we trust managing our finances, whilst still maintaining a level of control that allows us to carry on the lifestyle that we want.<br><br>We cannot recommend Krish and the team at Claritas highly enough and only wish we had started using them sooner.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "gray";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 4;
		} else if (currentClient == 4) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client7.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "John";
			text.innerHTML = "I’m absolutely delighted with the service Claritas provides me.<br><br>They have given clear advice and recommendations to ensure my current finances are optimised.<br><br>I am very happy I am in safe hands and that my retirement plans are being actively managed. It’s a huge weight off my mind to have Claritas help plan my future.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "gray";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 5;
		} else if (currentClient == 5) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client3.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Peter & Susan";
			text.innerHTML = "We have been with Claritas since the beginning; Tim and the team have always made us feel comfortable and relaxed in our future plans.<br><br>Planning for the future plus the unexpected could be seen as daunting however, with Tim and the team at our side we always feel we are ready for whatever happens. There is never any pressure to do anything we don’t feel comfortable with, and they have helped us set up for the future financially and with peace of mind. Tim always explains the options open to us, and covers many of the activities we wouldn’t have thought about.<br><br>The communications we receive and the access to online real time data via their website and app make us feel happy and secure with progress both financially and with our lifestyle decisions we make.<br><br>I see Claritas as our safety net, not just from a wealth management perspective, but also for our future life milestones.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "gray";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 6;
		} else if (currentClient == 6) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client9.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Hazel";
			text.innerHTML = "Tim has been my financial advisor for about 15 years.<br><br>I have had financial advisers previously but as soon as I met Tim I realised that he operates in an entirely different way. He took the time to understand my attitude towards money, saving and risk. He listened and explained about financial issues that seemed opaque to me in a patient manner. This style of advice has continued over the years.<br><br>I have complete trust in him and in his advice which brings me peace of mind.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "gray";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 7;
		} else if (currentClient == 7) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client6.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Kevin & Lorraine";
			text.innerHTML = "Claritas have been a great help to us while we have been navigating our early retirement.<br><br>We have had excellent advice on pensions and have been guided through some difficult decisions.<br><br>We now have more organised finances and a clearer plan for our future.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "gray";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 8;
		} else if (currentClient == 8) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client10.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Reg & Linda";
			text.innerHTML = "We first met Tim with our existing financial adviser (who was retiring) who introduced us and recommended Tim to take on our portfolio. We immediately felt that Tim was a complete professional and when he told us he was forming his own Company and would we like to join him, we said yes with confidence. Since then Tim and all the team at Claritas have been dedicated to our financial needs and support.<br><br>Despite the turbulence in the markets Tim has offered a steady and knowledgeable service. Both of us have always been nervous about the risk we undertake in our investments, with Tim and his Team we feel confident our investments are managed properly and they have earned our trust.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "gray";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 9;
		} else if (currentClient == 9) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client4.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Ken & Jane";
			text.innerHTML = "We have been clients of Tim for over ten years and Claritas since it’s founding.<br><br>We have found them proactive and highly informative across a wide range of wealth management and financial planning topics and now rely upon them for all financial advice. We attribute much of our financial peace of mind to their capability and feel assured that they always have our financial goals front and centre in everything they do.<br><br>I would not hesitate to recommend them to friends and colleagues and indeed have done so several times.";
			document.getElementById("1").style.background = "white";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "gray";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 10;
		} else if (currentClient == 10) {
			document.querySelector(".cslider").style.opacity = 0;
			await new Promise(resolve => setTimeout(resolve, 500));
			image.style.background = "url(https://claritaswm.co.uk/images/client8.jpg)";
			image.style.backgroundSize = "cover";
			name.innerHTML = "Jack & Lindsey";
			text.innerHTML = "I was introduced to Tim Walsham by a colleague in 2014 when I was investigating my options for early retirement. A major concern was whether my wife and I could maintain the lifestyle in retirement that we had enjoyed while I was working. Our financial affairs at that time were quite complicated, but with Tim’s expert help we developed a financial plan that allowed me to retire later that year.<br><br>Meeting Tim was definitely a life changing event for us. The biannual checkpoint meetings reinforce our confidence and give us an opportunity to adjust our plan based on changing world, market and personal circumstances. Many years later we can honestly say that thanks to a robust financial plan and Tim’s ongoing involvement we have been able to maintain our lifestyle without worrying that we might be depleting our resources too quickly. Life is good!<br><br>We particularly like that they are a small firm so we always see/talk with the same people and their fee structure is very transparent. Everyone in the Claritas team treats us as individuals and we really do feel like valued clients and not ‘just another customer’. Claritas takes care of our financial worries leaving us free to enjoy our retirement and we have no hesitation in recommending them.";
			document.getElementById("1").style.background = "gray";
			document.getElementById("2").style.background = "white";
			document.getElementById("3").style.background = "white";
			document.getElementById("4").style.background = "white";
			document.getElementById("5").style.background = "white";
			document.getElementById("6").style.background = "white";
			document.getElementById("7").style.background = "white";
			document.getElementById("8").style.background = "white";
			document.getElementById("9").style.background = "white";
			document.getElementById("10").style.background = "white";
			
			document.querySelector(".cslider").style.opacity = 1;
			currentClient = 1;
		}
	} else if (cVal == 7) {
		image.style.background = "url(https://claritaswm.co.uk/images/client7.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "John";
		text.innerHTML = "I’m absolutely delighted with the service Claritas provides me.<br><br>They have given clear advice and recommendations to ensure my current finances are optimised.<br><br>I am very happy I am in safe hands and that my retirement plans are being actively managed. It’s a huge weight off my mind to have Claritas help plan my future.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
		document.getElementById("5").style.background = "gray";
		document.getElementById("6").style.background = "white";
		document.getElementById("7").style.background = "white";
		document.getElementById("8").style.background = "white";
		document.getElementById("9").style.background = "white";
		document.getElementById("10").style.background = "white";
		
		currentClient = 5;
	} else if (cVal == 8) {
		image.style.background = "url(https://claritaswm.co.uk/images/client3.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Peter & Susan";
		text.innerHTML = "We have been with Claritas since the beginning; Tim and the team have always made us feel comfortable and relaxed in our future plans.<br><br>Planning for the future plus the unexpected could be seen as daunting however, with Tim and the team at our side we always feel we are ready for whatever happens. There is never any pressure to do anything we don’t feel comfortable with, and they have helped us set up for the future financially and with peace of mind. Tim always explains the options open to us, and covers many of the activities we wouldn’t have thought about.<br><br>The communications we receive and the access to online real time data via their website and app make us feel happy and secure with progress both financially and with our lifestyle decisions we make.<br><br>I see Claritas as our safety net, not just from a wealth management perspective, but also for our future life milestones.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
		document.getElementById("5").style.background = "white";
		document.getElementById("6").style.background = "gray";
		document.getElementById("7").style.background = "white";
		document.getElementById("8").style.background = "white";
		document.getElementById("9").style.background = "white";
		document.getElementById("10").style.background = "white";
		
		currentClient = 6;
	} else if (cVal == 9) {
		image.style.background = "url(https://claritaswm.co.uk/images/client9.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Hazel";
		text.innerHTML = "Tim has been my financial advisor for about 15 years.<br><br>I have had financial advisers previously but as soon as I met Tim I realised that he operates in an entirely different way. He took the time to understand my attitude towards money, saving and risk. He listened and explained about financial issues that seemed opaque to me in a patient manner. This style of advice has continued over the years.<br><br>I have complete trust in him and in his advice which brings me peace of mind.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
		document.getElementById("5").style.background = "white";
		document.getElementById("6").style.background = "white";
		document.getElementById("7").style.background = "gray";
		document.getElementById("8").style.background = "white";
		document.getElementById("9").style.background = "white";
		document.getElementById("10").style.background = "white";
		
		currentClient = 7;
	} else if (cVal == 10) {
		image.style.background = "url(https://claritaswm.co.uk/images/client6.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Kevin & Lorraine";
		text.innerHTML = "Claritas have been a great help to us while we have been navigating our early retirement.<br><br>We have had excellent advice on pensions and have been guided through some difficult decisions.<br><br>We now have more organised finances and a clearer plan for our future.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
		document.getElementById("5").style.background = "white";
		document.getElementById("6").style.background = "white";
		document.getElementById("7").style.background = "white";
		document.getElementById("8").style.background = "gray";
		document.getElementById("9").style.background = "white";
		document.getElementById("10").style.background = "white";
		
		currentClient = 8;
	} else if (cVal == 11) {
		image.style.background = "url(https://claritaswm.co.uk/images/client10.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Reg & Linda";
		text.innerHTML = "We first met Tim with our existing financial adviser (who was retiring) who introduced us and recommended Tim to take on our portfolio. We immediately felt that Tim was a complete professional and when he told us he was forming his own Company and would we like to join him, we said yes with confidence. Since then Tim and all the team at Claritas have been dedicated to our financial needs and support.<br><br>Despite the turbulence in the markets Tim has offered a steady and knowledgeable service. Both of us have always been nervous about the risk we undertake in our investments, with Tim and his Team we feel confident our investments are managed properly and they have earned our trust.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
		document.getElementById("5").style.background = "white";
		document.getElementById("6").style.background = "white";
		document.getElementById("7").style.background = "white";
		document.getElementById("8").style.background = "white";
		document.getElementById("9").style.background = "gray";
		document.getElementById("10").style.background = "white";
		
		currentClient = 9;
	} else if (cVal == 12) {
		image.style.background = "url(https://claritaswm.co.uk/images/client4.jpg)";
		image.style.backgroundSize = "cover";
		name.innerHTML = "Ken & Jane";
		text.innerHTML = "We have been clients of Tim for over ten years and Claritas since it’s founding.<br><br>We have found them proactive and highly informative across a wide range of wealth management and financial planning topics and now rely upon them for all financial advice. We attribute much of our financial peace of mind to their capability and feel assured that they always have our financial goals front and centre in everything they do.<br><br>I would not hesitate to recommend them to friends and colleagues and indeed have done so several times.";
		document.getElementById("1").style.background = "white";
		document.getElementById("2").style.background = "white";
		document.getElementById("3").style.background = "white";
		document.getElementById("4").style.background = "white";
		document.getElementById("5").style.background = "white";
		document.getElementById("6").style.background = "white";
		document.getElementById("7").style.background = "white";
		document.getElementById("8").style.background = "white";
		document.getElementById("9").style.background = "white";
		document.getElementById("10").style.background = "gray";
		
		currentClient = 10;
	}
}

function backgroundHandler() {
	var time = 2;
	var b1 = "https://claritaswm.co.uk/images/background.jpg";
	var b2 = "https://claritaswm.co.uk/images/background1.jpg";
	var b3 = "https://claritaswm.co.uk/images/background3.jpg";
	var b4 = "https://claritaswm.co.uk/images/background4.jpg";
	var interval = setInterval(function() { 
		if (time != 5 && window.location.href == "https://www.claritaswm.co.uk/") {
			document.querySelector(".splashBack").style.backgroundImage = "url(" + eval("b" + time) + ")";
			document.querySelector(".splashBack").classList.remove("kenburns-bottom");
			void document.querySelector(".splashBack").offsetWidth;
			document.querySelector(".splashBack").classList.add("kenburns-bottom");
			time++; 
		} else { 
			document.querySelector(".splashBack").style.backgroundImage = "url(https://claritaswm.co.uk/images/background.jpg)";
			document.querySelector(".splashBack").classList.remove("kenburns-bottom");
			void document.querySelector(".splashBack").offsetWidth;
			document.querySelector(".splashBack").classList.add("kenburns-bottom");
			time = 2;
		}
	}, 10000)
}

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

if (window.location.href == "https://www.claritaswm.co.uk/") {
	preload(
    "https://claritaswm.co.uk/images/background.jpg",
	"https://claritaswm.co.uk/images/background1.jpg",
	"https://claritaswm.co.uk/images/background2.jpg",
	"https://claritaswm.co.uk/images/background3.jpg",
	"https://claritaswm.co.uk/images/background4.jpg",
	"https://claritaswm.co.uk/images/background5.jpg"
	)
	backgroundHandler();
}
