---
title: '-webkit-box-reflect'
slug: Web/CSS/-webkit-box-reflect
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-webkit-box-reflect
---
{{Non-standard_header}}{{CSSRef}}

La propriété **`-webkit-box-reflect`** peut être utilisée afin de créer un effet de réflexion d'un élément dans une direction donnée.

```css
/* Valeurs de directions */
-webkit-box-reflect: above;
-webkit-box-reflect: below;
-webkit-box-reflect: left;
-webkit-box-reflect: right;

/* Valeurs incluant un décalage */
-webkit-box-reflect: below 10px;

/* Valeur de masque */
-webkit-box-reflect: below 0 linear-gradient(transparent, white);

/* Valeurs globales */
-webkit-box-reflect: inherit;
-webkit-box-reflect: initial;
-webkit-box-reflect: unset;
```

> **Attention :** Cette fonctionnalité ne doit pas être utilisée sur le Web. Pour créer des effets de reflet sur le Web, on pourra utiliser la fonction CSS standard {{cssxref("element()", "element()")}}.

## Syntaxe

### Valeurs

- `above`_,_ `below`_,_ `right`_,_ `left`
  - : Des mots-clés qui indiquent la direction dans laquelle créer la réflexion (respectivement : au-dessus, en-dessous, à droite, à gauche).
- `<length>`
  - : La taille du reflet créé, cf. {{cssxref("&lt;length&gt;")}} sur les valeurs possibles.
- `<image>`
  - : Le masque à appliquer au reflet, cf. {{cssxref("&lt;image&gt;")}} sur les valeurs possibles.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

Cette propriété n'est pas en voie de standardisation et ne fera pas partie de CSS. Pour créer des reflets en CSS, on pourra utiliser la fonction standard {{cssxref("element()", "element()")}}.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-webkit-box-reflect")}}

## Voir aussi

- [La documentation Apple](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safaricssref/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW16)
- [La spécification WebKit](https://www.webkit.org/blog/182/css-reflections/)
- L'article de Lea Verou sur les réflexions CSS [en utilisant les fonctionnalités en voie de standardisation](https://lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/)
