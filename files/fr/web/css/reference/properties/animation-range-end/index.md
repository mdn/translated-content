---
title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`animation-range-end`** définit le point sur la chronologie où une animation doit se terminer.

## Syntaxe

```css
/* Mots-clé ou valeur de longueur pourcentage */
animation-range-end: normal;
animation-range-end: 80%;
animation-range-end: 700px;

/* Valeur de plage de chronologie nommée */
animation-range-end: cover;
animation-range-end: contain;
animation-range-end: cover 80%;
animation-range-end: contain 700px;

/* Valeurs globales */
animation-range-end: inherit;
animation-range-end: initial;
animation-range-end: revert;
animation-range-end: revert-layer;
animation-range-end: unset;
```

### Valeurs

- `normal`
  - : Représente la fin de la chronologie. C'est la valeur par défaut.
- {{CSSxRef("length-percentage")}}
  - : Définit une valeur de longueur ou de pourcentage mesurée à partir du début de la chronologie.
- {{CSSxRef("timeline-range-name")}}
  - : Définit une plage de chronologie nommée dans la chronologie globale. La plage commence à `0%`.
- `<timeline-range-name> <length-percentage>`
  - : Définit une longueur ou un pourcentage mesuré à partir du début de la plage de chronologie nommée.

## Description

La propriété `animation-range-end` définit la fin de la plage d'attachement de l'animation. Modifier la fin de la plage d'attachement peut déplacer la fin de l'animation, c'est-à-dire le point où les images clés (<i lang="en">keyframes</i> en anglais) associées à une progression de `100%` s'appliquent lorsque le nombre d'itérations est `1`, et peut aussi réduire la durée effective de l'animation.

La valeur de la propriété peut être `normal`, une `<length-percentage>`, ou un {{CSSxRef("timeline-range-name")}} avec une `<length-percentage>` optionnelle. Si la valeur `<timeline-range-name>` n'inclut pas de `<length-percentage>`, le pourcentage par défaut est `100%`.

La propriété `animation-range-end` est incluse dans la propriété raccourcie {{CSSxRef("animation")}} uniquement comme valeur de réinitialisation. Cela signifie qu'utiliser la propriété raccourcie `animation` réinitialise toute valeur précédemment déclarée de `animation-range-end` à `normal`&nbsp;; la propriété raccourcie ne peut pas être utilisée pour définir une nouvelle valeur de `animation-range-end`. Lors de la création d'[animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations), il faut déclarer `animation-range-end` après toute déclaration de la propriété raccourcie `animation` pour éviter de réinitialiser la valeur à `normal`.

La propriété `animation-range-end`, ainsi que la propriété {{CSSxRef("animation-range-start")}}, peuvent aussi être définies à l'aide de la propriété raccourcie {{CSSxRef("animation-range")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer une chronologie de progression de vue avec une fin de plage

Dans cet exemple, la propriété `animation-range-end` est appliquée à un élément animé via une chronologie de progression de vue. Cela permet à l'animation d'atteindre sa dernière étape bien avant que l'élément n'atteigne la fin de sa fenêtre d'affichage conteneur.

#### HTML

```html hidden
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
</div>
```

Au milieu d'un long bloc de texte, un élément à animer est inclus. Beaucoup de texte a été ajouté pour s'assurer que le contenu déborde de son conteneur&nbsp;; le texte supplémentaire est masqué ici pour plus de clarté.

```html-nolint
<div class="animatedElement">
```

```html-nolint hidden
<p>
  Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
  cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
  dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non tellus
  orci ac auctor augue mauris. Risus quis varius quam quisque id diam vel quam
  elementum. Nibh praesent tristique magna sit amet purus gravida quis. Duis
  ultricies lacus sed turpis tincidunt id aliquet. In egestas erat imperdiet sed
  euismod nisi. Eget egestas purus viverra accumsan in nisl nisi scelerisque.
  Netus et malesuada fames ac.
</p>
<p>
```

Une case à cocher est également incluse pour activer ou désactiver la propriété {{CSSxRef("animation-fill-mode")}}, afin de montrer comment cette propriété affecte les animations avec des chronologies raccourcies.

```html
<label>
  <input type="checkbox" /> Ajouter <code>animation-fill-mode: forwards;</code>
</label>
```

```html hidden
  </p>
</div>
```

#### CSS

Une chronologie de progression de vue est définie en utilisant la fonction {{CSSxRef("animation-timeline/view", "view()")}} comme valeur de la propriété {{CSSxRef("animation-timeline")}}. Cette déclaration est placée **après** la propriété raccourcie {{CSSxRef("animation")}} afin d'éviter de réinitialiser la valeur de la propriété longue.

La propriété `animation-range-end` est également définie pour que l'animation se termine plus tôt que prévu.

```css
.animatedElement {
  background-color: deeppink;
  animation: appear 1ms linear;
  animation-timeline: view();
  animation-range-end: exit 25%;
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

Lorsque la case à cocher est activée, la propriété `animation-fill-mode` est appliquée à l'élément animé&nbsp;:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: forwards;
}
```

Les autres styles appliqués dans cet exemple sont masqués ici pour plus de clarté.

```css hidden
.animatedElement {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

:has(:checked) .animatedElement {
  animation-fill-mode: both;
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
@supports not (animation-range-end: normal) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'animation-range-end'.";
    color: black;
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Résultat

Faites défiler pour voir l'élément s'animer. Activez ensuite la case à cocher à la fin du bloc de texte puis faites défiler à nouveau. Remarquez que l'élément termine son animation lorsqu'il a parcouru 75% de la fenêtre d'affichage, et qu'il revient à son état par défaut à ce moment-là si la propriété `animation-fill-mode` n'est pas appliquée.

{{EmbedLiveSample("Créer une chronologie de progression de vue avec une fin de plage", "100%", 480)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- La propriété {{CSSxRef("animation-range")}}
- La propriété {{CSSxRef("animation-range-start")}}
- La propriété {{CSSxRef("view-timeline-inset")}}
- La propriété `rangeStart` de la méthode {{DOMxRef("Element.animate()")}}
- [Chronologies d'animation pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- Le module [d'animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- [Visualiseur de plage de chronologie de vue <sup>(angl.)</sup>](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
