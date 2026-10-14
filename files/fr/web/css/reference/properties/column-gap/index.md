---
title: Propriété CSS `column-gap`
short-title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
l10n:
  sourceCommit: 04dfe418f2942ae739d41592c22fafa3679fc03c
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-gap`** définit la taille de l'espace ({{Glossary("Gutters", "Gouttières")}}) entre les colonnes d'un élément dans les dispositions à plusieurs colonnes, flexibles et en grille.

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

/* Valeurs avec un mot-clé de type <line-width> */
column-gap: thin;
column-gap: medium;
column-gap: thick;

/* Valeurs globales */
column-gap: inherit;
column-gap: initial;
column-gap: revert;
column-gap: revert-layer;
column-gap: unset;
```

### Valeurs

Cette propriété est définie par une valeur unique choisie parmi la liste suivante&nbsp;:

- `normal`
  - : Pour les dispositions à plusieurs colonnes, définit l'espace à `1em`&nbsp;; sinon `0`. C'est la valeur par défaut.
- {{CSSxRef("&lt;line-width&gt;")}}
  - : Définit la taille de l'espace en utilisant les mots-clés `thin`, `medium` ou `thick`, ou une longueur ({{CSSxRef("&lt;length&gt;")}}) positive.
- {{CSSxRef("length-percentage")}}
  - : Définit une valeur non négative de type {{CSSxRef("&lt;length&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}}. Les pourcentages sont relatifs à la taille en incise (<i lang="en">inline</i> en anglais) de la boîte de contenu.

## Description

La propriété `column-gap` définit la taille de l'espace entre les colonnes d'un élément. La propriété définit un espacement de longueur fixe entre les éléments d'un conteneur, séparant les boîtes dans l'axe en incise du conteneur. Les valeurs négatives ne sont pas valides. Pour les conteneurs à plusieurs colonnes, les espaces entre les colonnes ont par défaut une largeur de `1em`, tandis qu'aucun espace n'est ajouté entre les colonnes de la grille, les éléments flexibles ou les rangées. Voir [Définir les espaces CSS](/fr/docs/Web/CSS/Guides/Gaps/Defining_gaps) pour plus d'informations sur les espaces selon le type de disposition.

Les pourcentages sont calculés par rapport à la taille de la [boîte de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_contenu) de l'axe en incise de l'élément conteneur lorsque cette taille est définie, et par rapport à `0` sinon, sauf dans la disposition en grille, pour laquelle les tailles en pourcentage cycliques sont résolues par rapport à zéro pour déterminer les contributions de la {{Glossary("intrinsic size", "taille intrinsèque")}} mais sont résolues par rapport à la boîte de contenu de l'élément lors de la disposition du contenu. Voir [Définir les valeurs d'espacement en pourcentage](/fr/docs/Web/CSS/Guides/Gaps/Defining_gaps#définir_les_valeurs_despacement_en_pourcentage) pour plus d'informations.

L'espace entre les colonnes peut contenir un séparateur visible en tant qu'élément décoratif. Pour tracer une règle entre les colonnes, utilisez la propriété {{CSSxRef("column-rule")}} ou le raccourci {{CSSxRef("rule")}}. La règle apparaît au milieu de l'espace, mais n'a aucun effet sur la taille de l'espace entre les colonnes.

La propriété `column-gap`, ainsi que la propriété {{CSSxRef("row-gap")}}, peut également être définie à l'aide du raccourci {{CSSxRef("gap")}}, qui définit à la fois `row-gap` et `column-gap` dans une seule déclaration, dans cet ordre.

La propriété `column-gap` a remplacé la propriété `grid-column-gap`, qui est initialement définie dans la [disposition en grille](/fr/docs/Web/CSS/Guides/Grid_layout) pour créer des espaces entre les colonnes de la grille. `grid-column-gap` est désormais un alias pour `column-gap`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Disposition flexible

Cet exemple montre comment utiliser la propriété `column-gap` pour créer un espace horizontal entre les éléments flexibles adjacents.

#### HTML

Nous incluons six éléments dans un élément conteneur&nbsp;:

```html
<div class="boite-flexible">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Nous définissons la propriété {{CSSxRef("display")}} sur `flex` et la propriété {{CSSxRef("flex-flow")}} sur `row wrap` pour créer un conteneur flexible avec des lignes d'éléments. Cela permet aux éléments de passer sur de nouvelles lignes si nécessaire. Les éléments flexibles ont chacun une base flexible de `200px` ou `300px`.

Nous définissons une règle de colonne avec la propriété {{CSSxRef("column-rule")}}. La valeur de `column-gap` est définie sur `20px` pour le conteneur flexible, créant un espace de `20px` entre les éléments flexibles adjacents sur chaque ligne. La règle de colonne est tracée au milieu de l'espace.

```css
.boite-flexible {
  display: flex;
  flex-flow: row wrap;
  column-rule: 1px solid magenta;

  column-gap: 20px;
}

.boite-flexible > div {
  border: 1px solid green;
  background-color: lime;
  height: 35px;
  flex: 200px;
}
div:nth-of-type(3n) {
  flex: 300px;
}
```

#### Résultat

{{EmbedLiveSample("Disposition flexible", "auto", 111)}}

Pour définir un espace vertical entre les lignes flexibles, définissez une valeur non nulle pour la propriété {{CSSxRef("row-gap")}}, en définissant éventuellement à la fois `row-gap` et `column-gap` à l'aide de la propriété raccourcie `gap`.

### Disposition en grille

Cet exemple montre comment utiliser la propriété `column-gap` avec une valeur en `<pourcentage>` dans une disposition en grille. Il montre également comment la taille de `column-gap` n'est pas affectée par la taille de la règle de colonne.

#### HTML

Nous incluons sept éléments dans un élément conteneur&nbsp;:

```html
<div id="grille">
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

Nous définissons la propriété {{CSSxRef("display")}} sur `grid`, la propriété {{CSSxRef("width")}} sur `400px` et la propriété {{CSSxRef("grid-template-columns")}} sur `repeat(3, 1fr)` pour créer un conteneur de grille large de 400px avec trois colonnes et autant de lignes que nécessaire. Chaque ligne a une hauteur de `100px`, comme défini par la propriété {{CSSxRef("grid-auto-rows")}}. Chaque élément de grille impair a une couleur de fond `lime` et les éléments de grille pairs sont semi-opaques.

Nous avons également défini une `column-rule` très large et semi-opaque pour montrer comment la règle est peinte derrière le contenu, la largeur de la règle n'ayant aucun impact sur la taille de l'espace. La propriété `column-gap` est définie sur `5%`, ce qui crée un espace de `20px` de large.

```css
#grille {
  display: grid;
  width: 400px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
  column-rule: 30px solid #ff00ff33;

  column-gap: 5%;
}

#grille > div {
  outline: 1px solid green;
  background-color: lime;
}
#grille > div:nth-of-type(even) {
  background-color: #00ff0033;
}
```

```css hidden
@layer no-support {
  @supports not (column-gap: 5%) {
    body::before {
      content: "Votre navigateur ne prend pas en charge les valeurs en pourcentage";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Résultat

{{EmbedLiveSample("Disposition en grille", "auto", 300)}}

La règle de colonne est plus large que la gouttière de colonne et n'est visible que là où les éléments dessinés par-dessus sont semi-transparents.

### Disposition à plusieurs colonnes

#### HTML

```html
<p class="content-box">
  Un texte sur plusieurs colonnes avec une gouttière fine de paramétrée grâce à
  la propriété `column-gap`. La valeur par défaut `normal` pour la propriété
  `column-gap` dans une disposition à plusieurs colonnes est de 1em.
</p>
```

#### CSS

```css
.content-box {
  column-count: 3;
  column-gap: thin;
}
```

```css hidden
@layer no-support {
  @supports not (column-gap: thick) {
    body::before {
      content: "Votre navigateur ne prend pas en charge les valeurs de mots-clés <line-width>";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
```

#### Résultat

{{EmbedLiveSample("Disposition à plusieurs colonnes", "auto", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("row-gap")}}
- La propriété {{CSSxRef("gap")}}
- La propriété {{CSSxRef("column-rule")}}
- La propriété {{CSSxRef("rule")}}
- [Définir les espaces CSS](/fr/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_gouttières)
- [Mettre en forme les colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)
- Le module [d'espacements CSS](/fr/docs/Web/CSS/Guides/Gaps)
