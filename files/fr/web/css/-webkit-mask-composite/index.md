---
title: '-webkit-mask-composite'
slug: Web/CSS/-webkit-mask-composite
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-mask-composite
---
{{CSSRef}}{{Non-standard_header}}

La propriété **`-webkit-mask-composite`** définit la façon dont plusieurs images de masque sont appliquées pour un même élément. Les images de masques sont composées dans l'ordre inverse dans lequel elles sont listées dans la propriété {{cssxref("-webkit-mask-image")}}.

```css
/* Valeurs avec un mot-clé */
-webkit-mask-composite: clear;
-webkit-mask-composite: copy;
-webkit-mask-composite: source-over;
-webkit-mask-composite: source-in;
-webkit-mask-composite: source-out;
-webkit-mask-composite: source-atop;
-webkit-mask-composite: destination-over;
-webkit-mask-composite: destination-in;
-webkit-mask-composite: destination-out;
-webkit-mask-composite: destination-atop;
-webkit-mask-composite: xor;

/* Valeurs globales */
-webkit-mask-composite: inherit;
-webkit-mask-composite: initial;
-webkit-mask-composite: unset;
```

> **Note :** La propriété {{cssxref("mask-composite")}} couvre certains aspects de cette propriété non-standard avec des mots-clés différents.

## Syntaxe

### Valeurs

- `clear`
  - : Les pixels qui se recouvrent entre l'image source et l'image de destination sont enlevés.
- `copy`
  - : Les pixels du masque source remplacent ceux du masque de destination.
- `source-over`
  - : Le contenu du masque source est appliqué sur l'image du masque de destination.
- `source-in`
  - : Les pixels qui se recouvrent sont remplacés par les pixels de l'image du masque source. Tous les autres pixels sont enlevés.
- `source-out`
  - : Les pixels qui se recouvrent sont enlevés et on prend les autres pixels de l'image de masque source.
- `source-atop`
  - : Les pixels de l'image de masque de destination sont utilisés. Les pixels de l'image de masque source sont utilisés uniquement s'ils ne recouvrent pas une portion de l'image de destination. Cela fait que l'image source n'a aucun effet.
- `destination-over`
  - : L'image de masque de destination est affichée par dessus l'image de masque source.
- `destination-in`
  - : Les pixels qui se recouvrent sont remplacés par ceux de l'image de destination. Tous les autres pixels sont enlevés.
- `destination-out`
  - : Les pixels qui se recouvrent sont enlevés et on prend les autres pixels de l'image de destination.
- `destination-atop`
  - : Les pixels de l'image source sont affichés. Les pixels de l'image de destination sont uniquement utilisés s'ils ne chevauchent pas des portions non-transparentes de l'image source. Cela fait que l'image de destination n'a aucun effet.
- `xor`
  - : Les pixels qui se chevauchent deviennent complètement transparents s'ils étaient complètement opaques.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
.exemple {
  -webkit-mask-image: url(mask1.png), url('mask2.png');
  -webkit-mask-composite: xor, source-over;
}
```

## Spécifications

Cette propriété est une propriété propriétaire liée à WebKit/Blink et ne fait partie d'aucune spécification.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-mask-composite")}}

## Voir aussi

- {{cssxref("mask-composite")}}
