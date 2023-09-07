---
title: Array.from()
slug: Web/JavaScript/Reference/Global_Objects/Array/from
---

{{JSRef("Global_Objects", "Array")}}

## Resumo

O método **`Array.from()`** cria uma nova instância `de um Array` quando for passado um array-like ou um iterable object como argumento.

No ES6, a sintaxe de classe permite a subclassificação de classes nativas e classes definidas pelo usuário; como resultado, os métodos estáticos pertencentes a classe, como **`Array.from`**, são "herdadas" por subclasses do **`Array`** e criam novas instâncias da subclasse, não do **`Array`**.

## Sintaxe

```
Array.from(arrayLike[, mapFn[, thisArg]])
```

### Parâmetros

- `arrayLike`
  - : Um array-like ou um objeto iterável para converter em array.
- `mapFn`
  - : _Opcional_. Função Map que será chamada para cada elemento do array.
- `thisArg`
  - : _Opcional_. Valor a ser utilizado como this quando a mapFn for chamada.

## Descrição

`Array.from()` deixa você criar um Array de:

- objetos array-like (objetos com a propriedade `length` e elementos indexados); ou
- [Objetos iteráveis](/pt-BR/docs/Web/JavaScript/Guide/iterable) (objetos onde você pode coletar seus elementos, assim como {{jsxref("Map")}} e {{jsxref("Set")}}).

`Array.from()` tem um parametro opcional `mapFn`, que permite executar a função {{jsxref("Array.prototype.map", "map")}} para cada elemento do array (ou subclasse de objeto) que está sendo criado. Simplificando, `Array.from(obj, mapFn, thisArg)` é o mesmo que `Array.from(obj).map(mapFn, thisArg)`, com a excessão de não cria um array intermediário . Isso é importante, principalmente para certas subclasses de array, como [typed array](/pt-BR/docs/Web/JavaScript/Typed_arrays), no qual o array intermediário iria necessáriamente ter o valor truncado para encaixar-se no tipo apropriado.

A propriedade `length` do método `from()` é `1`.

No ES2015, a sintaxe de class permite a definição de subclasses tanto internas quando definidas pelo usuário. Como resultado, métodos estáticos como `Array.from()` são "herdados" pelas subclasses de `Array`, e cria novas instâncias da subclasse, não de `Array`.

## Polyfill

`Array.from` foi adicionado ao padrão ECMA-262 em sua 6ª edição; desta forma, não está presente na aplicações anteriores da especificação. Na ausência do código nativo, você pode inserir o código seguinte no início do script, permitindo `o uso parcial da funcionalidade do Array.from`. Esse algorítmo é equivalente ao especificado no ECMA-262, 6ª edição, exceto que `Object` e `TypeError` tem seus valores originais e que `callback.call` retorna o valor original de {{jsxref("Function.prototype.call")}}. Além disso, os verdadeiros iterables não podem ser representados genéricamente no polyfill, criando a principal distinção do que foi definido na especificação.

```js
// Production steps of ECMA-262, Edition 6, 22.1.2.1
// Reference: https://people.mozilla.org/~jorendorff/es6-draft.html#sec-array.from
if (!Array.from) {
  Array.from = (function () {
    var toStr = Object.prototype.toString;
    var isCallable = function (fn) {
      return typeof fn === "function" || toStr.call(fn) === "[object Function]";
    };
    var toInteger = function (value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function (value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // The length property of the from method is 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Let C be the this value.
      var C = this;

      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError(
          "Array.from requires an array-like object - not null or undefined",
        );
      }

      // 4. If mapfn is undefined, then let mapping be false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== "undefined") {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError(
            "Array.from: when provided, the second argument must be a function",
          );
        }

        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).
      var len = toLength(items.length);

      // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Let k be 0.
      var k = 0;
      // 17. Repeat, while k < len… (also steps a - h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] =
            typeof T === "undefined"
              ? mapFn(kValue, k)
              : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Let putStatus be Put(A, "length", len, true).
      A.length = len;
      // 20. Return A.
      return A;
    };
  })();
}
```

## Exemplos

```js
// Array-like object (arguments) para um Array
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);
// [1, 2, 3]

// Qualquer iterable object ...
// com Set
var s = new Set(["foo", window]);
Array.from(s);
// ["foo", window]

// Map
var m = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(m);
// [[1, 2], [2, 4], [4, 8]]

// String
Array.from("foo");
// ["f", "o", "o"]

// Usando um arrow function como função map para
// manipular os elementos
Array.from([1, 2, 3], (x) => x + x);
// [2, 4, 6]

// Gerando uma sequência de números
Array.from({ length: 5 }, (v, k) => k);
// [0, 1, 2, 3, 4]
```

## Especificação

| Specification                                        | Status           | Comment             |
| ---------------------------------------------------- | ---------------- | ------------------- |
| {{SpecName('ES6', '#sec-array.from', 'Array.from')}} | {{Spec2('ES6')}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.from")}}

## Veja também

- {{jsxref("Array")}}
- {{jsxref("Array.prototype.map()")}}
- {{jsxref("TypedArray.from()")}}
