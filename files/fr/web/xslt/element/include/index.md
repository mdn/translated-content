---
title: include
slug: Web/XSLT/Element/include
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/include
original_slug: Web/XSLT/include
---
{{ XsltRef() }}

L'élément `<xsl:include>` fusionne les contenus de deux feuilles de styles. Contrairement à l'élément [\<xsl:import>](/fr/XSLT/import), les contenus des deux feuilles de styles fusionnées ont la même priorité.

### Syntaxe

    <xsl:include href=URI />

### Attribut obligatoire

- `href`
  - : Définit l'URI de la feuille de styles à inclure.

### Attributs optionnels

Aucun.

### Type

Haut niveau, peut apparaître dans n'importe quel ordre comme enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`.

### Définition

[XSLT 1.0, section 2.6.1](http://www.w3.org/TR/xslt#include).

### Support Gecko

Supporté.
