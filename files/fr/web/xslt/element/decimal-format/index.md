---
title: decimal-format
slug: Web/XSLT/Element/decimal-format
tags:
  - Référence_XSLT
translation_of: Web/XSLT/Element/decimal-format
original_slug: Web/XSLT/decimal-format
---
{{ XsltRef() }}

L'élément `<xsl:decimal-format>` définit les caractères et symboles à utiliser lors de la conversion de nombres en chaînes à l'aide de la fonction `format-number( )`.

### Syntaxe

    <xsl:decimal-format
    	name=NOM
    	decimal-separator=CARACTÈRE
    	grouping-separator=CARACTÈRE
    	infinity=CHAÎNE
    	minus-sign=CARACTÈRE
    	NaN=CHAÎNE
    	percent=CARACTÈRE
    	per-mille=CARACTÈRE
    	zero-digit=CARACTÈRE
    	digit=CARACTÈRE
    	pattern-separator=CARACTÈRE />

### Attributs obligatoires

Aucun.

### Attributs optionnels

- `name`
  - : Définit un nom pour ce format.

<!---->

- `decimal-separator`
  - : Définit le caractère séparateur des décimales. Le caractère par défaut est (`.`).

<!---->

- `grouping-separator`
  - : Définit le caractère séparateur des milliers. Le caractère par défaut est (`,`).

<!---->

- `infinity`
  - : Définit la chaîne utilisée pour représenter l'infini. La chaîne par défaut est "`Infinity`".

<!---->

- `minus-sign`
  - : Définit le caractère du signe moins. Le caractère par défaut est le trait d'union (`-`).

<!---->

- `NaN`
  - : Définit la chaîné utilisée lorsque la valeur n'est pas un nombre. La chaîne par défaut est "`NaN`".

<!---->

- `percent`
  - : Définit le caractère du signe pourcentage. Le caractère par défaut est (`%`).

<!---->

- `per-mille`
  - : Définit le caractère signe pour mille. Le caractère par défaut est (`‰`).

<!---->

- `zero-digit`
  - : Définit le caractère pour le chiffre 0. Le caractère par défaut est (`0`).

<!---->

- `digit`
  - : Définit le caractère représentant un nombre dans le modèle de format. Le caractère par défaut est (`#`).

<!---->

- `pattern-separator`
  - : Définit le caractère séparant les sous-modèles positifs et négatifs dans le modèle de format. Le caractère par défaut est le point-virgule (`;`).

### Type

Haut niveau, doit être l'enfant de `<xsl:stylesheet>` ou de `<xsl:transform>`.

### Définition

[XSLT 1.0, section 12.3](http://www.w3.org/TR/xslt#format-number).

### Support Gecko

Supporté depuis 1.0 (Mozilla 1.0, Netscape 7.0).
