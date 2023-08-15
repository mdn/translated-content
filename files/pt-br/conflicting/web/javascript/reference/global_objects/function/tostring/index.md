---
title: Function.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Function/toString
---

{{JSRef}} {{non-standard_header}}

O método **`toSource()`** retorna uma string que representa o código-fonte do objeto.

## Sintaxe

```
function.toSource();
Function.toSource();
```

### Valor de Retorno

Uma string representa o código-fonte de um objeto.

## Descrição

O método`toSource` retorna os seguintes valores:

- Para objetos nativos {{jsxref("Function")}} , `toSource()` retorna a seguinte string indicando que o código-fonte não está disponível:

  ```js
  function Function() {
      [native code]
  }
  ```

- Para funções personalizadas, `toSource()` retorna a fonte JavaScript que define o objeto como uma string.

Esse método, normalmente é chamado internamente pelo JavaScript e não explicitamente no código. Você pode chamar `toSource` enquanto depura para examinar o conteúdo de um objeto.

## Especificações

Não faz parte de nenhum padrão. Implementado no JavaScript 1.3.

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Function.toSource")}}

## Veja Também

- {{jsxref("Object.prototype.toSource()")}}
