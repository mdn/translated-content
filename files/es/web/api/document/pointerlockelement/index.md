---
title: Document.pointerLockElement
slug: Web/API/Document/pointerLockElement
---

{{APIRef("DOM")}}

La propiedad `pointerLockElement` conserva el elemento adquirido, para el evento del mouse, mientras el bloqueo se encuentre activo . Es `null` si el bloqueo se encuentra en estado pendiente para bloqueo, o si el bloqueo se ha liberado, es decir ya no se encuentra en estado bloqueado, o si el elemento bloqueado se encuentra en otro documento.

## Sintaxis

```js
var elemento = document.pointerLockElement;
```

### Valor retornado

Un {{domxref("Element")}} o `null`.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Véase también

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/es/docs/WebAPI/Pointer_Lock)
