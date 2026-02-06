---
title: gap
slug: Web/CSS/Reference/Properties/gap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`gap`** définit les espaces (également appelés {{Glossary("gutters", "gouttières")}}) entre les lignes et les colonnes. Cette propriété s'applique aux conteneurs [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout), [flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) et [grilles](/fr/docs/Web/CSS/Guides/Grid_layout).

{{InteractiveExample("Démonstration CSS&nbsp;: gap")}}

```css interactive-example-choice
gap: 0;
```

```css interactive-example-choice
gap: 10%;
```

```css interactive-example-choice
gap: 1em;
```

```css interactive-example-choice
gap: 10px 20px;
```

```css interactive-example-choice
gap: calc(20px + 10%);
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

## Propriétés constitutives

Cette propriété est une version abrégée pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("column-gap")}}
- {{CSSxRef("row-gap")}}

## Syntaxe

```css
/* Une valeur de type <length> */
gap: 20px;
gap: 1em;
gap: 3vmin;
gap: 0.5cm;

/* Une valeur de type <percentage> */
gap: 16%;
gap: 100%;

/* Deux valeurs de type <length> */
gap: 20px 10px;
gap: 1em 0.5em;
gap: 3vmin 2vmax;
gap: 0.5cm 2mm;

/* Deux valeurs de type <percentage> */
gap: 16% 100%;
gap: 21px 82%;

/* Valeurs calc() */
gap: calc(10% + 20px);
gap: calc(20px + 10%) calc(10% - 5px);

/* Valeurs globales */
gap: inherit;
gap: initial;
gap: revert;
gap: revert-layer;
gap: unset;
```

### Valeurs

Cette propriété se définit avec une valeur pour `<'row-gap'>`, suivie éventuellement d'une valeur pour `<'column-gap'>`. Si `<'column-gap'>` n'est pas définie, elle prend la même valeur que `<'row-gap'>`. Les deux peuvent être définies avec une valeur de longueur (`<length>`) ou de pourcentage (`<percentage>`).

- {{CSSxRef("&lt;length&gt;")}}
  - : Définit la largeur de la gouttière séparant les colonnes, les {{Glossary("flex item", "éléments flexibles")}}, les lignes flexibles et les {{Glossary("grid lines", "lignes de grille")}}.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Définit la largeur de la gouttière séparant les colonnes, les éléments flexibles, les lignes flexibles et les lignes de grille, en fonction de la dimension de l'élément englobant.

## Description

Cette propriété définit les espaces entre les colonnes dans la [mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout), entre les éléments flexibles et les lignes flexibles dans la [mise en page flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout), et entre les lignes et les colonnes dans la [mise en page en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout).

Les espaces générés créent des espaces vides dont la largeur ou la hauteur correspond à la taille définie pour l'espace, tout comme un élément ou une piste vide. L'espace visible entre les éléments peut différer de la valeur `gap` fournie, car les marges, le remplissage et l'alignement distribué peuvent augmenter la séparation entre les éléments au-delà de ce qui est déterminé par `gap`.

En mise en page en grille, la première valeur définit la gouttière entre les lignes, et la seconde définit la gouttière entre les colonnes. En mise en page en grille et flexible, si une seule valeur est incluse, elle est utilisée pour les deux dimensions.

Avec les conteneurs flexibles, le fait que la première valeur soit l'espace entre les éléments flexibles ou entre les lignes flexibles dépend de la direction. Les éléments flexibles sont disposés en lignes ou en colonnes selon la valeur de la propriété {{CSSxRef("flex-direction")}}. Pour les lignes (`row` (par défaut) ou `row-reverse`), la première valeur définit l'espace entre les lignes flexibles, et la seconde valeur définit l'espace entre les éléments dans chaque ligne. Pour les colonnes (`column` ou `column-reverse`), la première valeur définit l'espace entre les éléments flexibles dans une ligne flexible, et la seconde valeur définit l'espace entre chaque ligne flexible.

Dans les conteneurs multi-colonnes, la première valeur définit l'espace entre les colonnes. Une ligne de séparation peut être ajoutée à l'espace «&nbsp;vide&nbsp;» en utilisant la propriété {{CSSxRef("column-rule-style")}} ou la propriété abrégée {{CSSxRef("column-rule")}}.

Les valeurs d'espace en pourcentage sont toujours calculées par rapport à la taille de la [boîte de contenu](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model#les_parties_de_la_boîte) de l'élément conteneur. Le comportement est bien défini et cohérent dans tous les modes de mise en page lorsque la taille du conteneur est déterminée. Comme ces trois modes de mise en page (multi-colonne, flexible et grille) traitent différemment les tailles en pourcentage cycliques, `gap` le fait aussi. En mise en page en grille, les tailles en pourcentage cycliques sont résolues à zéro pour déterminer les contributions de {{Glossary("intrinsic size", "taille intrinsèque")}}, mais sont résolues par rapport à la boîte de contenu de l'élément lors de la mise en page du contenu. Deux exemples ci-dessous illustrent les valeurs d'espace en pourcentage avec [taille de conteneur explicite](#valeur_despace_en_pourcentage_et_taille_explicite_du_conteneur) et [taille de conteneur implicite](#valeur_despace_en_pourcentage_et_taille_implicite_du_conteneur) dans la section des exemples.

Les premières versions de la spécification appelaient cette propriété `grid-gap`, et pour maintenir la compatibilité avec les sites anciens, les navigateurs acceptent toujours `grid-gap` comme alias de `gap`.

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

{{EmbedLiveSample("Disposition flexible", "auto", 250)}}

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

{{EmbedLiveSample("Disposition en grille", "auto", 250)}}

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

{{EmbedLiveSample("Disposition multi-colonnes", "auto", 120)}}

### Taille explicite du conteneur

Si le conteneur a une taille fixe, le calcul de la valeur d'espace en pourcentage se fait sur la taille du conteneur. Ainsi, le comportement de l'espace est cohérent dans toutes les mises en page. Dans l'exemple suivant, il y a deux conteneurs, l'un en mise en page grille et l'autre en mise en page flexible. Les conteneurs ont cinq enfants rouges de 20x20px. Les deux conteneurs ont une hauteur explicitement définie à 200px avec `height: 200px` et l'espace est défini avec `gap: 12.5% 0`.

```html
<span>Grid</span>
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>Flex</span>
<div id="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css hidden
body > div {
  background-color: #cccccc;
  width: 200px;
  flex-flow: column;
}
```

```css
#grid {
  display: inline-grid;
  height: 200px;
  gap: 12.5% 0;
}

#flex {
  display: inline-flex;
  height: 200px;
  gap: 12.5% 0;
}

#grid > div,
#flex > div {
  background-color: coral;
  width: 20px;
  height: 20px;
}
```

{{EmbedLiveSample("Taille explicite du conteneur", "auto", 200)}}

Inspectez maintenant les éléments grille et flex en utilisant [l'onglet Inspecteur dans les outils de développement Web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html). Pour voir les espaces réels, survolez les balises `<div id="grid">` et `<div id="flex">` dans l'inspecteur. Vous remarquerez que l'espace est identique dans les deux cas, soit 25px.

### Taille implicite du conteneur

Si la taille n'est pas explicitement définie sur le conteneur, alors l'espace en pourcentage se comporte différemment selon la mise en page grille ou flexible. Dans l'exemple suivant, les conteneurs n'ont pas de hauteur explicitement définie.

```html hidden
<span>Grid</span>
<div id="grid">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
<span>Flex</span>
<div id="flex">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

```css hidden
body > div {
  background-color: #cccccc;
  width: 200px;
}

#grid {
  display: inline-grid;
  gap: 12.5% 0;
}

#flex {
  display: inline-flex;
  gap: 12.5% 0;
  flex-flow: column;
}

#grid > div,
#flex > div {
  background-color: coral;
  width: 20px;
  height: 20px;
}
```

{{EmbedLiveSample("Taille implicite du conteneur", "auto", 200)}}

Dans le cas de la mise en page grille, l'espace en pourcentage ne contribue pas à la hauteur réelle de la grille. La hauteur du conteneur est calculée avec un espace de `0px`, donc la hauteur réelle est de 100px (20px x 5). Ensuite, l'espace en pourcentage réel est calculé en utilisant la hauteur de la boîte de contenu, l'espace devient `12.5px` (100px x 12.5%). L'espace est appliqué juste avant le rendu. Ainsi, la grille reste à 100px de hauteur mais déborde à cause de l'espace en pourcentage ajouté juste avant le rendu.

Dans le cas de la mise en page flexible, l'espace en pourcentage donne toujours une valeur nulle.

## Spécifications

{{Specifications("css.properties.gap.grid_context")}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("row-gap")}}
- La propriété {{CSSxRef("column-gap")}}
- [Les concepts de base des grilles CSS&nbsp;: les gouttières](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#les_gouttières)
- Le module [d'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
- Le module [de mise en page flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module [de mise en page en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- Le module [de mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout)
