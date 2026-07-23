---
title: <xsl:apply-imports>
slug: Web/XML/XSLT/Reference/Element/apply-imports
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:apply-imports>` é bastante obscuro e usado principalmente em folhas de estilo complexas. A precedência de importação exige que as regras de template nas folhas de estilo principais tenham maior precedência do que as regras de template nas folhas de estilo importadas. No entanto, às vezes é útil forçar o processador a usar uma regra de template da folha de estilo importada (de menor precedência) em vez de uma regra equivalente na folha de estilo principal.

## Sintaxe

```xml
<xsl:apply-imports/>
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

Nenhum.

### Tipo

Instrução, aparece dentro de um template.

## Especificações

XSLT, seção 5.6.

## Compatibilidade com Gecko

Suportado.
