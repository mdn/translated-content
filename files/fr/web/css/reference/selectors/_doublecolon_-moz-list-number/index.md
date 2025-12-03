---
title: ::-moz-list-number
slug: Web/CSS/Reference/Selectors/::-moz-list-number
original_slug: Web/CSS/::-moz-list-number
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-moz-list-number`** est [une extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui représente le marqueur (généralement un nombre) d'un élément de liste ({{HTMLElement("li")}}) dans une liste ordonnée ({{HTMLElement("ol")}}).

## Syntaxe

```css
li::-moz-list-number {
  /* ... */
}
```

## Exemples

### HTML

```html
<ol>
  <li>Premier élément</li>
  <li>Second élément</li>
  <li>Troisième élément</li>
</ol>
```

### CSS

```css
li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{cssxref("::-moz-list-bullet")}}
- {{cssxref("::marker")}}
