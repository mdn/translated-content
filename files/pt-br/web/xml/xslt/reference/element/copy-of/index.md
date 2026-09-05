---
title: <xsl:copy-of>
slug: Web/XML/XSLT/Reference/Element/copy-of
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:copy-of>` faz uma cópia profunda (incluindo nós descendentes) de tudo o que o atributo `select` especifica para o documento de saída.

## Sintaxe

```xml
<xsl:copy-of select=EXPRESSION />
```

### Atributos obrigatórios

- `select`
  - : Utiliza uma expressão XPath que especifica o que deve ser copiado.

### Atributos opcionais

Nenhum.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 11.3.

## Compatibilidade com Gecko

Suportado.
