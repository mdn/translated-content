---
title: for-each
slug: Web/XSLT/Element/for-each
---

{{ XsltRef() }}

L'élément `<xsl:for-each>` sélectionne un ensemble de nœuds et traite chacun d'eux de la même façon. Il est souvent utilisé pour des itérations sur un ensemble de nœuds ou pour changer le nœud courant. Si un ou plusieurs éléments `<xsl:sort>` apparaissent comme enfants de cet élément, le tri est effectué avant le traitement. Autrement, les nœuds sont traités dans l'ordre d'apparition dans le document.

### Syntaxe

```xml
<xsl:for-each select=EXPRESSION>
  <xsl:sort> [optionnel]
  MODÈLE
</xsl:for-each>
```

### Attribut obligatoire

- `select`
  - : Utilise une expression XPath pour spécifier les nœuds qui doivent être traités.

### Attributs optionnels

Aucun.

### Type

Instruction, apparaît dans un modèle.

### Définition

[XSLT 1.0, section 8](http://www.w3.org/TR/xslt#for-each).

### Support Gecko

Supporté.
