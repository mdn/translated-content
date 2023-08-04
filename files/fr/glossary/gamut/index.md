---
title: Gamut
slug: Glossary/Gamut
l10n:
  sourceCommit: 841204421a73fe3062521c274632649e8d460bdf
---

Un **gamut** ou encore appelé une **gamme de couleurs** est un sous-ensemble de couleurs, représentant généralement les couleurs qu'un écran ou qu'un périphérique d'impression peut afficher.

Aucun écran ou imprimante ne peut représenter toute la gamme de couleurs qu'un œil humain peut percevoir. Le _gamut_ d'un périphériques représente l'ensemble qu'il prend en charge.

Traditionnellement, dans le développement web, la seule gamme utilisée était [sRGB](https://fr.wikipedia.org/wiki/SRGB) (pour <i lang="en">Standard Red-Green-Blue</i> en anglais), où chaque couleur est décrite à l'aide de trois octets, un pour chaque couleur primaire. Cependant, les moniteurs à large gamme de couleurs et les imprimantes professionnelles prennent en charge une gamme de couleurs plus large, qui ne peut pas être représentée à l'aide de ce gamut.

Depuis 2021, les navigateurs ont commencé à fournir des fonctionnalités pour d'autres gamuts, comme [P3](https://fr.wikipedia.org/wiki/DCI-P3), largement utilisé dans l'industrie du cinéma, et [rec2020](https://fr.wikipedia.org/wiki/Rec._2020).

Il est désormais possible de définir différents ensembles de couleurs pour les appareils prenant en charge des gammes plus étendues à l'aide de la [fonctionnalité média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries) [`color-gamut`](/fr/docs/Web/CSS/@media/color-gamut). Des couleurs en dehors de la gamme RGB peuvent être définies à l'aide de fonctions CSS spécifiques telles que [`lch()`](/fr/docs/Web/CSS/color_value/lch) pour le système de coordonnées cylindriques LCH ou [`lab()`](/fr/docs/Web/CSS/color_value/lab) pour le système de coordonnées Lab.

## Voir aussi

- [L'article Wikipédia sur le gamut](https://fr.wikipedia.org/wiki/Gamut)
