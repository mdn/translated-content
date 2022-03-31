---
title: offset
slug: Web/CSS/offset
tags:
  - CSS
  - Draft
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/offset
---
{{CSSRef}}{{Draft}}{{SeeCompatTable}}

La propriété **`offset`** est une propriété raccourcie pour les propriétés {{cssxref("offset-path")}}, {{cssxref("offset-position")}}, {{cssxref("offset-distance")}}, {{cssxref("offset-rotate")}} et {{cssxref("offset-anchor")}}. Elle permet d'animer un élément sur un tracé défini.

> **Note :** Dans les premières versions de la spécification, cette propriété était intitulée `motion`.

## Syntaxe

```css
/* Position de décalage */
offset: auto
offset: 10px 30px;
offset: none;

/* Chemin de décalage */
offset: ray(45deg closest-side);
offset: path(M 100 100 L 300 100 L 200 300 z);
offset: url(arc.svg);

/* Chemin de décalage avec une distance et/ou */
/* une rotation */
offset: url(circle.svg) 100px;
offset: url(circle.svg) 40%;
offset: url(circle.svg) 30deg;
offset: url(circle.svg) 50px 20deg;

/* Gestion d'une ancre de décalage */
offset: ray(45deg closest-side) / 40px 20px;
offset: url(arc.svg) 2cm / 0.5cm 3cm;
offset: url(arc.svg) 30deg / 50px 100px;
```

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div id="offsetElement"></div>
```

### CSS

```css
@keyframes move {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}

#offsetElement {
  width: 50px;
  height: 50px;
  background-color: blue;
  offset: path("M 100 100 L 300 100 L 200 300 z") auto;
  animation: move 3s linear infinite;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 350, 350)}}

## Spécifications

| Spécification                                                                            | État                                         | Commentaires         |
| ---------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('Motion Path Level 1', '#offset-shorthand', 'offset')}} | {{Spec2('Motion Path Level 1')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.offset")}}
