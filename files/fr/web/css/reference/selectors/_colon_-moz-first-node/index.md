---
title: :-moz-first-node
slug: Web/CSS/Reference/Selectors/:-moz-first-node
original_slug: Web/CSS/:-moz-first-node
---

{{Non-standard_header}}{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-first-node`** correspond à un élément si celui-ci est le premier nœud d'un autre élément. Cette pseudo-classe est différente de {{cssxref(":first-child")}} car elle ne cible pas le premier élément qui possède du texte (hors blancs).

> [!NOTE]
> Tout blanc qui serait au début d'un élément est ignoré pour la détermination de `:-moz-last-node`.

## Syntaxe

```css
:-moz-first-node {
  /* ... */
}
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

{{EmbedLiveSample("Exemples")}}

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":last-child")}}
