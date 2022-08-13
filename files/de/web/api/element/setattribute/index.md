---
title: Element.setAttribute()
slug: Web/API/Element/setAttribute
tags:
  - Attribut
  - Methode(2)
  - Méthode
translation_of: Web/API/Element/setAttribute
---
{{APIRef("DOM")}}

Fügt dem angegebenen Element ein Attribut hinzu oder ändert den Wert eines vorhandenen Attributs.

## Syntax

    element.setAttribute(name, value);

- `name` ist der Name des Attributs als String.
- `value` ist der gewünschte neue Wert des Attributs.

## Beispiel

```js
var d = document.getElementById("d1");

d.setAttribute("align", "center");
```

## Anmerkungen

Wenn `setAttribute` auf einem HTML-Element in einem HTML-Dokument aufgerufen wird, wird der Name des Attributes in Kleinbuchstaben umgewandelt.

Wenn das angegebene Attribut bereits existiert, ersetzt `setAttribute` den alten Wert. Falls das Attribut nicht existiert, wird es erzeugt.

Obwohl [`getAttribute()`](/en-US/docs/DOM/element.getAttribute "DOM/element.getAttribute") für fehlende Attribute `null` liefert, sollte man [`removeAttribute()`](/en-US/docs/DOM/element.removeAttribute "DOM/element.removeAttribute") statt `elt.setAttribute(attr, null)` verwenden um ein Attribut zu entfernen.

`setAttribute()` zu benutzen, um einige XUL-Attribute (vor allem `value`) zu ändern, verhält sich inkonsistent, da das Attribut nur den Standardwert spezifiziert. Um den aktuellen Wert zu ändern sollte man die Eigenschaften direkt verwenden. Zum Beispiel `elt.value` statt `elt.setAttribute('value', val)`.

{{DOMAttributeMethods}}

## Spezifikation

- [DOM Level 2 Core: setAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68F082) (eingeführt im [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute))
- [HTML5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/#apis-in-html-documents)
