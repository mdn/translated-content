---
title: Usar la API de Animaciones Web
slug: Web/API/Web_Animations_API/Using_the_Web_Animations_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Web Animations")}}

La API de Animaciones Web nos permite crear animaciones y controlar su reproducción con JavaScript. Este artículo te pondrá en el buen camino con demostraciones y tutoriales divertidos protagonizados por Alicia en el país de las maravillas.

## Conoce la API de Animaciones Web

La [API de Animaciones Web](/es/docs/Web/API/Web_Animations_API) abre el motor de animación del navegador a los desarrolladores y a su manipulación con JavaScript. Esta API se diseñó para servir de base tanto a las implementaciones de las [animaciones CSS](/es/docs/Web/CSS/Guides/Animations) como a las de las [transiciones CSS](/es/docs/Web/CSS/Guides/Transitions), y deja la puerta abierta a futuros efectos de animación. Es una de las formas más eficientes de animar en la web, ya que permite que el navegador haga sus propias optimizaciones internas sin trucos, imposiciones ni {{domxref("Window.requestAnimationFrame()")}}.

Con la API de Animaciones Web, podemos llevar las animaciones interactivas de las hojas de estilo a JavaScript, separando la presentación del comportamiento. Ya no necesitamos depender de técnicas que recargan el DOM, como escribir propiedades CSS y añadir clases a los elementos para controlar la dirección de la reproducción. Y, a diferencia del CSS puro y declarativo, JavaScript también nos permite establecer dinámicamente valores, desde propiedades hasta duraciones. Para crear bibliotecas de animación personalizadas y animaciones interactivas, la API de Animaciones Web puede ser la herramienta perfecta. ¡Veamos lo que puede hacer!

Esta página contiene una serie de ejemplos que usan la [API de Animaciones Web](/es/docs/Web/API/Web_Animations_API), inspirados en [Alicia en el país de las maravillas](https://es.wikipedia.org/wiki/Alicia_en_el_pa%C3%ADs_de_las_maravillas). Estos ejemplos los creó y comparte amablemente [Rachel Nabors](https://nearestnabors.com/). La [serie completa de ejemplos](https://codepen.io/collection/nqNJvD) está disponible en CodePen; aquí presentamos los que son relevantes para nuestra documentación.

## Escribir animaciones CSS con la API de Animaciones Web

Una de las formas más conocidas de empezar a aprender la API de Animaciones Web es partir de algo con lo que la mayoría de los desarrolladores web ya han trabajado: las animaciones CSS. Las animaciones CSS tienen una sintaxis conocida que se presta muy bien para hacer demostraciones.

### La versión en CSS

Esta es una animación de caída escrita en CSS, que muestra a Alicia cayendo por la madriguera del conejo que lleva al país de las maravillas:

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

Observa que el fondo se mueve, Alicia gira y su color cambia con un desfase respecto a su giro. En este tutorial nos vamos a centrar solo en Alicia. Puedes ver el código fuente completo haciendo clic en "Play" en el bloque de código. Este es el CSS simplificado que controla la animación de Alicia:

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

Esto cambia el color de Alicia y la rotación de su transformación a lo largo de 3 segundos, a un ritmo constante (lineal), y se repite de forma infinita. En el bloque {{cssxref("@keyframes")}} podemos ver que, al 30 % de cada ciclo (hacia los 0,9 segundos), el color de Alicia cambia de negro a un burdeos intenso, y vuelve al negro al final del ciclo.

### Pasarla a JavaScript

Ahora intentemos crear la misma animación con la API de Animaciones Web.

#### Representar los fotogramas clave

Lo primero que necesitamos es crear un [objeto de fotogramas clave](/es/docs/Web/API/Web_Animations_API/Keyframe_Formats) que corresponda a nuestro bloque {{cssxref("@keyframes")}} de CSS:

```js live-sample___animations_api_version
const aliceTumbling = [
  { transform: "rotate(0) translate3d(-50%, -50%, 0)", color: "black" },
  { color: "#431236", offset: 0.3 },
  { transform: "rotate(360deg) translate3d(-50%, -50%, 0)", color: "black" },
];
```

Aquí usamos un array que contiene varios objetos. Cada objeto representa un fotograma clave del CSS original. Sin embargo, a diferencia de CSS, a la API de Animaciones Web no hace falta indicarle explícitamente en qué porcentaje de la animación debe aparecer cada fotograma clave. La API divide automáticamente la animación en partes iguales según el número de fotogramas clave que le des. Esto significa que un objeto de fotogramas clave con tres fotogramas reproducirá el del medio al 50 % de cada ciclo de la animación, salvo que se indique lo contrario.

Cuando queremos establecer explícitamente el desfase de un fotograma clave respecto a los demás, podemos especificar un desfase directamente en el objeto, separado de la declaración por una coma. En el ejemplo anterior, para asegurarnos de que el color de Alicia cambie al 30 % (y no al 50 %), le damos `offset: 0.3`.

Por ahora, se deben especificar al menos dos fotogramas clave (que representan el estado inicial y el final de la secuencia de animación). Si tu lista de fotogramas clave tiene una sola entrada, {{domxref("Element.animate()")}} puede lanzar un {{domxref("DOMException")}} `NotSupportedError` en algunos navegadores hasta que se actualicen.

En resumen, los fotogramas clave se distribuyen de forma uniforme de manera predeterminada, salvo que especifiques un desfase en alguno. Práctico, ¿verdad?

#### Representar las propiedades de temporización

También tendremos que crear un objeto con las propiedades de temporización que corresponda a los valores de la animación de Alicia:

```js live-sample___animations_api_version
const aliceTiming = {
  duration: 3000,
  iterations: Infinity,
};
```

Notarás algunas diferencias con respecto a cómo se representan los valores equivalentes en CSS:

- Para empezar, la duración se indica en milisegundos y no en segundos: 3000, no 3s. Al igual que {{domxref("Window.setTimeout", "setTimeout()")}} y {{domxref("Window.requestAnimationFrame()")}}, la API de Animaciones Web solo acepta milisegundos.
- La otra cosa que notarás es que se usa `iterations`, no `iteration-count`.

> [!NOTE]
> Hay varias pequeñas diferencias entre la terminología de las animaciones CSS y la de Web Animations. Por ejemplo, Web Animations no usa la cadena `"infinite"`, sino la palabra clave de JavaScript `Infinity`. Y en lugar de `timing-function` usamos `easing`. Aquí no indicamos ningún valor de `easing` porque, a diferencia de las animaciones CSS, donde la {{cssxref("animation-timing-function")}} predeterminada es `ease`, en la API de Animaciones Web la función de aceleración predeterminada es `linear`, que es justo lo que queremos.

#### Juntar las piezas

Ahora es el momento de juntar ambos con el método {{domxref("Element.animate()")}}:

```js live-sample___animations_api_version
document.getElementById("alice").animate(aliceTumbling, aliceTiming);
```

Y listo: la animación empieza a reproducirse:

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

El método `animate()` se puede llamar en cualquier elemento del DOM que se pueda animar con CSS. Y se puede escribir de varias formas. En lugar de crear objetos para los fotogramas clave y las propiedades de temporización, podríamos pasar sus valores directamente, así:

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

Es más, si solo quisiéramos especificar la duración de la animación y no sus iteraciones (de forma predeterminada, las animaciones se repiten una vez), podríamos pasar solo los milisegundos:

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

## Controlar la reproducción con play(), pause(), reverse() y updatePlaybackRate()

Aunque podemos escribir animaciones CSS con la API de Animaciones Web, donde la API resulta realmente útil es en la manipulación de la reproducción de la animación. La API de Animaciones Web ofrece varios métodos útiles para controlar la reproducción. Veamos cómo pausar y reproducir animaciones en el ejemplo "Sigue al conejo blanco":

En este ejemplo, el conejo blanco tiene una animación que lo hace bajar por una madriguera. Solo se activa cuando el usuario hace clic en él.

```html hidden live-sample___follow_the_white_rabbit
<div class="wrapper">
  <div class="page">
    <div class="background"></div>
    <div id="rabbit">¡Haz clic en las orejas del conejo!</div>
    <div class="foreground"></div>
    <p>
      Llegó justo a tiempo para ver cómo se metía en una madriguera entre las
      raíces de un gran árbol.
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

### Pausar y reproducir animaciones

Podemos animar al conejo con el método `animate()`, como siempre:

```js live-sample___follow_the_white_rabbit
const whiteRabbit = document.getElementById("rabbit");

const rabbitDownAnimation = whiteRabbit.animate(
  [{ transform: "translateY(0%)" }, { transform: "translateY(100%)" }],
  { duration: 3000, fill: "forwards" },
);
```

El método {{domxref("Element.animate()")}} se ejecuta inmediatamente después de llamarlo. Para evitar que el pastel se coma solo antes de que el usuario haya tenido la oportunidad de hacer clic en él, llamamos a {{domxref("Animation.pause()")}} justo después de definirlo, así:

```js live-sample___follow_the_white_rabbit
rabbitDownAnimation.pause();
```

> [!NOTE]
> También puedes definir `rabbitDownAnimation` con el constructor {{domxref("Animation/Animation", "Animation()")}}, que no empieza a reproducirse hasta que llamas a `play()`.

Ahora podemos usar el método {{domxref("Animation.play()")}} para ejecutarla cuando queramos. En concreto, queremos vincularla a una acción de clic. Podemos lograrlo así:

```js live-sample___follow_the_white_rabbit
whiteRabbit.addEventListener("click", downHeGoes);
whiteRabbit.addEventListener("touchstart", downHeGoes);

function downHeGoes(event) {
  whiteRabbit.removeEventListener("click", downHeGoes);
  whiteRabbit.removeEventListener("touchstart", downHeGoes);

  rabbitDownAnimation.play();
}
```

Cuando un usuario hace clic o toca al conejo con el dedo, ahora podemos llamar a `downHeGoes` para reproducir todas las animaciones.

{{EmbedLiveSample("follow_the_white_rabbit", "", 400)}}

### Otros métodos útiles

Además de pausar y reproducir, podemos usar los siguientes métodos de Animation:

- {{domxref("Animation.finish()")}} salta al final de la animación.
- {{domxref("Animation.cancel()")}} interrumpe la animación y elimina sus efectos.
- {{domxref("Animation.reverse()")}} establece la velocidad de reproducción de la animación ({{domxref("Animation.playbackRate")}}) en un valor negativo para que se reproduzca hacia atrás.

Veamos primero `playbackRate`: un `playbackRate` negativo hace que una animación se reproduzca al revés.
En [A través del espejo](https://es.wikipedia.org/wiki/A_trav%C3%A9s_del_espejo_y_lo_que_Alicia_encontr%C3%B3_all%C3%AD), Alicia viaja a un mundo donde tiene que correr para quedarse en el mismo sitio, ¡y correr el doble de rápido para avanzar! En el ejemplo de la carrera de la Reina Roja, Alicia y la Reina Roja corren para quedarse en el mismo sitio:

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
        alt="Alicia y la Reina Roja corriendo para quedarse en el mismo sitio." />
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

/* Animaciones del fondo */
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

Como los niños pequeños se cansan con facilidad, a diferencia de las piezas de ajedrez autómatas, Alicia va cada vez más despacio. Podemos lograrlo aplicando una disminución progresiva al `playbackRate` de su animación. Usamos `updatePlaybackRate()` en lugar de establecer `playbackRate` directamente, porque así la actualización es fluida:

```js live-sample___red_queen_race
setInterval(() => {
  // Asegurarse de que la velocidad de reproducción nunca baje de 0,4
  if (redQueenAlice.playbackRate > 0.4) {
    redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 0.9);
  }
  adjustBackgroundPlayback();
}, 1000);
```

Pero animarlas haciendo clic o tocando la pantalla hace que aceleren, porque se multiplica su `playbackRate`:

```js live-sample___red_queen_race
function goFaster() {
  // Pero puedes acelerarlas haciendo clic o tocando la pantalla.
  redQueenAlice.updatePlaybackRate(redQueenAlice.playbackRate * 1.1);
  adjustBackgroundPlayback();
}

document.addEventListener("click", goFaster);
document.addEventListener("touchstart", goFaster);
```

Los elementos del fondo también tienen un `playbackRate` que cambia al hacer clic o tocar. Sus velocidades de reproducción se derivan de la de Alicia, como se muestra a continuación. ¿Qué pasa si haces que Alicia y la Reina Roja corran el doble de rápido? ¿Y si dejas que vayan más despacio?

```js live-sample___red_queen_race
/* ¡Alicia se cansa con mucha facilidad!
  Cada pocos segundos, reducimos su velocidad de reproducción para que vayan un poco más lento.
*/
const sceneries = [
  foreground1Movement,
  foreground2Movement,
  background1Movement,
  background2Movement,
];

function adjustBackgroundPlayback() {
  // Si Alicia y la Reina Roja corren a una velocidad de 0,8–1,2,
  // el fondo no se mueve.
  // Pero si bajan de 0,8, el fondo se desliza hacia atrás
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

## Conservar los estilos de la animación

Al animar elementos, un caso de uso habitual es conservar el estado final de la animación una vez terminada. Un método que a veces se usa para esto es establecer el [modo de relleno](/es/docs/Web/API/KeyframeEffect/KeyframeEffect#fill) de la animación en `forwards`. Sin embargo, no se recomienda usar los modos de relleno para conservar el efecto de una animación de forma indefinida, por dos motivos:

- El navegador tiene que mantener el estado de la animación mientras sigue activa, así que la animación sigue consumiendo recursos aunque ya no esté animando. Ten en cuenta que esto se atenúa en parte porque el navegador [elimina automáticamente las animaciones de relleno](#eliminación_automática_de_animaciones_de_relleno).
- Los estilos que aplican las animaciones tienen una [mayor precedencia en la cascada](/es/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order) que los estilos especificados, por lo que puede ser difícil sobrescribirlos cuando hace falta.

Una mejor opción es usar el método {{domxref("Animation.commitStyles()")}}. Este método escribe los valores calculados de los estilos actuales de la animación en el atributo [`style`](/es/docs/Web/HTML/Reference/Global_attributes/style) de su elemento de destino, y a partir de ahí se pueden volver a aplicar estilos al elemento con normalidad.

## Eliminación automática de animaciones de relleno

Es posible activar una gran cantidad de animaciones en el mismo elemento. Si son indefinidas (es decir, con relleno hacia delante), esto puede generar una lista de animaciones enorme, lo que podría provocar una fuga de memoria. Por este motivo, los navegadores eliminan automáticamente las animaciones de relleno cuando las reemplazan otras más nuevas, salvo que el desarrollador indique explícitamente que se conserven.

Las animaciones se eliminan cuando se cumplen todas las condiciones siguientes:

- La animación tiene relleno (su `fill` es `forwards` si se reproduce hacia delante, `backwards` si se reproduce hacia atrás, o `both`).
- La animación ha terminado. (Ten en cuenta que, debido al `fill`, seguirá teniendo efecto).
- La línea de tiempo de la animación es monótonamente creciente. (Esto siempre se cumple con {{domxref("DocumentTimeline")}}; otras líneas de tiempo, como {{cssxref("scroll-timeline")}}, pueden avanzar hacia atrás).
- La animación no está controlada por un marcado declarativo, como CSS.
- Todos los efectos de estilo del {{domxref("AnimationEffect")}} de la animación están sobrescritos por otra animación que también cumple todas las condiciones anteriores. (Normalmente, cuando dos animaciones establecen la misma propiedad de estilo del mismo elemento, la creada en último lugar sobrescribe a la otra).

Las cuatro primeras condiciones garantizan que, sin la intervención del código JavaScript, el efecto de la animación nunca cambiará ni terminará. La última condición garantiza que la animación nunca afectará realmente al estilo de ningún elemento, porque ha sido reemplazada por completo.

Cuando la animación se elimina automáticamente, se dispara su evento {{domxref("Animation/remove_event", "remove")}}.

Para evitar que el navegador elimine automáticamente las animaciones, llama al método {{domxref("Animation.persist", "persist()")}} de la animación.

La propiedad {{domxref("Animation.replaceState", "replaceState")}} de la animación valdrá `removed` si la animación se eliminó, `persisted` si llamaste a {{domxref("Animation.persist", "persist()")}} en la animación, o `active` en cualquier otro caso.

## Obtener información de las animaciones

Imagina otras formas en las que podríamos usar playbackRate, como mejorar la accesibilidad para los usuarios con trastornos vestibulares permitiéndoles ralentizar las animaciones de todo un sitio. Eso es imposible de hacer con CSS sin recalcular las duraciones en cada regla CSS, pero con la API de Animaciones Web podríamos usar el método {{domxref("Document.getAnimations")}} para recorrer todas las animaciones de la página y reducir a la mitad su `playbackRate`, así:

```js
document.getAnimations().forEach((animation) => {
  animation.updatePlaybackRate(animation.playbackRate * 0.5);
});
```

¡Con la API de Animaciones Web, basta con cambiar una pequeña propiedad!

Otra cosa difícil de lograr solo con animaciones CSS es crear dependencias de valores proporcionados por otras animaciones. Por ejemplo, en el ejemplo del juego "Alicia crece y encoge", quizás hayas notado algo raro en la duración del pastel:

```js
document.getElementById("eat-me-sprite").animate([], {
  duration: aliceChange.effect.getComputedTiming().duration / 2,
});
```

Para entender lo que pasa aquí, veamos la animación de Alicia:

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

La animación de Alicia la hace pasar de la mitad de su tamaño al doble de su tamaño a lo largo de 8 segundos. Después la pausamos:

```js
aliceChange.pause();
```

Si la hubiéramos dejado pausada al principio de su animación, empezaría con la mitad de su tamaño completo, ¡como si ya se hubiera bebido toda la botella! Queremos colocar el "cabezal de reproducción" de su animación en el medio, para que ya vaya por la mitad. Podríamos hacerlo estableciendo su {{domxref("Animation.currentTime")}} en 4 segundos, así:

```js
aliceChange.currentTime = 4000;
```

Pero, mientras trabajamos en esta animación, es posible que cambiemos mucho la duración de la animación de Alicia. ¿No sería mejor establecer su `currentTime` de forma dinámica, para no tener que hacer dos actualizaciones a la vez? De hecho, podemos hacerlo haciendo referencia a la propiedad {{domxref("Animation.effect")}} de aliceChange, que devuelve un objeto con todos los detalles de los efectos activos sobre Alicia:

```js
aliceChange.currentTime = aliceChange.effect.getComputedTiming().duration / 2;
```

`effect` nos permite acceder a los fotogramas clave y las propiedades de temporización de la animación: `aliceChange.effect.getComputedTiming()` apunta al objeto de temporización de Alicia, que contiene su {{domxref("KeyframeEffect.KeyframeEffect", "duration")}}. Podemos dividir su duración a la mitad para obtener el punto medio de la línea de tiempo de su animación y darle así su altura normal. ¡Ahora podemos invertir y reproducir su animación en cualquier dirección para hacerla más pequeña o más grande!

Y podemos hacer lo mismo al establecer las duraciones del pastel y de la botella:

```js
const drinking = document
  .getElementById("liquid")
  .animate([{ height: "100%" }, { height: "0" }], {
    fill: "forwards",
    duration: aliceChange.effect.getComputedTiming().duration / 2,
  });
drinking.pause();
```

Ahora las tres animaciones están vinculadas a una sola duración, que podemos cambiar fácilmente desde un único lugar.

También podemos usar la API de Animaciones Web para averiguar el tiempo actual de la animación. El juego termina cuando se acaba el pastel o se vacía la botella. La escena final que ven los jugadores depende de lo avanzada que estaba Alicia en su animación: si creció demasiado y ya no cabe por la puerta diminuta, o si se hizo demasiado pequeña y no alcanza la llave para abrirla. Podemos saber si está en el extremo grande o pequeño de su animación obteniendo el {{domxref("Animation.currentTime", "currentTime")}} de su animación y dividiéndolo por su `activeDuration`:

```js
const endGame = () => {
  // obtener la posición del cabezal de reproducción de la línea de tiempo de Alicia
  const alicePlayhead = aliceChange.currentTime;
  const aliceTimeline = aliceChange.effect.getComputedTiming().activeDuration;

  // detener la animación de Alicia y las demás
  stopPlayingAlice();

  // según el tercio en el que caiga
  const aliceHeight = alicePlayhead / aliceTimeline;

  if (aliceHeight <= 0.333) {
    // ¡Alicia se hizo más pequeña!
    // …
  } else if (aliceHeight >= 0.666) {
    // ¡Alicia se hizo más grande!
    // …
  } else {
    // Alicia no cambió de forma significativa
    // …
  }
};
```

## Callbacks y promesas

Las animaciones y las transiciones CSS tienen sus propios detectores de eventos, y también es posible usarlos con la API de Animaciones Web:

- {{domxref("Animation/finish_event", "onfinish")}} es el manejador del evento `finish` y se puede activar manualmente con {{domxref("Animation/finish", "finish()")}}.
- {{domxref("Animation/cancel_event", "oncancel")}} es el manejador del evento `cancel` y se puede activar con {{domxref("Animation.cancel", "cancel()")}}.

Aquí establecemos los callbacks del pastel, la botella y Alicia para que llamen a la función `endGame`:

```js
// Cuando se acaba el pastel o la botella
nommingCake.onfinish = endGame;
drinking.onfinish = endGame;

// Alicia llega al final de su animación
aliceChange.onfinish = endGame;
```

Mejor aún, la API de Animaciones Web también ofrece una promesa {{domxref("Animation.finished", "finished")}} que se resuelve cuando la animación termina, o se rechaza si se cancela.

## Conclusión

Estas son las funciones básicas de la API de Animaciones Web. ¡A estas alturas ya deberías estar listo para "bajar por la madriguera del conejo" de las animaciones en el navegador y para escribir tus propios experimentos de animación!

## Véase también

- La [serie completa de demostraciones de Alicia en el país de las maravillas](https://codepen.io/collection/nqNJvD) en CodePen, para que juegues con ellas, hagas un fork y las compartas.
- [Animating like you just don't care with Element.animate](https://hacks.mozilla.org/2016/08/animating-like-you-just-dont-care-with-element-animate/) (2016). Explica el origen de la API de Animaciones Web y por qué es más eficiente que otros métodos de animación web.
