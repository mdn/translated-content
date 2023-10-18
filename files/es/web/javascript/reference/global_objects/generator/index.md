---
title: Generador
slug: Web/JavaScript/Reference/Global_Objects/Generator
---

{{JSRef}}

El objeto `Generator` es retornado por una {{jsxref("Statements/function*", "función generator", "", 1)}} y es conformado tanto el protocolo iterable como el protocolo iterador.

## Constructor

Este objeto no puede ser instanciado directamente. En su lugar, una instancia del objeto `Generator` puede ser devuelta por una [función generator](/es/docs/Web/JavaScript/Referencia/Sentencias/function*):

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
```

## Métodos de instanciación

_Tambien hereda propiedades de {{JSxRef("Iterator")}}_

- {{jsxref("Generator.prototype.next()")}}
  - : Retorna el valor ofrecido por la expresión {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Generator.prototype.return()")}}
  - : Retorna el valor dado y finaliza el generador.
- {{jsxref("Generator.prototype.throw()")}}
  - : Lanza un error al generador (también finaliza el generador, a menos que sea atrapado desde ese generador)

## Propiedades

_Tambien hereda propiedades de {{JSxRef("Iterator")}}_

- `Generator.prototype.constructor`

  - : Especifica la funciòn que construye el prototipo del objeto.

- `Generator.prototype[@@toStringTag]`
  - : La cadena `"Generator"`.

## Ejemplo

### Un iterador infinito

```js
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker(); // "Generator { }"

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Objetos generadores legados

Firefox(SpiderMonkey) tambén implementa una versión mas temprana de generadores en JavaScript 1.7, donde el asterisco (\*) en la declaración de la funcion no era necesario(sólo use la palabra reservada yield en el cuerpo de la función). Sin embargo, los generadores legados se encuentran depreciados. No los use. Serán removidos ([Error 1083482 en Firefox](https://bugzil.la/1083482)).

### Métodos de generadores legados

- `Generator.prototype.next()` {{non-standard_inline}}
  - : Retorna el valor ofrecido por la expresión {{jsxref("Operators/yield", "yield")}}. Esto se corresponde con el método next() en el objeto generador de ES2015.
- `Generator.prototype.close()` {{non-standard_inline}}
  - : Cierra el generador. Sí el método next() es llamado por la expresión {{jsxref("StopIteration")}}, un error será lanzado. Esto se corresponde con el método return() del objeto generador de ES2015.
- `Generator.prototype.send()` {{non-standard_inline}}
  - : Utilizado para enviar un valor al generador. El valor es retornado por la expresion {{jsxref("Operators/yield", "yield")}}, y retorna el valor ofrecido por la siguiente expresion {{jsxref("Operators/yield", "yield")}}. `send(x)` Se corresponde a `next(x)` en el objeto generador de ECMAScript 2015.
- `Generator.prototype.throw()` {{non-standard_inline}}
  - : Lanza un error al generador. Esto se corresponde con el metodo throw() en el objeto genererador de ES2015.

### Ejemplo de generador legado

```js
function fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it);          // "Generator {  }"
console.log(it.next());   // 1
console.log(it.send(10)); // 20
console.log(it.close());  // undefined
console.log(it.next());   // throws StopIteration (as the generator is now closed)
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

### Generadores Legados

- {{jsxref("Statements/Legacy_generator_function", "The legacy generator function", "", 1)}}
- {{jsxref("Operators/Legacy_generator_function", "The legacy generator function expression", "", 1)}}
- {{jsxref("StopIteration")}}
- [The legacy Iterator protocol](/es/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol)

### Generadores ES2015

- {{jsxref("Functions", "Functions", "", 1)}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}}
- [The Iterator protocol](/es/docs/Web/JavaScript/Guide/The_Iterator_protocol)
