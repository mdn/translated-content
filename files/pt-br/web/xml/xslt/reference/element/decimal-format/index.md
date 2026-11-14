---
title: <xsl:decimal-format>
slug: Web/XML/XSLT/Reference/Element/decimal-format
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:decimal-format>` define os caracteres e símbolos que serão usados na conversão de números em strings utilizando a função `format-number( )`.

## Sintaxe

```xml
<xsl:decimal-format
  name=NAME
  decimal-separator=CHARACTER
  grouping-separator=CHARACTER
  infinity=STRING
  minus-sign=CHARACTER
  NaN=STRING
  percent=CHARACTER
  per-mille=CHARACTER
  zero-digit=CHARACTER
  digit=CHARACTER
  pattern-separator=CHARACTER />
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

- `name`
  - : Especifica um nome para este formato.
- `decimal-separator`
  - : Especifica o caractere de ponto decimal. O padrão é `.`.
- `grouping-separator`
  - : Especifica o caractere separador de milhares. O padrão é `,`.
- `infinity`
  - : Especifica a string usada para representar o infinito. O padrão é a string `Infinity`.
- `minus-sign`
  - : Especifica o caractere de sinal negativo. O padrão é o hífen `-`.
- `NaN`
  - : Especifica a string usada quando o valor não é um número. O padrão é a string `NaN`.
- `percent`
  - : Especifica o caractere de sinal de percentagem. O padrão é `%`.
- `per-mille`
  - : Especifica o caractere por milhar. O padrão é `‰`.
- `zero-digit`
  - : Especifica o caractere de dígito zero. O padrão é `0`.
- `digit`
  - : Especifica o caractere usado no padrão de formato para representar um dígito. O padrão é `#`.
- `pattern-separator`
  - : Especifica o caractere que separa os subpadrões positivo e negativo em um padrão de formato. O padrão é o ponto e vírgula `;`.

### Tipo

Nível superior, deve ser filho de `<xsl:stylesheet>` ou `<xsl:transform>`.

## Especificações

XSLT, seção 12.3.

## Compatibilidade com Gecko

Suportado a partir da versão 1.0 (Mozilla 1.0, Netscape 7.0).
