---
title: mask-origin
slug: Web/CSS/mask-origin
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`mask-origin`** permet de définir l'origine à partir de laquelle placer le masque.

```css
/* Valeurs avec un mot-clé */
mask-origin: content-box;
mask-origin: padding-box;
mask-origin: border-box;
mask-origin: margin-box;
mask-origin: fill-box;
mask-origin: stroke-box;
mask-origin: view-box;

/* Valeurs multiples */
mask-origin: padding-box, content-box;
mask-origin: view-box, fill-box, border-box;

/* Valeurs non-standards */
-webkit-mask-origin: content;
-webkit-mask-origin: padding;
-webkit-mask-origin: border;

/* Valeurs globales */
mask-origin: inherit;
mask-origin: initial;
mask-origin: revert;
mask-origin: unset;
```

Pour les éléments qui sont affichés avec une unique boîte, cette propriété définit la zone de positionnement du masque. Autrement dit, cette propriété indique l'origine de la position pour l'image définie via [`mask-image`](/fr/docs/Web/CSS/mask-image). Pour les éléments qui sont affichés comme plusieurs boîtes (les boîtes en lignes ou plusieurs lignes ou plusieurs boîtes sur plusieurs pages), elle définit les boîtes sur lesquelles [`box-decoration-break`](/fr/docs/Web/CSS/box-decoration-break) agira pour déterminer la zone de positionnement du masque.

## Syntaxe

Un ou plusieurs mots-clés parmi ceux listés ci-après, chacun séparé par une virgule.

### Valeurs

- `content-box`
  - : La position de la zone est relative à la boîte de contenu.
- `padding-box`
  - : La position de la zone est relative à la boîte de remplissage (<i lang="en">padding</i>). Pour les boîtes simples, `0 0` désigne le coin en haut à gauche de la bordure de cette boîte et `100% 100%` le coin en bas à droite.
- `border-box`
  - : La position de la zone est relative à la boîte de bordure.
- `margin-box`
  - : La position de la zone est relative à la boîte de marge.
- `fill-box`
  - : La position de la zone est relative à la boîte liée à l'objet.
- `stroke-box`
  - : La position de la zone est relative à la boîte de contour de l'objet.
- `view-box`
  - : La zone d'affichage (<i lang="en">viewport</i>) SVG la plus proche est utilisée comme boîte de référence. Si l'attribut `viewBox` est défini pour l'élément qui crée la zone d'affichage, la boîte de référence est positionnée à l'origine du système de coordonnées établi par `viewBox`. Les dimensions de la boîte de référence sont les valeurs de largeur et de hauteur de `viewBox`.
- `content` {{non-standard_inline}}
  - : Synonyme de `content-box`.
- `padding` {{non-standard_inline}}
  - : Synonyme de `padding-box`.
- `border` {{non-standard_inline}}
  - : Synonyme de `border-box`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir l'origine du masque avec `border-box`

Vous pouvez également essayer d'autres valeurs en éditant le code CSS qui suit.

{{EmbedGHLiveSample("css-examples/masking/mask-origin.html", '100%', 600)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Rognage et masquage avec CSS (en anglais)](https://css-tricks.com/clipping-masking-css/)
