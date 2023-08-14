---
title: Envelopper une grille
slug: Web/CSS/Layout_cookbook/Grid_wrapper
---

{{CSSRef}}

Ce motif permet d'aligner le contenu d'une grille au centre grâce à un élément qui l'enveloppe. On peut également choisir quels éléments aligner au centre et lesquels adosser aux côtés.

## Spécifications sommaires

Les éléments placés sur la grille devraient pouvoir être alignés au centre et/ou sur les bords.

## Recette

{{EmbedGHLiveSample("css-examples/css-cookbook/grid-wrapper.html", '100%', 720)}}

> **Note :** [Télécharger cet exemple](https://github.com/mdn/css-examples/blob/master/css-cookbook/grid-wrapper--download.html).

## Choix effectués

Cette recette utilise la fonction {{cssxref("minmax()")}} afin de définir les tailles des pistes pour la propriété {{cssxref("grid-template-columns")}}.

Les deux colonnes extérieures ont une taille maximale de `1fr`, ce qui signifie qu'elles occuperont tout l'espace disponible dans le conteneur de grille.

## Méthodes de recours ou alternatives

Si cette recette est utilisée pour une page entière, il peut s'avérer utile de définir `max-width` et des marges horzontales avec `auto` afin que le contenu soit centré horizontalement :

```css
.grid {
  max-width: 1200px;
  margin: 0 auto; // on centre le conteneur en horizontal
  display: grid;
  /* Other grid code goes here */
}

/* On retire max-width et les marges si le navigateur */
/* prend en charge les grilles */
@supports (display: grid) {
  .grid {
    max-width: none;
    margin: 0;
  }
}
```

Pour qu'un élément soit isolé et colle au bord du _viewport_, on peut utiliser cette astuce de [Una Kravets](https://una.im/) :

```css
.item {
  width: 100vw;
  margin-left: 50%;
  transform: translate3d(-50%, 0, 0);
}
```

On a ainsi une méthode plus compatible mais qui ne permet pas d'aligner les éléments aussi facilement que sur une grille CSS.

## Accessibilité

Bien que les grilles CSS nous permettent potentiellement de positionner n'importe où on le souhaite, il est important que l'ordre des éléments dans le document soit le même que l'ordre visuel, utilisé pour la navigation (voir [les grilles CSS et l'accessibilité](/fr/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility) pour plus de détails).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Cssxref("grid-template-columns")}}
- [Les grilles CSS sur MDN](/fr/docs/Web/CSS/CSS_Grid_Layout)
- Article : [Les grilles CSS, plus de flexibilité avec `minmax()` (en anglais)](https://css-irl.info/more-flexibility-with-minmax/)
- Article : [Isoler des éléments sur une grille CSS (en anglais)](https://rachelandrew.co.uk/archives/2017/06/01/breaking-out-with-css-grid-explained/)
