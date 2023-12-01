---
title: "-webkit-mask-attachment"
slug: Web/CSS/-webkit-mask-attachment
---

{{CSSRef}}{{Non-standard_header}}

Si la propriété {{cssxref("-webkit-mask-image")}} est définie, **`-webkit-mask-attachment`** permet de déterminer si la position de l'image est fixe par rapport à la zone d'affichage ou si elle défile avec le bloc qui l'englobe.

```css
/* Valeurs avec un mot-clé */
-webkit-mask-attachment: scroll;
-webkit-mask-attachment: fixed;
-webkit-mask-attachment: local;

/* Valeurs multiples */
-webkit-mask-attachment: scroll, local;
-webkit-mask-attachment: fixed, local, scroll;

/* Valeurs globales */
-webkit-mask-attachment: inherit;
-webkit-mask-attachment: initial;
-webkit-mask-attachment: unset;
```

## Syntaxe

### Valeurs

- `scroll`
  - : Si le mot-clé `scroll` est utilisé, l'image de masque défilera avec le bloc qui l'englobe.
- `fixed`
  - : Si le mot-clé `fixed` est utilisé, l'image de masque ne défilera pas. Sa position sera fixe pour la zone d'affichag (_viewport_).

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
body {
  -webkit-mask-image: url("images/mask.png");
  -webkit-mask-attachment: fixed;
}
```

## Spécifications

Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("-webkit-mask")}}
- {{cssxref("-webkit-mask-clip")}}
- {{cssxref("-webkit-mask-box-image")}}
- {{cssxref("-webkit-mask-origin")}}
- {{cssxref("-webkit-mask-image")}}
- {{cssxref("-webkit-mask-composite")}}
- {{cssxref("-webkit-mask-repeat")}}
