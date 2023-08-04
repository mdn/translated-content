---
title: otherwise
slug: Web/XSLT/Element/otherwise
---

{{ XsltRef() }}

L'élément `<xsl:otherwise>` est utilisé pour définir une action qui doit être exécutée lorsqu'aucune condition `<xsl:when>` ne s'applique. Elle est comparable aux instructions `else` ou `default` d'autres langages de programmation.

### Syntaxe

```xml
<xsl:otherwise>
  MODÈLE
</xsl:otherwise>
```

### Attributs obligatoires

Aucun.

### Attributs optionnels

Aucun.

### Type

Sous-instruction, doit apparaître comme le dernier enfant d'un élément `<xsl:choose>`, dans un modèle.

### Définition

[XSLT 1.0, section 9.2](http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:choose).

### Support Gecko

Supporté.
