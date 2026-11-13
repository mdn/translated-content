---
title: Capturar fotos fijas con getUserMedia()
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{DefaultAPISidebar("Media Capture and Streams")}}

Este artículo muestra cómo usar [`navigator.mediaDevices.getUserMedia()`](/es/docs/Web/API/MediaDevices/getUserMedia) para acceder a la cámara de una computadora o de un teléfono móvil compatible con `getUserMedia()` y tomar una foto con ella.

![Aplicación de captura de imágenes basada en getUserMedia: a la izquierda tenemos un flujo de video tomado desde una cámara web y un botón para tomar la foto; a la derecha, la imagen fija resultante de tomar la foto](web-rtc-demo.png)

Si lo prefieres, también puedes ir directamente a la [demostración](#demostración).

## El marcado HTML

Nuestra interfaz HTML tiene dos secciones operativas principales: el panel de flujo y captura, y el panel de presentación.
Cada una se muestra junto a la otra, dentro de su propio {{HTMLElement("div")}}, para facilitar el estilo y el control.
Hay un elemento {{HTMLElement("button")}} (`permissions-button`) que más adelante usaremos en JavaScript para permitir al usuario conceder o bloquear los permisos de la cámara de cada dispositivo mediante `getUserMedia()`.

El recuadro de la izquierda contiene dos componentes: un elemento {{HTMLElement("video")}}, que recibirá el flujo de `navigator.mediaDevices.getUserMedia()`, y un {{HTMLElement("button")}} para iniciar la captura de video.
Es bastante sencillo, y veremos cómo encaja todo cuando lleguemos al código JavaScript.

```css hidden live-sample___photo-capture live-sample___photo-capture-with-filters
body {
  font:
    1rem "Lucida Grande",
    "Arial",
    sans-serif;
  padding: 0.8rem;
}

button {
  display: block;
  margin-block: 1rem;
}

#start-button {
  position: relative;
  margin: auto;
  bottom: 32px;
  background-color: rgb(0 150 0 / 50%);
  border: 1px solid rgb(255 255 255 / 70%);
  box-shadow: 0px 0px 1px 2px rgb(0 0 0 / 20%);
  font-size: 14px;
  color: white;
}

#video,
#photo {
  border: 1px solid black;
  box-shadow: 2px 2px 3px black;
  width: 100%;
  height: auto;
}

#canvas {
  display: none;
}

.camera,
.output {
  display: inline-block;
  width: 49%;
  height: auto;
}

.output {
  vertical-align: top;
}

code {
  background-color: lightgrey;
}
```

```html hidden live-sample___photo-capture live-sample___photo-capture-with-filters
<h1>Demostración de cómo tomar fotos</h1>
<p>
  Este ejemplo muestra cómo usar
  <code>navigator.mediaDevices.getUserMedia()</code> para configurar un flujo
  multimedia con tu cámara web u otro dispositivo de video, obtener una imagen
  de ese flujo y crear un PNG a partir de ella.
</p>
<button id="permissions-button">Permitir cámara</button>
```

```html hidden live-sample___photo-capture-with-filters
<p>
  &#9432; Este ejemplo usa el mismo código de antes, pero esta vez añadimos un
  efecto de filtro al elemento <code>&lt;video&gt;</code> mediante una
  declaración CSS <code>filter: grayscale(100%)</code>. Después podemos
  comprobar si el elemento de video tiene algún <code>filter</code> de CSS
  aplicado y usar el mismo filtro al dibujar en el canvas:
</p>
```

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<div class="camera">
  <video id="video">El flujo de video no está disponible.</video>
  <button id="start-button">Capturar foto</button>
</div>
```

A continuación, tenemos un elemento {{HTMLElement("canvas")}} en el que se almacenan los fotogramas capturados, que pueden manipularse de alguna forma y después convertirse en un archivo de imagen final.
Este canvas permanece oculto mediante el estilo {{cssxref("display", "display: none")}}, para no saturar la pantalla; el usuario no necesita ver esta etapa intermedia.

También tenemos un elemento {{HTMLElement("img")}} donde dibujaremos la imagen; es la vista final que se muestra al usuario.

```html live-sample___photo-capture live-sample___photo-capture-with-filters
<canvas id="canvas"></canvas>
<div class="output">
  <img id="photo" src="" alt="La captura aparecerá en este recuadro." />
</div>
```

## El código JavaScript

Veamos ahora el código JavaScript. Lo dividiremos en varios fragmentos pequeños para explicarlo con más facilidad.

### Inicialización

Empezamos definiendo las variables que usaremos.

```js live-sample___photo-capture live-sample___photo-capture-with-filters
const width = 320; // Escalaremos el ancho de la foto a este valor
let height = 0; // Se calculará a partir del flujo de entrada

let streaming = false;

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const photo = document.getElementById("photo");
const startButton = document.getElementById("start-button");
const allowButton = document.getElementById("permissions-button");
```

Estas son las variables:

- `width`
  - : Sea cual sea el tamaño del video de entrada, escalaremos la imagen resultante para que tenga 320 píxeles de ancho.
- `height`
  - : La altura de la imagen de salida se calculará a partir de `width` y de la {{glossary("aspect ratio", "relación de aspecto")}} del flujo.
- `streaming`
  - : Indica si hay o no un flujo de video activo en este momento.
- `video`
  - : Una referencia al elemento {{HTMLElement("video")}}.
- `canvas`
  - : Una referencia al elemento {{HTMLElement("canvas")}}.
- `photo`
  - : Una referencia al elemento {{HTMLElement("img")}}.
- `startButton`
  - : Una referencia al elemento {{HTMLElement("button")}} que se usa para disparar la captura.
- `allowButton`
  - : Una referencia al elemento {{HTMLElement("button")}} que se usa para controlar si la página puede acceder o no a los dispositivos.

#### Obtener el flujo multimedia

El siguiente paso es obtener el flujo multimedia: definimos un detector de eventos que llama a {{domxref("MediaDevices.getUserMedia()")}} y solicita un flujo de video (sin audio) cuando el usuario hace clic en el botón "Permitir cámara".
Devuelve una promesa a la que asociamos un callback de éxito y otro de error:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
allowButton.addEventListener("click", () => {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((err) => {
      console.error(`Se produjo un error: ${err}`);
    });
});
```

El callback de éxito recibe como entrada un objeto `stream`, que se establece como la fuente de nuestro elemento {{HTMLElement("video")}}.
Una vez que el flujo está vinculado al elemento `<video>`, lo reproducimos llamando a [`HTMLMediaElement.play()`](/es/docs/Web/API/HTMLMediaElement/play_event).

El callback de error se ejecuta si no se puede abrir el flujo.
Esto ocurre, por ejemplo, si no hay ninguna cámara compatible conectada o si el usuario denegó el acceso.

#### Detectar cuándo empieza a reproducirse el video

Después de llamar a [`HTMLMediaElement.play()`](/es/docs/Web/API/HTMLMediaElement/play_event) en el elemento {{HTMLElement("video")}}, transcurre un período de tiempo (con suerte breve) antes de que empiecen a llegar los datos del flujo de video. Para evitar bloquear la ejecución hasta que eso ocurra, añadimos a `video` un detector de eventos para el evento {{domxref("HTMLMediaElement/canplay_event", "canplay")}}, que se dispara cuando la reproducción del video realmente comienza. En ese momento, todas las propiedades del objeto `video` ya se han configurado según el formato del flujo.

```js live-sample___photo-capture live-sample___photo-capture-with-filters
video.addEventListener("canplay", (ev) => {
  if (!streaming) {
    height = video.videoHeight / (video.videoWidth / width);

    video.setAttribute("width", width);
    video.setAttribute("height", height);
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
    streaming = true;
  }
});
```

Este callback no hace nada a menos que sea la primera vez que se invoca; esto se verifica comprobando el valor de nuestra variable `streaming`, que es `false` la primera vez que se ejecuta este método.

Si efectivamente es la primera ejecución, establecemos la altura del video basándonos en la diferencia de tamaño entre las dimensiones reales del video, `video.videoWidth`, y el ancho con el que lo vamos a renderizar, `width`.

Por último, igualamos el `width` y el `height` del video y del canvas llamando a {{domxref("Element.setAttribute()")}} para cada una de las dos propiedades en cada elemento y asignando los valores de ancho y alto que correspondan. Finalmente, establecemos la variable `streaming` en `true` para evitar ejecutar este código de configuración otra vez por accidente.

#### Manejar los clics en el botón

Para capturar una foto fija cada vez que el usuario hace clic en `startButton`, necesitamos añadir al botón un detector de eventos que se ejecute cuando se dispare el evento {{domxref("Element/click_event", "click")}}:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
startButton.addEventListener("click", (ev) => {
  takePicture();
  ev.preventDefault();
});
```

Este código es sencillo: llama a la función `takePicture()`, definida más abajo en la sección [Capturar un fotograma del flujo](#capturar_un_fotograma_del_flujo), y luego llama a {{domxref("Event.preventDefault()")}} sobre el evento recibido para evitar que el clic se procese más de una vez.

### Limpiar el recuadro de la foto

Limpiar el recuadro de la foto implica crear una imagen, para luego convertirla a un formato que pueda usar el elemento {{HTMLElement("img")}}, que muestra el fotograma capturado más recientemente. El código es el siguiente:

```js live-sample___photo-capture live-sample___photo-capture-with-filters
function clearPhoto() {
  const context = canvas.getContext("2d");
  context.fillStyle = "#aaaaaa";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const data = canvas.toDataURL("image/png");
  photo.setAttribute("src", data);
}

clearPhoto();
```

Empezamos obteniendo una referencia al elemento {{HTMLElement("canvas")}} oculto que usamos para el renderizado fuera de pantalla. Luego establecemos `fillStyle` en `#aaaaaa` (un gris bastante claro) y rellenamos todo el canvas con ese color llamando a {{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}}.

Al final de la función, convertimos el canvas en una imagen PNG y llamamos a {{domxref("Element.setAttribute", "photo.setAttribute()")}} para que nuestro recuadro de la captura muestre la imagen.

### Capturar un fotograma del flujo

Queda una última función por definir, que es el objetivo de todo el ejercicio: `takePicture()`, cuyo trabajo es capturar el fotograma de video que se muestra en ese momento, convertirlo en un archivo PNG y mostrarlo en el recuadro del fotograma capturado. El código es este:

```js live-sample___photo-capture
function takePicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  } else {
    clearPhoto();
  }
}
```

Como ocurre siempre que necesitamos trabajar con el contenido de un canvas, empezamos obteniendo el [contexto de dibujo 2D](/es/docs/Web/API/CanvasRenderingContext2D) del canvas oculto.

Luego, si el ancho y la altura son distintos de cero (lo que significa que existen datos de imagen potencialmente válidos), establecemos el ancho y la altura del canvas para que coincidan con los del fotograma capturado y, a continuación, llamamos a {{domxref("CanvasRenderingContext2D.drawImage()", "drawImage()")}} para dibujar en el contexto el fotograma actual del video, de modo que la imagen del fotograma ocupe todo el canvas.

> [!NOTE]
> Esto aprovecha que, para cualquier API que acepte un `HTMLImageElement` como parámetro, la interfaz {{domxref("HTMLVideoElement")}} se comporta como un {{domxref("HTMLImageElement")}}, y el fotograma actual del video se presenta como contenido de la imagen.

Una vez que el canvas contiene la imagen capturada, la convertimos al formato PNG llamando a {{domxref("HTMLCanvasElement.toDataURL()")}}; por último, llamamos a {{domxref("Element.setAttribute", "photo.setAttribute()")}} para que nuestro recuadro de la imagen fija muestre la imagen.

Si no hay una imagen válida disponible (es decir, si `width` y `height` son ambos 0), limpiamos el recuadro del fotograma capturado llamando a `clearPhoto()`.

## Demostración

Haz clic en "Permitir cámara" para seleccionar un dispositivo de entrada y permitir que la página acceda a la cámara.
Cuando empiece el video, puedes hacer clic en "Capturar foto" para capturar una imagen fija del flujo y dibujarla en el canvas de la derecha:

{{EmbedLiveSample('photo-capture', '', '500', , , , 'camera', 'allow-popups')}}

## Diviértete con los filtros

Como capturamos imágenes de la cámara web del usuario obteniendo fotogramas de un elemento {{HTMLElement("video")}}, podemos aplicar al video efectos divertidos con los filtros de CSS {{cssxref("filter")}}. Estos filtros van desde los más básicos (convertir la imagen a blanco y negro) hasta los más complejos (desenfoques gaussianos y rotación de tono).

```css live-sample___photo-capture-with-filters
#video {
  filter: grayscale(100%);
}
```

Para que los filtros del video se apliquen a la foto, la función `takePicture()` necesita los siguientes cambios.

```js live-sample___photo-capture-with-filters
function takePicture() {
  const context = canvas.getContext("2d");
  if (width && height) {
    canvas.width = width;
    canvas.height = height;

    // Obtén el filtro CSS calculado del elemento de video.
    // Por ejemplo, podría devolver "grayscale(100%)"
    const videoStyles = window.getComputedStyle(video);
    const filterValue = videoStyles.getPropertyValue("filter");

    // Aplica el filtro al contexto de dibujo del canvas.
    // Si no hay filtro (es decir, devuelve "none"), usa "none" por defecto.
    context.filter = filterValue !== "none" ? filterValue : "none";

    context.drawImage(video, 0, 0, width, height);

    const dataUrl = canvas.toDataURL("image/png");
    photo.setAttribute("src", dataUrl);
  } else {
    clearPhoto();
  }
}
```

{{EmbedLiveSample('photo-capture-with-filters', , '600', , , , 'camera', 'allow-popups')}}

Puedes experimentar con este efecto usando, por ejemplo, el [editor de estilos](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) de las herramientas de desarrollo de Firefox; consulta [Editar filtros CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html) para ver cómo hacerlo.

## Usar dispositivos específicos

Si lo necesitas, puedes restringir el conjunto de fuentes de video permitidas a un dispositivo o conjunto de dispositivos específicos. Para ello, llama a {{domxref("MediaDevices.enumerateDevices")}}. Cuando la promesa se cumpla con un array de objetos {{domxref("MediaDeviceInfo")}} que describen los dispositivos disponibles, busca los que quieras permitir y especifica el {{domxref("MediaTrackConstraints.deviceId", "deviceId")}} correspondiente (o los `deviceId` correspondientes) en el objeto {{domxref("MediaTrackConstraints")}} que se pasa a {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}.

## Véase también

- {{domxref("MediaDevices.getUserMedia")}}
- {{domxref("CanvasRenderingContext2D.drawImage()")}}
- [Usar fotogramas de un video](/es/docs/Web/API/Canvas_API/Tutorial/Using_images) en el tutorial de Canvas
