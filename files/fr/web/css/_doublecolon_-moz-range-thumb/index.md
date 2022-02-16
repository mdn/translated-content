---
title: '::-moz-range-thumb'
slug: Web/CSS/::-moz-range-thumb
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::-moz-range-thumb
---
{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-moz-range-thumb`** représente le curseur qui se déplace le long de la piste dans un élément {{HTMLElement("input")}} de type `range` et qui permet de modifier la valeur numérique associée.

> **Note :** Utiliser `::-moz-range-thumb` avec un autre élément que  `<input type="range">` n'aura aucun effet.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input[type=range]::-moz-range-thumb {
  background-color: green;
}
```

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50"/>
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 50)}}

Une barre de progression mise en forme avec ces règles devrait ressembler à :

![The thumb of the <input type=right> styled in green](https://mdn.mozillademos.org/files/12027/Screen%20Shot%202015-12-04%20at%2013.30.08.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("css.selectors.-moz-range-thumb")}}

## Voir aussi

- Les pseudo-éléments de Gecko qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("input")}} de type `range` :

  - {{cssxref("::-moz-range-track")}}
  - {{cssxref("::-moz-range-progress")}}

- Les pseudo-éléments utilisés par les autres navigateurs :

  - {{cssxref("::-webkit-slider-thumb")}} pour WebKit/Blink (Safari, Chrome et Opera).
  - {{cssxref("::-ms-thumb")}} pour Internet Explorer/Edge.

- [CSS-Tricks : Gérer des champs `input` de type `range` de façon compatible entre les navigateurs (en anglais)](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode : Mettre en forme les pistes et curseurs](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
