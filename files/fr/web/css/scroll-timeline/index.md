---
title: "@scroll-timeline"
slug: Web/CSS/scroll-timeline
l10n:
  sourceCommit: 3db79652f43f0d5b4bd3bc0f233ed7670d91cbdf
---

{{CSSRef}}{{SeeCompatTable}}

La [propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`scroll-timeline`** définit un nom qui peut être utilisé pour identifier l'élément source d'une chronologie de défilement, ainsi que l'axe de défilement qui fournit la chronologie.

Le nom ainsi déclaré peut être utilisé dans une déclaration [`animation-timeline`](/fr/docs/Web/CSS/animation-timeline) afin d'indiquer l'élément (et donc la barre de défilement) utilisé pour contrôler l'avancement de l'animation. On notera que si l'élément n'affiche pas de barre de défilement dans l'axe indiqué, aucune chronologie ne sera créée.

La propriété `scroll-timeline` est équivalente à l'utilisation des propriétés [`scroll-timeline-name`](/fr/docs/Web/CSS/scroll-timeline-name) et [`scroll-timeline-axis`](/fr/docs/Web/CSS/scroll-timeline-axis) dans une seule déclaration.

## Propriétés détaillées correspondantes

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- [`scroll-timeline-name`](/fr/docs/Web/CSS/scroll-timeline-name)
- [`scroll-timeline-axis`](/fr/docs/Web/CSS/scroll-timeline-axis)

## Syntaxe

```css
/* Valeur pour scroll-timeline-name et scroll-timeline-axis */
scroll-timeline: nom_specifique_pour_chronologie block;
scroll-timeline: nom_specifique_pour_chronologie inline;
scroll-timeline: nom_specifique_pour_chronologie vertical;
scroll-timeline: nom_specifique_pour_chronologie horizontal;

/* Mot-clé none pour scroll-timeline-name et valeur pour scroll-timeline-axis */
scroll-timeline: none block;
scroll-timeline: none inline;
scroll-timeline: none vertical;
scroll-timeline: none horizontal;

/* scroll-timeline-name ou scroll-timeline-axis */
scroll-timeline: none;
scroll-timeline: nom_specifique_pour_chronologie;
scroll-timeline: block;
scroll-timeline: inline;
scroll-timeline: vertical;
scroll-timeline: horizontal;
```

### Valeurs

Une valeur `<scroll-timeline-name>` suivie d'une valeur `<scroll-timeline-axis>` peut être appliquée à l'élément conteneur dans n'importe quel ordre. Au moins une des deux valeurs doit être fournie.

Les valeurs autorisées pour `<scroll-timeline-name>` sont&nbsp;:

- `none`
  - : La chronologie n'a pas de nom associé.
- `<custom-ident>`
  - : Un identifiant personnalisé qui peut être utilisé pour faire référence à la chronologie de défilement dans une déclaration [`animation-timeline`](/fr/docs/Web/CSS/animation-timeline). Les valeurs possibles sont décrites sur la page du type [`<custom-ident>`](/fr/docs/Web/CSS/custom-ident).

La valeur `<scroll-timeline-axis>` indique la barre de défilement de l'axe donné, pour l'élément identifié par `<scroll-timeline-name>`, qui fournit la chronologie de défilement. Les valeurs autorisées sont&nbsp;:

- `block`
  - : La valeur par défaut. C'est la barre de défilement sur l'axe de bloc qui contrôle la chronologie. L'axe de bloc correspond à la direction orthogonale au flux du texte sur une ligne. Pour les modes d'écritures horizontaux (comme le français ou l'anglais), cette valeur se comporte comme `vertical`, et pour les modes d'écritures verticaux, cette valeur se comporte comme `horizontal`.
- `inline`
  - : C'est la barre de défilement sur l'axe en ligne qui contrôle la chronologie. L'axe en ligne correspond à la direction parallèle au flux du texte sur une ligne. Pour les modes d'écritures horizontaux, cette valeur se comporte comme `horizontal`, et pour les modes d'écritures verticaux, cette valeur se comporte comme `vertical`.
- `vertical`
  - : C'est la barre de défilement sur l'axe vertical qui contrôle la chronologie.
- `horizontal`
  - : C'est la barre de défilement sur l'axe horizontal qui contrôle la chronologie.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

Dans cet exemple, on définit une chronologie de défilement intitulée `squareTimeline` grâce à la propriété `scroll-timeline-name` sur l'élément avec l'identifiant `container`. Celle-ci est ensuite appliquée à l'animation de l'élément `#square` en utilisant `animation-timeline: squareTimeline`.

### HTML

Voici le fragment HTML utilisé pour l'exemple.

```html
<div id="container">
  <div id="square"></div>
  <div id="stretcher"></div>
</div>
```

### CSS

Quant au CSS, on définit le conteneur comme source d'une chronologie de défilement intitulée `squareTimeline` à l'aide de la propriété `scroll-timeline`. On définit également que la barre de défilement pour la chronologie est la barre verticale (avec `vertical`) (c'est le comportement qui aurait été utilisé par défaut).

La hauteur du conteneur est fixée à `300px` et on force la création d'une barre de défilement verticale en cas de défilement (nous allons utiliser l'élément avec l'identifiant `stretcher` pour forcer ce dépassement).

```css
#container {
  height: 300px;
  overflow-y: scroll;
  scroll-timeline: squareTimeline vertical;
  position: relative;
}
```

Le CSS qui suit définit un carré qui tourne dans des directions alternées, selon la chronologie fournie par la propriété `animation-timeline`, qui est fixée avec la valeur `squareTimeline` déclarée ci-avant.

```css
#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;

  position: absolute;
  bottom: 0;
}

@keyframes rotateAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

Enfin, on définit la hauteur de l'élément d'identifiant `stretcher` afin de forcer le dépassement dans le conteneur et pour créer les barres de défilement. Sans cet élément, il n'y aurait pas de barre de défilement et pas de chronologie de défilement à associer avec l'animation.

```css
#stretcher {
  height: 600px;
}
```

### Résultat

Faites défiler la barre verticale afin d'observer l'animation.

{{EmbedLiveSample("", "100%", "320px")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`animation-timeline`](/fr/docs/Web/CSS/animation-timeline)
