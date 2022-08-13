---
title: Element.scrollWidth
slug: Web/API/Element/scrollWidth
tags:
  - Eigenschaft
  - Referenz
translation_of: Web/API/Element/scrollWidth
---
{{ APIRef("DOM") }}

Die schreibgeschützte Eigenschaft **`Element.scrollWidth`** liefert entweder die Breite (in Pixeln) des Inhaltes eines Elements oder die Breite des Elementes selbst, je nachdem, welche von beiden größer ist. Ist der Inhalt eines Elementes breiter als sein Inhaltsbereich (z.B. wenn Bildlaufleisten mit eingeblendet werden), dann ist die `scrollWidth` des Elementes größer als seine `clientWidth`.

> **Note:** Diese Eigenschaft rundet den Wert zu einem Integer (Ganzzahl). Sollte ein Wert mit Nachkommastellen benötigt werden, verwenden Sie {{ domxref("element.getBoundingClientRect()") }}.

## Syntax

    var xScrollWidth = element.scrollWidth;

`xScrollWidth` ist die Breite des Inhaltes des Elementes `element` in Pixeln.

## Beispiel

```html
<div id="aDiv" style="width: 100px; height: 200px; overflow: auto;">
  FooBar-FooBar-FooBar
</div>
<br>
<input
  type="button"
  value="Show scrollWidth"
  onclick="alert(document.getElementById('aDiv').scrollWidth);"
>
```

## Spezifikation

Die Eigenschaft `scrollWidth` ist im [CSSOM View Module](http://dev.w3.org/csswg/cssom-view/#dom-element-scrollwidth) definiert.

## Referenzen

{{Compat("api.Element.scrollWidth")}}

## Siehe auch

- {{domxref("Element.clientWidth")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Bestimmung der Abmessungen von Elementen](/de/docs/Determining_the_dimensions_of_elements)
