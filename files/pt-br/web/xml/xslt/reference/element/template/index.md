---
title: <xsl:template>
slug: Web/XML/XSLT/Reference/Element/template
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:template>` define um template de produção de saída. Este elemento deve ter o atributo match ou o atributo name definido.

## Sintaxe

```xml
<xsl:template
  match=PATTERN
  name=NAME
  mode=NAME
  priority=NUMBER>
  <xsl:param> [optional]
  TEMPLATE
</xsl:template>
```

### Atributos obrigatórios

Nenhum.

### Atributos opcionais

- `match`
  - : Especifica um padrão que determina os elementos para os quais este template deve ser usado. É um atributo obrigatório se não houver atributo `name`.
- `name`
  - : Especifica um nome para este template, pelo qual pode ser invocado por meio do elemento `<xsl:call-template>`.
- `mode`
  - : Especifica um modo particular para este template, que pode ser correspondido por um atributo do elemento `<xsl:apply-templates>`. Isto é útil para processar a mesma informação de múltiplas maneiras.
- `priority`
  - : Especifica uma prioridade numérica para este template. Pode ser qualquer número diferente de `Infinity`. O processador usa este número quando mais de um template corresponde ao mesmo nó.

### Tipo

Nível superior, deve ser filho de `<xsl:stylesheet>` ou `<xsl:transform>`.

## Especificações

XSLT, seção 5.3.

## Compatibilidade com Gecko

Compatível.
