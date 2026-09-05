---
title: Propriété CSS `flex-flow`
short-title: flex-flow
slug: Web/CSS/Reference/Properties/flex-flow
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

La propriété [raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS **`flex-flow`**) définit la direction d'un conteneur flexible ainsi que son comportement de retour à la ligne.

{{InteractiveExample("Démonstration CSS&nbsp;: flex-flow")}}

```css interactive-example-choice
flex-flow: row wrap;
```

```css interactive-example-choice
flex-flow: row-reverse nowrap;
```

```css interactive-example-choice
flex-flow: row wrap balance;
```

```css interactive-example-choice
flex-flow: column wrap-reverse;
```

```css interactive-example-choice
flex-flow: column wrap;
```

```css interactive-example-choice
flex-flow: column balance wrap;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Élément Un</div>
    <div>Élément Deux</div>
    <div>Élément Trois</div>
    <div>Élément Quatre</div>
    <div>Élément Cinq</div>
    <div>Élément Six</div>
    <div>Élément Sept</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  max-height: 300px;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 5px 10px;
}
```

## Propriétés constitutives

Cette propriété est une propriété abrégée pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("flex-direction")}}
- {{CSSxRef("flex-wrap")}}

## Syntaxe

```css
/* flex-flow: <'flex-direction'> */
flex-flow: row;
flex-flow: row-reverse;
flex-flow: column;
flex-flow: column-reverse;

/* flex-flow: <'flex-wrap'> */
flex-flow: nowrap;
flex-flow: wrap;
flex-flow: wrap-reverse;
flex-flow: wrap balance;
flex-flow: balance wrap-reverse;

/* flex-flow: <'flex-direction'> et <'flex-wrap'> */
flex-flow: row nowrap;
flex-flow: column wrap;
flex-flow: column-reverse wrap-reverse;
flex-flow: row-reverse balance wrap;

/* Valeurs globales */
flex-flow: inherit;
flex-flow: initial;
flex-flow: revert;
flex-flow: revert-layer;
flex-flow: unset;
```

### Valeurs

Voir {{CSSxRef("flex-direction")}} et {{CSSxRef("flex-wrap")}} pour plus d'informations sur les valeurs que peuvent prendre ces deux propriétés.

## Description

La propriété raccourcie `flex-flow` définit les propriétés {{CSSxRef("flex-direction")}} et {{CSSxRef("flex-wrap")}}, définissant la direction d'un conteneur flexible et son comportement de retour à la ligne. Elle peut également définir que les éléments flexibles soient équilibrés lorsque le retour à la ligne est autorisé.

Par exemple, `column-reverse wrap` définit l'axe principal dans la direction du bloc avec un **main-start** et un **main-end** inversés, les éléments flexibles étant autorisés à passer à la ligne, créant de nouvelles lignes si nécessaire.

```css
.container {
  flex-flow: column-reverse wrap;
}
```

Pour distribuer les éléments flexibles de manière uniforme sur chaque ligne flexible, vous pouvez inclure le mot-clé `flex-wrap` [`balance`](/fr/docs/Web/CSS/Reference/Properties/flex-wrap#balance) en plus de `wrap`&nbsp;:

```css
.container {
  flex-flow: column-reverse wrap balance;
}
```

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple montre l'utilisation de la propriété raccourcie `flex-flow` sur un conteneur flexible afin que les éléments soient disposés à l'envers sur plusieurs lignes.

#### HTML

Nous incluons une liste de mots par ordre alphabétique&nbsp;:

```html
<ul>
  <li>Alphabet</li>
  <li>Banane</li>
  <li>Crayons</li>
  <li>Dinosaures</li>
  <li>Éléphant</li>
  <li>Fondation</li>
  <li>Gribouillage</li>
  <li>Heureux</li>
  <li>Igloo</li>
  <li>Jouet</li>
  <li>Karting</li>
  <li>Librairie</li>
  <li>Magie</li>
  <li>Nez</li>
  <li>Orange</li>
  <li>Pétunia</li>
  <li>Qualité</li>
  <li>Racine</li>
  <li>Soleil</li>
  <li>Tricycle</li>
  <li>Univers</li>
  <li>Valentine</li>
  <li>Wagon</li>
  <li>Xylophone</li>
</ul>
```

#### CSS

Nous définissons le {{HTMLElement("ul")}} comme un conteneur flexible avec la propriété {{CSSxRef("display")}}, définissons une largeur ({{CSSxRef("width")}}), ajoutons une gouttière ({{CSSxRef("gap")}}) afin qu'il y ait un peu d'espace entre les éléments flexibles et les lignes flexibles, puis définissons le `flex-flow` pour envelopper les éléments dans l'ordre inverse. CSS supplémentaire a été masqué pour plus de concision.

```css
ul {
  display: flex;
  width: 31em;
  gap: 1em;

  flex-flow: row-reverse wrap-reverse;
}
```

```css hidden
ul {
  list-style: none;
  border: 1px solid;
  font-family: sans-serif;
}
li {
  font-size: 1.25rem;
  padding: 5px;
  border: 1px solid;
  background-color: lightpink;
}
li:nth-of-type(even) {
  background-color: lightgreen;
}
```

#### Résultat

{{EmbedLiveSample("Utilisation simple","",310)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les concepts de bases des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
