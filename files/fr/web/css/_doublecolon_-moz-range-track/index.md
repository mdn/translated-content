---
title: "::-moz-range-track"
slug: Web/CSS/::-moz-range-track
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-moz-range-track`** est un pseudo-élément spécifique à Mozilla et représente la piste d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) de type `range`.

> **Note :** `::-moz-range-track` n'aura aucun effet s'il est utilisé sur autre chose qu'un élément `<input type="range">`.

## Syntaxe

{{csssyntax}}

## Exemples

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-track {
  background-color: green;
}
```

### Résultat

{{EmbedLiveSample("", 300, 50)}}

Une barre de progression mise en forme de cette façon devrait ressembler à&nbsp;:

![Un intervalle avec une piste verte.](screen_shot_2015-12-04_at_10.14.34.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments de Gecko qui permettent de mettre en forme les autres parties des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) de type `range`&nbsp;:

  - [`::-moz-range-thumb`](/fr/docs/Web/CSS/::-moz-range-thumb) qui représente le curseur qui se déplace le long de la piste.
  - [`::-moz-range-progress`](/fr/docs/Web/CSS/::-moz-range-progress) qui représente la partie inférieure de la piste (ce qui est déjà «&nbsp;couvert&nbsp;»).

- Les pseudo-éléments utilisés par les autres navigateurs&nbsp;:

  - [`::-webkit-slider-runnable-track`](/fr/docs/Web/CSS/::-webkit-slider-runnable-track) pour WebKit/Blink (Safari, Chrome et Opera).
  - [`::-ms-track`](/fr/docs/Web/CSS/::-ms-track) pour Internet Explorer/Edge.

- [CSS-Tricks&nbsp;: Gérer des champs `input` de type `range` de façon compatible entre les navigateurs (en anglais)](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
