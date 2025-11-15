---
title: Interpolation
slug: Glossary/Interpolation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

L'**interpolation** est une méthode permettant d'estimer de nouvelles valeurs à partir d'un ensemble de points de données connus.

L'interpolation calcule des valeurs intermédiaires dans les animations qui modifient des propriétés HTML comme la hauteur, la largeur, etc.
L'interpolation des couleurs définit les valeurs intermédiaires lors du mélange de couleurs, des dégradés, de la composition, des filtres, des transitions, des animations et des fonctions de couleur.

Les interpolations ne sont pas nécessairement linéaires. La plupart des valeurs interpolées sont des nombres réels à virgule flottante&nbsp;; cependant, lorsqu'il n'existe pas de valeur intermédiaire entre deux valeurs (par exemple, pour les valeurs qui n'acceptent que des entiers), [l'interpolation est discrète](/fr/docs/Web/CSS/Reference/Values/integer#interpolation). La progression de l'interpolation dépend aussi des [fonctions d'évolution](/fr/docs/Web/CSS/Reference/Values/easing-function) dans les animations et les points d'arrêt de couleur, ainsi que des méthodes d'interpolation {{CSSxRef("color-interpolation-method", "color")}} et {{CSSxRef("hue-interpolation-method", "hue")}} dans les dégradés.

En JavaScript, le terme «&nbsp;[interpolation](/fr/docs/Web/JavaScript/Reference/Template_literals#interpolation_dexpressions)&nbsp;» désigne la substitution de chaînes de caractères dans les gabarits de chaînes (<i lang="en">template literals</i>).

## Voir aussi

- L'attribut SVG {{SVGAttr("color-interpolation")}}
- La propriété CSS {{CSSxRef("color-interpolation")}}
- Le type de donnée {{CSSxRef("color-interpolation-method")}}
- Le type de donnée {{CSSxRef("hue-interpolation-method")}}
- La fonction CSS {{CSSxRef("color_value/color-mix", "color-mix()")}}
- [Interpolation des couleurs en CSS](/fr/docs/Web/CSS/Reference/Values/color_value#interpolation)
- [Interpolation](https://fr.wikipedia.org/wiki/Interpolation_num%C3%A9rique) sur Wikipédia
- [Interpolation de chaînes <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/String_interpolation) sur Wikipédia
