---
title: gap (grid-gap)
slug: Web/CSS/gap
---

{{CSSRef}}

La propriété **`gap`** est [une propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) pour [`row-gap`](/fr/docs/Web/CSS/row-gap) et [`column-gap`](/fr/docs/Web/CSS/column-gap) qui permet de définir les espaces (les [gouttières](/fr/docs/Glossary/Gutters)) entre les lignes et entre les colonnes d'une grille.

{{EmbedInteractiveExample("pages/css/gap.html")}}

## Syntaxe

```css
/* Une valeur de longueur */
/* Type <length>          */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* Une valeur proportionnelle */
/* Type <percentage>          */
gap: 16%;
gap: 100%;

/* Deux valeurs de longueur */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* Une ou deux valeurs proportionnelles */
/* Type <percentage>                    */
gap: 16% 100%;
gap: 21px 82%;

/* Valeurs calc() */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Valeurs globales */
gap: inherit;
gap: initial;
gap: revert;
gap: unset;
```

Cette propriété est définie avec une valeur `<'row-gap'>`, éventuellement suivi d'une valeur `<'column-gap'>`. Si `<'column-gap'>` n'est pas défini, la valeur utilisée sera la même que `<'row-gap'>`.

`<'row-gap'>` et `<'column-gap'>` sont des valeurs de type `<length>` ou `<percentage>`.

### Valeurs

- [`<length>`](/fr/docs/Web/CSS/length)
  - : La largeur de l'espace entre les pistes de grille.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : La largeur de l'espace entre les pistes de grille en fonction de la taille de l'élément englobant.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Disposition flexible

#### HTML

```html
<div id="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css
#flexbox {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  gap: 20px 5px;
}

#flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 1 1 auto;
  width: 100px;
  height: 50px;
}
```

#### Résultat

{{EmbedLiveSample("", "auto", "230px")}}

### Disposition en grille

#### HTML

```html
<div id="grid">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

```css hidden
#grid {
  grid-gap: 20px 5px;
}
```

```css
#grid {
  display: grid;
  height: 200px;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  gap: 20px 5px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("", "auto", "230px")}}

### Disposition multi-colonnes

#### HTML

```html
<p class="content-box">
  Voici un texte en multi-colonne sur des colonnes avec une gouttière de 40px
  créée grâce à la propriété CSS <code>gap</code>. Est-ce que c'est pas trop
  génial ?
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  gap: 40px;
}
```

#### Résultat

{{EmbedLiveSample("", "auto", "120px")}}

## Spécifications

{{Specifications("css.properties.gap.grid_context")}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés relatives aux gouttières&nbsp;: [`row-gap`](/fr/docs/Web/CSS/row-gap), [`column-gap`](/fr/docs/Web/CSS/column-gap)
- Guide sur les grilles&nbsp;: _[Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#les_gouttières)_
