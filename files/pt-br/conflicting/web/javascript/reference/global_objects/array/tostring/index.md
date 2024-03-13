---
title: Array.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Array/toString
---

{{JSRef}} {{non-standard_header}}

O método **`toSource()`** retorna uma representação string do código fonte do array.

## Sintaxe

```
arr.toSource()
```

### Parâmetros

Nenhum.

## Descrição

O método `toSource` retorna os seguintes valores:

- Para o objeto {{jsxref("Array")}} pré-construido, `toSource` retorna a seguinte string indicando que o código fonte não está disponível:

  ```js
  function Array() {
      [native code]
  }
  ```

- Para instancias de {{jsxref("Array")}}, `toSource` retorna uma representação string do código fonte.

Este método normalmente é chamando internamente pelo JavaScript e não explicitamente no código. Você pode chamar `toSource` durante o debug para examinar o conteúdo de um array.

## Exemplos

### Examinando o código fonte de um array

Para examinar o código fonte de um array:

```js
var alpha = new Array('a', 'b', 'c');

alpha.toSource();   //retorna ['a', 'b', 'c']
```

## Especificações

Não é parte de nenhum padrão. Implementado no JavaScript 1.3.

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{jsxref("Object.prototype.toSource()")}}
- {{jsxref("Array.prototype.toString()")}}
