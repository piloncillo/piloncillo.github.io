var selectable = document.getElementsByClassName("selectable");
var toggler = document.getElementsByClassName("caret");
var accordion = document.getElementsByClassName("accordion");
var imgs = document.getElementsByClassName("auto_size");
var imgs_li = document.getElementsByClassName("auto_size_li");
var imgs_li_li = document.getElementsByClassName("auto_size_li_li");
var i;

window.addEventListener("resize", contentResize);

function loadContent() {	
	var tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
  	
	var url = new URL(document.URL);
	var section = url.searchParams.get("s");
	var page = url.searchParams.get("p");

	var content = null;
	var main = document.getElementById("main");
	var vwii = document.getElementById("mod");
	
  
	if (section != null && section != "") {
		if (page != null && page != "")
			content = document.getElementById(section + "_" + page);
		if (content == null)
			content = document.getElementById(section);
	}
	
	if (section == "uninstall_payloadloader" ||
		section == "uninstall_webhack" ||
		section == "uninstall_indexiine" ||
		section == "uninstall_haxchi" ||
		section == "uninstall_cbhc")
		document.getElementById("uninstall_mod").click();
		
	if (section == "custom_haxchi" ||
		section == "config_payload")
		document.getElementById("archive_caret").click();
		
	if (section == "webhack" ||
		section == "indexiine"||
		section == "haxchi"||
		section == "cbhc") {
		document.getElementById("archive_caret").click();
		document.getElementById("previous_methods_caret").click();
	}
	
	removeSelected();
	
	if (content != null) {
		if (section == "webhack" ||
			section == "indexiine" ||
			section == "haxchi" ||
			section == "cbhc")
			document.getElementById("install_" + section + "_link").classList.add("selected");
		if (document.getElementById(section + "_" + page + "_link") != null)
			document.getElementById(section + "_" + page + "_link").classList.add("selected");
		else if (document.getElementById(section + "_link") != null)
			document.getElementById(section + "_link").classList.add("selected");
		else
			document.getElementById("main_link").classList.add("selected");
		content.style.display = "block";
	} else if (main == null) {
		window.location.href = "../";
	} else {
		document.getElementById("main_link").classList.add("selected");
		//document.getElementById("main").style.display = "block";
	}

	const links = document.querySelectorAll("a[href]");
	var linksArray = [...links];
	linksArray = linksArray.filter(l => l.hostname != location.hostname);
	for (i = 0; i < linksArray.length; i++) {
		linksArray[i].classList.add("external");
		linksArray[i].setAttribute("target", "_blank");
	}
	
	var sidebar = localStorage.getItem("sidebar");
	if (sidebar != null) {
		if (sidebar == "open")
			openSidebar();
		else if (sidebar == "close")
			closeSidebar();
		else
			defaultSidebar();
	} else
		defaultSidebar();
		
	//testResults();
}

function contentResize(overlay) {
	var sidebarWidth = 0;
	
	if (localStorage.getItem("sidebar") == "open" && (typeof overlay == "object" || !overlay)) {
		if (window.innerWidth < 640) {
			document.getElementById("sidebar").style.width = "0px";
			document.getElementById("sidebar_toggle").style.marginLeft = "0px";
			document.getElementById("content").style.marginLeft = "0px";
			document.body.style.overflow = "auto";
			localStorage.setItem("sidebar", "close");
		}
		else
			sidebarWidth = 250;
	}

	const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
	const availableWidth = window.innerWidth - sidebarWidth - scrollBarWidth - 80;
	
	if (availableWidth < 720) {
		for (i = 0; i < imgs.length; i++) {
			imgs[i].style.width = imgs[i].naturalWidth + "px";
			if (imgs[i].naturalWidth > availableWidth)
				imgs[i].style.width = availableWidth + "px";
		}
		for (i = 0; i < imgs_li.length; i++) {
			imgs_li[i].style.width = imgs_li[i].naturalWidth + "px";
			if (imgs_li[i].naturalWidth > availableWidth - 40)
				imgs_li[i].style.width = (availableWidth - 40)+ "px";
		}
		for (i = 0; i < imgs_li_li.length; i++) {
			imgs_li_li[i].style.width = imgs_li_li[i].naturalWidth + "px";
			if (imgs_li_li[i].naturalWidth > availableWidth - 80)
				imgs_li_li[i].style.width = (availableWidth - 80)+ "px";
		}
	} else {
		for (i = 0; i < imgs.length; i++) {
			imgs[i].style.width = imgs[i].naturalWidth + "px";
			if (imgs[i].naturalWidth > 720)
				imgs[i].style.width = "720px";
		}
		for (i = 0; i < imgs_li.length; i++) {
			imgs_li[i].style.width = imgs_li[i].naturalWidth + "px";
			if (imgs_li[i].naturalWidth > 680)
				imgs_li[i].style.width = "680px";
		}
		for (i = 0; i < imgs_li_li.length; i++) {
			imgs_li_li[i].style.width = imgs_li_li[i].naturalWidth + "px";
			if (imgs_li_li[i].naturalWidth > 640)
				imgs_li_li[i].style.width = "640px";
		}
	}
}

function openSidebar() {
	localStorage.setItem("sidebar", "open");
	if (window.innerWidth < 640) {
		document.getElementById("sidebar_close").style.visibility = "visible";
		document.getElementById("sidebar").style.width = "100%";
		document.getElementById("sidebar_toggle").style.marginLeft = "0px";
		document.getElementById("content").style.marginLeft = "0px";
		document.body.style.overflow = "hidden";
		contentResize(true);
	}
	else {
		document.getElementById("sidebar_close").style.visibility = "hidden";
		document.getElementById("sidebar").style.width = "250px";
		document.getElementById("sidebar_toggle").style.marginLeft = "250px";
		document.getElementById("content").style.marginLeft = "250px";
		contentResize(false);
	}
}

function closeSidebar() {
	localStorage.setItem("sidebar", "close");
	document.getElementById("sidebar").style.width = "0px";
	document.getElementById("sidebar_toggle").style.marginLeft = "0px";
	document.getElementById("content").style.marginLeft = "0px";
	if (window.innerWidth < 640) {
		document.body.style.overflow = "auto";
		contentResize(true);
	}
	else
		contentResize(false);
}

function defaultSidebar() {
	if (window.innerWidth < 640)
		closeSidebar();
	else
		openSidebar();
}

function toggleSidebar() {
	if (localStorage.getItem("sidebar") == "open")
		closeSidebar();
	else
		openSidebar();
}


for (i = 0; i < selectable.length; i++) {
	selectable[i].addEventListener("click", function() {
		removeSelected();
		this.classList.toggle("selected");
	});
}

for (i = 0; i < toggler.length; i++) {
	toggler[i].addEventListener("click", function() {
		this.parentElement.querySelector(".nested").classList.toggle("active_nav");
		this.classList.toggle("caret-down");
	});
}

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener("click", function() {
		this.classList.toggle("active_acco");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		} 
	});
}

function removeSelected() {
	var j;
	for (j = 0; j < selectable.length; j++) {
		selectable[j].classList.remove("selected");
	}
}