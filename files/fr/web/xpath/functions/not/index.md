---
title: not
slug: Web/XPath/Functions/not
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/not
original_slug: Web/XPath/Fonctions/not
---
{{ XsltRef() }}

La fonction `not` évalue une expression booléenne et retourne la valeur opposée.

### Syntaxe

    not( expression )

### Arguments

- `expression` (optionnel)
  - : L'expression est évaluée exactement comme si elle était passée en tant qu'argument à la fonction [boolean()](fr/XPath/Fonctions/boolean).

### Retour

`True` pour une expression évaluée à `false` ; `false` pour une expression évaluée à `true`.

### Notes

- Cette fonction devrait se comporter de façon identique à la fonction [boolean()](fr/XPath/Fonctions/boolean), excepté qu'elle retourne la valeur opposée.

### Définition

[XPath 1.0, section 4.3](http://www.w3.org/TR/xpath#function-not).

### Support Gecko

Supportée.
