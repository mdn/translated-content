---
title: "::-moz-color-swatch"
slug: Web/CSS/::-moz-color-swatch
---

{{CSSRef}}{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) **`::-moz-color-swatch`** est [un pseudo-élément spécifique à Mozilla](/fr/docs/Web/CSS/Extensions_Mozilla) qui représente la couleur sélectionnée d'un élément {{HTMLElement("input")}} avec `type="color"`.

> **Note :** Utiliser `::-moz-color-swatch` sur tout autre élément qu'un `<input type="color">` n'aura aucun effet.

## Syntaxe

{{csssyntax}}

## Exemples

### HTML

```html
<input type="color" value="#de2020" />
```

### CSS

```css
input[type="color"]::-moz-color-swatch {
  border-radius: 10px;
  border-style: none;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 50)}}

## Specifications

Ce pseudo-élément est spécifique à Gecko et ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments semblables utilisés par les autres navigateurs :

  - {{cssxref("::-webkit-color-swatch")}} pris en charge par WebKit et Blink (utilisés par Safari, Chrome et Opera)
