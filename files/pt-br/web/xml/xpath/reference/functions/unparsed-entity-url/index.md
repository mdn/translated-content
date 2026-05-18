---
title: unparsed-entity-url
slug: Web/XML/XPath/Reference/Functions/unparsed-entity-url
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `unparsed-entity-url()` retorna o URI da entidade não analisada com o nome fornecido. Trata-se de dados não XML referenciados no DTD do documento de origem.

## Sintaxe

```plain
string unparsed-entity-url(string)
```

### Parâmetros

O nome da entidade não analisada. Se o argumento não for uma string, ele é convertido usando as regras da função string(). O nome deve ser um XML Name.

### Valor de retorno

O URI da entidade não analisada recuperado do DTD, se existir. Caso contrário, uma string vazia.

## Especificações

[XSLT 1.0 12.4](https://www.w3.org/TR/xslt-10/#function-unparsed-entity-uri)

## Compatibilidade com Gecko

Não compatível.
