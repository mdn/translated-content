---
title: id
slug: Web/XML/XPath/Reference/Functions/id
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `id` encontra nós que correspondem aos IDs fornecidos e retorna um conjunto de nós contendo os nós identificados.

## Sintaxe

```plain
id( expression )
```

### Parâmetros

- `expression`
  - : Se `expression` for um conjunto de nós, então o valor de string de cada nó no conjunto de nós é tratado como um ID individual. O conjunto de nós retornado é o conjunto de nós correspondentes a esses IDs.
    Se `expression` for uma string, ou qualquer coisa diferente de um conjunto de nós, então `expression` é tratada como uma lista de IDs separados por espaços. O conjunto de nós retornado é o conjunto de nós correspondentes a esses IDs.

### Valor de retorno

Um conjunto de nós contendo o nó ou nós identificados pelo ID ou IDs fornecidos.

## Descrição

- O DTD do documento XML determina qual atributo é um ID. Consulte [XPath 1.0 5.2.1](https://www.w3.org/TR/xpath-10/#unique-id)

## Especificações

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-id)

## Compatibilidade com Gecko

Parcialmente suportado.
