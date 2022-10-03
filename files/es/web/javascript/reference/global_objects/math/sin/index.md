---
title: Math.sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
translation_of: Web/JavaScript/Reference/Global_Objects/Math/sin
original_slug: Web/JavaScript/Referencia/Objetos_globales/Math/seno
---
{{JSRef("Global_Objects", "Math")}}

## Resumen

La función **`Math.sin()`** devuelve el seno de un número.

## Sintaxis

```
Math.sin(x)
```

### Parámetros

- `x`
  - : Un número (en radianes).

## Descripción

El método `Math.sin()` devuelve un valor numérico entre -1 y 1, que representa el seno del ángulo dado en radianes.
Debido a que `sin()` es un método estático de `Math`, siempre se usa como `Math.sin()`, en vez de crear un objeto `Math` y usarlo como un método (`Math` no es un constructor).

## Ejemplos

### Ejemplo: Usando `Math.sin()`

```js
Math.sin(0);           // 0
Math.sin(1);           // 0.8414709848078965

Math.sin(Math.PI / 2); // 1
```

## Especificaciones

| Especificaciones                                                     | Estatus                  | Comentarios                                         |
| -------------------------------------------------------------------- | ------------------------ | --------------------------------------------------- |
| ECMAScript 1ª Edición.                                               | {{Spec2('ES1')}}     | Definición inicial. Implementado en JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.2.16', 'Math.sin')}} | {{Spec2('ES5.1')}} |                                                     |
| {{SpecName('ES6', '#sec-math.sin', 'Math.sin')}}     | {{Spec2('ES6')}}     |                                                     |

## Compatibilidad con navegadores

{{Compat("javascript.builtins.Math.sin")}}

## Ver también

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.asin()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.tan()")}}
