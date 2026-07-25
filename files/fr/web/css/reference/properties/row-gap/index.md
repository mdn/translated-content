---
title: Propriété CSS `row-gap`
short-title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
l10n:
  sourceCommit: 53745a2089268ce62bf79695d7d347bcbd0abe57
---

La propriété [CSS](/fr/docs/Web/CSS) **`row-gap`** définit la taille des espaces ({{Glossary("gutters", "gouttières")}}) entre les lignes d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: row-gap")}}

```css interactive-example-choice
row-gap: 0;
```

```css interactive-example-choice
row-gap: 1ch;
```

```css interactive-example-choice
row-gap: 1em;
```

```css interactive-example-choice
row-gap: 20px;
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
/* Valeurs avec un mot-clé */
row-gap: normal;

/* Valeurs de type <length-percentage> */
row-gap: 20px;
row-gap: 1em;
row-gap: 3vmin;
row-gap: 0.5cm;
row-gap: 10%;
row-gap: calc(10% - 6px);

/* Valeurs globales */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### Valeurs

- `normal`
  - : Pour la disposition multi-colonnes, équivaut à `1em`&nbsp;; sinon `0`. C'est la valeur par défaut.
- {{CSSxRef("&lt;length&gt;")}}
  - : La taille de la gouttière séparant les lignes, exprimée comme une valeur non négative de type {{CSSxRef("&lt;length&gt;")}}.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : La taille de la gouttière séparant les lignes, exprimée comme une valeur non négative de type {{CSSxRef("&lt;percentage&gt;")}}.

## Description

La propriété `row-gap` définit la taille de l'espace entre les lignes d'un élément.
Cet espace peut contenir un séparateur visible servant de décoration. S'il existe une ligne entre les lignes, elle apparaît au milieu de l'espace, mais n'a aucune incidence sur la taille de celui-ci. Ces lignes décoratives peuvent être ajoutées à cet «&nbsp;espace vide&nbsp;» à l'aide de la propriété {{CSSxRef("row-rule")}} ou la propriété raccourcie {{CSSxRef("rule")}}.

Définie dans [les espaces CSS](/fr/docs/Web/CSS/Guides/Gaps), cette propriété peut être utilisée dans les mises en page à plusieurs colonnes, les boîtes flexibles et les grilles. Elle a remplacé la propriété `grid-row-gap`, qui était limitée aux [mises en page en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout). Désormais, `grid-row-gap` est un alias de `row-gap`.

Cette propriété définit un espacement fixe entre les éléments d'un conteneur, séparant les boîtes selon l'axe de bloc du conteneur. Les valeurs négatives ne sont pas valides. La valeur par défaut `normal` correspond à `1em` pour les conteneurs à plusieurs colonnes, et à `0` dans tous les autres cas.

Les pourcentages sont calculés par rapport à la taille de la [boîte de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_contenu) de l'élément conteneur sur l'axe de bloc lorsque cette taille est définie, et par rapport à `0` dans le cas contraire, sauf dans les mises en page en grille, pour lesquelles les tailles en pourcentage cycliques sont calculées par rapport à zéro pour déterminer les contributions à la {{Glossary("intrinsic size", "taille intrinsèque")}}, mais par rapport à la boîte de contenu de l'élément lors de la mise en page du contenu.

Dans les mises en page en grille, l'effet de l'espacement est tel que les lignes de grille entre les lignes de la grille acquièrent l'épaisseur correspondant à la valeur de la propriété&nbsp;: la piste de grille entre deux lignes correspond à l'espace entre les marges intérieures qui les représentent. En ce qui concerne le dimensionnement des pistes, chaque gouttière est traitée comme une piste supplémentaire, vide et de taille fixe, correspondant à la taille définie, qui est occupée par tout élément de grille s'étendant sur plusieurs lignes. Bien qu'elle soit considérée comme vide pour le dimensionnement, l'espace créé peut contenir un élément {{CSSxRef("row-rule")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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
  row-gap: 20px;
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

{{EmbedLiveSample("Disposition flexible", "auto", 120)}}

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
  height: 200px;
  grid-template-columns: 150px 1fr;
  grid-template-rows: repeat(3, 1fr);
  row-gap: 20px;
}

#grid > div {
  border: 1px solid green;
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("Disposition en grille", "auto", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("column-gap")}}
- La propriété {{CSSxRef("gap")}}
- [Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_gouttières)
- Le module [d'espacements CSS](/fr/docs/Web/CSS/Guides/Gaps)
