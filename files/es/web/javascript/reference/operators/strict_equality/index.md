---
title: Igualdad Estricta (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
---

{{jsSidebar("Operators")}}

El operador de estricta igualdad (`===`) revisa si dos operandos son iguales y produce un resultado Booleano. A diferencia del operador de igualdad regular (==), el operador de estricta igualdad siempre considera que los operandos de distinto tipo de valor son diferentes y nunca similares.

{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

## Sintaxis

```
x === y
```

## Descripción

Los operadores de estricta igualdad (`===` y `!==`) usan el [Algoritmo Estricto Comparativo de Igualdad](http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6)para comparar dos operandos:

- Si los operandos son de diferente tipo de valor, produce `false`.
- Si ambos operandos son objetos, produce `true` solo si se refiere al mismo objeto.
- Si ambos operandos son de tipo `null` o ambos operandos son `undefined`, produce `true`.
- Si cualquier operando es de tipo NaN, produce `false`.
- En otros casos, compara los valores de ambos operandos:

  - Los números deben tener el mismo valor numérico, aunque `+0` y `-0` son considerados como del mismo valor.
  - Los strings deben tener los mismos caracteres en el mismo orden.
  - Los booleanos deben ambos ser `true` o ambos ser `false`.

La diferencia más notable entre este operador y el operador de [igualdad](/es/docs/Web/JavaScript/Reference/Operators/Equality) regular (`==`) es que si los operandos son de distinto tipo de valor, el operador `==` intenta convertir los valores a un mismo tipo de dato antes de compararlos.

## Ejemplos

### Comparando operandos del mismo tipo

```js
console.log("hello" === "hello"); // true
console.log("hello" === "hola"); // false

console.log(3 === 3); // true
console.log(3 === 4); // false

console.log(true === true); // true
console.log(true === false); // false

console.log(null === null); // true
```

### Comparando operandos de distinto tipo

```js
console.log("3" === 3); // false

console.log(true === 1); // false

console.log(null === undefined); // false
```

### Comparando objetos

```js
const object1 = {
  name: "hello",
};

const object2 = {
  name: "hello",
};

console.log(object1 === object2); // false
console.log(object1 === object1); // true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## También revisa

- [Operador de igualdad](/es/docs/Web/JavaScript/Reference/Operators/Equality)
- [Operador de desigualdad](/es/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Operador de estricta desigualdad](/es/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
