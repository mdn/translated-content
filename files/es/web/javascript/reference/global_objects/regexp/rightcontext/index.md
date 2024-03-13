---
title: RegExp.rightContext ($')
slug: Web/JavaScript/Reference/Global_Objects/RegExp/rightContext
---

{{JSRef}} {{non-standard_header}}

La propiedad **rightContext _(No es estándar)_** es una propiedad estática y de solo lectura de expresiones regulares que contiene la subcadena que sigue a la coincidencia más reciente. el alias para esta propiedad es `RegExp.$'`.

## Sintaxis

```
RegExp.rightContext
RegExp["$'"]
```

## Descripción

La propiedad `rightContext` es estática, no es una propiedad de un objeto de expresión regular individual. Debe usarse como `RegExp.rightContext` o `RegExp["$'"].`

El valor de la propiedad `rightContext` es de solo lectura y se modifica cada que hay una coincidencia exitosa.

Tenga presente que no puede usar la abreviatura (`RegExp.$'`), porque el analizador espera una cadena de inicio, si lo hace optendra un error de sintaxis {{jsxref("SyntaxError")}} , para este caso, usted debe usar corchetes. consulte [notación de paréntesis para acceso a la propiedad](/es/docs/Web/JavaScript/Reference/Operators/Property_Accessors).

## Ejemplos

### Usando `rightContext` y `$'`

```js
var re = /hola/g;
re.test("hola mundo!");
RegExp.rightContext; // " mundo!"
RegExp["$'"]; // " mundo!"
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{non-standard_inline}} {{jsxref("RegExp.input", "RegExp.input ($_)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastMatch", "RegExp.lastMatch ($&amp;)")}}
- {{non-standard_inline}} {{jsxref("RegExp.lastParen", "RegExp.lastParen ($+)")}}
- {{non-standard_inline}} {{jsxref("RegExp.leftContext", "RegExp.leftContext ($`)")}}
- {{non-standard_inline}} {{jsxref("RegExp.n", "RegExp.$1-$9")}}
