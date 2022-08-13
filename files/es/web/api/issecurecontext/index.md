---
title: WindowOrWorkerGlobalScope.isSecureContext
slug: Web/API/isSecureContext
translation_of: Web/API/WindowOrWorkerGlobalScope/isSecureContext
original_slug: Web/API/WindowOrWorkerGlobalScope/isSecureContext
---
{{APIRef()}}{{SeeCompatTable}}

La propiedad de sólo-lectura **`isSecureContext`**, de la interface {{domxref("WindowOrWorkerGlobalScope")}} Devuelve un booleano indicando si el contexto actual es seguro (`true`) or not (`false`).

## Sintaxis

    var isItSecure = self.isSecureContext; // or just isSecureContext

### Valor

Un {{domxref("Boolean")}}.

## Especificaciones

| Especificación                                                                                                                               | Estado                               | Comentario          |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------------------- |
| {{SpecName('Secure Contexts', 'webappapis.html#dom-origin', 'WindowOrWorkerGlobalScope.isSecureContext')}} | {{Spec2('Secure Contexts')}} | Definición inicial. |

## Compatibilidad de Navegadores

{{Compat("api.isSecureContext")}}
