---
title: Array.prototype.reduce()
slug: Web/JavaScript/Reference/Global_Objects/Array/reduce
---

{{JSRef}}

O método **`reduce()`** executa uma função **reducer** (fornecida por você) para cada elemento do array, resultando num único valor de retorno.

{{EmbedInteractiveExample("pages/js/array-reduce.html")}}

A função **reducer** recebe quatro parâmetros:

1. Acumulador (`acc`)
2. Valor Atual (`cur`)
3. Index Atual (`idx`)
4. Array original (`src`)

O valor de retorno da sua função **reducer** é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

## Sintaxe

```js
array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])
```

### Parâmetros

- `callback`
  - : Função que é executada em cada valor no array (exceto no primeiro, se nenhum `valorInicial` for passado); recebe quatro argumentos:
- `acumulador`
  - : É o valor inicial (ou o valor do callback anterior). Este valor inicia com o `valorInicial` e será retornado na última iteração.
- `valorAtual`
  - : Opcional. O índice do elemento atual que está sendo processado no array. Começa a partir do index `0` se um `valorInicial` for fornecido. Do contrário, começa do index `1`.
- `valorInicial`
  - : Opcional. Valor a ser usado como o primeiro argumento da primeira chamada da função `callback`. Se nenhum `valorInicial` é fornecido, o primeiro elemento do array será usado como o valor inicial do `acumulador` e o `valorAtual` não será lido. Chamar `reduce()` em uma array vazia sem valor inicial retornará um erro.

### Valor retornado

O valor que resulta da execução da função de callback do "reducer" até a conclusão de todo o array.

## Descrição

O método `reduce()` executa a função de `callback` uma vez para cada elemento presente no array, excluindo furos (valores indefinidos), recebendo quatro argumentos:

1. _acumulador_ - valor inicial (ou o valor do callback anterior),
2. _valorAtual_ - o valor do elemento atual
3. _index_ - o índice atual e
4. `array` - o array onde a iteração está ocorrendo.

A primeira vez que o callback é chamado, o `acumulador` e o `valorAtual` podem ter um de dois valores possíveis. Se o `valorInicial` tiver sido fornecido na chamada à função `reduce()`, então o `acumulador` será igual ao `valorInicial` e o `valorAtual` será igual ao primeiro valor no array. Caso nenhum `valorInicial` seja fornecido, `acumulador` será igual ao primeiro valor no array, e `valorAtual` será igual ao segundo.

> **Nota:** Se o `valorInicial` não tiver sido passado como argumento, então reduce() executará o callback da função começando a partir do índice 1 (index 1), pulando o primeiro índice (`index 0`). Se o `valorInicial` for passado como argumento, a função irá começar no index 0.

Se a array estiver vazia e o `valorInicial` não tiver sido informado, uma exceção do tipo {{jsxref("Global_Objects/TypeError", "TypeError")}} será lançada.

Se a array possuir somente um elemento (independente da posição) e o `valorInicial` não tiver sido fornecido, ou se `valorInicial` for fornecido, mas a array estiver vazia, o valor será retornado sem que a função de `callback` seja chamada.

É mais seguro provir um `valorInicial`, porque existem até _quatro_ possíveis saídas sem o `valorInicial`, como mostrado no exemplo:

```js
var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
var maxCallback2 = (max, cur) => Math.max(max, cur);

// reduce() sem valores iniciais
[{ x: 22 }, { x: 42 }].reduce(maxCallback); // 42
[{ x: 22 }].reduce(maxCallback); // { x: 22 }
[].reduce(maxCallback); // TypeError

// map/reduce; melhor solução, funciona para vetores vazios e tambem para vetores grandes
[{ x: 22 }, { x: 42 }].map((el) => el.x).reduce(maxCallback2, -Infinity);
```

### Como funciona o reduce()

Suponha que o seguinte uso de reduce() tenha ocorrido:

```js
[0, 1, 2, 3, 4].reduce(function (acumulador, valorAtual, index, array) {
  return acumulador + valorAtual;
});
// 10
```

O callback será invocado quatro vezes, com os argumentos e valores em cada chamada sendo:

|                  | `acumulador` | valorAtual | index | `array`           | **valor de retorno** |
| ---------------- | ------------ | ---------- | ----- | ----------------- | -------------------- |
| primeira chamada | `0`          | `1`        | `1`   | `[0, 1, 2, 3, 4]` | `1`                  |
| segunda chamada  | `1`          | `2`        | `2`   | `[0, 1, 2, 3, 4]` | `3`                  |
| terceira chamada | `3`          | `3`        | `3`   | `[0, 1, 2, 3, 4]` | `6`                  |
| quarta chamada   | `6`          | `4`        | `4`   | `[0, 1, 2, 3, 4]` | `10`                 |

O valor retornado pelo `reduce` será o da última chamada à callback `(10)`.

Você também pode usar uma {{jsxref("Functions/Arrow_functions", "Arrow Function","",1)}} em vez de uma função completa. O código abaixo produz a mesma saída que o código do bloco acima:

```js
[0, 1, 2, 3, 4].reduce((accum, curr) => accum + curr);
```

Se você informar um valorInicial como o segundo argumento de reduce, o resultado será:

```js
[0, 1, 2, 3, 4].reduce(function (acumulador, valorAtual, indice, array) {
  return acumulador + valorAtual;
}, 10);

// 20
```

| `callback`       | `acumulador` | `valorAtual` | `index` | `array`           | `valor de retorno` |
| ---------------- | ------------ | ------------ | ------- | ----------------- | ------------------ |
| primeira chamada | `10`         | `0`          | `0`     | `[0, 1, 2, 3, 4]` | `10`               |
| segunda chamada  | `10`         | `1`          | `1`     | `[0, 1, 2, 3, 4]` | `11`               |
| terceira chamada | `11`         | `2`          | `2`     | `[0, 1, 2, 3, 4]` | `13`               |
| quarta chamada   | `13`         | `3`          | `3`     | `[0, 1, 2, 3, 4]` | `16`               |
| quinta chamada   | `16`         | `4`          | `4`     | `[0, 1, 2, 3, 4]` | `20`               |

O retorno da última chamada `20`,é retornado como resultado da função `reduce()`.

## Exemplos

### Soma todos os valores de uma array

```js
let total = [0, 1, 2, 3].reduce(function (acumulador, valorAtual) {
  return acumulador + valorAtual;
}, 0);
// retorna 6
```

outra alternativa é usar uma arrow function:

```js
var total = [0, 1, 2, 3].reduce(
  (acumulador, valorAtual) => acumulador + valorAtual,
  0,
);
```

### Soma de valores de um objeto de um array

Para resumir os valores contidos em um array, você **deve** fornecer um valorInicial, para que cada item passe por sua função.

```js
var valorInicial = 0;
var soma = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  acumulador,
  valorAtual,
) {
  return acumulador + valorAtual.x;
}, valorInicial);

console.log(soma); // retorna 6
```

Utilizando uma arrow function:

```js
var valorInicial = 0;
var soma = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
  (acumulador, valorAtual) => acumulador + valorAtual.x,
  valorInicial,
);

console.log(soma); // retorna 6
```

### Redução de um array de arrays

```js
let reduzido = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (acumulador, valorAtual) {
  return acumulador.concat(valorAtual);
}, []);
// reduzido é [0, 1, 2, 3, 4, 5]
```

Utilizando uma arrow function:

```js
let reduzido = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acumulador, valorAtual) => acumulador.concat(valorAtual), []);
```

### Contando valores iguais em um objeto

```js
let nomes = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

let quantidadeNomes = nomes.reduce(function (todosNomes, nome) {
  if (nome in todosNomes) {
    todosNomes[nome]++;
  } else {
    todosNomes[nome] = 1;
  }
  return todosNomes;
}, {});
// quantidade de nomes:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

### Agrupando objetos por uma propriedade

```js
let pessoas = [
  { nome: "Alice", idade: 21 },
  { nome: "Max", idade: 20 },
  { nome: "Jane", idade: 20 },
];

function agruparPor(objetoArray, propriedade) {
  return objetoArray.reduce(function (acc, obj) {
    let key = obj[propriedade];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

let grupodePessoas = agruparPor(pessoas, "idade");
// grupodePessoas é:
// {
//   20: [
//     { nome: 'Max', idade: 20 },
//     { nome: 'Jane', idade: 20 }
//   ],
//   21: [{ nome: 'Alice', idade: 21 }]
// }
```

### Juntando arrays contidos num array de objetos usando o operador spread e o `valorInicial`

```js
// friends - um array de objetos
// onde o campo "books" é a lista de livros favoritos
var friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks - lista que contém todos os livros de friends +
// lista adicional contida em valorInicial
var allbooks = friends.reduce(
  function (prev, curr) {
    return [...prev, ...curr.books];
  },
  ["Alphabet"],
);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

### Removendo itens duplicados num array

> **Nota:** Se você estiver usando um ambiente compatível com {{jsxref("Set")}} and {{jsxref("Array.from()")}}, você pode usar `let orderedArray = Array.from(new Set(myArray))` para obter um array em que os itens duplicados tenham sido removidos.

```js
let arr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
let result = arr.sort().reduce((init, current) => {
  if (init.length === 0 || init[init.length - 1] !== current) {
    init.push(current);
  }
  return init;
}, []);
console.log(result); //[1,2,3,4,5]
```

### Substituindo .filter().map() por .reduce()

Usar {{jsxref("Array.filter()")}} seguido por {{jsxref("Array.map()")}} faz com que o array seja percorrido duas vezes. Você pode obter o mesmo resultado percorrendo o array apenas uma vez com {{jsxref("Array.reduce()")}}, o que é, portanto, mais eficiente. (Se você gosta de for loops, você pode usar filter e map percorrendo o array apenas uma vez com {{jsxref("Array.forEach()")}}).

```js
const numbers = [-5, 6, 2, 0];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
  if (currentValue > 0) {
    const doubled = currentValue * 2;
    accumulator.push(doubled);
  }
  return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]
```

### Rodando promises em sequência

```js
/**
 * Roda promises de um promise array de uma maneira encadeada
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequense(arr) {
  return arr.reduce((promiseChain, currentPromise) => {
    return promiseChain.then((chainedResult) => {
      return currentPromise(chainedResult).then((res) => res);
    });
  }, Promise.resolve());
}

// promise function 1
function p1() {
  return new Promise((resolve, reject) => {
    resolve(5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// promise function 3
function p3(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 3);
  });
}

const promiseArr = [p1, p2, p3];
runPromiseInSequense(promiseArr).then((res) => {
  console.log(res); // 30
});
```

### Escrever map usando reduce

```js
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callback, thisArg) {
    return this.reduce(function (mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, []);
  };
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length,
); // [5, 7, , 10]
```

## Polyfill

`Array.prototype.reduce` foi adicionado ao padrão ECMA-262 na quinta edição; e portanto, pode não estar presente em todas as implementações do padrão. Você pode contornar isso inserindo o código a seguir no início de seus scripts, permitindo o uso do `reduce()` em implementações que não possuem suporte nativo a ele.

```js
// Etapas de produção para o ECMA-262, Edition 5, 15.4.4.21
// Referencia: http://es5.github.io/#x15.4.4.21
if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback /*, valorInicial*/) {
    "use strict";
    if (this == null) {
      throw new TypeError(
        "Array.prototype.reduce chamado é nulo (null) ou indefinido (undefined)",
      );
    }
    if (typeof callback !== "function") {
      throw new TypeError(callback + " não é uma função");
    }
    var t = Object(this),
      len = t.length >>> 0,
      k = 0,
      value;
    if (arguments.length == 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError(
          "Reduce possui um array vazio sem um valor inicial",
        );
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
```

## Especificações

| Especificação                                                                | Status             | Comentário                                        |
| ---------------------------------------------------------------------------- | ------------------ | ------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.21', 'Array.prototype.reduce')}}            | {{Spec2('ES5.1')}} | Definição inicial. Implemetada no JavaScript 1.8. |
| {{SpecName('ES6', '#sec-array.prototype.reduce', 'Array.prototype.reduce')}} | {{Spec2('ES6')}}   |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.reduce")}}

## Leia também

- {{jsxref("Array.prototype.reduceRight()")}}
