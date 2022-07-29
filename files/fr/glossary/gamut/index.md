---
title: Gamut
slug: Glossary/Gamut
translation_of: Glossary/Gamut
---
Un **gamut** ou encore appellé une **gamme de couleurs** est un sous-ensemble de couleurs, représentant généralement les couleurs qu'un écran ou qu'un périphérique d'impression peut afficher.

Aucun écran ou imprimante ne peut représenter toute la gamme de couleurs qu'un œil humain peut percevoir. Le _gamut_ d'un périphériques représente l'ensemble qu'il prend en charge.

Traditionnellement, dans le développement Web, la seule gamme utilisée était _[sRGB](https://fr.wikipedia.org/wiki/SRGB)_ (<i lang="en">Standard Red-Green-Blue</i> en anglais), où chaque couleur est décrite à l'aide de trois octets, un pour chaque couleur primaire. Cependant, les moniteurs à "large couleur" et les imprimantes professionnelles prennent en charge une gamme de couleurs plus large, qui ne peut pas être représentée à l'aide de ce gamut.

Depuis 2021, les navigateurs ont commencé à fournir des fonctionnalités pour d'autres gamut, comme_[P3](https://fr.wikipedia.org/wiki/DCI-P3)_, largement utilisé dans l'industrie du cinéma, et _[rec2020](https://fr.wikipedia.org/wiki/Rec._2020)_.

Les développeurs peuvent définir différents ensembles de couleurs pour les appareils prenant en charge des gammes plus étendues à l'aide de la [fonctionnalité média](fr/docs/Web/CSS/Media_Queries/Using_media_queries) [`color-gamut`](/fr/docs/Web/CSS/@media/color-gamut). Ils peuvent décrire des couleurs en dehors de la gamme RGB à l'aide de fonctions CSS spécifiques telles que [`lch()`](/fr/docs/Web/CSS/color_value/lch) pour le système de coordonnées cylindriques LCH ou [`lab()`](/fr/docs/Web/CSS/color_value/lab) pour le système de coordonnées Lab.

## Voir aussi

- [_Le Gamut_](https://fr.wikipedia.org/wiki/Gamut) sur _Wikipedia_.
