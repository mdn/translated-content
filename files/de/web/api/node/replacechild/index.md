---
title: Node.replaceChild
slug: Web/API/Node/replaceChild
translation_of: Web/API/Node/replaceChild
---
{{ ApiRef() }}

### Zusammenfassung

**Die `Node.replaceChild()`**-Methode ersetzt den Kind-Knoten (`child node)` innerhalb des gegebenen Eltern-Knotens (`parent node`) durch einen anderen.

### Syntax

    replacedNode = parentNode.replaceChild(newChild, oldChild);

- `newChild` ist der neue, `oldChild` der zu ersetzende Knoten. Falls er bereits im DOM vorhanden ist, wird er zuerst von dort entfernt.
- `oldChild` ist der zu ersetzende Knoten.
- `replacedNode` ist der ersetzte Knoten, also der selbe wie `oldChild`.

### Beispiel

    // <div>
    //  <span id="childSpan">foo bar</span>
    // </div>

    // erzeuge einen leeren Element-Knoten
    // ohne ID, Attribute oder Inhalt
    var sp1 = document.createElement("span");

    // setze sein id Attribut auf 'newSpan'
    sp1.setAttribute("id", "newSpan");

    // Inhalt für das neue Element erzeugen
    var sp1_content = document.createTextNode("new replacement span element.");

    // den erzeugten Inhalt an das Element anhängen
    sp1.appendChild(sp1_content);

    // Referenz auf den zu ersetzenden Knoten erzeugen
    var sp2 = document.getElementById("childSpan");
    var parentDiv = sp2.parentNode;

    // den existierenden Knoten sp2 mit dem neuen Span-Element sp1 ersetzen
    parentDiv.replaceChild(sp1, sp2);

    // Ergebnis:
    // <div>
    //   <span id="newSpan">new replacement span element.</span>
    // </div>

### Spezifikation

[DOM Level 1 Core: replaceChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-replaceChild)

[DOM Level 2 Core: replaceChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-785887307)

{{ languages( { "fr": "fr/DOM/element.replaceChild", "ja": "ja/DOM/element.replaceChild", "pl": "pl/DOM/element.replaceChild", "zh-cn": "zh-cn/DOM/Node.replaceChild" } ) }}
