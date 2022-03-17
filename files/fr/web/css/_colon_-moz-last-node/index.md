---
title: ':-moz-last-node'
slug: Web/CSS/:-moz-last-node
tags:
  - CSS
  - Non-standard
  - Pseudo-classe
  - Reference
translation_of: Web/CSS/:-moz-last-node
---
{{Non-standard_header}}{{CSSRef}}

La pseudo-classe **`:-moz-last-node`** correspond à un élément si celui-ci est le dernier nœud d'un autre élément. Cette pseudo-classe est différente de {{cssxref(":last-child")}} car elle ne cible pas le dernier élément qui possède du texte (hors blancs).

> **Note :** Tout blanc qui serait à la fin d'un élément est ignoré pour la détermination de `:-moz-last-node`.

## Syntaxe

    span:-moz-last-node { propriétés de mise en forme }

## Exemples

### CSS

```css
span:-moz-last-node {
  background-color: lime;
}
```

### HTML

```html
<p>
  <span>:-moz-first-node</span>
  <span>:-moz-last-node</span>
</p>
<p>
  <span>Cet élément n'est pas ciblé car il est suivi par du texte.</span>
  Bip bop bip bop.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples", "220", "20")}}

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
