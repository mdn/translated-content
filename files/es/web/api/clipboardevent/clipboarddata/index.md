---
title: ClipboardEvent.clipboardData
slug: Web/API/ClipboardEvent/clipboardData
tags:
  - API
  - Clipboard API
  - Experimental
  - Portapapeles
  - Solo lectura
  - metodo
translation_of: Web/API/ClipboardEvent/clipboardData
---
{{ apiref("Clipboard API") }} {{SeeCompatTable}}

La propiedad **`ClipboardEvent.clipboardData`**, del tipo {{domxref("DataTransfer")}}, puede ser usuada:

- Para especificar qué datos mover al portapapeles cuando se produzcan los eventos {{event("cut")}} y {{event("copy")}}, normalmente a través de {{domxref("DataTransfer.setData", "setData(format, data)")}};
- Para obtener la información del portapapeles a ser pegada cuando se produce el evento {{event("paste")}}, normalmente a través de {{domxref("DataTransfer.getData", "getData(format)")}}.

Para más información, mira la documentación de los eventos {{event("cut")}}, {{event("copy")}}, y {{event("paste")}}.

## Sintaxis

    data = ClipboardEvent.clipboardData

## Especificaciones

| Especificación                                                                                                                           | Estado                               | Comentario          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{ SpecName('Clipboard API', '#widl-ClipboardEvent-clipboardData', 'ClipboardEvent.clipboardData') }} | {{ Spec2('Clipboard API') }} | Definición inicial. |

## Compatibilidad con navegadores

{{Compat("api.ClipboardEvent.clipboardData")}}

## Ver también

- Otros eventos del portapapeles: {{event("copy")}}, {{event("cut")}}, {{event("paste")}}
- La interfaz base: {{domxref("ClipboardEvent")}}.
