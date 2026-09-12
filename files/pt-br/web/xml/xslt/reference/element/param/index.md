---
title: <xsl:param>
slug: Web/XML/XSLT/Reference/Element/param
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:param>` estabelece um parâmetro pelo nome e, opcionalmente, um valor padrão para esse parâmetro. Quando usado como elemento de nível superior, o parâmetro é global. Quando usado dentro de um elemento `<xsl:template>`, o parâmetro é local para aquele template. Nesse caso, deve ser o primeiro elemento filho do template.

## Sintaxe

```xml
<xsl:param name=NAME select=EXPRESSION>
  TEMPLATE
</xsl:param>
```

### Atributos obrigatórios

- `name`
  - : Dá um nome ao parâmetro. Deve ser um QName.

### Atributos opcionais

- `select`
  - : Usa uma expressão XPath para fornecer um valor padrão caso nenhum seja especificado.

### Tipo

Instrução, pode aparecer como elemento de nível superior ou dentro de um template.

## Especificações

XSLT, seção 11.

## Compatibilidade com Gecko

Compatível.
