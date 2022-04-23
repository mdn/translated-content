---
title: '::-webkit-inner-spin-button'
slug: Web/CSS/::-webkit-inner-spin-button
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/::-webkit-inner-spin-button
---
{{CSSRef}}{{Non-standard_header}}

Le pseudo-élément **`::-webkit-inner-spin-button`** permet de mettre en forme la partie intérieure de la roulette qui permet de choisir la valeur d'un élément {{HTMLElement("input")}} de type `number`.

## Exemples

### CSS

```css
input[type=number]::-webkit-inner-spin-button {
  cursor: pointer;
}
```

### HTML

```html
<input type="number">
```

### Résultat

{{EmbedLiveSample('Exemples', 200, 30)}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à WebKit/Blink et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat("css.selectors.-webkit-inner-spin-button")}}

## Voir aussi

- {{cssxref("::-webkit-outer-spin-button")}}
- {{cssxref("::-webkit-textfield-decoration-container")}}
- [Mettre en forme les contrôles de formulaires  – WebKit (en anglais)](https://trac.webkit.org/wiki/Styling%20Form%20Controls#inputelement)
