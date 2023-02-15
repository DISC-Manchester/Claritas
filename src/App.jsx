import './css/stylesheet.css';
import svgClose from './images/close.svg';
import svgLogo from './images/logo.svg';
import svgMenu from './images/burger.svg';
import svgExpand from './images/expand.svg';
import React from 'react';

function App() {
	const menuRef = React.createRef();
	const dropDown = () => {
		if(!(getComputedStyle(document.querySelector(':root'))).getPropertyValue('--mobile') === false) {
		if (menuRef.current.style.width === '30vw') {
			menuRef.current.style.width = "0vw";
			menuRef.current.style.left = "100vw";
		} else {
			menuRef.current.style.width = "30vw";
			menuRef.current.style.left = "70vw";
		}
		} else {
			if (menuRef.current.style.width === '90vw') {
				menuRef.current.style.width = "0vw";
				menuRef.current.style.left = "100vw";
			} else {
				menuRef.current.style.width = "90vw";
				menuRef.current.style.left = "10vw";
			}
		}
	};
  return (
    <div className="main">
	<section className="menu" id="sidenav" ref={menuRef}>
		<img className="close" src={svgClose} alt="Close Icon" onClick={() => {dropDown()}} />
		<h1 className="menuOption">Home</h1>
		<h1 className="menuOption">Meet The Team</h1>
		<h1 className="menuOption">Blog</h1>
		<h1 className="menuOption">Contact</h1>
		<div className="socials">
			<SocialIconLilin className="socialIcon" />
			<SocialIconInsta className="socialIcon" />
			<SocialIconBird className="socialIcon" />
		</div>
	</section>
	<section className="splash">
		<div className="splashBox">
			<div className="topBar">
				<img className="logo" src={svgLogo} alt="Claritas Logo" />
				<img className="burger" src={svgMenu} alt="Menu Icon" onClick={() => {dropDown()}} />
			</div>
			<div className="splashContent">
				<h1 className="splashHead">Live today.<br/>
				Plan for tomorrow.</h1>
				<h3 className="splashText">Life’s not a rehearsal and time passes quickly.<br/>
				We want you to reach a ripe old age, look back and have no regrets.</h3>
			</div>
			<div className="scrollContain">
				<a href="#scroll"><img className="scroll" src={svgExpand} alt="Scroll Indicator" /></a>
			</div>
		</div>
	</section>
	<section className="contentBar">
		<h2 className="contentText">Money in itself is pretty dull.<br/>
		It's what you do with it that matters.</h2>
	</section>
	<section className="contentPage" id="scroll">
		<div className="doubleRow">
			<p className="rowText">What have you always wanted to do? What will you regret not having done?<br/>
			Everyone is different. We’ll listen to you (and we mean really listen).</p>
			<div className="rowImage rowSI"></div>
		</div>
		<div className="doubleRow">
			<div className="rowImage rowFI"></div>
			<p className="rowText">Together we’ll discuss and clarify what you want to do with the rest of your life and create a clear, elegantly simple plan for you to do the things that are important to you.</p>
		</div>
	</section>
	<section className="questionPage">
		<div className="contentBar">
			<h2 className="contentText">Your hopes, worries and fears will be completely personal to you but here’s some examples of the kinds of things that might be on your mind.</h2>
		</div>
		<div className="contentContain">
			<div className="imageContain">
				<div className="autoCarousel">
					<div className="autoScroll">
						<h2 className="carouselText" id="question1">How can I minimise inheritance tax?</h2>
						<h2 className="carouselText" id="question2">How would long term care costs affect me?</h2>
						<h2 className="carouselText" id="question3">How can I plan for long term care costs?</h2>
						<h2 className="carouselText" id="question4">When can I afford to retire?</h2>
						<h2 className="carouselText" id="question5">How much money is enough to retire?</h2>
						<h2 className="carouselText" id="question6">How much can I afford to spend in the early years of retirement?</h2>
						<h2 className="carouselText" id="question7">How do I strike the balance between living for today and looking after tomorrow?</h2>
						<h2 className="carouselText" id="question8">How much can I afford to gift to my children or grandchildren without affecting my own lifestyle?</h2>
						<h2 className="carouselText" id="question9">Would my dependants be ok in the event of my death?</h2>
						<h2 className="carouselText" id="question10">How should I pass my estate on to the next generation?</h2>
						<h2 className="carouselText" id="question11">How can I minimise inheritance tax?</h2>
						<h2 className="carouselText" id="question12">How would long term care costs affect me?</h2>
						<h2 className="carouselText" id="question13">How can I plan for long term care costs?</h2>
					</div>
				</div>
				<div className="bottomBar">
					<button className="carouselButton" onClick={() => {}}><h2 className="buttonText">Get in touch for a chat</h2></button>
				</div>
			</div>
		</div>
	</section>
	<section className="newspaperText">
		<div className="leftPara">
			<p className="paraB">T</p>
			<p className="para">he one thing we can guarantee is that things will change (both personally and with the world in general). On an ongoing basis we’ll handhold you through the inevitable ups and downs of life. Having a caring, empathetic and trusted adviser by your side can really help. You can rest assured that we’ll take care of all of the technical stuff (pensions, investments, tax planning etc). In our opinion that’s just table stakes and it always comes after the financial plan.<br/><br/>Once we know how much money you need and when you need it, we can move on to any product related recommendations. Sometimes the solutions we recommend don’t involve a product at all.</p>
		</div>
		<div className="rightPara">
			<p className="para">Many new clients do come to us with a collection of pension plans, investments, savings and other assets that have been built up over time. Don’t worry, we’ll make sense of it all for you.<br/><br/>Where capital needs to be invested we have an impeccably researched, world class investment solution based on the latest evidence and a healthy dose of common sense. We have engaged investment research consultants, Albion Strategic, giving us access to a level of expertise and rigour that most financial planning advice firms would dream of. Claritas are one of the client case studies on their website, www.albionstrategic.com. </p>
		</div>
	</section>
	<section className="testimonial">
		<div className="subBar">
			<h2 className="subTitle">Don't just listen to us.</h2>
			<h3 className="subSubTitle">See a few words from our clients.</h3>
		</div>
		<TestimonialSection/>
	</section>
	<section className="infoImage">
		<div className="textsec">
			<h2 className="textsectext">The one thing we can guarantee is that things will change (both personally and with the world in general). On an ongoing basis we’ll handhold you through the inevitable ups and downs of life. Having a caring, empathetic and trusted adviser by your side can really help. </h2>
		</div>
		<div className="imgsec"></div>
	</section>
	<section className="contentBar white">
		<h2 className="contentText notwhite">Where capital needs to be invested we have the Claritas Investment Process, an impeccably researched, world className investment solution based on the latest evidence and a healthy dose of common sense.</h2>
	</section>
	<footer>
		<div className="topFooter">
			<div className="FOSNotice">
				<p className="notice">Claritas Wealth is a trading name of Claritas Wealth Management which is authorised and regulated by the Financial Conduct Authority, the independent watchdog that regulates financial services in the United Kingdom. Our Financial Services Register number is 734968.</p>
			</div>
			<div className="links">
				<div className="footerSection">
					<h3 className="footerTitle">PAGES</h3>
					<h6 className="footerLink">Home</h6>
					<h6 className="footerLink">Team</h6>
					<h6 className="footerLink">About</h6>
					<h6 className="footerLink">Contact</h6>
					<h6 className="footerLink">Blog</h6>
				</div>
				<div className="footerSection">
					<h3 className="footerTitle">POLICIES</h3>
					<h6 className="footerLink">Privacy Policy</h6>
					<h6 className="footerLink">Terms of Service</h6>
				</div>
				<div className="footerSection">
					<h3 className="footerTitle">CONTACT</h3>
					<h6 className="footerLink">10 Moorside Road,<br/>
					Heaten Moor,<br/>
					Stockport,<br/>
					SK4 4DT</h6>
					<h6 className="footerLink">0161 636 9200</h6>
					<h6 className="footerLink">hello@claritaswm.co.uk</h6>
				</div>
			</div>
		</div>
		<div className="line"></div>
		<div className="bottomFooter">
			<div className="copyright">
				<p className="notice">Copyright DigitalAdvantage, All Rights Reserved.</p>
			</div>
			<div className="socials">
			<SocialIconLilin className="socialIcon" />
			<SocialIconInsta className="socialIcon" />
			<SocialIconBird className="socialIcon" />
			</div>
		</div>
	</footer>
    </div>
  );
}

const SocialIconLilin = (props) => (
  <svg
    className="socialIcon"
    xmlns="http://www.w3.org/2000/svg"
    width={51.676}
    height={51.676}
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path data-name="Rectangle 10" fill="none" d="M0 0h51.676v51.676H0z" />
      </clipPath>
    </defs>
    <g data-name="Group 21" opacity={0.8}>
      <g data-name="Group 20" clipPath="url(#a)" fillRule="evenodd">
        <path
          data-name="Path 27"
          d="M51.676 25.838A25.838 25.838 0 1 1 25.838-.001a25.838 25.838 0 0 1 25.838 25.839"
          fill="#fff"
        />
        <path
          data-name="Path 28"
          d="M11.468 20.651h5.819v19.542h-5.819Zm2.874-9.913a3.52 3.52 0 0 1 0 7.04 3.521 3.521 0 0 1 0-7.04m6.393 9.913h5.747v2.73a6.65 6.65 0 0 1 5.531-2.945h1.581a6.638 6.638 0 0 1 6.609 6.609v13.148h-5.747v-10.56a3.82 3.82 0 0 0-3.807-3.951 4.128 4.128 0 0 0-4.167 3.951v10.56h-5.747Z"
          fill="#354860"
        />
      </g>
    </g>
  </svg>
);

const SocialIconInsta = (props) => (
  <svg
    className="socialIcon"
    xmlns="http://www.w3.org/2000/svg"
    width={51.676}
    height={51.676}
    {...props}
  >
    <defs>
      <clipPath id="b">
        <path data-name="Rectangle 8" fill="none" d="M0 0h51.676v51.676H0z" />
      </clipPath>
    </defs>
    <g data-name="Group 17" opacity={0.8}>
      <g data-name="Group 16" clipPath="url(#a)" fillRule="evenodd">
        <path
          data-name="Path 23"
          d="M51.676 25.838A25.838 25.838 0 1 1 25.838-.001a25.838 25.838 0 0 1 25.838 25.839"
          fill="#fff"
        />
        <path
          data-name="Path 24"
          d="M18.238 9.379h15.2a8.94 8.94 0 0 1 8.9 8.9v15.12a8.94 8.94 0 0 1-8.9 8.9h-15.2a8.941 8.941 0 0 1-8.9-8.9V18.278a8.941 8.941 0 0 1 8.9-8.9m16.459 5.749a1.89 1.89 0 1 1 0 3.78 1.89 1.89 0 1 1 0-3.78m-8.9 1.732h.079a8.978 8.978 0 1 1 0 17.955h-.079a8.978 8.978 0 0 1 0-17.955m0 3.071h.079a5.946 5.946 0 0 1 0 11.891h-.079a5.946 5.946 0 0 1 0-11.891m-7.481-7.718h15.042a6.151 6.151 0 0 1 6.143 6.143v14.963a6.151 6.151 0 0 1-6.143 6.143H18.317a6.151 6.151 0 0 1-6.143-6.143V18.361a6.151 6.151 0 0 1 6.143-6.143"
          fill="#354860"
        />
      </g>
    </g>
  </svg>
);

const SocialIconBird = (props) => (
  <svg
    className="socialIcon"
    xmlns="http://www.w3.org/2000/svg"
    width={51.676}
    height={51.676}
    {...props}
  >
    <defs>
      <clipPath id="c">
        <path data-name="Rectangle 9" fill="none" d="M0 0h51.676v51.676H0z" />
      </clipPath>
    </defs>
    <g data-name="Group 19" opacity={0.8}>
      <g data-name="Group 18" clipPath="url(#a)" fillRule="evenodd">
        <path
          data-name="Path 25"
          d="M51.676 25.838A25.838 25.838 0 1 1 25.838-.001a25.838 25.838 0 0 1 25.838 25.839"
          fill="#fff"
        />
        <path
          data-name="Path 26"
          d="M26.124 21.246a6.73 6.73 0 0 1 11.542-5.856 16.99 16.99 0 0 0 3.989-1.782 7.341 7.341 0 0 1-2.971 3.734 12.649 12.649 0 0 0 3.649-1.018 7.094 7.094 0 0 1-3.14 3.14c1.1 15.362-15.447 24.7-28.856 17.059 0 0 6.62.34 9.421-2.886 0 0-4.074.339-6.111-4.583a4.094 4.094 0 0 0 3.055-.17s-4.753-.764-5.177-6.45a4.182 4.182 0 0 0 3.225.764s-5.262-3.14-2.292-8.826c0 0 5.6 7.129 13.664 6.874"
          fill="#354860"
        />
      </g>
    </g>
  </svg>
);

function TestimonialSection (props) {
	const [selected, setTestimony] = React.useState(1);
	const testimonialTable = [
		{name: "Graham & Michele", quote:<>We were recommended Claritas by a friend who had worked with them for a number of years.  We are so glad we took that recommendation.  We get informative and impactful advice, specifically tailored to our needs and wishes, the advice is also delivered in a clear, concise, and friendly way.  It is genuinely comforting to think we have people we trust managing our finances, whilst still maintaining a level of control that allows us to carry on the lifestyle that we want.  We cannot recommend Krish and the team at Claritas highly enough and only wish we had started using them sooner.</>}, 
		{name: "Tom & Emma", quote:<>We have been delighted in how useful our discussions with Krish and the team at Claritas have been for us.  Given we still have a long way to run in our careers before retirement, we did wonder whether wealth management advice was going to be for us, but we were keen to explore whether or not we were doing the right things in terms of planning for the future.  We were put at ease very quickly and have enjoyed the open dialogue with the Claritas team.  They have been very helpful in navigating our employee benefits packages and providing advice we how we can optimise our choices now to help with options over the next 20+ years.  The financial modelling exercise and advice provided by the team has brought to life our overall financial position both now and in the future, which in turn has given us the confidence to make spending and investment decisions so that we can enjoy the benefit of our hard work with our family.  We would highly recommend a consultation with Claritas.</>}, 
		{name: "Peter & Susan", quote:<>We have been with Claritas since the beginning; Tim and the team have always made us feel comfortable and relaxed in our future plans.<br/><br/>Planning for the future plus the unexpected could be seen as daunting however, with Tim and the team at our side we always feel we are ready for whatever happens. There is never any pressure to do anything we don’t feel comfortable with, and they have helped us set up for the future financially and with peace of mind. Tim always explains the options open to us, and covers many of the activities we wouldn’t have thought about.<br/><br/>The communications we receive and the access to online real time data via their website and app make us feel happy and secure with progress both financially and with our lifestyle decisions we make.<br/><br/>I see Claritas as our safety net, not just from a wealth management perspective, but also for our future life milestones.</>}, 
		{name: "Ken & Jane", quote:<>To follow after 13th Feb (client on holiday). Please could you leave a space for them.</>}
	];
	const currentImage = React.createRef();
	const dot1 = React.createRef();
	const dot2 = React.createRef();
	const dot3 = React.createRef();
	const dot4 = React.createRef();
	const changeStyle = (which) => {
		switch (which) {
			case 1: {
				dot1.current.style.background = "gray";
				dot2.current.style.background = "white";
				dot3.current.style.background = "white";
				dot4.current.style.background = "white";
				currentImage.current.style.background = `url(${require("./images/client1.jpg")})`;
				currentImage.current.style.backgroundSize = "cover";
				break;
			}
			case 2: {
				dot1.current.style.background = "white";
				dot2.current.style.background = "gray";
				dot3.current.style.background = "white";
				dot4.current.style.background = "white";
				currentImage.current.style.background = `url(${require("./images/client2.jpg")})`;
				currentImage.current.style.backgroundSize = "cover";
				break;
			}
			case 3: {
				dot1.current.style.background = "white";
				dot2.current.style.background = "white";
				dot3.current.style.background = "gray";
				dot4.current.style.background = "white";
				currentImage.current.style.background = `url(${require("./images/client3.jpg")})`;
				currentImage.current.style.backgroundSize = "cover";
				break;
			}
			case 4: {
				dot1.current.style.background = "white";
				dot2.current.style.background = "white";
				dot3.current.style.background = "white";
				dot4.current.style.background = "gray";
				currentImage.current.style.background = `url(${require("./images/client4.jpg")})`;
				currentImage.current.style.backgroundSize = "cover";
				break;
			}
			default: {
				break;
			}
		}
	}
	React.useEffect(() => {changeStyle(1)});
	// on render call changeStyle(1) somehow
	return (
		<div className="testimonials">
			<div className="cslider">
				<div className="csliderTop">
					<div className="clientPhoto" ref={currentImage}></div>
					<h6 className="clientName">{testimonialTable[selected].name}</h6>
					</div>
					<div className="csliderText">
						<p className="clientQuote">{testimonialTable[selected].quote}</p>
					</div>
				</div>
				<div className="buttons">
					<div className="sliderButton" id="1" ref={dot1} onClick={() => (((setTestimony(prev => 0)), changeStyle(1)))}></div>
					<div className="sliderButton" id="2" ref={dot2} onClick={() => (((setTestimony(prev => 1)), changeStyle(2)))}></div>
					<div className="sliderButton" id="3" ref={dot3} onClick={() => (((setTestimony(prev => 2)), changeStyle(3)))}></div>
					<div className="sliderButton" id="4" ref={dot4} onClick={() => (((setTestimony(prev => 3)), changeStyle(4)))}></div>
			</div>
		</div>
	)
};

export default App;
