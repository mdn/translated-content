---
title: Fonction CSS `minmax()`
short-title: minmax()
slug: Web/CSS/Reference/Values/minmax
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`minmax()`** définit un intervalle de taille supérieure ou égale à _min_ et inférieure ou égale à _max_. Elle est utilisée avec [les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout).

{{InteractiveExample("Démonstration CSS&nbsp;: minmax()")}}

```css interactive-example-choice
grid-template-columns: minmax(20px, auto) 1fr 1fr;
```

```css interactive-example-choice
grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
```

```css interactive-example-choice
grid-template-columns: minmax(2ch, 10ch) 1fr 1fr;
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

## Syntaxe

```css
/* Valeurs de type <inflexible-breadth>, <track-breadth>*/
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)

/* Valeurs de type <fixed-breadth>, <track-breadth> */
minmax(200px, 1fr)
minmax(30%, 300px)
minmax(400px, 50%)
minmax(50%, min-content)
minmax(300px, max-content)
minmax(200px, auto)

/* Valeurs de type <inflexible-breadth>, <fixed-breadth> */
minmax(400px, 50%)
minmax(30%, 300px)
minmax(min-content, 200px)
minmax(max-content, 200px)
minmax(auto, 300px)
```

Une fonction prenant deux paramètres, _min_ et _max_.

Chaque paramètre peut être une `<length>`, un `<percentage>` ou l'une des valeurs de mot-clé `max-content`, `min-content` ou `auto`.

Le deuxième paramètre _max_ accepte également des valeurs {{CSSxRef("flex_value", "&lt;flex&gt;")}}. (ces unités `fr` ne peuvent être utilisées que pour _max_ et sont invalides pour _min_.)

Si _max_ < _min_, alors _max_ est ignoré et `minmax(min,max)` est considéré comme _min_.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : Une longueur qui n'est pas négative.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Un pourcentage qui n'est pas négatif, relatif à la taille en ligne du conteneur de la grille pour les pistes de colonnes, et à la taille en bloc du conteneur de la grille pour les pistes de lignes. Si la taille du conteneur de la grille dépend de la taille de ses pistes, alors le `<percentage>` doit être traité comme `auto`. {{Glossary("user agent", "L'agent utilisateur")}} peut ajuster les contributions de taille intrinsèque de la piste à la taille du conteneur de la grille et augmenter la taille finale de la piste du minimum nécessaire pour respecter le pourcentage.
- {{CSSxRef("&lt;flex&gt;")}}
  - : Une dimension qui n'est pas négative avec l'unité `fr` définissant le facteur de flexion de la piste. Chaque piste dimensionnée en `<flex>` prend une part de l'espace restant en proportion de son facteur de flexion.
- {{CSSxRef("max-content")}}
  - : Représente le plus grand contenu possible parmi les éléments de la grille occupant la piste de la grille.
- {{CSSxRef("min-content")}}
  - : Représente le plus petit contenu possible parmi les éléments de la grille occupant la piste de la grille.
- `auto`
  - : Comme `min`, il représente la plus grande taille minimale (comme défini par {{CSSxRef("min-width")}}/{{CSSxRef("min-height")}}) des éléments de la grille occupant la piste de la grille.
    Comme `max`, il est identique à `max-content`. Cependant, contrairement à `max-content`, il permet d'étendre la piste grâce aux valeurs des propriétés {{CSSxRef("align-content")}} et {{CSSxRef("justify-content")}} comme `normal` et `stretch`.

## Syntaxe formelle

{{CSSSyntax}}

### Propriétés CSS

La fonction `minmax()` peut être utilisée pour les propriétés suivantes&nbsp;:

- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-rows")}}

## Exemples

### CSS

```css
#container {
  display: grid;
  grid-template-columns: minmax(min-content, 300px) minmax(200px, 1fr) 150px;
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

### HTML

```html
<div id="container">
  <div>Aussi large que le contenu, large d'au plus 300 pixels.</div>
  <div>Item flexible mais dont la largeur vaut au moins 200 pixels.</div>
  <div>Item avec une largeur de 150 pixels.</div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Concepts de bases pour le modèle de grille&nbsp;: dimensionner des pistes avec `minmax()`](/fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#dimensionner_une_piste_avec_minmax)
- [Valeurs logiques, modes d'écriture et grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- Tutoriel vidéo&nbsp;: [Introduction à `minmax()` <sup>(angl.)</sup>](https://gridbyexample.com/video/series-minmax/)
