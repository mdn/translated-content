---
title: Parâmetros Rest
slug: Web/JavaScript/Reference/Functions/rest_parameters
---

{{jsSidebar("Functions")}}

A sintaxe de **rest parameter (parâmetros rest)** nos permite representar um número indefinido de argumentos como um array.

## Sintaxe

```js
function(a, b, ...theArgs) {
  // ...
}
```

## Descrição

Se o último argumento nomeado de uma função tiver prefixo com `...`, ele irá se tornar um array em que os elemento de 0 (inclusive) até theArgs.length (exclusivo) são disponibilizados pelos argumentos atuais passados à função.

No exemplo acima, `theArgs` irá coletar o terceiro argumento da função (porquê o primeiro é mapeado para `a`, e o segundo para `b`) e assim por diante em todos os argumentos consecutivos.

### Diferença entre _rest parameters_ e _`arguments` object_

Há três diferenças principais entre _rest parameters_ e os [`arguments`](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments) objects:

- _rest parameters_ são os únicos que não foram atribuidos a um nome separado, enquanto os `arguments` object contêm todos os argumentos passados para a função;
- o objeto `arguments` não é um array, enquanto rest parameters são instâncias [`Array`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array), isso significa que métodos como [`sort`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`map`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`forEach`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) ou [`pop`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) podem ser aplicados diretamente;
- o objeto `arguments` possui a funcionalidade adicional de especificar ele mesmo (como a propriedade `callee`).

### De arguments para array

Rest parameters foram criados para reduzir o código padrão que foi induzida pelos argumentos

```js
// Antes rest parameters, o seguinte codigo pode ser encontrado
function f(a, b){
  var args = Array.prototype.slice.call(arguments, f.length);

  // ...
}

// esse é o equivalente

function(a, b, ...args) {

}
```

## Exemplos

Como `theArgs` é um array, você pode pegar número de elementos usando a propriedade `length`:

```js
function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

No próximo exemplo, nós usamos o rest parâmetro para buscar argumentos do segundo parâmetro para o fim. Nós multiplicamos eles pelo primeiro parâmetro:

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

O próximo exemplo mostra como você pode usar metodos do Array em rest params, mas não no objeto `arguments`:

```js
function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5, 3, 7, 1)); // Exibe 1,3,5,7

function sortArguments() {
  var sortedArgs = arguments.sort();
  return sortedArgs; // isso nunca irá ocorrer
}

// throws a TypeError: arguments.sort is not a function
console.log(sortArguments(5, 3, 7, 1));
```

a fim de usar o objeto `arguments`, você precisará converte-lo para um array antes.

## Especificações

| Especificações                                                           | Status           | Comentário          |
| ------------------------------------------------------------------------ | ---------------- | ------------------- |
| {{SpecName('ES6', '#sec-function-definitions', 'Function Definitions')}} | {{Spec2('ES6')}} | Initial definition. |

## Compatibilidade

{{Compat("javascript.functions.rest_parameters")}}

## Veja também

- [Arguments object](/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments)
- [Array](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Functions](/pt-BR/docs/Web/JavaScript/Reference/Functions)
- [Spread Operator](/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator)
- [Original proposal at ecmascript.org](http://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters)
- [JavaScript arguments object and beyond](http://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/)
