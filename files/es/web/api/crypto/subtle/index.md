---
title: Crypto.subtle
slug: Web/API/Crypto/subtle
tags:
  - API
  - Criptografía
  - Propiedad
  - Referencia
  - Sólo-Lectura
  - Web Crypto API
translation_of: Web/API/Crypto/subtle
---
{{APIRef("Web Crypto API")}}

La propiedad de sólo lectura **`Crypto.subtle`** retorna un objeto {{domxref("SubtleCrypto")}} permitiendo realizar operaciones criptográficas.

## Sintaxis

    var crypto = crypto.subtle;

## Especificaciones

| Especificación                                                                       | Estado                                   | Comentario          |
| ------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------- |
| {{ SpecName('Web Crypto API', '#dfn-Crypto', 'Crypto.subtle') }} | {{ Spec2('Web Crypto API') }} | Definición inicial. |

## Compatibilidad del navegador

{{Compat("api.Crypto.subtle")}}

## Ver también

- {{domxref("Crypto")}}.
- {{domxref("SubtleCrypto")}}.
- [Compatibility test page](https://vibornoff.github.io/webcrypto-examples/index.html).
- [Shim for IE11 and Safari](https://github.com/vibornoff/webcrypto-shim).
