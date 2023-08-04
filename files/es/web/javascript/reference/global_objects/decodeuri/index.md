---
title: decodeURI()
slug: Web/JavaScript/Reference/Global_Objects/decodeURI
---

{{jsSidebar("Objects")}}

## Sumario

Decodifica un Identificador de Recurso Uniforme (Uniform Resource Identifier, URI) previamente creado por {{jsxref("encodeURI")}} o por una rutina similar.

## Sintaxis

`decodeURI(encodedURI)`

### Parámetros

- `encodedURI`
  - : Un completo, Identificador de Recurso Uniforme.

## Descripción

Sustituye a cada secuencia de escape codificado en URI con el carácter que representa.

No decodifica secuencias de escape que no se puedan haber introducido por {{jsxref("encodeURI")}}.

## Ver también

- {{jsxref("decodeURIComponent")}}
- {{jsxref("encodeURI")}}
- {{jsxref( "encodeURIComponent")}}
