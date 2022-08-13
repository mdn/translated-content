---
title: Deine zweite Erweiterung
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
translation_of: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
original_slug: Mozilla/Add-ons/WebExtensions/Deine_zweite_Erweiterung
---
{{AddonSidebar}}

Wenn du den Artikel "[Deine erste Erweiterung](https://developer.mozilla.org/de/Add-ons/WebExtensions/Deine_erste_WebErweiterung)" gelesen hast, hast du schon eine Vorstellung, wie man eine Erweiterung schreibt. In diesem Artikel werden wir eine komplexere Erweiterung schreiben, die mehr APIs benutzt.

Die Erweiterung fügt eine neue Schaltfläche zu Firefox hinzu. Wenn der Nutzer diese anklickt, wird ihm ein Popup angezeigt auf dem er ein Tier auswählen kann. Sobald er eines ausgewählt hat, wird der aktulle Inhalt der Website mit dem Bild des ausgewählten Tieres ersetzt.

Um das zu implementieren werden wir:

- **eine [Browser-Aktion](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/user_interface/Browser_action) definieren, die zur Firefox-Toolbar hinzugefügt werden wird.**
  Für die Schaltfläche benötigen wir:

  - ein Icon namens "beasts-32.png"
  - Ein Popup welches sich öffnet, sobald der Nutzer auf die Schaltfläche klickt. Das Popup wird [HTML](/de/docs/Glossary/HTML), [CSS](/de/docs/Glossary/CSS), und [JavaScript](/de/docs/Glossary/JavaScript) beinhalten.

- **ein Icon festlegen**, genannt "beasts-48.png". Dieses wird im Addon-Manager angezeigt werden.
- **Ein content-script "beastify.js" schreiben, welches auf Webseiten angezeigt werden wird.**
  Das ist der Code, der letztendlich die Webseite verändert.
- **Einige Tier-Bilder einfügen, um die Bilder auf der Webseite zu ersetzen**
  Die Bilder werden "web-abrufbare Ressourcen" werden, sodass die Webseite sie abrufen kann.

Man kann die Struktur der Erweiterung wie folgt darstellen:

![](https://mdn.mozillademos.org/files/13671/Untitled-1.png)

Es ist eine einfache Erweiterung, aber es zeigt viele der Grundkonzepte der WebExtensions API:

- Hinzufügen einer Schaltfläche zur Toolbar
- Erstellen eines Popup-Menüs mit HTML, CSS, und JavaScript
- Verändern des Webseiteninhalts
- Kommunikation zwischen dem content-script und dem Rest der Erweiterung
- Verpacken von Ressourcen, die später auf der Webseite genutzt werden können.

Der [komplette Quellcode der Erweiterung](https://github.com/mdn/webextensions-examples/tree/master/beastify) ist auf GitHub zu finden.

Um die Erweiterung zu erstellen, brauchst du mindestens Firefox 45.

## Die Erweiterung schreiben

Erstelle einen neuen Ordner und öffne ihn:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Erstelle jetzt eine Datei namens "manifest.json" und füge den folgenden Inhalt ein:

```json
{

  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Erstellt eine Schaltfläche in der Toolbar. Klicke auf eine der Schaltflächen, um ein Tier auszuwählen. Der Inhalt des gerade geöffneten Tabs wird dann mit dem Bild des ausgewählten Tieres ersetzt. Nachschlagen: https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": [
    "activeTab"
  ],

  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Beastify",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]

}
```

- Die ersten drei Eigenschaften [`manifest_version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version), [`name`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name), und [`version`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) sind erforderlich und enthalten Basismetadaten.
- [`description`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) und [`homepage_url`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) sind optional aber empfohlen, sie erhalten nützliche Informationen.
- [`icons`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) ist optional aber empfohlen, hier kannst du ein Icon festlegen, welches im Addon-Manager angezeigt werden wird.
- [`permissions`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) listet die Berechtigungen auf, die die Erweiterung benötigt. Hier brauchen wir nur die [activeTab Berechtigung](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission).
- [`browser_action`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) spezifiziert die Schaltfläche. Hier übergeben wir drei Informationen:

  - `default_icon` ist notwendig, und gibt das Icon der Schaltfläche an
  - `default_title` ist optional und wird unter dem Icon angezeigt
  - `default_popup` wird verwendet, wenn ein Popup angezeigt werden soll, sobald der Nutzer auf die Schaltfläche klickt. Das soll so sein, deshalb wird hier die Eigenschaft mit einer HTML-Datei belegt.

- [`web_accessible_resources`](/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) listet die Dateien auf, die auf Webseiten verwendet werden solllen. Weil die Erweiterung den Inhalt der Webseite mit den Bilder, die der Erweiterung hinzugefügt wurden, verändern soll, müssen die Bilder hier aufgelistet werden.

Beachte, dass alle Pfade relativ zur manifest.json angegeben werden.

### Das Icon

Die Erweiterung soll ein Icon beinhalten, das neben dem Eintrag der Erweiterung in der Add-ons-Verwaltung angezeigt wird (diese kannst du durch Aufrufen der URL "about:addons" öffnen). In manifest.json haben wir festgelegt, dass wir ein Icon für die Toolbar unter "icons/beasts-48.png" bereitstellen.

Erstelle das "icons"-Verzeichnis and speichere dort das Icon namens "beasts-48.png". Du kannst das [Icon aus unserem Beispiel](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-48.png) verwenden, welches aus dem [Aha-Soft’s Free Retina Icon-Set](https://www.iconfinder.com/iconsets/free-retina-icon-set) stammt und gemäß seiner [Lizenzbestimmungen](http://www.aha-soft.com/free-icons/free-retina-icon-set/) genutzt wird.

Wenn du dich entscheidest, ein eigenes Icon zu verwenden, sollte es eine Auflösung von 48x48 Pixeln besitzen. Zusätzlich kannst du ein 96x96 Pixel großes Icon für hochaufgelöste Bildschirme bereitstellen. In diesem Fall wird es unter der Eigenschaft `96` des `icons` Objekts in manifest.json aufgeführt:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### Die Toolbar-Schaltfläche

Die Toolbar-Schaltfläche benötigt ebenfalls ein Icon, das laut unserer manifest.json unter "icons/beasts-32.png" bereitsteht.

Speichere ein Icon namens "beasts-32.png" im Verzeichnis "icons".Du kannst das [Icon aus unserem Beispiel](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png) verwenden, welches aus dem [IconBeast Lite Icon-Set](http://www.iconbeast.com/free) stammt und gemäß seiner [Lizenzbestimmungen](http://www.iconbeast.com/faq/) genutzt wird.

Wenn du kein Popup einsetzt, dann wird ein Klick-Event zur Erweiterung gesendet, sobald der Benutzer die Schaltfläche anklickt. Wenn du hingegen ein Popup einsetzt, wird dieses Klick-Event nicht gesendet, sondern das Popup wird geöffnet. Da wir ein Popup verwenden wollen, soll dieses im nächsten Schritt erstellt werden.

### Das Popup

Mithilfe des Popups soll der Benutzer eines von drei Tieren auswählen können.

Erstelle ein neues Verzeichnis namens "popup" in der obersten Ebene des Erweiterungsverzeichnisses. Dieses Verzeichnis wird den Code für das Popup enthalten. Das Popup besteht aus drei Dateien:

- **`choose_beast.html`** legt den Inhalt des Fensters fest
- **`choose_beast.css`** legt das Styling des Fensters fest
- **`choose_beast.js`** verarbeitet die Auswahl des Benutzers, indem es im aktiven Tab ein Content Script ausführt

#### choose_beast.html

Die HTML-Datei sieht folgendermaßen aus:

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="choose_beast.css"/>
  </head>

  <body>
    <div class="button beast">Frog</div>
    <div class="button beast">Turtle</div>
    <div class="button beast">Snake</div>
    <div class="button clear">Reset</div>

    <script src="choose_beast.js"></script>
  </body>

</html>
```

Es gibt ein Element für jedes Tier. Beachte, dass in dieser Datei auch die CSS- und JavaScript-Dateien verlinkt werden, genau wie auf einer Website.

#### choose_beast.css

Die CSS-Datei legt die Größe des Popups fest, stellt sicher, dass die drei Auswahlmöglichkeiten, den verfügbaren Platz ausfüllen und legt das grundlegende Styling fest:

```css
html, body {
  width: 100px;
}

.button {
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
}

.beast:hover {
  background-color: #CFF2F2;
}

.beast {
 background-color: #E5F2F2;
}

.clear {
 background-color: #FBFBC9;
}

.clear:hover {
 background-color: #EAEAC9;
}
```

#### choose_beast.js

In der JavaScript-Datei des Popups empfangen wir Klick-Events. Wenn ein Klick auf eines der Tiere erfolgte, wird das Content Script zum aktiven Tab hinzugefügt. Sobald das Content Script geladen wird, übergeben wir ihm eine Nachricht mit der Auswahl des Tieres:

```js
/*
Given the name of a beast, get the URL to the corresponding image.
*/
function beastNameToURL(beastName) {
  switch (beastName) {
    case "Frog":
      return browser.extension.getURL("beasts/frog.jpg");
    case "Snake":
      return browser.extension.getURL("beasts/snake.jpg");
    case "Turtle":
      return browser.extension.getURL("beasts/turtle.jpg");
  }
}

/*
Listen for clicks in the popup.

If the click is on one of the beasts:
  Inject the "beastify.js" content script in the active tab.

  Then get the active tab and send "beastify.js" a message
  containing the URL to the chosen beast's image.

If it's on a button which contains class "clear":
  Reload the page.
  Close the popup. This is needed, as the content script malfunctions after page reloads.
*/

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("beast")) {
    var chosenBeast = e.target.textContent;
    var chosenBeastURL = beastNameToURL(chosenBeast);

    browser.tabs.executeScript(null, {
      file: "/content_scripts/beastify.js"
    });

    var gettingActiveTab = browser.tabs.query({active: true, currentWindow: true});
    gettingActiveTab.then((tabs) => {
      browser.tabs.sendMessage(tabs[0].id, {beastURL: chosenBeastURL});
    });
  }
  else if (e.target.classList.contains("clear")) {
    browser.tabs.reload();
    window.close();
  }
});
```

It uses three WebExtensions API functions:

- [`browser.tabs.executeScript`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript) to inject a content script found at "content_scripts/beastify.js" into the active tab
- [`browser.tabs.query`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) to get the active tab
- [`browser.tabs.sendMessage`](/en-US/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage) to send a message to content scripts running in the active tab. The message contains the URL to an image of the chosen beast.

### The content script

Create a new directory, under the extension root, called "content_scripts" and create a new file in it called "beastify.js", with the following contents:

```js
/*
beastify():
* removes every node in the document.body,
* then inserts the chosen beast
* then removes itself as a listener
*/
function beastify(request, sender, sendResponse) {
  removeEverything();
  insertBeast(request.beastURL);
  browser.runtime.onMessage.removeListener(beastify);
}

/*
Remove every node under document.body
*/
function removeEverything() {
  while (document.body.firstChild) {
    document.body.firstChild.remove();
  }
}

/*
Given a URL to a beast image, create and style an IMG node pointing to
that image, then insert the node into the document.
*/
function insertBeast(beastURL) {
  var beastImage = document.createElement("img");
  beastImage.setAttribute("src", beastURL);
  beastImage.setAttribute("style", "width: 100vw");
  beastImage.setAttribute("style", "height: 100vh");
  document.body.appendChild(beastImage);
}

/*
Assign beastify() as a listener for messages from the extension.
*/
browser.runtime.onMessage.addListener(beastify);
```

The content script adds a listener to messages from the extension (specifically, from "choose_beast.js" above). In the listener, it:

- removes every element in the `document.body`
- creates an `<img>` element pointing to the given URL, and inserts it into the DOM
- removes the message listener.

### The beasts

Finally, we need to include the images of the animals.

Create a new directory called "beasts", and add the three images in that directory, with the appropriate names. You can get the images from [the GitHub repository](https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts), or from here:

![](https://mdn.mozillademos.org/files/11459/frog.jpg)![](https://mdn.mozillademos.org/files/11461/snake.jpg)![](https://mdn.mozillademos.org/files/11463/turtle.jpg)

## Testing it out

First, double check that you have the right files in the right places:

    beastify/

        beasts/
            frog.jpg
            snake.jpg
            turtle.jpg

        content_scripts/
            beastify.js

        icons/
            beasts-32.png
            beasts-48.png

        popup/
            choose_beast.css
            choose_beast.html
            choose_beast.js

        manifest.json

Starting in Firefox 45, you can install extensions temporarily from disk.

Open "about:debugging" in Firefox, click "Load Temporary Add-on", and select your manifest.json file. You should then see the extension's icon appear in the Firefox toolbar:

{{EmbedYouTube("sAM78GU4P34")}}

Open a web page, then click the icon, select a beast, and see the web page change:

{{EmbedYouTube("YMQXyAQSiE8")}}

## Developing from the command line

You can automate the temporary installation step by using the [web-ext](/en-US/Add-ons/WebExtensions/Getting_started_with_web-ext) tool. Try this:

```bash
cd beastify
web-ext run
```
