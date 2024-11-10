---
title: fit-content()
slug: Web/CSS/fit-content_function
l10n:
  sourceCommit: 059c9c1d93926bec5383fcfeb301f282ed40a9b9
---

{{CSSRef}}

La [fonction](/fr/docs/Web/CSS/CSS_Functions) [CSS](/fr/docs/Web/CSS) **`fit-content()`** permet d'obtenir une dimension restreinte à un intervalle donné (en utilisant la formule `min(taille maximale, max(taille minimale, argument))`.

{{EmbedInteractiveExample("pages/css/function-fit-content.html")}}

Cette fonction peut être utilisée pour définir la taille d'une piste via les propriétés relatives [aux grilles CSS](/fr/docs/Web/CSS/CSS_grid_layout) où la taille maximale est définie par [`max-content`](/fr/docs/Web/CSS/grid-template-columns#max-content) et où la taille minimale est définie par [`auto`](/fr/docs/Web/CSS/grid-template-columns#auto) et qui est calculée de façon similaire à `auto` (i.e. [`minmax(auto, max-content)`](/fr/docs/Web/CSS/minmax)), sauf que la taille de la piste est ramenée à _argument_ si celui-ci est supérieur à `auto`.

Voir la page [`grid-template-columns`](/fr/docs/Web/CSS/grid-template-columns) pour plus d'informations sur les mots-clés `max-content` et `auto`.

La fonction `fit-content()` peut également être utilisée pour définir la taille d'une boîte avec [`width`](/fr/docs/Web/CSS/width), [`height`](/fr/docs/Web/CSS/height), [`min-width`](/fr/docs/Web/CSS/min-width), [`min-height`](/fr/docs/Web/CSS/min-height), [`max-width`](/fr/docs/Web/CSS/max-width) et [`max-height`](/fr/docs/Web/CSS/max-height) où la taille maximale fait référence à la taille maximale du contenu et où la taille minimale fait référence à la taille minimale du contenu.

## Syntaxe

La fonction `fit-content()` accepte un argument de type `<length>` ou `<percentage>`.

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

- [`<length>`](/fr/docs/Web/CSS/length)
  - : Une longueur exprimée de façon absolue.
- [`<percentage>`](/fr/docs/Web/CSS/percentage)
  - : Un pourcentage relatif à l'espace disponible sur l'axe indiqué (la hauteur ou la largeur). Pour les propriétés qui concernent les grilles, le pourcentage est relatif à la dimension en ligne du conteneur de la grille pour les pistes qui sont disposées en colonnes et à la dimension en bloc pour les pistes qui sont disposées en lignes. Sinon, le pourcentage est relatif à la dimension en ligne ou en bloc selon le mode d'écriture utilisé.

## Exemples

### CSS

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

### HTML

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

### Résultat

{{EmbedLiveSample("", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les mots-clés pour le dimensionnement&nbsp;: [`min-content`](/fr/docs/Web/CSS/min-content), [`max-content`](/fr/docs/Web/CSS/max-content)
- Les propriétés correspondantes des grilles CSS&nbsp;:
  - [`grid-template`](/fr/docs/Web/CSS/grid-template)
  - [`grid-template-rows`](/fr/docs/Web/CSS/grid-template-rows)
  - [`grid-template-columns`](/fr/docs/Web/CSS/grid-template-columns)
  - [`grid-template-areas`](/fr/docs/Web/CSS/grid-template-areas)
  - [`grid-auto-columns`](/fr/docs/Web/CSS/grid-auto-columns)
  - [`grid-auto-rows`](/fr/docs/Web/CSS/grid-auto-rows)
  - [`grid-auto-flow`](/fr/docs/Web/CSS/grid-auto-flow)
- Les guides à propos de la disposition en grille
  - [Placer les éléments sur les lignes d'une grille CSS](/fr/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
  - [Les propriétés raccourcies pour les grilles CSS](/fr/docs/Web/CSS/CSS_grid_layout/Grid_template_areas#les_propriétés_raccourcies_pour_les_grilles_css)
