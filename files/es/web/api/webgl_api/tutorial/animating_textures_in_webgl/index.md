---
title: Animating textures in WebGL
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
---

{{DefaultAPISidebar("WebGL") }} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}

En esta demostración nos basamos en el ejemplo anterior, solo que ahora reemplazaremos nuestra textura estática con los fotogramas de un video Ogg.

Esto es de hecho muy fácil de entender y de hacer, así que vamos a empezar.

Podemos utilizar un código similar para usar, como fuente para las texturas, otros tipos de datos tales como {{ HTMLElement("canvas") }}.

## Obteniendo acceso al video

El primer paso es añadir el HTML para crear el elemento {{ HTMLElement("video") }} que usaremos para obtener los fotogramas de video:

```html
<video id="video">
  Parece ser que tu navegador no soporta el elemento HTML5.
  <code>&lt;video&gt;</code>
</video>
```

Esto simplemente crea un elemento para reproducir el archivo de video "Firefox.ogv". Usaremos CSS para ocultar el video

```css
video {
  display: none;
}
```

Ahora pasamos al código JavasScript, empezando por añadir una línea de código a la función start() para obtener la referencia al elemento de video:

```js
videoElement = document.getElementById("video");
```

Y reemplazamos el código que configura las llamadas de "interval-driven" en drawScecene() por esto:

```js
videoElement.addEventListener("canplaythrough", startVideo, true);
videoElement.addEventListener("ended", videoDone, true);
```

Finalmente configuramos el atributo src para empezar a cargar el video. FIXME (bjacob): También se debe configurar preload="auto" o si no, el video nunca ejecuta canplaythrough en Firefox. En Chrome se debería cargar el video aun sin usar preload="auto".

```js
video.preload = "auto";
videoElement.src = "Firefox.ogv";
```

El objetivo aquí es no empezar la animación hasta que una parte suficiente del video se haya cargado de modo que pueda ser reproducido sin interrupciones. Para esto añadimos un event listener para esperar a que el elemento de video nos diga que ya ha cargado los suficientes datos como para reproducir el video puede ser reproducido sin pausas.

The `startVideo()` quedará así:

```js
function startVideo() {
  videoElement.play();
  intervalID = setInterval(drawScene, 15);
}
```

Esto simplemente reproduce el video, entonces establece las llamadas "interval-driven" a drawScene() para gestionar el renderizado del cubo.

Añadiremos también un segundo event listener en el "ended" del video de modo que cuando el video haya finalizado de reproducirse nosotros podamos parar la animación.

```js
function videoDone() {
  clearInterval(intervalID);
}
```

La función de videoDone() simplemente llama a {{ domxref("window.clearInterval()") }} para terminar de llamar a la función de actualizar la animación.

## Usando los fotogramas del video como textura

El siguiente paso es initTexture(), el cual se ha vuelto mucho más simple desde que no es necesario cargar un archivo de imagen. En lugar de esto, todo lo que vamos a hacer es crear un objeto de textura vacío para configurar el filtering cuando lo usemos más tarde:

```js
function initTextures() {
  cubeTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}
```

La función updateTexture() quedaría así; Aquí es donde se realiza el trabajo real.

```js
function updateTexture() {
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    videoElement,
  );
}
```

Has visto este código antes. Es prácticamente idéntico a la rutina de handleTextureLoaded() en el ejemplo anterior, excepto que cuando llamamos a texImage2D() en lugar de pasarle un objeto Image, lo pasamos en el elemento {{ HTMLElement("video") }}. Ya que WebGL sabe como obtener el fotograma actual y usarlo como textura.

`updateTexture()` se llama cada vez que estamos preparados para que la función drawScene() redibuje la escena. La única diferencia es que añadimos la llamada de updateTexture() antes de hacer nada más.

¡Esto es todo al respecto!

{{EmbedGHLiveSample('dom-examples/webgl-examples/tutorial/sample8/index.html', 670, 510) }}

[Ver el código completo](https://github.com/mdn/dom-examples/tree/main/webgl-examples/tutorial/sample8) | [Abrir esta demo en una nueva página](https://mdn.github.io/dom-examples/webgl-examples/tutorial/sample8/)

## Artículos relacionados

- [Usar audio y video en Firefox](/es/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}
