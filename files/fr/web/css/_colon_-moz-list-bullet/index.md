---
title: '::-moz-list-bullet'
slug: Web/CSS/:-moz-list-bullet
tags:
  - CSS
  - Non-standard
  - Pseudo-element
  - Reference
translation_of: Web/CSS/:-moz-list-bullet
original_slug: Web/CSS/::-moz-list-bullet
---
{{Non-standard_header}}{{CSSRef}}

Le [pseudo-élément CSS](/fr/docs/Web/CSS/Pseudo-éléments) non-standard **`::-moz-list-bullet`** de Mozilla est utilisé pour appliquer un style aux puces des éléments d'une liste non ordonnée (autrement dit, pour un élément {{htmlelement("li")}}) contenu dans un élément {{htmlelement("ul")}}).

## Syntaxe

    li::-moz-list-bullet { propriétés de style }

## Exemples

### HTML

```html
<ul>
  <li>Numéro 1</li>
  <li>Numéro 2</li>
  <li>Numéro 3</li>
</ul>

<ul class="list">
  <li>Numéro 1</li>
  <li>Numéro 2</li>
  <li>Numéro 3</li>
</ul>
```

### CSS

```css
.list ::-moz-list-bullet {
  font-size: 36px;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '', '', '', 'Web/CSS/:-moz-list-bullet')}}

## Spécifications

Ce pseudo-élément est un pseudo-élément propriétaire lié à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{cssxref(":-moz-list-number")}}
- {{cssxref("::marker")}}
