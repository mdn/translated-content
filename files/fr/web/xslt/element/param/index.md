---
title: param
slug: Web/XSLT/Element/param
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/param
original_slug: Web/XSLT/param
---
{{ XsltRef() }}

L'élément `<xsl:param>` définit un paramètre par son nom et, éventuellement, lui attribue une valeur par défaut. Lorsqu'il est utilisé comme élément de premier niveau, le paramètre est global. Utilisé dans un élément `<xsl:template>`, le paramètre est local à ce modèle. Dans ce dernier cas, il doit être le premier élément enfant du modèle.

### Syntaxe

```xml
<xsl:param name=NOM select=EXPRESSION>
  MODÈLE
</xsl:param>
```

### Attribut obligatoire

- `name`
  - : Nomme le paramètre. Le nom doit être un QName valide.

### Attribut optionnel

- `select`
  - : Utilise une expression XPath pour fournir une valeur par défaut si elle n'est pas spécifiée.

### Type

Instruction, peut apparaître comme élément de premier niveau ou dans un modèle.

### Définition

[XSLT 1.0, section 11](http://www.w3.org/TR/xslt#variables).

### Support Gecko

Supporté.
