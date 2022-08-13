---
title: Node.removeChild()
slug: Web/API/Node/removeChild
tags:
  - API
  - DOM
  - Entfernen
  - Knoten
  - Löschen
  - Methode(2)
  - Referenz
translation_of: Web/API/Node/removeChild
---
{{APIRef("DOM")}}

Die Methode **`Node.removeChild()`** entfernt einen Kindknoten aus dem DOM. Gibt den entfernten Knoten zurück.

## Syntax

    var oldChild = element.removeChild(child);
    ODER
    element.removeChild(child);

- `child` ist der Kindknoten, der aus dem DOM entfernt werden soll.
- `element` is der Elternknoten von `child`.
- `oldChild` hält eine Referenz auf den entfernten Kindknoten. `oldChild` === `child`.

Der entfernte Kindknoten bleibt im Speicher erhalten, ist aber nicht länger Teil des DOM. Mit der ersten Syntax-Form ist es möglich, den entfernten Knoten später im Code wieder zu verwenden, über die `oldChild` Objektreferenz. In der zweiten Form wird jedoch keine `oldChild`-Refernenz behalten, also wird (vorausgesetzt dass nirgendwo anders im Code eine Referenz gehalten wird) der Knoten unbenutzbar und nicht erreichbar, und wird nach kurzer Zeit [automatisch aus dem Speicher entfernt](/de/docs/Web/JavaScript/Memory_Management).

Wenn `child` kein Kind des Knotens `element` ist, wirft die Methode eine Exception. Dies passiert auch wenn `child` zwar zum Aufruf der Methode ein Kind von `element` war, aber durch einen beim Entfernen des Knotens aufgerufenen Event Handler bereits aus dem DOM entfernt wurde (z.B. blur).

## Beispiele

    <!-- Beispiel HTML -->

    <div id="top" align="center">
      <div id="nested"></div>
    </div>

```js
// Ein bestimmtes Element entfernen, wenn der Elternknoten bekannt ist
var d = document.getElementById("top");
var d_nested = document.getElementById("nested");
var throwawayNode = d.removeChild(d_nested);
```

```js
// Ein bestimmtes Element entfernen, ohne den Elternknoten zu kennen
var node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

```js
// Alle Kindknoten eines Elements entfernen
var element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

## Spezifikation

- [DOM Level 1 Core: removeChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild)
- [DOM Level 2 Core: removeChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1734834066)
- [DOM Level 3 Core: removeChild](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066)

## Siehe auch

- {{domxref("Node.replaceChild")}}
- {{domxref("Node.parentNode")}}
- {{domxref("ChildNode.remove")}}
