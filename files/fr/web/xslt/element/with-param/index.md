---
title: with-param
slug: Web/XSLT/Element/with-param
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/with-param
original_slug: Web/XSLT/with-param
---
{{ XsltRef() }}

L'élément `<xsl:with-param>` définit la valeur d'un paramètre à passer à un modèle.

### Syntaxe

```xml
<xsl:with-param name=NOM select=EXPRESSION>
  MODÈLE
</xsl:with-param>
```

### Attribut obligatoire

- `name`
  - : Définit un nom pour ce paramètre.

### Attribut optionnel

- `select`
  - : Définit la valeur du paramètre à l'aide d'une expression XPath. Si l'élément contient un modèle, l'attribut est ignoré.

### Type

Sous-instruction, apparaît toujours dans un élément `<xsl:apply-templates>` ou un élément `<xsl:call-template>`.

### Définition

[XSLT 1.0, section 11.6](http://www.w3.org/TR/xslt#section-Passing-Parameters-to-Templates).

### Support Gecko

Supporté.
