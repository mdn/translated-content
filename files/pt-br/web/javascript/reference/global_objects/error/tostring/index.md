---
title: Error.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
---

{{JSRef}}

O método **`toString()`** retorna uma string representando o objeto {{jsxref("Error")}}.

## Sintaxe

```
e.toString()
```

### Valor de retorno

A string representando o objeto {{jsxref("Error")}} especificado.

## Descrição

O objeto {{jsxref("Error")}} sobrescreve o método {{jsxref("Object.prototype.toString()")}} herdado por todos os objetos. Sua semântica é a seguinte (assumindo que {{jsxref("Object")}} e {{jsxref("String")}} tem seus valores originais):

```js
Error.prototype.toString = function () {
  "use strict";

  var obj = Object(this);
  if (obj !== this) {
    throw new TypeError();
  }

  var name = this.name;
  name = name === undefined ? "Error" : String(name);

  var msg = this.message;
  msg = msg === undefined ? "" : String(msg);

  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }

  return name + ": " + msg;
};
```

## Exemplos

### Usando toString()

```js
var e = new Error("fatal error");
console.log(e.toString()); // 'Error: fatal error'

e.name = undefined;
console.log(e.toString()); // 'Error: fatal error'

e.name = "";
console.log(e.toString()); // 'fatal error'

e.message = undefined;
console.log(e.toString()); // ''

e.name = "hello";
console.log(e.toString()); // 'hello'
```

## Especificações

| Especificação                                                                        |
| ------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-error.prototype.tostring', 'Error.prototype.toString')}} |

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Error.toString")}}

## Veja também

- {{jsxref("Error.prototype.toSource()")}}
