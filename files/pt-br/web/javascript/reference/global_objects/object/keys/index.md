---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
---

{{JSRef}}

O método **`Object.keys()`** retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço {{jsxref("Statements/for...in", "for...in")}} (a diferença é que um laço for-in enumera propriedades que estejam na cadeia de protótipos).

## Sintaxe

```
Object.keys(obj)
```

### Parametros

- `obj`
  - : O objeto cujas propriedades são enumeráveis.

## Descrição

`Object.keys()` retorna um array cujo os elementos são strings correspondentes para a propriedade enumerável encontrada diretamento sobre o objeto. A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades do objeto manualmente.

## Exemplos

```js
var arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array com objeto
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array como objeto com ordenação aleatória por chave
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create(
  {},
  {
    getFoo: {
      value: function () {
        return this.foo;
      },
    },
  },
);
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']
```

Se você quiser todas as propriedades, mesmo que não enumeráveis, consulte:{{jsxref("Object.getOwnPropertyNames()")}}.

## Notas

Em ES5, Se o argumento para o método this não é um objeto(um primitivo), em seguida ele irá causar um {{jsxref("TypeError")}}. Em ES2015, um argumento não-objeto será forçado a um objeto.

```js
Object.keys("foo");
// TypeError: "foo" is not an object (ES5 code)

Object.keys("foo");
// ["0", "1", "2"]                   (ES2015 code)
```

## Polyfill

Para adicionar suporte Object.keys compatíveis em ambientes mais antigos que não têm suporte nativo para isso, copie o seguinte trecho:

```js
// De https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
if (!Object.keys) {
  Object.keys = (function () {
    "use strict";
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !{ toString: null }.propertyIsEnumerable("toString"),
      dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor",
      ],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (
        typeof obj !== "object" &&
        (typeof obj !== "function" || obj === null)
      ) {
        throw new TypeError("Object.keys chamado de non-object");
      }

      var result = [],
        prop,
        i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  })();
}
```

Por favor, note que o código acima inclui chaves não-enumeráveis no IE7 (e talvez IE8), ao passar em um objeto a partir de uma janela diferente.

Para um simples Browser Polyfill, veja [Javascript - Object.keys Browser Compatibility](http://tokenposts.blogspot.com.au/2012/04/javascript-objectkeys-browser.html).

## Especificações

| Especificação                                             | Status              | Comentário                                           |
| --------------------------------------------------------- | ------------------- | ---------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.14', 'Object.keys')}}    | {{Spec2('ES5.1')}}  | Definição inicial. Implementado em JavaScript 1.8.5. |
| {{SpecName('ES2015', '#sec-object.keys', 'Object.keys')}} | {{Spec2('ES2015')}} |                                                      |

## Browser compatibilidade

{{Compat("javascript.builtins.Object.keys")}}

## Veja também

- [Enumerability and ownership of properties](/pt-BR/docs/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
