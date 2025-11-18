---
title: Animations CSS
slug: Web/CSS/Guides/Animations
original_slug: Web/CSS/CSS_animations
l10n:
  sourceCommit: 6cd62fb4482a2d6927cebd0223bf8d0386095340
---

Le module d'**Animations CSS** permet d'animer les valeurs des propriétés CSS, comme `background-position` et `transform`, au fil du temps à l'aide d'étapes intermédiaires (<i lang="en">keyframes</i> en anglais). Chaque étape (<i lang="en">keyframe</i>) décrit comment l'élément animé doit être affiché à un moment donné de la séquence d'animation. Vous pouvez utiliser les propriétés du module d'animations pour contrôler la durée, le nombre de répétitions, le délai de démarrage et d'autres aspects d'une animation.

## Animations en action

Pour voir l'animation dans la boîte ci-dessous, cochez la case «&nbsp;Lancer l'animation&nbsp;» ou survolez la boîte avec le curseur. Lorsque l'animation est active, le nuage en haut change de forme, les flocons de neige tombent et le niveau de neige en bas monte. Pour mettre l'animation en pause, décochez la case ou éloignez le curseur de la boîte.

```html hidden live-sample___animation
<!-- Voir aria-label: https://developer.mozilla.org/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label -->
<input
  type="checkbox"
  id="animate"
  aria-label="Changer l'état de lecture de l'animation" />
<label for="animate">l'animation</label>
<div class="root">
  <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i
  ><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
  <div class="cloud"></div>
  <div class="ground"></div>
</div>
```

```css hidden live-sample___animation
i {
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  animation: falling 3s linear 0s infinite backwards;
  /* Les flocons de neige sont réalisés avec des dégradés linéaires CSS (https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Images/Using_CSS_gradients) */
  background-image:
    linear-gradient(180deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(90deg, transparent 40%, white 40% 60%, transparent 60%),
    linear-gradient(45deg, transparent 43%, white 43% 57%, transparent 57%),
    linear-gradient(135deg, transparent 43%, white 43% 57%, transparent 57%);
}
i:nth-of-type(4n) {
  /* Utilisation des pseudo-classes structurelles d'arbre pour créer de l'aléa - https://developer.mozilla.org/fr/docs/Web/CSS/:nth-of-type */
  height: 30px;
  width: 30px;
  transform-origin: right -30px;
}
i:nth-of-type(4n + 1) {
  height: 24px;
  width: 24px;
  transform-origin: left 30px;
}
i:nth-of-type(4n + 2) {
  height: 10px;
  width: 10px;
  transform-origin: -30px 0;
}
i:nth-of-type(4n + 3) {
  height: 40px;
  width: 40px;
  transform-origin: -50px 0;
}
i:nth-of-type(4n) {
  animation-duration: 5.3s;
  animation-iteration-count: 12;
  transform-origin: -10px -20px;
}
i:nth-of-type(4n + 1) {
  animation-duration: 3.1s;
  animation-iteration-count: 20;
  transform-origin: 10px -20px;
}
i:nth-of-type(4n + 2) {
  animation-duration: 1.7s;
  animation-iteration-count: 35;
  transform-origin: right -20px;
}
i:nth-of-type(3n) {
  animation-delay: 2.3s;
}
i:nth-of-type(3n + 1) {
  animation-delay: 1.5s;
}
i:nth-of-type(3n + 2) {
  animation-delay: 3.4s;
}
i:nth-of-type(5n) {
  animation-timing-function: ease-in-out;
}
i:nth-of-type(5n + 1) {
  animation-timing-function: ease-out;
}
i:nth-of-type(5n + 2) {
  animation-timing-function: ease;
}
i:nth-of-type(5n + 3) {
  animation-timing-function: ease-in;
}
i:nth-of-type(5n + 4) {
  animation-timing-function: linear;
}
i:nth-of-type(11n) {
  animation-timing-function: cubic-bezier(0.2, 0.3, 0.8, 0.9);
}
i:nth-of-type(7n) {
  opacity: 0.5;
}
i:nth-of-type(7n + 2) {
  opacity: 0.3;
}
i:nth-of-type(7n + 4) {
  opacity: 0.7;
}
i:nth-of-type(7n + 6) {
  opacity: 0.6;
  animation-timing-function: ease-in;
  transform-origin: left 10px;
}
i:nth-of-type(7n + 1) {
  opacity: 0.8;
}

.root {
  height: 580px;
  background-color: skyblue;
  border: 1px solid darkgrey;
  position: relative;
  overflow: hidden;
}
.ground,
.cloud {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-repeat: no-repeat;
}
.cloud {
  width: 100%;
  height: 150px;
  background: white;
  border-radius: 0 0 90px 33% / 0 0 45px 50px;
  box-shadow:
    5px 15px 15px white,
    -5px 15px 15px white,
    0 20px 20px rgb(125 125 125 / 0.5);
  animation:
    clouds ease 5s alternate infinite 0.2s,
    wind ease-out 4s alternate infinite;
}
.ground {
  bottom: 0;
  background-image: linear-gradient(to top, white 97%, 99%, #bbbbbb 100%);
  background-position: center 580px;
  animation: snowfall linear 300s forwards;
  border: 1px solid grey;
  /* Mettre le sol dans un contexte de rendu 3D (car les flocons de neige sont dans un contexte de rendu 3D) */
  transform: translate3d(0, 0, 0);
}

@keyframes snowfall {
  from {
    background-position: center 580px;
  }
  to {
    background-position: center 280px;
  }
}

@keyframes clouds {
  from {
    border-radius: 0 0 90px 33% / 0 0 45px 50px;
  }
  to {
    border-radius: 0 0 40px 50% / 0 0 55px 80px;
  }
}

@keyframes wind {
  from {
    height: 150px;
  }
  to {
    height: 100px;
  }
}

@keyframes falling {
  from {
    transform: translate(0, -50px) rotate(0deg) scale(0.9, 0.9);
  }
  to {
    transform: translate(30px, 600px) rotate(360deg) scale(1.1, 1.1);
  }
}

/* Par défaut, les animations sont en pause. */
i,
div[class] {
  animation-play-state: paused;
}
/* Lorsque la div est survolée, l'animation se lance. De même,
quand la case est cochée, l'animation qui suit la case cochée se lance */
div:hover *,
input:checked ~ div * {
  animation-play-state: running;
}

/* Change le contenu du label qui vient juste après l'input. Inclut aria-label sur le label pour améliorer l'accessibilité. */
input + label::before {
  content: "Exécuter ";
}
input:checked + label::before {
  content: "Mettre en pause ";
}
```

{{EmbedLiveSample("animation", "", "610px")}}

Cette animation d'exemple utilise la propriété CSS {{cssxref("animation-iteration-count")}} pour faire tomber les flocons de façon répétée, la propriété {{cssxref("animation-direction")}} pour faire bouger le nuage d'avant en arrière, la propriété {{cssxref("animation-fill-mode")}} pour faire monter le niveau de neige en réponse au mouvement du nuage, et la propriété {{cssxref("animation-play-state")}} pour mettre l'animation en pause.

Cliquez sur «&nbsp;Exécuter&nbsp;» dans l'exemple ci-dessus pour voir ou modifier le code de l'animation dans le MDN Playground.

## Référence

### Propriétés

- {{cssxref("animation")}} (abrégée)
- {{cssxref("animation-composition")}}
- {{cssxref("animation-delay")}}
- {{cssxref("animation-direction")}}
- {{cssxref("animation-duration")}}
- {{cssxref("animation-fill-mode")}}
- {{cssxref("animation-iteration-count")}}
- {{cssxref("animation-name")}}
- {{cssxref("animation-play-state")}}
- {{cssxref("animation-timeline")}}
- {{cssxref("animation-timing-function")}}

Le module d'animations CSS niveau 2 introduit également les propriétés `animation-trigger`, `animation-trigger-exit-range`, `animation-trigger-exit-range-end`, `animation-trigger-exit-range-start`, `animation-trigger-range`, `animation-trigger-range-end`, `animation-trigger-range-start`, `animation-trigger-timeline` et `animation-trigger-type`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Règles @

- {{cssxref("@keyframes")}}

### Événements

Toutes les animations, même celles d'une durée de 0 seconde, déclenchent des événements d'animation.

- {{domxref("Element/animationstart_event", "animationstart")}}
- {{domxref("Element/animationend_event", "animationend")}}
- {{domxref("Element/animationcancel_event", "animationcancel")}}
- {{domxref("Element/animationiteration_event", "animationiteration")}}

### Interfaces

- [API Web Animations](/fr/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationEvent")}}
- {{domxref("CSSAnimation")}}
- {{domxref("CSSKeyframeRule")}}
- {{domxref("CSSKeyframesRule")}}

## Guides

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
  - : Un tutoriel pas-à-pas qui explique comment créer des animations CSS. Cet article décrit les différentes propriétés et règles @ relatives aux animations et comment elles interagissent.
- [Utiliser l'API Web Animations](/fr/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
  - : Exemples de besoins courants en animation qui peuvent être résolus avec quelques lignes de JavaScript.

## Concepts associés

- La propriété CSS {{cssxref("will-change")}}
- Le type de donnée [`<easing-function>`](/fr/docs/Web/CSS/Reference/Values/easing-function)
- Les requêtes media [`prefers-reduced-motion`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion)
- Le terme du glossaire {{glossary("Bezier curve", "courbe de Bézier")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Module CSS d'animations dirigées par le défilement](/fr/docs/Web/CSS/CSS_scroll-driven_animations).
- Propriétés du module CSS [transitions](/fr/docs/Web/CSS/Guides/Transitions) pour déclencher des animations en fonction des actions utilisateur·ice·s.
- La propriété {{cssxref("interpolate-size")}} et la fonction {{cssxref("calc-size()")}} pour permettre des animations vers et depuis des [valeurs de taille intrinsèque](/fr/docs/Glossary/Intrinsic_Size).
- L'élément HTML {{htmlelement("canvas")}} avec l'[API canvas](/fr/docs/Web/API/Canvas_API) et l'[API WebGL](/fr/docs/Web/API/WebGL_API) pour dessiner des graphiques et des animations.
- L'interface {{domxref("SVGAnimationElement")}} pour tous les éléments d'animation SVG, incluant {{domxref("SVGAnimateElement")}}, {{domxref("SVGSetElement")}}, {{domxref("SVGAnimateColorElement")}}, {{domxref("SVGAnimateMotionElement")}} et {{domxref("SVGAnimateTransformElement")}}.
