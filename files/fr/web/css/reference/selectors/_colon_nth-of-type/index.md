---
title: :nth-of-type
slug: Web/CSS/Reference/Selectors/:nth-of-type
original_slug: Web/CSS/:nth-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:nth-of-type()`** permet de cibler les éléments selon leur position parmi les voisins du même type (les mêmes noms de balise).

{{InteractiveExample("Démonstration CSS&nbsp;: :nth-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:nth-of-type(even) {
  border: 2px solid orange;
}
```

```html interactive-example
<dl>
  <dt>Légumes&nbsp;:</dt>
  <dd>1. Tomates</dd>
  <dd>2. Concombres</dd>
  <dd>3. Champignons</dd>
  <dt>Fruits&nbsp;:</dt>
  <dd>4. Pommes</dd>
  <dd>5. Mangues</dd>
  <dd>6. Poires</dd>
  <dd>7. Oranges</dd>
</dl>
```

## Syntaxe

```css-nolint
:nth-of-type(<An+B> | even | odd) {
  /* ... */
}
```

### Paramètres

La pseudo-classe `nth-of-type` ne prend qu'un argument qui représente le motif de répétition pour les éléments ciblés.

Voir [`:nth-child`](/fr/docs/Web/CSS/Reference/Selectors/:nth-child) pour une explication plus détaillée de sa syntaxe.

## Exemples

### Exemple simple

#### HTML

```html
<div>
  <div>Cet élément n'est pas compté.</div>
  <p>1er paragraphe.</p>
  <p class="fancy">2e paragraphe.</p>
  <div>Cet élément n'est pas compté.</div>
  <p class="fancy">3e paragraphe.</p>
  <p>4e paragraphe.</p>
</div>
```

### CSS

```css
/* Paragraphes impairs */
p:nth-of-type(2n + 1) {
  color: red;
}

/* Paragraphes pairs */
p:nth-of-type(2n) {
  color: blue;
}

/* Premier paragraphe */
p:nth-of-type(1) {
  font-weight: bold;
}

/* Cela ciblera le 3e paragraphe, car on cible les éléments impairs (2n+1) et qui ont la classe fancy.
Le deuxième paragraphe a bien la classe fancy, mais n'est pas ciblé, car pair (et non :nth-of-type(2n+1)) */
p.fancy:nth-of-type(2n + 1) {
  text-decoration: underline;
}
```

### Résultat

{{EmbedLiveSample('Exemple_simple', 250, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`:nth-child`](/fr/docs/Web/CSS/Reference/Selectors/:nth-child)
- [`:nth-last-of-type`](/fr/docs/Web/CSS/Reference/Selectors/:nth-last-of-type)
