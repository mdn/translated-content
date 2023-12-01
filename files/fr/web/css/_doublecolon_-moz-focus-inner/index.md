---
title: "::-moz-focus-inner"
slug: Web/CSS/::-moz-focus-inner
l10n:
  sourceCommit: 257486f64b2472dda4996a4ea7b6b5305e46f863
---

{{CSSRef}}{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-focus-inner`** est [une extension spécifique à Mozilla](/fr/docs/Web/CSS/Mozilla_Extensions) qui représente le contour interne pour le focus sur les éléments [`<button>`](/fr/docs/Web/HTML/Element/Button), [`<input type="button">`](/fr/docs/Web/HTML/Element/Input/button), [`<input type="submit">`](/fr/docs/Web/HTML/Element/Input/submit), [`<input type="reset">`](/fr/docs/Web/HTML/Element/Input/reset), et [`<input type="color">`](/fr/docs/Web/HTML/Element/Input/color).

> **Note :** Utiliser `::-moz-focus-inner` sur un autre élément que les types de boutons pris en charge n'aura aucun effet.

## Syntaxe

```
::-moz-focus-inner
```

## Exemple

### HTML

```html
<input type="submit" value="Input" /> <button type="submit">Bouton</button>
```

### CSS

```css
button::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner {
  padding-block-start: 0px;
  padding-inline-end: 2px;
  padding-block-end: 0px;
  padding-inline-start: 2px;
  border: 2px dotted red;
}
```

### Résultat

{{EmbedLiveSample("", 300, 50)}}

## Spécifications

Il s'agit d'un pseudo-élément spécifique, qui n'est spécifié dans aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les extensions CSS spécifiques à Mozilla](/fr/docs/Web/CSS/Mozilla_Extensions)
- [`-moz-user-focus`](/fr/docs/Web/CSS/-moz-user-focus)
- Les sélecteurs CSS associés
  - [`:-moz-focusring`](/fr/docs/Web/CSS/:-moz-focusring)
  - [`:focus`](/fr/docs/Web/CSS/:focus)
  - [`:focus-visible`](/fr/docs/Web/CSS/:focus-visible)
  - [`:focus-within`](/fr/docs/Web/CSS/:focus-within)
