---
title: mask-clip
slug: Web/CSS/mask-clip
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`mask-clip`** définit la zone qui est modifiée par un masque. Le contenu «&nbsp;peint&nbsp;» sera restreint à cette zone.

```css
/* Valeurs de type <geometry-box> */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: margin-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* Valeurs avec un mot-clé */
mask-clip: no-clip;

/* Mots-clés non-standards */
-webkit-mask-clip: border;
-webkit-mask-clip: padding;
-webkit-mask-clip: content;
-webkit-mask-clip: text;

/* Valeurs multiples */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* Valeurs globales */
mask-clip: inherit;
mask-clip: initial;
mask-clip: revert;
mask-clip: unset;
```

## Syntaxe

Un ou plusieurs mots-clés parmi ceux listés ci-après, chacun séparé par une virgule.

### Valeurs

- `content-box`
  - : La partie qui est peinte est rognée sur la boîte de contenu.
- `padding-box`
  - : La partie qui est peinte est rognée sur la boîte de remplissage (<i lang="en">padding</i>).
- `border-box`
  - : La partie qui est peinte est rognée sur la boîte de bordure.
- `margin-box`
  - : La partie qui est peinte est rognée sur la boîte de marge.
- `fill-box`
  - : La partie qui est peinte est rognée sur la boîte contenant l'objet.
- `stroke-box`
  - : La partie qui est peinte est rognée sur la boîte contenant le contour.
- `view-box`
  - : C'est le <i lang="en">viewport</i> du plus proche SVG qui est utilisé comme boîte de référence. Si l'attribut [`viewBox`](/fr/docs/Web/SVG/Attribute/viewBox) est défini pour l'élément qui crée le <i lang="en">viewport</i>, la boîte de référence est positionnée à l'origine du système de coordonnées défini par l'attribut `viewBox` et les dimensions de la boîte sont basées sur la hauteur et la largeur de l'attribut `viewBox`.
- `no-clip`
  - : La partie qui est peinte n'est pas rognée.
- `border` {{non-standard_inline}}
  - : Synonyme de `border-box`.
- `padding` {{non-standard_inline}}
  - : Synonyme de `padding-box`.
- `content` {{non-standard_inline}}
  - : Synonyme de `content-box`.
- `text` {{non-standard_inline}}
  - : L'image est rognée selon la forme du texte de l'élément.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

Vous pouvez modifier la valeur `mask-clip` dans l'exemple qui suit. Si vous utilisez un navigateur basé sur Chromium, modifiez la valeur de `-webkit-mask-clip`.

{{EmbedGHLiveSample("css-examples/masking/mask-clip.html", '100%', 800)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Rognage et masquage en CSS (en anglais)](https://css-tricks.com/clipping-masking-css/)
