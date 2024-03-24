---
title: function
slug: Web/JavaScript/Reference/Statements/function
---

{{jsSidebar("Statements")}}

## Resumen

Declara una función con los parámetros especificados.

Puede también definir funciones usando el constructor {{jsxref("Function")}} y el {{jsxref("Operadors/function", "function")}} (expresión function).

## Sintaxis

```
function nombre([parametro1] [,parametro2] [..., parametroN]) {sentencias}
```

- `nombre`

  - : El nombre de la función.

- `parametroN`

  - : El nombre de un argumento que se pasa a la función. Una función puede tener hasta 255 argumentos.

- `sentencias`
  - : Las sentencias que comprenden el cuerpo de la función.

## Descripción

Para devolver un valor, la función debe tener una sentencia {{jsxref("Sentencias/return", "return")}} que especifica el valor a devolver.

Una función creada con la sentencia `function` es un objeto `Function` y tiene todas las propiedades, métodos, y comportamiento de los objetos `Function`. Vea {{jsxref("Function")}} para información detallada sobre funciones.

Una función puede también ser declarada dentro de una expresión. En este caso la función es normalmente anónima. Vea {{jsxref("Operadores/function", "function expression")}} para más información acerca de `function` (expresión function).

Las funciones pueden declararse condicionalmente. Es decir, una definición de una función puede estar anidada dentro de una sentecia `if`. Técnicamente, tales declaraciones no son en realidad declaraciones de funciones; son expresiones function (expresiones de función).

## Ejemplo

### Ejemplo: Usando `function`

El siguiente código declara una función que devuelve la cantidad total de ventas, cuando se da el número de unidades vendidas de productos `a`, `b`, y `c`.

```js
function calcular_ventas(unidades_a, unidades_b, unidades_c) {
  return unidades_a * 79 + unidades_b * 129 + unidades_c * 699;
}
```

## Vea También

- [Funciones](/es/docs/Web/JavaScript/Referencia/Funciones)
- {{jsxref("Function")}}
- Operadores{{jsxref("Operadores/function", "function")}}
