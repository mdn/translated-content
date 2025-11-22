---
title: -webkit-box-reflect
slug: Web/CSS/Reference/Properties/-webkit-box-reflect
original_slug: Web/CSS/-webkit-box-reflect
---

{{Non-standard_Header}}

La propriété **`-webkit-box-reflect`** peut être utilisée afin de créer un effet de réflexion d'un élément dans une direction donnée.

## Syntaxe

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
-webkit-border-before: revert;
-webkit-border-before: revert-layer;
-webkit-box-reflect: unset;
```

### Valeurs

- `above`_,_ `below`_,_ `right`_,_ `left`
  - : Des mots-clés qui indiquent la direction dans laquelle créer la réflexion (respectivement : au-dessus, en-dessous, à droite, à gauche).
- `<length>`
  - : La taille du reflet créé, cf. {{cssxref("&lt;length&gt;")}} sur les valeurs possibles.
- `<image>`
  - : Le masque à appliquer au reflet, cf. {{cssxref("&lt;image&gt;")}} sur les valeurs possibles.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-box-reflect = [ above | below | right | left ]? <length>? <image>?`)}}

## Spécifications

Cette propriété ne fait partie d'aucun standard, mais on pourra utiliser la fonction CSS standardisée {{cssxref("element()", "element()")}}.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La documentation Apple](https://developer.apple.com/library/safari/documentation/appleapplications/reference/safaricssref/Articles/StandardCSSProperties.html#//apple_ref/doc/uid/TP30001266-SW16)
- [La spécification WebKit](https://www.webkit.org/blog/182/css-reflections/)
- L'article de Lea Verou sur les réflexions CSS [en utilisant les fonctionnalités en voie de standardisation](https://lea.verou.me/2011/06/css-reflections-for-firefox-with-moz-element-and-svg-masks/)
