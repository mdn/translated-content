---
title: column-gap
slug: Web/CSS/Reference/Properties/column-gap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`column-gap`** définit la taille de l'espace ({{Glossary("Gutters", "Gouttières")}}) entre les colonnes d'un élément.

Initialement définie dans [la disposition multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), la définition de `column-gap` a été élargie pour couvrir plusieurs méthodes de mise en page. Elle est désormais définie dans [l'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment) et peut être utilisée pour les dispositions multi-colonnes, les dispositions flexibles et les dispositions en grille.

Les premières versions de la spécification nommaient cette propriété `grid-column-gap`, et pour maintenir la compatibilité avec les anciens sites, les navigateurs acceptent toujours `grid-column-gap` comme alias de `column-gap`.

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

/* Valeurs de type <length> */
column-gap: 3px;
column-gap: 2.5em;

/* Valeurs de type <percentage> */
column-gap: 3%;

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
  - : Un mot-clé qui indique qu'on souhaite utiliser l'espacement par défaut créé par le navigateur. Pour les dispositions en colonnes, cette valeur correspond à `1em`, sinon elle correspond à `0`.
- {{CSSxRef("&lt;length&gt;")}}
  - : Une valeur de longueur ({{CSSxRef("&lt;length&gt;")}}) qui définit la taille de l'espace entre les colonnes. Cette valeur ({{CSSxRef("&lt;length&gt;")}}) peut être nulle mais ne doit pas être négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Une valeur de pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) qui définit la taille de l'espace entre les colonnes. Cette valeur ({{CSSxRef("&lt;percentage&gt;")}}) peut être nulle mais ne doit pas être négative.

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
> Bien qu'il y ait un espace horizontal entre les éléments flex adjacents sur chaque ligne, il n'existe pas d'espace entre les lignes. Pour définir un espace vertical entre les lignes flex, vous pouvez spécifier une valeur non nulle pour la propriété {{CSSxRef("row-gap")}}. La propriété raccourcie {{CSSxRef("gap")}} permet également de définir à la fois `row-gap` et `column-gap` dans une seule déclaration, dans cet ordre.

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
  la propriété `column-gap`. C'est plutôt pas mal comme effet non ?
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
