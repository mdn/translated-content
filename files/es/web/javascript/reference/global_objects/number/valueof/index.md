---
title: Number.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
tags:
  - JavaScript
  - Métodos
  - Number
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Number/valueOf
original_slug: Web/JavaScript/Referencia/Objetos_globales/Number/valueOf
---
{{JSRef}}

El método **`valueOf()`** retorna el valor primitivo inserto en un objeto {{jsxref("Number")}}.

## Sintaxis

```
numObj.valueOf()
```

### Valor retornado

Un número representando al valor primitivo del objeto {{jsxref("Number")}} especificado.

## Descripción

Este método es usualmente llamado de forma interna por JavaScript y no es explicitado en el código web.

## Ejemplos

### Utilizando `valueOf`

```js
var numObj = new Number(10);
console.log(typeof numObj); // objeto

var num = numObj.valueOf();
console.log(num);           // 10
console.log(typeof num);    // número
```

## Especificaciones

| Specification                                                                                                    | Status                       | Comment                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Definición inicial. Implementado en JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.4.4', 'Number.prototype.valueOf')}}                         | {{Spec2('ES5.1')}}     |                                                     |
| {{SpecName('ES6', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}}     | {{Spec2('ES6')}}         |                                                     |
| {{SpecName('ESDraft', '#sec-number.prototype.valueof', 'Number.prototype.valueOf')}} | {{Spec2('ESDraft')}} |                                                     |

## Compatibilidad con navegador

{{Compat("javascript.builtins.Number.valueOf")}}

## Ver también

- {{jsxref("Number.prototype.toSource()")}}
