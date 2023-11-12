---
title: Comparación (==)
slug: Web/JavaScript/Reference/Operators/Equality
---

{{jsSidebar("Operators")}}

El operador de comparacion (`==`) comprueba si sus dos operandos son iguales y devuelve un resultado booleano. A diferencia del operador de igualdad estricta (`===`), es que este convierte y compara operandos que son de diferentes tipos.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}The source for this interactive example is stored in a GitHub repository. If you'd like to contribute to the interactive examples project, please clone <https://github.com/mdn/interactive-examples> and send us a pull request.

## Sintaxis

```
x == y
```

## Descripción

Los operadores de igualdad (`==` y `!=`) Utilizan el algoritmo de comparación de igualdad abstracta para comparar dos operandos. Esto se puede resumir a grandes rasgos como:

- Si los operandos ambos son objetos, devuelve `true`solo si ambos operandos hacen referencia al mismo objeto.
- Si un operando es `null` y el otro `undefined`, devuelve verdadero(`true`).
- Si los operandos son de diferente tipos, intenta convertirlos al mismo tipo antes de comparar:

  - Al comparar un número con una cadena, convierte la cadena en un valor numérico.
  - Si uno de los operandos es booleano, convierte el operando booleano en 1 si es verdadero y en 0 en el caso de falso.
  - Si uno de los operandos es un objeto y el otro es un número o una cadena, convierte el objeto en una primitiva utilizando los métodos `valueOf()` y `toString()` del objeto.

- Si los operandos tienen el mismo tipo, se comparan de la siguiente manera:

  - `String`: devuelve verdadero solo si ambos operandos tienen los mismos caracteres y en el mismo orden.
  - `Number`: devuelve verdadero solo si ambos operandos tienen el mismo valor. `+0` y `-0` se tratan como el mismo valor. Si alguno de los operandos es `NaN`, devuelve falso.
  - `Boolean`: retorna verdadero solo si ambos operandos son verdaderos o falsos.

La diferencia más notable entre este operador y el operador de igualdad estricta (`===`) es que el operador de igualdad estricta no realiza la conversión de tipos.

## Ejemplos

### Comparación sin conversión de tipo

```js
1 == 1; // true
"Hola" == "Hola"; // true
```

### Comparación con conversión de tipos

```js
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, Operador Logico NOT
0 == !!undefined; // true, Operador Logico NOT
null == undefined; // true

const number1 = new Number(3);
const number2 = new Number(3);
number1 == 3; // true
number1 == number2; // false
```

### Comparación de objetos

```js
const object1 = { key: "value" };
const object2 = { key: "value" };

object1 == object2; // false
object2 == object2; // true
```

### Comparar String y objetos String

Tenga en cuenta que las cadenas construidas con `new String()`son objetos. Si compara uno de estos con un String literal, el objeto String se convertirá en un `String` literal y se comparará el contenido. Sin embargo, si ambos operandos son objetos de tipo String, entonces se comparan como objetos y deben hacer referencia al mismo objeto para que la comparación sea exitosa:

```js
const string1 = "Hola";
const string2 = String("Hola");
const string3 = new String("Hola");
const string4 = new String("Hola");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### Comparación de fechas y cadenas

```js
const d = new Date("December 17, 1995 03:24:00");
const s = d.toString(); // Por ejemplo: "Sun Dec 17 1995 03:24:00 GMT-0800 (Hora estándar del Pacífico)"
console.log(d == s); //true
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Inequality operator](/es/docs/Web/JavaScript/Reference/Operators/Inequality)
- [Strict equality operator](/es/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [Strict inequality operator](/es/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
