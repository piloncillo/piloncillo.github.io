const url = new URL(document.URL);
const path = url.pathname;
const section = url.searchParams.get("s");
const page = url.searchParams.get("p");
const ref = url.searchParams.get("r");
	
window.addEventListener("resize", contentResize);

loadSidebar();
loadContent();

function loadSidebar() {
	let baseUrl = "../";
	let archivePath = "../Archive/";
	let extrasPath = "../Extras/";
	let testPath = "../Test/";
	let uninstallPath = "../Uninstall/";
	let vWiiPath = "../vWii/";
	let wafelPath = "../WafelInstaller/";

	if (path.indexOf("/Archive/") != -1) {
		archivePath = "";
	}
	else if (path.indexOf("/Extras/") != -1) {
		extrasPath = "";
	}
	else if (path.indexOf("/Test/") != -1) {
		testPath = "";
	}
	else if (path.indexOf("/Uninstall/") != -1) {
		uninstallPath = "";
	}
	else if (path.indexOf("/vWii/") != -1) {
		vWiiPath = "";
	}
	else if (path.indexOf("/WafelInstaller/") != -1) {
		wafelUrl = "";
	}
	else {
		baseUrl = "";
		archivePath = "Archive/";
		extrasPath = "Extras/";
		testPath = "Test/";
		uninstallPath = "Uninstall/";
		vWiiPath = "vWii/";
		wafelPath = "WafelInstaller/";
	}
	
	if (section != null && section != "") {
		document.getElementById("sidebar_content").innerHTML = '<div id="logo"><img id="pilon_logo" src="' + baseUrl + 'Images/logo.png" /></div><ul class="sidenav"><li><a href="' + baseUrl + 'index.html" class="selectable" id="main_link" title="Inicio">Inicio</a></li><li><span class="caret selectable" id="install_aroma" title="Instalar PayloadLoader usando Aroma">PayloadLoader (Aroma)</span><ul class="nested"><li><a class="selectable" href="' + baseUrl + '?s=aroma&p=sd" id="aroma_sd_link" title="Prepara la tarjeta SD">Prepara la tarjeta SD</a></li><li><a class="selectable" href="' + baseUrl + '?s=aroma&p=files" id="aroma_files_link" title="Coloca los archivos">Coloca los archivos</a></li><li><a class="selectable" href="' + baseUrl + '?s=aroma&p=payloadloader" id="aroma_payloadloader_link" title="PayloadLoader">PayloadLoader</a></li><li><a class="selectable" href="' + baseUrl + '?s=aroma&p=autobooting" id="aroma_autobooting_link" title="Autobooting PayloadLoader">Autobooting</a></li><li><a class="selectable" href="' + baseUrl + '?s=aroma&p=config" id="aroma_config_link" title="Configurar Aroma">Configurar Aroma</a></li><li><a class="selectable" href="' + baseUrl + '?s=aroma&p=apps" id="aroma_apps_link" title="Añadir aplicaciones">Añadir aplicaciones</a></li></ul></li><li><span class="caret selectable" id="put_tiramisu" title="Añadir Tiramisu a Aroma">Añadir Tiramisu a Aroma</span><ul class="nested"><li><a class="selectable" href="' + baseUrl + '?s=tiramisu_files&p=put" id="tiramisu_files_put_link" title="Coloca los archivos">Coloca los archivos</a></li><li><a class="selectable" href="' + baseUrl + '?s=tiramisu_files&p=config" id="tiramisu_files_config_link" title="Configurar Tiramisu">Configurar Tiramisu</a></li><li><a class="selectable" href="' + baseUrl + '?s=tiramisu_files&p=apps" id="tiramisu_files_apps_link" title="Añadir aplicaciones">Añadir aplicaciones</a></li></ul></li><hr><li><span class="caret selectable" id="archive_caret" title="Archivo">Archivo</span><ul class="nested"><li><span class="caret selectable" id="previous_methods_caret" title="Métodos anteriores">Métodos anteriores</span><ul class="nested"><li><a class="selectable" href="' + archivePath + '?s=webhack&p=sd" id="install_webhack_link" title="Instalar Webhack">Webhack</a></li><li><a class="selectable" href="' + archivePath + '?s=indexiine&p=sd" id="install_indexiine_link" title="Instalar Indexiine">Indexiine</a></li><li><a class="selectable" href="' + archivePath + '?s=haxchi&p=ds_game" id="install_haxchi_link" title="Instalar Haxchi">Haxchi</a></li><li><a class="selectable" href="' + archivePath + '?s=cbhc&p=ds_game" id="install_cbhc_link" title="Instalar Coldboot Haxchi">Coldboot Haxchi</a></li></ul></li><li><a class="selectable" href="' + archivePath + '?s=custom_haxchi" id="custom_haxchi_link" title="Personalizar Haxchi">Personalizar Haxchi</a></li><li><a class="selectable" href="' + archivePath + '?s=config_payload" id="config_payload_link" title="Configurable Payload">Configurable Payload</a></li></ul></li><hr><li><span class="caret selectable" id="links" title="Enlaces">Enlaces</span><ul class="nested"><li><a class="selectable" href="' + baseUrl + 'About.html" id="about_link" title="Acerca de">Acerca de</a></li></ul></li></ul>';
	}
	else {
		document.getElementById("sidebar_content").innerHTML = '<div id="logo"><img id="pilon_logo" src="' + baseUrl + 'Images/logo.png" /></div><ul class="sidenav"><li><a href="' + baseUrl + 'index.html" class="selectable" id="HomeLink" title="Inicio">Inicio</a></li><hr><li><span class="caret" id="WafelInstallerMenu"><a class="selectable" href="' + wafelPath + '" id="WafelInstallerMenuLink" title="Instalar modificación">Instalar modificación</a></span><ul class="nested"><li><a class="selectable" href="' + wafelPath + 'Preparation.html" id="WafelPreparationLink" title="Preparación">Preparación</a></li><li><a class="selectable" href="' + wafelPath + 'Load.html" id="WafelLoadLink" title="Cargar WafelInstaller">Cargar WafelInstaller</a></li><li><a class="selectable" href="' + wafelPath + 'SDNotDetected.html" id="WafelSDNotDetectedLink" title="Tarjeta SD no detectada">Tarjeta SD no detectada</a></li><li><a class="selectable" href="' + wafelPath + 'FormatSDOrUSB.html" id="WafelFormatSDOrUSBLink" title="Formateo de SD o USB">Formateo de SD o USB</a></li><li><a class="selectable" href="' + wafelPath + 'DownloadAroma.html" id="WafelDownloadAromaLink" title="Descargar Aroma">Descargar Aroma</a></li><li><a class="selectable" href="' + wafelPath + 'DownloadStroopwafel.html" id="WafelDownloadStroopwafelLink" title="Descargar Stroopwafel">Descargar Stroopwafel</a></li><li><a class="selectable" href="' + wafelPath + 'InstallISFShax.html" id="WafelInstallISFShaxLink" title="Instalar ISFShax">Instalar ISFShax</a></li><li><a class="selectable" href="' + wafelPath + 'FirstBoot.html" id="WafelFirstBootLink" title="Primer arranque">Primer arranque</a></li><li><a class="selectable" href="' + wafelPath + 'NextSteps.html" id="WafelNextStepsLink" title="Siguientes pasos">Siguientes pasos</a></li></ul></li><hr><li><a class="selectable" href="' + baseUrl + 'HomebrewApps.html" id="HomebrewAppsLink" title="Homebrew destacado">Homebrew destacado</a></li><hr><li><span class="caret selectable" id="vWiiMenu" title="Virtual Wii">Virtual Wii</span><ul class="nested"><li><a class="selectable" href="' + vWiiPath + 'index.html" id="vWiiLink" title="Modificar el modo virtual Wii">Modificación de vWii</a></li><li><a class="selectable" href="' + vWiiPath + 'HomebrewApps.html" id="vWiiHomebrewAppsLink" title="Homebrew en modo vWii">Homebrew heredado</a></li><li><a class="selectable" href="' + vWiiPath + 'Priiloader.html" id="vWiiPriiloaderLink" title="Instalar y usar Priiloader">Instalar y usar Priiloader</a></li><li><a class="selectable" href="' + vWiiPath + 'TestPriiloader.html" id="vWiiTestPriiloaderLink" title="Identificar Priiloader">Identificar Priiloader</a></li><li><a class="selectable" href="' + vWiiPath + 'UninstallPriiloader.html" id="vWiiUninstallPriiloaderLink" title="Desinstalar Priiloader">Desinstalar Priiloader</a></li><li><a class="selectable" href="' + vWiiPath + 'UninstallMod.html" id="vWiiUninstallModLink" title="Restaurar el modo virtual Wii">Restauración de vWii</a></li></ul></li><hr><li><span class="caret" id="TestMenu"><a class="selectable" href="' + testPath + 'index.html" id="TestMenuLink" title="Identificar modificación">Identificar modificación</a></span><ul class="nested"><li><a class="selectable" href="' + testPath + 'Indexiine.html" id="TestIndexiineLink" title="Identificar Indexiine">Indexiine</a></li><li><a class="selectable" href="' + testPath + 'CBHC.html" id="TestCBHCLink" title="Identificar Coldboot Haxchi">Coldboot Haxchi</a></li><li><a class="selectable" href="' + testPath + 'Haxchi.html" id="TestHaxchiLink" title="Identificar Haxchi">Haxchi (normal)</a></li><li><a class="selectable" href="' + testPath + 'PayloadLoader.html" id="TestPayloadLoaderLink" title="Identificar PayloadLoader">PayloadLoader</a></li><li><a class="selectable" href="' + testPath + 'ISFShax.html" id="TestISFShaxLink" title="Identificar ISFShax">ISFShax</a></li></ul></li><hr><li><span class="caret selectable" id="UninstallMenu" title="Desinstalar modificación">Desinstalar modificación</span><ul class="nested"><li><a class="selectable" href="' + uninstallPath + 'Indexiine.html" id="UninstallIndexiineLink" title="Desinstalar Indexiine">Indexiine</a></li><li><a class="selectable" href="' + uninstallPath + 'CBHC.html" id="UninstallCBHCLink" title="Desinstalar Coldboot Haxchi">Coldboot Haxchi</a></li><li><a class="selectable" href="' + uninstallPath + 'Haxchi.html" id="UninstallHaxchiLink" title="Desinstalar Haxchi">Haxchi (normal)</a></li><li><a class="selectable" href="' + uninstallPath + 'PayloadLoader.html" id="UninstallPayloadLoaderLink" title="Desinstalar PayloadLoader">PayloadLoader</a></li><li><a class="selectable" href="' + wafelPath + 'UninstallISFShax.html" id="UninstallISFShaxLink" title="Desinstalar ISFShax">ISFShax</a></li></ul></li><hr><li><a class="selectable" href="' + baseUrl + 'Questions.html" id="QuestionsLink" title="Preguntas frecuentes">Preguntas frecuentes</a></li><hr><li><span class="caret selectable" id="ExtrasMenu" title="Extras">Extras</span><ul class="nested"><li><a class="selectable" href="' + extrasPath + 'DetectSD.html" id="ExtrasDetectSDLink" title="Revisar que la Wii U detecta la tarjeta SD (real)">Revisar que detecta la SD</a></li><li><a class="selectable" href="' + extrasPath + 'WriteToSD.html" id="ExtrasWriteToSDLink" title="Revisar que la Wii U puede escribir datos en la tarjeta SD (real)">Revisar escritura en la SD</a></li><hr><li><a class="selectable" href="' + extrasPath + 'StandbyFunctions.html" id="ExtrasStandbyFunctionsLink" title="Desactivar modo de reposo">Desactivar modo de reposo</a></li><li><a class="selectable" href="' + extrasPath + 'BlockUpdates.html" id="ExtrasBlockUpdatesLink" title="Bloquear actualizaciones">Bloquear actualizaciones</a></li><li><a class="selectable" href="' + extrasPath + 'UnblockUpdates.html" id="ExtrasUnblockUpdatesLink" title="Desbloquear actualizaciones">Desbloquear actualizaciones</a></li><hr><li><a class="selectable" href="' + extrasPath + 'UpdateAroma.html" id="ExtrasUpdateAromaLink" title="Actualizar manualmente Aroma">Actualizar Aroma</a></li><li><a class="selectable" href="' + extrasPath + 'AddAromaApps.html" id="ExtrasAddAromaAppsLink" title="Agregar manualmente aplicaciones a Aroma">Agregar aplicaciones a Aroma</a></li></ul></li><hr><li><span class="caret selectable" id="ArchiveMenu" title="Archivo">Archivo</span><ul class="nested"><li><span class="caret selectable" id="PreviousMethodsMenu" title="Métodos anteriores">Métodos anteriores</span><ul class="nested"><li><a class="selectable" href="' + archivePath + '?s=webhack&p=sd" id="ArchiveWebhackLink" title="Instalar Webhack">Webhack</a></li><li><a class="selectable" href="' + archivePath + '?s=indexiine&p=sd" id="ArchiveIndexiineLink" title="Instalar Indexiine">Indexiine</a></li><li><a class="selectable" href="' + archivePath + '?s=haxchi&p=ds_game" id="ArchiveHaxchiLink" title="Instalar Haxchi">Haxchi (normal)</a></li><li><a class="selectable" href="' + archivePath + '?s=cbhc&p=ds_game" id="ArchiveCBHCLink" title="Instalar Coldboot Haxchi">Coldboot Haxchi</a></li><li><a class="selectable" href="' + baseUrl + 'index.html?s=aroma&p=sd" id="ArchiveAromaLink" title="Instalar PayloadLoader usando Aroma">PayloadLoader (Aroma)</a></li></ul></li><li><a class="selectable" href="' + baseUrl + 'index.html?s=tiramisu_files&p=put" id="ArchiveTiramisuLink" title="Añadir Tiramisu a Aroma">Añadir Tiramisu a Aroma</a></li><li><a class="selectable" href="' + archivePath + '?s=custom_haxchi" id="ArchiveCustomHaxchiLink" title="Personalizar Haxchi">Personalizar Haxchi</a></li><li><a class="selectable" href="' + archivePath + '?s=config_payload" id="ArchiveConfigPayloadLink" title="Configurable Payload">Configurable Payload</a></li></ul></li><hr><li><span class="caret selectable" id="LinksMenu" title="Enlaces">Enlaces</span><ul class="nested"><li><a class="selectable" href="https://github.com/piloncillo/piloncillo.github.io" id="GithubLink" title="GitHub">GitHub</a></li><li><a class="selectable" href="https://www.youtube.com/@Fran1AC" id="YouTubeLink" title="Demostraciones">YouTube</a></li><!--li><a class="selectable" href="#" id="FacebookLink" title="Facebook">Facebook</a></li--><!--li><a class="selectable" href="#" id="TwitterLink" title="X">Twitter</a></li--><!--li><a class="selectable" href="#" id="DiscordLink" title="Discord">Discord</a></li--><li><a class="selectable" href="' + baseUrl + 'About.html" id="AboutLink" title="Acerca de">Acerca de</a></li></ul></li></ul>';
	}
}

async function loadContentFile(url) {
	let pBody = new Promise(function(resolve) {
		let req = new XMLHttpRequest();
		req.open('GET',  url);
		req.onload = function() {
			if (req.status == 200) {
				resolve(req.responseText);
			} else {
				resolve("");
			}
		};
		req.send();
	});
	
	document.getElementById("content").innerHTML = '<div class="cont">' + await pBody + '</div>';
	setAspect();
}

async function loadContentFiles(urlHeader, urlBody, urlFooter) {	
	let pHeader = new Promise(function(resolve) {
		let req = new XMLHttpRequest();
		req.open('GET',  urlHeader);
		req.onload = function() {
			if (req.status == 200) {
				resolve(req.responseText);
			} else {
				resolve("");
			}
		};
		req.send();
	});
	
	let pBody = new Promise(function(resolve) {
		let req = new XMLHttpRequest();
		req.open('GET',  urlBody);
		req.onload = function() {
			if (req.status == 200) {
				resolve(req.responseText);
			} else {
				resolve("");
			}
		};
		req.send();
	});
	
	let pFooter = new Promise(function(resolve) {
		let req = new XMLHttpRequest();
		req.open('GET',  urlFooter);
		req.onload = function() {
			if (req.status == 200) {
				resolve(req.responseText);
			} else {
				resolve("");
			}
		};
		req.send();
	});

	document.getElementById("content").innerHTML = '<div class="cont">' + await pHeader + await pBody + await pFooter + '</div>';
	setAspect();
}

function loadContent() {
	if (section != null && section != "") {
		if (section == "about") {
			//loadContentFile("OldContent/about.html");
			location.assign(url.origin + url.pathname + "About.html");
		}
		else if (section == "aroma") {
			if (page == "sd") {
				if (url.pathname.indexOf("/index.html") != -1) {
					const slash = url.pathname.replace("/index.html", "/");
					location.assign(url.origin + slash + url.search);
				}
				loadContentFiles("OldContent/aroma/sd_h.html", "OldContent/sd_format.html", "OldContent/aroma/sd_f.html");
			}
			else if (page == "files")
				loadContentFiles("OldContent/aroma/files_h.html", "OldContent/aroma/files.html", "OldContent/aroma/files_f.html");
			else if (page == "nand_backup_be")
				loadContentFiles("OldContent/aroma/nbbe_h.html", "OldContent/nbbe.html", "OldContent/aroma/nbbe_f.html");
			else if (page == "nand_backup")
				loadContentFiles("OldContent/aroma/nb_h.html", "OldContent/nand_backup_dump.html", "OldContent/aroma/nb_f.html");
			else if (page == "payloadloader")
				loadContentFiles("OldContent/aroma/plbe_h.html", "OldContent/aroma/plbe.html", "OldContent/aroma/plbe_f.html");
			else if (page == "autobooting")
				loadContentFiles("OldContent/aroma/apl_h.html", "OldContent/aroma/apl.html", "OldContent/aroma/apl_f.html");
			else if (page == "config")
				loadContentFiles("OldContent/aroma/config_h.html", "OldContent/aroma/config.html", "OldContent/aroma/config_f.html");
			else if (page == "apps")
				loadContentFiles("OldContent/aroma/apps_h.html", "OldContent/aroma/apps.html", "OldContent/aroma/apps_f.html");
			else if (page == "apps_wuhb")
				loadContentFiles("OldContent/aroma/apps_h.html", "OldContent/aroma/apps_wuhb.html", "OldContent/aroma/apps_f.html");
			else if (page == "modules_setup")
				loadContentFiles("OldContent/aroma/apps_h.html", "OldContent/aroma/modules_setup.html", "OldContent/aroma/apps_f.html");
			else if (page == "modules")
				loadContentFiles("OldContent/aroma/apps_h.html", "OldContent/aroma/modules.html", "OldContent/aroma/apps_f.html");
			else if (page == "plugins")
				loadContentFiles("OldContent/aroma/apps_h.html", "OldContent/aroma/plugins.html", "OldContent/aroma/apps_f.html");
			else
				loadContentFile("OldContent/main.html");
		}
		else if (section == "tiramisu") {
			if (page == "sd")
				loadContentFiles("OldContent/tiramisu/sd_h.html", "OldContent/sd_format.html", "OldContent/tiramisu/sd_f.html");
			else if (page == "files")
				loadContentFiles("OldContent/tiramisu/files_h.html", "OldContent/tiramisu/files.html", "OldContent/tiramisu/files_f.html");
			else if (page == "nand_backup_be")
				loadContentFiles("OldContent/tiramisu/nbbe_h.html", "OldContent/nbbe.html", "OldContent/tiramisu/nbbe_f.html");
			else if (page == "nand_backup")
				loadContentFiles("OldContent/tiramisu/nb_h.html", "OldContent/nand_backup_dump.html", "OldContent/tiramisu/nb_f.html");
			else if (page == "payloadloader")
				loadContentFiles("OldContent/tiramisu/plbe_h.html", "OldContent/tiramisu/plbe.html", "OldContent/tiramisu/plbe_f.html");
			else if (page == "autobooting")
				loadContentFiles("OldContent/tiramisu/apl_h.html", "OldContent/tiramisu/apl.html", "OldContent/tiramisu/apl_f.html");
			else if (page == "config")
				loadContentFiles("OldContent/tiramisu/config_h.html", "OldContent/tiramisu/config.html", "OldContent/tiramisu/config_f.html");
			else if (page == "apps")
				loadContentFiles("OldContent/tiramisu/apps_h.html", "OldContent/tiramisu/apps.html", "OldContent/tiramisu/apps_f.html");
			else
				loadContentFile("OldContent/main.html");
		}
		else if (section == "test") {
			if (page == "payloadloader")
				//loadContentFile("OldContent/test_payloadloader.html");
				location.assign(url.origin + url.pathname + "Test/PayloadLoader.html");
			else if (page == "autobooting")
				//loadContentFile("OldContent/test_cbhc.html");
				location.assign(url.origin + url.pathname + "Test/CBHC.html");
			else if (page == "cbhc")
				//loadContentFile("OldContent/test_cbhc.html");
				location.assign(url.origin + url.pathname + "Test/CBHC.html");
			else if (page == "haxchi")
				//loadContentFile("OldContent/test_haxchi.html");
				location.assign(url.origin + url.pathname + "Test/Haxchi.html");
			else if (page == "indexiine")
				//loadContentFile("OldContent/test_indexiine.html");
				location.assign(url.origin + url.pathname + "Test/Indexiine.html");
			else if (page == "isfshax")
				//loadContentFile("OldContent/test_isfshax.html");
				location.assign(url.origin + url.pathname + "Test/ISFShax.html");
			else
				//loadContentFile("OldContent/test.html");
				location.assign(url.origin + url.pathname + "Test/");
		}
		else if (section == "uninstall_webhack") {
			loadContentFile("OldContent/uninstall_webhack.html");
		}
		else if (section == "uninstall_indexiine") {
			if (page == "ext")
				//loadContentFile("OldContent/uninstall_indexiine_ext.html");
				location.assign(url.origin + url.pathname + "Uninstall/IndexiineExt.html");
			else if (page == "hbl")
				//loadContentFile("OldContent/uninstall_indexiine.html");
				location.assign(url.origin + url.pathname + "Uninstall/Indexiine.html");
			else
				//loadContentFile("OldContent/uninstall_indexiine.html");
				location.assign(url.origin + url.pathname + "Uninstall/Indexiine.html");
		}
		else if (section == "uninstall_haxchi") {
			//loadContentFile("OldContent/uninstall_haxchi.html");
			location.assign(url.origin + url.pathname + "Uninstall/Haxchi.html");
		}
		else if (section == "uninstall_cbhc") {
			if (page == "nand_backup")
				//loadContentFile("OldContent/uninstall_cbhc_nand_backup.html");
				location.assign(url.origin + url.pathname + "Uninstall/CBHC.html");
			else if (page == "process")
				//loadContentFile("OldContent/uninstall_cbhc_process.html");
				location.assign(url.origin + url.pathname + "Uninstall/CBHC.html");
			else
				//loadContentFile("OldContent/uninstall_cbhc.html");
				location.assign(url.origin + url.pathname + "Uninstall/CBHC.html");
		}
		else if (section == "uninstall_cbhc_nand_backup") {
			//loadContentFile("OldContent/uninstall_cbhc_nand_backup.html");
			location.assign(url.origin + url.pathname + "Uninstall/CBHC.html");
		}
		else if (section == "uninstall_cbhc_process") {
			//loadContentFile("OldContent/uninstall_cbhc_process.html");
			location.assign(url.origin + url.pathname + "Uninstall/CBHC.html");
		}
		else if (section == "uninstall_payloadloader") {
			//loadContentFile("OldContent/uninstall_payloadloader_aroma.html");
			location.assign(url.origin + url.pathname + "Uninstall/PayloadLoader.html");
		}
		else if (section == "uninstall_payloadloader_tiramisu") {
			//loadContentFile("OldContent/uninstall_payloadloader_tiramisu.html");
			location.assign(url.origin + url.pathname + "Uninstall/PayloadLoaderTiramisu.html");
		}
		else if (section == "be_pages") {
			loadContentFile("OldContent/be_pages.html");
		}
		else if (section == "sd_format") {
			loadContentFiles("OldContent/sd_format_h.html", "OldContent/sd_format.html", "OldContent/sd_format_f.html");
		}
		else if (section == "detect_sd") {
			//loadContentFile("OldContent/detect_sd.html");
			location.assign(url.origin + url.pathname + "Extras/DetectSD.html");
		}
		else if (section == "write_to_sd") {
			//loadContentFile("OldContent/write_to_sd.html");
			location.assign(url.origin + url.pathname + "Extras/WriteToSD.html");
		}
		else if (section == "nand_backup") {
			if (page == "apl")
				loadContentFile("OldContent/nand_backup_apl.html");
			else if (page == "mpl")
				loadContentFile("OldContent/nand_backup_mpl.html");
			else if (page == "old")
				loadContentFile("OldContent/nand_backup_old.html");
			else if (page == "nmwu_sd")
				loadContentFiles("OldContent/nand_backup_nmwu_sd_h.html", "OldContent/sd_format.html", "OldContent/nand_backup_nmwu_sd_f.html");
			else if (page == "nmwu_files")
				loadContentFile("OldContent/nand_backup_nmwu_files.html");
			else if (page == "nmwu_be")
				loadContentFiles("OldContent/nand_backup_nmwu_be_h.html", "OldContent/nbbe.html", "OldContent/nand_backup_nmwu_be_f.html");
			else if (page == "dump")
				loadContentFiles("OldContent/nb_dump_h.html", "OldContent/nand_backup_dump.html", "OldContent/nb_dump_f.html");
			else
				loadContentFile("OldContent/nand_backup.html");
		}
		else if (section == "enable_autobooting") {
			if (page == "aroma")
				loadContentFiles("OldContent/enable_apl_h.html", "OldContent/aroma/apl.html", "OldContent/enable_apl_f.html");
			else if (page == "tiramisu")
				loadContentFiles("OldContent/enable_apl_h.html", "OldContent/tiramisu/apl.html", "OldContent/enable_apl_f.html");
			else
				loadContentFiles("OldContent/enable_autobooting.html");
		}
		else if (section == "disable_autobooting") {
			if (page == "aroma")
				loadContentFiles("OldContent/disable_apl_h.html", "OldContent/aroma/disable_apl.html", "OldContent/disable_apl_f.html");
			else if (page == "tiramisu")
				loadContentFiles("OldContent/disable_apl_h.html", "OldContent/tiramisu/disable_apl.html", "OldContent/disable_apl_f.html");
			else
				loadContentFile("OldContent/disable_autobooting.html");
		}
		else if (section == "standby_functions") {
			//loadContentFile("OldContent/standby_functions.html");
			location.assign(url.origin + url.pathname + "Extras/StandbyFunctions.html");
		}
		else if (section == "block_updates") {
			if (page == "apl")
				//loadContentFile("OldContent/block_updates_apl.html");
				location.assign(url.origin + url.pathname + "Extras/BlockUpdates.html");
			else if (page == "mpl")
				//loadContentFile("OldContent/block_updates_mpl.html");
				location.assign(url.origin + url.pathname + "Extras/BlockUpdates.html");
			else if (page == "old")
				loadContentFile("OldContent/block_updates_old.html");
			else
				//loadContentFile("OldContent/block_updates.html");
				location.assign(url.origin + url.pathname + "Extras/BlockUpdates.html");
		}
		else if (section == "unblock_updates") {
			if (page == "apl")
				//loadContentFile("OldContent/unblock_updates_apl.html");
				location.assign(url.origin + url.pathname + "Extras/UnblockUpdates.html");
			else if (page == "mpl")
				//loadContentFile("OldContent/unblock_updates_mpl.html");
				location.assign(url.origin + url.pathname + "Extras/UnblockUpdates.html");
			else if (page == "old")
				loadContentFile("OldContent/unblock_updates_old.html");
			else
				//loadContentFile("OldContent/unblock_updates.html");
				location.assign(url.origin + url.pathname + "Extras/UnblockUpdates.html");
		}
		else if (section == "aroma_speedrun") {
			loadContentFile("OldContent/aroma/speedrun.html");
		}
		else if (section == "tiramisu_speedrun") {
			loadContentFile("OldContent/tiramisu/speedrun.html");
		}
		else if (section == "aroma_files") {
			if (page == "put")
				loadContentFiles("OldContent/aroma/put_files_h.html", "OldContent/aroma/files.html", "OldContent/aroma/put_files_f.html");
			else if (page == "config")
				loadContentFiles("OldContent/aroma/config_h.html", "OldContent/aroma/config_a.html", "OldContent/aroma/put_config_f.html");
			else if (page == "apps")
				loadContentFiles("OldContent/aroma/apps_h.html", "OldContent/aroma/apps.html", "OldContent/aroma/put_apps_f.html");
			else
				loadContentFile("OldContent/main.html");
		}
		else if (section == "tiramisu_files") {
			if (page == "put") {
				if (url.pathname.indexOf("/index.html") != -1) {
					const slash = url.pathname.replace("/index.html", "/");
					location.assign(url.origin + slash + url.search);
				}
				loadContentFiles("OldContent/tiramisu/put_files_h.html", "OldContent/tiramisu/files.html", "OldContent/tiramisu/put_files_f.html");
			}
			else if (page == "config")
				loadContentFiles("OldContent/tiramisu/config_h.html", "OldContent/tiramisu/config_a.html", "OldContent/tiramisu/put_config_f.html");
			else if (page == "apps")
				loadContentFiles("OldContent/tiramisu/apps_h.html", "OldContent/tiramisu/apps.html", "OldContent/tiramisu/put_apps_f.html");
			else if (page == "apps_hbl")
				loadContentFiles("OldContent/tiramisu/apps_h.html", "OldContent/tiramisu/apps_hbl.html", "OldContent/tiramisu/put_apps_f.html");
			else if (page == "modules_setup")
				loadContentFiles("OldContent/tiramisu/apps_h.html", "OldContent/tiramisu/modules_setup.html", "OldContent/tiramisu/put_apps_f.html");
			else
				loadContentFile("OldContent/main.html");
		}
		else if (section == "update_aroma") {
			//loadContentFiles("OldContent/aroma/update_h.html", "OldContent/aroma/files.html", "OldContent/aroma/update_f.html");
			location.assign(url.origin + url.pathname + "Extras/UpdateAroma.html");
		}
		else if (section == "update_tiramisu") {
			loadContentFiles("OldContent/tiramisu/update_h.html", "OldContent/tiramisu/files.html", "OldContent/tiramisu/update_f.html");
		}
		else if (section == "add_apps_aroma") {
			//loadContentFiles("OldContent/aroma/apps_h.html", "OldContent/aroma/apps.html", "OldContent/aroma/add_apps_f.html");
			location.assign(url.origin + url.pathname + "Extras/AddAromaApps.html");
		}
		else if (section == "add_apps_hbl") {
			loadContentFiles("OldContent/hbl_apps_h.html", "OldContent/tiramisu/apps_hbl.html", "OldContent/hbl_apps_f.html");
		}
		else if (section == "delete") {
			loadContentFile("OldContent/delete.html");
		}
		else if (section == "how_mod_works") {
			loadContentFile("OldContent/how_mod_works.html");
		}
		else if (section == "glossary") {
			loadContentFile("OldContent/glossary.html");
		}
		else if (section == "questions") {
			//loadContentFile("OldContent/questions.html");
			location.assign(url.origin + url.pathname + "Questions.html");
		}
		else if (section == "homebrew") {
			loadContentFile("OldContent/homebrew.html");
		}
		else if (section == "homebrew_aroma") {
			//loadContentFile("OldContent/homebrew_aroma.html");
			location.assign(url.origin + url.pathname + "HomebrewApps.html");
		}
		else if (section == "mod") {
			/*if (page == "hbl")
				loadContentFile("OldContent/mod_hbl.html");
			else if (page == "aroma")
				loadContentFile("OldContent/mod_aroma.html");
			else if (page == "nmwu_sd")
				loadContentFiles("OldContent/mod_nmwu_sd_h.html", "OldContent/sd_format.html", "OldContent/mod_nmwu_sd_f.html");
			else if (page == "nmwu_files")
				loadContentFile("OldContent/mod_nmwu_files.html");
			else if (page == "nmwu_be")
				loadContentFile("OldContent/mod_nmwu_be.html");
			else if (page == "cios")
				loadContentFile("OldContent/mod_cios.html");
			else if (page == "apps")
				loadContentFile("OldContent/mod_apps.html");
			else
				loadContentFile("OldContent/main.html");*/
			const vWii = url.pathname.replace("/vwii/", "/vWii/");
			location.assign(url.origin + vWii + "index.html");
		}
		else if (section == "res") {
			/*if (page == "nand_hbl")
				loadContentFile("OldContent/res_nand_hbl.html");
			else if (page == "vwnr")
				loadContentFile("OldContent/res_vwnr.html");
			else if (page == "hbl")
				loadContentFile("OldContent/res_hbl.html");
			else if (page == "vwd")
				loadContentFile("OldContent/res_vwd.html");
			else if (page == "unblock_updates")
				loadContentFile("OldContent/res_unblock_updates.html");
			else if (page == "update")
				loadContentFile("OldContent/res_update.html");
			else if (page == "block_updates")
				loadContentFile("OldContent/res_block_updates.html");
			else
				loadContentFile("OldContent/res.html");*/
			const vWii = url.pathname.replace("/vwii/", "/vWii/");
			location.assign(url.origin + vWii + "UninstallMod.html");
		}
		else if (section == "priiloader") {
			//loadContentFile("OldContent/priiloader.html");
			const vWii = url.pathname.replace("/vwii/", "/vWii/");
			location.assign(url.origin + vWii + "Priiloader.html");
		}
		else if (section == "homebrew_inherited") {
			//loadContentFile("OldContent/homebrew.html");
			const vWii = url.pathname.replace("/vwii/", "/vWii/");
			location.assign(url.origin + vWii + "HomebrewApps.html");
		}
		/*else if (section != null && section != "") {
			location.assign(url.origin + url.pathname);
		}*/
		else {
			//loadContentFile("OldContent/main.html");
			location.assign(url.origin + url.pathname);
		}
	}
	else if (url.pathname.indexOf("/index.html") != -1) {
		const slash = url.pathname.replace("/index.html", "/");
		location.assign(url.origin + slash);
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
		sidebarWidth = 320;
	
	const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
	const availableWidth = window.innerWidth - sidebarWidth - scrollBarWidth - 80;
	
	if (availableWidth < 750) {
		img.style.width = img.naturalWidth + "px";
		if (img.naturalWidth > availableWidth)
			img.style.width = availableWidth + "px";

	} else {
		img.style.width = img.naturalWidth + "px";
		if (img.naturalWidth > 750)
			img.style.width = "750px";
	}
}

function autoSize1(img) {
	let sidebarWidth = 0;
	
	if (localStorage.getItem("sidebar") == "open"
		&& localStorage.getItem("overlay") == "false"
		&& window.innerWidth >= 640)
		sidebarWidth = 320;
	
	const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
	const availableWidth = window.innerWidth - sidebarWidth - scrollBarWidth - 80;
	
	if (availableWidth < 750) {
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
		sidebarWidth = 320;
	
	const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
	const availableWidth = window.innerWidth - sidebarWidth - scrollBarWidth - 80;
	
	if (availableWidth < 750) {
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
	let video = document.getElementsByClassName("video");
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
			sidebarWidth = 320;
	}

	const scrollBarWidth = window.innerWidth - document.body.offsetWidth;
	const availableWidth = window.innerWidth - sidebarWidth - scrollBarWidth - 80;
	
	if (availableWidth < 750) {
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
		for (i = 0; i < video.length; i++) {
			video[i].style.width = availableWidth + "px";
			video[i].style.height = ((availableWidth / 16.0) * 9.0).toFixed(0) + "px";
		}
	}
	else {
		for (i = 0; i < imgs.length; i++) {
			imgs[i].style.width = imgs[i].naturalWidth + "px";
			if (imgs[i].naturalWidth > 750)
				imgs[i].style.width = "750px";
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
		for (i = 0; i < video.length; i++) {
			video[i].style.width = "748px";
			video[i].style.height = "421px";
		}
	}
	
	if (ref == "plugins") {
		const element = document.getElementById("plugins");
		if (element != null)
			element.scrollIntoView();
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
	if (section != null && section != "") {
		if (section == "aroma")
			document.getElementById("install_aroma").click();
		
		/*if (section == "tiramisu")
			document.getElementById("install_tiramisu").click();
		
		if (section == "aroma_files")
			document.getElementById("put_aroma").click();*/
		
		if (section == "tiramisu_files")
			document.getElementById("put_tiramisu").click();
			
		/*if (section == "test")
			document.getElementById("test_mod").click();
			
		if (section == "glossary")
			document.getElementById("glossary_caret").click();
			
		if (section == "uninstall_payloadloader" ||
			section == "uninstall_payloadloader_tiramisu" ||
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
			section == "priiloader" ||
			section == "homebrew_inherited")
			document.getElementById("vwii").click();*/

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
			
		/*if (section == "github" ||
			section == "facebook" ||
			section == "youtube" ||
			section == "twitter" ||
			section == "discord" ||
			section == "about")
			document.getElementById("links").click();*/
			
		let p = page;
			
		if (page == "apps_hbl" ||
			page == "apps_wuhb" ||
			page == "modules_setup" ||
			page == "modules" ||
			page == "plugins")
			p = "apps";
			
		if (section == "test" && page == "autobooting")
			p = "cbhc";

		let sel = document.getElementById(section + "_" + p + "_link");
		
		if (sel == null && p == null)
			sel = document.getElementById(section + "_link");
		
		if (sel != null)
			sel.classList.add("selected");
		else
			document.getElementById("main_link").classList.add("selected");
	}
	else {
		if (path.indexOf("/Extras/") != -1) {
			document.getElementById("ExtrasMenu").click();
			if (path.indexOf("DetectSD") != -1)
				document.getElementById("ExtrasDetectSDLink").classList.add("selected");
			else if (path.indexOf("WriteToSD") != -1)
				document.getElementById("ExtrasWriteToSDLink").classList.add("selected");
			else if (path.indexOf("StandbyFunctions") != -1)
				document.getElementById("ExtrasStandbyFunctionsLink").classList.add("selected");
			else if (path.indexOf("BlockUpdates") != -1)
				document.getElementById("ExtrasBlockUpdatesLink").classList.add("selected");
			else if (path.indexOf("UnblockUpdates") != -1)
				document.getElementById("ExtrasUnblockUpdatesLink").classList.add("selected");
			else if (path.indexOf("UpdateAroma") != -1)
				document.getElementById("ExtrasUpdateAromaLink").classList.add("selected");
			else if (path.indexOf("AddAromaApps") != -1)
				document.getElementById("ExtrasAddAromaAppsLink").classList.add("selected");
			else if (path.indexOf("AddAromaWUHB") != -1)
				document.getElementById("ExtrasAddAromaAppsLink").classList.add("selected");
			else if (path.indexOf("AddAromaPlugins") != -1)
				document.getElementById("ExtrasAddAromaAppsLink").classList.add("selected");
			else if (path.indexOf("AddAromaModules") != -1)
				document.getElementById("ExtrasAddAromaAppsLink").classList.add("selected");
			else if (path.indexOf("AddAromaModulesSetup") != -1)
				document.getElementById("ExtrasAddAromaAppsLink").classList.add("selected");
			else
				document.getElementById("ExtrasMenu").classList.add("selected");
		}
		else if (path.indexOf("/Test/") != -1) {
			document.getElementById("TestMenu").click();
			if (path.indexOf("Indexiine") != -1)
				document.getElementById("TestIndexiineLink").classList.add("selected");
			else if (path.indexOf("CBHC") != -1)
				document.getElementById("TestCBHCLink").classList.add("selected");
			else if (path.indexOf("Haxchi") != -1)
				document.getElementById("TestHaxchiLink").classList.add("selected");
			else if (path.indexOf("PayloadLoader") != -1)
				document.getElementById("TestPayloadLoaderLink").classList.add("selected");
			else if (path.indexOf("ISFShax") != -1)
				document.getElementById("TestISFShaxLink").classList.add("selected");
			else
				document.getElementById("TestMenuLink").classList.add("selected");
		}
		else if (path.indexOf("/Uninstall/") != -1 || path.indexOf("/WafelInstaller/Uninstall") != -1) {
			document.getElementById("UninstallMenu").click();
			if (path.indexOf("Indexiine") != -1)
				document.getElementById("UninstallIndexiineLink").classList.add("selected");
			else if (path.indexOf("CBHC") != -1)
				document.getElementById("UninstallCBHCLink").classList.add("selected");
			else if (path.indexOf("Haxchi") != -1)
				document.getElementById("UninstallHaxchiLink").classList.add("selected");
			else if (path.indexOf("PayloadLoader") != -1)
				document.getElementById("UninstallPayloadLoaderLink").classList.add("selected");
			else if (path.indexOf("ISFShax") != -1)
				document.getElementById("UninstallISFShaxLink").classList.add("selected");
			else
				document.getElementById("UninstallMenu").classList.add("selected");
		}
		else if (path.indexOf("/vWii/") != -1) {
			document.getElementById("vWiiMenu").click();
			if (path.indexOf("HomebrewApps") != -1)
				document.getElementById("vWiiHomebrewAppsLink").classList.add("selected");
			else if (path.indexOf("/Priiloader") != -1)
				document.getElementById("vWiiPriiloaderLink").classList.add("selected");
			else if (path.indexOf("TestPriiloader") != -1)
				document.getElementById("vWiiTestPriiloaderLink").classList.add("selected");
			else if (path.indexOf("UninstallPriiloader") != -1)
				document.getElementById("vWiiUninstallPriiloaderLink").classList.add("selected");
			else if (path.indexOf("UninstallMod") != -1)
				document.getElementById("vWiiUninstallModLink").classList.add("selected");
			else
				document.getElementById("vWiiLink").classList.add("selected");
		}
		else if (path.indexOf("/WafelInstaller/") != -1) {
			document.getElementById("WafelInstallerMenu").click();
			if (path.indexOf("Preparation") != -1)
				document.getElementById("WafelPreparationLink").classList.add("selected");
			else if (path.indexOf("Load") != -1)
				document.getElementById("WafelLoadLink").classList.add("selected");
			else if (path.indexOf("SDNotDetected") != -1)
				document.getElementById("WafelSDNotDetectedLink").classList.add("selected");
			else if (path.indexOf("FormatSDOrUSB") != -1)
				document.getElementById("WafelFormatSDOrUSBLink").classList.add("selected");
			else if (path.indexOf("DownloadAroma") != -1)
				document.getElementById("WafelDownloadAromaLink").classList.add("selected");
			else if (path.indexOf("DownloadStroopwafel") != -1)
				document.getElementById("WafelDownloadStroopwafelLink").classList.add("selected");
			else if (path.indexOf("InstallISFShax") != -1)
				document.getElementById("WafelInstallISFShaxLink").classList.add("selected");
			else if (path.indexOf("FirstBoot") != -1)
				document.getElementById("WafelFirstBootLink").classList.add("selected");
			else if (path.indexOf("NextSteps") != -1)
				document.getElementById("WafelNextStepsLink").classList.add("selected");
			else
				document.getElementById("WafelInstallerMenuLink").classList.add("selected");
		}
		else if (path.indexOf("/HomebrewApps") != -1)
			document.getElementById("HomebrewAppsLink").classList.add("selected");
		else if (path.indexOf("/Questions") != -1)
			document.getElementById("QuestionsLink").classList.add("selected");
		else if (path.indexOf("/About") != -1) {
			document.getElementById("LinksMenu").click();
			document.getElementById("AboutLink").classList.add("selected");
		}
		else {
			document.getElementById("HomeLink").classList.add("selected");
		}
	}
	
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
		document.getElementById("sidebar").style.width = "320px";
		document.getElementById("sidebar_toggle").style.marginLeft = "320px";
		document.getElementById("content").style.marginLeft = "320px";
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