---
title: Node.childNodes
slug: Web/API/Node/childNodes
translation_of: Web/API/Node/childNodes
---
{{ ApiRef() }}

### Allgemein

`childNodes` gibt eine {{ domxref('NodeList') }}, welche alle Kindknoten (`childNodes`) eines bestimmten HTML-Elements enthält, zurück.

### Syntax

    var nodeList = referenzElement.childNodes;

_nodeList_ ist eine Liste, die alle Kindknoten eines bestimmten Elements der Reihenfolge nach enthält. Falls das Element keine Kindknoten enthält, gibt `childNodes` eine leere `NodeList` zurück.

Diese Eigenschaft kann nur ausgelesen werden (read-only).

### Beispiel

Folgendes HTML-Dokument liegt vor:

```html
<!DOCTYPE html>
<html>
  <body>
    <h3>Neue Mitarbeiter eingestellt</h3>
    <p>Dank der guten Konjunktur letzten Jahres [...]</p>
  </body>
</html>
```

Nun sollen die `childNodes` von `<body>` ausgelesen und in einer Liste namens `nodeList` gespeichert werden:

```js
var bd = document.body;

// Zuerst werden wir überprüfen, ob das <body>-Element überhaupt Kindknoten hat.
if (bd.hasChildNodes()) {
   // Nun werden wir die Eigenschaft childNodes auslesen
   var nodeList = bd.childNodes;

   for(var i = 0; i < nodeList.length; i++) {
     // So wird nodeList durchlaufen und folgender Code wird an jedem Eintrag ausgeführt
     // In diesem Fall soll der Name ausgegeben werden
     alert(nodeList[i].nodeName);
   }
}
```

Diese Liste ist ständig aktuell. Jede Änderung am referenz-Element (hier `<body>`) bewirkt eine aktualisierung der Liste.
Wenn Sie also beispielsweise das erste Element in der Liste löschen, rückt automatisch das zweite Element an Stelle des Ersten.
Deshalb lassen sich z.B. auf diese Art alle Kindknoten eines Elements löschen:

```js
while(bd.firstChild) {
    bd.removeChild(bd.firstChild);
}
```

### Anmerkungen

Mit `childNodes` erhalten Sie eine Liste **aller** Kindknoten, **einschließlich** derer vom Typ {{ domxref("CharacterData") }}. Wenn Sie diese Datenknoten nicht im Index haben wollen, verwenden Sie statt `childNodes` die Eigenschaft {{ domxref('Element.children') }}.

Die Einträge in _`nodeList`_ sind Objekte, keine Zeichenketten. Für diese Objekte gelten wiederum alle Methoden und Eigenschaften von {{ domxref("Node") }}. Um also Daten aus diesen Objekten auszulesen, müssen deren Eigenschaften ausgelesen werden. Um beispielsweise den Namen eines in _`nodeList`_ aufgeführten Elements auszulesen, muss man die eigenschaft `nodeName` auslesen:

```js
var name = nodeList[i].nodeName;
```

Das `document` Objekt hat zwei Kindknoten: Die `Doctype`-Deklaration und das `root`-Element, das eine Eigenschaft von {{ domxref("Document") }} ist.
Folgendermaßen kann darauf zugegriffen werden:

```js
var root = document.documentElement;
```

In (X)HTML-Dokumenten stellt das `HTML`-Element das `root`-Element dar.

#### Siehe auch

- {{ domxref("Node") }}
- {{ domxref("Node.firstChild") }}
- {{ domxref("Node.nodeName") }}
- {{ domxref('Element.children') }}
- {{ domxref("CharacterData") }}

### Spezifikationen

- [W3C DOM 2 Core: childNodes](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1451460987) (en)
- [W3C DOM 3 Core: childNodes](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-1451460987) (en)
- [W3C DOM 3 NodeList interface](http://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/core.html#ID-536297177) (en)

{{ languages( { "fr": "fr/DOM/element.childNodes", "ja": "ja/DOM/element.childNodes", "pl": "pl/DOM/element.childNodes", "zh-cn": "cn/DOM/element.childNodes", "de": "de/DOM/element.childNodes" } ) }}
