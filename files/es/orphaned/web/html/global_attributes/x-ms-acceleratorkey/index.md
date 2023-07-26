---
title: x-ms-acceleratorkey
slug: orphaned/Web/HTML/Global_attributes/x-ms-acceleratorkey
original_slug: Web/HTML/Global_attributes/x-ms-acceleratorkey
---

{{HTMLSidebar("Global_attributes")}}{{Non-standard_Header}}

La **`x-ms-acceleratorkey`** propiedad proporciona una forma de declarar que una tecla de aceleración se ha asignado a un elemento.

Esta propiedad propietaria es específica de Internet Explorer y Microsoft Edge.

La `x-ms-acceleratorkey` propiedad le permite exponer una notificación en el árbol de accesibilidad a los lectores de pantalla y otras tecnologías de asistencia de que existe una clave de aceleración. Este atributo no proporciona el comportamiento de la clave del acelerador. Debe proporcionar controladores de eventos de teclado, como por ejemplo `onkeypress`, `onkeydown` o `onkeyup`, para procesar las teclas de aceleración en el documento.

## Sintaxis

```html
<button x-ms-acceleratorkey="string">...</button>
```

## Valor

Tipo: **String**

Nombre de la tecla de aceleración, por ejemplo: `Ctrl+B or Ctrl+S`.

## Ver también

- [Microsoft API extensions](/es/docs/Web/API/Microsoft_API_extensions)
