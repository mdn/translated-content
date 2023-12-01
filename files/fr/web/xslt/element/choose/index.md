---
title: choose
slug: Web/XSLT/Element/choose
---

{{ XsltRef() }}

L'élément `<xsl:choose>` définit un choix parmi un certain nombre d'alternatives. Il se comporte comme l'instruction switch d'un langage procédural.

### Syntaxe

```xml
<xsl:choose>
  <xsl:when>
  <xsl:otherwise> [optionnel]
</xsl:choose>
```

### Attributs obligatoires

Aucun.

### Attributs optionnels

Aucun.

### Type

Instruction, apparaît dans un modèle. Il contient un ou plusieurs éléments `<xsl:when>`, et éventuellement un élément final `<xsl:otherwise>`.

### Définition

[XSLT 1.0, section 9.2](http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:choose).

### Support Gecko

Supporté.
