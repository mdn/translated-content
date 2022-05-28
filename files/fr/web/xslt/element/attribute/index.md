---
title: attribute
slug: Web/XSLT/Element/attribute
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/attribute
original_slug: Web/XSLT/attribute
---
{{ XsltRef() }}

L'élément `<xsl:attribute>` crée un attribut dans le document de sortie, en utilisant n'importe quelle donnée accessible depuis la feuille de styles. L'élément **doit** être la première chose définie dans l'élément du document de sortie pour lequel il détermine les valeurs d'attributs.

### Syntaxe

```xml
<xsl:attribute name=NOM namespace=URI>
  MODÈLE
</xsl:attribute>
```

### Attributs obligatoires

- `name`
  - : Définit le nom de l'attribut à créer dans le document de sortie. Le nom doit être un [QName](http://www.w3.org/TR/REC-xml-names/#ns-qualnames) valide.

### Attributs optionnels

- `namespace`
  - : Définit l'URI de l'espace de nommage pour cet attribut dans le document de sortie. Vous ne pouvez pas définir le préfixe de l'espace de nommage correspondant avec cet élément.

### Type

Instruction, apparaît dans un modèle ou dans un élément `<xsl:attribute-set>`.

### Définition

[XSLT 1.0, section 7.1.3](http://www.w3.org/TR/xslt#creating-attributes).

### Support Gecko

Supporté.
