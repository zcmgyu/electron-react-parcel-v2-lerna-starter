var _process=require("process"),_electron=require("electron"),_electronDebug=require("electron-debug"),_electronIsDev=(require("path"),require("electron-is-dev")),$bd2b860e0fdab9618b30352d21f1b7f5$var$process=_process,$bd2b860e0fdab9618b30352d21f1b7f5$var$electron=_electron,$bd2b860e0fdab9618b30352d21f1b7f5$var$debug=_electronDebug,$bd2b860e0fdab9618b30352d21f1b7f5$var$app=$bd2b860e0fdab9618b30352d21f1b7f5$var$electron.app;$bd2b860e0fdab9618b30352d21f1b7f5$var$debug();var $bd2b860e0fdab9618b30352d21f1b7f5$var$mainWindow,$bd2b860e0fdab9618b30352d21f1b7f5$var$dialog=$bd2b860e0fdab9618b30352d21f1b7f5$var$electron.dialog,$bd2b860e0fdab9618b30352d21f1b7f5$var$BrowserWindow=$bd2b860e0fdab9618b30352d21f1b7f5$var$electron.BrowserWindow,$bd2b860e0fdab9618b30352d21f1b7f5$var$isDev=_electronIsDev;function $bd2b860e0fdab9618b30352d21f1b7f5$var$createWindow(){$bd2b860e0fdab9618b30352d21f1b7f5$var$mainWindow=new $bd2b860e0fdab9618b30352d21f1b7f5$var$BrowserWindow({webPreferences:{nodeIntegration:!0},width:900,height:680}),console.log("DEBUG isDev",$bd2b860e0fdab9618b30352d21f1b7f5$var$isDev);var b="../renderer/index.html",e={type:"question",buttons:["Cancel","Yes, please","No, thanks"],defaultId:2,title:"Question",message:"Do you want to do this?",detail:"URL: "+b,checkboxLabel:"Remember my answer",checkboxChecked:!0};$bd2b860e0fdab9618b30352d21f1b7f5$var$dialog.showMessageBox(null,e,(function(b,e){console.log(b),console.log(e)})),$bd2b860e0fdab9618b30352d21f1b7f5$var$mainWindow.loadURL($bd2b860e0fdab9618b30352d21f1b7f5$var$isDev?"http://localhost:8080":b),$bd2b860e0fdab9618b30352d21f1b7f5$var$mainWindow.on("closed",(function(){return $bd2b860e0fdab9618b30352d21f1b7f5$var$mainWindow=null}))}$bd2b860e0fdab9618b30352d21f1b7f5$var$app.on("ready",$bd2b860e0fdab9618b30352d21f1b7f5$var$createWindow),$bd2b860e0fdab9618b30352d21f1b7f5$var$app.on("window-all-closed",(function(){"darwin"!==$bd2b860e0fdab9618b30352d21f1b7f5$var$process.platform&&$bd2b860e0fdab9618b30352d21f1b7f5$var$app.quit()})),$bd2b860e0fdab9618b30352d21f1b7f5$var$app.on("activate",(function(){null===$bd2b860e0fdab9618b30352d21f1b7f5$var$mainWindow&&$bd2b860e0fdab9618b30352d21f1b7f5$var$createWindow()}));