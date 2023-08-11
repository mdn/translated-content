---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
---

{{JSRef}}

O objeto **`Generator`** é retornado por {{jsxref("Statements/function*", "generator function", "", 1)}} e conforme [iterable protocol](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) e o [iterator protocol](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols#iterator).

## Síntaxe

```
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
```

## Métodos

- {{jsxref("Generator.prototype.next()")}}
  - : Retorna o valor fornecido pela expressão {{jsxref("Operators/yield", "yield")}}.
- {{jsxref("Generator.prototype.return()")}}
  - : Retorna o valor fornecido a finaliza o generator.
- {{jsxref("Generator.prototype.throw()")}}
  - : Lança um erro no generator.

## Example

### An infinite iterator

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

## Objeto legacy generator

Firefox (SpiderMonkey) também implementa a versão anterior do generator em [JavaScript 1.7](/pt-BR/docs/Web/JavaScript/New_in_JavaScript/1.7), onde o asterisco (\*) na declaração da função não era necessário (somente era necessário usar a palavra reservada `yield` no corpo da função). Contudo, legacy generators estão obsoletos. Não os use, eles serão removidos ([Erro do Firefox 1083482](https://bugzil.la/1083482)).

### Métodos legacy generator

- `Generator.prototype.next()` {{non-standard_inline}}
  - : Retorna o valor fornecido pela expressão {{jsxref("Operators/yield", "yield")}}. Isto corresponde ao `next()` do ES6.
- `Generator.prototype.close()` {{non-standard_inline}}
  - : Fecha o generator, então quando chamar `next()` um erro {{jsxref("StopIteration")}} será lançado. Isto corresponde ao método `return()` do ES6.
- `Generator.prototype.send()` {{non-standard_inline}}
  - : Usado para enviar um valor para o generator. Este valor é retordo pela expressão {{jsxref("Operators/yield", "yield")}}, e retorna o valor fornecido pelo pelo next {{jsxref("Operators/yield", "yield")}}. `send(x)` corresponde ao `next(x)` do ES6.
- `Generator.prototype.throw()` {{non-standard_inline}}
  - : Lança um erro no generator. Isto corresponde ao método `throw() do ES6.`

### Exemplo do Legacy generator

```js
function* fibonacci() {
  var a = yield 1;
  yield a * 2;
}

var it = fibonacci();
console.log(it); // "Generator {  }"
console.log(it.next()); // 1
console.log(it.send(10)); // 20
console.log(it.close()); // undefined
console.log(it.next()); // throws StopIteration (Como o generator está fechado)
```

## Especificações

| Especificações                                                         | Status               | Comentário        |
| ---------------------------------------------------------------------- | -------------------- | ----------------- |
| {{SpecName('ES6', '#sec-generator-objects', 'Generator objects')}}     | {{Spec2('ES6')}}     | Definição Inicial |
| {{SpecName('ESDraft', '#sec-generator-objects', 'Generator objects')}} | {{Spec2('ESDraft')}} |                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Generator")}}

## Veja Também

### Legacy generators

- {{jsxref("Statements/Legacy_generator_function", "The legacy generator function", "", 1)}}
- {{jsxref("Operators/Legacy_generator_function", "The legacy generator function expression", "", 1)}}
- {{jsxref("StopIteration")}}
- [The legacy Iterator protocol](/pt-BR/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features/The_legacy_Iterator_protocol)

### ES6 generators

- {{jsxref("Functions", "Functions", "", 1)}}
- {{jsxref("Statements/function", "function")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Function")}}
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Operators/function*", "function* expression")}}
- {{jsxref("GeneratorFunction")}}
- [The Iterator protocol](/pt-BR/docs/Web/JavaScript/Guide/The_Iterator_protocol)
