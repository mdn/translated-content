---
title: Array.prototype[@@unscopables]
slug: Web/JavaScript/Reference/Global_Objects/Array/@@unscopables
---

{{JSRef}}A propriedade de símbolo **`@@unscopable`** contém nomes de propriedades que não foram incluídos no padrão ECMAScript antes da versão ES2015. Essas propriedades são excluídas do statement bindings [`with`](/pt-BR/docs/Web/JavaScript/Reference/Statements/with).

## Sintaxe

```
arr[Symbol.unscopables]
```

## Descrição

As propriedades padrão de array que são excluídas dos bindings `with` são: copyWithin, entries, fill, find, findIndex, includes, keys, e values.

Veja {{jsxref("Symbol.unscopables")}} para saber como definir `unscopables` para seus objetos.

{{js_property_attributes(0,0,1)}}

## Exemplos

O código a seguir funciona bem no ES5 e abaixo. No entanto, no ECMAScript 2015 e posterior, o método {{jsxref("Array.prototype.keys()")}} foi introduzido. Isso significa que dentro de ambientes `with`, as "keys" seriam agora o método e não a variável. É aqui que a propriedade de símbolo `@@unscopables` `Array.prototype[@@unscopables]` entra em ação e impede que alguns métodos do Array estejam sendo definidos na instrução `with`.

```js
var keys = [];

with (Array.prototype) {
  keys.push("alguma coisa");
}

Object.keys(Array.prototype[Symbol.unscopables]);
// ["copyWithin", "entries", "fill", "find", "findIndex",
//  "includes", "keys", "values"]
```

## Especificações

| Especificação                                                                                   | Status               | Comentário          |
| ----------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-array.prototype-@@unscopables', 'Array.prototype[@@unscopables]')}}  | {{Spec2('ES2015')}}  | Initial definition. |
| {{SpecName('ESDraft', '#sec-array.prototype-@@unscopables', 'Array.prototype[@@unscopables]')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Array.@@unscopables")}}

## Veja também

- {{jsxref("Symbol.unscopables")}}
