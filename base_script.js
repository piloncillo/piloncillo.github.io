const url = new URL(document.URL);
const section = url.searchParams.get("s");
const page = url.searchParams.get("p");
	
window.addEventListener("resize", contentResize);

loadSidebar();
loadContent();

function loadSidebar() {
	const path = url.pathname;

	let base_url = "";
	let vwii_url = "";
	let archive_url = "";

	if (path.indexOf("/vwii/") != -1) {
		base_url = "../";
		vwii_url = "";
		archive_url = "../archive/";
	}
	else if (path.indexOf("/archive/") != -1) {
		base_url = "../";
		vwii_url = "../vwii/";
		archive_url = "";
	}
	else {
		base_url = "";
		vwii_url = "vwii/";
		archive_url = "archive/";
	}

	document.getElementById("sidebar_content").innerHTML = '<div id="logo"><img id="pilon_logo" src="' + base_url + 'images/logo.png" /></div><ul class="sidenav"><li><a href="' + base_url + '?s=main" class="selectable" id="main_link" title="Inicio">Inicio</a></li><li><span class="caret selectable" id="install_tiramisu" title="Instalar sólo Tiramisu">Instalar sólo Tiramisu</span><ul class="nested"><li><a class="selectable" href="' + base_url + '?s=tiramisu&p=sd" id="tiramisu_sd_link" title="Prepara la tarjeta SD">Prepara la tarjeta SD</a></li><li><a class="selectable" href="' + base_url + '?s=tiramisu&p=files" id="tiramisu_files_link" title="Coloca los archivos">Coloca los archivos</a></li><li><a class="selectable" href="' + base_url + '?s=tiramisu&p=nand_backup_be" id="tiramisu_nand_backup_be_link" title="Exploit del navegador">Exploit del navegador</a></li><li><a class="selectable" href="' + base_url + '?s=tiramisu&p=nand_backup" id="tiramisu_nand_backup_link" title="Copia de la NAND">Copia de la NAND</a></li><li><a class="selectable" href="' + base_url + '?s=tiramisu&p=payloadloader" id="tiramisu_payloadloader_link" title="PayloadLoader">PayloadLoader</a></li><li><a class="selectable" href="' + base_url + '?s=tiramisu&p=autobooting" id="tiramisu_autobooting_link" title="Autobooting PayloadLoader">Autobooting</a></li><li><a class="selectable" href="' + base_url + '?s=tiramisu&p=config" id="tiramisu_config_link" title="Configurar Tiramisu">Configurar Tiramisu</a></li><li><a class="selectable" href="' + base_url + '?s=tiramisu&p=apps" id="tiramisu_apps_link" title="Añadir aplicaciones">Añadir aplicaciones</a></li></ul></li><li><span class="caret selectable" id="put_aroma" title="Colocar archivos de Aroma en la tarjeta SD">Colocar Aroma (beta)</span><ul class="nested"><li><a class="selectable" href="' + base_url + '?s=aroma_files&p=put" id="aroma_files_put_link" title="Coloca los archivos">Coloca los archivos</a></li><li><a class="selectable" href="' + base_url + '?s=aroma_files&p=config" id="aroma_files_config_link" title="Configurar Aroma">Configurar Aroma</a></li><li><a class="selectable" href="' + base_url + '?s=aroma_files&p=apps" id="aroma_files_apps_link" title="Añadir aplicaciones">Añadir aplicaciones</a></li></ul></li><hr><li><a class="selectable" href="' + base_url + '?s=update_aroma" id="update_aroma_link" title="Actualizar Aroma">Actualizar Aroma</a></li><li><a class="selectable" href="' + base_url + '?s=update_tiramisu" id="update_tiramisu_link" title="Actualizar Tiramisu">Actualizar Tiramisu</a></li><hr><li><span class="caret selectable" id="vwii" title="Virtual Wii">Virtual Wii</span><ul class="nested"><li><a class="selectable" href="' + vwii_url + '?s=mod" id="mod_link" title="Modificar el modo virtual Wii">Modificar el modo vWii</a></li><li><a class="selectable" href="' + vwii_url + '?s=res" id="res_link" title="Restaurar el modo virtual Wii">Restaurar el modo vWii</a></li><li><a class="selectable" href="' + vwii_url + '?s=homebrew_inherited" id="homebrew_inherited_link" title="Homebrew en modo vWii">Homebrew heredado</a></li></ul></li><li><span class="caret" id="test_mod"><a class="selectable" href="' + base_url + '?s=test" id="test_link" title="Identificar modificación">Identificar modificación</a></span><ul class="nested"><li><a class="selectable" href="' + base_url + '?s=test&p=payloadloader" id="test_payloadloader_link" title="Identificar PayloadLoader">PayloadLoader</a></li><li><a class="selectable" href="' + base_url + '?s=test&p=autobooting" id="test_autobooting_link" title="Identificar Autobooting">Autobooting</a></li><li><a class="selectable" href="' + base_url + '?s=test&p=haxchi" id="test_haxchi_link" title="Identificar Haxchi">Haxchi</a></li><li><a class="selectable" href="' + base_url + '?s=test&p=indexiine" id="test_indexiine_link" title="Identificar Indexiine">Indexiine</a></li></ul></li><li><span class="caret selectable" id="uninstall_mod" title="Desinstalar modificación">Desinstalar modificación</span><ul class="nested"><li><a class="selectable" href="' + base_url + '?s=uninstall_webhack" id="uninstall_webhack_link" title="Desinstalar Webhack">Webhack</a></li><li><a class="selectable" href="' + base_url + '?s=uninstall_indexiine" id="uninstall_indexiine_link" title="Desinstalar Indexiine">Indexiine</a></li><li><a class="selectable" href="' + base_url + '?s=uninstall_haxchi" id="uninstall_haxchi_link" title="Desinstalar Haxchi">Haxchi</a></li><li><a class="selectable" href="' + base_url + '?s=uninstall_cbhc" id="uninstall_cbhc_link" title="Desinstalar Coldboot Haxchi">Coldboot Haxchi</a></li><li><a class="selectable" href="' + base_url + '?s=uninstall_payloadloader" id="uninstall_payloadloader_link" title="Desinstalar Tiramisu o Aroma">Tiramisu o Aroma</a></li></ul></li><hr><li><a class="selectable" href="' + base_url + '?s=sd_format" id="sd_format_link" title="Formatear una tarjeta SD en FAT32">Formatear tarjeta SD en FAT32</a></li><li><a class="selectable" href="' + base_url + '?s=nand_backup" id="nand_backup_link" title="Hacer una copia de seguridad de la memoria interna de la Wii U">Hacer respaldo de la NAND</a></li><li><span class="caret selectable" id="extras" title="Extras">Extras</span><ul class="nested"><li><a class="selectable" href="' + base_url + '?s=detect_sd" id="detect_sd_link" title="Revisar que la Wii U detecta la tarjeta SD">Revisar que detecta la SD</a></li><li><a class="selectable" href="' + base_url + '?s=write_to_sd" id="write_to_sd_link" title="Revisar que la Wii U puede escribir datos en la tarjeta SD">Revisar escritura en la SD</a></li><hr><li><a class="selectable" href="' + base_url + '?s=enable_autobooting" id="enable_autobooting_link" title="Activar el arranque automático del PayloadLoader">Activar autobooting</a></li><li><a class="selectable" href="' + base_url + '?s=disable_autobooting" id="disable_autobooting_link" title="Desactivar el arranque automático del PayloadLoader">Desactivar autobooting</a></li><hr><li><a class="selectable" href="' + base_url + '?s=standby_functions" id="standby_functions_link" title="Desactivar modo de reposo">Desactivar modo de reposo</a></li><li><a class="selectable" href="' + base_url + '?s=block_updates" id="block_updates_link" title="Bloquear actualizaciones">Bloquear actualizaciones</a></li><li><a class="selectable" href="' + base_url + '?s=unblock_updates" id="unblock_updates_link" title="Desbloquear actualizaciones">Desbloquear actualizaciones</a></li><hr><li><a class="selectable" href="' + base_url + '?s=aroma_speedrun" id="aroma_speedrun_link" title="Resumen de la instalación de Aroma">Resumen de Aroma</a></li><li><a class="selectable" href="' + base_url + '?s=add_apps_aroma" id="add_apps_aroma_link" title="Agregar aplicaciones a Aroma">Agregar aplicaciones a Aroma</a></li><hr><li><a class="selectable" href="' + base_url + '?s=tiramisu_speedrun" id="tiramisu_speedrun_link" title="Resumen de la instalación de Tiramisu">Resumen de Tiramisu</a></li><li><a class="selectable" href="' + base_url + '?s=add_apps_hbl" id="add_apps_hbl_link" title="Agregar aplicaciones al Homebrew Launcher (HBL)">Agregar aplicaciones al HBL</a></li></ul></li><hr><li><span class="caret" id="glossary_caret"><a class="selectable" href="?s=glossary" id="glossary_link" title="Glosario">Glosario</a></span><ul class="nested"><li><a class="selectable" href="' + base_url + '?s=glossary#hack_t" title="Hack">Hack</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#exploit_t" title="Exploit">Exploit</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#entry_point_t" title="Punto de entrada">Punto de entrada</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#fw_t" title="Firmware">Firmware</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#cfw_t" title="Custom Firmware">Custom Firmware</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#environment_t" title="Environment">Environment</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#homebrew_t" title="Homebrew">Homebrew</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#payload_t" title="Payload">Payload</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#ticket_t" title="Ticket">Ticket</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#brick_t" title="Brick">Brick</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#dlc_t" title="DLC">DLC</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#title_id_t" title="Title ID">Title ID</a></li><li><a class="selectable" href="' + base_url + '?s=glossary#hacks_t" title="Principales modificaciones de Wii U">Principales modificaciones de Wii U</a></li></ul></li><li><a class="selectable" href="' + base_url + '?s=questions" id="questions_link" title="Preguntas frecuentes">Preguntas frecuentes</a></li><hr><li><a class="selectable" href="' + base_url + '?s=homebrew" id="homebrew_link" title="Homebrew destacado">Homebrew destacado</a></li><li><a class="selectable" href="' + base_url + '?s=homebrew_aroma" id="homebrew_aroma_link" title="Homebrew para Aroma">Homebrew para Aroma</a></li><hr><li><span class="caret selectable" id="archive_caret" title="Archivo">Archivo</span><ul class="nested"><li><span class="caret selectable" id="previous_methods_caret" title="Métodos anteriores">Métodos anteriores</span><ul class="nested"><li><a class="selectable" href="' + archive_url + '?s=webhack&p=sd" id="install_webhack_link" title="Instalar Webhack">Webhack</a></li><li><a class="selectable" href="' + archive_url + '?s=indexiine&p=sd" id="install_indexiine_link" title="Instalar Indexiine">Indexiine</a></li><li><a class="selectable" href="' + archive_url + '?s=haxchi&p=ds_game" id="install_haxchi_link" title="Instalar Haxchi">Haxchi</a></li><li><a class="selectable" href="' + archive_url + '?s=cbhc&p=ds_game" id="install_cbhc_link" title="Instalar Coldboot Haxchi">Coldboot Haxchi</a></li></ul></li><li><a class="selectable" href="' + archive_url + '?s=custom_haxchi" id="custom_haxchi_link" title="Personalizar Haxchi">Personalizar Haxchi</a></li><li><a class="selectable" href="' + archive_url + '?s=config_payload" id="config_payload_link" title="Configurable Payload">Configurable Payload</a></li></ul></li><hr><li><span class="caret selectable" id="links" title="Enlaces">Enlaces</span><ul class="nested"><li><a class="selectable" href="https://github.com/piloncillo/piloncillo.github.io" id="github_link" title="GitHub">GitHub</a></li><li><a class="selectable" href="https://www.facebook.com/groups/431055392911894" id="facebok_link" title="Comunidad Wii U Piloncillo">Facebook</a></li><li><a class="selectable" href="https://www.youtube.com/@Fran1AC" id="youtube_link" title="Demostraciones">YouTube</a></li><li><a class="selectable" href="https://twitter.com/Fran1AC" id="twitter_link" title="X">Twitter</a></li><!--li><a class="selectable" href="#" id="discord_link" title="Discord">Discord</a></li--><li><a class="selectable" href="' + base_url + '?s=about" id="about_link" title="Acerca de">Acerca de</a></li></ul></li></ul>';
}

async function loadContentFile(url) {
	let pBody = new Promise(function(resolve) {//, reject) {
		let req = new XMLHttpRequest();
		req.open('GET',  url);
		req.onload = function() {
			if (req.status == 200) {
				resolve(req.responseText);
			} else {
				resolve("");
				//reject("\"" + url + "\" Error: " + req.status);
			}
		};
		req.send();
	});
	
	document.getElementById("content").innerHTML = '<div class="cont">' + await pBody + '</div>';
	setAspect();
	
}

async function loadContentFiles(urlHeader, urlBody, urlFooter) {	
	let pHeader = new Promise(function(resolve) {//, reject) {
		let req = new XMLHttpRequest();
		req.open('GET',  urlHeader);
		req.onload = function() {
			if (req.status == 200) {
				resolve(req.responseText);
			} else {
				resolve("");
				//reject("\"" + urlHeader + "\" Error: " + req.status);
			}
		};
		req.send();
	});
	
	let pBody = new Promise(function(resolve) {//, reject) {
		let req = new XMLHttpRequest();
		req.open('GET',  urlBody);
		req.onload = function() {
			if (req.status == 200) {
				resolve(req.responseText);
			} else {
				resolve("");
				//reject("\"" + urlBody + "\" Error: " + req.status);
			}
		};
		req.send();
	});
	
	let pFooter = new Promise(function(resolve) {//, reject) {
		let req = new XMLHttpRequest();
		req.open('GET',  urlFooter);
		req.onload = function() {
			if (req.status == 200) {
				resolve(req.responseText);
			} else {
				resolve("");
				//reject("\"" + urlFooter + "\" Error: " + req.status);
			}
		};
		req.send();
	});
	
	document.getElementById("content").innerHTML = '<div class="cont">' + await pHeader + await pBody + await pFooter + '</div>';
	setAspect();
}

function loadContent() {
	if (section == "about") {
		loadContentFile("content/about.html");
	}
	else if (section == "aroma") {
		if (page == "sd")
			loadContentFiles("content/aroma/sd_h.html", "content/sd_format.html", "content/aroma/sd_f.html");
		else if (page == "files")
			loadContentFiles("content/aroma/files_h.html", "content/aroma/files.html", "content/aroma/files_f.html");
		else if (page == "nand_backup_be")
			loadContentFiles("content/aroma/nbbe_h.html", "content/nbbe.html", "content/aroma/nbbe_f.html");
		else if (page == "nand_backup")
			loadContentFiles("content/aroma/nb_h.html", "content/nand_backup_dump.html", "content/aroma/nb_f.html");
		else if (page == "payloadloader")
			loadContentFiles("content/aroma/plbe_h.html", "content/plbe.html", "content/aroma/plbe_f.html");
		else if (page == "autobooting")
			loadContentFiles("content/aroma/apl_h.html", "content/apl.html", "content/aroma/apl_f.html");
		else if (page == "config")
			loadContentFiles("content/aroma/config_h.html", "content/aroma/config.html", "content/aroma/config_f.html");
		else if (page == "apps")
			loadContentFiles("content/aroma/apps_h.html", "content/aroma/apps.html", "content/aroma/apps_f.html");
		else if (page == "apps_wuhb")
			loadContentFiles("content/aroma/apps_h.html", "content/aroma/apps_wuhb.html", "content/aroma/apps_f.html");
		else if (page == "modules_setup")
			loadContentFiles("content/aroma/apps_h.html", "content/aroma/modules_setup.html", "content/aroma/apps_f.html");
		else if (page == "modules")
			loadContentFiles("content/aroma/apps_h.html", "content/aroma/modules.html", "content/aroma/apps_f.html");
		else if (page == "plugins")
			loadContentFiles("content/aroma/apps_h.html", "content/aroma/plugins.html", "content/aroma/apps_f.html");
		else
			loadContentFile("content/main.html");
	}
	else if (section == "tiramisu") {
		if (page == "sd")
			loadContentFiles("content/tiramisu/sd_h.html", "content/sd_format.html", "content/tiramisu/sd_f.html");
		else if (page == "files")
			loadContentFiles("content/tiramisu/files_h.html", "content/tiramisu/files.html", "content/tiramisu/files_f.html");
		else if (page == "nand_backup_be")
			loadContentFiles("content/tiramisu/nbbe_h.html", "content/nbbe.html", "content/tiramisu/nbbe_f.html");
		else if (page == "nand_backup")
			loadContentFiles("content/tiramisu/nb_h.html", "content/nand_backup_dump.html", "content/tiramisu/nb_f.html");
		else if (page == "payloadloader")
			loadContentFiles("content/tiramisu/plbe_h.html", "content/plbe.html", "content/tiramisu/plbe_f.html");
		else if (page == "autobooting")
			loadContentFiles("content/tiramisu/apl_h.html", "content/apl.html", "content/tiramisu/apl_f.html");
		else if (page == "config")
			loadContentFiles("content/tiramisu/config_h.html", "content/tiramisu/config.html", "content/tiramisu/config_f.html");
		else if (page == "apps")
			loadContentFiles("content/tiramisu/apps_h.html", "content/tiramisu/apps.html", "content/tiramisu/apps_f.html");
		else if (page == "apps_hbl")
			loadContentFiles("content/tiramisu/apps_h.html", "content/tiramisu/apps_hbl.html", "content/tiramisu/apps_f.html");
		else if (page == "modules_setup")
			loadContentFiles("content/tiramisu/apps_h.html", "content/tiramisu/modules_setup.html", "content/tiramisu/apps_f.html");
		else
			loadContentFile("content/main.html");
	}
	else if (section == "test") {
		if (page == "payloadloader")
			loadContentFile("content/test_payloadloader.html");
		else if (page == "autobooting")
			loadContentFile("content/test_autobooting.html");
		else if (page == "haxchi")
			loadContentFile("content/test_haxchi.html");
		else if (page == "indexiine")
			loadContentFile("content/test_indexiine.html");
		else
			loadContentFile("content/test.html");
	}
	else if (section == "uninstall_webhack") {
		loadContentFile("content/uninstall_webhack.html");
	}
	else if (section == "uninstall_indexiine") {
		if (page == "ext")
			loadContentFile("content/uninstall_indexiine_ext.html");
		else if (page == "hbl")
			loadContentFile("content/uninstall_indexiine_hbl.html");
		else
			loadContentFile("content/uninstall_indexiine.html");
	}
	else if (section == "uninstall_haxchi") {
		loadContentFile("content/uninstall_haxchi.html");
	}
	else if (section == "uninstall_cbhc") {
		if (page == "nand_backup")
			loadContentFile("content/uninstall_cbhc_nand_backup.html");
		else if (page == "process")
			loadContentFile("content/uninstall_cbhc_process.html");
		else
			loadContentFile("content/uninstall_cbhc.html");
	}
	else if (section == "uninstall_cbhc_nand_backup") {
		loadContentFile("content/uninstall_cbhc_nand_backup.html");
	}
	else if (section == "uninstall_cbhc_process") {
		loadContentFile("content/uninstall_cbhc_process.html");
	}
	else if (section == "uninstall_payloadloader") {
		loadContentFile("content/uninstall_payloadloader.html");
	}
	else if (section == "be_pages") {
		loadContentFile("content/be_pages.html");
	}
	else if (section == "sd_format") {
		loadContentFiles("content/sd_format_h.html", "content/sd_format.html", "content/sd_format_f.html");
	}
	else if (section == "detect_sd") {
		loadContentFile("content/detect_sd.html");
	}
	else if (section == "write_to_sd") {
		loadContentFile("content/write_to_sd.html");
	}
	else if (section == "nand_backup") {
		if (page == "apl")
			loadContentFile("content/nand_backup_apl.html");
		else if (page == "mpl")
			loadContentFile("content/nand_backup_mpl.html");
		else if (page == "old")
			loadContentFile("content/nand_backup_old.html");
		else if (page == "nmwu_sd")
			loadContentFiles("content/nand_backup_nmwu_sd_h.html", "content/sd_format.html", "content/nand_backup_nmwu_sd_f.html");
		else if (page == "nmwu_files")
			loadContentFile("content/nand_backup_nmwu_files.html");
		else if (page == "nmwu_be")
			loadContentFiles("content/nand_backup_nmwu_be_h.html", "content/nbbe.html", "content/nand_backup_nmwu_be_f.html");
		else if (page == "dump")
			loadContentFiles("content/nb_dump_h.html", "content/nand_backup_dump.html", "content/nb_dump_f.html");
		else
			loadContentFile("content/nand_backup.html");
	}
	else if (section == "enable_autobooting") {
		loadContentFiles("content/enable_apl_h.html", "content/apl.html", "content/enable_apl_f.html");
	}
	else if (section == "disable_autobooting") {
		loadContentFile("content/disable_autobooting.html");
	}
	else if (section == "standby_functions") {
		loadContentFile("content/standby_functions.html");
	}
	else if (section == "block_updates") {
		if (page == "apl")
			loadContentFile("content/block_updates_apl.html");
		else if (page == "mpl")
			loadContentFile("content/block_updates_mpl.html");
		else if (page == "old")
			loadContentFile("content/block_updates_old.html");
		else
			loadContentFile("content/block_updates.html");
	}
	else if (section == "unblock_updates") {
		if (page == "apl")
			loadContentFile("content/unblock_updates_apl.html");
		else if (page == "mpl")
			loadContentFile("content/unblock_updates_mpl.html");
		else if (page == "old")
			loadContentFile("content/unblock_updates_old.html");
		else
			loadContentFile("content/unblock_updates.html");
	}
	else if (section == "aroma_speedrun") {
		loadContentFile("content/aroma/speedrun.html");
	}
	else if (section == "tiramisu_speedrun") {
		loadContentFile("content/tiramisu/speedrun.html");
	}
	else if (section == "aroma_files") {
		if (page == "put")
			loadContentFiles("content/aroma/files_h.html", "content/aroma/files.html", "content/aroma/put_files_f.html");
		else if (page == "config")
			loadContentFiles("content/aroma/config_h.html", "content/aroma/config.html", "content/aroma/put_config_f.html");
		else if (page == "apps")
			loadContentFiles("content/aroma/apps_h.html", "content/aroma/apps.html", "content/aroma/put_apps_f.html");
		else
			loadContentFile("content/main.html");
	}
	else if (section == "tiramisu_files") {
		if (page == "put")
			loadContentFiles("content/tiramisu/files_h.html", "content/tiramisu/files.html", "content/tiramisu/put_files_f.html");
		else if (page == "config")
			loadContentFiles("content/tiramisu/config_h.html", "content/tiramisu/config.html", "content/tiramisu/put_config_f.html");
		else if (page == "apps")
			loadContentFiles("content/tiramisu/apps_h.html", "content/tiramisu/apps.html", "content/tiramisu/put_apps_f.html");
		else
			loadContentFile("content/main.html");
	}
	else if (section == "update_aroma") {
		loadContentFiles("content/aroma/update_h.html", "content/aroma/files.html", "content/aroma/update_f.html");
	}
	else if (section == "update_tiramisu") {
		loadContentFiles("content/tiramisu/update_h.html", "content/tiramisu/files.html", "content/tiramisu/update_f.html");
	}
	else if (section == "add_apps_aroma") {
		loadContentFiles("content/aroma/apps_h.html", "content/aroma/apps.html", "content/aroma/add_apps_f.html");
	}
	else if (section == "add_apps_hbl") {
		loadContentFiles("content/hbl_apps_h.html", "content/tiramisu/apps_hbl.html", "content/hbl_apps_f.html");
	}
	else if (section == "delete") {
		loadContentFile("content/delete.html");
	}
	else if (section == "glossary") {
		loadContentFile("content/glossary.html");
	}
	else if (section == "questions") {
		loadContentFile("content/questions.html");
	}
	else if (section == "homebrew") {
		loadContentFile("content/homebrew.html");
	}
	else if (section == "homebrew_aroma") {
		loadContentFile("content/homebrew_aroma.html");
	}
	else if (section == "mod") {
		if (page == "hbl")
			loadContentFile("content/mod_hbl.html");
		else if (page == "aroma")
			loadContentFile("content/mod_aroma.html");
		else if (page == "nmwu_sd")
			loadContentFiles("content/mod_nmwu_sd_h.html", "content/sd_format.html", "content/mod_nmwu_sd_f.html");
		else if (page == "nmwu_files")
			loadContentFile("content/mod_nmwu_files.html");
		else if (page == "nmwu_be")
			loadContentFile("content/mod_nmwu_be.html");
		else if (page == "cios")
			loadContentFile("content/mod_cios.html");
		else if (page == "apps")
			loadContentFile("content/mod_apps.html");
		else
			loadContentFile("content/main.html");
	}
	else if (section == "res") {
		if (page == "nand_hbl")
			loadContentFile("content/res_nand_hbl.html");
		else if (page == "vwnr")
			loadContentFile("content/res_vwnr.html");
		else if (page == "hbl")
			loadContentFile("content/res_hbl.html");
		else if (page == "vwd")
			loadContentFile("content/res_vwd.html");
		else if (page == "unblock_updates")
			loadContentFile("content/res_unblock_updates.html");
		else if (page == "update")
			loadContentFile("content/res_update.html");
		else if (page == "block_updates")
			loadContentFile("content/res_block_updates.html");
		else
			loadContentFile("content/res.html");
	}
	else if (section == "homebrew_inherited") {
		loadContentFile("content/homebrew.html");
	}
	else {
		loadContentFile("content/main.html");
	}
}

/* Aspect functions */

function setAspect() {
	setOnloadAutoSize();
	caretSidebar();
	selectedContentSidebar();
	setExternalLinksStyle();
	accordions();
	
	if (section != null && section == "add_apps_hbl") {
		const hidde_elements = document.getElementsByClassName("hidde1");
			for (i = 0; i < hidde_elements.length; i++)
				hidde_elements[i].style.display = "none";
	}
	
	if (section == "test" && page == null)
		testResults();
}

function setOnloadAutoSize() {
	localStorage.setItem("overlay", "false");
	let imgs = document.getElementsByClassName("auto_size");
	let imgs_li = document.getElementsByClassName("auto_size_li");
	let imgs_li_li = document.getElementsByClassName("auto_size_li_li");
	let i;
	
	for (i = 0; i < imgs.length; i++) {
		imgs[i].setAttribute("onload", "autoSize0(this);");
	}
	for (i = 0; i < imgs_li.length; i++) {
		imgs_li[i].setAttribute("onload", "autoSize1(this);");
	}
	for (i = 0; i < imgs_li_li.length; i++) {
		imgs_li_li[i].setAttribute("onload", "autoSize2(this);");
	}
}

function autoSize0(img) {
	let sidebarWidth = 0;
	
	if (localStorage.getItem("sidebar") == "open"
		&& localStorage.getItem("overlay") == "false"
		&& window.innerWidth >= 640)
		sidebarWidth = 250;
	
	const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
	const availableWidth = window.innerWidth - sidebarWidth - scrollBarWidth - 80;
	
	if (availableWidth < 720) {
		img.style.width = img.naturalWidth + "px";
		if (img.naturalWidth > availableWidth)
			img.style.width = availableWidth + "px";

	} else {
		img.style.width = img.naturalWidth + "px";
		if (img.naturalWidth > 720)
			img.style.width = "720px";
	}
}

function autoSize1(img) {
	let sidebarWidth = 0;
	
	if (localStorage.getItem("sidebar") == "open"
		&& localStorage.getItem("overlay") == "false"
		&& window.innerWidth >= 640)
		sidebarWidth = 250;
	
	const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
	const availableWidth = window.innerWidth - sidebarWidth - scrollBarWidth - 80;
	
	if (availableWidth < 720) {
		img.style.width = img.naturalWidth + "px";
		if (img.naturalWidth > availableWidth - 40)
			img.style.width = (availableWidth - 40) + "px";

	} else {
		img.style.width = img.naturalWidth + "px";
		if (img.naturalWidth > 680)
			img.style.width = "680px";
	}
}

function autoSize2(img) {
	let sidebarWidth = 0;
	
	if (localStorage.getItem("sidebar") == "open"
		&& localStorage.getItem("overlay") == "false"
		&& window.innerWidth >= 640)
		sidebarWidth = 250;
	
	const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
	const availableWidth = window.innerWidth - sidebarWidth - scrollBarWidth - 80;
	
	if (availableWidth < 720) {
		img.style.width = img.naturalWidth + "px";
		if (img.naturalWidth > availableWidth - 80)
			img.style.width = (availableWidth - 80) + "px";

	} else {
		img.style.width = img.naturalWidth + "px";
		if (img.naturalWidth > 640)
			img.style.width = "640px";
	}
}

function contentResize() {
	const overlay = localStorage.getItem("overlay");
	
	let imgs = document.getElementsByClassName("auto_size");
	let imgs_li = document.getElementsByClassName("auto_size_li");
	let imgs_li_li = document.getElementsByClassName("auto_size_li_li");
	let youtube_video = document.getElementsByClassName("youtube_video");
	let i;
	let sidebarWidth = 0;
	
	if (localStorage.getItem("sidebar") == "open" && overlay == "false") {
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
		for (i = 0; i < youtube_video.length; i++) {
			youtube_video[i].style.width = availableWidth + "px";
			youtube_video[i].style.height = ((availableWidth / 16.0) * 9.0).toFixed(0) + "px";
		}
	}
	else {
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
		for (i = 0; i < youtube_video.length; i++) {
			youtube_video[i].style.width = "720px";
			youtube_video[i].style.height = "405px";
		}
	}
}

function setExternalLinksStyle() {
	const links = document.querySelectorAll("a[href]");
	let linksArray = [...links];
	linksArray = linksArray.filter(l => l.hostname != location.hostname);
	for (i = 0; i < linksArray.length; i++) {
		linksArray[i].classList.add("external");
		linksArray[i].setAttribute("target", "_blank");
	}
}

function selectedContentSidebar() {	
	if (section == "aroma")
		document.getElementById("install_aroma").click();
	
	if (section == "tiramisu")
		document.getElementById("install_tiramisu").click();
	
	if (section == "aroma_files")
		document.getElementById("put_aroma").click();
	
	if (section == "tiramisu_files")
		document.getElementById("put_tiramisu").click();
		
	if (section == "test")
		document.getElementById("test_mod").click();
		
	if (section == "glossary")
		document.getElementById("glossary_caret").click();
		
	if (section == "uninstall_payloadloader" ||
		section == "uninstall_webhack" ||
		section == "uninstall_indexiine" ||
		section == "uninstall_haxchi" ||
		section == "uninstall_cbhc")
		document.getElementById("uninstall_mod").click();
	
	if (section == "detect_sd" ||
		section == "write_to_sd" ||
		
		section == "enable_autobooting" ||
		section == "disable_autobooting" ||
		
		section == "standby_functions" ||
		section == "block_updates" ||
		section == "unblock_updates" ||
		
		section == "aroma_speedrun" ||
		section == "add_apps_aroma"||
		
		section == "tiramisu_speedrun"||
		section == "add_apps_hbl")
		document.getElementById("extras").click();
		
	if (section == "mod" ||
		section == "res" ||
		section == "homebrew_inherited")
		document.getElementById("vwii").click();

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
		section == "facebook" ||
		section == "youtube" ||
		section == "twitter" ||
		section == "discord" ||
		section == "about")
		document.getElementById("links").click();
		
	let p = page;
		
	if (page == "apps_hbl" ||
		page == "apps_wuhb" ||
		page == "modules_setup" ||
		page == "modules" ||
		page == "plugins")
		p = "apps";

	let sel = document.getElementById(section + "_" + p + "_link");
	
	if (sel == null)
		sel = document.getElementById(section + "_link");
	
	if (sel != null)
		sel.classList.add("selected");
	else
		document.getElementById("main_link").classList.add("selected");

	let sidebar = localStorage.getItem("sidebar");
	if (sidebar != null) {
		if (sidebar == "open")
			openSidebar();
		else if (sidebar == "close")
			closeSidebar();
		else
			defaultSidebar();
	} else
		defaultSidebar();
}

function openSidebar() {
	localStorage.setItem("sidebar", "open");
	if (window.innerWidth < 640) {
		document.getElementById("sidebar_close").style.visibility = "visible";
		document.getElementById("sidebar").style.width = "100%";
		document.getElementById("sidebar_toggle").style.marginLeft = "0px";
		document.getElementById("content").style.marginLeft = "0px";
		document.body.style.overflow = "hidden";
		localStorage.setItem("overlay", "true");
		contentResize();
	}
	else {
		document.getElementById("sidebar_close").style.visibility = "hidden";
		document.getElementById("sidebar").style.width = "250px";
		document.getElementById("sidebar_toggle").style.marginLeft = "250px";
		document.getElementById("content").style.marginLeft = "250px";
		localStorage.setItem("overlay", "false");
		contentResize();
	}
}

function closeSidebar() {
	localStorage.setItem("sidebar", "close");
	document.getElementById("sidebar").style.width = "0px";
	document.getElementById("sidebar_toggle").style.marginLeft = "0px";
	document.getElementById("content").style.marginLeft = "0px";
	if (window.innerWidth < 640) {
		document.body.style.overflow = "auto";
		localStorage.setItem("overlay", "true");
		contentResize();
	}
	else {
		localStorage.setItem("overlay", "false");
		contentResize();
	}
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

function caretSidebar() {
	let toggler = document.getElementsByClassName("caret");
	for (let i = 0; i < toggler.length; i++) {
		toggler[i].addEventListener("click", function() {
			this.parentElement.querySelector(".nested").classList.toggle("active_nav");
			this.classList.toggle("caret-down");
		});
	}
}

function accordions() {
	let accordion = document.getElementsByClassName("accordion");
	for (let i = 0; i < accordion.length; i++) {
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
}

/* Test functions */

function testResults() {
  const autobooting = localStorage.getItem("autobooting");
  const indexiine = localStorage.getItem("indexiine");
  const haxchiIcon = localStorage.getItem("haxchi icon");
  const haxchi = localStorage.getItem("haxchi");
  const payloadloader = localStorage.getItem("payloadloader");
  
  if (autobooting == "cbhc") {
    document.getElementById("autobooting_result").innerHTML = 'Coldboot Haxchi detectado. Tienes una modificación que tiene el riesgo de brickear la consola si no eres cuidadoso. <a href="?s=uninstall_cbhc">Estos son los pasos para desinstalar Coldboot Haxchi (CBHC) correctamente.</a>';
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
	  if (payloadloader == "failed") {
		document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado.';//El PayloadLoader no está detectando la tarjeta SD o no encontró el archivo <code>sd:/wiiu/payload.elf</code>. Limpia los contactos de la tarjeta SD, si estas usando una microSD prueba cambiar el adaptador, revisa que tengas "los archivos del hack" en la tarjeta SD. Si no tienes los archivos de Tiramisu en la tarjeta SD puedes colocarlos siguiendo <a href="?s=update_tiramisu">las instrucciones para actualizar Tiramisu</a>.';
	  }
	  else {
		  document.getElementById("autobooting_result").innerHTML = 'Autobooting PayloadLoader detectado. Hay una contradicción en tus respuestas, señalaste que NO detectaste PayloadLoader, pero Sí detectaste Autobooting PayloadLoader, esto no es posible ya que para tener Autobooting PayloadLoader es necesario primero tener PayloadLoader.';
	  }
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
    document.getElementById("autobooting_result").innerHTML = 'No detectaste ninguna modificación que inicie de forma automática al encender la consola.';
  }
  
  if (indexiine == "hbl") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. Está configurado para cargar el Homebrew Launcher. <a href="?s=uninstall_indexiine">Estos son los pasos para desinstalar Indexiine correctamente.</a>';
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
    document.getElementById("indexiine_result").innerHTML = 'Detectado. El mensaje <code>Don\'t run Environment Loader twice</code> indica que antes de ejecutar Indexiine ya habías cargado el Environment Loader. Si tienes Autobooting PayloadLoader el Environment Loader se carga cuando enciendes la consola. El Environment Loader también se puede cargar usando el exploit del navegador de Internet o se puede cargar al abrir el icono de Información sobre salud y seguridad. <a href="?s=uninstall_indexiine">Estos son los pasos para desinstalar Indexiine correctamente.</a>';
  }
  else if (indexiine == "msf") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. <a href="?s=uninstall_indexiine">Estos son los pasos para desinstalar Indexiine correctamente.</a>';//El mensaje <code>FSGetMountSource falied</code> quiere decir que la consola no está detectando la tarjeta SD, limpia los contactos, si estas usando una microSD prueba cambiar el adaptador.';
  }
  else if (indexiine == "fm") {
    document.getElementById("indexiine_result").innerHTML = 'Detectado. El mensaje <code>FSOpenFile falied</code> quiere decir que la consola sí está detectando la tarjeta SD, pero no encontró el archivo <code>payload.elf</code> dentro de la carpeta <code>sd:/wiiu</code>. <a href="?s=uninstall_indexiine">Estos son los pasos para desinstalar Indexiine correctamente.</a>';
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
    document.getElementById("haxchi_result").innerHTML = 'Icono de Haxchi detectado, pero no has indicado que pasa al abrir el icono. <a href="?s=uninstall_haxchi">Estos son los pasos para desinstalar Haxchi correctamente.</a>';
  }
  else if (haxchiIcon == "no") {
    document.getElementById("haxchi_result").innerHTML = 'Icono de Haxchi no detectado.';
  }
	
  if (haxchi == "hbl") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar el Homebrew Launcher. <a href="?s=uninstall_haxchi">Estos son los pasos para desinstalar Haxchi correctamente.</a>';
  }
  else if (haxchi == "iosuhax") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar el "obsoleto" IOSUHAX. <a href="?s=uninstall_haxchi">Estos son los pasos para desinstalar Haxchi correctamente.</a>';
  }
  else if (haxchi == "mocha") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar Mocha CFW. <a href="?s=uninstall_haxchi">Estos son los pasos para desinstalar Haxchi correctamente.</a>';
  }
  else if (haxchi == "wiiu" || haxchi == "user") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar su CFW interno que a su vez redirige al menú de Wii U. <a href="?s=uninstall_haxchi">Estos son los pasos para desinstalar Haxchi correctamente.</a>';
  }
  else if (haxchi == "ohb") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Está configurado para cargar una aplicación homebrew. <a href="?s=uninstall_haxchi">Estos son los pasos para desinstalar Haxchi correctamente.</a>';
  }
  else if (haxchi == "-3") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. El mensaje <code>-3</code> quiere decir que la consola no está detectando la tarjeta SD. No es correcto que salga el código <code>-3</code> ya que Haxchi correctamente instalado no depende de la tarjeta SD para cargar su CFW interno. <a href="?s=uninstall_haxchi">Estos son los pasos para desinstalar Haxchi correctamente.</a>';
  }
  else if (haxchi == "-5") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. El mensaje <code>-5</code> quiere decir que la consola sí está detectando la tarjeta SD, pero no encontró la aplicación configurada para cargar por defecto en la tarjeta SD. <a href="?s=uninstall_haxchi">Estos son los pasos para desinstalar Haxchi correctamente.</a>';
  }
  else if (haxchi == "freeze") {
    document.getElementById("haxchi_result").innerHTML = 'Detectado. Es raro que Haxchi se bloquee, lo más probable es que antes de ejecutar Haxchi hayas cargado Tiramisu (o Aroma). No puedes cargar el CFW interno de Haxchi si tienes cargado el entorno de Tiramisu (o Aroma). Prueba <a href="?s=uninstall_haxchi">desinstalar Haxchi correctamente</a> para volver a ocupar el juego de Nintendo DS de forma normal o <a href="archive/?s=custom_haxchi">personaliza Haxchi</a> para que no cargue su CFW interno.';
  }
  else if (haxchi == "no") {
    document.getElementById("haxchi_result").innerHTML = 'Icono de Haxchi detectado, pero requiere de algo más para abrirlo. La consola no tiene instalado correctamente Haxchi. <a href="?s=uninstall_haxchi">Estos son los pasos para desinstalar Haxchi correctamente.</a>';
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
    document.getElementById("payloadloader_result").innerHTML = 'Detectado.';//No está detectando la tarjeta SD o no encontró el archivo <code>sd:/wiiu/payload.elf</code>. Limpia los contactos de la tarjeta SD, si estas usando una microSD prueba cambiar el adaptador, revisa que tengas "los archivos del hack" en la tarjeta SD. Si no tienes los archivos de Tiramisu en la tarjeta SD puedes colocarlos siguiendo <a href="?s=update_tiramisu">las instrucciones de como actualizar Tiramisu</a>.';
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
  const sd = localStorage.getItem("sd");
  const folder = localStorage.getItem("folder");
  const autobooting = localStorage.getItem("autobooting");
  const indexiine = localStorage.getItem("indexiine");
  const haxchiIcon = localStorage.getItem("haxchi icon");
  const haxchi = localStorage.getItem("haxchi");
  const payloadloader = localStorage.getItem("payloadloader");
  
  if (sd == "yes" && folder == "yes") {
    /*if (autobooting == "failed" ||
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
    else {*/
      document.getElementById("sd_result").innerHTML = 'Aparentemente tienes "los archivos del hack" bien colocados.';
    //}
	getLabelByControlId("sd_yes").style.color = "#bbffbb";
	getLabelByControlId("sd_no").style.color = "#cccccc";
	getLabelByControlId("folder_yes").style.color = "#bbffbb";
	getLabelByControlId("folder_no").style.color = "#cccccc";
	document.getElementById("d_folder").style.display = "inline";
  }
  else if (sd == "yes" && folder == "no") {
    /*if (autobooting == "payload_loader" || autobooting == "payload_loader_old" || autobooting == "hbl" || autobooting == "wii" || autobooting == "hbc" || autobooting == "el" || autobooting == "tbs" || autobooting == "warning" ||
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
    else {*/
      document.getElementById("sd_result").innerHTML = 'La carpeta <code>sd:/wiiu</code> es esencial ya que ahí se almacenan las aplicaciones homebrew y los archivos del "hack" de la consola.';
    //}
	getLabelByControlId("sd_yes").style.color = "#bbffbb";
	getLabelByControlId("sd_no").style.color = "#cccccc";
	getLabelByControlId("folder_yes").style.color = "#cccccc";
	getLabelByControlId("folder_no").style.color = "#bbffbb";
	document.getElementById("d_folder").style.display = "inline";
  }
  else if (sd == "no") {
    /*if (autobooting == "payload_loader" || autobooting == "payload_loader_old" || autobooting == "hbl" || autobooting == "wii" || autobooting == "hbc" || autobooting == "el" || autobooting == "tbs" || autobooting == "warning" ||
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
    else {*/
      document.getElementById("sd_result").innerHTML = 'La tarjeta SD es esencial ya que ahí se almacenan las aplicaciones homebrew y los archivos del "hack" de la consola. Contesta las preguntas de los apartados anteriores para identificar la modificacion de la consola. Vas na necesitar una tarjeta SD <a href="?s=sd_format">formateada en FAT32</a> para instalar o desinstalar cualquier modificación de la Wii U.';
    //}
	getLabelByControlId("sd_yes").style.color = "#cccccc";
	getLabelByControlId("sd_no").style.color = "#bbffbb";
	getLabelByControlId("folder_yes").style.color = "#cccccc";
	getLabelByControlId("folder_no").style.color = "#cccccc";
	document.getElementById("d_folder").style.display = "none";
  }
  else if (document.getElementById("sd_result") != null) {
    document.getElementById("sd_result").innerHTML = 'Contesta la(s) pregunta(s) de abajo para tener un diagnostico básico de la situación de "los archivos del hack" de tu consola. Contesta las preguntas de los apartados anteriores para identificar la modificación de la consola.';
  }
  
  if ((autobooting == null || indexiine == null || (haxchiIcon == null && haxchi == null) || payloadloader == null) && document.getElementById("webhack_result") != null) {
    document.getElementById("webhack_result").innerHTML = 'Todas las Wii U, incluidas las que nunca has sido modificadas, tienen con este punto de entrada. Contesta todas las preguntas de los apartados anteriores para determinar si el exploit del navegador es el único punto de entrada de la consola o si existe otro punto de entrada.';
  }
  else if ((autobooting == "wiiu" || autobooting == "user") && indexiine == "no" && (haxchiIcon == "no" || haxchi == "no") && payloadloader == "no") {
    if (sd == "yes" && folder == "yes") {
      document.getElementById("webhack_result").innerHTML = 'Detectado. El exploit del navegador es el punto de entrada principal de la consola. <strong class="green">La Wii U no está modificada</strong>. Recuerda que todas las Wii U, incluidas las que nunca has sido modificadas, tienen con este punto de entrada. <a href="?s=uninstall_webhack">Estos son los pasos para "desinstalar" Webhack correctamente.</a>';
	}
	else if (sd == "no" || (sd == "yes" && folder == "no")) {
      document.getElementById("webhack_result").innerHTML = 'No detectado. El exploit del navegador es el punto de entrada principal de la consola, pero no tienes "los archivos del hack" en la tarjeta SD. <strong class="green">La Wii U no está modificada</strong>. Recuerda que todas las Wii U, incluidas las que nunca has sido modificadas, tienen con este punto de entrada.';
	}
	else {
      document.getElementById("webhack_result").innerHTML = 'El exploit del navegador es un punto de entrada principal de tu consola, pero no has indicado la situación de "los archivos del hack" de tu consola. Contesta la(s) pregunta(s) de abajo. <strong class="green">La Wii U no está modificada</strong>. Recuerda que todas las Wii U, incluidas las que nunca has sido modificadas, tienen con este punto de entrada.';
    }
  }
  else {
    if (sd == "yes" && folder == "yes") {
      document.getElementById("webhack_result").innerHTML = 'Detectado. Puede funcionar como un punto de entrada secundario de tu consola. Recuerda que todas las Wii U, incluidas las que nunca has sido modificadas, tienen con este punto de entrada. Recuerda que todas las Wii U, incluidas las que nunca has sido modificadas, tienen con este punto de entrada. <a href="?s=uninstall_webhack">Estos son los pasos para "desinstalar" Webhack correctamente.</a>';
	}
	else if (sd == "no" || (sd == "yes" && folder == "no")) {
      document.getElementById("webhack_result").innerHTML = 'No detectado. Puede funcionar como un punto de entrada secundario de tu consola, pero no tienes "los archivos del hack" en la tarjeta SD. Recuerda que todas las Wii U, incluidas las que nunca has sido modificadas, tienen con este punto de entrada.';
	}
	else if (document.getElementById("webhack_result") != null) {
      document.getElementById("webhack_result").innerHTML = 'Puede funcionar como un punto de entrada secundario de tu consola, pero no has indicado la situación de "los archivos del hack" de tu consola. Contesta la(s) pregunta(s) de abajo. Recuerda que todas las Wii U, incluidas las que nunca has sido modificadas, tienen con este punto de entrada.';
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
  const form = document.getElementById("f_sd");
  const value = form["default"].value;

  if (value != null && value != '') {
    const labels = form.getElementsByTagName("label");
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
  const form = document.getElementById("f_folder");
  const value = form["default"].value;

  if (value != null && value != '') {
    const labels = form.getElementsByTagName("label");
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
  const form = document.getElementById("f_autobooting");
  const value = form["default"].value;

  if (value != null && value != "") {
    const labels = form.getElementsByTagName("label");
    for (i = 0; i < labels.length; i++)
      labels[i].style.color = "#cccccc";
    getLabelByControlId(value).style.color = "#bbffbb";

	if (value == "autobooting_cbhc") {
	  localStorage.setItem("autobooting", "cbhc");
	  document.getElementById("autobooting_next").style.display = "inline";
	  document.getElementById("fmr").style.display = "none";
	  //document.getElementById("autobooting_result").innerHTML = "Coldboot Haxchi detectado.";
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
  const form = document.getElementById("f_indexiine");
  const value = form["default"].value;

  if (value != null && value != '') {
    const labels = form.getElementsByTagName("label");
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
  const form = document.getElementById("f_haxchi_icon");
  const value = form["default"].value;
  localStorage.removeItem("haxchi");

  if (value != null && value != '') {
    const labels = form.getElementsByTagName("label");
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
  const form = document.getElementById("f_haxchi");
  const value = form["default"].value;

  if (value != null && value != '') {
    const labels = form.getElementsByTagName("label");
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
  const form = document.getElementById("f_payloadloader");
  const value = form["default"].value;

  if (value != null && value != '') {
    const labels = form.getElementsByTagName("label");
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
  const form = document.getElementById(id);
  form.reset();
  const labels = form.getElementsByTagName("label");
  for (i = 0; i < labels.length; i++)
    labels[i].style.color = "#cccccc";
}

function getLabelByControlId(id) {
  const labels = document.getElementsByTagName('label');
  for (i = 0; i < labels.length; i++) {
    if (labels[i].htmlFor == id)
      return labels[i];
  }
}
