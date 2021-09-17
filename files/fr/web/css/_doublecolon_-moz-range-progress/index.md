---
title: '::-moz-range-progress'
slug: Web/CSS/::-moz-range-progress
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::-moz-range-progress
---
{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-moz-range-progress`** représente la portion de la piste d'un élément {{HTMLElement("input")}} de type `range`, qui correspond aux valeurs inférieures à la valeur sélectionnée par le curseur.

> **Note :** Si `::-moz-range-progress` est utilisé sur autre chose qu'un élément `<input type="range">`, il n'aura aucun effet.

## Syntaxe

{{csssyntax}}

## Exemples

### CSS

```css
input[type=range]::-moz-range-progress {
  background-color: green;
  height: 1em;
}
```

### HTML

```html
<input type="range" min="0" max="100" step="5" value="50"/>
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 50)}}

Une barre de progression mise en forme avec cette déclaration devrait ressembler à :

![](https://mdn.mozillademos.org/files/12041/Screen%20Shot%202015-12-04%20at%2020.14.48.png)

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("css.selectors.-moz-range-progress")}}

## Voir aussi

- Les pseudo-éléments de Gecko qui permettent de mettre en forme les autres parties des éléments {{HTMLElement("input")}} de type `range` :

  - {{cssxref("::-moz-range-thumb")}}
  - {{cssxref("::-moz-range-track")}}

- {{cssxref("::-ms-fill-upper")}} pris en charge par Internet Explorer et Ege
- [CSS-Tricks : Gérer des champs `input` de type `range` de façon compatible entre les navigateurs (en anglais)](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
- [QuirksMode : Mettre en forme les pistes et curseurs](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
