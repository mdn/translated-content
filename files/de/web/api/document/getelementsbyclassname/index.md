---
title: Document.getElementsByClassName()
slug: Web/API/Document/getElementsByClassName
tags:
  - API
  - DOM
  - DOM Element Methoden
  - Gecko
  - Gecko DOM Referenz
  - HTML5
  - Méthode
  - Referenz
translation_of: Web/API/Document/getElementsByClassName
---
{{APIRef("DOM")}}

Gibt ein Array-ähnliches Objekt von allen Kindelementen welche den gegebenen Klassennamen besitzen. Wenn dies auf das document-Objekt ausgeführt wird, wird das gesamte Dokument durchsucht, inklusive des root-Knoten. Man kann ebenfalls {{domxref("Element.getElementsByClassName", "getElementsByClassName()")}} mit jedem Element aufrufen; es werden nur Nachfolgende Elemente des gegebenenen root-Element zurückgegeben.

## Syntax

    var elements = document.getElementsByClassName(names); // oder:
    var elements = rootElement.getElementsByClassName(names);

- _elements_ ist eine live {{ domxref("HTMLCollection") }} von gefunden Elementen.
- _names_ ist ein String der eine Liste der gefundenen Klassennamen repräsentiert; Klassennamen sind durch Leerzeichen getrennt.
- getElementsByClassName kann auf jedes Element aufgerufen werden und nicht nur auf _document_. Das Element, auf dass diese Funktion aufgerufen wird, wird als root-Element genutzt.

## Beispiele

Alle Elemente der Klasse 'test' holen:

```js
document.getElementsByClassName('test');
```

Alle Elemente die sowohl die Klassen 'red' und 'test' verwenden selektieren:

```js
document.getElementsByClassName('red test');
```

Alle Elemente der Klasse 'test' die innerhalb eines Elements mit der ID 'main' selektieren:

```js
document.getElementById('main').getElementsByClassName('test');
```

Man kann auch Methoden von Array.prototype auf {{ domxref("HTMLCollection") }} anwenden, in dem die _HTMLCollection_ in dem sie an die _this_ Werte der Methoden übergeben wird. Hier finden wir alle div-Elemente der Klasse 'test':

```js
var testElements = document.getElementsByClassName('test');
var testDivs = Array.prototype.filter.call(testElements, function(testElement){
    return testElement.nodeName === 'DIV';
});
```

## Browserkompabilität

{{Compat}}

## Spezifikation

- [W3C: getElementsByClassName](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#dom-document-getelementsbyclassname)
