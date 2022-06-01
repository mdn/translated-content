---
title: element
slug: Web/XSLT/Element/element
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/element
---
{{ XsltRef() }}

L'élément `<xsl:element>` crée un élément dans le document de sortie.

### Syntaxe

```xml
<xsl:element name=NOM namespace=URI use-attribute-sets=LISTE-DE-NOMS >
  MODÈLE
</xsl:element>
```

### Attribut obligatoire

- `name`
  - : Définit le nom voulu pour l'élément de sortie. Le nom doit être un QName valide.

### Attributs optionnels

- `namespace`
  - : Définit l'espace de nommage de l'élément de sortie.
- `use-attribute-sets`
  - : Liste les ensembles d'attributs nommés à utiliser dans le document de sortie. Les noms doivent être séparés par des espaces.

### Type

Instruction, apparaît dans un modèle.

### Définition

[XSLT 1.0, section 7.1.2](http://www.w3.org/TR/xslt#section-Creating-Elements-with-xsl:element).

### Support Gecko

Supporté.
