---
title: key
slug: Web/XML/XPath/Reference/Functions/key
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `key` retorna um conjunto de nós que têm o valor especificado para a chave especificada.

## Sintaxe

```plain
key( keyname, value )
```

### Parâmetros

- `keyname`
  - : Uma string contendo o nome do elemento [`xsl:key`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/key) a ser usado.
- `value`
  - : O conjunto de nós retornado conterá todos os nós que tiverem esse valor para a chave especificada.

### Valor de retorno

Um conjunto de nós.

## Descrição

- O elemento [`xsl:key`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/key) define qual atributo em quais elementos será usado para corresponder à chave.

Esta função é uma adição específica do XSLT ao XPath. Não faz parte da biblioteca de funções XPath principal.

## Especificações

[XSLT 1.0 12.2](https://www.w3.org/TR/xslt-10/#function-key)

## Compatibilidade com Gecko

Suportado.
