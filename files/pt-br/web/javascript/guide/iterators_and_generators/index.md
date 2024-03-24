---
title: Iteratores e geradores
slug: Web/JavaScript/Guide/Iterators_and_generators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}

Processar cada item em uma coleção é uma operação muito comum. O JavaScript disponibiliza uma série de maneiras de iterar sobre uma coleção, desde um simples laço {{jsxref("Statements/for","for")}}, até um {{jsxref("Global_Objects/Array/map","map()")}} e também com o {{jsxref("Global_Objects/Array/filter","filter()")}}. Iteradores e Geradores trazem o conceito da interação ocorrer diretamente no núcleo da linguagem e prover um mecanismo para a customização do comportamento dos laços {{jsxref("Statements/for...of","for...of")}}.

Para detalhes, também veja:

- [Protocolos de iteração](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of","for...of")}}
- {{jsxref("Statements/function*","function*")}} e {{jsxref("Generator")}}
- {{jsxref("Operators/yield","yield")}} e {{jsxref("Operators/yield*","yield*")}}

## Iterators (Iteradores)

Um objeto é um **iterator (iterador)** quando sabe como acessar itens numa coleção, um por vez, enquanto mantém rastreada a posição atual em uma dada sequência. Em JavaScript um iterator é um objeto que oferece o método `next()`, o qual retorna o próximo item da sequência. Este método retorna um objeto com duas propriedades: `done` e `value`.

Uma vez criado, um objeto iterator pode ser usado explicitamente ao chamar repetidas vezes o método `next()`.

```js
const makeIterator = (array) => {
  let nextIndex = 0;

  return {
    next: () => {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
  };
};
```

Uma vez inicializado, o método `next()` pode ser chamado para acessar os pares chave/valor do objeto da vez.

```js
let it = makeIterator(["yo", "ya"]);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
```

## Iterables (Iteráveis)

Um objeto é iterável **(iterable),** se ele define seu comportamento de iteração, como no caso de quais valores percorridos em um laço do tipo {{jsxref("Statements/for...of", "for..of")}}. Alguns tipos embutidos, como o {{jsxref("Array")}}, ou o {{jsxref("Map")}}, têm um comportamento iterável padrão, enquanto outros tipos (como o{{jsxref("Object")}}) não possuem.

Para que um objeto seja **iterable**, o objeto precisa implementar o método **@@iterator**, significando que o objeto (ou um dos objetos na cadeia de prototipagem - [prototype chain](/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)) precisa ter uma propriedade com uma chave {{jsxref("Symbol.iterator")}}:

### Iterables definidos pelo usuário

Você pode fazer seus próprios iteráveis da seguinte maneira:

```js
var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};
[...myIterable]; // [1, 2, 3]
```

### Iterables Built-in (Iteráveis Embutidos)

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} e {{jsxref("Set")}} são iteráveis embutidos, pois o protótipo dos objetos de todos eles têm o método {{jsxref("Symbol.iterator")}}.

### Syntaxes expecting iterables

Algumas declarações e expressões esperam por iteradores, por exemplo o {{jsxref("Statements/for...of","for-of")}} loops, {{jsxref("Operators/Spread_operator","spread operator","","true")}}, {{jsxref("Operators/yield*","yield*")}}, e {{jsxref("Operators/Destructuring_assignment","destructuring assignment","","true")}}.

```js
for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[(a, b, c)] = new Set(["a", "b", "c"]);
a; // "a"
```

## Generators

Enquanto os iteradores são ferramentas muito úteis, sua criação requer um cuidado devido à necessidade de manter explícito seu estado interno. **{{jsxref("Global_Objects/Generator","Generators","","true")}}** provêm uma alternativa poderosa: eles te permitem definir um algoritmo iterativo escrevendo uma função simples que pode manter seu estado próprio.

Generator é um tipo especial de função que trabalha como uma factory para iteradores. A função vira um generator se ela contém uma ou mais expressões {{jsxref("Operators/yield","yield")}} e se ela usa a sintaxe {{jsxref("Statements/function*","function*")}}.

```js
function* idMaker() {
  var index = 0;
  while (true) yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...
```

## Generators avançados

Generators computam seus valores "yielded" por demanda, que os permitem representar sequências de forma eficiente que costumam ser trabalhosas ao serem computadas, ou até sequências infinitas como demonstradas acima.

O método {{jsxref("Global_Objects/Generator/next","next()")}} também aceita um valor que pode ser usado para modificar o estado interno de um generator. O valor passado pro `next()` será tratado como o resultado da última expressão yield que pausou o generator.

Aqui um gerador de sequência Fibonacci usando `next(x)` pra restartar a sequência:

```js
function* fibonacci() {
  var fn1 = 1;
  var fn2 = 1;
  while (true) {
    var current = fn2;
    fn2 = fn1;
    fn1 = fn1 + current;
    var reset = yield current;
    if (reset) {
      fn1 = 1;
      fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next().value); // 13
console.log(sequence.next(true).value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
```

> **Nota:** Como um ponto de interesse, chamando `next(undefined)` é o mesmo que chamar `next()`. Entretanto, estartar um novo generator com qualquer valor que não seja undefined na chamada next() terá `TypeError` exception.

Você pode forçar um generator a lançar uma exceção chamando o seu método {{jsxref("Global_Objects/Generator/throw","throw()")}} e passando o valor da exceção que ele deve lançar. Essa exceção será lançada do contexto suspenso atual do generator, como se o `yield` atualmente suspenso fosse um `throw`.

Se um yield não for encontrado durante o processo de lançamento de um thrown exception, então o exception será propagado através da chamada do `throw()`, e pra subsequente chamada do `next()` que terá a propriedade done resultando em `true`.

Generators têm o método {{jsxref("Global_Objects/Generator/return","return(value)")}} que retorna o valor pego e finaliza o generator.

{{PreviousNext("Web/JavaScript/Guide/Details_of_the_Object_Model", "Web/JavaScript/Guide/Meta_programming")}}
