---
title: <xsl:attribute-set>
slug: Web/XML/XSLT/Reference/Element/attribute-set
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O elemento `<xsl:attribute-set>` cria um conjunto nomeado de atributos, que pode ser aplicado como um todo ao documento de saída, de maneira semelhante aos estilos nomeados em CSS.

## Sintaxe

```xml
<xsl:attribute-set name=NAME use-attribute-sets=LIST-OF-NAMES>
  <xsl:attribute>
</xsl:attribute-set>
```

### Atributos obrigatórios

- `name`
  - : Especifica o nome do conjunto de atributos. O nome deve ser um QName válido.

### Atributos opcionais

- `use-attribute-sets`
  - : Constrói um conjunto de atributos a partir de outros conjuntos de atributos. Os nomes dos conjuntos contribuintes devem ser separados por espaços em branco e não podem incorporar a si mesmos direta ou indiretamente.

### Tipo

Nível superior, deve ser filho de `<xsl:stylesheet>` ou `<xsl:transform>`.

## Especificações

XSLT, seção 7.1.4.

## Compatibilidade com Gecko

Suportado.
