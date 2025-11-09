---
title: Gamut
slug: Glossary/Gamut
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **gamut** ou encore appelé une **gamme de couleurs** est un sous-ensemble de couleurs, représentant généralement les couleurs qu'un écran ou qu'un périphérique d'impression peut afficher.

Aucun écran ou imprimante ne peut représenter toute la gamme de couleurs qu'un œil humain peut percevoir. Le _gamut_ d'un périphériques représente l'ensemble qu'il prend en charge.

Traditionnellement, dans le développement web, la seule gamme utilisée était _[sRGB](https://fr.wikipedia.org/wiki/SRGB)_ (pour <i lang="en">Standard Red-Green-Blue</i> en anglais), où chaque couleur est décrite à l'aide de trois octets, un pour chaque couleur primaire. Cependant, les moniteurs à large gamme de couleurs et les imprimantes professionnelles prennent en charge une gamme de couleurs plus large, qui ne peut pas être représentée à l'aide de ce gamut.

Depuis 2021, les navigateurs ont commencé à fournir des fonctionnalités pour d'autres gamuts, comme _[P3](https://fr.wikipedia.org/wiki/DCI-P3)_, largement utilisé dans l'industrie du cinéma, et _[rec2020](https://fr.wikipedia.org/wiki/Rec._2020)_.

Les développeur·euse·s peuvent définir différents jeux de couleurs pour les périphériques prenant en charge des gamuts plus larges à l'aide de la [fonctionnalité média `color-gamut`](/fr/docs/Web/CSS/Reference/At-rules/@media/color-gamut) ou de la [fonctionnalité média](/fr/docs/Web/CSS/Guides/Media_queries/Using). On peut décrire des couleurs en dehors du gamut RVB à l'aide de fonctions CSS spécifiques comme [`lch()`](/fr/docs/Web/CSS/Reference/Values/color_value/lch) pour le système de coordonnées cylindriques LCH, ou [`lab()`](/fr/docs/Web/CSS/Reference/Values/color_value/lab) pour le système de coordonnées Lab.

## Voir aussi

- [Le gamut](https://fr.wikipedia.org/wiki/Gamut) sur Wikipédia
