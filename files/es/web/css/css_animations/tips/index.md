---
title: Animaciones CSS tips y trucos
slug: Web/CSS/CSS_animations/Tips
---

{{cssref}}Las Animaciones con CSS hacen posible crear cosas increíbles con los elementos que forman parte de tus documentos y apps . Sin embargo, hay cosas que deseas hacer que no son evidentes, o soluciones inteligentes que quizás no encuentres de inmediato. Este artículo es una colección de tips y trucos que hemos encontrado que podrían hacer más fácil el trabajo, incluido cómo volver a ejecutar una animación detenida.

## Corriendo una animación de nuevo

La especificación de CSS Animations no ofrece una forma de ejecutar una animación nuevamente. No hay un método mágico de `resetAnimation()` en los elementos, y tu no puedes solo configurar el elemento {{cssxref("animation-play-state")}} para `"correr"` de nuevo. En su lugar debes usar trucos inteligentes para que una animación detenida se reproduzca.

Aquí te mostramos una forma de hacerlo que sentimos es lo suficientemente estable y confiable para sugerirte

### Contenido HTML

Primero, definamos el HTML para un {{HTMLElement("div")}} que deseamos animar y un botón que ejecurara (o repetira) la animación.

```html
<div class="box"></div>

<div class="runButton">Click me to run the animation</div>
```

### Contenido CSS

Ahora definiremos la animación en si usando CSS. Algún CSS que no es importante (el estilo del botón "Run" en sí) no se muestran aquí, por brevedad.

```css hidden
.runButton {
  cursor: pointer;
  width: 300px;
  border: 1px solid black;
  font-size: 16px;
  text-align: center;
  margin-top: 12px;
  padding-top: 2px;
  padding-bottom: 4px;
  color: white;
  background-color: darkgreen;
  font:
    14px "Open Sans",
    "Arial",
    sans-serif;
}
```

```css
@keyframes colorchange {
  0% {
    background: yellow;
  }
  100% {
    background: blue;
  }
}

.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.changing {
  animation: colorchange 2s;
}
```

Aquí hay dos clases. La clase `"box"` es un descripción básica de la apariencia de la caja, sin ninguna información de la animación incluida. Los detalles de la animación son incluidos en la clase `"changing"` class, que dice que {{cssxref("@keyframes")}} llamado `"colorchange"` debe usarse en el transcurso de dos segundo para animar la caja.

Note que debido a esto, la caja no comienza con ningún efecto de animación en su lugar, por lo que no se animará

### Contenido JavaScript

Ahora veremos el JavaScript que jace el trabajo. La escencia de la técnica esta en la función `play()`, que se llama cuando el usuario hace clic en el botón "Run".

```js
function play() {
  document.querySelector(".box").className = "box";
  window.requestAnimationFrame(function (time) {
    window.requestAnimationFrame(function (time) {
      document.querySelector(".box").className = "box changing";
    });
  });
}
```

Esto se ve raro, ¿cierto? Esto se debe a que la única forma de volver a reproducir una animación es eleminar el efecto de animación, dejar que el documento vuelva a calcular los estilos para que sepa que lo ha hecho y luego volver a agregar el efecto de animación al elemento. Para que eso suceda, tenemos que ser creativos.

Esto es lo que sucede cuando la función `play()` es llamada:

1. La lista de clases CSS de caja se restablece a `"box"`. Esto tiene el efecto de remover cualquier otra clase recurrente aplicada a la caja, incluida la clase `"changing"` que controla la animación. En otras palabras eliminaremos el efecto de animación de la caja. Sin embargo, los cambios en la lista de clases no tienen efecto hasta que se recalcula completamente el estilo y se ha producido una actualización para reflejar el cambio.
2. Para estar seguros que los estilos son recalculados, nosotros usamos {{domxref("window.requestAnimationFrame()")}}, especifinado un callback. Nuestro callback se ejecuta justo antes del 'repaint' del documento. El problema para nosotros es que debido a que es antes del repaint, ¡El recalculo del estilo aún no ha suciedo! Por lo tanto...
3. Nuestro callback habilmente llama a `requestAnimationFrame()` ¡por segunda vez!. En este momento el callback se compila antes del siguiente repaint, después de que se haya producido el recalculo del estilo. El callback añade la clase `"changing"` de nuevo en la caja, para que el repaint inicie la animación una vez más.

Por supuesto, también necesitamos agregar un controlador de eventos a nuestro botón "Run" para que en verdad haga algo

```js
document.querySelector(".runButton").addEventListener("click", play, false);
```

### Resultado

{{ EmbedLiveSample('Run_an_animation_again', 320, 160) }}

## Detener la animación

Simplemente removemos {{cssxref("animation-name")}} aplicado al elemento que hace que eso salte o corte a su siguiente estado.Si, en cambio, desea que la animación se complete y luego se detenga, debe probar un enfoque diferente. Los principales trucos son:

1. Haga que su animación sea lo más autónoma posible. Esto significa que no se debe confiar en `animation-direction: alternate`. En su lugar, debe escribir explícitamente una animación de fotogramas clave que pase por la animación completa en una repetición hacia adelante.
2. Use JavaScript y borre la animación que se esta utilizando cuando se activa el evento `animationiteration`.

El siguiente demo muestra como puedes lograr las técnicas JavaScript mencionandas anteriormente:

```css
.slidein {
  animation-duration: 5s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}

.stopped {
  animation-name: none;
}

@keyframes slidein {
  0% {
    margin-left: 0%;
  }
  50% {
    margin-left: 50%;
  }
  100% {
    margin-left: 0%;
  }
}
```

```html
<h1 id="watchme">Click me to stop</h1>
```

```js
let watchme = document.getElementById("watchme");

watchme.className = "slidein";
const listener = (e) => {
  watchme.className = "slidein stopped";
};
watchme.addEventListener("click", () =>
  watchme.addEventListener("animationiteration", listener, false),
);
```

Demo <https://jsfiddle.net/morenoh149/5ty5a4oy/>

## Mira también

- [Using CSS transitions](/es/docs/Web/Guide/CSS/Using_CSS_transitions)
- {{domxref("Window.requestAnimationFrame()")}}
