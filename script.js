var crsr = document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
	crsr.style.left = dets.x - 10 + "px";
	crsr.style.top = dets.y - 10 + "px";
	crsrblr.style.left = dets.x - 250 + "px";
	crsrblr.style.top = dets.y - 250 + "px";
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
