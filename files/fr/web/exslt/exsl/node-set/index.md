---
title: node-set
slug: Web/EXSLT/exsl/node-set
tags:
  - EXSLT
  - Référence_XSLT
  - XSLT
translation_of: Web/EXSLT/exsl/node-set
---
{{ XsltRef() }}

`exsl:node-set()` retourne un ensemble de nœuds d'un fragment d'arbre résultant, qui correspond à ce qu'on obtient en regardant [`xsl:variable`](fr/XSLT/variable) plutôt que son attribut `select` pour récupérer la valeur d'une variable. Ceci permet de traiter le XML créé dans une variable pour de le traiter en plusieurs étapes.

Vous pouvez également utiliser `exsl:node-set()` pour transformer des chaînes en nœuds texte.

### Syntaxe

    exsl:node-set(objet)

### Arguments

- `objet`
  - : L'objet pour lequel retourner l'ensemble de nœud correspondant.

### Retourne

L'ensemble de nœuds correspondant à l'`objet` spécifié.

### Définition

[EXSLT - EXSL:NODE-SET (en)](http://www.exslt.org/regexp/functions/node-set/index.html)

### Support par Gecko

Supporté par Gecko 1.9 et ultérieur.

{{ languages( { "en": "en/EXSLT/exsl/node-set", "es": "es/EXSLT/exsl/node-set", "ja": "ja/EXSLT/exsl/node-set" } ) }}
