---
title: Fonction CSS `fit-content()`
short-title: fit-content()
slug: Web/CSS/Reference/Values/fit-content_function
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`fit-content()`** permet d'obtenir une dimension restreinte à un intervalle donné en utilisant la formule `min(taille maximale, max(taille minimale, argument))`.

{{InteractiveExample("Démonstration CSS&nbsp;: fit-content()")}}

```css interactive-example-choice
grid-template-columns: fit-content(8ch) fit-content(8ch) 1fr;
```

```css interactive-example-choice
grid-template-columns: fit-content(100px) fit-content(100px) 1fr;
```

```css interactive-example-choice
grid-template-columns: fit-content(40%) fit-content(40%) 1fr;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element">
      <div>Un. Cette colonne contient plus de texte.</div>
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
  grid-gap: 10px;
  width: 250px;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  text-align: left;
}
```

Cette fonction peut être utilisée comme taille de piste dans les propriétés [de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout), où la taille maximale est définie par `max-content` et la taille minimale par `auto`, qui est calculée de la même manière que `auto` (c'est-à-dire, [`minmax(auto, max-content)`](/fr/docs/Web/CSS/Reference/Values/minmax)), sauf que la taille de la piste est ramenée à _l'argument_ si celui-ci est supérieur à `auto`.

Voir la page {{CSSxRef("grid-template-columns")}} pour plus d'information les sur mots-clés `max-content` et `auto`.

La fonction `fit-content()` peut également être utilisée comme taille de boîte mise en page pour {{CSSxRef("width")}}, {{CSSxRef("height")}}, {{CSSxRef("min-width")}}, {{CSSxRef("min-height")}}, {{CSSxRef("max-width")}} et {{CSSxRef("max-height")}}, où les tailles maximale et minimale font référence à la taille du contenu.

## Syntaxe

```css
/* Valeurs de type <length> */
fit-content(200px)
fit-content(5cm)
fit-content(30vw)
fit-content(100ch)

/* Valeurs de type <percentage> */
fit-content(40%)
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Une longueur absolue.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Un pourcentage relatif à l'espace disponible sur l'axe indiqué.

    Pour les propriétés de grille, il est relatif à la taille en ligne du conteneur de la grille pour les pistes en colonnes et à la taille en bloc du conteneur de la grille pour les pistes en lignes. Sinon, il est relatif à la taille en ligne ou en bloc de la boîte mise en page en fonction du mode d'écriture.

## Syntaxe formelle

{{CSSSyntax("fit-content")}}

## Exemples

### Dimensionner les colonnes de la grille avec `fit-content`

#### HTML

```html
<div id="container">
  <div>Élément aussi large que le contenu.</div>
  <div>
    Un élément avec plus de texte à l'intérieur. Comme son conteneur est plus
    large que la largeur maximale, il est ramené sur 300 pixels.
  </div>
  <div>Un élément flexible</div>
</div>
```

#### CSS

```css
#container {
  display: grid;
  grid-template-columns: fit-content(300px) fit-content(300px) 1fr;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

#### Résultat

{{EmbedLiveSample("Dimensionner les colonnes de la grille avec `fit-content`", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le mot-clé {{CSSxRef("min-content")}}
- Le mot-clé {{CSSxRef("max-content")}}
- Le module [de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
- La propriété {{CSSxRef("grid-template")}}
- La propriété {{CSSxRef("grid-template-rows")}}
- La propriété {{CSSxRef("grid-template-columns")}}
- La propriété {{CSSxRef("grid-template-areas")}}
- La propriété {{CSSxRef("grid-auto-columns")}}
- La propriété {{CSSxRef("grid-auto-rows")}}
- La propriété {{CSSxRef("grid-auto-flow")}}
- [Placer les éléments sur les lignes d'une grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Line-based_placement)
- [Modèle de grille&nbsp;: Propriétés raccourcies pour définir les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Grid_template_areas#les_propriétés_raccourcies_pour_les_grilles_css)
