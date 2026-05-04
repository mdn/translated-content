---
title: Propriété CSS `mask-clip`
short-title: mask-clip
slug: Web/CSS/Reference/Properties/mask-clip
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-clip`** définit la zone qui est modifiée par un masque. Le contenu «&nbsp;peint&nbsp;» sera restreint à cette zone.

## Syntaxe

```css
/* Valeurs de type <coord-box> */
mask-clip: content-box;
mask-clip: padding-box;
mask-clip: border-box;
mask-clip: fill-box;
mask-clip: stroke-box;
mask-clip: view-box;

/* Valeurs avec un mot-clé */
mask-clip: no-clip;

/* Valeurs multiples */
mask-clip: padding-box, no-clip;
mask-clip: view-box, fill-box, border-box;

/* Valeurs globales */
mask-clip: inherit;
mask-clip: initial;
mask-clip: revert;
mask-clip: revert-layer;
mask-clip: unset;
```

### Valeurs

La propriété accepte une liste de mots-clés séparés par des virgules. Chaque valeur est un `<coord-box>` ou `no-clip`&nbsp;:

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
  - : C'est la zone d'affichage (<i lang="en">viewport</i> en anglais) du plus proche SVG qui est utilisé comme boîte de référence. Si l'attribut {{SVGAttr("viewBox")}} est défini pour l'élément qui crée la zone d'affichage, la boîte de référence est positionnée à l'origine du système de coordonnées défini par l'attribut `viewBox` et les dimensions de la boîte sont basées sur la hauteur et la largeur de l'attribut `viewBox`.
- `no-clip`
  - : La partie qui est peinte n'est pas rognée.
- `border` {{Non-standard_Inline}}
  - : Synonyme de `border-box`.
- `padding` {{Non-standard_Inline}}
  - : Synonyme de `padding-box`.
- `content` {{Non-standard_Inline}}
  - : Synonyme de `content-box`.
- `text` {{Non-standard_Inline}}
  - : L'image est rognée selon la forme du texte de l'élément.

## Description

La propriété `mask-clip` définit la zone de l'élément qui est affectée par le masque appliqué.

Pour les images de calque de masque qui ne font pas référence à un élément SVG {{SVGElement("mask")}}, la propriété `mask-clip` définit la zone de peinture du masque, ou la zone affectée par le masque. Le contenu peint de l'élément sera limité à cette zone.

La propriété `mask-clip` n'a aucun effet sur une image de calque de masque qui fait référence à un élément `<mask>`. Les attributs {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} et {{SVGAttr("maskUnits")}} de l'élément `<mask>` déterminent la zone de peinture du masque lorsque la source de {{CSSxRef("mask-image")}} est un `<mask>`.

Un élément peut avoir plusieurs calques de masque appliqués. Le nombre de calques est déterminé par le nombre de valeurs séparées par des virgules dans la valeur de la propriété `mask-image` (même si une valeur est `none`). Chaque valeur `mask-clip` dans la liste de valeurs séparées par des virgules est associée aux valeurs `mask-image`, dans l'ordre. Si le nombre de valeurs dans les deux propriétés diffère, les valeurs excédentaires de `mask-clip` ne sont pas utilisées, ou, si `mask-clip` a moins de valeurs que `mask-image`, les valeurs de `mask-clip` sont répétées.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Rogner un masque à la bordure de la boîte

Cet exemple démontre trois valeurs de `mask-clip`.

#### HTML

Nous incluons trois éléments, chacun avec une valeur `<coord-box>` différente comme nom de classe.

```html live-sample___mask-clip-example
<div class="border-box"></div>
<div class="padding-box"></div>
<div class="content-box"></div>
```

#### CSS

Le CSS définit l'élément pour avoir un arrière-plan, une bordure, un remplissage et une marge, ainsi qu'une image de masque, chaque `<div>` ayant une `<coord-box>` différente. Nous avons généré du contenu avec le nom de la classe, déplaçant ce texte de 10px vers le haut pour éviter qu'il ne soit masqué hors de la vue.

```css live-sample___mask-clip-example
div {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  margin: 10px;
  border: 20px solid #8ca0ff;
  padding: 20px;
  mask-image: url("https://mdn.github.io/shared-assets/images/examples/mdn.svg");
  mask-size: 100% 100%;
}
.content-box {
  mask-clip: content-box;
}
.border-box {
  mask-clip: border-box;
}
.padding-box {
  mask-clip: padding-box;
}
div::before {
  content: attr(class);
  position: relative;
  top: -10px;
}
```

```css hidden live-sample___mask-clip-example
body {
  display: flex;
  flex-flow: row wrap;
}
```

#### Résultats

{{EmbedLiveSample("mask-clip-example", "", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("mask")}}
- La propriété {{CSSxRef("mask-image")}}
- La propriété {{CSSxRef("mask-origin")}}
- La propriété {{CSSxRef("mask-position")}}
- La propriété {{CSSxRef("mask-repeat")}}
- La propriété {{CSSxRef("mask-size")}}
- La propriété {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("clip-path")}}
- La propriété {{CSSxRef("background-clip")}}
- [Introduction au rognage CSS](/fr/docs/Web/CSS/Guides/Masking/Clipping)
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- [Les propriétés CSS `mask`](/fr/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Déclarer plusieurs masques](/fr/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Le module [de masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
