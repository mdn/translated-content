---
title: HTMLTableElement.insertRow()
slug: Web/API/HTMLTableElement/insertRow
tags:
  - API
  - HTML DOM
  - HTMLTableElement
  - Method
  - Reference
translation_of: Web/API/HTMLTableElement/insertRow
---
{{APIRef("HTML DOM")}}

Die Methode **`HTMLTableElement.insertRow()`** fügt einer vorhandenen {{HtmlElement("table")}} eine neue Zeile ({{HtmlElement("tr")}}) hinzu und gibt eine Referenz auf die neue Zeile zurück.

Wenn eine Tabelle mehrere {{HtmlElement("tbody")}} Elemente besitzt, wird die neue Zeile standardmäßig dem letzten `<tbody>` hinzugefügt. Um sie einem bestimmten `<tbody>` Element hinzuzufügen, beschaffen Sie sich eine Referenz auf das gewünschte `<tbody>` Element und rufen Sie `insertRow()` auf diesem Element auf:

```js
let bestimmter_tbody = document.getElementById(tbody_id);
let zeile = bestimmter_tbody.insertRow(index)
```

> **Hinweis:** `insertRow()` fügt die Zeile direkt in die Tabelle ein. Die Zeile muss nicht eigens hinzugefügt werden, wie man es tun müsste, wenn man das `<tr>` Element mittels [`Document.createElement()`](/de/docs/Web/API/Document/createElement) erzeugt hätte.

## Syntax

    var neueZeile = HTMLTableElement.insertRow(index);

{{domxref("HTMLTableElement")}} ist eine Referenz auf ein HTML {{HtmlElement("table")}} Element.

### Parameters

- `index` {{optional_inline}}
  - : Der Zeilenindex der neuen Zeile. Ist der Index `-1` or gleich der Anzahl der vorhandenen Zeilen, wird die Zeile als letzte Zeile angefügt. Wenn `index` größer als die Anzahl vorhandener Zeilen ist, führt dies zi einer `IndexSizeError` Exception. Wird `index` weggelassen, ist der Standardwert `-1`.

### Rückgabewert

`neueZeile` ist ein {{domxref("HTMLTableRowElement")}}, das die neue Zeile referenziert.

## Beispiel

Dieses Beispiel verwendet `insertRow(-1)`, um an eine Tabelle eine neue Zeile anzufügen.

Wir verwenden daraufhin {{domxref("HTMLTableRowElement.insertCell()")}}, um der neuen Zeile noch eine Zelle hinzufügen. (Um gültiges HTML zu sein, muss ein `<tr>` mindestens ein `<td>` Element enthalten.) Schließlich fügen wir der Zelle mittels {{domxref("Document.createTextNode()")}} und {{domxref("Node.appendChild()")}} Text hinzu.

### HTML

```html
<table id="my-table">
  <tr><td>Row 1</td></tr>
  <tr><td>Row 2</td></tr>
  <tr><td>Row 3</td></tr>
</table>
```

### JavaScript

```js
function addRow(tableID) {
  // Beschaffe eine Referenz auf die Tabelle
  let tableRef = document.getElementById(tableID);

  // Füge am Ende der Tabelle eine neue Zeile an
  let newRow = tableRef.insertRow(-1);

  // Erstelle in der Zeile eine Zelle am Index 0
  let newCell = newRow.insertCell(0);

  // Füge der Zelle einen textnode hinzu
  let newText = document.createTextNode('Neue letzte Zeile');
  newCell.appendChild(newText);
}

// Rufe addRow() mit der ID der Tabelle auf
addRow('my-table');
```

### Result

{{EmbedLiveSample("Beispiel")}}

## Spezifikationen

| Specification                                                                                                                | Status                           | Comment                                            |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------- |
| {{SpecName("HTML WHATWG", "tables.html#dom-table-insertrow", "HTMLTableElement.insertRow()")}} | {{Spec2("HTML WHATWG")}} |                                                    |
| {{SpecName("DOM2 HTML", "html.html#ID-93995626", "HTMLTableElement.insertRow()")}}                 | {{Spec2("DOM2 HTML")}}     | Spezifiziert genauer, wo die Zeile eingefügt wird. |
| {{SpecName("DOM1", "level-one-html.html#ID-39872903", "HTMLTableElement.insertRow()")}}         | {{Spec2("DOM1")}}         | Initiale Definition                                |

## Browser compatibility

{{Compat("api.HTMLTableElement.insertRow")}}

## See also

- {{domxref("HTMLTableRowElement.insertCell()")}}
- Das HTML Element, das Zeilen repräsentiert: {{domxref("HTMLTableRowElement")}}
