---
title: import
slug: Web/XSLT/Element/import
---

{{ XsltRef() }}

L'élément `<xsl:import>` est un élément de haut niveau qui sert à importer le contenu d'une feuille de styles dans une autre. Généralement, le contenu importé a une priorité inférieure à celui de la feuille qui effectue l'importation. Ceci contraste avec [\<xsl:include>](/fr/docs/Web/XSLT/include) où les contenus des deux feuilles ont exactement la même priorité.

### Syntaxe

\<xsl:import href=URI />

### Attribut obligatoire

- `href`
  - : Définit l'URI de la feuille de styles à importer.

### Attributs optionnels

Aucun.

### Type

Haut niveau, doit apparaître avant tout autre descendant de `<xsl:stylesheet>` ou de `<xsl:transform>` dans la feuille de styles qui effectue l'importation.

### Définition

[XSLT 1.0, section 2.6.2](http://www.w3.org/TR/xslt#import).

### Support Gecko

Support presque complet, quelques problèmes avec les variables et les paramètres de haut niveau dans Mozilla 1.0.
