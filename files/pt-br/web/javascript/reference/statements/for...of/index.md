---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
---

{{jsSidebar("Statements")}}

O loop **`for...of`** percorre [objetos iterativos](/pt-BR/docs/Web/JavaScript/Guide/iterable) (incluindo {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, o objeto [arguments](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments) e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

## Sintaxe

```
for (variavel of iteravel) {
  declaração
}
```

- `variável`
  - : A cada iteração, um valor de uma propriedade diferente é atribuido à _variável_.
- `iteravel`
  - : Objeto cujos atributos serão iterados.

## Exemplos

### Iterando sobre um {{jsxref("Array")}}

```js
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

Ao invés de [`let`](/pt-BR/docs/Web/JavaScript/Reference/Statements/let), você pode usar [`const`](/pt-BR/docs/Web/JavaScript/Reference/Statements/const) se você não for modificar a variável dentro do bloco.

```
let iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

### Iterando sobre uma {{jsxref("String")}}

```
let iterable = "boo";

for (let value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"
```

### Iterando sobre uma {{jsxref("TypedArray")}}

```
let iterable = new Uint8Array([0x00, 0xff]);

for (let value of iterable) {
  console.log(value);
}
// 0
// 255
```

### Iterando sobre um {{jsxref("Map")}}

```
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);

for (let entry of iterable) {
  console.log(entry);
}
// [a, 1]
// [b, 2]
// [c, 3]

for (let [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando sobre um {{jsxref("Set")}}

```
let iterable = new Set([1, 1, 2, 2, 3, 3]);

for (let value of iterable) {
  console.log(value);
}
// 1
// 2
// 3
```

### Iterando sobre um objeto [arguments](/pt-BR/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments)

```
(function() {
  for (let argument of arguments) {
    console.log(argument);
  }
})(1,2,3);

// 1
// 2
// 3
```

### Iterando sobre uma coleção do DOM

Iterar sobre uma coleção do DOM como {{domxref("NodeList")}}: o seguinte exemplo adiciona uma classe `read` aos parágrafos que são descendentes diretos de uma tag `article`:

```
// Nota: Isso irá funcionar somente em plataformas que tem
// suporte ao NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll("article > p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
```

### Iterando sobre generators

Você pode também iterar sobre [generators](/pt-BR/docs/Web/JavaScript/Reference/Statements/function*):

```
function* fibonacci() { // uma função geradora (generator)
  let [prev, curr] = [1, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // Trunca a sequência em 1000
  if (n >= 1000) {
    break;
  }
}
```

#### Não reuse generators

Generators não devem ser re-usados, mesmo se o loop `for...of` for terminado precocemente, por exemplo através da palavra-chave {{jsxref("Statements/break", "break")}}. Enquanto em um loop ativo, o generator é fechado e tentar iterar novamente sobre ele não produz (yield) nenhum resultado adicional. O Firefox ainda não implementou este comportamento (o generator pode ser reutilizado, violando o padrão do ES2015 ([13.7.5.13, step 5m](https://www.ecma-international.org/ecma-262/6.0/#sec-13.7.5.13)), mas isso irá mudar uma vez que o [Erro do Firefox 1147371](https://bugzil.la/1147371) for resolvido.

```
var gen = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (let o of gen) {
  console.log(o);
  break;  // Closes iterator
}

// O generator não deve ser reutilizado, o código a seguir não
// faz sentido!
for (let o of gen) {
  console.log(o); // Nunca será chamado.
}
```

### Iterando sobre outros objetos iteráveis

Você pode também iterar sobre um objeto que implementa explicitamente um protocolo [iterável](/pt-BR/docs/Web/JavaScript/Reference/Iteration_protocols#iterable) protocol:

```
var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (var value of iterable) {
  console.log(value);
}
// 0
// 1
// 2
```

### Diferença entre `for...of` e `for...in`

O loop [`for...in`](/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in) irá iterar sobre todas as propriedades enumeráveis de um objeto.

A sintaxe do `for...of` é específica para **coleções**, ao invés de todos os objetos. Ela irá iterar desta maneira sobre os elementos de qualquer coleção que tiver uma propriedade `[Symbol.iterator]`.

O exemplo a seguir mostra a diferença entre um loop `for...of` e um loop `for...in`.

```
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = "hello";

for (let i in iterable) {
  console.log(i); // escreve 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
  console.log(i); // escreve 3, 5, 7
}
```

### Especificações

| Especificação                                                                      | Status               | Comentário          |
| ---------------------------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES6', '#sec-for-in-and-for-of-statements', 'for...of statement')}}     | {{Spec2('ES6')}}     | Definition Inicial. |
| {{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'for...of statement')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.statements.for_of")}}

## Consulte também

- [for each...in](/pt-BR/docs/Web/JavaScript/Reference/Statements/for_each...in) - uma declaração similar, mas que itera entre os valores dos atributos de um objeto, ao invés dos seus nomes (obsoleto).
- {{jsxref("Array.prototype.forEach()")}}
