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

gsap.to("#body", {});
