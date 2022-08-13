---
title: Extending the developer tools
slug: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
tags:
  - Deutsch Guide
  - DevTools
  - Extentions
  - german
translation_of: Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools
---
> **Note:** Das heißt Folgendes wird nicht unterstützt , sie können Änderungen an der Seite sehen, die von Seitenskripten vorgenommen wurden.Diese Seite beschreibt devtools-APIs, wie sie in Firefox 55 vorhanden sind. Obwohl die APIs auf den Chrome devtools APIs basieren, gibt es noch viele Funktionen, die in Firefox noch nicht implementiert sind und daher hier nicht dokumentiert sind. Informationen zu den derzeit fehlenden Funktionen finden Sie unter Einschränkungen der devtools-APIs.

- Sie können WebExtensions-APIs verwenden, um die integrierten Entwicklertools des Browsers zu erweitern. Um eine devtools-Erweiterung zu erstellen, geben Sie den Schlüssel "devtools_Seite" in manifest.json ein:

- ```json
  "devtools_seite": "devtools/devtools-seite.html"
  ```

- Der Wert dieses Schlüssels ist eine URL, die auf eine HTML-Datei verweist, die mit Ihrer Erweiterung gebündelt wurde . Die URL sollte relativ zur manifest.json-Datei selbst sein.
- Die HTML-Datei definiert eine spezielle Seite in der Verlängerung, Seite der devtools ResourceHinzufügen

  ### Devtools Seite

- Die davetool Seite wird beim Öffnen der Browser Devtools geladen und beim Schließen entladen. Beachten Sie, dass, weil die devtools Fenster mit einem einzigen Register zugeordnet ist, es für mehr als ein devtools Fenster durchaus möglich ist - also mehr als eine devtools Seite - zur gleichen Zeit existieren.

Die devtools-Seite hat kein sichtbares DOM, kann aber JavaScript-Quellen mit \<script> -Tags enthalten. Die Quellen müssen mit der Erweiterung selbst gebündelt werden. Die normalen DOM-APIs, auf die über das globale Fensterobjekt zugegriffen werden kann Die gleichen WebExtension-APIs wie in Inhaltsskripten Die devtools-APIs: Devtools inspiziertes Fenster devtools.network devtools.panels Beachten Sie, dass die devtools-Seite keinen Zugriff auf andere Web Extensions-APIs erhält und die Hintergrundseite keinen Zugriff auf die devtools-APIs erhält. Stattdessen müssen die davetool-Seite und die Hintergrundseite definiert werden. Verwenden der Laufzeit-Messeging-APIs. Hier ist ein Beispiel:

- <!DOCTYPE html> <html>   <head>     <meta charset="utf-8">   </head>   <body>     <script sec="devtools.js"></script>   </body> </html>The devtools.js file will hold the actual code creating your dev tools extensions.

- ### Erstellen von panel

- Das devtools-Fenster enthält eine Reihe separater Tools - den JavaScript-Debugger, den Netzwerkmonitor usw. Über eine Reihe von Registerkarten am oberen Rand kann der Benutzer zwischen den verschiedenen Werkzeugen wechseln. Das Fenster, in dem sich die Benutzeroberfläche jedes Tools befindet, wird als "Panel" bezeichnet.
- `Gebrauche der devtools.panels.create()` API,, um Ihren eigenen Panel Herzustellen in devtools Fenster(Window)

- ```js
  browser.devtools.panels.create(
    "My Panel",                      // title
    "icons/star.png",                // icon
    "devtools/panel/panel.html"      // content
  ).then((newPanel) => {
    newPanel.onShown.addListener(initialisePanel);
    newPanel.onHidden.addListener(unInitialisePanel);
  });
  ```

- Hierfür sind drei Argumente erforderlich: Titel, Symbol und Inhalt des Panels. Es wird ein Versprechen zurück gegeben, das devtool panel ExtensionPanel-Objekt aufgelöst wird, das in neue Panel darstellt.
- `devtools.panels.ExtensionPanel` dieser obieckt reprsentiert das neue Panel

- ### Interaktion mit dem Zielfenster

- Die Entwicklertools sind immer an eine bestimmte Browserregisterkarte angehängt. Dies wird als "Ziel" für die Entwicklertools oder als "inspiziertes Fenster" bezeichnet, damit können Sie inspizierten Fenster mit der Sie interagieren
- [`devtools.inspectedWindow`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow) API.

### Code im Zielfenster ausführen

Der[`devtools.inspectedWindow.eval()`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/devtools.inspectedWindow/eval) bereitgestellt in einfacher weisen um den Code auszuführen in den lnspector Fensten

> **Note:** Arbeiten mit Inhaltsskripten Dies entspricht in etwa der Verwendung von {{WebExtAPIRef ("tabs.executeScript ()")}} zum Einfügen eines Inhaltsskripts, mit einem wichtigen Unterschied nommen wurden.Beachten Sie, dass eine saubere Ansicht des DOM eine Sicherheitsfunktion ist, mit der verhindert werden soll, dass feindliche Seiten Erweiterungen austricksen, indem das Verhalten nativer DOM-Funktionen neu definiert wird. Das bedeutet, dass Sie mit eval () sehr vorsichtig sein müssen und ein normales Inhaltsskript verwenden sollten, wenn Sie können.

Mit devtools.inspectedWindow\.eval () geladene Skripte sehen auch keine von c definierten JavaJavaScript-Variablen

### Arbeiten mit Inhaltsskripten

devtools document hat keinen direkten Zugrif Beachten Sie, dass eine saubere Ansicht des DOM eine Sicherheitsfunktion ist, mit der verhindert werden soll, dass feindliche Seiten Erweiterungen austricksen, indem das Verhalten nativer DOM-Funktionen neu definiert wird. Das bedeutet, dass Sie mit eval () sehr vorsichtig sein müssen und ein normales Inhaltsskript verwenden sollten, wenn Sie können.<

Bei einem Skript muss das devtools5-Dokument eine Nachricht senden, in der es aufgefordert wird, das Skript einzufügen. Die devtools.inspectedWindow\.table gibt die ID der Zielregisterkarte an:

Wenn Sie Nachrichten zwischen den im Zielfenster ausgeführten Inhaltsskripten und einem devtools-Dokument austauschen müssen, sollten Sie {{WebExtAPIRef ("runtime.connect ()")}} und {{WebExtAPIRef ("runtime.onConnect")}} verwenden, um eine Verbindung zwischen der Hintergrundseite und dem devtools-Dokument herzustellen. Die Hintergrundseite kann dann eine Zuordnung zwischen Registerkarten-IDs und {{WebExtAPIRef ("runtime.Port")}} -Objekten verwalten und diese verwenden, um Nachrichten zwischen den beiden Bereichen weiterzuleiten.

Diese APIs basieren auf den Chrome devtools-APIs, aber im Vergleich zu Chrome fehlen noch viele Funktionen. In diesem Abschnitt werden die Funktionen aufgeführt, die ab Firefox 54 noch nicht implementiert sind. Beachten Sie, dass sich die devtools-APIs in der aktiven Entwicklung befinden und wir erwarten, dass die meisten davon in zukünftigen Versionen unterstützt werden.

- ```js
  // devtools-panel.js

  const scriptToAttach = "document.body.innerHTML = 'Hi from the devtools';";

  window.addEventListener("click", () => {
    browser.runtime.sendMessage({
      tabId: browser.devtools.inspectedWindow.tabId,
      script: scriptToAttach
    });
  });
  ```

- ```js
  // background.js

  function handleMessage(request, sender, sendResponse) {
    browser.tabs.executeScript(request.tabId, {
      code: request.script
    });
  }

  browser.runtime.onMessage.addListener(handleMessage);
  ```

- ![](https://mdn.mozillademos.org/files/14923/devtools-content-scripts.png)

- ## Einschränkungen der devtools APIs

- ### devtools inspizierte Window

- Folgendes wird nicht unterstüzt
- `inspectedWindow.getResources()`
- `inspectedWindow.onResourceAdded`
- `inspectedWindow.onResourceContentCommitted`
- None of the options to `inspectedWindow.eval()` are supported.
- Scripts injected using `inspectedWindow.eval()` can't use all the Console's command-line helper functions, but `$0` and `inspect(...)` are both supported (starting from Firefox 55).

- ### devtools.panele

- The following are not supported:
- `panels.elements`
- `panels.sources`
- `panels.setOpenResourceHandler()`
- `panels.openResource()`
- `panels.ExtensionPanel.createStatusBarButton()`
- `panels.Button`
- `panels.ElementsPanel`
- `panels.SourcesPanel`

- ### Beispielsweise

- Das [webextensions-examples](https://github.com/mdn/webextensions-examples) bericht an GitHub, enthält einige Beispiele für Erweiterungen, die devtools-Panels verwenden:
- [devtools-panels](https://github.com/mdn/webextensions-examples/blob/master/devtools-panels/) benutzen Sie dentools Panels
