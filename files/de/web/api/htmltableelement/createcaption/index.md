---
title: HTMLTableElement.createCaption()
slug: Web/API/HTMLTableElement/createCaption
tags:
  - API
  - DOM
  - HTML DOM
  - HTMLTableElement
  - Method
  - Reference
translation_of: Web/API/HTMLTableElement/createCaption
---
{{APIRef("HTML DOM")}}

Die **`HTMLTableElement.createCaption()`** Methode gibt das {{HtmlElement("caption")}} Element zurück, das einer {{HtmlElement("table")}} zugeordnet ist. Wenn in der Tabelle noch kein `<caption>` Element existiert, wird es durch diese Methode erzeugt und dann zurückgegeben..

> **Hinweis:** Wenn noch keine Überschrift vorhanden ist, fügt `createCaption()` sie direkt in die Tabelle ein. Die Überschrift muss nicht eigens hinzugefügt werden, wie man es tun müsste, wenn man das `<caption>` Element mittels {{domxref("Document.createElement()")}} erzeugt hätte.

## Syntax

    HTMLTableCaptionElement = table.createCaption();

### Rückgabewert

{{domxref("HTMLTableCaptionElement")}}

## Beispiel

Dieses Beispiel verwendet JavaScript, um eine Tabelle um eine Überschrift zu erweitern.

### HTML

```html
<table>
  <tr><td>Cell 1.1</td><td>Cell 1.2</td><td>Cell 1.3</td></tr>
  <tr><td>Cell 2.1</td><td>Cell 2.2</td><td>Cell 2.3</td></tr>
</table>
```

### JavaScript

```js
let table = document.querySelector('table');
let caption = table.createCaption();
caption.textContent = 'Diese Überschrift wurde mit JavaScript erzeugt!';
```

### Ergebnis

{{EmbedLiveSample("Beispiel")}}

## Spezifikationen

| Specification                                                                                                            | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#dom-table-createcaption', 'HTMLTableElement: createCaption')}} | {{Spec2('HTML WHATWG')}} |         |

## Browserkompatibilität

{{Compat("api.HTMLTableElement.createCaption")}}
