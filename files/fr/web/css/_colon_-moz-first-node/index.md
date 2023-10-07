---
title: ":-moz-first-node"
slug: Web/CSS/:-moz-first-node
---

{{Non-standard_header}}{{CSSRef}}

La pseudo-classe **`:-moz-first-node`** correspond à un élément si celui-ci est le premier nœud d'un autre élément. Cette pseudo-classe est différente de {{cssxref(":first-child")}} car elle ne cible pas le premier élément qui possède du texte (hors blancs).

> **Note :** Tout blanc qui serait au début d'un élément est ignoré pour la détermination de `:-moz-last-node`.

## Syntaxe

```
span:-moz-first-node { propriétés de mise en forme }
```

## Exemples

### CSS

```css
span:-moz-first-node {
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
  Bip bop bip bop
  <span>Cet élément n'est pas ciblé car il y a du texte avant.</span>
</p>
```

### Résultat

{{EmbedLiveSample("Exemples", "220", "20")}}

## Spécifications

Cette pseudo-classe est une pseudo-classe propriétaire liée à Gecko/Mozilla et ne fait partie d'aucune spécification.

## Voir aussi

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":last-child")}}
