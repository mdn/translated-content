---
title: '::-moz-list-number'
slug: Web/CSS/:-moz-list-number
translation_of: Web/CSS/:-moz-list-number
original_slug: Web/CSS/::-moz-list-number
---
{{Non-standard_header}}{{CSSRef}}

Le [pseudo-élément CSS](/fr/docs/Web/CSS/Pseudo-éléments) **`::-moz-list-number`** permet de personnaliser l'apparence des numéros des éléments de liste ({{HTMLElement("li")}}) au sein des listes numérotées ({{HTMLElement("ol")}}).

## Syntaxe

    li::-moz-list-number { propriétés de style }

## Exemples

### CSS

```css
li::-moz-list-number {
  font-style: italic;
  font-weight: bold;
}
```

### HTML

```html
<ol>
  <li>Premier élément</li>
  <li>Second élément</li>
  <li>Troisième élément</li>
</ol>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{cssxref(":-moz-list-bullet")}}
- {{cssxref("::marker")}}
