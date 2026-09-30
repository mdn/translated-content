---
title: Le format Web Open Font (WOFF)
short-title: WOFF
slug: Web/CSS/Guides/Fonts/WOFF
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**WOFF** (pour <i lang="en">Web Open Font Format</i> en anglais) est un format de police web développé par Mozilla en collaboration avec Type Supply, LettError et d'autres organisations. Il utilise une version compressée de la même structure `sfnt` basée sur des tables utilisée par TrueType, OpenType et Open Font Format, mais ajoute des métadonnées et des structures de données à usage privé, y compris des champs prédéfinis permettant aux fonderies et aux fournisseurs de fournir des informations sur les licences si nécessaire.

Il y a trois principaux avantages à utiliser WOFF&nbsp;:

1. Les données de la police sont compressées, donc les sites utilisant WOFF utilisent moins de bande passante et se chargent plus rapidement que s'ils utilisent des fichiers TrueType ou OpenType non compressés équivalents.
2. De nombreux fournisseurs de polices qui ne sont pas disposés à accorder une licence pour leurs polices au format TrueType ou OpenType pour une utilisation sur le web accordent une licence pour les polices au format WOFF. Cela améliore la disponibilité des polices pour les concepteurs de sites.
3. Les navigateurs propriétaires et les navigateurs libres aiment le format WOFF, il a donc le potentiel de devenir un format de police véritablement universel et interopérable pour le web, contrairement aux autres formats de police actuels.

Il existe deux versions de WOFF&nbsp;: WOFF et WOFF2. Elles diffèrent principalement par l'algorithme de compression utilisé. Dans {{CSSxRef("@font-face")}}, elles sont identifiées respectivement par le descripteur de format `'woff'` et `'woff2'`.

## Utiliser WOFF

Vous pouvez utiliser la propriété CSS {{CSSxRef("@font-face")}} pour utiliser des polices WOFF pour le texte dans le contenu web. Cela fonctionne exactement comme pour les polices au format OpenType et TrueType, sauf que cela permet probablement à votre contenu de se télécharger plus efficacement grâce à l'ajout de la compression.

## Outils pour travailler avec les polices WOFF

- [Des outils pour travailler avec les polices WOFF <sup>(angl.)</sup>](https://github.com/odemiral/woff2sfnt-sfnt2woff) sont disponibles. `sfnt2woff` et `woff2sfnt` permettent de convertir entre WOFF et OpenType.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle {{CSSxRef("@font-face")}}
