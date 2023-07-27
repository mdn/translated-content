---
title: HTMLTableElement.insertRow()
slug: Web/API/HTMLTableElement/insertRow
---

{{APIRef("HTML DOM")}}

El método **`HTMLTableElement.insertRow()`** inserta una nueva fila en la tabla.

## Sintaxis

```
var row = HTMLTableElement.insertRow(optional index = -1);
```

- [`HTMLTableElement`](/es/docs/DOM/HTMLTableElement) es una referencia a un elemento table HTML.
- `index` es el índice de fila de la nueva fila.
- `row` queda asignada a una referencia a la nueva fila. Una referencia a un [HTMLTableRowElement](/es/docs/Web/API/HTMLTableRowElement).
  Si `index` es -1 o igual al número de filas, la nueva fila es añadida detrás de la última. Si `index` es mayor que el números defilas, es lanzada una excepción IndexSizeError. Si index se omite, se asume por defecto -1.
- Si una tabla tiene múltiples elementos `tbody`, por defecto la nueva fila es insertada en el último `tbody`. Para insertar una fila dentro de un `tbody` especifico pued hacer:
  `var specific_tbody=document.getElementById(tbody_id); var row=specific_tbody.insertRow(index)`

## Ejemplo

```html
<table id="TableA">
  <tr>
    <td>Antigua fila superior</td>
  </tr>
</table>
<script type="text/javascript">
  function addRow(tableID) {
    // Obtiene una referencia a la tabla
    var tableRef = document.getElementById(tableID);

    // Inserta una fila en la tabla, en el índice 0
    var newRow = tableRef.insertRow(0);

    // Inserta una celda en la fila, en el índice 0
    var newCell = newRow.insertCell(0);

    // Añade un nodo de texto a la celda
    var newText = document.createTextNode("Nueva fila superior");
    newCell.appendChild(newText);
  }

  // Llama a addRow() con el ID de la tabla
  addRow("TableA");
</script>
```

Para ser válida en un documento HTML, una TR debe contener al menos un elemento TD.

Observese que `insertRow` inserta la fila diréctamente en la tabla y retorna una referencia a la nueva fila. La fila no necesita ser añadida separadamente (p.e. con [`document.appendChild()`](/es/docs/DOM/document.appendChild)) tal sería el caso si se usase [`document.createElement()`](/es/docs/DOM/document.createElement) para crear el nuevo elemento TR.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("HTMLTableRowElement.insertCell()")}}
