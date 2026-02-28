---
title: view()
slug: Web/CSS/Reference/Properties/animation-timeline/view
l10n:
  sourceCommit: 8f7fa9e7aef0399c7a7f8e5a20476a0c2f287640
---

{{SeeCompatTable}}

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`view()`** est utilisée avec la propriété {{CSSxRef("animation-timeline")}} pour créer une [chronologie de progression de visibilité anonyme](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#anonymous_view_progress_timeline_the_view_function) basée sur le moment où un élément entre dans la zone visible de son {{Glossary("scroll container", "conteneur de défilement")}} le plus proche. Vous pouvez ajuster l'axe de suivi et les encarts optionnels pour contrôler quand l'élément est considéré comme «&nbsp;visible&nbsp;».

## Syntaxe

```css
/* Aucun paramètres */
animation-timeline: view();

/* Paramètres d'axe */
animation-timeline: view(block);
animation-timeline: view(x);

/* Paramètres de marge interne */
animation-timeline: view(auto);
animation-timeline: view(20%);
animation-timeline: view(200px);
animation-timeline: view(20% 40%);
animation-timeline: view(20% 200px);
animation-timeline: view(100px 200px);
animation-timeline: view(auto 200px);

/* Paramètres d'axe et de marge interne */
animation-timeline: view(block auto);
animation-timeline: view(inline 20%);
animation-timeline: view(x 200px auto);
```

### Paramètres

- `<axis>`
  - : Définit la direction de défilement utilisée par la chronologie de progression de visibilité. La valeur peut être l'un des mots-clés {{CSSxRef("axis")}}&nbsp;: `block`, `inline`, `x` ou `y`. La valeur par défaut est `block`.
- `<view-timeline-inset>`
  - : Définit la zone de marge interne qui détermine quand un élément est considéré comme «&nbsp;visible&nbsp;». La valeur peut être le mot-clé `auto` ou jusqu'à deux valeurs {{CSSxRef("length-percentage")}}.

## Description

Une chronologie de progression de visibilité avance en fonction des changements de visibilité d'un élément cible à l'intérieur de son {{Glossary("scroll container", "conteneur de défilement")}} le plus proche. La fonction `view()` est utilisée avec la propriété {{CSSxRef("animation-timeline")}} pour créer ce type de chronologie.

Les paramètres de la fonction permettent de définir l'axe de la barre de défilement le long duquel la progression de la chronologie est suivie, ainsi que les encarts qui ajustent la position de la boîte dans laquelle l'élément cible est considéré comme visible.

- **Axe**&nbsp;: Par défaut, `view()` utilise l'axe block. Vous pouvez le modifier en fournissant une valeur `<axis>` explicite. Si l'axe choisi ne contient pas de barre de défilement, la chronologie de l'animation reste inactive (progression nulle).
- **Marge interne**&nbsp;: Par défaut, la chronologie est à `0%` (l'image clé `from` dans l'animation {{CSSxRef("@keyframes")}}) lorsque l'élément cible est d'abord visible sur un bord du conteneur de défilement, et à `100%` (l'image clé `to`) lorsque le bord extérieur de l'élément atteint le bord opposé du conteneur. Vous pouvez contrôler ces points avec les paramètres `<view-timeline-inset>`.
  - L'animation dure tant que l'élément reste dans la zone visible ajustée par l'encart. L'encart sert à déterminer si l'élément est visible, ce qui détermine la durée de la chronologie de l'animation. L'encart se compose de jusqu'à deux valeurs, chacune pouvant être `auto` ou une {{CSSxRef("length-percentage")}}.
  - La première valeur définit le début, un décalage vers l'intérieur depuis le début de la zone de défilement.
  - La seconde valeur, si elle est présente, définit la fin, un décalage vers l'intérieur depuis la fin de la zone de défilement. Si la valeur est supérieure à `0`, elle définit une marge interne (positive). Une valeur négative définit un ajustement vers l'extérieur de la [zone de défilement](/fr/docs/Glossary/Scroll_container#scrollport).

Les composants axe et marge interne peuvent être indiqués dans n'importe quel ordre. Dans l'encart, la première valeur définit la marge de début, la seconde la marge de fin.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer une chronologie de progression de visibilité anonyme avec `view()`

Dans cet exemple, nous créons une chronologie de progression de visibilité anonyme pour l'élément ayant les classes `subject` et `animation` en utilisant `animation-timeline: view()`. Ainsi, lorsque vous faites défiler le document, cet élément s'anime lorsqu'il se déplace vers le haut dans le document.

#### HTML

Le code HTML de l'exemple est présenté ci-dessous.

```html
<div class="content">
  <h1>Contenu</h1>
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

  <div class="subject-container">
    <div class="subject animation"></div>
  </div>

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
<div class="overlay top">encart de début 50%</div>
<div class="overlay bottom">encart de fin 10%</div>
```

#### CSS

Les classes `subject` et `content` sont mises en forme de façon minimale, et le texte possède quelques réglages de police de base&nbsp;:

```css
.subject {
  width: 300px;
  height: 200px;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p {
  font-size: 1.5rem;
  line-height: 1.8;
}
```

Pour illustrer le résultat, quelques classes supplémentaires sont définies. La classe `subject-container` montre les limites de l'animation. Les superpositions semi-transparentes `top` et `bottom` marquent la zone de défilement ajustée par l'encart.

```css
.subject-container {
  border: 2px dashed black;
  width: 300px;
  margin: 0 auto;
}

.overlay {
  position: fixed;
  width: 100%;
  background-color: #f5deb3aa;
  display: flex;
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  justify-content: flex-end;
}

.top {
  top: 0;
  height: 50%;
  align-items: end;
}

.bottom {
  bottom: 0;
  height: 10%;
}
```

L'élément HTML `<div>` avec la classe `subject` possède aussi la classe `animation`. L'animation `grow` fait grandir ou rétrécir l'élément `subject`. La règle `animation-timeline: view(block 55% 10%)` définit l'élément à animer au fil de la chronologie de progression de visibilité créée par son conteneur de défilement le plus proche (ici, l'élément racine du document).

En faisant défiler vers le bas, remarquez comment les valeurs de marge interne `50% 10%` font démarrer l'animation lorsque l'élément est à 10% du bas de la zone de défilement et la terminent lorsqu'il est à 50% du haut. Au fil de la chronologie, l'élément `subject` grandit. À l'inverse, en faisant défiler vers le haut, l'animation se déroule à l'envers, débutant à 50% du haut, parcourant les images clés en sens inverse, et se terminant à 10% du bas. Ainsi, lorsque l'animation s'inverse, l'élément `subject` rétrécit.

Il est important de retenir que l'animation dure uniquement tant que l'élément `subject` est dans la zone visible, définie ici par les valeurs de marge interne `50% 10%`.

```css
.animation {
  animation-timeline: view(block 50% 10%);
  animation-name: grow;
  animation-duration: 1ms; /* Firefox a besoin de ça pour appliquer l'animation */
  animation-timing-function: linear;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
}
```

```css hidden
@layer no-support {
  @supports not (animation-timeline: view()) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la fonction CSS `view()`.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Résultat

Faites défiler pour voir l'élément avec la classe `subject` s'animer lorsqu'il entre et sort de la zone visible ajustée par l'encart.

{{EmbedLiveSample("Examples", "100%", 480)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- [Chronologies d'animation pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [Utiliser les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- Le module [des animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- Le module [des animations CSS](/fr/docs/Web/CSS/Guides/Animations)
- L'interface API {{DOMxRef("ViewTimeline")}}
- [L'API Web Animations](/fr/docs/Web/API/Web_Animations_API)
