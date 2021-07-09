document.getElementById("log-submit").addEventListener("click", e => {
	e.preventDefault();
	const message = document.getElementById("log-message"),
		  duration = document.getElementById("log-duration");
	if (message.value !== "" && duration.value !== "") {
		loadLog(message.value, duration.value);
		storeLog(message.value, duration.value);
		message.value = "";
		duration.value = "";
	}
});

function loadLog(msg, dur) {
	if (msg === "" || dur === "")
		return;
	const newLog = document.createElement("div");
	newLog.className = "row log";
	const now = new Date();
	newLog.innerHTML = `
	<div class="eight columns">${msg}</div>
	<div class="four columns">
		<div class="badge">${dur}mins</div>
		<div class="badge">${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}</div>
	</div>
	`;
	const logs = document.getElementById("logs");
	logs.insertBefore(newLog, logs.firstElementChild);
}

function retrieveLogs() {
	let logs = localStorage.getItem("logs");
	if (!logs) {
		logs = [];
	} else {
		logs = JSON.parse(logs);
	}
	return logs;
}

function storeLog(msg, dur) {
	let logs = retrieveLogs();
	logs.push({msg, dur});
	localStorage.setItem("logs", JSON.stringify(logs));
}

function displayLogs() {
	let logs = retrieveLogs();
	logs.forEach(log => loadLog(log.msg, log.dur));
}

window.addEventListener("load", displayLogs);
