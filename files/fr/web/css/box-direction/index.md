---
title: box-direction
slug: Web/CSS/box-direction
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/box-direction
---
{{CSSRef}}{{Non-standard_header}}

> **Attention :** Cette propriété fait partie de la première version du standard pour les boîtes flexibles (_flexbox_) et sera remplacée dans une prochaine version. La propriété `-moz-box-direction` ne peut être utilisée que dans des composants XUL tandis que la propriété `box-direction` a été remplacée par la propriété standard `flex-direction`. Voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) pour plus d'informations sur ce qui doit être utilisé à la place.

La propriété **`box-direction`** définit si une boîte doit organiser son contenu dans la direction normale (de haut en bas ou de gauche à droite). Pour plus de détails sur les propriétés des éléments flexibles, voir la page [Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox).

```css
/* Valeurs avec un mot-clé */
box-direction: normal;
box-direction: reverse;

/* Valeurs globales */
box-direction: inherit;
box-direction: initial;
box-direction: unset;
```

## Syntaxe

### Valeurs

- `normal`
  - : La boîte répartit son contenu à partir du début (le côté gauche si la boîte est orientée horizontalement ou le côté haut si la boîte est orientée verticalement).
- `reverse`
  - : La boîte répartit son contenu à partir de la fin (le côté droit si la boîte est orientée horizontalement ou le côté bas si la boîte est orienté verticalement).

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
.exemple {
  /* du bas vers le haut */
  -moz-box-direction: reverse;      /* Mozilla */
  -webkit-box-direction: reverse;   /* WebKit */
  box-direction: reverse;
}
```

## Notes

Si la direction de l'élément est définie grâce à l'attribut `dir`, la déclaration est ignorée.

## Spécifications

- [Brouillon de travail pour le module des boîtes flexibles (W3C)](https://www.w3.org/TR/css3-flexbox/) {{note("L'état de cette spécification ne reflète pas l'implémentation de Mozilla ou Webkit.")}}
- [Ancienne version de la spécification](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/) {{note("Les implémentations de WebKit et Mozilla se basent sur cette version de la spécification")}}

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.box-direction")}}

## Voir aussi

- {{cssxref("box-orient")}},
- {{cssxref("box-pack")}},
- {{cssxref("box-align")}},
- {{cssxref("flex-direction")}}.
