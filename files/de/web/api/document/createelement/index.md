---
title: Document.createElement()
slug: Web/API/Document/createElement
tags:
  - API
  - DOM
  - Document
  - Method
  - Méthode
translation_of: Web/API/Document/createElement
---
{{APIRef("DOM")}}

In einem [HTML ](/de/docs/Web/HTML)Dokument erstellt die **`Document.createElement()`** Methode ein spezifiziertes HTML Element oder ein {{domxref("HTMLUnknownElement")}} wenn der gegebene Elementname ein unbekannter ist.

## Syntax

    var element = document.createElement(tagName, [optionen]);

### Parameter

- **`tagName`**
  - : Ein String der den Typ des zu erstellenden Elements spezifiziert. Der/Die/Das {{domxref("Node.nodeName", "nodeName")}} des erstellten Elements ist mit dem Wert von `tagName` initialisiert. Benutze keine qualifizierten Namen (wie "html:a") mit dieser Methode.
- `optionen` {{optional_inline}}
  - : Ein optionales `ElementCreationOptions`-Objekt, welches eine einzige Eigenschaft namens `is` besitzt, deren Wert der Name des Tags für ein benutzerdefiniertes Element ist. Dieses benutzerdefinierte Element muss vorher mit `customElements.define()` definiert werden. Für mehr Informationen siehe [Web component example](#web_component_example).

### Rückgabewert

Das neue [`Element`](/de/docs/Web/API/Element).

## Beispiele

### Grundlegendes Beispiel

Dies erstellt ein neues `<div>` und fügt es vor dem Element mit der ID `div1` ein.

#### HTML

```html
<!DOCTYPE html>
<html>
<head>
  <title>||Arbeiten mit Elementen||</title>
</head>
<body>
  <div id="div1">Der obere Text wurde dynamisch erstellt.</div>
</body>
</html>
```

#### JavaScript

```js
document.body.onload = addElement;

function addElement () {
  // erstelle ein neues div Element
  // und gib ihm etwas Inhalt
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode("Hi there and greetings!");
  newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.

  // füge das neu erstellte Element und seinen Inhalt ins DOM ein
  var currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
```

{{EmbedLiveSample("Basic_example", 500, 50)}}

### Web-Komponentenbeispiel

Das folgende Beispiel wurde aus dem Beispiel expanding-list-web-component entnommen (Siehe es live). In diesem Fall erweitert unser Custom-Element die {{domxref("HTMLUListElement")}}, welche das {{htmlelement("ul")}} Element repräsentiert.

    // Erstelle eine Klasse für das Element
    class ExpandingList extends HTMLUListElement {
      constructor() {
        // Rufe immer super() in einem Konstruktor auf.
        super();

        // Konstruktordefinition wurde der kürze halber weggelassen
        ...
      }
    }

    // Definiere das neue Element
    customElements.define('expanding-list', ExpandingList, { extends: "ul" });

Würden wir eine Instanz dieses Elements programmatisch erstellen wollen, so würden wir einen Aufruf über den folgenden Ausschnitt machen:

    let expandingList = document.createElement('ul', { is : 'expanding-list' })

Dem neuen Element wird ein [`is`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/is) Attribut hinzugefügt, dessen Wert das Custom-Element's Tag-Name ist.

> **Note:** **Notiz:** Für Backwards-Kompatiblität mit früheren Versionen der Spezifikationen des Custom-Elements, erlauben einige Browser einen String, statt einem Objekt, als Parameter zu übergeben, wobei der Wert des Strings der Tag-Name des Custom-Elements ist.

## Notizen

- Beim Aufruf auf ein als Dokument-Objekt gekennzeichnetes HTML-Dokument schreibt `createElement()` seine Argumente in Kleinbuchstaben, bevor es das diese erstellt.
- Um ein Element mit qualifizierem Namen und namespace URl zu erstellen nutze {{ domxref("document.createElementNS()") }} stattessen .
- Vor Gecko 2.0 {{ geckoRelease("2.0") }}, konntest du abgewinkelte Klammern (< und >) um `tagName` im Quirks-Modus setzen; seit Gecko 2.0 verhält sich die Funktion im Quirks-Modus und im Standard-Modus gleich.
- Seit Gecko 19.0 {{geckoRelease("19.0")}} `createElement(null)` hat das gleiche bewirkt wie `createElement("null")`. Bemerke, dass Opera funktioniert mit null ebenfalls, während Chrome und Internet Explorer beide Fehler ausgeben würden.
- Seit Gecko 22.0 {{geckoRelease("22.0")}} benutzt `createElement()` nicht mehr die {{domxref("HTMLSpanElement")}} Schnittstelle, wenn das Argument "bgsounds", "multicol", oder "image" ist. Stattdessen wird `HTMLUnknownElement` für"bgsound" und "multicol" verwendet, und {{domxref("HTMLElement")}} `HTMLElement` wird für "image" verwendet.
- Die Gecko Implementierung von `createElement` ist nicht konform mit der DOM Spezifikation für XUL und XHTML Dokumente: `localName` und `namespaceURI` werden beim erstellten Element nicht auf `null` gesetzt.`.` Siehe auch {{ Bug(280692) }} für weitere Details.

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('DOM WHATWG', "#dom-document-createelement", "Document.createElement")}} | {{Spec2('DOM WHATWG')}} |           |

- [DOM 2 Core: createElement](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-2141741547)
- [HTML5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)

## Browser-Kompatibiltät

{{Compat("api.Document.createElement")}}

## Siehe auch

- {{domxref("Node.removeChild()")}}
- {{domxref("Node.replaceChild()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.hasChildNodes()")}}
- {{domxref("document.createElementNS()")}} — um die Namespace-URL explizit anzugeben.
