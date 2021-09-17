---
title: '::-moz-range-track'
slug: Web/CSS/::-moz-range-track
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::-moz-range-track
---
{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-moz-range-track`** est un pseudo-élément spsécifique à Mozilla et représente la piste d'un élément {{HTMLElement("input")}} de type `range`.

> **Note :** `::-moz-range-track` n'aura aucun effet s'il est utilisé sur autre chose qu'un élément `<input type="range">`.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input[type=range]::-moz-range-track {
  background-color: green;
}
```

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50"/>
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 50)}}

Une barre de progression mise en forme de cette façon devrait ressembler à :

![A range with the track green.](https://mdn.mozillademos.org/files/11999/Screen%20Shot%202015-12-04%20at%2010.14.34.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("css.selectors.-moz-range-track")}}

## Voir aussi

- Les pseudo-éléments de Gecko qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("input")}} de type `range` :

  - {{cssxref("::-moz-range-thumb")}} qui représente le curseur qui se déplace le long de la piste.
  - {{cssxref("::-moz-range-progress")}} qui représente la partie inférieure de la piste (ce qui est déjà « couvert »).

- Les pseudo-éléments utilisés par les autres navigateurs :

  - {{cssxref("::-webkit-slider-runnable-track")}} pour WebKit/Blink (Safari, Chrome et Opera).
  - {{cssxref("::-ms-track")}} pour Internet Explorer/Edge.

- [CSS-Tricks : Gérer des champs `input` de type `range` de façon compatible entre les navigateurs (en anglais)](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
