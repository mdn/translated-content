---
title: Object.prototype.__defineGetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__
---

{{JSRef}}

> **Aviso:** Esta característica está descontinuada em favor de definindo getters usando a [sintaxe de inicialização de objeto](/pt-BR/docs/Web/JavaScript/Reference/Operators/Object_initializer)ou a API {{jsxref("Object.defineProperty()")}}. Enquanto esta característica é amplamente implementada, ela está somente descrita na [especificação ECMAScript](https://tc39.github.io/ecma262/#sec-additional-ecmascript-features-for-web-browsers) por causa do uso legado. Este método não deveria ser usado desde que exista existam melhores alternativas.

O método **`__defineGetter__`** conecta uma propriedade do objeto à uma função para ser chamada quando isso é consultado.

## Sintaxe

```
obj.__defineGetter__(prop, func)
```

### Parâmetros

- `prop`
  - : Uma string contendo o nome da propriedade para conectar a função dada.
- `func`
  - : Uma função para ser ligada a uma consulta da propriedade especificada.

### Valor de Retorno

{{jsxref("undefined")}}.

## Descrição

O `__defineGetter__` permite um {{jsxref("Operators/get", "getter", "", 1)}} ser definido sobre um objeto preexistente.

## Exemplos

```js
// Forma não-padrão e depreciada

var o = {};
o.__defineGetter__("gimmeFive", function () {
  return 5;
});
console.log(o.gimmeFive); // 5

// Formas padrão-compatível

// Usando o operador get
var o = {
  get gimmeFive() {
    return 5;
  },
};
console.log(o.gimmeFive); // 5

// Usando Object.defineProperty
var o = {};
Object.defineProperty(o, "gimmeFive", {
  get: function () {
    return 5;
  },
});
console.log(o.gimmeFive); // 5
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [`Object.prototype.__defineSetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__)
- {{jsxref("Operators/get", "get")}} operator
- {{jsxref("Object.defineProperty()")}}
- [`Object.prototype.__lookupGetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__)
- [`Object.prototype.__lookupSetter__()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__)
- [Guia JS: Definindo Getters e Setters](/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters)
- [\[Blog Post\] Depreciação de \_\_defineGetter\_\_ e \_\_defineSetter\_\_](https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/)
- [Erro do Firefox 647423](https://bugzil.la/647423)
