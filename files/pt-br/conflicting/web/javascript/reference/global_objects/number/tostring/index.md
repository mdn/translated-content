---
title: Number.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Number/toString
---

{{JSRef}} {{non-standard_header}}

O método **`toSource()`** retorna uma string contendo o código fonte do objeto.

## Syntax

```
numObj.toSource()
Number.toSource()
```

### Valor retornado

Uma string contendo o código fonte do objeto.

## Descrição

O método `toSource()` retorna os seguintes valores:

Para o objeto built-in {{jsxref("Number")}}, o método `toSource()` retorna a seguinte string indicando que o código fonte do objeto não está disponível:

```js
function Number() {
    [native code]
}
```

Para instâncias do objeto {{jsxref("Number")}}, `toSource()` retorna uma string contendo o código fonte.

Este método normalmente é invocado internamente pelo JavaScript e não explicitamente em um código web.

## Especificações

Não é parte de nenhuma especificação padrão. Implementado no JavaScript 1.3.

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Number.toSource")}}

## Veja também

- {{jsxref("Object.prototype.toSource()")}}
