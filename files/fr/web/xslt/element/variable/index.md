---
title: variable
slug: Web/XSLT/Element/variable
---

{{ XsltRef() }}

L'élément `<xsl:variable>` déclare une variable globale ou locale dans une feuille de style et lui attribue une valeur. Comme XSLT ne permet pas d'effet de bord, une fois que la valeur de la variable est établie, elle reste la même jusqu'à ce que la variable soit hors de portée.

### Syntaxe

```xml
<xsl:variable name=NOM select=EXPRESSION >
  MODÈLE
</xsl:variable>
```

### Attribut obligatoire

- `name`
  - : Donne un nom à la variable.

### Attribut optionnel

- `select`
  - : Définit la valeur de la variable à l'aide d'une expression XPath. Si l'élément contient un modèle, cet attribut est ignoré.

### Type

Premier niveau ou instruction. S'il intervient comme élément de premier niveau, la variable est de portée globale, et est accessible depuis l'ensemble du document. S'il intervient dans un modèle, la variable est de portée locale, et n'est accessible que dans le modèle dans lequel elle apparaît.

### Définition

[XSLT 1.0, section 11](http://www.w3.org/TR/xslt#variables).

### Support Gecko

Supporté.
