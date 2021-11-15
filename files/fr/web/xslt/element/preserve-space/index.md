---
title: preserve-space
slug: Web/XSLT/Element/preserve-space
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/preserve-space
original_slug: Web/XSLT/preserve-space
---
{{ XsltRef() }}

L'élément `<xsl:preserve-space>` définit les éléments du document source pour lesquels les espaces doivent être préservées. Si il y a plus d'un élément, leurs noms doivent être séparés par des espaces. La politique par défaut est de conserver les espaces, cet élément n'est donc utile que pour contrer l'effet de `<xsl:strip-space>`.

### Syntaxe

    <xsl:preserve-space elements=LISTE-DE-NOMS-D-ÉLÉMENTS  />

### Attribut obligatoire

- `elements`
  - : Définit les éléments pour lesquels les espaces doivent être préservées.

### Attributs optionnels

Aucun.

### Type

Haut niveau, doit être un enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`.

### Définition

[XSLT 1.0, section 3.4](http://www.w3.org/TR/xslt#strip).

### Support Gecko

Supporté.
