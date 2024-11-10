---
title: Combinateur de voisins directs
slug: Web/CSS/Next-sibling_combinator
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{CSSRef}}

Le **combinateur de voisin direct** (`+`) sépare deux sélecteurs et ne fait correspondre le second élément que s'il suit _immédiatement_ le premier élément, et si les deux sont des enfants du même élément parent.

```css
/* Ne cible que les paragraphes situés directement après une image */
img + p {
  font-style: bold;
}
```

## Syntaxe

```css-nolint
/* L'espace blanc autour du combinateur + est facultatif mais recommandé. */
premier_element + second_element { propriétés de style }
```

## Exemples

### CSS

```css
li:first-of-type + li {
  color: red;
}
```

### HTML

```html
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
</ul>
```

### Résultat

{{EmbedLiveSample('', "100%", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les combinateur de voisins généraux](/fr/docs/Web/CSS/Subsequent-sibling_combinator)
