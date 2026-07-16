---
title: Propriété CSS `column-gap`
short-title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
l10n:
  sourceCommit: 53745a2089268ce62bf79695d7d347bcbd0abe57
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-gap`** définit la taille de l'espace ({{Glossary("Gutters", "Gouttières")}}) entre les colonnes d'un élément dans les dispositions multi-colonnes, flexibles et en grille.

{{InteractiveExample("Démonstration CSS&nbsp;: column-gap")}}

```css interactive-example-choice
column-gap: 0;
```

```css interactive-example-choice
column-gap: 10%;
```

```css interactive-example-choice
column-gap: 1em;
```

```css interactive-example-choice
column-gap: 20px;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un</div>
      <div>Deux</div>
      <div>Trois</div>
      <div>Quatre</div>
      <div>Cinq</div>
    </div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 200px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
column-gap: normal;

/* Valeurs de type <length-percentage> */
column-gap: 3px;
column-gap: 2.5em;
column-gap: 3%;
column-gap: calc(3% - 6px);

/* Valeurs globales */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

La propriété `column-gap` est définie par l'une des valeurs listées ci‑dessous.

### Valeurs

- `normal`
  - : Pour les dispositions multi-colonnes, résolu à `1em`&nbsp;; sinon `0`. C'est la valeur par défaut.
- {{CSSxRef("&lt;length&gt;")}}
  - : La taille de l'espace entre les colonnes, en tant que valeur {{CSSxRef("&lt;length&gt;")}} qui n'est pas négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille de l'espace entre les colonnes, en tant que valeur {{CSSxRef("&lt;percentage&gt;")}} qui n'est pas négative.

## Description

La propriété `column-gap` définit la taille de l'espace entre les colonnes d'un élément. La propriété définit un espacement de longueur fixe entre les éléments d'un conteneur, séparant les boîtes dans l'axe en ligne du conteneur. Les valeurs négatives ne sont pas valides. La valeur par défaut `normal` est résolue à `1em` pour les conteneurs multi-colonnes, et à `0` partout ailleurs.

Les pourcentages sont calculés par rapport à la taille de la [boîte de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_contenu) de l'axe en ligne de l'élément conteneur lorsque cette taille est définie, et par rapport à `0` sinon, sauf dans la disposition en grille, pour laquelle les tailles en pourcentage cycliques sont résolues par rapport à zéro pour déterminer les contributions de la {{Glossary("intrinsic size", "taille intrinsèque")}} mais sont résolues par rapport à la boîte de contenu de l'élément lors de la disposition du contenu.

L'espace entre les colonnes peut contenir un séparateur visible en tant qu'élément décoratif. S'il y a une règle entre les colonnes, définie avec la propriété {{CSSxRef("column-rule")}} ou le raccourci {{CSSxRef("rule")}}, elle apparaît au milieu de l'espace, mais n'a aucun effet sur la taille des espaces entre les colonnes.

L'ancienne propriété `grid-column-gap` est un alias pour `column-gap`. Elle a été initialement définie dans la [disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout) pour créer des espaces entre les colonnes de la grille.

La propriété `column-gap`, ainsi que la propriété {{CSSxRef("row-gap")}}, peut également être définie à l'aide du raccourci {{CSSxRef("gap")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Disposition flexible

Dans cet exemple, un conteneur flexible contient six éléments flexibles de deux largeurs différentes (`200px` et `300px`), de sorte que les éléments flexibles ne sont pas disposés en grille. La propriété `column-gap` sert à ajouter un espace horizontal entre les éléments flexibles adjacents.

#### HTML

```html
<div class="flexbox">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Pour créer un conteneur flexible, on définit sa propriété {{CSSxRef("display")}} sur `flex`. On utilise ensuite la propriété raccourcie {{CSSxRef("flex-flow")}} pour définir {{CSSxRef("flex-direction")}} sur `row` (la valeur par défaut) et {{CSSxRef("flex-wrap")}} sur `wrap`, ce qui permet aux éléments flexibles de passer sur de nouvelles lignes si nécessaire. Par défaut, les éléments flexibles s'étirent pour atteindre la hauteur de leur conteneur. En définissant une {{CSSxRef("height")}}, même les éléments flexibles vides ont une hauteur de `100px`.

Pour mieux démontrer la propriété `column-gap`, les éléments flexibles de cet exemple ont deux largeurs différentes. La largeur des éléments flexibles est définie dans les balises `<div>`. Nous utilisons le composant {{CSSxRef("flex-basis")}} de la propriété raccourcie {{CSSxRef("flex")}} pour donner à tous les éléments flexibles une largeur de `200px`. Nous ciblons ensuite chaque troisième élément flexible avec le sélecteur {{CSSxRef(":nth-of-type", ":nth-of-type(3n)")}} pour les élargir à `300px`.

La valeur de `column-gap` est définie à `20px` sur le conteneur flexible afin de créer un espace de `20px` entre les éléments flexibles adjacents sur chaque ligne.

```css
.flexbox {
  display: flex;
  flex-flow: row wrap;
  height: 100px;
  column-gap: 20px;
}

.flexbox > div {
  border: 1px solid green;
  background-color: lime;
  flex: 200px;
}
div:nth-of-type(3n) {
  flex: 300px;
}
```

#### Résultat

{{EmbedLiveSample("Disposition flexible", "auto", 120)}}

> [!NOTE]
> Bien qu'il y ait un espace horizontal entre les éléments flex adjacents sur chaque ligne, il n'existe pas d'espace entre les lignes. Pour définir un espace vertical entre les lignes flex, vous pouvez définir une valeur non nulle pour la propriété {{CSSxRef("row-gap")}}. La propriété raccourcie {{CSSxRef("gap")}} permet également de définir à la fois `row-gap` et `column-gap` dans une seule déclaration, dans cet ordre.

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
</div>
```

#### CSS

```css
#grid {
  display: grid;
  height: 100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  column-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("Disposition en grille", "auto", 220)}}

### Disposition multi-colonnes

#### HTML

```html
<p class="content-box">
  Un texte sur plusieurs colonnes avec une gouttière de 40px paramétrée grâce à
  la propriété `column-gap`. C'est plutôt pas mal comme effet non&nbsp;?
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: 40px;
}
```

#### Résultat

{{EmbedLiveSample("Disposition multi-colonnes", "auto", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("row-gap")}}
- La propriété {{CSSxRef("gap")}}
- [Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_gouttières)
- [Mettre en forme les colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
- Le module [d'espacements CSS](/fr/docs/Web/CSS/Guides/Gaps)
