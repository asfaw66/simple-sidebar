var options = {
	attr: "simplesidebar",
	animation: {
		duration: 500,
		easing: "swing"
	},
	sidebar: {
		width: 300,
		gap: 64,
		closingLinks: "a",
		css: {
			zIndex: 3000
		}
	},
	sbWrapper: {
		display: true,
		css: {
			position: "relative",
			height: "100%",
			overflowY: "auto",
			overflowX: "hidden"
		}
	},
	mask: {
		display: true,
		css: {
			backgroundColor: "black",
			opacity: 0.5,
			filter: "Alpha(opacity=50)"
		}
	},
}
