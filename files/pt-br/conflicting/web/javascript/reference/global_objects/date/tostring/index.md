---
title: Date.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Date/toString
---

{{JSRef}}

O método **`toSource()`** retorna uma cadeia de caracteres (_string_) representando o código fonte do objeto.

## Sintaxe

```
dateObj.toSource()
Date.toSource()
```

### Valor de retorno

Uma _string_ representando o código fonte do objeto {{jsxref("Global_Objects/Date", "Date")}}.

## Exemplos

### Função nativa

Para o objeto {{jsxref("Date")}} embutido, `toSource()` retorna a seguinte _string_ indicando que o código fonte não está disponível:

```js
function Date() {
    [native code]
}
```

## Especificações

Não faz parte de nenhum padrão.

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Date.toSource")}}

## Veja também

- {{jsxref("Object.prototype.toSource()")}}
