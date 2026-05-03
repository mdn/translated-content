---
title: element-available
slug: Web/XML/XPath/Reference/Functions/element-available
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `element-available` determina se um elemento está disponível e retorna verdadeiro ou falso.

## Sintaxe

```plain
element-available( QName )
```

### Parâmetros

- `QName`
  - : Deve avaliar para um QName válido. O QName é expandido para um nome expandido usando as declarações de namespace em escopo para a expressão.

### Valor de retorno

Retorna verdadeiro se e somente se o nome expandido for o nome de uma instrução. Se o nome expandido tiver um URI de namespace igual ao URI de namespace do XSLT, ele se refere a um elemento definido pelo XSLT. Caso contrário, refere-se a um elemento de extensão. Se o nome expandido tiver um URI de namespace nulo, a função element-available retornará falso.

## Especificações

[XSLT 1.0 15](https://www.w3.org/TR/xslt-10/#function-element-available)

## Compatibilidade com Gecko

Suportado.
