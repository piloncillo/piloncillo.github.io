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
	var directory = url.searchParams.get("directory");
	var eshop_game = url.searchParams.get("eshop_game");
	var console_status = url.searchParams.get("console");
	var content = null;
	var main = document.getElementById("main");
	var vwii = document.getElementById("mod");
	
	if (console_status != null && (console_status == "on" || console_status == "off")) {
		var console_elements = document.getElementsByClassName("console_status");
		if (console_status == "off") {
			for (i = 0; i < console_elements.length; i++)
				console_elements[i].style.display = "";
		}
	}
  
	if (section != null && section != "") {
		if (page != null && page != "")
			content = document.getElementById(section + "_" + page);
		if (content == null)
			content = document.getElementById(section);
	}
	
	if (section == "tiramisu")
		document.getElementById("install_hack").click();
		
	if (section == "test")
		document.getElementById("test_hack").click();
		
	if (section == "games")
		document.getElementById("download_games").click();
		
	if (section == "glossary")
		document.getElementById("glossary_caret").click();
		
	if (section == "install_games")
		document.getElementById("install_games_caret").click();
		
	if (section == "uninstall_payloadloader" ||
		section == "uninstall_webhack" ||
		section == "uninstall_indexiine" ||
		section == "uninstall_haxchi" ||
		section == "uninstall_cbhc")
		document.getElementById("uninstall_hack").click();
	
	if (section == "sd_format" ||
		section == "detect_sd" ||
		section == "write_to_sd" ||
		section == "nand_backup" ||
		section == "enable_autobooting" ||
		section == "disable_autobooting" ||
		section == "standby_functions" ||
		section == "block_updates" ||
		section == "unblock_updates" ||
		section == "tiramisu_speedrun")
		document.getElementById("extras").click();
		
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
		
	if (section == "github" ||
		section == "discord" ||
		section == "about")
		document.getElementById("links").click();
		
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
	} else if (main == null && vwii != null) {
		document.getElementById("mod_link").classList.add("selected");
		document.getElementById("mod").style.display = "block";
	} else if (main == null) {
		window.location.href = "../index.html";
	} else {
		document.getElementById("main_link").classList.add("selected");
		document.getElementById("main").style.display = "block";
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
		
	testResults();
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

/* Test functions */

function testResults() {
  var autobooting = localStorage.getItem("autobooting");
  var indexiine = localStorage.getItem("indexiine");
  var haxchiIcon = localStorage.getItem("haxchi icon");
  var haxchi = localStorage.getItem("haxchi");
  var payloadloader = localStorage.getItem("payloadloader");
  
  if (autobooting == "cbhc") {
    document.getElementById("autobooting_result").innerHTML = 'Coldboot Haxchi detectado. Tienes un "hack" que tiene el riesgo de brickear la consola si no eres cuidadoso, sigue las reglas de <a href="?s=cbhc&p=warning">aquí</a> para prevenir un brick.';
  }
  else if (autobooting == "payload_loader") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado.';
  }
  else if (autobooting == "payload_loader_old") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. Tienes una versión vieja de Tiramisu, <a href="?s=update_tiramisu">actualiza "los archivos del hack"</a>';
  }
  else if (autobooting == "hbl") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. Tiramisu está configurado para cargar el Homebrew Launcher, es una configuración extraña, si quieres cambiarla consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (autobooting == "wii") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. Tiramisu (o Aroma) está configurado para cargar el menú de Wii (vWii System Menu), es una configuración extraña, si quieres cambiarla consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (autobooting == "hbc") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. Tiramisu (o Aroma) está configurado para cargar el Homebrew Channel (vWii), es una configuración extraña, si quieres cambiarla consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (autobooting == "el") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. Está configurado para cargar el Environment Loader (Cargador de Entorno), si quieres cambiarlo consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (autobooting == "tbs") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. Está configurado para cargar el Tiramisu Boot Selector (Selector de Arranque de Tiramisu), si quieres cambiarlo consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (autobooting == "failed") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. El PayloadLoader no está detectando la tarjeta SD o no encontró el archivo <code>sd:/wiiu/payload.elf</code>. Limpia los contactos de la tarjeta SD, si estas usando una microSD prueba cambiar el adaptador, revisa que tengas "los archivos del hack" en la tarjeta SD. Si no tienes los archivos de Tiramisu en la tarjeta SD puedes colocarlos siguiendo <a href="?s=update_tiramisu">las instrucciones para actualizar Tiramisu</a>.';
  }
  else if (autobooting == "rpx_failed") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. La consola no encontró el archivo <code>sd:/wiiu/payload.rpx</code>. Para recuperar el archivo vuelve a poner todos los archivos de Tiramisu en la tarjeta SD siguiendo <a href="?s=update_tiramisu">las instrucciones para actualizar Tiramisu</a>.';
  }
  else if (autobooting == "mocha_failed") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. Si estas usando Tiramisu la consola no encontró el archivo <code>sd:/wiiu/environments/tiramisu/modules/setup/00_mocha.rpx</code>. Para recuperar el archivo vuelve a poner todos los archivos de Tiramisu en la tarjeta SD siguiendo <a href="?s=update_tiramisu">las instrucciones para actualizar Tiramisu</a>. Si estas usando Aroma La consola no encontró el archivo <code>sd:/wiiu/environments/aroma/modules/setup/00_mocha.rpx</code>. Para recuperar el archivo vuelve a poner todos los archivos de Aroma en la tarjeta SD.';
  }
  else if (autobooting == "warning") {
    document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. Si te aparece el mensaje de alerta <code>the update folder current exists</code> quiere decir que tu consola no está bloqueando las actualizaciones del sistema apropiadamente. Presiona el botón B para no volver a ver el mensaje de alerta. Consulta la información de <a href="?s=block_updates">aquí</a> si quieres bloquear completamente las actualizaciones del sistema de la consola.';
  }
  else if (autobooting == "quick_start") {
    document.getElementById("autobooting_result").innerHTML = 'Usar el menú de inicio rápido impide observar la carga del PayloadLoader al encender la consola, para comprobar al 100% que la consola no tenga Autobooting PayloadLoader es necesario <a href="?s=standby_functions">desactivar las funciones en modo de reposo</a> y volver a contestar la pregunta de este apartado.';
  }
  else if (autobooting == "wiiu" || autobooting == "user") {
    document.getElementById("autobooting_result").innerHTML = 'No detectaste ningún "hack" que inicie de forma automática al encender la consola.';
  }
  
  if (indexiine == "hbl") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Está configurado para cargar el Homebrew Launcher.';
  }
  else if (indexiine == "iosuhax") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Está configurado para cargar el "obsoleto" IOSUHAX. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "mocha") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Está configurado para cargar Mocha CFW. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "wiiu" || indexiine == "user") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Está configurado para cargar una aplicación o un CFW que a su vez redirige al menú de Wii U. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "el") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Carga el Environment Loader (Cargador de Entorno), seguramente tienes los archivos de Tiramisu en la tarjeta SD. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "tbs") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Carga el Tiramisu Boot Selector (Selector de Arranque de Tiramisu), seguramente tienes los archivos de Tiramisu en la tarjeta SD. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "warning") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Si te aparece el mensaje de alerta <code>the update folder current exists</code>, seguramente tienes los archivos de Tiramisu en la tarjeta SD. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "wii") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Carga el menú de Wii (vWii System Menu), seguramente tienes los archivos de Tiramisu en la tarjeta SD. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "hbc") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Carga el Homebrew Channel (vWii), seguramente tienes los archivos de Tiramisu en la tarjeta SD. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "ohb") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Está configurado para cargar una aplicación homebrew. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "q") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Se trata de un mod de Indexiine que permite omitir la carga del mismo para poder usar el navegador (involucra el riesgo de desconfigurar los ajustes correctos del propio navegador). Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "twice") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. El mensaje <code>Don\'t run Environment Loader twice</code> indica que antes de ejecutar Indexiine ya habías cargado el Environment Loader. Si tienes Autobooting PayloadLoader el Environment Loader se carga cuando enciendes la consola. El Environment Loader también se puede cargar usando el exploit del navegador de Internet o se puede cargar al abrir el icono de Información sobre salud y seguridad.';
  }
  else if (indexiine == "msf") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. El mensaje <code>FSGetMountSource falied</code> quiere decir que la consola no está detectando la tarjeta SD, limpia los contactos, si estas usando una microSD prueba cambiar el adaptador.';
  }
  else if (indexiine == "fm") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. El mensaje <code>FSOpenFile falied</code> quiere decir que la consola sí está detectando la tarjeta SD, pero no encontró el archivo <code>payload.elf</code> dentro de la carpeta <code>sd:/wiiu</code>.';
  }
  else if (indexiine == "rpx_failed") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Está intentando cargar el Environment Loader (Cargador de Entorno), seguramente tienes los archivos de Tiramisu en la tarjeta SD. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "mocha_failed") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Está intentando cargar Tiramisu (o Aroma), seguramente tienes los archivos de Tiramisu (o Aroma) en la tarjeta SD. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "freeze") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Si se bloquea el navegador lo más probable es que se perdieron los ajustes correctos para ejecutar Indexiine. Prueba <a href="?s=uninstall_indexiine">desinstalar Indexiine correctamente</a> para volver a ocupar el navegador de forma normal.';
  }
  else if (indexiine == "no") {
    document.getElementById("indexiine_result").innerHTML = 'No detectado. Puedes usar el navegador de forma normal.';
  }
	
  if (haxchiIcon == "yes") {
    document.getElementById("haxchi_result").innerHTML = 'Icono de Haxchi detectado, pero no has indicado que pasa al abrir el icono.';
  }
  else if (haxchiIcon == "no") {
    document.getElementById("haxchi_result").innerHTML = 'Icono de Haxchi no detectado.';
  }
	
  if (haxchi == "hbl") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar el Homebrew Launcher.';
  }
  else if (haxchi == "iosuhax") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar el "obsoleto" IOSUHAX.';
  }
  else if (haxchi == "mocha") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar Mocha CFW.';
  }
  else if (haxchi == "wiiu" || haxchi == "user") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar una aplicación o un CFW que a su vez redirige al menú de Wii U.';
  }
  else if (haxchi == "ohb") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar una aplicación homebrew.';
  }
  else if (haxchi == "-3") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. El mensaje <code>-3</code> quiere decir que la consola no está detectando la tarjeta SD, limpia los contactos, si estas usando una microSD prueba cambiar el adaptador.';
  }
  else if (haxchi == "-5") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. El mensaje <code>-5</code> quiere decir que la consola sí está detectando la tarjeta SD, pero no encontró la aplicación configurada para cargar por defecto en la tarjeta SD.';
  }
  else if (haxchi == "freeze") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Es raro que Haxchi se bloquee, lo más probable es que antes de ejecutar Haxchi hayas cargado Tiramisu (o Aroma). No puedes cargar el CFW interno de Haxchi si tienes cargado el entorno de Tiramisu (o Aroma). Prueba <a href="?s=uninstall_haxchi">desinstalar Haxchi correctamente</a> para volver a ocupar el juego de Nintendo DS de forma normal o <a >personaliza Haxchi</a> para que no cargue su CFW interno.';
  }
  else if (haxchi == "no") {
    document.getElementById("haxchi_result").innerHTML = 'Icono de Haxchi detectado, pero requiere de algo más para abrirlo. La consola no tiene instalado correctamente Haxchi.';
  }
	
  if (payloadloader == "wiiu" || payloadloader == "user") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado.';
  }
  else if (payloadloader == "hbl") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. Tiramisu está configurado para cargar el Homebrew Launcher, es una configuración extraña, si quieres cambiarla consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (payloadloader == "wii") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. Tiramisu (o Aroma) está configurado para cargar el menú de Wii (vWii System Menu), es una configuración extraña, si quieres cambiarla consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (payloadloader == "hbc") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. Tiramisu (o Aroma) está configurado para cargar el Homebrew Channel (vWii), es una configuración extraña, si quieres cambiarla consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (payloadloader == "el") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. Está configurado para cargar el Environment Loader (Cargador de Entorno), si quieres cambiarlo consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (payloadloader == "tbs") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. Está configurado para cargar el Tiramisu Boot Selector (Selector de Arranque de Tiramisu), si quieres cambiarlo consulta como <a href="?s=tiramisu&p=config">configurar Tiramisu</a>.';
  }
  else if (payloadloader == "warning") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. Si te aparece el mensaje de alerta <code>the update folder current exists</code> quiere decir que tu consola no está bloqueando las actualizaciones del sistema apropiadamente. Presiona el botón B para no volver a ver el mensaje de alerta. Consulta la información de <a href="?s=block_updates">aquí</a> si quieres bloquear completamente las actualizaciones del sistema de la consola.';
  }
  else if (payloadloader == "failed") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. No está detectando la tarjeta SD o no encontró el archivo <code>sd:/wiiu/payload.elf</code>. Limpia los contactos de la tarjeta SD, si estas usando una microSD prueba cambiar el adaptador, revisa que tengas "los archivos del hack" en la tarjeta SD. Si no tienes los archivos de Tiramisu en la tarjeta SD puedes colocarlos siguiendo <a href="?s=update_tiramisu">las instrucciones de como actualizar Tiramisu</a>.';
  }
  else if (payloadloader == "rpx_failed") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. La consola no encontró el archivo <code>sd:/wiiu/payload.rpx</code>. Para recuperar el archivo vuelve a poner todos los archivos de Tiramisu en la tarjeta SD siguiendo <a href="?s=update_tiramisu">las instrucciones para actualizar Tiramisu</a>.';
  }
  else if (payloadloader == "mocha_failed") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. Si estas usando Tiramisu la consola no encontró el archivo <code>sd:/wiiu/environments/tiramisu/modules/setup/00_mocha.rpx</code>. Para recuperar el archivo vuelve a poner todos los archivos de Tiramisu en la tarjeta SD siguiendo <a href="?s=update_tiramisu">las instrucciones para actualizar Tiramisu</a>. Si estas usando Aroma La consola no encontró el archivo <code>sd:/wiiu/environments/aroma/modules/setup/00_mocha.rpx</code>. Para recuperar el archivo vuelve a poner todos los archivos de Aroma en la tarjeta SD.';
  }
  else if (payloadloader == "twice") {
    document.getElementById("payloadloader_result").innerHTML = 'Detectado. El mensaje <code>Don\'t run Environment Loader twice</code> indica que antes de abrir el icono de Información sobre salud y seguridad ya habías cargado el Environment Loader (ya tenías cargado Tiramisu o Aroma). Si tienes Autobooting PayloadLoader el Environment Loader se carga automáticamente cuando enciendes la consola. El Environment Loader también lo pudiste haber cargado usando el exploit del navegador de Internet o al abrir el icono de Información sobre salud y seguridad anteriormente. Más información: <a target="_blank" href="https://www.youtube.com/watch?v=SJ0oCedYJzk">https://www.youtube.com/watch?v=SJ0oCedYJzk</a>';
  }
  else if (payloadloader == "no") {
    document.getElementById("payloadloader_result").innerHTML = 'No detectado.';
  }
  
  testSDResults();
}

function testSDResults() {
  var sd = localStorage.getItem("sd");
  var folder = localStorage.getItem("folder");
  var autobooting = localStorage.getItem("autobooting");
  var indexiine = localStorage.getItem("indexiine");
  var haxchiIcon = localStorage.getItem("haxchi icon");
  var haxchi = localStorage.getItem("haxchi");
  var payloadloader = localStorage.getItem("payloadloader");
  
  if (sd == "yes" && folder == "yes") {
    if (autobooting == "failed" ||
	autobooting == "rpx_failed" ||
	autobooting == "mocha_failed" ||
	indexiine == "msf" ||
	indexiine == "fm" ||
	indexiine == "rpx_failed" ||
	indexiine == "mocha_failed" ||
	haxchi == "-3" ||
	haxchi == "-5" ||
	payloadloader == "failed" ||
	payloadloader == "rpx_failed" ||
	payloadloader == "mocha_failed") {
      document.getElementById("sd_result").innerHTML = 'Aunque tienes la carpeta <code>sd:/wiiu</code> la consola no esta detectando la tarjeta SD o los archivos del "hack" de la consola. Revisa las recomendaciones de arriba según sea el caso.';
    }
    else {
      document.getElementById("sd_result").innerHTML = 'Aparentemente tienes "los archivos del hack" bien colocados.';
    }
	getLabelByControlId("sd_yes").style.color = "#bbffbb";
	getLabelByControlId("sd_no").style.color = "#cccccc";
	getLabelByControlId("folder_yes").style.color = "#bbffbb";
	getLabelByControlId("folder_no").style.color = "#cccccc";
	document.getElementById("d_folder").style.display = "inline";
  }
  else if (sd == "yes" && folder == "no") {
    if (autobooting == "payload_loader" || autobooting == "payload_loader_old" || autobooting == "hbl" || autobooting == "wii" || autobooting == "hbc" || autobooting == "el" || autobooting == "tbs" || autobooting == "warning" ||
	indexiine == "hbl" || indexiine == "iosuhax" || indexiine == "mocha" || indexiine == "wiiu" || indexiine == "user" || indexiine == "el" || indexiine == "tbs" || indexiine == "warning" || indexiine == "wii" || indexiine == "hbc" || indexiine == "ohb" || indexiine == "twice" ||
	haxchi == "hbl" || haxchi == "iosuhax" || haxchi == "mocha" || haxchi == "ohb" ||
	payloadloader == "wiiu" || payloadloader == "user" || payloadloader == "hbl" || payloadloader == "wii" || payloadloader == "hbc" || payloadloader == "el" || payloadloader == "tbs" || payloadloader == "warning" || payloadloader == "twice") {
      document.getElementById("sd_result").innerHTML = 'Hay una contradicción en tus respuestas, señalaste que PayloadLoader, Indexiine y/o Haxchi carga una aplicacion homebrew o un CFW, pero la tarjeta SD no tiene la carpeta <code>wiiu</code>. La carpeta <code>sd:/wiiu</code> es esencial ya que ahí se almacenan las aplicaciones homebrew y los archivos del "hack" de la consola. Revisa tus respuestas.';
    }
	else if (autobooting == "rpx_failed" || autobooting == "mocha_failed" || indexiine == "rpx_failed" || indexiine == "mocha_failed" || payloadloader == "rpx_failed" || payloadloader == "mocha_failed") {
      document.getElementById("sd_result").innerHTML = 'Hay una contradicción en tus respuestas, señalaste que PayloadLoader y/o Indexiine muestra un mensaje que requiere de la presencia de la carpeta <code>wiiu</code>. Revisa tus respuestas.';
    }
	else if (indexiine == "msf" || haxchi == "-3") {
      document.getElementById("sd_result").innerHTML = 'La consola no esta detectando la tarjeta SD. Revisa las recomendaciones de arriba según sea el caso.';
    }
	else if (autobooting == "failed" ||
	indexiine == "fm" ||
	haxchi == "-5" ||
	payloadloader == "failed") {
      document.getElementById("sd_result").innerHTML = 'Ya que no tienes en la tarjeta SD la carpeta <code>wiiu</code> es de esperar que la consola te muestre un mensaje de error al ejecutar PayloadLoader, Indexiine o Haxchi. La carpeta <code>sd:/wiiu</code> es esencial ya que ahí se almacenan las aplicaciones homebrew y los archivos del "hack" de la consola. Revisa las recomendaciones de arriba según sea el caso.';
    }
	else if ((autobooting == "wiiu" || autobooting == "user") && indexiine == "no" && (haxchiIcon == "no" || haxchi == "no") && payloadloader == "no") {
      document.getElementById("sd_result").innerHTML = 'La carpeta <code>sd:/wiiu</code> es esencial ya que ahí se almacena "Webhack", las aplicaciones homebrew y los archivos del "hack" de la consola. Sin la carpeta <code>sd:/wiiu</code> y descartados los puntos de entrada se considera que <strong class="green">la consola no está hackeada</strong>.';
    }
    else {
      document.getElementById("sd_result").innerHTML = 'La carpeta <code>sd:/wiiu</code> es esencial ya que ahí se almacenan las aplicaciones homebrew y los archivos del "hack" de la consola.';
    }
	getLabelByControlId("sd_yes").style.color = "#bbffbb";
	getLabelByControlId("sd_no").style.color = "#cccccc";
	getLabelByControlId("folder_yes").style.color = "#cccccc";
	getLabelByControlId("folder_no").style.color = "#bbffbb";
	document.getElementById("d_folder").style.display = "inline";
  }
  else if (sd == "no") {
    if (autobooting == "payload_loader" || autobooting == "payload_loader_old" || autobooting == "hbl" || autobooting == "wii" || autobooting == "hbc" || autobooting == "el" || autobooting == "tbs" || autobooting == "warning" ||
	indexiine == "hbl" || indexiine == "iosuhax" || indexiine == "mocha" || indexiine == "wiiu" || indexiine == "user" || indexiine == "el" || indexiine == "tbs" || indexiine == "warning" || indexiine == "wii" || indexiine == "hbc" || indexiine == "ohb" || indexiine == "twice" ||
	haxchi == "hbl" || haxchi == "iosuhax" || haxchi == "mocha" || haxchi == "ohb" ||
	payloadloader == "wiiu" || payloadloader == "user" || payloadloader == "hbl" || payloadloader == "wii" || payloadloader == "hbc" || payloadloader == "el" || payloadloader == "tbs" || payloadloader == "twice") {
      document.getElementById("sd_result").innerHTML = 'Hay una contradicción en tus respuestas, señalaste que PayloadLoader, Indexiine y/o Haxchi carga una aplicacion homebrew o un CFW, pero la consola no tiene tarjeta SD. La tarjeta SD es esencial ya que ahí se almacenan las aplicaciones homebrew y los archivos del "hack" de la consola. Revisa tus respuestas.';
    }
	else if (autobooting == "rpx_failed" || autobooting == "mocha_failed" || indexiine == "rpx_failed" || indexiine == "mocha_failed" || payloadloader == "rpx_failed" || payloadloader == "mocha_failed") {
      document.getElementById("sd_result").innerHTML = 'Hay una contradicción en tus respuestas, señalaste que PayloadLoader y/o Indexiine muestra un mensaje que requiere de la presencia de la tarjeta SD. Revisa tus respuestas.';
    }
	else if (indexiine == "fm" || haxchi == "-5") {
      document.getElementById("sd_result").innerHTML = 'Hay una contradicción en tus respuestas, señalaste que Indexiine o Haxchi muestra un error que indica que sí está detectando la tarjeta SD, pero la consola no tiene tarjeta SD. Revisa tus respuestas.';
    }
	else if (autobooting == "failed" ||
	indexiine == "msf" ||
	haxchi == "-3" ||
	payloadloader == "failed") {
      document.getElementById("sd_result").innerHTML = 'Ya que no tienes la tarjeta SD de la consola es de esperar que te muestre un mensaje de error al intentar ejecutar PayloadLoader, Indexiine o Haxchi. La tarjeta SD es esencial ya que ahí se almacenan las aplicaciones homebrew y los archivos del "hack" de la consola. Consigue una tarjeta SD y revisa las recomendaciones de arriba según sea el caso.';
    }
	else if ((autobooting == "wiiu" || autobooting == "user") && indexiine == "no" && (haxchiIcon == "no" || haxchi == "no") && payloadloader == "no") {
      document.getElementById("sd_result").innerHTML = 'Consigue una tarjeta SD. La tarjeta SD es esencial ya que ahí se almacena "Webhack", las aplicaciones homebrew y los archivos del "hack" de la consola. Sin la tarjeta SD y descartados los puntos de entrada se considera que <strong class="green">la consola no está hackeada</strong>.';
    }
    else {
      document.getElementById("sd_result").innerHTML = 'Consigue una tarjeta SD. La tarjeta SD es esencial ya que ahí se almacenan las aplicaciones homebrew y los archivos del "hack" de la consola. Contesta las preguntas de los apartados anteriores para identificar el "hack" de tu consola.';
    }
	getLabelByControlId("sd_yes").style.color = "#cccccc";
	getLabelByControlId("sd_no").style.color = "#bbffbb";
	getLabelByControlId("folder_yes").style.color = "#cccccc";
	getLabelByControlId("folder_no").style.color = "#cccccc";
	document.getElementById("d_folder").style.display = "none";
  }
  else {
    document.getElementById("sd_result").innerHTML = 'Contesta la(s) pregunta(s) de abajo para tener un diagnostico básico de la situación de "los archivos del hack" de tu consola. Contesta las preguntas de los apartados anteriores para identificar el "hack" de tu consola.';
  }
  
  if (autobooting == null || indexiine == null || (haxchiIcon == null && haxchi == null) || payloadloader == null) {
    document.getElementById("webhack_result").innerHTML = 'Contesta todas las preguntas de los apartados anteriores para determinar si el exploit del navegador es el único punto de entrada de tu consola. Todas las Wii U, incluidas las que nunca has sido hackeadas, tienen con este punto de entrada.';
  }
  else if ((autobooting == "wiiu" || autobooting == "user") && indexiine == "no" && (haxchiIcon == "no" || haxchi == "no") && payloadloader == "no") {
    if (sd == "yes" && folder == "yes") {
      document.getElementById("webhack_result").innerHTML = 'Detectado. El exploit del navegador es el punto de entrada principal de tu consola.';
	}
	else if (sd == "no" || (sd == "yes" && folder == "no")) {
      document.getElementById("webhack_result").innerHTML = 'No detectado. El exploit del navegador es el punto de entrada principal de tu consola, pero no tienes "los archivos del hack" en la tarjeta SD. En esta situación se considera que <strong class="green">la consola no está hackeada</strong>.';
	}
	else {
      document.getElementById("webhack_result").innerHTML = 'El exploit del navegador es un punto de entrada principal de tu consola, pero no has indicado la situación de "los archivos del hack" de tu consola. Contesta la(s) pregunta(s) de abajo.';
    }
  }
  else {
    if (sd == "yes" && folder == "yes") {
      document.getElementById("webhack_result").innerHTML = 'Detectado. Puede funcionar como un punto de entrada secundario de tu consola.';
	}
	else if (sd == "no" || (sd == "yes" && folder == "no")) {
      document.getElementById("webhack_result").innerHTML = 'No detectado. Puede funcionar como un punto de entrada secundario de tu consola, pero no tienes "los archivos del hack" en la tarjeta SD.';
	}
	else {
      document.getElementById("webhack_result").innerHTML = 'Puede funcionar como un punto de entrada secundario de tu consola, pero no has indicado la situación de "los archivos del hack" de tu consola. Contesta la(s) pregunta(s) de abajo.';
    }
  }
  
  if (autobooting != null) {
    document.getElementById("autobooting_a").style.color = "#999999";
  }
  if (indexiine != null) {
    document.getElementById("indexiine_a").style.color = "#999999";
  }
  if (haxchiIcon != null || haxchi != null) {
    document.getElementById("haxchi_a").style.color = "#999999";
  }
  if (payloadloader != null) {
    document.getElementById("payloadloader_a").style.color = "#999999";
  }
}

function resetTest() {
  localStorage.removeItem("sd");
  localStorage.removeItem("folder");
  localStorage.removeItem("autobooting");
  localStorage.removeItem("indexiine");
  localStorage.removeItem("haxchi icon");
  localStorage.removeItem("haxchi");
  localStorage.removeItem("payloadloader");
}

function updateFormSD() {
  var form = document.getElementById("f_sd");
  var value = form["default"].value;

  if (value != null && value != '') {
    var labels = form.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++)
      labels[i].style.color = "#cccccc";
    getLabelByControlId(value).style.color = "#bbffbb";
	
	if (value == "sd_yes") {
	  localStorage.setItem("sd", "yes");
      document.getElementById("d_folder").style.display = "inline";
	}
	else if (value == "sd_no") {
	  //resetForm("f_folder");
	  localStorage.setItem("sd", "no");
	  localStorage.removeItem("folder");
      document.getElementById("d_folder").style.display = "none";
	}
	else {
	  resetForm("f_folder");
	  localStorage.removeItem("sd");
      document.getElementById("d_folder").style.display = "none";
	}
	
	testSDResults();
  }
}

function updateFormFolder() {
  var form = document.getElementById("f_folder");
  var value = form["default"].value;

  if (value != null && value != '') {
    var labels = form.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++)
      labels[i].style.color = "#cccccc";
    getLabelByControlId(value).style.color = "#bbffbb";
	
	if (value == "folder_yes") {
	  localStorage.setItem("folder", "yes");
	}
	else if (value == "folder_no") {
	  localStorage.setItem("folder", "no");
	}
	else {
	  localStorage.removeItem("folder");
	}
	
	testSDResults();
  }
}

function updateFormAutobooting() {
  var form = document.getElementById("f_autobooting");
  var value = form["default"].value;

  if (value != null && value != "") {
    var labels = form.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++)
      labels[i].style.color = "#cccccc";
    getLabelByControlId(value).style.color = "#bbffbb";

	if (value == "autobooting_cbhc") {
	  localStorage.setItem("autobooting", "cbhc");
	  document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	  document.getElementById("autobooting_result").innerHTML = "Coldboot Haxchi detectado.";
	}
	else if (value == "autobooting_payload_loader") {
	  localStorage.setItem("autobooting", "payload_loader");
	  document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_payload_loader_old") {
	  localStorage.setItem("autobooting", "payload_loader_old");
	  document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_hbl") {
	  localStorage.setItem("autobooting", "hbl");
	  document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_wii") {
	  localStorage.setItem("autobooting", "wii");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_hbc") {
	  localStorage.setItem("autobooting", "hbc");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_el") {
	  localStorage.setItem("autobooting", "el");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_tbs") {
	  localStorage.setItem("autobooting", "tbs");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_failed") {
	  localStorage.setItem("autobooting", "failed");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_rpx_failed") {
	  localStorage.setItem("autobooting", "rpx_failed");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_mocha_failed") {
	  localStorage.setItem("autobooting", "mocha_failed");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_warning") {
	  localStorage.setItem("autobooting", "warning");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_quick_start") {
	  localStorage.setItem("autobooting", "quick_start");
      document.getElementById("autobooting_next").style.display = "none";
	  document.getElementById("fmr").style.display = "inline";
	}
	else if (value == "autobooting_user") {
	  localStorage.setItem("autobooting", "user");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else if (value == "autobooting_wiiu") {
	  localStorage.setItem("autobooting", "wiiu");
      document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	}
	else {
	  localStorage.removeItem("autobooting");
	  document.getElementById("autobooting_next").style.display = "none";
	  document.getElementById("fmr").style.display = "none";
	}
  }
}

function updateFormIndexiine() {
  var form = document.getElementById("f_indexiine");
  var value = form["default"].value;

  if (value != null && value != '') {
    var labels = form.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++)
      labels[i].style.color = "#cccccc";
    getLabelByControlId(value).style.color = "#bbffbb";

	if (value == "indexiine_hbl") {
	  localStorage.setItem("indexiine", "hbl");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_iosuhax") {
	  localStorage.setItem("indexiine", "iosuhax");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_mocha") {
	  localStorage.setItem("indexiine", "mocha");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_wiiu") {
	  localStorage.setItem("indexiine", "wiiu");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_user") {
	  localStorage.setItem("indexiine", "user");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_el") {
	  localStorage.setItem("indexiine", "el");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_tbs") {
	  localStorage.setItem("indexiine", "tbs");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_warning") {
	  localStorage.setItem("indexiine", "warning");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_wii") {
	  localStorage.setItem("indexiine", "wii");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_hbc") {
	  localStorage.setItem("indexiine", "hbc");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_ohb") {
	  localStorage.setItem("indexiine", "ohb");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_q") {
	  localStorage.setItem("indexiine", "q");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_twice") {
	  localStorage.setItem("indexiine", "twice");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_msf") {
	  localStorage.setItem("indexiine", "msf");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_fm") {
	  localStorage.setItem("indexiine", "fm");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_freeze") {
	  localStorage.setItem("indexiine", "freeze");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else if (value == "indexiine_no") {
	  localStorage.setItem("indexiine", "no");
	  document.getElementById("indexiine_next").style.display = "inline";
	}
	else {
	  localStorage.removeItem("indexiine");
	  document.getElementById("indexiine_next").style.display = "none";
	}
  }
}

function updateFormHaxchiIcon() {
  var form = document.getElementById("f_haxchi_icon");
  var value = form["default"].value;
  localStorage.removeItem("haxchi");

  if (value != null && value != '') {
    var labels = form.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++)
      labels[i].style.color = "#cccccc";
    getLabelByControlId(value).style.color = "#bbffbb";
	
	if (value == "haxchi_icon_yes") {
	  localStorage.setItem("haxchi icon", "yes");
	  document.getElementById("haxchi_next").style.display = "none";
      document.getElementById("d_haxchi").style.display = "inline";
	}
	else if (value == "haxchi_icon_no") {
	  resetForm("f_haxchi");
	  localStorage.setItem("haxchi icon", "no");
	  document.getElementById("haxchi_next").style.display = "inline";
      document.getElementById("d_haxchi").style.display = "none";
	}
	else {
	  resetForm("f_haxchi");
	  localStorage.removeItem("haxchi icon");
	  document.getElementById("haxchi_next").style.display = "none";
      document.getElementById("d_haxchi").style.display = "none";
	}
  }
}

function updateFormHaxchi() {
  var form = document.getElementById("f_haxchi");
  var value = form["default"].value;

  if (value != null && value != '') {
    var labels = form.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++)
      labels[i].style.color = "#cccccc";
    getLabelByControlId(value).style.color = "#bbffbb";

	if (value == "haxchi_hbl") {
	  localStorage.setItem("haxchi", "hbl");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else if (value == "haxchi_iosuhax") {
	  localStorage.setItem("haxchi", "iosuhax");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else if (value == "haxchi_mocha") {
	  localStorage.setItem("haxchi", "mocha");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else if (value == "haxchi_wiiu") {
	  localStorage.setItem("haxchi", "wiiu");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else if (value == "haxchi_user") {
	  localStorage.setItem("haxchi", "user");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else if (value == "haxchi_ohb") {
	  localStorage.setItem("haxchi", "ohb");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else if (value == "haxchi_3") {
	  localStorage.setItem("haxchi", "-3");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else if (value == "haxchi_5") {
	  localStorage.setItem("haxchi", "-5");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else if (value == "haxchi_freeze") {
	  localStorage.setItem("haxchi", "freeze");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else if (value == "haxchi_no") {
	  localStorage.setItem("haxchi", "no");
	  document.getElementById("haxchi_next").style.display = "inline";
	}
	else {
	  localStorage.removeItem("haxchi");
	  document.getElementById("haxchi_next").style.display = "none";
	}
  }
}

function updateFormPayloadLoader() {
  var form = document.getElementById("f_payloadloader");
  var value = form["default"].value;

  if (value != null && value != '') {
    var labels = form.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++)
      labels[i].style.color = "#cccccc";
    getLabelByControlId(value).style.color = "#bbffbb";

	if (value == "payloadloader_wiiu") {
	  localStorage.setItem("payloadloader", "wiiu");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_user") {
	  localStorage.setItem("payloadloader", "user");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_hbl") {
	  localStorage.setItem("payloadloader", "hbl");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_wii") {
	  localStorage.setItem("payloadloader", "wii");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_hbc") {
	  localStorage.setItem("payloadloader", "hbc");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_el") {
	  localStorage.setItem("payloadloader", "el");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_tbs") {
	  localStorage.setItem("payloadloader", "tbs");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_warning") {
	  localStorage.setItem("payloadloader", "warning");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_failed") {
	  localStorage.setItem("payloadloader", "failed");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_rpx_failed") {
	  localStorage.setItem("payloadloader", "rpx_failed");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_mocha_failed") {
	  localStorage.setItem("payloadloader", "mocha_failed");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_twice") {
	  localStorage.setItem("payloadloader", "twice");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else if (value == "payloadloader_no") {
	  localStorage.setItem("payloadloader", "no");
	  document.getElementById("payloadloader_next").style.display = "inline";
	}
	else {
	  localStorage.removeItem("payloadloader");
	  document.getElementById("payloadloader_next").style.display = "none";
	}
  }
}

function resetForm(id) {
  var form = document.getElementById(id);
  form.reset();
  var labels = form.getElementsByTagName("label");
  for (i = 0; i < labels.length; i++)
    labels[i].style.color = "#cccccc";
}

function getLabelByControlId(id) {
  labels = document.getElementsByTagName('label');
  for (i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor == id)
      return labels[i];
  }
}