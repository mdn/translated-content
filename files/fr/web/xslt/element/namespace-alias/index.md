---
title: namespace-alias
slug: Web/XSLT/Element/namespace-alias
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/namespace-alias
original_slug: Web/XSLT/namespace-alias
---
{{ XsltRef() }}

L'élément `<xsl:namespace-alias>` est un dispositif rarement utilisé qui établit une équivalence entre un espace de nommage d'une feuille de styles et un espace de nommage différent dans l'arbre de sortie. L'utilisation la plus courante de cet élément est la génération d'une feuille de styles depuis une autre feuille de styles. Pour éviter qu'un élément résultat correctement préfixé par `xsl:` (qui doit être copié tel quel dans l'arbre résultant) soit interprêté à tort par le processeur, il lui est assigné un espace de nommage temporaire qui est convenablement reconverti en l'espace de nommage XSLT dans l'arbre de sortie.

### Syntaxe

    <xsl:namespace-alias stylesheet-prefix=NOM result-prefix=NOM />

### Attributs obligatoires

- `stylesheet-prefix`
  - : Définit l'espace de nommage temporaire.
- `result-prefix`
  - : Définit l'espace de nommage voulu pour l'arbre de sortie.

### Attributs optionnels

Aucun.

### Type

Haut niveau, doit être l'enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`.

### Définition

[XSLT 1.0, section 7.1.1](http://www.w3.org/TR/xslt#literal-result-element).

### Support Gecko

Pas encore supporté.
