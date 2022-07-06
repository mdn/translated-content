---
title: '-webkit-print-color-adjust'
slug: Web/CSS/print-color-adjust
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-print-color-adjust
original_slug: Web/CSS/-webkit-print-color-adjust
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-print-color-adjust`** est une extension non-standard qui peut être utilisée pour forcer l'impression des images et couleurs utilisées en arrière-plan pour les navigateurs basés sur WebKit.

```css
/* Valeurs avec un mot-clé */
-webkit-print-color-adjust: economy;
-webkit-print-color-adjust: exact;

/* Valeurs globales */
-webkit-print-color-adjust: inherit;
-webkit-print-color-adjust: initial;
-webkit-print-color-adjust: unset;
```

## Syntaxe

La propriété `-webkit-print-color-adjust` peut être définie avec l'un des mots-clés suivants.

### Valeurs

- `economy`
  - : Le comportement normal : les images et couleurs d'arrière-plan sont uniquement imprimées si l'utilisateur a explicitement permis cette impression dans la boîte de dialogue pour les réglages d'impression.
- `exact`
  - : Les images et couleurs d'arrière-plan de l'élément auquel la règle CSS est appliquée seront toujours imprimées, les réglages d'impression sont donc surchargés.

## Exemples

```css
/* Force l'article à être imprimé en noir et blanc */
article {
  -webkit-print-color-adjust: exact;
  background: #222;
  color: #eee;
}
```

## Spécifications

Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification. Il existe [une proposition sur le wiki du groupe de travail CSS](https://wiki.csswg.org/ideas/print-backgrounds) pour standardiser cette propriété.

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-print-color-adjust")}}

## Voir aussi

- [Bug WebKit 64583](https://bugs.webkit.org/show_bug.cgi?id=64583) : Ajout d'une propriété CSS permettant de contrôler l'impression des arrière-plans des éléments.
- Wiki du groupe de travail CSS : [print-backgrounds](https://wiki.csswg.org/ideas/print-backgrounds) - une proposition de standardisation pour cette propriété.
- La spécification du module des couleurs CSS (CSS Color) de niveau 4 ajoute la propriété [`color-adjust`](https://drafts.csswg.org/css-color-4/#color-adjust) pour standardiser cette propriété.
