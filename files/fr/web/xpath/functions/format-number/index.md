---
title: format-number
slug: Web/XPath/Functions/format-number
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/format-number
original_slug: Web/XPath/Fonctions/format-number
---
{{ XsltRef() }}

La fonction `format-number` évalue un nombre et retourne une chaîne représentant le nombre dans un format donné.

### Syntaxe

```
format-number( nombre , motif [, format-décimal] )
```

### Arguments

- `nombre`
  - : Le nombre à formater.

<!---->

- `motif`
  - : Une chaîne au format de la classe [Decimal Format (en)](http://java.sun.com/products/jdk/1.1/docs/api/java.text.DecimalFormat.html) du JDK 1.1. La notice du JDK 1.1 n'est plus disponible. Vous trouverez ici la notice pour le JSE 6: [Decimal Format (en)](http://java.sun.com/javase/6/docs/api/java/text/DecimalFormat.html)

<!---->

- `format-décimal` (optionnel)
  - : Le nom d'un élément [`xsl:decimal-format`](fr/XSLT/decimal-format) qui définit le format de nombre à utiliser. Si il est omis, le format décimal par défaut est utilisé.

### Retour

Une chaîne représentant le nombre dans le nouveau format.

### Notes

Cette fonction est un ajout à XPath spécifique à XSLT. Elle ne fait pas partie de la bibliothèque de fonctions XPath principale.

### Définition

[XSLT 1.0, section 12.3](http://www.w3.org/TR/xslt#function-format-number).

### Support Gecko

Supportée.
