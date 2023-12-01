---
title: "false"
slug: Web/XPath/Functions/false
---

{{ XsltRef() }}

La fonction `false` retourne le booléen `false`.

### Syntaxe

```
false()
```

### Retour

Booléen `false`.

### Notes

Cette fonction est utile dans les comparaisons&nbsp;:

```xml
<xsl:if test="boolean((1 > 2) = false())">
  L'expression évaluée comme fausse
</xsl:if>
```

### Définition

[XPath 1.0, section 4.3](http://www.w3.org/TR/xpath#function-false).

### Support Gecko

Supportée.
