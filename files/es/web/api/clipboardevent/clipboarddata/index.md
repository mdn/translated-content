---
title: ClipboardEvent.clipboardData
slug: Web/API/ClipboardEvent/clipboardData
---

{{ apiref("Clipboard API") }} {{SeeCompatTable}}

La propiedad **`ClipboardEvent.clipboardData`**, del tipo {{domxref("DataTransfer")}}, puede ser usuada:

- Para especificar qué datos mover al portapapeles cuando se produzcan los eventos [`cut`](/es/docs/Web/Reference/Events/cut) y [`copy`](/es/docs/Web/Reference/Events/copy), normalmente a través de {{domxref("DataTransfer.setData", "setData(format, data)")}};
- Para obtener la información del portapapeles a ser pegada cuando se produce el evento [`paste`](/es/docs/Web/Reference/Events/paste), normalmente a través de {{domxref("DataTransfer.getData", "getData(format)")}}.

Para más información, mira la documentación de los eventos [`cut`](/es/docs/Web/Reference/Events/cut), [`copy`](/es/docs/Web/Reference/Events/copy), y [`paste`](/es/docs/Web/Reference/Events/paste).

## Sintaxis

```
data = ClipboardEvent.clipboardData
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- Otros eventos del portapapeles: [`copy`](/es/docs/Web/Reference/Events/copy), [`cut`](/es/docs/Web/Reference/Events/cut), [`paste`](/es/docs/Web/Reference/Events/paste)
- La interfaz base: {{domxref("ClipboardEvent")}}.
