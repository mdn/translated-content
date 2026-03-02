---
title: ::-moz-color-swatch
slug: Web/CSS/Reference/Selectors/::-moz-color-swatch
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-color-swatch`** est [une extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui représente la couleur sélectionnée d'un élément {{HTMLElement("input")}} avec `type="color"`.

> [!NOTE]
> Utiliser `::-moz-color-swatch` sur tout autre élément qu'un `<input type="color">` n'aura aucun effet.

## Syntaxe

```css
::-moz-color-swatch {
  /* ... */
}
```

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

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-éléments semblables utilisés par les autres navigateurs&nbsp;:
  - {{CSSxRef("::-webkit-color-swatch")}} pris en charge par WebKit et Blink (utilisés par Safari, Chrome et Opera)
