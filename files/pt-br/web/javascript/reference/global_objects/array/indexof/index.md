---
title: Array.prototype.indexOf()
slug: Web/JavaScript/Reference/Global_Objects/Array/indexOf
---

{{JSRef}}

O método **`indexOf()`** retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

{{EmbedInteractiveExample("pages/js/array-indexof.html")}}

## Sintaxe

```
array.indexOf(elementoDePesquisa, [pontoInicial = 0])
```

### Parâmetros

- `elementoDePesquisa`
  - : `Elemento a ser pesquisado no array.`
- `pontoInicial`
  - : O índice para iniciar a procura. Se o índice for maior ou igual ao tamanho do array, é retornado -1 e signfica que o item não será procurado. Se o `pontoInicial` é fornecido com um número negativo, é tomado como deslocamento da extremidade do array. Nota: se o `pontoInicial` fornecido é negativo, a procura no array acontece de frente para trás. Se o `pontoInicial` fornecido é 0, então o array inteiro será pesquisado. Padrão: 0 (pesquisa em todo array).

## Descrição

`indexOf()` compara o `elementoDePesquisa` com os elementos do Array usando [igualdade estrita](/pt-BR/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators) (o mesmo método usado pelo ===, ou triple-equals operator).

## Exemplos

### Usando `indexOf()`

`O exemplo seguinte usa indexOf() para localizar valores em um array`

```js
var array = [2, 5, 9];
array.indexOf(2); // 0
array.indexOf(7); // -1
array.indexOf(9, 2); // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

### Encontrar todas as ocorrências de um elemento

```js
var indices = [];
var array = ["a", "b", "a", "c", "a", "d"];
var elemento = "a";
var idx = array.indexOf(elemento);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(elemento, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

### Encontrar se um elemento existe ou não e atualizar o array

```js
function atualizarColecaoVegetais(vegetais, vegetal) {
  if (vegetais.indexOf(vegetal) === -1) {
    vegetais.push(vegetal);
    console.log("Nova coleção de vegetais é : " + vegetais);
  } else if (vegetais.indexOf(vegetal) > -1) {
    console.log(vegetal + " já existe na coleção de vegetais.");
  }
}

var vegetais = ["batata", "tomate", "pimenta", "pimentao"];

atualizarColecaoVegetais(vegetais, "espinafre");
// Nova coleção de vegatais é : batata,tomate,pimenta,pimentao,espinafre
atualizarColecaoVegetais(vegetais, "espinafre");
// espinafre já existe na coleção de vegetais.
```

## Polyfill

`indexOf()` foi adicionado ao ECMA-262 standard em sua 5 edição; como tal, não pode estar presente em todos navegadores.Você pode contornar isso utilizando o seguinte codigo no inicio de seus scripts. Isto permitirá que voce use o `indexOf()` quando não possuir suporte nativo. Esse algoritmo corresponde ao especificado no ECMA-262, edição 5, assumindo {{jsxref("Global_Objects/TypeError", "TypeError")}} e {{jsxref("Math.abs()")}} tem seus valores originais.

```js
// Passos para a produção do ECMA-262, Edition 5, 15.4.4.14
// Referência: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (elementoDePesquisa, pontoInicial) {
    var k;

    //1. Deixe-o ser o resultado da chamada de toObject
    // passando o valor de this como argumento.
    if (this == null) {
      throw new TypeError(
        '"this" é nulo (null) ou não foi definido (undefined)',
      );
    }

    var O = Object(this);

    // 2. Deixar o tamanhoValor ser o resultado da
    // chamada do método interno Get de 0 com o
    // argumento "length"
    // 3. Deixar o  tamanhoValor ser um ToUint32(tamanhoValor).
    var tamanho = O.length >>> 0;

    // 4. se o tamanho é 0, retorna -1.
    if (tamanho === 0) {
      return -1;
    }

    // 5. Se o argumento pontoInicial for passado,
    // use o ToInteger(pontoInicial); senao use 0.
    var n = +pontoInicial || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    //6. Se n >= tamanho, retorna -1.
    if (n >= tamanho) {
      return -1;
    }

    // 7. Se n>= 0, entao k seja n.
    // 8. Senao, n<0, k seja tamanho - abs(n).
    // Se k é menor que 0, entao k seja 0.
    k = Math.max(n >= 0 ? n : tamanho - Math.abs(n), 0);

    // 9. Repita, enquanto k < tamanho
    while (k < tamanho) {
      // a. Deixe Pk ser ToString(k).
      //    isto é implicito para operandos LHS de um operador

      // b. Deixe o kPresent  ser o resultado da chamada do método
      //    interno de 0 com argumento Pk
      //    Este passo pode ser combinado com c.
      // c. Se kPresent é true, entao
      //    i.  Deixe o  elementK ser o resultado da chamada do metodo
      //        interno Get de 0 com argumento ToString(k)
      //   ii.  Deixe o resultado ser aplicado pelo Algoritmo de
      //        Comparação de Igualdade Estrita (Strict Equality Comparison)
      //        para o elementoDePesquisa e elementK
      //  iii.  caso verdadeiro, retorne k.
      if (k in O && O[k] === elementoDePesquisa) {
        return k;
      }
      k++;
    }
    return -1;
  };
}
```

## Especificações

| Especificação                                                                  | Status             | Comentários                                       |
| ------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.14', 'Array.prototype.indexOf')}}             | {{Spec2('ES5.1')}} | Definição inicial implementada no Javascript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.indexof', 'Array.prototype.indexOf')}} | {{Spec2('ES6')}}   |                                                   |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.indexOf")}}

## Veja também

- {{jsxref("Array.prototype.lastIndexOf()")}}
- {{jsxref("TypedArray.prototype.indexOf()")}}
