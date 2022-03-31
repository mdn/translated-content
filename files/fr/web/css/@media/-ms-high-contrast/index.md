---
title: '-ms-high-contrast'
slug: Web/CSS/@media/-ms-high-contrast
tags:
  - '@media'
  - CSS
  - Caractéristique média
  - Non-standard
  - Reference
translation_of: Web/CSS/@media/-ms-high-contrast
original_slug: Web/CSS/-ms-high-contrast
---
{{CSSRef}}{{Non-standard_header}}

La [caractéristique média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries#cibler_des_caract%c3%a9ristiques_m%c3%a9dia) **`-ms-high-contrast`**, relative à la règle @ [`@media`](/fr/docs/Web/CSS/@media), est une [extension Microsoft](/en-US/docs/Web/CSS/Microsoft_extensions) qui décrit si l'application est affichée dans un mode de contraste élevé et, si c'est le cas, quelle est la variation de couleur affichée.

Cette caractéristique média s'applique aux média de type matriciel (_bitmap_). Elle ne gère pas les préfixes `min` et `max`.

## Syntaxe

La caractéristique média **`-ms-high-contrast`** est définie avec une des valeurs définies ci-après.

### Valeurs

- `active`
  - : Cette valeur indique que les règles de mise en forme qui suivent sont appliquées lorsque le système utilise un affichage avec contraste élevé, quel que soit la variation de couleur.
- `none`{{deprecated_inline}}
  - : Cette valeur n'est plus prise en charge par Edge.
- `black-on-white`
  - : Cette valeur indique que les règles de mise en forme qui suivent sont appliquées lorsque le système utilise un affichage avec contraste élevé en noir sur blanc.
- `white-on-black`
  - : Cette valeur indique que les règles de mise en forme qui suivent sont appliquées lorsque le système utilise un affichage avec contraste élevé en blanc sur noir.

### Syntaxe formelle

{{CSSSyntax}}

## Exemples

Les déclarations suivantes s'appliqueront respectivement sur des applications utilisées avec un mode de contraste élevé, avec une variation en noir sur blanc et enfin avec une variation en blanc sur noir.

```css
@media screen and (-ms-high-contrast: active) {
  /* Règles utilisées dans tous les cas si
     le contraste élevé est utilisé */
}
@media screen and (-ms-high-contrast: black-on-white) {
  div { background-image: url('image-bw.png'); }
}
@media screen and (-ms-high-contrast: white-on-black) {
  div { background-image: url('image-wb.png'); }
}
```

## Spécifications

Cette caractéristique est propre à Microsoft et n'est décrite dans aucune spécification.

## Notes

À partir de Microsoft Edge, **`-ms-high-contrast: none`** n'est plus pris en charge.

La caractéristique média **`-ms-high-contrast`** fonctionne avec la propriété {{cssxref("-ms-high-contrast-adjust")}}.

La caractéristique média **`-ms-high-contrast`** a été introduite avec Windows 8.
