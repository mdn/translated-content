---
title: minmax()
slug: Web/CSS/Reference/Values/minmax
original_slug: Web/CSS/minmax
---

{{CSSRef}}

La [fonction CSS](/fr/docs/Web/CSS/CSS_Functions) **`minmax()`** définit un intervalle de taille supérieure ou égale à _min_ et inférieure ou égale à _max_. Elle est utilisée avec [les grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout).

{{InteractiveExample("CSS Demo: minmax()")}}

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
      <div>One. This column has more text in it.</div>
      <div>Two</div>
      <div>Three</div>
      <div>Four</div>
      <div>Five</div>
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
  background-color: rgba(0, 0, 255, 0.2);
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

`minmax()` est une fonction qui prend deux paramètres, _min_ et _max_.

Chaque paramètre peut être une longueur (type `<length>`), un pourcentage (type `<percentage>`), une valeur de type `<flex>` ou l'un des mots-clés `max-content`, `min-content`, ou `auto`.

Si _max_ est inférieur à _min_, alors _max_ sera ignoré et `minmax(min,max)` sera considéré comme _min_. Utilisée comme valeur maximale, une valeur de type {{cssxref("flex_value","&lt;flex&gt;")}} définit le facteur de flexibilité de la piste de la grille ; une telle valeur ne peut pas être utilisée comme minimum.

### Valeurs

- {{cssxref("&lt;length&gt;")}}
  - : Une longueur non-négative.
- {{cssxref("&lt;percentage&gt;")}}
  - : Un pourcentage non-négatif. Cette valeur est relative à la taille en incise (_inline_) du conteneur de grille pour les pistes en colonnes et relative à la taille en bloc du conteneur de grille pour les pistes en lignes. Si la taille du conteneur de grille dépend de la taille de ses pistes, cette valeur `<percentage>` sera traitée comme `auto`. L'agent utilisateur pourra ajuster les contributions à la piste de taille intrinsèques selon la taille du conteneur de grille et augmenter la taille finale de la piste d'une quantité minimale pour respecter le pourcentage.
- {{cssxref("&lt;flex&gt;")}}
  - : Une valeur non-négative avec l'unité `fr` qui indique le facteur de flexibilité/extensibilité de la piste. Chaque piste dimensionnée avec une valeur de type `<flex>` occupera une part de l'espace restant proportionnellement à son coefficient de flexibilité.
- `max-content`
  - : Représente la plus grande contribution max-content pour les objets de la grille qui occupent la piste.
- `min-content`
  - : Représente la plus grande contribution min-content pour les objets de la grille qui occupent la piste.
- `auto`
  - : Utilisée comme maximum, cette valeur agira comme `max-content`. Utilisée comme minimum, elle représentera la plus grande des tailles minimales (définies par {{cssxref("min-width")}}/{{cssxref("min-height")}}) des objets de la grille qui occupent la piste.

### Syntaxe formelle

{{csssyntax}}

### Propriétés CSS associées

`minmax()` peut être utilisée pour les propriétés suivantes :

- [grid-template-columns](/fr/docs/Web/CSS/Reference/Properties/grid-template-columns)
- [grid-template-rows](/fr/docs/Web/CSS/Reference/Properties/grid-template-rows)
- [grid-auto-columns](/fr/docs/Web/CSS/Reference/Properties/grid-auto-columns)
- [grid-auto-rows](/fr/docs/Web/CSS/Reference/Properties/grid-auto-rows)

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

- Guide sur les grilles CSS : _[Concepts de bases pour le dimensionnement des pistes avec minmax()](</fr/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#track_sizing_and_minmax()>)_
- [Valeurs logiques, modes d'écriture et grilles CSS](/fr/docs/Web/CSS/Guides/Grid_layout/Logical_values_and_writing_modes)
- Tutoriel vidéo (en anglais) : [Introduction à minmax()](https://gridbyexample.com/video/series-minmax/)
