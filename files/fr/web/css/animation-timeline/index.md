---
title: animation-timeline
slug: Web/CSS/animation-timeline
l10n:
  sourceCommit: 9f958fd33582b47bd3e365c64eb2cdd9cee8f527
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`animation-timeline`** indique le nom d'une ou plusieurs règles @ [`@scroll-timeline`](/fr/docs/Web/CSS/@scroll-timeline) décrivant les animations de défilement à appliquer à l'élément.

Il est généralement plus pratique d'utiliser la propriété raccourcie [`animation`](/fr/docs/Web/CSS/animation) afin de définir l'ensemble des propriétés relatives à une animation en une fois.

## Syntaxe

```css
/* Une seule animation */
animation-timeline: none;
animation-timeline: test_05;
animation-timeline: -specific;
animation-timeline: sliding-vertically;

/* Plusieurs animations */
animation-timeline: test1, animation4;
animation-timeline:
  none,
  -moz-specific,
  sliding;

/* Valeurs globales */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

### Valeurs

- `auto`
  - : La chronologie de l'animation est la [chronologie par défaut du document (`DocumentTimeline`)](/fr/docs/Web/API/DocumentTimeline).
- `none`
  - : L'animation n'est associée à aucune chronologie.
- `<timeline-name>`
  - : Un [identifiant (`custom-ident`)](/fr/docs/Web/CSS/custom-ident) ou une chaîne de caractères identifiant la chronologie de défilement, déclarée via une règle [`@scroll-timeline`](/fr/docs/Web/CSS/@scroll-timeline). Si deux chronologies de défilement (ou plus) partagent le même nom, c'est la dernière déclarée au sein de la cascade qui sera utilisée. Si aucune chronologie de défilement correspondante n'est trouvée, l'animation ne sera pas associée à une chronologie.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir une chronologie de défilement

Dans cet exemple, on déclare une chronologie de défilement intitulée `squareTimeline` qu'on applique à l'élément `#square` en utilisant `animation-timeline: squareTimeline`.

#### HTML

```html
<div id="container">
  <div id="square"></div>
</div>
```

#### CSS

```css
#container {
  height: 300px;
}

#square {
  background-color: deeppink;
  width: 100px;
  height: 100px;
  margin-top: 100px;
  animation-name: rotateAnimation;
  animation-duration: 3s;
  animation-direction: alternate;
  animation-timeline: squareTimeline;
}

@scroll-timeline squareTimeline {
  source: selector("#container");
  orientation: "vertical";
  scroll-offsets: 0px, 300px;
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

#### Résultat

Faites défiler le cadre pour observer l'animation.

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- [La règle @ `@scroll-timeline`](/fr/docs/Web/CSS/@scroll-timeline)
