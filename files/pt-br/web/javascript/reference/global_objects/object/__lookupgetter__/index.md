---
title: Object.prototype.__lookupGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__
---

{{JSRef}} {{deprecated_header}}

O método **`__lookupGetter__`** retorna a função limite como uma getter para a específica propriedade.

## Sintaxe

```
obj.__lookupGetter__(sprop)
```

### Parâmetros

- `sprop`
  - : Uma sequência de caracteres contendo o nome da propriedade cuja getter deve retornar.

### Valores de retorno

A função limite como uma getter para a específica propriedade.

## Descrição

Se uma getter foi definida por uma propriedade de um objeto, não é possível referir-se a função getter através da propriedade, porque essa propriedade se refere ao retorno do valor daquela função. `__lookupGetter__` pode ser usado para obter referência à função getter.

Agora é possível fazer isso de um jeito uniforme usando:. {{jsxref("Object.getOwnPropertyDescriptor()")}} e {{jsxref("Object.getPrototypeOf()")}}.

## Exemplos

```js
var obj = {
  get foo() {
    return Math.random() > 0.5 ? "foo" : "bar";
  },
};

// Non-standard and deprecated way
obj.__lookupGetter__("foo");
// (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })

// Standard-compliant way
Object.getOwnPropertyDescriptor(obj, "foo").get;
// (function() { return Math.random() > 0.5 ? 'foo' : 'bar'; })
```

## Specificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- [`Object.prototype.__lookupSetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- {{jsxref("Functions/get", "get")}} operador
- {{jsxref("Object.getOwnPropertyDescriptor()")}} e {{jsxref("Object.getPrototypeOf()")}}
- [`Object.prototype.__defineGetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__)
- [`Object.prototype.__defineSetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- [JS Guide: Defining Getters and Setters](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
