---
title: Boolean.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Boolean/toString
---

{{JSRef}} {{non-standard_header}}

O método **`toSource()`** retorna uma representação string do código fonte do objeto.

## Sintaxe

```
booleanObj.toSource()
Boolean.toSource()
```

### Parâmetros

Nenhum.

## Descrição

O método `toSource` retorna os seguintes valores:

- Para o objeto pré-construido {{jsxref("Boolean")}}, `toSource` retorna a seguinte string indicando que o código não está disponível:

  ```js
  function Boolean() {
      [native code]
  }
  ```

- Para instancias de {{jsxref("Boolean")}}, `toSource` retorna a string representando o código fonte.

Este método normalmente é chamando internamente pelo JavaScript e não explicitamente no código fonte.

## Especificações

Não é parte de nenhum padrão. Implementado no Javascript 1.3.

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- {{jsxref("Object.prototype.toSource()")}} {{non-standard_inline}}
