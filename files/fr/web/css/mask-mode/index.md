---
title: mask-mode
slug: Web/CSS/mask-mode
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-mode
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`mask-mode`** détermine si le masque défini par {{cssxref("mask-image")}} est considéré comme un masque de luminance ou un masque alpha (transparence).

```css
/* Valeurs avec un mot-clé */
mask-mode: alpha;
mask-mode: luminance;
mask-mode: match-source;

/* Gestion de plusieurs masques */
mask-mode: alpha, match-source;

/* Valeurs globales */
mask-mode: inherit;
mask-mode: initial;
mask-mode: unset;
```

## Syntaxe

La propriété `mask-mode` est définie avec un ou plusieurs mots-clés parmi ceux de la liste suivante, séparés par des virgules.

### Valeurs

- `alpha`
  - : Ce mot-clé indique que ce sont les valeurs du canal alpha (le canal de transparence) qui sont utilisées comme valeurs de masque.
- `luminance`
  - : Ce mot-clé indique que ce sont les valeurs de luminance qui sont utilisées comme valeurs de masque.
- `match-source`

  - : Si la propriété {{cssxref("mask-image")}} est de type `<mask-source>`, les valeurs de luminance de l'image doivent être utilisée comme valeurs pour le masque.

    Si elle est de type {{cssxref("&lt;image&gt;")}}, ce seront les valeurs de transparence (canal alpha) qui seront utilisées.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Alpha

#### CSS

```css
#masked {
  width: 100px;
  height: 100px;
  background: blue linear-gradient(red, blue);
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-mode: alpha;
  mask-mode: alpha;
}
```

#### HTML

```html
<div id="masked"></div>
```

#### Résultat

{{EmbedLiveSample("Alpha", "110px", "130px")}}

### Luminance

#### CSS

```css
#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-mode: luminance;
  mask-mode: luminance;
}
```

#### HTML

```html
<div id="masked"></div>
```

#### Résultat

{{EmbedLiveSample("Luminance", "110px", "130px")}}

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS Masks", "#the-mask-mode", "mask-mode")}} | {{Spec2("CSS Masks")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.mask-mode")}}
