---
title: ::-moz-focus-inner
slug: Web/CSS/Reference/Selectors/::-moz-focus-inner
original_slug: Web/CSS/::-moz-focus-inner
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{non-standard_header}}{{deprecated_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-focus-inner`** est [une extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui représente le contour interne pour le focus sur l'élément {{HTMLElement("button")}} ainsi que les boutons {{HTMLElement("input/button","button")}}, {{HTMLElement("input/submit","submit")}}, {{HTMLElement("input/reset","reset")}} et {{HTMLElement("input/color","color")}} de l'élément {{HTMLElement("input")}}.

> [!NOTE]
> Utiliser `::-moz-focus-inner` sur un autre élément que les types de boutons pris en charge n'aura aucun effet.

## Syntaxe

```css
::-moz-focus-inner {
  /* ... */
}
```

## Exemple

### HTML

```html
<input type="submit" value="Input" /> <button type="submit">Bouton</button>
```

### CSS

```css
button::-moz-focus-inner,
input[type="color"]::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
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

Ce pseudo-élément ne fait partie d'aucun standard.

## Voir aussi

- [Les extensions CSS spécifiques à Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions)
- Propriétés CSS associées&nbsp;:
  - {{cssxref("-moz-user-focus")}}

- Les sélecteurs CSS associés&nbsp;:
  - {{cssxref(":focus")}}
  - {{cssxref(":focus-visible")}}
  - {{cssxref(":focus-within")}}
