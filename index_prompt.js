const resourcesLink = document.getElementById("resources-link"),
	  resourcesPrompt = document.getElementById("resources-prompt");
resourcesLink.addEventListener("mouseenter", () => {
	const promptElement = document.createElement("div");
	promptElement.className = "promptElement";
	promptElement.style = `
		position: absolute;
		left: 100%;
		top: 0;
		font-family: Raleway;
		font-size: 0.6em;
		color: black;
		width: 15em;
	`;
	promptElement.appendChild(document.createTextNode("You will be prompted to join the Baidu Netdisk group."));
	resourcesLink.appendChild(promptElement);
});

resourcesLink.addEventListener("mouseleave", () => {
	resourcesLink.querySelectorAll(".promptElement").forEach(e => e.remove());
});
