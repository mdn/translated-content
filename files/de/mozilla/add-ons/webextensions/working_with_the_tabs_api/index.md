---
title: Arbeiten mit Taps API
slug: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
tags:
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API
original_slug: Mozilla/Add-ons/WebExtensions/Arbeiten_mit_Taps_API
---
{{AddonSidebar}}

Tabs lassen einen Benutzer mehrere Webseiten in seinem Browserfenster öffnen und wechseln dann zwischen diesen Webseiten. Mit der Tabs API können Sie mit diesen Tabs arbeiten und diese manipulieren, um Programme zu erstellen, die Nutzern neue Möglichkeiten bieten, mit Tabs zu arbeiten oder die Funktionen Ihrer Erweiterung zu liefern.

In diesem "how-to"-Artikel schauen wir uns an:

- Berechtigungen, die für die Verwendung der Tabs API benötigt werden.
- Mehr über Tabs und ihre Eigenschaften erfahren Sie mit {{WebExtAPIRef("tabs.query")}}.
- Tabs erstellen, duplizieren, verschieben, aktualisieren, neu laden und entfernen.
- Manipulationen des Zoomniveaus eines Tab.
- Manipulationen eines Tabs CSS.

Wir schließen dann mit Blick auf einige andere, andere Funktionen, die von der API angeboten werden.

> **Hinweis:** Es gibt einige Tab-API-Funktionen, die an anderer Stelle abgedeckt sind. Dies sind die Methoden, die Sie verwenden können, um den Inhalt der Registerkarten mit Skripten zu manipulieren ({{WebExtAPIRef("tabs.connect")}}, {{WebExtAPIRef("tabs.sendMessage")}} und {{WebExtAPIRef("tabs.executeScript")}}). Wenn Sie mehr Informationen über diese Methoden wünschen, lesen Sie die [Artikelinhaltskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) Concepts und die Anleitung ändern Sie[eine Webseite](/de/docs/Mozilla/Add-ons/WebExtensions/Modify_a_web_page).

**Berechtigungen und die Tabs API**

Für die meisten Tabs API-Funktionen benötigen Sie keine Berechtigungen; Es gibt jedoch einige Ausnahmen:

- Für den Zugriff auf die Eigenschaften `Tab.url`, `Tab.title`und `Tab.favIconUrl` des Tab-Objekts ist die Erlaubnis "Tabs" erforderlich. In Firefox benötigen Sie auch "Tabs", um eine [Abfrage](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/query) per URL durchzuführen.
- [Die Host-Berechtigung](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) ist für die {{WebExtAPIRef("tabs.executeScript")}} oder {{WebExtAPIRef("tabs.insertCSS")}}. erforderlich.

Im Folgenden können Sie in der manifest.json-Datei Ihrer Erweiterung die Erlaubnis "Tabs " beantragen :

```json
"permissions": [
  "<all_urls>",
  "tabs"
],
```

Diese Anfrage gibt Ihnen die Nutzung aller Tabs API-Funktion auf allen Websites, die Ihr Nutzer besucht. Es gibt auch einen alternativen Ansatz für die Anforderung von Berechtigungen zur Verwendung von {{WebExtAPIRef("tabs.executeScript")}} or {{WebExtAPIRef("tabs.insertCSS")}}, bei dem Sie keine Host-Erlaubnis benötigen, in Form von ["activeTab"](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission). Diese Erlaubnis bietet die gleichen Rechte wie "Tabs" mit< all \_ urls >,aber mit zwei Einschränkungen:

- Der Benutzer muss mit der Erweiterung über seine Browser-oder Seiten-Aktion, Kontextmenü oder Tastenkombination interagieren.
- Es erteilt nur die Erlaubnis innerhalb der aktiven Registerkarte.

Der Vorteil dieses Ansatzes ist, dass der Benutzer keine Berechtigung erhält, die besagt, dass Ihre Erweiterung "Zugriff auf Ihre Daten für alle Websites" kann. Das liegt daran , dass < all \_ urls > Erlaubnis einer Erweiterung die Möglichkeit gibt, Skripte in jedem Tab auszuführen, zu jeder Zeit, die sie mag, während ["activeTab"](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission) darauf beschränkt ist, der Erweiterung zu erlauben, eine vom Benutzer angeforderte Aktion in der Aktuelle Registerkarte.

**Mehr über Tabs und ihre Eigenschaften entdecken**

Es wird Gelegenheiten geben, in denen Sie eine Liste aller Tabs in allen Browser-Fenstern erhalten wollen. Zu anderen Zeiten möchten Sie vielleicht eine Untergruppe von Tabs finden, die bestimmten Kriterien entsprechen, wie zum Beispiel solchen, die von einem bestimmten Tab geöffnet werden oder Seiten aus einer bestimmten Domain anzeigen. Und wenn Sie Ihre Liste der Tabs haben, werden Sie wahrscheinlich mehr über ihre Eigenschaften wissen wollen.

Hier kommt die {{WebExtAPIRef("tabs.query")}} in den Fall. Wird allein verwendet, um alle Tabs zu erhalten oder das queryInfo-Objekt zu nehmen —, um Abfragekriterien anzugeben, wie zum Beispiel, ob die Registerkarte im aktuellen Fenster aktiv ist, oder eines oder mehrere von 17 Kriterien — {{WebExtAPIRef("tabs.query")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}} Objekte, die Informationen über die Registerkarten enthalten.

Wenn Sie nur Informationen über den aktuellen Reiter wünschen, können Sie eine {{WebExtAPIRef("tabs.Tab")}} erhalten. Objekt für diese Registerkarte mit {{WebExtAPIRef("tabs.getCurrent")}}. Wenn Sie eine Tab-ID haben, können Sie die {{WebExtAPIRef("tabs.Tab")}} Objekt mit {{WebExtAPIRef("tabs.get")}}.

> **Note:** **notiz:\*** **In Chrome** kann der Benutzer mehrere Tabs in einem Fenster auswählen, und die Tabs API sieht diese als hervorgehobene Tabs.
>
> - **In Firefox** kann der Benutzer mehrere Tabs nicht auswählen, daher sind "hervorgehoben" und "aktiv" synonym.

### Wie man mit dem Beispiel geht

Um zu sehen, wie {{WebExtAPIRef("tabs.query")}} und {{WebExtAPIRef("tabs.Tab")}} werden verwendet, lassen Sie uns durch, wie das [Tabs-Tabs-Tabs](https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs)Beispiel fügt die Liste von" Schalter auf Tabs "zu seiner Toolbar-Taste Popup.

[![](https://mdn.mozillademos.org/files/15723/Switch_to_tab.png)](https://mdn.mozillademos.org/files/15723/Switch_to_tab.png)

### manifest.json

Hier ist das [manifest.json](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/manifest.json):

```json
{
  "browser_action": {
    "browser_style": true,
    "default_title": "Tabs, tabs, tabs",
    "default_popup": "tabs.html"
  },
  "description": "A list of methods you can perform on a tab.",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs",
  "manifest_version": 2,
  "name": "Tabs, tabs, tabs",
  "permissions": [
    "tabs"
  ],
  "version": "1.0"
}
```

> **Hinweis:** **Tabs.html wird als Standard Popup in** browser **action** definiert. Es wird angezeigt, wenn der Benutzer auf das Symbollei-Symbol der Erweiterung klickt.
>
> - **Die Berechtigungen beinhalten Registerkarten.** Dies ist notwendig, um die Tabelliste zu unterstützen, da die Erweiterung den Titel der Registerkarten für die Anzeige im Popup liest.

### Tabs.html

Tabs.html definiert den Inhalt des Popups der Erweiterung:

```html
<!DOCTYPE html>

<html>

 <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="tabs.css"/>
 </head>

<body>

 <div class="panel">
    <div class="panel-section panel-section-header">
     <div class="text-section-header">Tabs-tabs-tabs</div>
    </div>

    <a href="#" id="tabs-move-beginning">Move active tab to the beginning of the window</a><br>


…

Define the other menu items
…

    <div class="switch-tabs">

     <p>Switch to tab</p>

     <div id="tabs-list"></div>

    </div>
 </div>

 <script src="tabs.js"></script>

</body>

</html>
```

Hier ist eine Zusammenfassung der oben genannten tut:

1. Die Menüpunkte werden deklariert.
2. Ein leerer `Div`mit der ID-`Tabs-Liste` wird deklariert, um die Liste der Tabs zu enthalten.
3. Tabs.js heißt.

### Tabs.js

In [tabs.js](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.js)werdenwir sehen, wie die Liste der Tabs aufgebaut und zum Popup hinzugefügt wird.

**Das Popup schaffen**

Zunächst wird ein Event-Handler hinzugefügt, um ListTabs () auszuführen , wenn tabs.html geladen wird:

    document.addEventListener ("DOMContentLoaded", hört Tabs);

Das erste, was `listTabs ()` tut, ist `getCurrentWindowTabs ()`zu nennen. Hier wird ein {{WebExtAPIRef("tabs.query")}} verwendet, um eine {{WebExtAPIRef("tabs.Tab")}} zu erhalten. Objekt für die Tabs im aktuellen Fenster:

```js
function getCurrentWindowTabs() {
  return browser.tabs.query({currentWindow: true});
}
```

Jetzt ist `listTabs()` bereit , den Inhalt für das Popup zu erstellen.

Zunächst:

1. Schnappen Sie sich die `tabs-list div`.
2. Erstellen Sie ein Dokumentenfragment (in das die Liste eingebaut wird).
3. Setzen Sie Zähler.
4. Klären Sie den Inhalt der `Tabs-Liste div`.

```js
function listTabs() {
 getCurrentWindowTabs().then((tabs) => {
    let tabsList = document.getElementById('tabs-list');
    let currentTabs = document.createDocumentFragment();
    let limit = 5;
    let counter = 0;

    tabsList.textContent = '';
```

Als nächstes werden wir die Links für jeden Tab erstellen:

1. Schleifen Sie sich durch die ersten 5 Elemente aus der {{WebExtAPIRef("tabs.Tab")}} Objekt.
2. Fügen Sie für jeden Artikel einen Hyperlink zum Dokumentenfragment hinzu.

    - Das Etikett des Links — das heißt, sein Text — wird mit dem Titel des Tab gesetzt (oder mit der ID, wenn er keinen Titel hat).
    - Die Adresse des Links wird mit der Personalausweis des Tabs gesetzt.

```js
 for (let tab of tabs) {
     if (!tab.active && counter <= limit) {
        let tabLink = document.createElement('a');

        tabLink.textContent = tab.title || tab.id;

       tabLink.setAttribute('href', tab.id);
        tabLink.classList.add('switch-tabs');
        currentTabs.appendChild(tabLink);
     }

     counter += 1;

    }
```

Schließlich wird das Dokumentenfragment auf die Tabs-Liste div geschrieben:

```js
  tabsList.appendChild(currentTabs);
  });
}
```

**Arbeiten mit dem aktiven Reiter**

Ein weiteres verwandtes Beispielmerkmal ist die Info-Option "Alert active tab", die alle Registerkarten \[{WebExtAPIRef ("-Register) ablegt. Tab ")} Objekteigenschaften für die aktive Registerkarte in einen Alarm:

```js
 else if (e.target.id === "tabs-alertinfo") {
   callOnActiveTab((tab) => {
     let props = "";
     for (let item in tab) {
       props += `${ item } = ${ tab[item] } \n`;
     }
     alert(props);
   });
 }
```

Wobei `callOnActiveTab()`das aktive Tab-Objekt findet, indem man sich durch die Registerkarten {{WebExtAPIRef("tabs.Tab")}} schlodert. Tab ")} Objekte, die nach dem Gegenstand mit aktivem Satz suchen:

```js
document.addEventListener("click", function(e) {
 function callOnActiveTab(callback) {
   getCurrentWindowTabs().then((tabs) => {
     for (var tab of tabs) {
       if (tab.active) {
         callback(tab, tabs);
       }
     }
   });
 }
}
```

**Tabs erstellen, duplizieren, verschieben, aktualisieren, neu laden und entfernen**

Nachdem Sie Informationen über die Registerkarten gesammelt haben, werden Sie höchstwahrscheinlich etwas mit ihnen machen wollen — entweder den Benutzern Funktionen für die Manipulation und Verwaltung von Registern bieten oder Funktionen in Ihrer Erweiterung implementieren.

Folgende Funktionen stehen zur Verfügung:

- Erstellen Sie eine neue Registerkarte ({{WebExtAPIRef("tabs.create")}}).
- Duplizieren sie eine neue Registerkarte ({{WebExtAPIRef("tabs.duplicate")}}).
- Entfernen Sie eine Registerkarte ({{WebExtAPIRef("tabs.remove")}}).
- Verschieben Sie eine Registerkarte ({{WebExtAPIRef("tabs.move")}}).
- Aktualisieren Sie die URL der Registerkarte, um — effektiv auf eine neue Seite — ({{WebExtAPIRef("tabs.update")}}).
- Die Seite der Registerkarte neu Laden ({{WebExtAPIRef("tabs.reload")}}).

> **Note:** **notiz:**Diese Funktionen erfordern alle die ID (oder IDs) der Registerkarte, die sie manipulieren:\* {{WebExtAPIRef ("tabs.duplicate")}}
>
> - {{WebExtAPIRef("tabs.remove")}})
> - {{WebExtAPIRef ("tabs.move")}}Während die folgenden Funktionen auf dem aktiven Tab (sofern keine Tab-ID zur Verfügung gestellt wird) wirken:\* {{WebExtAPIRef("tabs.update")}}
> - {{WebExtAPIRef("tabs.reload")}}

**Wie man mit dem Beispiel geht**

Das Beispiel [Tabs-Tabs](https://github.com/mdn/webextensions-examples/tree/master/tabs-tabs-tabs) übt all diese Funktionen aus, bis hin zur Aktualisierung der URL eines Tabs. Die Art und Weise, in der diese APIs verwendet werden, ist ähnlich, so dass wir uns eine der am meisten involvierten Implementierungen ansehen werden, die des "Move active tab to the beginning of the the. Option "Option der Fensterliste.

Aber zunächst ist hier eine Demonstration des Features in Aktion:

{{EmbedYouTube("-lJRzTIvhxo")}}

[**manifest.json**](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/manifest.json)

Keine der Funktionen benötigt eine Betriebsgenehmigung, so dass es keine Funktionen in der manifest.json-Datei gibt, die hervorgehoben werden müssen.

[**Tabs.html**](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.html)

Tabs.html definiert das "Menü", das im Popup angezeigt wird, das die Option "Aktive Registerkarte zum Anfang der Fensterliste verschieben" enthält, mit einer Reihe von` <a> `Tags, die von einem visuellen Separator gruppiert sind. Jeder Menüpunkt erhält eine ID, die in tabs.js verwendet wird, um festzustellen, welcher Menüpunkt angefordert wird.

```html
  <a href="#" id="tabs-move-beginning">Move active tab to the beginning of the window</a><br>
    <a href="#" id="tabs-move-end">Move active tab to the end of the window</a><br>

    <div class="panel-section-separator"></div>


    <a href="#" id="tabs-duplicate">Duplicate active tab</a><br>

    <a href="#" id="tabs-reload">Reload active tab</a><br>
    <a href="#" id="tabs-alertinfo">Alert active tab info</a><br>
```

[**Tabs.js**](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.js)

Um das in tabs.html definierte "Menü" zu implementieren, enthält tabs.js einen Hörer für Klicks in tabs.html:

```js
document.addEventListener("click", function(e) {
 function callOnActiveTab(callback) {

   getCurrentWindowTabs().then((tabs) => {
     for (var tab of tabs) {
       if (tab.active) {
         callback(tab, tabs);
       }
     }
   });
}
}
```

Eine Reihe von `if`Anweisungen dann schauen, um die ID des Artikels geklickt.

Dieser Code-Snippet ist für die Option "Aktive Registerkarte zum Anfang der Fensterliste verschieben":

```js
 if (e.target.id === "tabs-move-beginning") {
   callOnActiveTab((tab, tabs) => {
     var index = 0;
     if (!tab.pinned) {
       index = firstUnpinnedTab(tabs);
     }
     console.log(`moving ${tab.id} to ${index}`)
     browser.tabs.move([tab.id], {index});
   });
 }
```

Es ist erwähnenswert, die Verwendung von `console.log ()`. Auf diese Weise können Sie Informationen an die [Debugger-Konsole](/de/docs/Mozilla/Add-ons/WebExtensions/Debugging) ausgeben , was bei der Lösung von Problemen, die während der Entwicklung gefunden wurden, nützlich sein kann.

![](https://mdn.mozillademos.org/files/15722/console.png)

Der Bewegungscode ruft zunächst `callOnActiveTab ()` an , der wiederum `getCurrentWindowTabs ()` anruft, um eine {{WebExtAPIRef("tabs.Tab")}} Objekt, das die Registerkarten des aktiven Fensters enthält. Es schleift sich dann durch das Objekt, um das aktive Tab-Objekt zu finden und zurückzugeben:

```js
function callOnActiveTab(callback) {
   getCurrentWindowTabs().then((tabs) => {
     for (var tab of tabs) {
       if (tab.active) {
         callback(tab, tabs);
       }
     }
   });
 }
```

**Gepinnte Tabs**

Eine Besonderheit von Registern ist, dass der Benutzer Tabs in ein Fenster einfügen kann. Gepinnte Tabs werden am Anfang der Tab-Liste platziert und können nicht verschoben werden. Das bedeutet, dass die früheste Position, in die sich ein Tab bewegen kann, die erste Position nach einem gefiederten Tabs ist. Also , `firstUnpinnedTab ()` wird aufgerufen, um die Position des ersten ungepasten Tab zu finden, indem man durch das `Tabs`-Objekt Looping:

```js
function firstUnpinnedTab(tabs) {
 for (var tab of tabs) {
   if (!tab.pinned) {
     return tab.index;
   }
 }
}
```

Wir haben jetzt alles, was zum Verschieben des Tab notwendig ist: Das aktive Tab-Objekt, von dem wir die Reiter-ID erhalten können und die Position, in die der Reiter verschoben werden soll. So können wir den Schritt umsetzen:

    browser.tabs.move ([tab.id], {index});

Die restlichen Funktionen zum Duplizieren, Laden, Erstellen und Entfernen von Tabs werden ähnlich implementiert.

#### Manipulationen eines Tab

Die nächste Reihe von Funktionen ermöglicht es Ihnen, die Zoomstufe in einem Tab zu erhalten ({{WebExtAPIRef("tabs.getZoom")}}) und zu setzen ({{WebExtAPIRef("tabs.setZoom")}}) . Sie können auch die Zoom-Einstellungen abrufen ({{WebExtAPIRef("tabs.getZoomSettings")}}) , aber zum Zeitpunkt des Schreibens war die Möglichkeit, die Einstellungen zu setzen ({{WebExtAPIRef("tabs.setZoomSettings")}}) , war in Firefox nicht verfügbar.

Der Zoomwert kann zwischen 30% und 300% liegen (dargestellt als Dezimalzahl `0,3 bis 3`).

In Firefox sind die Standard-Zoom-Einstellungen:

- **Standard-Zoom-Level:** 100%.
- **Zoommodus:** Automatik (so verwaltet der Browser, wie Zoomstufen gesetzt werden).
- **Umfang der Zoomwechsel** : "pro-origin",was bedeutet, dass, wenn Sie eine Website wieder besuchen, es die Zoomstufe, die in Ihrem letzten Besuch eingestellt wird, benötigt.

### Wie man mit dem Beispiel geht

Das Beispiel der Tabs-Tabs-Tabs enthält drei Vorführungen der Zoom-Funktion: Zoomen, Zoomen und Zoom zurücksetzen. Hier ist das Feature in Aktion:

{{EmbedYouTube("RFr3oYBCg28")}}

Schauen wir uns an, wie der Zoom-In umgesetzt wird.

[**manifest.json**](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/manifest.json)

Keine der Zoom-Funktionen benötigt Berechtigungen, so dass es keine Funktionen in der manifest.json-Datei gibt, die hervorgehoben werden müssen.

[**Tabs.html**](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.html)

Wir haben bereits darüber diskutiert, wie der tabs.html die Optionen für diese Erweiterung definiert, nichts Neues oder Einzigartiges wird getan, um die Zoom-Optionen zur Verfügung zu stellen.

[**Tabs.js**](https://github.com/mdn/webextensions-examples/blob/master/tabs-tabs-tabs/tabs.js)

Tabs.js beginnt mit der Definition mehrerer Konstanten, die im Zoom-Code verwendet werden:

```js
const ZOOM_INCREMENT = 0.2;
const MAX_ZOOM = 3;
const MIN_ZOOM = 0.3;
const DEFAULT_ZOOM = 1;
```

Es verwendet dann den gleichen Hörer, den wir zuvor besprochen haben, so dass es auf Klicks in tabs.html wirken kann.

Für den Zoom in der Funktion läuft das:

```js
else if (e.target.id === "tabs-add-zoom") {
   callOnActiveTab((tab) => {
     var gettingZoom = browser.tabs.getZoom(tab.id);
     gettingZoom.then((zoomFactor) => {
       //the maximum zoomFactor is 3, it can't go higher
       if (zoomFactor >= MAX_ZOOM) {
         alert("Tab zoom factor is already at max!");
       } else {
         var newZoomFactor = zoomFactor + ZOOM_INCREMENT;
         //if the newZoomFactor is set to higher than the max accepted
         //it won't change, and will never alert that it's at maximum
         newZoomFactor = newZoomFactor > MAX_ZOOM ? MAX_ZOOM : newZoomFactor;
         browser.tabs.setZoom(tab.id, newZoomFactor);
       }
     });
   });
 }
```

Dieser Code verwendet `callOnActiveTab ()` , um die Details des aktiven Tab zu erhalten, dann wird {{WebExtAPIRef("tabs.getZoom")}} den aktuellen Zoom-Faktor der Registerkarte erhalten. Der aktuelle Zoom wird mit dem definierten Maximum (MAX \_ ZOOM)und einem Alarm verglichen, der ausgegeben wird, wenn sich der Tab bereits im Maximalzoom befindet. Andernfalls wird der Zoom-Level erhöht, aber auf den maximalen Zoom beschränkt, dann wird der Zoom mit {{WebExtAPIRef("tabs.getZoom")}}. gesetzt .

#### Manipulationen eines Tabs CSS

Eine weitere wichtige Fähigkeit, die die Tabs API bietet, ist die Möglichkeit, die CSS innerhalb eines Tab zu manipulieren.

Dies kann zum Beispiel nützlich sein, wenn Sie bestimmte Seitenelemente markieren oder das Standardlayout der Seite ändern wollen.

### Wie man mit dem Beispiel geht

Das [Apply-css-Beispiel](https://github.com/mdn/webextensions-examples/tree/master/apply-css) nutzt diese Funktionen, um der Webseite im aktiven Tab einen roten Rand hinzuzufügen. Hier ist das Feature in Aktion:

{{EmbedYouTube ("bcK-GT2Dyhs")}}

Gehen wir durch, wie es aufgebaut ist.

[**manifest.json**](https://github.com/mdn/webextensions-examples/blob/master/apply-css/manifest.json)

Um die CSS-Funktionen nutzen zu können, benötigen Sie entweder:

- `"Tabs "` -Erlaubnis und [Host-Erlaubnis](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/permissions#Host_permissions) oder
- `"activeTab"`-Erlaubnis .

Letzteres ist das nützlichste, da es einer Erweiterung erlaubt, {{WebExtAPIRef("tabs.insertCSS")}} und {{WebExtAPIRef("tabs.removeCSS")}} in der aktiven Registerkarte zu verwenden, wenn sie von der Browser-oder Seitenaktion, dem Kontextmenü oder einem Shortcut der Erweiterung ausgeführt wird.

```json
{
  "description": "Adds a page action to toggle applying CSS to pages.",

 "manifest_version": 2,
 "name": "apply-css",
 "version": "1.0",
 "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/apply-css",

 "background": {

    "scripts": ["background.js"]
 },

 "page_action": {

    "default_icon": "icons/off.svg",
    "browser_style": true
 },

 "permissions": [
    "activeTab",
    "tabs"
 ]

}
```

Sie werden darauf hinweisen, dass zusätzlich zu "`activeTab`" die Erlaubnis " Tabs"angefordert wird. Diese zusätzliche Erlaubnis ist erforderlich, um das Skript der Erweiterung in die Lage zu versetzen, auf die URL des Registers zuzugreifen, deren Bedeutung wir gleich sehen werden.

Die anderen Hauptmerkmale in der manifest.json-Datei sind die Definition von:

- **Ein Hintergrundskript**, das gestartet wird, sobald die Erweiterung geladen wird.
- **Eine "Seitenaktion**", die ein Symbol definiert, das in die Adressleiste des Browsers aufgenommen werden soll.

[**Background.js**](https://github.com/mdn/webextensions-examples/blob/master/apply-css/background.js)

Beim Start setzt background.js einige Konstanten, um die zu bewendenden CSS zu definieren, Titel für die "Seitenaktion", und eine Liste von Protokollen, in denen die Erweiterung funktioniert:

```js
const CSS = "body { border: 20px solid red; }";
const TITLE_APPLY = "Apply CSS";
const TITLE_REMOVE = "Remove CSS";
const APPLICABLE_PROTOCOLS = ["http:", "https:"];
```

Wenn die Erweiterung zum ersten Mal geladen wird, verwendet sie {{WebExtAPIRef("tabs.query")}}, um eine Liste aller Tabs im aktuellen Browserfenster zu erhalten. Es schleit sich dann durch die Tabs, die `InitializePageAction()`rufen.

```js
var gettingAllTabs = browser.tabs.query({});

gettingAllTabs.then((tabs) => {
 for (let tab of tabs) {
   initializePageAction(tab);
 }
});
```

`InitializePageAction` verwendet protokolIsApplicable () , um festzustellen, ob die URL der aktiven Registerkarte eine ist, auf die die CSS angewendet werden kann:

```js
function protocolIsApplicable(url) {
 var anchor =  document.createElement('a');
 anchor.href = url;
 return APPLICABLE_PROTOCOLS.includes(anchor.protocol);
}
```

Wenn das Beispiel dann auf der Registerkarte wirken kann, setzt `initializePageAction ()` das `PageAction`-Symbol und den Titel des Tab, um die "Off"-Versionen zu verwenden, bevor die `PageAction`-Version sichtbar gemacht wird:

```js
function initializePageAction(tab) {

 if (protocolIsApplicable(tab.url)) {
   browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
   browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
   browser.pageAction.show(tab.id);
 }
}
```

Als Nächstes wartet ein Zuhörer auf der `pageAction.onClicked` darauf, dass das `PageAction`-Symbol angeklickt wird , und ruft toggleCSS an , wenn es ist.

    browser.pageAction.onClicked.addListener (toggleCSS);

`ToggleCSS ()` erhält den Titel der `PageAction` und nimmt dann die beschriebene Aktion auf:

- **Für "Apply CSS":**

  - Das `PageAction`-Symbol und den Titel in die "Entfernen"-Versionen.
  - Es ist eine sehr gut. {{WebExtAPIRef("tabs.insertCSS")}}.

- **Für "Remove CSS":**

  - Das `PageAction`-Symbol und den Titel in die "Anwendung"-Versionen.
  - Entfernt die CSS mit {{WebExtAPIRef("tabs.removeCSS")}}.

```js
function toggleCSS(tab) {


 function gotTitle(title) {

    if (title === TITLE_APPLY) {
     browser.pageAction.setIcon({tabId: tab.id, path: "icons/on.svg"});
     browser.pageAction.setTitle({tabId: tab.id, title: TITLE_REMOVE});
     browser.tabs.insertCSS({code: CSS});
    } else {
     browser.pageAction.setIcon({tabId: tab.id, path: "icons/off.svg"});
     browser.pageAction.setTitle({tabId: tab.id, title: TITLE_APPLY});
     browser.tabs.removeCSS({code: CSS});
    }
 }

 var gettingTitle = browser.pageAction.getTitle({tabId: tab.id});

 gettingTitle.then(gotTitle);
}
```

Um sicherzustellen, dass die PageAction nach jedem Update auf den Tab gültig ist, ruft ein Zuhörer auf {{WebExtAPIRef("tabs.onUpdated")}} jedes Mal, wenn der Tab aktualisiert wird, auf initializePageAction () , um zu überprüfen, ob der Reiter immer noch ein Protokoll, auf das das CSS angewendet werden kann.

```js
browser.tabs.onUpdated.addListener((id, changeInfo, tab) => {
 initializePageAction(tab);
});
```

#### Einige weitere interessante Fähigkeiten

Es gibt noch ein paar andere Tabs API-Funktionen, die nicht in einen der früheren Abschnitte passen:

- Erfassen Sie den sichtbaren Tab-Inhalt mit {{WebExtAPIRef("tabs.captureVisibleTab")}}.
- Erkennen Sie die Hauptsprache des Inhalts in einem Tab mit {{WebExtAPIRef("tabs.detectLanguage")}} . Dies könnte zum Beispiel verwendet werden, um die Sprache in Ihrem UI mit der Seite, in der sie läuft, zu vergleichen.

**Weitere Informationen**

Wenn Sie mehr über die Tabs API erfahren möchten, schauen Sie sich an:

- [Tabs API-Referenz](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/tabs)
- [Beispielerweiterungen](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Examples) (von denen viele die Tabs API verwenden)
