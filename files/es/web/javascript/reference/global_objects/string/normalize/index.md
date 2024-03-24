---
title: String.prototype.normalize()
slug: Web/JavaScript/Reference/Global_Objects/String/normalize
---

{{JSRef}}

El método **`normalize()`** retorna la Forma de Normalización Unicode de la cadena dada (si el valor no es una cadena, primero será convertido a ese tipo).

## Sintaxis

```
str.normalize([form])
```

### Parámetros

- `form`
  - : Uno de`"NFC"`, `"NFD"`, `"NFKC"`, o `"NFKD"`, especificando la Forma de Normalización Unicode. Si es omitida o {{jsxref("undefined")}}, se utiliza `"NFC"`.
    - `NFC` — Forma de Normalización de Composición Canónica.
    - `NFD` — Forma de Normalización de Descomposición Canónica.
    - `NFKC` — Forma de Normalización de Composición de Compatibilidad.
    - `NFKD` — Forma de Normalización de Descomposición de Compatibilidad.

### Valor de retorno

Una cadena que contiene la Forma de Normalización Unicode de la cadena dada.

### Errores lanzados

- {{jsxref("RangeError")}}
  - : Un error {{jsxref("RangeError")}} es lanzado si `form` no es uno de los valores especificados arriba.

## Descripción

El método `normalize()` retorna la Forma de Normalización Unicode de una cadena. No afecta el valor de la cadena en sí misma.

## Ejemplos

### Uso de `normalize()`

```js
// Cadena inicial

// U+1E9B: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA
// U+0323: COMBINACIÓN CON PUNTO ABAJO
var str = "\u1E9B\u0323";

// Forma compuesta canónicamente (NFC)

// U+1E9B: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA
// U+0323: COMBINACIÓN CON PUNTO ABAJO
str.normalize("NFC"); // '\u1E9B\u0323'
str.normalize(); // lo mismo que arriba

// Forma canónicamente descompuesta (NFD)

// U+017F: LETRA S LATINA MINÚSCULA
// U+0323: COMBINACIÓN CON PUNTO ABAJO
// U+0307: COMBINACIÓN CON PUNTO ARRIBA
str.normalize("NFD"); // '\u017F\u0323\u0307'

// Compuesta con compatibilidad (NFKC)

// U+1E69: LETRA S LATINA MINÚSCULA CON PUNTO ARRIBA Y ABAJO
str.normalize("NFKC"); // '\u1E69'

// Descompuesta con compatibilidad (NFKD)

// U+0073: LETRA S LATINA MINÚSCULA
// U+0323: COMBINACIÓN CON PUNTO ABAJO
// U+0307: COMBINACIÓN CON PUNTO ARRIBA
str.normalize("NFKD"); // '\u0073\u0323\u0307'
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- [Anexo del Estándar Unicode #15, Formas de Normalización Unicode](http://www.unicode.org/reports/tr15/)
- [Equivalencia Unicode](http://en.wikipedia.org/wiki/Unicode_equivalence)
