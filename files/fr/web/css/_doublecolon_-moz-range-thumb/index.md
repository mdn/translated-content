---
title: "::-moz-range-thumb"
slug: Web/CSS/::-moz-range-thumb
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-moz-range-thumb`** représente le curseur qui se déplace le long de la piste dans un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) de type `range` et qui permet de modifier la valeur numérique associée.

> **Note :** Utiliser `::-moz-range-thumb` avec un autre élément que `<input type="range">` n'aura aucun effet.

## Syntaxe

{{csssyntax}}

## Exemples

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-thumb {
  background-color: green;
}
```

### Résultat

{{EmbedLiveSample("", 300, 50)}}

Une barre de progression mise en forme avec ces règles devrait ressembler à&nbsp;:

![Un élément 'input type=range' avec un curseur vert](screen_shot_2015-12-04_at_13.30.08.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments de Gecko qui permettent de mettre en forme les autres parties des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) de type `range`&nbsp;:

  - [`::-moz-range-track`](/fr/docs/Web/CSS/::-moz-range-track)
  - [`::-moz-range-progress`](/fr/docs/Web/CSS/::-moz-range-progress)

- Les pseudo-éléments utilisés par les autres navigateurs&nbsp;:

  - [`::-webkit-slider-thumb`](/fr/docs/Web/CSS/::-webkit-slider-thumb) pour WebKit/Blink (Safari, Chrome et Opera).
  - [`::-ms-thumb`](/fr/docs/Web/CSS/::-ms-thumb) pour Internet Explorer/Edge.

- [CSS-Tricks&nbsp;: Gérer des champs `input` de type `range` de façon compatible entre les navigateurs (en anglais)](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode&nbsp;: Mettre en forme les pistes et curseurs (en anglais)](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
