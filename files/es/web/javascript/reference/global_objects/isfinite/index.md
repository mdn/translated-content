---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
tags:
  - Function
  - JavaScript
  - isFinite()
translation_of: Web/JavaScript/Reference/Global_Objects/isFinite
original_slug: Web/JavaScript/Referencia/Objetos_globales/isFinite
---
{{jsSidebar("Objects")}}

## Resumen

La función global **`isFinite()`** determina si el valor que se le pasa como argumento es un numero finito. Si es necesario, realiza una conversión a un numero al parametro pasado.

## Sintaxis

```
isFinite(testValue)
```

## Parámetros

- `testvalue`
  - : Valor a ser evaluado.

## Descripción

`isFinite` es una función de alto nivel y no está asociada a ningún objeto.

Puede usar esta función para determinar si un número es un número finito. La función `isFinite` examina el número de su argumento. Si el argumento es `NaN`, infinito positivo o infinito negativo, este método devuelve `false`, de otro modo devuelve `true`.

## Ejemplos

```js
isFinite(Infinity);    // falso
isFinite(NaN);         // falso
isFinite(-Inifinity);  // falso

isFinite(0);           // verdadero
isFinite(2e64);        // verdadero

isFinite("0");         // verdadero, hubiera sido falso en el caso de usar Number.isFinite("0") que es mas robusta
```

## Especificaciones

| Especificaciones                                                         | Estado                   | Comentarios        |
| ------------------------------------------------------------------------ | ------------------------ | ------------------ |
| ECMAScript 2nd Edition.                                                  | Estándar                 | Definición inicial |
| {{SpecName('ES5.1', '#sec-15.1.2.5', 'isFinite')}}     | {{Spec2('ES5.1')}} |                    |
| {{SpecName('ES6', '#sec-isfinite-number', 'isFinite')}} | {{Spec2('ES6')}}     |                    |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.isFinite")}}

## Vea También

- **`Number.isFinite()`**
- **`Number.NaN()`**
- [**`Number.POSITIVE_INFINITY`**](/es/docs/Referencia_de_JavaScript_1.5/Objetos_globales/Number/POSITIVE_INFINITY)
- [**`Number.NEGATIVE_INFINITY`**](/es/docs/Referencia_de_JavaScript_1.5/Objetos_globales/Number/NEGATIVE_INFINITY)
