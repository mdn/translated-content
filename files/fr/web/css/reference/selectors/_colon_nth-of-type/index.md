---
title: Pseudo-classe CSS `:nth-of-type()`
short-title: :nth-of-type()
slug: Web/CSS/Reference/Selectors/:nth-of-type
l10n:
  sourceCommit: e620c4f06bca1cbecc4412084e43ddc12e88fe56
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:nth-of-type()`** permet de cibler les éléments selon leur position parmi les voisins du même type (les mêmes noms de balise).

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

Voir {{CSSxRef(":nth-child")}} pour une explication plus détaillée de sa syntaxe.

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

/* Cela cible le 3e paragraphe, car on cible les éléments impairs (2n+1) et qui ont la classe fancy.
Le deuxième paragraphe a bien la classe fancy, mais n'est pas ciblé, car pair (et non :nth-of-type(2n+1)) */
p.fancy:nth-of-type(2n + 1) {
  text-decoration: underline;
}
```

### Résultat

{{EmbedLiveSample('Exemple_simple', 250, 250)}}

> [!NOTE]
> Il n'existe aucun moyen de sélectionner «&nbsp;la n-ième occurrence d'une classe&nbsp;» en utilisant ce sélecteur. Le sélecteur `:nth-of-type` ne regarde que le type lors de la création de la liste des correspondances. Vous pouvez cependant utiliser la syntaxe `of` du sélecteur [`:nth-child`](/fr/docs/Web/CSS/Reference/Selectors/:nth-child#la_syntaxe_of_selector) pour obtenir un comportement «&nbsp;la n-ième occurrence d'une classe&nbsp;». Vous pouvez également appliquer du CSS à un élément en fonction de sa position `:nth-of-type` **et** d'une classe, comme montré dans l'exemple précédent.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les pseudo-classes {{CSSxRef(":nth-child")}}, {{CSSxRef(":nth-last-of-type")}}
