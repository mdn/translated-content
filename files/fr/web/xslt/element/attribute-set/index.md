---
title: attribute-set
slug: Web/XSLT/Element/attribute-set
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/attribute-set
original_slug: Web/XSLT/attribute-set
---
{{ XsltRef() }}

L'élément `<xsl:attribute-set>` crée un ensemble nommé d'attributs, qui peut être appliqué dans son intégralité au document de sortie, de façon similaire aux styles CSS nommés.

### Syntaxe

```xml
<xsl:attribute-set name=NOM use-attribute-sets=LISTE-DE-NOMS>
  <xsl:attribute>
</xsl:attribute-set>
```

### Attributs obligatoires

- `name`
  - : Définit le nom de l'ensemble d'attributs. Le nom doit être un [QName](http://www.w3.org/TR/REC-xml-names/#ns-qualnames) valide.

### Attributs optionnels

- `use-attribute-sets`
  - : Construit un ensemble d'attributs à partir d'autres ensembles d'attributs. Les noms des ensembles composants doivent être séparés par une espace et ils ne doivent pas s'inclure eux-mêmes directement ou indirectement.

### Type

Haut niveau, doit être l'enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`.

### Défini

[XSLT 1.0, section 7.1.4](http://www.w3.org/TR/xslt#attribute-sets).

### Support Gecko

Supporté.
