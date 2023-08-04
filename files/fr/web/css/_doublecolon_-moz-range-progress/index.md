---
title: "::-moz-range-progress"
slug: Web/CSS/::-moz-range-progress
---

{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-moz-range-progress`** représente la portion de la piste d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) de type `range`, qui correspond aux valeurs inférieures à la valeur sélectionnée par le curseur.

> **Note :** Si `::-moz-range-progress` est utilisé sur autre chose qu'un élément `<input type="range">`, il n'aura aucun effet.

## Syntaxe

{{csssyntax}}

## Exemples

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50" />
```

### CSS

```css
input[type="range"]::-moz-range-progress {
  background-color: green;
  height: 1em;
}
```

### Résultat

{{EmbedLiveSample("", 300, 50)}}

Une barre de progression mise en forme avec cette déclaration devrait ressembler à&nbsp;:

![](screen_shot_2015-12-04_at_20.14.48.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments de Gecko qui permettent de mettre en forme les autres parties des éléments [`<input>`](/fr/docs/Web/HTML/Element/Input) de type `range`&nbsp;:

  - [`::-moz-range-thumb`](/fr/docs/Web/CSS/::-moz-range-thumb)
  - [`::-moz-range-track`](/fr/docs/Web/CSS/::-moz-range-track)

- [`::-ms-fill-upper`](/fr/docs/Web/CSS/::-ms-fill-upper) pris en charge par Internet Explorer
- [CSS-Tricks&nbsp;: Gérer des champs `input` de type `range` de façon compatible entre les navigateurs (en anglais)](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode&nbsp;: Mettre en forme les pistes et curseurs (en anglais)](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
