---
title: when
slug: Web/XSLT/Element/when
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/when
original_slug: Web/XSLT/when
---
{{ XsltRef() }}

L'élément `<xsl:when>` apparaît toujours dans un élément `<xsl:choose>`, et se comporte comme une structure conditionelle 'case'.

### Syntaxe

    <xsl:when test=EXPRESSION>
    	MODÈLE
    </xsl:when>

### Attribut obligatoire

- `test`
  - : Définit une expression booléenne à évaluer. Si elle est vraie, le contenu de l'élément est exécuté ; sinon, il est ignoré.

### Attributs obligatoires

Aucun.

### Type

Sous-instruction, apparaît toujours dans un élément `<xsl:choose>`.

### Définition

[XSLT 1.0, section 9.2](http://www.w3.org/TR/xslt#section-Conditional-Processing-with-xsl:choose).

### Support Gecko

Supporté.
