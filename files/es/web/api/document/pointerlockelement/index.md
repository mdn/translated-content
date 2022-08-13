---
title: Document.pointerLockElement
slug: Web/API/Document/pointerLockElement
translation_of: Web/API/DocumentOrShadowRoot/pointerLockElement
original_slug: Web/API/DocumentOrShadowRoot/pointerLockElement
---
{{APIRef("DOM")}}

La propiedad `pointerLockElement` conserva el elemento adquirido, para el evento del mouse, mientras el bloqueo se encuentre activo . Es `null` si el bloqueo se encuentra en estado pendiente para bloqueo, o si el bloqueo se ha liberado, es decir ya no se encuentra en estado bloqueado, o si el elemento bloqueado se encuentra en otro documento.

## Sintaxis

    var elemento = document.pointerLockElement;

### Valor retornado

Un {{domxref("Element")}} o `null`.

## Especificaciones

| Especificación                                                                                                   | Estado                           | Comentario                         |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------- |
| {{SpecName('Bloquear puntero','l#extension-to-the-document-interface','Document')}} | {{Spec2('Pointer lock')}} | Extiende de la interfaz `Document` |

## Compatibilidad del Navegador

{{Compat("api.Document.pointerLockElement")}}

## Véase también:

- {{ domxref("Document.exitPointerLock()") }}
- {{ domxref("Element.requestPointerLock()") }}
- [Pointer Lock](/es/docs/WebAPI/Pointer_Lock)
