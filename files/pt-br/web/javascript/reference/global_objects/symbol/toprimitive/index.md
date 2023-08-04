---
title: Symbol.toPrimitive
slug: Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive
---

{{JSRef}}

O **`Symbol.toPrimitive`** é um símbolo que específica uma propriedade com valor função que é chamada para converter um ojbeto para um valor primitivo correspondente.

{{EmbedInteractiveExample("pages/js/symbol-toprimitive.html")}}

## Descrição

Com a ajuda da propriedade **`Symbol.toPrimitive`** (usada como uma função valor), um objeto pode ser convertido para um valor primitivo. a função é chamada com um argumento string **`hint`**, que espcífica o tipo de preferência do resultado do valor primitivo. O argumento **`hint`** pode ser um `"number"`, `"string"`, e `"default"`.

{{js_property_attributes(0,0,0)}}

## Exemplos

### Modificando valores primitivos convertendo para um objeto

O exemplo a seguir descreve que a propriedade **`Symbol.toPrimitive`** pode ser modificar o valor primitivo convertendo para um objeto.

```js
// Um objeto sem propriedade Symbol.toPrimitive.
var obj1 = {};
console.log(+obj1); // NaN
console.log(`${obj1}`); // "[object Object]"
console.log(obj1 + ""); // "[object Object]"

// Um objeto com propriedade Symbol.toPrimitive
var obj2 = {
  [Symbol.toPrimitive](hint) {
    if (hint == "number") {
      return 10;
    }
    if (hint == "string") {
      return "hello";
    }
    return true;
  },
};
console.log(+obj2); // 10        -- dica é "number"
console.log(`${obj2}`); // "hello"   -- dica é "string"
console.log(obj2 + ""); // "true"    -- dica é "default"
```

## Especificações

| Especificação                                                            |
| ------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-symbol.toprimitive', 'Symbol.toPrimitive')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Symbol.toPrimitive")}}

## Veja também

- {{jsxref("Date.@@toPrimitive", "Date.prototype[@@toPrimitive]")}}
- {{jsxref("Symbol.@@toPrimitive", "Symbol.prototype[@@toPrimitive]")}}
- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("Object.prototype.valueOf()")}}
