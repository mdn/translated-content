---
title: <xsl:key>
slug: Web/XML/XSLT/Reference/Element/key
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:key>` declara uma chave nomeada que pode ser usada em outros locais da folha de estilo com a função `key( )`.

## Sintaxe

```xml
<xsl:key name=NAME match=EXPRESSION
  use=EXPRESSION />
```

### Atributos obrigatórios

- `name`
  - : Especifica um nome para esta chave. Deve ser um QName.
- `match`
  - : Define os nós para os quais esta chave é aplicável.
- `use`
  - : Especifica uma expressão XPath que será usada para determinar o valor da chave para cada um dos nós aplicáveis.

### Atributos opcionais

Nenhum.

### Tipo

Nível superior, deve ser filho de `<xsl:stylesheet>` ou `<xsl:transform>`.

## Especificações

XSLT, seção 12.2.

## Compatibilidade com Gecko

Suportado.
