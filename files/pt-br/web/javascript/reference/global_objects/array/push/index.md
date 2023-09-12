---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
---

{{JSRef("Global_Objects", "Array")}}

## Resumo

O método **push()** adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

```js
var numeros = [1, 2, 3];
numeros.push(4);

console.log(numeros); // [1, 2, 3, 4]

numeros.push(5, 6, 7);

console.log(numeros); // [1, 2, 3, 4, 5, 6, 7]
```

**Sintaxe**

```
arr.push(elemento1, ..., elementoN)
```

### Parâmetros

- `elementoN`
  - : Os elementos a serem incluídos ao final do array.

### Retorno

O novo valor da propriedade {{jsxref("Array.length", "length")}} do objeto no qual o método foi chamado.

**Descrição**

O método `push` adiciona valores a um array.

Esse método é intencionalmente genérico. Podendo ser utilizado por {{jsxref("Function.call", "call()")}} ou {{jsxref("Function.apply", "apply()")}} em objetos que implementam arrays. O método push depende da propriedade length para determinar onde começar a inserir os valores. Caso a propriedade `length` não possa ser convertida em número, é utilizado 0 como índice. Isto inclui a possibilidade de `length` não existir, nesse caso, essa propriedade será criada.

Os únicos objetos que implementam nativamente array são as {{jsxref("Global_Objects/String", "strings", "", 1)}}, porém elas não são adequadas para a aplicação desse método, pois são imutáveis.

## Exemplos

### Exemplo: Adicionando elementos a um array

O seguinte código cria um array `esportes` que contém dois elementos. Então adiciona dois elementos a ele. A variável `total` contém o novo comprimento do array.

```js
var esportes = ["futebol", "beisebol"];
var total = esportes.push("handebol", "natacao");

console.log(esportes); // ['futebol, 'beisebol', 'handebol', 'natacao']
console.log(total); // 4
```

### Exemplo: Fusão de dois arrays

Este exemplo utiliza {{jsxref("Function.apply", "apply()")}} para adicionar todos os elementos de um segundo array.

```js
var vegetais = ["cenoura", "batata"];
var maisVegetais = ["aipo", "beterraba"];

// Adiciona o segundo array no primeiro
// Equivalente a vegetais.push('aipo', 'beterraba');
Array.prototype.push.apply(vegetais, maisVegetais);

console.log(vegetais); // ['cenoura', 'batata', 'aipo', 'beterraba']
```

### Exemplo: Utilizando um object como um array-like

Como mencionado acima, `push` é intencionalmente genérico, e podemos usar isso para nossa vantagem. `Array.prototype.push` pode trabalhar em um objeto muito bem, como mostra este exemplo. Observe que não criamos um array para armazenar uma coleção de objetos. Em vez disso, armazenamos a coleção no objeto em si e usamos a chamada em `Array.prototype.push` para enganar o método e pensar que estamos lidando com um array, e ele simplesmente funciona, graças à forma como o JavaScript nos permite estabelecer o contexto de execução quando queremos.

```js
var obj = {
  length: 0,

  addElem: function addElem(elem) {
    // obj.length é automaticamente incrementado
    // toda vez que um elemento for adicionado.
    [].push.call(this, elem);
  },
};

// Vamos adicionar alguns objetos vazios apenas para ilustrar.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
```

Observe que, embora `obj` não seja um array, o método `push` aumentou com sucesso a propriedade de comprimento (`length`) do `obj` como se estivéssemos lidando com um array.

## Especificações

| Especificação                                                            | Estado             | Comentário                                           |
| ------------------------------------------------------------------------ | ------------------ | ---------------------------------------------------- |
| ECMAScript 3ª Edição                                                     | Padrão             | Implementação inicial. Implentado no JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.7', 'Array.prototype.push')}}           | {{Spec2('ES5.1')}} |                                                      |
| {{SpecName('ES6', '#sec-array.prototype.push', 'Array.prototype.push')}} | {{Spec2('ES6')}}   |                                                      |

## Compatibilidade em navegadores

{{Compat("javascript.builtins.Array.push")}}

## Veja também

- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
