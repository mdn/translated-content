---
title: Array.prototype.forEach()
slug: Web/JavaScript/Reference/Global_Objects/Array/forEach
---

{{JSRef}}

O método `forEach()` executa uma dada função em cada elemento de um array.

{{EmbedInteractiveExample("pages/js/array-foreach.html")}}

## Sintaxe

```
arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
```

### Parâmetros

- `callback`

  - : Função para executar em cada elemento, recebendo três argumentos:

    - `currentValue`
      - : O valor atual do elemento sendo processado no array.
    - `index` {{optional_inline}}
      - : O índice do elemento atual sendo processado no array.
    - `array` {{optional_inline}}
      - : O array que `forEach()` está sendo aplicado.

- `thisArg` {{optional_inline}}
  - : Opcional. Valor a ser usado como `this` quando executar `callback`.

### Valor retornado

`undefined`.

## Descrição

O `forEach` executa o `callback` fornecido uma vez para cada elemento da ordem com um valor atribuido. Ele não é invocado para propriedades de índices que foram deletados ou que não foram inicializados (por ex. em arrays esparsos).

`callback` é invocado com **três argumentos**:

- o **valor do elemento**
- o **índice do elemento**
- o **array que está sendo percorrido**

Se um parâmetro `thisArg` for passado para `forEach()`, ele será passado para o `callback` quando invocado como valor para `this`. Caso contrário, o valor {{jsxref("undefined")}} será passado como valor para `this`. O valor de `this` assumido no `callback` é determinado de acordo com as [regras usuais para determinação do `this` visto por uma função](/pt-BR/docs/Web/JavaScript/Reference/Operators/this).

O intervalo dos elementos processados por `forEach()` é determinado antes da primeira invocação do `callback`. Elementos que forem adicionados ao array depois da chamada ao `forEach()` começar não serão visitados pelo `callback`. Se os valores dos elementos existentes do array forem alterados, o valor passado para o `callback` será o valor no momento em que o `forEach()` visitá-los; elementos que forem deletados antes de serem visitados não serão visitados.

`forEach()` executa a a função `callback` uma vez para cada elemento do array – diferentemente de {{jsxref("Array.prototype.map()", "map()")}} ou {{jsxref("Array.prototype.reduce()", "reduce()")}}, ele sempre retorna o valor {{jsxref("undefined")}} e não é encadeável. O caso de uso típico é alterar o array no final do loop.

> **Nota:** A única maneira de parar ou interromper um loop `forEach()` é disparando uma exceção. Se você precisa desse recurso, o método `forEach()` é a ferramenta errada. Você estará mais bem servido com um loop simples nesse caso. Se estiver testando o array de elementos para um predicado e precisar de um valor de retorno Boleano, você pode usar {{jsxref("Array.prototype.every()", "every()")}} ou {{jsxref("Array.prototype.some()", "some()")}}. Se estiverem disponíveis, os novos métodos {{jsxref("Array.prototype.find()", "find()")}} e {{jsxref("Array.prototype.findIndex()", "findIndex()")}} também podem ser usados para terminação antecipada em predicados verdadeiros.

## Exemplos

### Imprimindo os conteúdos de uma ordem

Os códigos a seguir logam uma linha para cada elemento na ordem:

```js
function logArrayElements(element, index, array) {
  console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```

### Função para cópia de um objeto

O código a seguir cria uma cópia para cada objeto dado. Há diferentes formas de criar uma cópia para um objeto. Esta é somente uma forma de explicar como `Array.prototype.forEach` funciona. Ela usa um grupo de novas funções ECMAScript 5 Object.\*

```js
function copy(o) {
  var copy = Object.create(Object.getPrototypeOf(o));
  var propNames = Object.getOwnPropertyNames(o);

  propNames.forEach(function (name) {
    var desc = Object.getOwnPropertyDescriptor(o, name);
    Object.defineProperty(copy, name, desc);
  });

  return copy;
}

var o1 = { a: 1, b: 2 };
var o2 = copy(o1); // o2 looks like o1 now
```

## Compatibilidade

`forEach` é uma adição recente para o ECMA-262 standard; assim sendo, pode não estar presente em outras implementações do standard. Você pode contornar isto pela inserção do código a seguir no começo de seus scripts, permitindo o uso de `forEach` em implementações que normalmente não possuem este suporte.

```js
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (fn, scope) {
    for (var i = 0, len = this.length; i < len; ++i) {
      fn.call(scope, this[i], i, this);
    }
  };
}
```

Um algorítimo 100% verdadeiro para a 5ª Edição do ECMA-262, pode ser visto abaixo:

O algoritmo é exatamente o especificado na 5ª Edição da ECMA-262, assumindo `Object` e `TypeError` possuem seus valores originais e avalia `callback.call` para o valor original de [`Function.prototype.call`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Function/call).

```js
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.com/#x15.4.4.18
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function forEach(callback, thisArg) {
    var T, k;

    if (this == null) {
      throw new TypeError("this is null or not defined");
    }

    // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0; // Hack to convert O.length to a UInt32

    // 4. If IsCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if ({}.toString.call(callback) !== "[object Function]") {
      throw new TypeError(callback + " is not a function");
    }

    // 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
    if (thisArg) {
      T = thisArg;
    }

    // 6. Let k be 0
    k = 0;

    // 7. Repeat, while k < len
    while (k < len) {
      var kValue;

      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      if (Object.prototype.hasOwnProperty.call(O, k)) {
        // i. Let kValue be the result of calling the Get internal method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as the this value and
        // argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined
  };
}
```

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.forEach")}}

## Specifications

| Especificação                                                                      | Status               | Comentário                                         |
| ---------------------------------------------------------------------------------- | -------------------- | -------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.4.4.18', 'Array.prototype.forEach')}}                 | {{Spec2('ES5.1')}}   | Definição inicial. Implementado no JavaScript 1.6. |
| {{SpecName('ES6', '#sec-array.prototype.foreach', 'Array.prototype.forEach')}}     | {{Spec2('ES6')}}     |                                                    |
| {{SpecName('ESDraft', '#sec-array.prototype.foreach', 'Array.prototype.forEach')}} | {{Spec2('ESDraft')}} |                                                    |

## Veja também

- {{jsxref("Array.prototype.find()")}}
- {{jsxref("Array.prototype.findIndex()")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("Array.prototype.every()")}}
- {{jsxref("Array.prototype.some()")}}
- {{jsxref("Map.prototype.forEach()")}}
- {{jsxref("Set.prototype.forEach()")}}
