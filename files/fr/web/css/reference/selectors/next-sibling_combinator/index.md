---
title: Combinateur de voisins directs
slug: Web/CSS/Reference/Selectors/Next-sibling_combinator
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le **combinateur de voisin direct** (`+`) sépare deux sélecteurs et ne fait correspondre le second élément que s'il suit _immédiatement_ le premier élément, et si les deux sont des enfants du même {{DOMxRef("element")}} parent.

```css
/* Ne cible que les paragraphes situés directement après une image */
img + p {
  font-style: bold;
}
```

## Syntaxe

```css-nolint
/* L'espace blanc autour du combinateur + est facultatif mais recommandé. */
former_element + target_element {
  /* propriétés de style */
}
```

## Exemples

### Utilisation simple

Cet exemple montre comment sélectionner le voisin direct suivant si ce voisin direct est d'un type spécifique.

#### CSS

Nous appliquons uniquement la mise en forme au `<li>` qui vient immédiatement après un `<li>` qui est le premier de son type&nbsp;:

```css
li:first-of-type + li {
  color: red;
  font-weight: bold;
}
```

#### HTML

```html
<ul>
  <li>Un</li>
  <li>Deux&nbsp;!</li>
  <li>Trois</li>
</ul>
```

#### Résultat

{{EmbedLiveSample("Utilisation simple", "100%", 100)}}

### Sélectionner le voisin précédent

Le combinateur de voisin direct peut être inclus dans le sélecteur fonctionnel {{CSSxRef(":has()")}} pour sélectionner le voisin précédent.

#### CSS

Nous appliquons uniquement la mise en forme au `<li>` qui possède un voisin direct suivant qui est un `<li>` et qui est le dernier de son type&nbsp;:

```css
li:has(+ li:last-of-type) {
  color: red;
  font-weight: bold;
}
```

#### HTML

```html
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois&nbsp;!</li>
  <li>Quatre</li>
</ul>
```

#### Résultat

{{EmbedLiveSample("Sélectionner le voisin précédent", "100%", 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les combinateur de voisins généraux](/fr/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator)
