---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
translation_of: Web/API/Element/getBoundingClientRect
---
{{APIRef("DOM")}}

Die Methode **`Element.getBoundingClientRect()`** gibt die Größe eines Elementes und dessen relative Position zum Viewport zurück.

## Syntax

    var domRect = element.getBoundingClientRect();

### Rückgabe

Der zurückgegebene Wert ist ein [DOMRect](/de/docs/XPCOM_Interface_Reference/nsIDOMClientRect "nsIDOMClientRect") Objekt, welches die Vereinigungsmenge aller von [`getClientRects()`](/en-US/docs/DOM/element.getClientRects "DOM/element.getClientRects") zurückgegebenen Rechtecken eines Elementes darstellt, das heißt, der CSS border-boxes, die mit dem Element verknüpft sind.

Der Rückgabewert ist das kleinste Rechteck welches das komplette Element beinhaltet. Es enthält die read-only-Eigenschaften `left`, `top`, `right` ,`bottom`, `x`, `y`, `width` und `height`, welche die border-box in Pixeln beschreibt. Alle Eigenschaften, abgesehen von `width` und `height`, sind realtiv zur linken oberen Ecke des Viewports.

> **Note:** **Merke:** {{Gecko("1.9.1")}} fügt die Eigenschaften Breite und Höhe zu dem `DOMRect` Objekt hinzu.

Leere Borderboxen werden vollständig ignoriert. Sind sämtliche Borderboxen eines Elements leer, oder entsprechen die `top` und `left` Angaben der Borderbox der ersten CSS-Box (in der Reihenfolge des Inhalts), so wird Null (zero) für `top` und `left` zurückgegeben.

Ein Rechteck mit Breiten- und Höhenwerten von Null wird stattdessen zurückgegeben, und wo `top` und `left` den top-left Werten der Border-Box der ersten CSS-Box (in Reihenfolge des Inhaltes) entsprechen.

Bei der Berechnung des Rechtecks werden sowohl scrollbare Elemente sowie Scrolling an sich (wie viel bereits gescrollt wurde) einbezogen. Das bedeutet, dass die `top` und `left` Eigenschaften ihre Werte verändern, sobald sich deren Scrollposition verändert (d.h. ihre Werte sind `relativ `zum `Viewport` und nicht absolut).

Will man die Position des Rechtecks in Bezug auf die Linke/Obere Ecke des `Dokumentes `haben, was der `absoluten` Position des Rechteckes entspricht, muss man zu den `top` und `left` Positionen, die Werte von `window.scrollX` und` window.scrollY`, addieren.

Um Browserkompabilität zu gewährleisten, nutzen Sie `window.pageXOffset` und `window.pageYOffset` statt` window.scrollY` und `window.scrollX`. Sollten `window.pageXOffset`, `window.pageYOffset`, `window.`scrollX and `window.`scrollY undefined sein, nutzen Sie `(((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.ScrollLeft == 'number' ? t : document.body).ScrollLeft` and `(((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.ScrollTop == 'number' ? t : document.body).ScrollTop`.

## Beispiel

```js
// rect is a DOMRect object with four properties: left, top, right, bottom
var rect = obj.getBoundingClientRect();
```

## Browser compatibility

{{Compat("api.Element.getBoundingClientRect")}}

## Specification

- [CSSOM Views: The getClientRects() and getBoundingClientRect() methods](http://www.w3.org/TR/cssom-view/#the-getclientrects%28%29-and-getboundingclientrect%28%29-methods)

### Notes

`getBoundingClientRect()` wurde erstmals im DHTML Objektmodell von MS IE implementiert.

Der Rückgabewert von `getBoundingClientRect() `ist [konstant](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze), es können keine weiteren Eigenschaften hinzugefügt werden.

## See also

- [MSDN: `getBoundingClientRect`](<https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx>)
- [`getClientRects()`](/de/docs/DOM/element.getClientRects)
