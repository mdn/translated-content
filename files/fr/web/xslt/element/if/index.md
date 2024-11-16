---
title: if
slug: Web/XSLT/Element/if
---

{{XsltSidebar}}{{ XsltRef() }}

L'élément `<xsl:if>` regroupe un attribut test et un modèle. Si le test renvoie `true`, le modèle est appliqué. En cela, il est très semblable à l'instruction `if` d'autres langages. Cependant, pour simuler un `if-then-else`, vous devrez utilisez l'élément `<xsl:choose>` avec un descendant `<xsl:when>` et un `<xsl:otherwise>`.

### Syntaxe

```xml
<xsl:if test=EXPRESSION>
  MODÈLE
</xsl:if>
```

### Attribut obligatoire

- `test`
  - : Contient une expression XPath qui peut être évaluée (en utilisant les règles définies pour `boolean( )` si nécessaire) en une valeur booléenne. Si la valeur est `true`, le modèle est appliqué&nbsp;; dans le cas contraire, aucune action n'est exécutée.

### Attributs optionnels

Aucun.

### Type

Instruction, apparaît dans un modèle.

### Définition

[XSLT 1.0 section 9.1](http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:if).

### Support Gecko

Supporté.
