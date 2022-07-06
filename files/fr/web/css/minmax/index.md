---
title: minmax()
slug: Web/CSS/minmax
translation_of: Web/CSS/minmax()
original_slug: Web/CSS/minmax()
---
{{CSSRef}}

La [fonction CSS](/fr/docs/Web/CSS/CSS_Functions) **`minmax()`** définit un intervalle de taille supérieure ou égale à _min_ et inférieure ou égale à _max_. Elle est utilisée avec [les grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout).

{{EmbedInteractiveExample("pages/css/function-minmax.html")}}

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

- [grid-template-columns](/fr/docs/Web/CSS/grid-template-columns)
- [grid-template-rows](/fr/docs/Web/CSS/grid-template-rows)
- [grid-auto-columns](/fr/docs/Web/CSS/grid-auto-columns)
- [grid-auto-rows](/fr/docs/Web/CSS/grid-auto-rows)

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
  <div>
    Aussi large que le contenu, large d'au plus 300 pixels.
  </div>
  <div>
    Item flexible mais dont la largeur vaut au moins 200 pixels.
  </div>
  <div>
    Item avec une largeur de 150 pixels.
  </div>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 200)}}

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS Grid", "#valdef-grid-template-columns-minmax", "minmax()")}} | {{Spec2("CSS Grid")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.properties.grid-template-columns.minmax")}}

## Voir aussi

- Guide sur les grilles CSS : _[Concepts de bases pour le dimensionnement des pistes avec minmax()](</fr/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#track_sizing_and_minmax()>)_
- [Valeurs logiques, modes d'écriture et grilles CSS](/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- Tutoriel vidéo (en anglais) : [Introduction à minmax()](http://gridbyexample.com/video/series-minmax/)
