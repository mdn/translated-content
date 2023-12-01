---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
---

{{jsSidebar("Statements")}}

La declaración **`function*`** (la palabra clave `function` seguida de un asterisco) define una _función generadora_, que devuelve un objeto {{jsxref("Global_Objects/Generator","Generator")}}.

También puedes definir funciones generadoras usando el constructor {{jsxref("GeneratorFunction")}} y una {{jsxref("Operators/function*", "function* expression")}}.

## Sintaxis

```
function* nombre([param[, param[, ... param]]]) {
   instrucciones
}
```

- `nombre`

  - : El nombre de la función.

- `param`

  - : El nombre de los argumentos que se le van a pasar a la función. Una función puede tener hasta 255 argumentos.

- `instrucciones`
  - : Las instrucciones que componen el cuerpo de la función.

## Descripción

Los generadores son funciones de las que se puede salir y volver a entrar. Su contexto (asociación de variables) será conservado entre las reentradas.

La llamada a una función generadora no ejecuta su cuerpo inmediatamente; se devuelve un objeto [iterador](/es/docs/Web/JavaScript/Reference/Iteration_protocols#iterator) para la función en su lugar. Cuando el metodo `next()` del iterador es llamado , el cuerpo de la función generadora es ejecutado hasta la primera expresión {{jsxref("Operators/yield", "yield")}}, la cual especifica el valor que será retornado por el iterador o con, {{jsxref("Operators/yield*", "yield*")}}, delega a otra función generadora. El método `next()` retorna un objeto con una propiedad _value_ que contiene el valor bajo el operador yield y una propiedad _done_ que indica, con un booleano, si la función generadora ha hecho yield al último valor.

## Ejemplos

### Ejemplo simple

```js
function* idMaker() {
  var index = 0;
  while (index < 3) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined
// ...
```

### Ejemplo con yield\*

```js
function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i) {
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}} object
- [The Iterator protocol](/es/docs/Web/JavaScript/Guide/The_Iterator_protocol)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
- {{jsxref("Function")}} object
- {{jsxref("Statements/function", "function declaration")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope")}}
- Other web resources:

  - [Regenerator](http://facebook.github.io/regenerator/) an ES2015 generator compiler to ES5
  - [Forbes Lindesay: Promises and Generators: control flow utopia — JSConf EU 2013](http://www.youtube.com/watch?v=qbKWsbJ76-s)
  - [Hemanth.HM: The New gen of \*gen(){}](https://www.youtube.com/watch?v=ZrgEZykBHVo&list=PLuoyIZT5fPlG44bPq50Wgh0INxykdrYX7&index=1)
  - [Task.js](http://taskjs.org/)
