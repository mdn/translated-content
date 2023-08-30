---
title: encodeURI
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
---

{{jsSidebar("Objects")}}

## Sumario

Codifica un Identificador de Recurso Uniforme (Uniform Resource Identifier, URI) reemplazando cada instancia de ciertos carácteres por uno, dos o tres secuencias de escape representando el carácter codificado en UTF-8.

## Sintaxis

`encodeURI(URI)`

### Parámetros

- `URI`
  - : Un Identificador de Recurso Uniforme codificado.

## Descripción

Se asume que el URI es un URI completo, a fin de no codificar caracteres reservados que tienen un significado especial en la URI.

`encodeURI` reemplaza todos los caracteres excepto los siguientes con las secuencias de escape UTF-8:

| Tipo                  | Incluye                                             |
| --------------------- | --------------------------------------------------- |
| Caracteres reservados | `; , / ? : @ & = + $`                               |
| Caracteres No escape  | Alfabéticos, dígitos decimales, `- _ . ! ~ * ' ( )` |
| Almohadilla           | `#`                                                 |

Tenga en cuenta que encodeURI por sí sola no puede formar solicitudes correctas HTTP GET y POST, como por XMLHTTPRequests, porque "&", "+", y "=" no están codificados, los cuales son tratados como caracteres especiales en las solicitudes GET y POST. [`encodeURIComponent`](/es/Core_JavaScript_1.5_Reference/Global_Functions/encodeURIComponent), sin embargo, codifica estos caracteres. Lo más probable es que estos comportamientos no sean compatibles en los navegadores Web.

## Ver También

- {{jsxref("decodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
