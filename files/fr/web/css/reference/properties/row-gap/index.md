---
title: Propriété CSS `row-gap`
short-title: row-gap
slug: Web/CSS/Reference/Properties/row-gap
l10n:
  sourceCommit: e57c161bccdd08db7e46922255e1dc3ea74058d4
---

La propriété [CSS](/fr/docs/Web/CSS) **`row-gap`** définit la taille des espaces ({{Glossary("gutters", "gouttières")}}) entre les rangées d'un élément dans les mises en page à plusieurs colonnes, les boîtes flexibles et les grilles.

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

/* Valeurs de type <line-width> */
row-gap: thin;
row-gap: medium;
row-gap: thick;

/* Valeurs globales */
row-gap: inherit;
row-gap: initial;
row-gap: revert;
row-gap: revert-layer;
row-gap: unset;
```

### Valeurs

Cette propriété est définie comme une seule valeur parmi la liste suivante&nbsp;:

- `normal`
  - : Pour la disposition multi-colonnes, équivaut à `1em`&nbsp;; sinon `0`. C'est la valeur par défaut.
- {{CSSxRef("&lt;line-width&gt;")}}
  - : Définit la taille de la gouttière en utilisant les mots-clés `thin`, `medium` ou `thick`, ou une valeur positive de type {{CSSxRef("&lt;length&gt;")}}.
- {{CSSxRef("length-percentage")}}
  - : Définit une valeur non négative de type {{CSSxRef("&lt;length&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}}. Les pourcentages sont relatifs à la taille de l'axe de bloc de la boîte de contenu ou à `0`.

## Description

La propriété `row-gap` définit la taille de l'espace entre les lignes d'un élément.
Cet espace peut contenir un séparateur visible servant de décoration. S'il existe une ligne entre les lignes, elle apparaît au milieu de l'espace, mais n'a aucune incidence sur la taille de celui-ci. Ces lignes décoratives peuvent être ajoutées à cet «&nbsp;espace vide&nbsp;» à l'aide de la propriété {{CSSxRef("row-rule")}} ou la propriété raccourcie {{CSSxRef("rule")}}.

Définie dans [les espaces CSS](/fr/docs/Web/CSS/Guides/Gaps), cette propriété peut être utilisée dans les mises en page à plusieurs colonnes, les boîtes flexibles et les grilles. La propriété `row-gap`, ainsi que la propriété {{CSSxRef("column-gap")}}, peut également être définie à l'aide de la propriété raccourcie {{CSSxRef("gap")}}, dans cet ordre. La propriété `row-gap` a remplacé la propriété `grid-row-gap`, qui était limitée aux [mises en page en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout). Désormais, `grid-row-gap` est un alias de `row-gap`.

Cette propriété définit un espacement fixe entre les éléments d'un conteneur, séparant les boîtes selon l'axe de bloc du conteneur. Les valeurs négatives ne sont pas valides. La valeur par défaut `normal` correspond à `1em` pour les conteneurs à plusieurs colonnes, et à `0` dans tous les autres cas. Voir [Définir les espaces CSS](/fr/docs/Web/CSS/Guides/Gaps/Defining_gaps) pour plus d'informations sur les espaces selon le type de mise en page.

Les pourcentages sont résolus par rapport à la taille de la [boîte de contenu](/fr/docs/Web/CSS/Guides/Box_model/Introduction#zone_de_contenu) de l'élément conteneur sur l'axe de bloc lorsque cette taille est définie, et par rapport à `0` dans le cas contraire, sauf dans les mises en page en grille, pour lesquelles les tailles en pourcentage cycliques sont calculées par rapport à zéro pour déterminer les contributions à la {{Glossary("intrinsic size", "taille intrinsèque")}}, mais par rapport à la boîte de contenu de l'élément lors de la mise en page du contenu. Voir [Définir les valeurs d'écart en pourcentage](/fr/docs/Web/CSS/Guides/Gaps/Defining_gaps#définir_les_valeurs_décart_en_pourcentage) pour plus d'informations.

Dans les mises en page en grille, l'effet de l'espacement est tel que les lignes de grille entre les lignes de la grille acquièrent l'épaisseur correspondant à la valeur de la propriété&nbsp;: la piste de grille entre deux lignes correspond à l'espace entre les marges intérieures qui les représentent. En ce qui concerne le dimensionnement des pistes, chaque gouttière est traitée comme une piste supplémentaire, vide et de taille fixe, correspondant à la taille définie, qui est occupée par tout élément de grille s'étendant sur plusieurs lignes. Bien qu'elle soit considérée comme vide pour le dimensionnement, l'espace créé peut contenir un élément {{CSSxRef("row-rule")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Disposition flexible

Cet exemple montre comment utiliser la propriété `row-gap` pour créer un espace horizontal entre les lignes adjacentes d'éléments flexibles. Il montre également comment la taille de `row-gap` n'est pas affectée par la taille de la règle de ligne.

#### HTML

Nous incluons six éléments dans un élément conteneur&nbsp;:

```html
<div id="boite-flexible">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Nous définissons le {{CSSxRef("display")}} sur `flex`, définissons le {{CSSxRef("flex-flow")}} sur `row wrap` pour créer un conteneur flexible avec des lignes d'éléments flexibles qui se déplacent sur de nouvelles lignes si nécessaire, et limitons la {{CSSxRef("width")}} à `300px`. Nous ajoutons également une {{CSSxRef("row-rule")}}, qui dessine une ligne magenta en pointillés de 30px de large au milieu de l'espace.

La valeur de `row-gap` est définie sur `20px` sur le conteneur flexible pour créer un espace de `20px` entre les lignes flexibles adjacentes.

Nous définissons également une couleur de fond sur les éléments flexibles, la plupart étant semi-opaques, pour montrer comment la règle est visible sous les éléments flexibles lorsqu'elle est plus large que l'espace.

```css
#boite-flexible {
  display: flex;
  flex-flow: row wrap;
  width: 300px;
  row-rule: 30px dashed magenta;

  row-gap: 20px;
}

#boite-flexible > div {
  border: 1px solid green;
  background-color: #00ff0033;
  flex: 1 1 100px;
  height: 50px;
}
#boite-flexible > div:nth-of-type(3n-1) {
  background-color: lime;
}
```

#### Résultat

{{EmbedLiveSample("Disposition flexible", "auto", 220)}}

Pour définir un espace vertical entre les éléments flexibles, définissez une valeur non nulle pour la propriété {{CSSxRef("column-gap")}}, en définissant éventuellement à la fois `row-gap` et `column-gap` en utilisant le raccourci `gap`.

### Disposition en grille

Cet exemple montre comment utiliser la propriété `row-gap` avec une valeur en `<pourcentage>` dans une disposition en grille.

#### HTML

Nous incluons cinq éléments dans un élément conteneur&nbsp;:

```html
<div id="grille">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### CSS

Nous définissons la propriété {{CSSxRef("display")}} sur `grid`, la {{CSSxRef("height")}} sur `240px`, la {{CSSxRef("width")}} sur `350px` et {{CSSxRef("grid-template-rows")}} sur `repeat(3, 1fr)` pour créer un conteneur de grille de 350px de large avec trois colonnes et autant de lignes que nécessaire. Chaque ligne mesure `100px` de haut, comme défini par la propriété {{CSSxRef("grid-template-rows")}}.

La valeur de `row-gap` est définie sur `5%`. La hauteur du conteneur est de `240px`. La valeur `5%` crée un espace entre les lignes de `12px` de haut, laissant `216px` pour trois lignes d'éléments de grille, ce qui signifie que chaque ligne mesure `72px` de haut.

```css
#grille {
  display: grid;
  height: 240px;
  width: 350px;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 150px 1fr;

  row-gap: 5%;
}
```

```css hidden
body {
  padding: 1em;
}

#grille > div {
  outline: 1px solid green;
  background-color: lime;
}
@layer no-support {
  @supports not (row-gap: 5%) {
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

{{EmbedLiveSample("Disposition en grille", "auto", 280)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("column-gap")}}
- La propriété raccourcie {{CSSxRef("row-rule")}}
- La propriété raccourcie {{CSSxRef("rule")}}
- La propriété raccourcie {{CSSxRef("gap")}}
- [Un aperçu des espaces CSS et des propriétés de décoration des espaces](/fr/docs/Web/CSS/Guides/Gaps/Overview)
- [Définir les espaces CSS](/fr/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- [Définir les règles CSS](/fr/docs/Web/CSS/Guides/Gaps/Defining_rules)
- [Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_gouttières)
- Le module [d'espacements CSS](/fr/docs/Web/CSS/Guides/Gaps)
