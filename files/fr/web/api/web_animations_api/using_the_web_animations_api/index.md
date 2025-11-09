---
title: Utilisation de l'API Web Animations
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

{{DefaultAPISidebar("Web Animations")}}

L'API **Web Animations** nous permet de construire des animations et de contrôler leur lecture avec JavaScript. Cet article vous mettra sur la bonne voie avec des démonstrations et des tutoriels inspirés d'«&nbsp;Alice au pays des merveilles&nbsp;».

## Découvrir l'API Web Animations

L'[API Web Animations](/fr/docs/Web/API/Web_Animations_API) ouvre le moteur d'animation du navigateur aux développeur·euse·s et à la manipulation par JavaScript. Cette API a été conçue pour sous-tendre les implémentations d'[Animations CSS](/fr/docs/Web/CSS/Guides/Animations) et de [Transitions CSS](/fr/docs/Web/CSS/Guides/Transitions), et laisse la porte ouverte à de futurs effets d'animation. C'est l'une des façons les plus performantes d'animer sur le Web, laissant le navigateur effectuer ses propres optimisations internes sans détournements, coercition, ni {{domxref("Window.requestAnimationFrame()")}}.

Avec l'API Web Animations, nous pouvons déplacer des animations interactives des feuilles de style vers JavaScript, séparant ainsi la présentation du comportement. Nous n'avons plus besoin de recourir à des techniques lourdes pour le DOM comme l'écriture de propriétés CSS et l'application de classes aux éléments pour contrôler le sens de lecture. Et contrairement au CSS purement déclaratif, JavaScript nous permet aussi de définir dynamiquement des valeurs, des propriétés jusqu'aux durées. Pour créer des bibliothèques d'animation personnalisées et des animations interactives, l'API Web Animations peut être l'outil idoine. Voyons ce qu'elle permet.

Cette page contient une suite d'exemples utilisant l'[API Web Animations](/fr/docs/Web/API/Web_Animations_API), inspirés d'[Alice au pays des merveilles](https://fr.wikipedia.org/wiki/Les_Aventures_d%27Alice_au_pays_des_merveilles). Ces exemples ont été créés et partagés gracieusement par [Rachel Nabors <sup>(angl.)</sup>](https://nearestnabors.com/). [L'ensemble complet d'exemples <sup>(angl.)</sup>](https://codepen.io/collection/nqNJvD) est disponible sur CodePen&nbsp;; ici, nous présentons ceux qui sont pertinents pour notre documentation.

## Écrire des animations CSS avec l'API Web Animations

Une façon familière d'aborder l'API Web Animations consiste à partir d'un sujet que la plupart des développeur·euse·s Web ont déjà expérimenté&nbsp;: les animations CSS. Les animations CSS ont une syntaxe familière qui se prête bien à la démonstration.

### La version CSS

Voici une animation de «&nbsp;tumbling&nbsp;» (ou _acrobatie_ en français) écrite en CSS montrant Alice tombant dans le terrier qui mène au pays des merveilles&nbsp;:

{{EmbedLiveSample("animations_css_version", "", 300)}}

```html hidden live-sample___animations_css_version live-sample___animations_api_version
<div class="wrapper">
  <div id="tunnel"></div>
  <div id="alice">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400">
      <path
        d="M110.1 2.7h8.9c3.4.4 6.7.8 10.1 1.3 9.8 1.5 17.8 6.4 24.5 13.7.4.5 1.9.6 2.5.3 6.8-4.4 13.9-8.2 21.9-9.9 1.3-.3 3.4-1.2 3.7 1.5.6 4.9 1.4 9.9 1.7 14.8.3 4.4.1 8.7.1 12.2 2.1 1.5 4.6 2.3 5.5 4 4.2 8.4 3.2 17.6 3.1 26.6 0 1.2-.4 3.3.1 3.6 10.3 4.9 20.7 9.6 31.1 14.4 2.5-4.9-2.3-16-15.8-14.4.6-.5 1.4-1.1 2.2-1.1 2.5.1 4.9.4 7.4.7 6 .8 10.9 3.7 14.6 8.4 1.2 1.5 1.6 4.2 1.1 6.1-.7 3.2-3.7 4-7.1 4.1 4.5 3.5 6.5 8.1 6.8 13.3.6 9.4-1.1 18.6-4.8 27.1-3.9 8.8-5.2 17.5-3.3 26.8.6 3.2 1.2 7 .2 9.9-2 6.2-7.8 8.6-13.4 10.9-3 1.2-7.4 1.2-6.3 6.3.8 3.7-.4 4 .2 4.5 5.8 5.8 11.8 11.5 17.6 17.3 1.7 1.7 3 3.8 4.3 5.5-1.1.4-1.8.7-2.4 1 7.5 5.8 14.9 11.6 22.4 17.4 4.3-4.3 8.6-9 13.3-13.2 8.1-7.3 16.7-14 24.5-21.7 3.3-3.3 4.9-8.2 7.4-12.3.3-.4 1.3-.9 1.6-.7 4.6 2.7 6.8 7.2 7.9 12.1 1.3 5.7 1.6 11.6 2.3 17.1 4.2-.2 8.8-.8 13.4-.4 2 .1 4.6 1.8 5.5 3.5 2.2 4.3 3.8 8.9 5.3 13.5 3.7 11.5 6.9 23.2 10.7 34.7 1.7 5.1 3.4 10.4 8.6 13.4.5.3.5 2.7 0 3.1-3.3 2.5-6.9 4.6-10.5 7 2 5.8 4.3 12.6 6.7 19.6.7-.8 1.4-1.6 2.1-2.3 1.9-1.9 3.5-1.6 4.2 1.2.7 3 1.3 6.2 1.5 9.3.3 7.3.4 14.6.6 21.9 0 .4.2.8.5 1.2 3.6 4.7 7.1 9.3 10.7 14 1.7 2.3 3 5.4 5.3 6.6 5.5 2.7 11.5 4.4 17.3 6.6v.7c-.4.3-.7.8-1.2 1-5.8 2.1-11.6 4.3-17.5 6.2-4.2 1.3-8.4 2-12.4-1.2-1.8-1.5-3.9-2.6-5.8-3.8 0 2.3.1 4.4-.1 6.4-.1.8-.7 2.2-1.2 2.2-2.6.2-5.3.1-7.9.1-1.1 0-2.7.3-3.2-.3-1-1.2-2.1-2.9-2.1-4.4-.1-5.2.1-10.4.3-15.6.1-1.8 1.5-3.9.9-5.4-1.7-4.3-4-8.4-6.1-12.5-2.4-4.6-6.4-9.1-1.2-14.3.3-.3.3-1.3 0-1.7-4.7-6.5-9.5-13.1-14.4-19.5-1.2-1.5-2.9-3.7-4.4-3.7-6.7.1-13.4.8-20.1 1.3-.7.1-1.6.2-1.9.6-7.1 9.1-14 18.3-21.1 27.4-1.3 1.7-2.9 3.4-4.3 5 1.7.6 3.3 1.1 4.8 1.7.6.2 1.3.5 1.6 1 .2.3-.1 1.1-.4 1.5-2 2.6-4.1 5.2-6.1 7.8-4.3 5.3-8.7 10.5-13 15.9-.8 1-1.5 2.4-1.6 3.6-.2 5.4-.1 10.7-.1 16.1 0 1.5-.7 3.6.1 4.5 2.4 3 5.3 5.5 7.9 8.2 1.6 1.7 3 3.5 4.6 5.5-2.6.2-4.5.3-6.4.4h-3.7c-4.8-1.4-9.8-2.5-14.5-4.3-3.5-1.4-7.8-2.5-8-7.7-.1-2.1-.2-4.3-.4-6.7-1 1.1-1.7 2.1-2.6 2.9-.3.3-1 .4-1.3.2-1.9-1.1-3.7-2.2-5.5-3.4-1.7-1.1-4.5-1.6-3.5-4.5 2.3-6.5 6.4-11.6 12.7-14.9.6-.3 1.3-.9 1.6-1.5 3.9-8.2 7.8-16.4 11.8-24.6.7-1.5.4-4.5 3.8-3.8.2.1 1.2-3.1 1.8-4.9-2.8 1.5-5 2.9-7.4 3.9-7.4 3-14.7 6.4-23.1 5.6-8.5-.7-16.2-3.4-23.2-8-9.9-6.7-14.2-17-17.5-27.9-.5-1.7-.5-5.1-3.5-1.6-.1.2-.4.2-.6.3-2.5 1.7-5.4 3-6 6.5-.4 2.3-1 4.6-1.5 7-2.9 13.2-4.2 26.4-2.5 39.9 1.7 13.1 9.2 21.3 21 26.3 2.4 1 4.9 1.9 7.5 2.9-2.1.9-3.9 1.9-5.8 2.3-10.2 2.5-20.5 4.9-30.8 7.1-1.9.4-4.9.7-5.9-.3-6.4-6.5-8.9-14.8-8.3-23.7.7-9.6 2.1-19.2 3.9-28.6 2.2-11.5 6.1-22.5 11.7-32.9.7-1.3 2-3.1 1.6-4.1-1.8-4.6-4.5-8.9-6.2-13.6-2-5.7-4.2-11.6-1.2-17.8.1-.1-.3-.5-.5-.8 7.6.7 12.8 5.3 17.7 10.2-1.3-8.5-2.6-17.2-3.9-25.8 0-.3-.2-.7-.4-.9-6.7-5.5-13.3-11.2-17-19.2-2.6-5.7-4.3-11.8-6.3-17.7-.6-1.6.2-3.4-2.2-4.8-5.9-3.5-10.3-8.6-10.3-16 0-1.8 1.2-5 2.2-5.1 8.3-1.2 16.4-.1 23.8 4.2 2.4 1.4 4.9 2.7 8.1 4.4-.4-8.8-.8-16.2-1.2-23.6-4.2.9-8.6.9-11.5-2-3.3-3.3-5.4-7.8-7.9-11.8-1.1-1.7-2-3.6-3.5-6.4-3.8 10.3-7.4 19.9-10.8 29.1-.3-.6-1.1-1.7-1.5-2.9-3.5-10-2.8-20.2-1.1-30.3 1.2-7.4 4.3-14.6 3.1-22.4-.2-1.1.2-2.3.3-3.4-22.1 17.6-38.8 38.4-42.9 67.4-4 28-2.8 54.8 13.5 79.1-36.3-13.8-53-48.6-58.3-84.1-3 8-15 16.3-22.4 16.6v-.2c2.1-2.9 11.1-10.6 7-30.2-1.3-10.7-4.1-21.2-5.1-31.9-1-10.9-1-21.9-.5-32.9.3-11.6 3.8-22.7 8.6-33.2 5.7-12.5 13.5-23.8 23-33.6 5.6-5.8 11.9-11 18.2-16.1 8.6-6.8 17.7-12.9 28.2-16.5 5.1-1.9 10.4-3 15.7-4.5zm96.4 221.9c-.4.9-1.2 2-1.1 3 .5 7.6 1.2 15.2 2 22.7.2 2.1 0 4.8 3.3 5.5 3.3.7 6.6 1.8 9.9 2.6.3.1.9-.1 1.1-.4 3.8-4.8 7.5-9.6 10.9-14-8.4-6.1-17.1-12.6-26.1-19.4zm-23.1-42.5v6.3c1.9-2 3.6-3.9 5.3-5.7-1.7-.2-3.5-.4-5.3-.6z" />
    </svg>
  </div>
</div>
```

Remarquez que l'arrière-plan se déplace, Alice tourne et sa couleur change avec un décalage par rapport à sa rotation. Nous allons nous concentrer uniquement sur Alice pour ce tutoriel. Vous pouvez consulter le code source complet en cliquant sur «&nbsp;Play&nbsp;» dans le bloc de code. Voici le CSS simplifié qui contrôle l'animation d'Alice&nbsp;:

```css live-sample___animations_css_version
#alice {
  animation: alice-tumbling infinite 3s linear;
}

@keyframes alice-tumbling {
  0% {
    color: black;
    transform: rotate(0) translate3d(-50%, -50%, 0);
  }
  30% {
    color: #431236;
  }
  100% {
    color: black;
    transform: rotate(360deg) translate3d(-50%, -50%, 0);
  }
}
```

```css hidden live-sample___animations_css_version
#tunnel {
  animation: tunnel-fly 1s linear infinite;
}

@keyframes tunnel-fly {
  100% {
    transform: translate3d(0, -300px, 0);
  }
}
```

```css hidden live-sample___animations_css_version live-sample___animations_api_version
#alice {
  color: #431236;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 0 0;
  transform: rotate(0) translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  will-change: transform, color;
}

path {
  fill: currentColor;
}

#tunnel {
  background:
    url("/shared-assets/images/examples/web-animations/bg-tunnel-border-left.svg")
      repeat-y,
    url("/shared-assets/images/examples/web-animations/bg-tunnel-border-right.svg")
      repeat-y 100% 100%,
    url("/shared-assets/images/examples/web-animations/bg-tunnel-specks.png"),
    #6c373f;
  margin: 0 auto;
  height: calc(100% + 300px);
  width: 60%;
  min-width: 400px;
  backface-visibility: hidden;
  will-change: transform;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background: black;
}

html,
body {
  height: 100%;
}
```

Cela change la couleur d'Alice et la rotation de sa transformation sur 3 secondes à un rythme constant (<i lang="en">linear</i>) et boucle indéfiniment. Dans le bloc {{cssxref("@keyframes")}}, on voit qu'à 30&nbsp;% de chaque boucle (environ 0,9s), la couleur d'Alice passe du noir à un bordeaux profond, puis revient au noir à la fin de la boucle.

### Transposer en JavaScript

Essayons maintenant de créer la même animation avec l'API Web Animations.

#### Représenter les images-clés

La première chose à faire est de créer un [objet Keyframe](/fr/docs/Web/API/Web_Animations_API/Keyframe_Formats) correspondant à notre bloc {{cssxref("@keyframes")}} en CSS&nbsp;:

```js live-sample___animations_api_version
const aliceTumbling = [
  { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
];
```

Ici, nous utilisons un tableau contenant plusieurs objets. Chaque objet représente une clé de l'animation CSS d'origine. Cependant, contrairement au CSS, l'API Web Animations n'a pas besoin qu'on lui indique explicitement les pourcentages le long de l'animation auxquels chaque clé doit apparaître. Elle divisera automatiquement l'animation en parts égales en fonction du nombre de clés fourni. Cela signifie qu'un objet d'images-clés à trois entrées jouera la clé du milieu à 50&nbsp;% de chaque boucle, sauf indication contraire.

Quand on veut fixer explicitement le décalage d'une clé par rapport aux autres, on peut spécifier un <i lang="en">offset</i> directement dans l'objet, séparé de la déclaration par une virgule. Dans l'exemple ci-dessus, pour s'assurer que la couleur d'Alice change à 30&nbsp;% (et non 50&nbsp;%), on lui donne `offset: 0.3`.

Actuellement, il faut fournir au moins deux images-clés (représentant les états de début et de fin de la séquence). Si la liste ne contient qu'une seule entrée, {{domxref("Element.animate()")}} peut lever une exception {{domxref("DOMException")}} de type `NotSupportedError` dans certains navigateurs, en attendant leur mise à jour.

En résumé&nbsp;: les clés sont espacées uniformément par défaut, sauf si vous définissez un <i lang="en">offset</i> sur une clé. Pratique.

#### Représenter les propriétés de minutage

Nous devons aussi créer un objet de propriétés de minutage correspondant aux valeurs de l'animation d'Alice&nbsp;:

```js live-sample___animations_api_version
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

On remarque quelques différences avec la représentation CSS&nbsp;:

- La durée est en millisecondes plutôt qu'en secondes — `3000` et non `3s`. Comme {{domxref("Window.setTimeout", "setTimeout()")}} et {{domxref("Window.requestAnimationFrame()")}}, l'API Web Animations ne prend que des millisecondes.
- On utilise `iterations` et non `iteration-count`.

> [!NOTE]
> Il existe de petites différences de terminologie entre les animations CSS et les animations Web. Par exemple, les Web Animations n'utilisent pas la chaîne `'infinite'`, mais le mot-clé JavaScript `Infinity`. Et au lieu de `timing-function`, on utilise `easing`. Nous ne listons pas de valeur `easing` ici car, contrairement aux animations CSS où la valeur par défaut d'{{cssxref("animation-timing-function")}} est `ease`, l'API Web Animations utilise par défaut `linear` — ce qui convient ici.

#### Assembler les pièces

Il est temps d'assembler le tout avec la méthode {{domxref("Element.animate()")}}&nbsp;:

```js live-sample___animations_api_version
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Et voilà&nbsp;: l'animation démarre&nbsp;:

```js hidden live-sample___animations_api_version
document
  .getElementById("tunnel")
  .animate(
    [
      { transform: "translate3d(0, 0, 0)" },
      { transform: "translate3d(0, -300px, 0)" },
    ],
    {
      duration: 1000,
      iterations: Infinity,
    },
  );
```

{{EmbedLiveSample("animations_api_version", "", 300)}}

La méthode `animate()` peut être appelée sur n'importe quel élément du DOM qui peut être animé avec CSS. Elle peut s'écrire de plusieurs façons. Au lieu de créer des objets séparés pour les images-clés et le minutage, on peut passer leurs valeurs directement, ainsi&nbsp;:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
  ],
  {
    duration: 3000,
    iterations: Infinity,
  },
);
```

Mieux encore, si l'on ne veut préciser que la durée de l'animation, sans ses itérations (par défaut, une animation s'exécute une fois), on peut passer uniquement la durée en millisecondes&nbsp;:

```js
document.getElementById("alice").animate(
  [
    { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
    { color: "#431236", offset: 0.3 },
    { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
  ],
  3000,
);
```

## Contrôler la lecture avec play(), pause(), reverse() et updatePlaybackRate()

On peut écrire des animations CSS avec l'API Web Animations, mais là où l'API est vraiment utile, c'est pour manipuler la lecture. L'API offre plusieurs méthodes pour contrôler la lecture. Observons la mise en pause et la lecture dans l'exemple «&nbsp;Suis le lapin blanc&nbsp;»&nbsp;:

Dans cet exemple, le lapin blanc a une animation qui le fait descendre dans un terrier. Elle n'est déclenchée que lorsque l'utilisateur·ice clique dessus.

```html hidden live-sample___follow_the_white_rabbit
<div class="wrapper">
  <div class="page">
    <div class="background"></div>
    <div id="rabbit">Click the rabbit's ears!</div>
    <div class="foreground"></div>
    <p>
      She was just in time to see him pop down a hole between a great tree's
      roots.
    </p>
  </div>
</div>
```

```css hidden live-sample___follow_the_white_rabbit
#rabbit {
  background: url("/shared-assets/images/examples/web-animations/park5_rabbit.png")
    0 0 / 100% 100%;
  cursor: pointer;
  position: absolute;
  top: 15%;
  left: 60%;
  width: 14.64844%;
  padding-top: 31.00586%;
}

body {
  background: black;
}
.wrapper {
  max-width: 133.33vh;
  margin: 0 auto;
}
.page {
  background: #431236;
  height: 0;
  overflow: hidden;
  padding-top: 75%;
  position: relative;
  text-indent: 100%;
  white-space: nowrap;
}

.foreground {
  height: 100%;
  background: url("/shared-assets/images/examples/web-animations/bg_park5_2.png")
    no-repeat 100% 100% / 100% auto;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none;
}

.background {
  background: url("/shared-assets/images/examples/web-animations/bg_park5_1.png")
    no-repeat 0 0 / 100% auto;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
```

### Mettre en pause et lire des animations

Nous pouvons animer le lapin avec `animate()` comme d'habitude&nbsp;:

```js live-sample___follow_the_white_rabbit
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownAnimation = whiteRabbit.animate(
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);
```

La méthode {{domxref("Element.animate()")}} démarre immédiatement après son appel. Pour éviter que le gâteau ne se «&nbsp;mange&nbsp;» tout seul avant que la personne n'ait le temps de cliquer, on appelle {{domxref("Animation.pause()")}} juste après sa définition&nbsp;:

```js live-sample___follow_the_white_rabbit
rabbitDownAnimation.pause();
```

> [!NOTE]
> Alternativement, on peut définir `rabbitDownAnimation` avec le constructeur {{domxref("Animation/Animation", "Animation()")}}, qui ne commence pas à jouer avant l'appel à `play()`.

Nous pouvons ensuite utiliser {{domxref("Animation.play()")}} pour lancer l'animation quand on le souhaite. Plus précisément, nous voulons la lier à une action de clic. On y parvient ainsi&nbsp;:

```js live-sample___follow_the_white_rabbit
whiteRabbit.addEventListener("click", downHeGoes);
whiteRabbit.addEventListener("touchstart", downHeGoes);

function downHeGoes(event) {
  whiteRabbit.removeEventListener("click", downHeGoes);
  whiteRabbit.removeEventListener("touchstart", downHeGoes);

  rabbitDownAnimation.play();
}
```

Quand une personne clique ou touche le lapin, nous pouvons appeler `downHeGoes` pour faire jouer toutes les animations.

{{EmbedLiveSample("follow_the_white_rabbit", "", 400)}}

### Autres méthodes utiles

Outre la mise en pause et la lecture, on peut utiliser les méthodes suivantes sur une animation&nbsp;:

- {{domxref("Animation.finish()")}} saute à la fin de l'animation.
- {{domxref("Animation.cancel()")}} annule l'animation et supprime ses effets.
- {{domxref("Animation.reverse()")}} définit le taux de lecture ({{domxref("Animation.playbackRate")}}) à une valeur négative afin qu'elle se déroule à l'envers.

Regardons d'abord `playbackRate`&nbsp;: une valeur négative fait jouer une animation à l'envers.
Dans [De l'autre côté du miroir](https://fr.wikipedia.org/wiki/De_l%27autre_c%C3%B4t%C3%A9_du_miroir), Alice se rend dans un monde où elle doit courir pour rester sur place — et courir deux fois plus vite pour avancer. Dans l'exemple de la course de la Reine Rouge, Alice et la Reine Rouge courent pour rester sur place&nbsp;:

```html hidden live-sample___red_queen_race
<div class="wrapper">
  <div class="sky"></div>
  <div class="earth">
    <div id="red-queen-and-alice">
      <img
        id="red-queen-and-alice-sprite"
        src="/shared-assets/images/examples/web-animations/sprite_running-alice-queen_small.png"
        srcset="
          /shared-assets/images/examples/web-animations/sprite_running-alice-queen.png 2x
        "
        alt="Alice et la Reine Rouge courent pour rester sur place." />
    </div>
  </div>
  <div class="scenery" id="foreground1">
    <img
      id="palm3"
      src="/shared-assets/images/examples/web-animations/palm3_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm3.png 2x"
      alt="" />
  </div>
  <div class="scenery" id="foreground2">
    <img
      id="bush"
      src="/shared-assets/images/examples/web-animations/bush_small.png"
      srcset="/shared-assets/images/examples/web-animations/bush.png 2x"
      alt="" />
    <img
      id="w_rook_upright"
      src="/shared-assets/images/examples/web-animations/w_rook_upright_small.png"
      srcset="
        /shared-assets/images/examples/web-animations/w_rook_upright.png 2x
      "
      alt="" />
  </div>
  <div class="scenery" id="background1">
    <img
      id="r_pawn_upright"
      src="/shared-assets/images/examples/web-animations/r_pawn_upright_small.png"
      srcset="
        /shared-assets/images/examples/web-animations/r_pawn_upright.png 2x
      "
      alt="" />
    <img
      id="w_rook"
      src="/shared-assets/images/examples/web-animations/w_rook_small.png"
      srcset="/shared-assets/images/examples/web-animations/w_rook.png 2x"
      alt="" />
    <img
      id="palm1"
      src="/shared-assets/images/examples/web-animations/palm1_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm1.png 2x"
      alt="" />
  </div>
  <div class="scenery" id="background2">
    <img
      id="r_pawn"
      src="/shared-assets/images/examples/web-animations/r_pawn_small.png"
      srcset="/shared-assets/images/examples/web-animations/r_pawn.png 2x"
      alt="" />

    <img
      id="r_knight"
      src="/shared-assets/images/examples/web-animations/r_knight_small.png"
      srcset="/shared-assets/images/examples/web-animations/r_knight.png 2x"
      alt="" />
    <img
      id="palm2"
      src="/shared-assets/images/examples/web-animations/palm2_small.png"
      srcset="/shared-assets/images/examples/web-animations/palm2.png 2x"
      alt="" />
  </div>
</div>
```

```css hidden live-sample___red_queen_race
* {
  user-select: none;
}

img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.scenery {
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
}

#foreground1,
#foreground2 {
  z-index: 1;
}

#foreground2,
#background2 {
  transform: translateX(100%);
}

#palm3 {
  top: 0;
  left: 10%;
}

#w_rook_upright {
  top: 30%;
  left: 75%;
}

#r_pawn {
  top: 10%;
  left: 15%;
}

#w_rook {
  top: 10%;
  left: 80%;
}

#r_pawn_upright {
  top: 5%;
  left: 30%;
}

#r_knight {
  top: 0;
  left: 70%;
}

#palm2 {
  top: -15%;
  left: 90%;
}

#palm1 {
  top: -15%;
  left: 40%;
}

#bush {
  top: 55%;
  left: 20%;
}

#red-queen-and-alice {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  width: 80%;
  max-width: 450px;
  z-index: 1;
}

#red-queen-and-alice::before {
  content: " ";
  display: block;
  padding-top: 87%;
}

#red-queen-and-alice img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.sky,
.earth {
  position: absolute;
  left: 0;
  height: 50vh;
  width: 100%;
}

.earth {
  background: #eb125d
    url("/shared-assets/images/examples/web-animations/bg_earth.jpg") repeat-x 0
    0 / 100% auto;
  bottom: 0;
}

.sky {
  background: #246e89
    url("/shared-assets/images/examples/web-animations/bg_sky.jpg") repeat-x
    100% 100% / auto 100%;
  top: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
```

```js hidden live-sample___red_queen_race
const background1 = document.getElementById("background1");
const background2 = document.getElementById("background2");

const foreground1 = document.getElementById("foreground1");
const foreground2 = document.getElementById("foreground2");

const redQueenAliceSprite = document.getElementById(
  "red-queen-and-alice-sprite",
);

/* Background animations */
const sceneryFrames = [
  { transform: "translateX(100%)" },
  { transform: "translateX(-100%)" },
];

const sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity,
};

const sceneryTimingForeground = {
  duration: 12000,
  iterations: Infinity,
};

const background1Movement = background1.animate(
  sceneryFrames,
  sceneryTimingBackground,
);
background1Movement.currentTime =
  background1Movement.effect.getComputedTiming().duration / 2;

const background2Movement = background2.animate(
  sceneryFrames,
  sceneryTimingBackground,
);

const foreground1Movement = foreground1.animate(
  sceneryFrames,
  sceneryTimingForeground,
);
foreground1Movement.currentTime =
  foreground1Movement.effect.getComputedTiming().duration / 2;

const foreground2Movement = foreground2.animate(
  sceneryFrames,
  sceneryTimingForeground,
);

const spriteFrames = [
  { transform: "translateY(0)" },
  { transform: "translateY(-100%)" },
];

const redQueenAlice = redQueenAliceSprite.animate(spriteFrames, {
  easing: "steps(7, end)",
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity,
});
```

{{EmbedLiveSample("red_queen_race", "", 400)}}

Comme les jeunes enfants se fatiguent vite, contrairement aux pièces d'échecs automates, Alice ralentit constamment. On peut le faire en appliquant une décroissance à son `playbackRate`. On utilise `updatePlaybackRate()` plutôt que d'affecter directement `playbackRate` afin d'obtenir une mise à jour fluide&nbsp;:

```js live-sample___red_queen_race
setInterval(() => {
  // S'assurer que le taux de lecture ne descend jamais sous 0.4
  if (redQueenAlice.playbackRate > 0.4) {
    redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 0.9);
  }
  adjustBackgroundPlayback();
}, 1000);
```

Mais si on les encourage par un clic ou un tap, iels accélèrent en multipliant leur `playbackRate`&nbsp;:

```js live-sample___red_queen_race
function goFaster() {
  // Un clic ou un tap sur l'écran les fait accélérer
  redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 1.1);
  adjustBackgroundPlayback();
}

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Les éléments d'arrière-plan ont aussi des `playbackRate` impactés lors d'un clic ou d'un tap. Leurs taux de lecture dérivent de celui d'Alice, comme ci-dessous. Que se passe-t-il si vous faites courir Alice et la Reine Rouge deux fois plus vite&nbsp;? Et si vous les laissez ralentir&nbsp;?

```js live-sample___red_queen_race
/* Alice se fatigue si vite !
  Toutes les quelques secondes, on réduit son taux de lecture pour la ralentir un peu.
*/
const sceneries = [
  foreground1Movement,
  foreground2Movement,
  background1Movement,
  background2Movement,
];

function adjustBackgroundPlayback() {
  // Si Alice et la Reine Rouge courent à une vitesse comprise entre 0.8 et 1.2,
  // l'arrière-plan ne bouge pas.
  // Mais si elles passent sous 0.8, l'arrière-plan glisse en arrière
  if (redQueenAlice.playbackRate < 0.8) {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(-redQueenAlice.playbackRate / 2);
    });
  } else if (redQueenAlice.playbackRate > 1.2) {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(redQueenAlice.playbackRate / 2);
    });
  } else {
    sceneries.forEach((anim) => {
      anim.updatePlaybackRate(0);
    });
  }
}
adjustBackgroundPlayback();
```

## Rendre persistants les styles d'animation

Lorsqu'on anime des éléments, un cas d'usage courant consiste à conserver l'état final de l'animation après sa fin. Une méthode parfois employée consiste à régler le [mode de remplissage](/fr/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) sur `forwards`. Cependant, il n'est pas recommandé d'utiliser les modes de remplissage pour faire persister indéfiniment l'effet d'une animation, pour deux raisons&nbsp;:

- Le navigateur doit conserver l'état de l'animation tant qu'elle reste active, donc l'animation continue de consommer des ressources bien qu'elle ne s'anime plus. Notez que cela est en partie atténué par la [suppression automatique des animations avec remplissage](#suppression_automatique_des_animations_avec_remplissage) par le navigateur.
- Les styles appliqués par les animations ont une [priorité plus élevée dans la cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) que les styles spécifiés, ce qui peut les rendre difficiles à surcharger au besoin.

Une meilleure approche consiste à utiliser {{domxref("Animation.commitStyles()")}}. Cette méthode écrit les valeurs calculées des styles courants de l'animation dans l'attribut [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style) de son élément cible, après quoi l'élément peut être restylé normalement.

## Suppression automatique des animations avec remplissage

Il est possible de déclencher un grand nombre d'animations sur un même élément. Si elles sont indéfinies (c'est-à-dire remplies vers l'avant), cela peut entraîner une liste d'animations énorme, pouvant créer une fuite mémoire. Pour cette raison, les navigateurs suppriment automatiquement les animations avec remplissage après qu'elles ont été remplacées par de nouvelles animations, sauf si la·le développeur·euse indique explicitement de les conserver.

Les animations sont supprimées lorsque toutes les conditions suivantes sont réunies&nbsp;:

- L'animation est avec remplissage (sa propriété `fill` est `forwards` si elle joue en avant, `backwards` si elle joue en arrière, ou `both`).
- L'animation est terminée. (Remarquez qu'à cause de `fill`, elle est toujours en vigueur.)
- La chronologie de l'animation est monotone croissante. (C'est toujours vrai pour {{domxref("DocumentTimeline")}}&nbsp;; d'autres chronologies comme {{cssxref("scroll-timeline")}} peuvent reculer.)
- L'animation n'est pas contrôlée par un balisage déclaratif comme le CSS.
- Chaque effet de style de l'{{domxref("AnimationEffect")}} de l'animation est surchargé par une autre animation qui satisfait aussi toutes les conditions ci-dessus. (Typiquement, lorsque deux animations définissent la même propriété de style du même élément, la plus récente remplace l'autre.)

Les quatre premières conditions garantissent que, sans intervention de JavaScript, l'effet de l'animation ne changera jamais et ne se terminera jamais. La dernière condition garantit que l'animation n'affecte plus le style d'aucun élément&nbsp;: elle a été totalement remplacée.

Quand l'animation est supprimée automatiquement, l'événement {{domxref("Animation/remove_event", "remove")}} est déclenché.

Pour empêcher le navigateur de supprimer automatiquement des animations, appelez la méthode {{domxref("Animation.persist", "persist()")}} de l'animation.

La propriété {{domxref("Animation.replaceState", "replaceState")}} de l'animation vaut `removed` si l'animation a été supprimée, `persisted` si vous avez appelé {{domxref("Animation.persist", "persist()")}} sur l'animation, ou `active` sinon.

## Extraire des informations des animations

Imaginez d'autres usages de <i lang="en">playbackRate</i>, comme améliorer l'accessibilité pour les personnes souffrant de troubles vestibulaires en leur permettant de ralentir les animations sur tout un site. Impossible en CSS sans recalculer les durées dans chaque règle, mais avec l'API Web Animations, on peut utiliser {{domxref("Document.getAnimations")}} pour parcourir chaque animation de la page et diviser par deux leur <i lang="en">playbackRate</i>, comme suit&nbsp;:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

Avec l'API Web Animations, il suffit de changer une seule propriété.

Autre chose difficile à réaliser avec les seules animations CSS&nbsp;: créer des dépendances basées sur des valeurs fournies par d'autres animations. Par exemple, dans l'exemple de jeu «&nbsp;Alice grandit et rétrécit&nbsp;», vous avez peut-être remarqué quelque chose d'étrange concernant la durée du gâteau&nbsp;:

```js
document.getElementById("eat-me-sprite").animate([], {
  duration: aliceChange.effect.getComputedTiming().duration / 2,
});
```

Pour comprendre ce qui se passe ici, regardons l'animation d'Alice&nbsp;:

```js
const aliceChange = document
  .getElementById("alice")
  .animate(
    [
      { transform: "translate(-50%, -50%) scale(.5)" },
      { transform: "translate(-50%, -50%) scale(2)" },
    ],
    {
      duration: 8000,
      easing: "ease-in-out",
      fill: "both",
    },
  );
```

L'animation d'Alice la fait passer de la moitié de sa taille à deux fois sa taille sur 8 secondes. Puis nous la mettons en pause&nbsp;:

```js
aliceChange.pause();
```

Si nous l'avions laissée en pause au début, elle commencerait à la moitié de sa taille finale, comme si elle avait déjà bu toute la bouteille. Nous voulons placer la «&nbsp;tête de lecture&nbsp;» de son animation au milieu, pour qu'elle soit déjà à mi-chemin. Nous pourrions le faire en réglant {{domxref("Animation.currentTime")}} sur 4 secondes, ainsi&nbsp;:

```js
aliceChange.currentTime = 4000;
```

Mais pendant le travail sur cette animation, nous pourrions changer souvent la durée. Mieux vaut donc régler `currentTime` de manière dynamique, pour ne pas avoir à modifier deux endroits à la fois. C'est possible en se référant à la propriété {{domxref("Animation.effect")}} d'<i lang="en">aliceChange</i>, qui renvoie un objet contenant tous les détails de l'effet ou des effets actifs sur Alice&nbsp;:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` nous permet d'accéder aux images-clés et aux propriétés de minutage de l'animation — `aliceChange.effect.getComputedTiming()` pointe vers l'objet de minutage d'Alice — il contient sa {{domxref("KeyframeEffect.KeyframeEffect", "duration")}}. On peut la diviser par deux pour obtenir le milieu de la chronologie et régler Alice à une hauteur normale. On peut alors inverser et lire son animation dans un sens comme dans l'autre pour la faire grandir ou rapetisser.

On peut faire de même pour fixer les durées du gâteau et de la bouteille&nbsp;:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Les trois animations dépendent maintenant d'une seule durée, que nous pouvons modifier facilement en un seul endroit.

On peut aussi utiliser l'API Web Animations pour déterminer le temps courant d'une animation. La partie se termine lorsque vous n'avez plus de gâteau à manger ou que la bouteille est vide. La vignette présentée dépend de l'avancement d'Alice dans son animation&nbsp;: a-t-elle trop grandi et ne peut-elle plus entrer par la petite porte, ou est-elle trop petite et ne peut-elle pas atteindre la clé pour ouvrir la porte&nbsp;? Nous pouvons déterminer si elle est du côté «&nbsp;grand&nbsp;» ou «&nbsp;petit&nbsp;» en prenant {{domxref("Animation.currentTime", "currentTime")}} et en le divisant par `activeDuration`&nbsp;:

```js
const endGame = () => {
  // obtenir la position de la tête de lecture sur la chronologie d'Alice
  const alicePlayhead = aliceChange.currentTime;
  const aliceTimeline = aliceChange.effect.getComputedTiming().activeDuration;

  // arrêter l'animation d'Alice et les autres
  stopPlayingAlice();

  // selon le tiers dans lequel on se trouve
  const aliceHeight = alicePlayhead / aliceTimeline;

  if (aliceHeight <= 0.333) {
    // Alice a rapetissé !
    // …
  } else if (aliceHeight >= 0.666) {
    // Alice a grandi !
    // …
  } else {
    // Alice n'a pas changé de façon notable
    // …
  }
};
```

## Rappels et promesses

Les animations et transitions CSS ont leurs propres écouteurs d'événements, et c'est aussi possible avec l'API Web Animations&nbsp;:

- {{domxref("Animation/finish_event", "onfinish")}} est le gestionnaire de l'événement `finish` et peut être déclenché manuellement avec {{domxref("Animation/finish", "finish()")}}.
- {{domxref("Animation/cancel_event", "oncancel")}} est le gestionnaire de l'événement `cancel` et peut être déclenché avec {{domxref("Animation.cancel", "cancel()")}}.

Ici, nous configurons les rappels pour le gâteau, la bouteille et Alice afin qu'iels déclenchent la fonction `endGame`&nbsp;:

```js
// Lorsque le gâteau ou la bouteille est terminé
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alice atteint la fin de son animation
aliceChange.onfinish = endGame;
```

Mieux encore, l'API Web Animations fournit aussi une promesse {{domxref("Animation.finished", "finished")}} qui se résout quand l'animation se termine, ou est rejetée si elle est annulée.

## Conclusion

Voilà les fonctionnalités de base de l'API Web Animations. Vous devriez désormais être prêt·e à «&nbsp;sauter dans le terrier du lapin&nbsp;» de l'animation dans le navigateur et à écrire vos propres expériences d'animation.

## Voir aussi

- [Suite complète de démos 'Alice au pays des merveilles' <sup>(angl.)</sup>](https://codepen.io/collection/nqNJvD) sur CodePen, à explorer, dupliquer et partager.
- [Animer sans se soucier avec Element.animate <sup>(angl.)</sup>](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016)&nbsp;: explique l'arrière-plan de l'API Web Animations et pourquoi elle est plus performante que d'autres méthodes d'animation Web.
