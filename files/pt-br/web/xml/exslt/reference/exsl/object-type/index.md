---
title: exsl:object-type()
slug: Web/XML/EXSLT/Reference/exsl/object-type
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`exsl:object-type()` retorna uma string que indica o tipo do objeto especificado.

> [!NOTE]
> A maioria dos tipos de objetos [XSLT](/pt-BR/docs/Web/XML/XSLT) pode ser convertida uns para os outros com segurança; porém, certas conversões levantam condições de erro. Em particular, tratar algo que não é um conjunto de nós como um conjunto de nós fará isso. Esta função permite que autores de templates com nome e funções de extensão forneçam facilmente flexibilidade nos valores dos parâmetros.

## Sintaxe

```plain
exsl:object-type(object)
```

### Parâmetros

- `object`
  - : O objeto cujo tipo deve ser retornado.

### Valor de retorno

O tipo do objeto, que será um dos seguintes:

- `string`
- `number`
- `boolean`
- `node-set`
- `RTF`
- `external`

## Especificações

[EXSLT - EXSL:OBJECT-TYPE](https://exslt.github.io/exsl/functions/object-type/index.html)
