---
title: '<basefont> : l''élément définissant la fonte de base'
slug: Web/HTML/Element/basefont
tags:
  - Element
  - Fonts
  - HTML
  - Layout
  - Deprecated
  - Reference
  - Style
  - Web
  - basefont
translation_of: Web/HTML/Element/basefont
browser-compat: html.elements.basefont
---
{{HTMLRef}}

> **Attention :** Cette fonctionnalité a été supprimée des standards du Web. Bien que quelques navigateurs puissent encore la supporter, elle est en cours d'éradication. Ne l'utilisez ni dans d'anciens projets, ni dans de nouveaux. Les pages et applications Web l'utilisant peuvent cesser de fonctionner à tout moment.

L'élément HTML **`<basefont>`** définit la police par défaut (taille, fonte, couleur) pour les éléments qui sont des descendants de cet élément. La taille de la police utilisée peut ensuite varier relativement à cette taille de base grâce à l'élément [`<font>`](/fr/docs/Web/HTML/Element/font).

N'utilisez pas cet élément, mais plutôt les propriétés CSS telles que [`font`](/fr/docs/Web/CSS/font), [`font-family`](/fr/docs/Web/CSS/font-family), [`font-size`](/fr/docs/Web/CSS/font-size) et [`color`](/fr/docs/Web/CSS/color) pour modifier la configuration de la police d'un élément et de son contenu.

## Attributs

Comme tous les autres éléments HTML, cet élément prend en charge [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- **`color`**
  - : Cet attribut définit la couleur du texte grâce à une couleur nommée ou à une couleur définie dans un format hexadécimal #RRGGBB.
- **`face`**
  - : Cet attribut contient une liste d'un ou plusieurs noms de police. Le texte du document, dans son style par défaut, est rendu avec la première police prise en charge par le navigateur du client. Si aucune police listée ne se trouve sur le système local, le navigateur utilise la police proportionnelle ou à largeur fixe du système.
- **`size`**
  - : Cet attribut définit la taille de la police avec une valeur numérique ou relative. Les valeurs numériques vont de 1 à 7 ; 1 étant la plus petite et 3 la taille par défaut.

## Notes d'utilisation

_N'utilisez pas cet élément !_ Bien qu'ayant été une fois normalisé (imprécisément) dans HTML 3.2, il n'a pas été pris en charge par l'ensemble des navigateurs principaux. De plus, les différents navigateurs et leurs versions successives ne l'ont jamais implémenté de la même façon. Utiliser cet élément a toujours produit un résultat _imprévisible_.

L'élément `<basefont>` a été rendu obsolète dans le standard, comme les autres éléments qui se limitaient à l'apparence. À partir de HTML4, HTML n'apporte plus d'informations de présentation (en dehors de [`<style>`](/fr/docs/Web/HTML/Element/style) et de l'attribut **`style`** de chaque élément). Avec HTML5, l'élément `<basefont>` a complètement été retiré. Pour tout nouveau développement web, seul [CSS](/fr/docs/Web/CSS) doit être utilisé pour les aspects de présentation.

Il faut privilégier [les propriétés CSS relatives aux polices de caractères](/fr/docs/Web/CSS/CSS_Fonts) pour obtenir l'effet souhaité.

## Interface DOM

Cet élément implémente l'interface [`HTMLBaseFontElement`](/fr/docs/Web/API/HTMLBaseFontElement).

## Exemples

```html
<basefont color="#FF0000" face="Helvetica" size="+2" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Notes

- HTML 3.2 prend en charge l'élément `<basefont>` mais seulement avec son attribut `size`.
- Les spécifications HTML strict et XHTML ne prennent pas en charge cet élément.
- Bien qu'ayant fait partie de standards transitionnels, certains navigateurs respectant les standards comme Mozilla et Opera ne prennent pas en charge cet élément.
- Cet élément peut être imité avec une règle CSS sur l'élément [`<body>`](/fr/docs/Web/HTML/Element/body).
- XHTML 1.0 requiert une barre oblique de fermeture à la fin de cet élément : `<basefont />`.
