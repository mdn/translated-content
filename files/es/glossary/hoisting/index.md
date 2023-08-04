---
title: Hoisting
slug: Glossary/Hoisting
---

Hoisting es un término que _no_ encontrará utilizado en ninguna especificación previa a la [Especificación del Lenguaje ECMAScript® 2015](http://www.ecma-international.org/ecma-262/6.0/index.html). El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript (específicamente las fases de creación y ejecución). Sin embargo, el concepto puede ser un poco confuso al principio.

Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad. Lo que sucede es que las declaraciones de variables y funciones son **asignadas en memoria** durante la fase de **compilación**, pero quedan exactamente en dónde las has escrito en el código.

## Aprenda más

### Ejemplo técnico

Una de las ventajas en JavaScript de colocar (**ponerlas en memoria**) las declaraciones de funciones antes de ejecutar cualquier otro segmento de código es que permite utilizar una función antes de declararla en el código. Por ejemplo:

```js
function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}

nombreDelGato("Maurizzio");
/*
El resultado del código es: "El nombre de mi gato es Maurizzio"
*/
```

El código escrito arriba está escrito de la manera que sería esperada para que funcione. Ahora, veamos qué sucede cuando llamamos a la función antes de escribirla:

```js
nombreDelGato("Dumas");

function nombreDelGato(nombre) {
  console.log("El nombre de mi gato es " + nombre);
}
/*
El resultado del código es: "El nombre de mi gato es Dumas"
*/
```

Como se puede observar, aunque primero llamamos a la función en el código, antes de que sea escrita, el código aún funciona. Esto sucede por la manera en la que el contexto de ejecución trabaja en JavaScript.

Hoisting se lleva también bien con otros tipos de datos y variables. Observemos el siguiente ejemplo:

### Ejemplo técnico

```js
var x = 5;

(function () {
  console.log("x:", x); // no obtenemos '5' sino 'undefined'
  var x = 10;
  console.log("x:", x); // 10
})();
```

¿No hemos obtenido lo esperado?, como la declaración de variables se procesa antes de ejecutar cualquier código, declarar una variable en cualquier parte del código es igual a declararla al inicio del mismo. Lo que ocurre aquí y para que se entienda, es que hipotéticamente la variable se **eleva** y pasa a declararse **al comienzo de su contexto**, en este caso la función que la contiene.

El ejemplo anterior se entiende implícitamente como:

```js
var x = 5;

(function () {
  var x; // Se elevo la declaración
  console.log("x:", x); // undefined
  x = 10;
  console.log("x:", x); // 10
})();
```

JavaScript sólo utiliza el hoisting en **declaraciones**, no inicializaciones. Si está utilizando una variable que **es declarada e inicializada después** (está después en el código) **de usarla**, el valor será `undefined`. El siguiente ejemplo demuestra ese comportamiento:

```js
var x = 1; // Inicializa x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Inicializa y
```

Como se puede apreciar **la elevación afecta la declaración** de variables, pero **no su inicialización**. El valor será asignado exactamente cuando la sentencia de asignación sea alcanzada.

El ejemplo anterior se entiende implícitamente como:

```js
var x = 1; // Inicializa x
var y; // Se elevo la declaración
console.log(x + " " + y); // '1 undefined'
y = 2; // Inicializa y
```

### Referencia técnica

- [JavaScript: Entendiendo las partes raras](https://www.udemy.com/understand-javascript/) - Curso de Udemy.com
- [Sentencia var](/es/docs/Web/JavaScript/Reference/Statements/var) - MDN
- [Sentencia function](/es/docs/Web/JavaScript/Reference/Statements/function) - MDN
