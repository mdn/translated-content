---
title: HTMLTableElement.insertRow()
slug: Web/API/HTMLTableElement/insertRow
---

{{APIRef("HTML DOM")}}

Метод **`HTMLTableElement.insertRow()`**`добавляет новую строку в таблицу и возвращает на неё ссылку.`

## Синтаксис

```
var row = HTMLTableElement.insertRow(optional index = -1);
```

- [`HTMLTableElement`](/ru/docs/DOM/HTMLTableElement) — ссылка на _HTML table_ элемент.
- `index` — индекс новой строки
- `row` присваивается ссылка на новую строку. Ссылка на [HTMLTableRowElement](/ru/docs/Web/API/HTMLTableRowElement).
  Если значение `index` равно -1 или количеству строк, то строка добавляется как последняя. Если значение `index` превышает количество строк, _выбрасывается_ исключение IndexSizeError. Если аргумент index пропущен, он равен значению по умолчанию — -1.
- Если таблица содержит несколько элементов `tbody`, то, по умолчанию, новая строка будет добавлена в последний элемент `tbody`. Добавить строку в определённый элемент `tbody`:
  `var specific_tbody=document.getElementById(tbody_id); var row=specific_tbody.insertRow(index)`

## Пример

```html
<table id="TableA">
  <tr>
    <td>Old top row</td>
  </tr>
</table>
<script type="text/javascript">
  function addRow(tableID) {
    // Get a reference to the table
    var tableRef = document.getElementById(tableID);

    // Insert a row in the table at row index 0
    var newRow = tableRef.insertRow(0);

    // Insert a cell in the row at index 0
    var newCell = newRow.insertCell(0);

    // Append a text node to the cell
    var newText = document.createTextNode("New top row");
    newCell.appendChild(newText);
  }

  // Call addRow() with the ID of a table
  addRow("TableA");
</script>
```

Чтобы быть валидным HTML документом, элемент TR должен содержать хотя бы один TD элемент.

Обратите внимание, что `insertRow` добавляет строку непосредственно в таблицу и возвращает ссылку на эту строку. Строку не нужно добавлять отдельно, как в случае с методом `document.createElement()`, для создания нового TR элемента.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{domxref("HTMLTableRowElement.insertCell()")}}
