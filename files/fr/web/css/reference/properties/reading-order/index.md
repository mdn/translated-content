---
title: reading-order
slug: Web/CSS/Reference/Properties/reading-order
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`reading-order`** permet de modifier l'ordre dans lequel un enfant d'un [conteneur de flux de lecture](/fr/docs/Glossary/Reading_order#modifier_lordre_de_lecture_en_css) est lu par rapport à ses éléments frères et sœurs.

## Syntaxe

```css
/* Valeurs de type <integer> */
reading-order: 1;
reading-order: -1;

/* Valeurs globales */
reading-order: inherit;
reading-order: initial;
reading-order: revert;
reading-order: revert-layer;
reading-order: unset;
```

### Valeur

- {{CSSxRef("&lt;integer&gt;")}}
  - : Représente le groupe ordinal auquel appartient l'élément.

## Description

Lorsque le conteneur parent [bloc](/fr/docs/Glossary/Block/CSS), [flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout) ou [de grille](/fr/docs/Web/CSS/Guides/Grid_layout) d'un élément possède une propriété {{CSSxRef("reading-flow")}} définie sur une valeur autre que `normal`, la propriété `reading-order` permet de définir la position de l'élément dans le [flux de lecture](/fr/docs/Glossary/Reading_order#reading_flow) par rapport à ses éléments du même niveau.

Pour la lecture et la navigation, les éléments à l'intérieur d'un conteneur bloc, flexible ou de grille sont triés par valeur croissante de `reading-order`. Si plusieurs éléments du même niveau ont la même valeur de `reading-order`, ces éléments sont triés selon le `reading-flow` du conteneur. Les éléments du même niveau qui n'ont pas de valeur explicite de `reading-order` reçoivent la valeur par défaut `0`, ce qui place par défaut tous les enfants d'un conteneur de flux de lecture dans le même groupe ordinal.

Les éléments du même niveau sont ordonnés du groupe ordinal ayant le plus petit numéro vers le plus grand. Ainsi, pour qu'un élément soit lu après les autres éléments du même niveau, vous pouvez lui attribuer une valeur de `reading-order` de `1` ou plus. Pour qu'un élément soit lu avant les autres éléments du même niveau, vous pouvez lui attribuer une valeur de `reading-order` de `-1` ou moins.

La propriété `reading-order` définit l'ordre de lecture et de tabulation, mais n'a aucun effet sur l'ordre visuel.

### Interaction avec `tabindex`

Si un ensemble d'enfants d'un conteneur de flux de lecture qui ne sont normalement pas sélectionnables deviennent sélectionnables grâce à l'attribut [`tabindex="0"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex), leur ordre de lecture sera modifié comme attendu par les propriétés `reading-flow` et `reading-order`, de la même manière que pour les éléments interactifs tels que {{HTMLElement("a")}} ou {{HTMLElement("button")}}.

Cependant, toute tentative de modifier l'ordre de tabulation du contenu d'un conteneur de flux de lecture à l'aide de valeurs `tabindex` positives sera ignorée — remplacée par les effets de `reading-flow` et `reading-order`. Vous ne devriez généralement pas utiliser ces valeurs&nbsp;; voir [N'utilisez pas de tabindex supérieur à 0 <sup>(angl.)</sup>](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html). Les propriétés `reading-flow` et `reading-order` offrent une bien meilleure façon de modifier l'ordre de tabulation si nécessaire.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ordre des lignes de la grille

Cet exemple montre comment utiliser `reading-order` pour contrôler la position des éléments individuels d'une grille dans l'ordre de lecture d'un conteneur de grille. Un élément de la grille possède une valeur de `reading-order` inférieure à la valeur par défaut `0`, il sera donc lu avant les autres éléments du même niveau. Un autre possède une valeur de `reading-order` supérieure, il sera donc lu après les autres, quel que soit l'ordre source ou d'affichage.

#### HTML

Dans notre balisage, nous avons six éléments HTML {{HTMLElement("a")}} contenus dans un {{HTMLElement("div")}} englobant.

```html
<div class="wrapper">
  <a href="#">Élément 1</a>
  <a class="bottom" href="#">Élément 2</a>
  <a href="#">Élément 3</a>
  <a class="top" href="#">Élément 4</a>
  <a href="#">Élément 5</a>
  <a href="#">Élément 6</a>
</div>
```

#### CSS

Sur le `<div>`, nous définissons la propriété {{CSSxRef("grid-auto-flow")}} à `dense`, donc les éléments peuvent s'afficher hors de l'ordre source. La propriété `reading-order` sur l'élément `<a>` avec une classe `top` est définie à `-1`, donc «&nbsp;Élément 4&nbsp;» sera le premier élément dans le flux de lecture. La propriété `reading-order` sur l'élément `<a>` avec une classe `bottom` est définie à `21`, donc «&nbsp;Élément 2&nbsp;» sera le dernier élément dans l'ordre de lecture. Les éléments restants seront visités entre les deux, dans l'ordre des lignes de la grille, car la propriété {{CSSxRef("reading-flow")}} de l'élément `<div>` est définie à {{CSSxRef("grid-row", "grid-rows")}}.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-auto-flow: dense;
  reading-flow: grid-rows;
}

.top {
  reading-order: -1;
}

.bottom {
  reading-order: 21;
}
```

#### Résultat

La démonstration ci-dessus s'affiche ainsi&nbsp;:

{{EmbedLiveSample("Ordre des lignes de la grille", "100%", 100)}}

Essayez de naviguer avec la touche <kbd>Tab</kbd> parmi les liens. Notez que «&nbsp;Élément 4&nbsp;» est sélectionné en premier et «&nbsp;Élément 2&nbsp;» en dernier grâce à leurs valeurs modifiées de `reading-order`. Entre les deux, les éléments sont sélectionnés dans l'ordre des lignes de la grille.

### Surcharge de l'ordre de lecture source

Dans cet exemple, les éléments impairs ont une valeur de `reading-order` plus basse, ils seront donc lus avant les autres dans le groupe, quel que soit l'ordre source ou d'affichage.

#### HTML

Dans notre balisage, nous avons cinq éléments `<a>` contenus dans un {{HTMLElement("div")}} englobant.

```html
<div class="wrapper">
  <a href="#">Élément 1</a>
  <a href="#">Élément 2</a>
  <a href="#">Élément 3</a>
  <a href="#">Élément 4</a>
  <a href="#">Élément 5</a>
</div>
```

#### CSS

La propriété `reading-flow` de l'élément `<div>` est définie à `source-order`, ce qui permet à `reading-order` de passer outre l'ordre de lecture source par défaut. Les éléments `<a>` impairs ont une valeur de `reading-order` de `-1`, ils sont donc lus avant les éléments pairs.

```css
.wrapper {
  reading-flow: source-order;
}

.wrapper > a {
  display: block;
}

.wrapper a:nth-child(odd) {
  reading-order: -1;
}
```

#### Résultat

La démonstration ci-dessus s'affiche ainsi&nbsp;:

{{EmbedLiveSample("Surcharge de l'ordre de lecture source", "100%", 100)}}

Essayez de naviguer avec la touche <kbd>Tab</kbd> parmi les liens, et notez que «&nbsp;Élément 1&nbsp;», «&nbsp;Élément 3&nbsp;» et «&nbsp;Élément 5&nbsp;» sont sélectionnés en premier grâce à leur valeur modifiée de `reading-order`. Ensuite, les éléments sont sélectionnés dans l'ordre source.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("reading-flow")}}
- [Exemples de `reading-flow` CSS <sup>(angl.)</sup>](https://chrome.dev/reading-flow-examples/) sur chrome.dev
