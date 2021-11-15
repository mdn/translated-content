---
title: element-available
slug: Web/XPath/Functions/element-available
tags:
  - Référence_XSLT
translation_of: Web/XPath/Functions/element-available
original_slug: Web/XPath/Fonctions/element-available
---
{{ XsltRef() }}

La fonction `element-available` détermine si un élément est disponible et retourne la valeur booléenne `true` ou `false`.

### Syntaxe

    element-available( QName )

### Arguments

- `QName`
  - : Doit s'évaluer en un QName valide. Le QName est développé en _nom étendu_ à l'aide des déclarations d'espaces de nommage s'appliquant à l'expression. Le nom étendu est constitué d'une partie locale, une chaîne, et d'une URI d'espace de nommage.

### Retour

Retourne `true` si et seulement si le nom étendu est un nom d'instruction. Si le nom étendu a une URI d'espace de nommage égale à l'URI de l'espace de nommage XSLT, alors il se rapporte à un élément défini par XSLT. Autrement, il se rapporte à un élément d'extension. Si le nom étendu a une URI d'espace de nommage null, la fonction `element-available` retournera `false`.

### Définition

[XSLT 1.0, section 15](http://www.w3.org/TR/xslt#function-element-available).

### Support Gecko

Supportée.
