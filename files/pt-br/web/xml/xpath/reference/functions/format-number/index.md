---
title: format-number
slug: Web/XML/XPath/Reference/Functions/format-number
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

A função `format-number` avalia um número e retorna uma string representando o número em um determinado formato.

## Sintaxe

```plain
format-number(number, pattern)
format-number(number, pattern, decimalFormat)
```

### Parâmetros

- `number`
  - : O número a ser formatado
- `pattern`
  - : Uma string no formato da classe [DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html) do Java.
- `decimalFormat` (opcional)
  - : O nome de um elemento [`xsl:decimal-format`](/pt-BR/docs/Web/XML/XSLT/Reference/Element/decimal-format) que define o formato numérico a ser usado. Se omitido, o formato decimal padrão será utilizado.

### Valor de retorno

Uma string representando o número no novo formato.

## Descrição

Esta função é uma adição específica do XSLT ao XPath. Não faz parte da biblioteca de funções XPath principal.

## Especificações

[XSLT 1.0 12.3](https://www.w3.org/TR/xslt-10/#function-format-number)

## Compatibilidade com Gecko

Suportado.
