---
title: Error.prototype.toSource()
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Error/toString
---

{{JSRef}} {{non-standard_header}}

O método **`toSource()`** retorna código que pode resultar no mesmo erro.

## Sintaxe

```
e.toSource()
```

### Valor de retorno

Uma string contendo o código fonte do erro.

## Exemplos

### Usando toSource

Chamando método `toSource` de uma instância {{jsxref("Error")}} (incluindo *[NativeErrors](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error#Error_types)*) irá retornar uma string contendo o código fonte do erro. Essa string pode ser avaliada para criar (aproximadamente) um objeto igual. Naturalmente, a string contendo o fonte segue a estrutura do construtor {{jsxref("Error")}}. Por exemplo:

```js
(newname(message ,fileName,lineNumber))
```

onde estes atributos correspondem as respectivas propriedades da instância do erro.

> **Nota:** Fique alerta que as propriedades usadas pelo método `toSource` na criação da string são mutáveis e podem não refletir precisamente a função utilizada para criar a instância do erro ou nome de arquivo ou número de linha onde o erro atual ocorreu.

## Especificações

Não faz parte de nenhum padrão.

## Compatibilidade com navegadores

{{Compat("javascript.builtins.Error.toSource")}}

## Veja também

- {{jsxref("Error.prototype.fileName")}}
- {{jsxref("Error.prototype.lineNumber")}}
- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.name")}}
- {{jsxref("Object.prototype.toSource()")}}
