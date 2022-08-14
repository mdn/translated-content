---
title: Aufbau einer WebExtension
slug: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
translation_of: Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension
---
{{AddonSidebar}}

Eine Extension (Erweiterung) beinhaltet eine Sammlung von Dateien, gepackt für die Verbreitung and Installation. In diesem Artikel, gehen wir kurz auf Dateien ein, die vorhanden sein könnten.

## manifest.json

"manifest.json" ist die einzige Datei, die in jeder Extension vorhanden sein muss. Sie enthält die grundlegenden Metadaten wie Name, Version und benötigte Genehmigungen. Außerdem verweist sie auf andere Dateien der Extension.

Dieses Manifest kann auch Zeiger zu mehreren anderen Dateitypen haben:

- [Hintergrundseiten](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Background_scripts): führen Langzeitprozesse aus
- Icons für die Extension und jegliche Buttons können festgelegt werden.
- [Sidebars, Pop-ups und Options-Pages](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Sidebars_popups_options_pages): HTML-Dokumente, die Inhalte für unterschiedliche Komponenten der Benutzeroberfläche bereitstellen.
- [Content-Scripts](/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Content_scripts): JavaScript in Ihrer Erweiterung, das in Webseiten eingefügt wird.

![](https://mdn.mozillademos.org/files/13669/webextension-anatomy.png)

Für weitere Einzelheiten gehe auf [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json).

Neben den vom Manifest referenzierten Seiten, kann eine Extension zusätzlche [Extension pages](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Extension_pages) mit unterstützenden Dateien enthalten.

## Hintergrundskripte

Extensions müssen oft langzeitig ihren Zustand aufrechterhalten oder Operationen, unabhängig der Lebensdauer von irgendwelchen speziellen Webseiten oder Browserfenstern, durchführen. Dafür gibt es Hintergrundskripte (background scripts).

Hintergrundskripte werden geladen, sobald die Extension geladen ist und laufen bis die Extension deaktiviert oder deinstalliert wird. Du kannst alles aus den [WebExtension APIs](/en-US/Add-ons/WebExtensions/API) im Skript benutzen, solange du die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) abgefragt hast.

### Hintergrundskripte festlegen

Du kannst ein Hintergrundskript einbinden in dem du den `background`-Key in "manifest.json" benutzt:

```json
// manifest.json

"background": {
  "scripts": ["background-script.js"]
}
```

Du kannst mehrere background scripts angeben: wenn du sie im selben Kontext laufen lässt, so wie mehrere Skripts, die in eine einzelne Seite geladen werden.

### Hintergrundskript-Umgebung

#### DOM APIs

Hintergrundskripte laufen im Rahmen spezieller Seiten genannt 'background pages' (Hintergrundseiten). Diese geben ihnen ein globales [`window`](/en-US/docs/Web/API/Window), samt der vollständigen Standard DOM APIs, die von diesem Objekt bereitgestellt werden.

Du musst deine Hintergrundseite nicht bereitstellen. Wenn du dein Hintergrundskript hinzufügst, wird eine leere Hintergrundseite für dich erstellt.

Dennoch kannst du deine Hintergrundseite auch als separate HTML-Datei erstellen:

```json
// manifest.json

"background": {
  "page": "background-page.html"
}
```

#### WebExtension APIs

Hintergrundskripte können alles aus den [WebExtension APIs](/en-US/Add-ons/WebExtensions/API) im Skript nutzen, solange deren Extension die notwendigen [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat.

#### Cross-origin access

Hintergrundskripte können XHR-Anfragen an alle Hosts machen, für die sie [host permissions](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

#### Web content

Hintergrundskripte haben keinen direkten Zugriff auf Webseiten. Sie können jedoch [Content-Scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) in Webseiten laden und [mit ihnen über message-passing API kommunizieren](/en-US/Add-ons/WebExtensions/Content_scripts#Communicating_with_background_scripts).

#### Content security policy

Hintergrundskripte sind beschränkt in einigen potenziell gefährlichen Operationen, wie dem Benutzen von [`eval()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval), durch ein Sicherheitskonzept. Für mehr Informationen siehe [Content Security Policy](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy).

## Sidebars, Pop-ups, Options-Pages

Deine Extension kann unterschiedliche Benutzeroberflächenkomponenten enthalten, deren Inhalt wird durch ein HTML-Dokument festgelegt:

- eine [Sidebar](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Sidebars) ist ein Element, das auf der linken Seite des Browserfensters neben der Webseite angezeigt wird
- ein [Pop-up](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) ist ein Dialogfenster, dass du anzeigen kannst, wenn der Benutzer auf einen [Button der Werkzeugleiste](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Browser_action) oder der [Adressleiste ](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions)klickt
- eine [Options-Page](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages) ist eine Seite, die gezeigt wird, wenn der Benutzer deine Add-on-Einstellungen im browser-eigenen Add-ons-Manager abruft.

Für jeden dieser Komponenten, erstellst du eine HTML-Datei und verweist auf sie über ein spezielles Attribut in [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json). Die HTML-Datei kann, wie eine normale Webseite, CSS- und JavaScript-Dateien einbinden.

Sie alle sind Arten von [Extension pages](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages), und nicht wie eine normale Webseite, dein JavaScript kann dieselben WebExtension APIs wie dein Hintergrundskript benutzen. Sie können sogar direkt Variabeln aus der Hintergrundseite, mit {{WebExtAPIRef("runtime.getBackgroundPage()")}}, abrufen.

## Extension pages

Du kannst außerdem HTML-Dokumente in deine Extension mit einbeziehen, die nicht vordefinierten Benutzeroberflächenkomponenten beigefügt wurden. Anders als die Dokumente, die du für Sidebars, Pop-ups, oder Option-Pages bereitstellen könntest, haben diese keinen Zugang zu "manifest.json". Dennoch haben sie Zugriff auf dieselben WebExtension APIs wie dein Hintergrundskript.

Du lädst eine solche Seite normalerweise mit {{WebExtAPIRef("windows.create()")}} oder {{WebExtAPIRef("tabs.create()")}}.

Siehe [Extension pages](/de/docs/Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages) um mehr zu lernen.

## Content scripts

Benutze Content-Scripts um Webseiten abzurufen und zu manipulieren. Content-Scripts werden in Webseiten geladen und laufen im Rahmen der jeweiligen Seite.

Content-Scripts sind von der Erweiterung bereitgestellte Skripts, die im Kontext einer Webseite laufen; das unterscheidet sie von Skripts, die von der Seite selber geladen werden, einschließlich derer, die in {{HTMLElement("script")}}-Elementen innerhalb der Seite bereitgestellt werden.

Content-Scripts können das Seiten-DOM sehen und manipulieren, so wie normale, von der Seite geladene Skripte.

Im Gegensatz zu normalen Skripten können sie:

- domainübergreifende XHR-Anfragen machen.
- eine kleine Teilmenge der [WebExtension APIs](/de/docs/Mozilla/Add-ons/WebExtensions/API) benutzen.
- Nachrichten mit ihren Hintergrundskripten austauschen und auf diesem Web indirekt die gesamten WebExtension APIs abrufen.

Content-Scripts können nicht direkt normale Skripte der Seite abrufen, aber mit ihnen Nachrichten austauschen über die übliche [`window.postMessage()`](/en-US/docs/Web/API/Window/postMessage) API.

Wenn wir gewöhnlich über Content-Scripts sprechen, dann im Bezug auf JavaScript. Du kannst jedoch auch CSS zu einer Webseite über das selbe System hinzufügen.

Sieh dir [content scripts](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts) an um mehr zu erfahren.

## Web accessible resources

Zugängliche Webressourcen(Web accessible resources) sind Ressourcen wie Bilder, HTML, CSS, und JavaScript, die du in die Extension einbindest und für Content-Scripts und Skripten der Seite zugänglich machen möchtest. Ressourcen, die web-zugänglich gemacht werden, können von Skripten der Seite und Content-Scripts über ein spezielles URI-Schema referenziert werden.

Wenn zum Beispiel ein Content-Script Bilder in eine Webseite einfügen will, kannst du sie in der Extension beifügen und web-zugänglich machen. Dann könnte das Content-Script [`img`](/en-US/docs/Web/HTML/Element/img)-Tags erzeugen und hinzufügen, die über das `src`-Attribut auf die Bilder verweisen.

Um mehr zu lernen, sieh die Dokumentation für den [web_accessible_resources](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) manifest.json key.
