---
title: ::-moz-list-number
slug: Web/CSS/Reference/Selectors/::-moz-list-number
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_Header}}{{SeeCompatTable}}

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

- Le pseudo-élément {{CSSxRef("::-moz-list-bullet")}}
- Le pseudo-élément {{CSSxRef("::marker")}}
