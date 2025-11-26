---
title: :nth-last-of-type
slug: Web/CSS/Reference/Selectors/:nth-last-of-type
original_slug: Web/CSS/:nth-last-of-type
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La fonction de [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:nth-last-of-type`** permet de cibler les éléments selon leur position parmi les voisins qui sont du même type (les mêmes balises) en partant de la fin.

{{InteractiveExample("Démonstration CSS&nbsp;: :nth-last-of-type", "tabbed-shorter")}}

```css interactive-example
dt {
  font-weight: bold;
}

dd {
  margin: 3px;
}

dd:nth-last-of-type(3n) {
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
:nth-last-of-type(<An+B> | even | odd) {
  /* ... */
}
```

### Paramètres

La pseudo-classe `nth-last-of-type` prend un seul argument qui représente le motif de répétition des éléments correspondants, comptés à partir de la fin.

Voir [`:nth-last-child`](/fr/docs/Web/CSS/Reference/Selectors/:nth-last-child) pour une explication plus détaillée de sa syntaxe.

## Exemples

### HTML

```html
<div>
  <span>Ce span est le premier !</span>
  <span>Ce span ne l'est pas. :(</span>
  <em>Celui-ci est bizarre.</em>
  <span>Celui-ci l'est !</span>
  <strike>C'est un autre type</strike>
  <span>Malheureusement, celui-ci ne l'est pas.</span>
</div>
```

### CSS

```css
span:nth-last-of-type(2) {
  background-color: lime;
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`:nth-last-child`](/fr/docs/Web/CSS/Reference/Selectors/:nth-last-child)
- [`:nth-of-type`](/fr/docs/Web/CSS/Reference/Selectors/:nth-of-type)
