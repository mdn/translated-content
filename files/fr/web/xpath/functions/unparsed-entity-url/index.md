---
title: unparsed-entity-url
slug: Web/XPath/Functions/unparsed-entity-url
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/unparsed-entity-url
original_slug: Web/XPath/Fonctions/unparsed-entity-url
---
{{ XsltRef() }}

La fonction `unparsed-entity-url()` retourne l'URI d'une entité non analysée avec le nom donné. C'est une donnée non-XML référencée dans le DTD du document source.

### Syntaxe

    string unparsed-entity-url(chaîne)

### Arguments

- `chaîne`
  - : Le nom de l'entité non analysée. Si l'argument n'est pas une chaîne, il est converti suivant les règles de la fonction [`string()`](fr/XPath/Fonctions/string). Le nom doit être un nom XML.

### Retour

L'URI de l'entité non analysée récupérée dans la DTD, si elle existe. Autrement, une chaîne vide.

### Définition

[XSLT 1.0, section 12.4](http://www.w3.org/TR/xslt#function-unparsed-entity-uri).0

### Support Gecko

Non supportée.
