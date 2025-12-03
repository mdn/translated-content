---
title: :-moz-last-node
slug: Web/CSS/Reference/Selectors/:-moz-last-node
original_slug: Web/CSS/:-moz-last-node
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:-moz-last-node`** est une [extension de Mozilla](/fr/docs/Web/CSS/Reference/Mozilla_extensions) qui correspond à un élément si celui-ci est le dernier nœud d'un autre élément. Cette pseudo-classe est différente de {{cssxref(":last-child")}} car elle ne cible pas le dernier élément qui possède du texte (hors blancs).

> [!NOTE]
> Tout blanc qui serait à la fin d'un élément est ignoré pour la détermination de `:-moz-last-node`.

## Syntaxe

```css
:-moz-last-node {
  /* ... */
}
```

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

{{EmbedLiveSample("Exemples")}}

## Spécifications

Cette pseudo-classe ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
