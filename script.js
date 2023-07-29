var crsr = document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dots) {
	crsr.style.left = dots.x + "px";
	crsr.style.top = dots.y + "px";
	crsrblr.style.left = dots.x - 300 + "px";
	crsrblr.style.top = dots.y - 300 + "px";
});

gsap.to("#nav", {
	backgroundColor: "#000",
	duration: 0.5,
	height: "105px",
	scrollTrigger: {
		trigger: "#nav",
		scroller: "body",
		// markers: true,
		start: "top -10%",
		end: "top -11%",
		scrub: 1,
	},
});

gsap.to("#main", {
	backgroundColor: "#000",
	scrollTrigger: {
		trigger: "#main",
		scroller: "body",
		// markers: true,
		start: "top -25%",
		end: "top -70%",
		scrub: 2,
	},
});

var h4all = document.querySelectorAll("#nav h4");
h4all.forEach(function (elem) {
	elem.addEventListener("mouseenter", function () {
		crsr.style.scale = 5;
		crsr.style.border = "0.5px solid #fff";
		crsr.style.backgroundColor = "transparent";
		crsr.style.zaxis = "99px";
		// crsr.style.transition = " ease 0.1s ";
	});
	elem.addEventListener("mouseleave", function () {
		crsr.style.scale = 1;
		crsr.style.border = "0px solid #fff";
		crsr.style.backgroundColor = "#95c11e";
		crsr.style.transition = " ease 0.5s";
	});
});

gsap.from("#about-us img , #about-us-in", {
	y: 90,
	opacity: 0,
	duration: 1,
	// stagger: 0.4,
	scrollTrigger: {
		trigger: "#about-us",
		scroller: "body",
		// markers: true,
		start: "top 70%",
		end: "top 65%",
		scrub: 2,
	},
});

gsap.from(".cards", {
	scale: 0.8,
	opacity: 0,
	duration: 1,
	stagger: 0.1,
	scrollTrigger: {
		trigger: ".cards",
		scroller: "body",
		// markers: true,
		start: "top 70%",
		end: "top 65%",
		scrub: 2,
	},
});

gsap.from("#colon1", {
	y: -70,
	x: -70,
	scrollTrigger: {
		trigger: "#colon1",
		scroller: "body",
		start: "top 55%",
		end: "top 45%",
		scrub: 4,
	},
});
gsap.from("#colon2", {
	y: 70,
	x: 70,
	scrollTrigger: {
		trigger: "#colon1",
		scroller: "body",
		start: "top 55%",
		end: "top 45%",
		scrub: 4,
	},
});

gsap.from("#page4 h1", {
	y: 50,
	scrollTrigger: {
		trigger: "#page4 h1",
		scroller: "body",
		start: "top 75%",
		end: "top 70%",
		scrub: 2,
	},
});
