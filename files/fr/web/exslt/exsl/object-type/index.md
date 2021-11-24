---
title: object-type
slug: Web/EXSLT/exsl/object-type
tags:
  - EXSLT
  - XSLT
translation_of: Web/EXSLT/exsl/object-type
---
{{ XsltRef() }}

`exsl:object-type()` retourne une chaîne indiquant le type de l'objet spécifié.

{{ Note("La plupart des types d\'objet <a href='\"fr/XSLT\"'>XSLT</a> peuvent être contraints les uns avec les autres sans risque. Cependant, certaines contraintes peuvent provoquer des erreurs. En particulier, le traitement de quelque chose qui n\'est pas un ensemble de nœuds comme tel. Cette fonction laisse aux auteurs des modèles nommés et des fonctions d\'extensions de fournir facilement une certaine flexibilité pour les valeurs de paramètres.") }}

### Syntaxe

    exsl:object-type(objet)

### Arguments

- `objet`
  - : L'objet dont on désire connaître le type.

### Retourne

Le type de l'`objet`, qui sera un des types suivants :

- `string` (chaîne)
- `number` (nombre)
- `boolean` (booléen)
- `node-set` (ensemble de nœuds)
- `RTF`
- `external` (externe)

### Définition

- [EXSLT - EXSL:OBJECT-TYPE (en)](http://www.exslt.org/regexp/functions/object-type/index.html)

### Support par Gecko

Supporté par Gecko 1.9 et ultérieur.
