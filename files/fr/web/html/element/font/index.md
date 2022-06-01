---
title: '<font> : l''élément de police'
slug: Web/HTML/Element/font
tags:
  - Element
  - HTML
  - Deprecated
  - Reference
  - Web
translation_of: Web/HTML/Element/font
browser-compat: html.elements.font
---
{{HTMLRef}}

> **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la prendre en charge, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications web l'utilisant peuvent cesser de fonctionner à tout moment.

L'élément HTML **`<font>`** définit la taille, la couleur et la police de son contenu.

> **Attention :** Ne pas utiliser cet élément ! Bien qu'il ait été normalisé en HTML 3.2, il a été déprécié en HTML 4.01, en même temps que tous les éléments liés uniquement au style, puis rendu obsolète en HTML5.
>
> À partir de HTML 4, HTML ne véhicule plus d'informations de style (en dehors de l'élément [`<style>`](/fr/docs/Web/HTML/Element/style) ou de l'attribut **style** de chaque élément). Pour tout nouveau développement web, le style doit être écrit en utilisant le [CSS](/fr/docs/Web/CSS) uniquement.
>
> L'ancien comportement de l'élément [`<font>`](font) peut être obtenu, et encore mieux contrôlé, en utilisant les propriétés CSS [relatives aux polices de caractères](/fr/docs/Web/CSS/CSS_Fonts).

## Attributs

Comme tous les autres éléments HTML, cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `color`
  - : Cet attribut définit la couleur du texte en utilisant soit une couleur nommée, soit une couleur indiquée par le format hexadécimal #RRGGBB.
- `face`
  - : Cet attribut contient une liste d'une ou plusieurs polices, séparées par des virgules. Le texte est affiché avec la première police que le navigateur supporte. Si aucune des polices listées n'est installée sur le système, le navigateur prend habituellement la police proportionnelle, ou à taille fixe par défaut, du système.
- `size`
  - : Cet attribut indique la taille du texte par une valeur numérique ou relative. Les valeurs numériques vont de `1` à `7`, `1` étant la plus petite taille et `3` la taille par défaut. Il peut être défini en utilisant une valeur relative, comme `+2` ou `-3`, qui est relative par rapport à la valeur de l'attribut [`size`](/fr/docs/Web/HTML/Element/basefont#attr-size) de l'élément [`<basefont>`](/fr/docs/Web/HTML/Element/basefont), ou relatif à `3`, la valeur par défaut, si aucune existe.

## Interface DOM

Cet élément implément l'interface [`HTMLFontElement`](/fr/docs/Web/API/HTMLFontElement).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
