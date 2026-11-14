---
title: <xsl:sort>
slug: Web/XML/XSLT/Reference/Element/sort
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:sort>` define uma chave de ordenação para nós selecionados por `<xsl:apply-templates>` ou `<xsl:for-each>` e determina a ordem em que são processados.

## Sintaxe

```xml
<xsl:sort
  select=EXPRESSION
  order="ascending" | "descending"
  case-order="upper-first" | "lower-first"
  lang=XML:LANG-CODE
  data-type="text" | "number" />
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

- `select`
  - : Usa uma expressão XPath para especificar os nós a serem ordenados.
- `order`
  - : Especifica se os nós devem ser processados em ordem `ascending` (crescente) ou `descending` (decrescente). O padrão é `ascending`.
- `case-order`
  - : Indica se letras maiúsculas ou minúsculas devem ser ordenadas primeiro. Os valores permitidos são `upper-first` e `lower-first`.
- `lang`
  - : Especifica qual idioma deve ser usado na ordenação.
- `data-type`
  - : Define se os itens devem ser ordenados alfabeticamente ou numericamente. Os valores permitidos são `text` e `number`, sendo `text` o padrão.

### Tipo

Sub-instrução, aparece sempre como filho de \<xsl:for-each>, onde deve aparecer antes do template propriamente dito, ou de \<xsl:apply-templates>.

## Especificações

XSLT, seção 10.

## Compatibilidade com Gecko

Compatível.
