---
title: mask
slug: Web/CSS/mask
tags:
  - CSS
  - Propriété
  - Reference
  - SVG
translation_of: Web/CSS/mask
---
{{CSSRef}}

La propriété **`mask`** permet de masquer un élément partiellement ou complètement en utilisant un masque apposé sur l'image ou en rognant l'image aux positions données. Cette propriété est une propriété raccourcie pour les propriétés {{cssxref("mask-image")}}, {{cssxref("mask-mode")}}, {{cssxref("mask-repeat")}}, {{cssxref("mask-position")}}, {{cssxref("mask-clip")}}, {{cssxref("mask-origin")}}, {{cssxref("mask-size")}} et {{cssxref("mask-composite ")}}.

> **Note :** La propriété raccourcie réinitialise également {{cssxref("mask-border")}} avec sa valeur initiale. Il est donc recommandé d'utiliser la propriété raccourcie à travers les feuilles de style plutôt que les propriétés raccourcies (sauf en cas d'héritage complexe).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
mask: none;

/* Valeurs d'image */
/* Type <image>    */
mask: url(mask.png);                       /* Image matricielle utilisée comme masque */
mask: url(masks.svg#star);                 /* Élément d'un SVG utilisé comme masque */

/* Valeurs combinées */
mask: url(masks.svg#star) luminance;       /* Élément d'un SVG utilisé comme masque de luminance */
mask: url(masks.svg#star) 40px 20px;       /* Élément d'un SVG utilisé comme masque positioné à 40px du haut et 20px de la gauche */
mask: url(masks.svg#star) 0 0/50px 50px;   /* Élément d'un SVG utilisé comme masque avec une hauteur et largeur de 50px */
mask: url(masks.svg#star) repeat-x;        /* Élément d'un SVG utilisé comme masque répété horizontalement */
mask: url(masks.svg#star) stroke-box;      /* Élément d'un SVG utilisé comme masque étendu à la boîte contenu dans le contour */
mask: url(masks.svg#star) exclude;         /* Élément d'un SVG utilisé comme masque et combiné avec l'arrière-plan pour les parties qui ne se chevauchent pas */

/* Valeurs globales */
mask: inherit;
mask: initial;
mask: unset;
```

### Valeurs

- `<mask-reference>`
  - : Cette valeur permet de définir l'image source pour le masque. Voir {{cssxref("mask-image")}}.
- `<masking-mode>`
  - : Cette valeur définit le mode du masque. Voir {{cssxref("mask-mode")}}.
- `<position>`
  - : Cette valeur définit la position de l'image du masque. Voir {{cssxref("mask-position")}}.
- `<bg-size>`
  - : Cette valeur définit la taille de l'image du masque. Voir {{cssxref("mask-size")}}.
- `<repeat-style>`
  - : Cette valeur définit le mode de répétition de l'image du masque. Voir {{cssxref("mask-repeat")}}.
- `<geometry-box>`
  - : Si une seule valeur `<geometry-box>` est fournie, elle définira les valeurs de {{cssxref("mask-origin")}} et {{cssxref("mask-clip")}}. Si deux valeurs sont fournies, la première sera utilisée pour définir {{cssxref("mask-origin")}} et la deuxième pour définir {{cssxref("mask-clip")}}.
- `<geometry-box> | no-clip`
  - : Cette valeur définit la zone qui est impactée par l'image du masque. Voir {{cssxref("mask-clip")}}.
- `<compositing-operator>`
  - : Cette valeur définit l'opération de composition qui est utilisée par rapport à la couche de masque actuelle. Voir {{cssxref("mask-composite")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="exemple">Il y avait une table servie sous un arbre devant
 la maison, et le Lièvre y prenait le thé avec le Chapelier. Un Loir
 profondément endormi était assis entre les deux autres qui s’en
 servaient comme d’un coussin, le coude appuyé sur lui et causant
 par-dessus sa tête.</p>
```

### CSS

```css
.exemple{
  mask:url(firefox.png) luminance 20%;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

| Spécification                                                                    | État                         | Commentaires                                                                                                                                                                   |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName("CSS Masks", "#the-mask", 'mask')}}                     | {{Spec2("CSS Masks")}} | Extension aux éléments HTML. La syntaxe est étendue et la propriété devient une propriété raccourcie pour les nouvelles propriétés `mask-*` définies avec cette spécification. |
| {{SpecName('SVG1.1', 'masking.html#MaskProperty', 'mask')}} | {{Spec2('SVG1.1')}}     | Définition initiale.                                                                                                                                                           |

## Compatibilité des navigateurs

{{Compat("css.properties.mask")}}

## Voir aussi

- {{cssxref("clip-path")}}, {{cssxref("filter")}}
- [Les formes CSS : "clipping" et "masking" – comment les utiliser (en anglais)](https://hacks.mozilla.org/2017/06/css-shapes-clipping-and-masking/)
- [Appliquer des effets SVG à du contenu HTML](/fr/docs/Applying_SVG_effects_to_HTML_content)
- [SVG](/fr/docs/Web/SVG)
