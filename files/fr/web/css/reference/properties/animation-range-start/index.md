---
title: animation-range-start
slug: Web/CSS/Reference/Properties/animation-range-start
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`animation-range-start`** définit le point sur la chronologie où une animation doit commencer.

## Syntaxe

```css
/* Mot-clé ou valeur de longueur ou pourcentage */
animation-range-start: normal;
animation-range-start: 20%;
animation-range-start: 100px;

/* Valeur de plage de chronologie nommée */
animation-range-start: cover;
animation-range-start: contain;
animation-range-start: cover 20%;
animation-range-start: contain 100px;

/* Valeurs globales */
animation-range-start: inherit;
animation-range-start: initial;
animation-range-start: revert;
animation-range-start: revert-layer;
animation-range-start: unset;
```

### Valeurs

- `normal`
  - : Représente le début de la chronologie. Il s'agit de la valeur par défaut.
- {{CSSxRef("length-percentage")}}
  - : Définit une valeur de longueur ou de pourcentage mesurée à partir du début de la chronologie.
- {{CSSxRef("timeline-range-name")}}
  - : Définit une plage de chronologie nommée dans la chronologie globale. La plage commence à `0%`.
- `<timeline-range-name> <length-percentage>`
  - : Définit une longueur ou un pourcentage mesuré à partir du début de la plage de chronologie nommée.

## Description

Les valeurs autorisées pour la propriété `animation-range-start` sont `normal`, une {{CSSxRef("length-percentage")}}, un `<timeline-range-name>`, ou un `<timeline-range-name>` suivi d'une `<length-percentage>`. Si la valeur {{CSSxRef("timeline-range-name")}} n'inclut pas de `<length-percentage>`, le pourcentage par défaut est `0%`.
Voir {{CSSxRef("animation-range")}} pour une description détaillée des valeurs disponibles.
Consultez également le [Visualiseur de plage de chronologie de vue <sup>(angl.)</sup>](https://scroll-driven-animations.style/tools/view-timeline/ranges/) qui montre la signification des différentes valeurs dans un format visuel facile à comprendre.

La propriété `animation-range-start` est incluse dans la propriété raccourcie {{CSSxRef("animation")}} uniquement comme valeur de réinitialisation. Cela signifie qu'utiliser la propriété raccourcie `animation` réinitialise toute valeur précédemment déclarée de `animation-range-start` de même ou moindre spécificité à `normal`&nbsp;; la propriété raccourcie ne peut pas être utilisée pour définir une nouvelle valeur de `animation-range-start`. Lors de la création d'[animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations), il faut déclarer `animation-range-start` après toute déclaration de la propriété raccourcie `animation` pour éviter de réinitialiser la valeur à `normal`.

La propriété `animation-range-start`, ainsi que la propriété {{CSSxRef("animation-range-end")}}, peuvent aussi être définies à l'aide de la propriété raccourcie {{CSSxRef("animation-range")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer une chronologie de progression de vue pilotée par le défilement avec un début de plage

Dans cet exemple, la propriété `animation-range-start` est appliquée à un élément animé via une chronologie de progression de défilement. Cela permet à l'animation de commencer bien avant que l'élément n'entre dans la zone de défilement.

#### HTML

```html-nolint hidden
<div class="content">
  <h1>Content</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>
```

Au milieu d'un long bloc de texte, un élément à animer est inclus. Beaucoup de texte a été ajouté pour s'assurer que le contenu déborde de son conteneur&nbsp;; le texte supplémentaire est masqué ici pour plus de clarté.

```html
<div class="animatedElement"></div>
```

```html hidden
<p>
  Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
  cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
  dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
  tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
  vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
  quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
  imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
  scelerisque. Netus et malesuada fames ac.
</p>
</div>
```

#### CSS

Une chronologie de progression de défilement est définie en utilisant la fonction {{CSSxRef("animation-timeline/scroll", "scroll()")}} comme valeur de la propriété {{CSSxRef("animation-timeline")}}. Cette déclaration est placée **après** la propriété raccourcie {{CSSxRef("animation")}} afin d'éviter de réinitialiser la valeur de la propriété longue.

La propriété `animation-range-start` est également définie pour que l'animation commence plus tôt que prévu.

```css
.animatedElement {
  background-color: deeppink;

  animation: appear 1ms linear;

  animation-timeline: scroll();
  animation-range-start: -25%;
}

@keyframes appear {
  from {
    background-color: rebeccapurple;
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    background-color: darkturquoise;
    opacity: 0.75;
    transform: scaleX(0.75);
  }
}
```

Les autres styles appliqués dans cet exemple sont masqués ici pour plus de clarté.

```css hidden
.animatedElement {
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}

@supports not (animation-range-start: normal) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'animation-range-start'.";
    color: black;
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Résultat

Faites défiler pour voir l'élément s'animer. Remarquez que l'élément est déjà mis à l'échelle et semi-opaque lorsqu'il entre dans la zone d'affichage. Cela s'explique par le fait que l'élément a commencé à s'animer bien avant d'entrer dans la zone d'affichage.

{{EmbedLiveSample("Créer une chronologie de progression de vue pilotée par le défilement avec un début de plage", "100%", 480)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- La propriété {{CSSxRef("animation-range")}}
- La propriété {{CSSxRef("animation-range-end")}}
- La propriété {{CSSxRef("view-timeline-inset")}}
- La propriété `rangeStart` de la méthode {{DOMxRef("Element.animate()")}}
- [Chronologies d'animation pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Le module [d'animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Visualiseur de plage de chronologie de vue <sup>(angl.)</sup>](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
