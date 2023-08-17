---
title: "Element: Evento animationend"
short-title: animationend
slug: Web/API/Element/animationend_event
l10n:
  sourceCommit: 1b094710cd2816a6669ce616b6f56d0a5b25e6ad
---

{{APIRef}}

El evento **`animationend`** se activa cuando se completa una [Animación CSS](/es/docs/Web/CSS/CSS_animations). Si la animación se aborta antes de llegar a su finalización, como si el elemento se elimina del DOM o la animación se elimina del elemento, el evento `animationend` no se activa.

## Sintaxis

Utilice el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establezca una propiedad de manejador de eventos.

```js
addEventListener("animationend", (event) => {});

onanimationend = (event) => {};
```

## Tipo de evento

Un {{domxref("AnimationEvent")}}. Hereda de {{domxref("Event")}}.

{{InheritanceDiagram("AnimationEvent")}}

## Propiedades del evento

_También hereda propiedades de su padre {{domxref("Event")}}_.

- {{domxref("AnimationEvent.animationName")}} {{ReadOnlyInline}}
  - : Una cadena que contiene el valor del {{cssxref("animation-name")}} que generó la animación.
- {{domxref("AnimationEvent.elapsedTime")}} {{ReadOnlyInline}}
  - : Un `float` que indica la cantidad de tiempo que la animación se ha estado ejecutando, en segundos, cuando se disparó este evento, excluyendo cualquier momento en que la animación estuvo en pausa. Para un evento `animationstart`, `elapsedTime` es `0.0` a menos que haya un valor negativo para {{cssxref("animation-delay")}}, en cuyo caso el evento se activará con `elapsedTime` que contiene `(- 1 * retraso)`.
- {{domxref("AnimationEvent.pseudoElement")}} {{ReadOnlyInline}}
  - : Una cadena, que comienza con `'::'`, que contiene el nombre del [pseudo-elemento](/es/docs/Web/CSS/Pseudo-elements) en el que se ejecuta la animación. Si la animación no se ejecuta en un pseudoelemento sino en el elemento, una cadena vacía: `''`.

## Ejemplos

Este ejemplo obtiene un elemento que está siendo animado y detecta el evento `animationend`:

```js
const animated = document.querySelector(".animated");

animated.addEventListener("animationend", () => {
  console.log("Animación finalizada");
});
```

Lo mismo, pero usando la propiedad del manejador de eventos `onanimationend`:

```js
const animated = document.querySelector(".animated");

animated.onanimationend = () => {
  console.log("Animación finalizada");
};
```

### Ejemplo en vivo

#### HTML

```html
<div class="animation-example">
  <div class="container">
    <p class="animation">
      Elegiste una noche fría para visitar nuestro planeta.
    </p>
  </div>
  <button class="activate" type="button">Activar animación</button>
  <div class="event-log"></div>
</div>
```

#### CSS

```css
.container {
  height: 3rem;
}

.event-log {
  width: 25rem;
  height: 2rem;
  border: 1px solid black;
  margin: 0.2rem;
  padding: 0.2rem;
}

.animation.active {
  animation-duration: 2s;
  animation-name: slidein;
  animation-iteration-count: 2;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

#### JavaScript

```js
const animation = document.querySelector("p.animation");
const animationEventLog = document.querySelector(
  ".animation-example>.event-log",
);
const applyAnimation = document.querySelector(
  ".animation-example>button.activate",
);
let iterationCount = 0;

animation.addEventListener("animationstart", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animación iniciada' `;
});

animation.addEventListener("animationiteration", () => {
  iterationCount++;
  animationEventLog.textContent = `${animationEventLog.textContent}'iteraciones de la animación: ${iterationCount}' `;
});

animation.addEventListener("animationend", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animación terminada'`;
  animation.classList.remove("active");
  applyAnimation.textContent = "Activar animación";
});

animation.addEventListener("animationcancel", () => {
  animationEventLog.textContent = `${animationEventLog.textContent}'animación cancelada'`;
});

applyAnimation.addEventListener("click", () => {
  animation.classList.toggle("active");
  animationEventLog.textContent = "";
  iterationCount = 0;
  const active = animation.classList.contains("active");
  applyAnimation.textContent = active
    ? "Cancelar animación"
    : "Activar animación";
});
```

#### Resultado

{{ EmbedLiveSample('Ejemplo_en_vivo', '100%', '150px') }}

## Especificaciones

{{Specifications}}

## Browser compatibility

{{Compat}}

## Véase también

- [Animaciones CSS](/es/docs/Web/CSS/CSS_animations)
- [Uso de animaciones CSS](/es/docs/Web/CSS/CSS_animations/Using_CSS_animations)
- {{domxref("AnimationEvent")}}
- Eventos relacionados: {{domxref("Element/animationstart_event", "animationstart")}}, {{domxref("Element/animationcancel_event", "animationcancel")}}, {{domxref("Element/animationiteration_event", "animationiteration")}}
