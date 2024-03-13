---
title: Capturar fotografías con la cámara web
slug: Web/API/Media_Capture_and_Streams_API/Taking_still_photos
---

## Introducción y demostración

Este es un tutorial rápido de cómo acceder a la cámara de tu laptop y capturar una foto con ella. Puedes observar el [código final en acción en este JSFiddle](http://jsfiddle.net/codepo8/agaRe/4/). También existe una versión más avanzada en JavaScript para cargar fotos a **imgur** disponible como [código en GitHub](https://github.com/codepo8/interaction-cam/) o [como demo](http://codepo8.github.com/interaction-cam/).

## El formato HTML

Lo primero que necesitas para acceder a la cámara web utilizando WebRTC es un elemento {{HTMLElement("video")}} y un elemento {{HTMLElement("canvas")}} en la página. El elemento de video recibe la secuencia desde WebRTC y el elemento canvas es utilizado para agarrar la imagen desde el video. También añadimos una imagen de relleno que luego será reemplazada con la toma capturada por la cámara web.

```html
<video id="video"></video>
<button id="startbutton">Take photo</button>
<canvas id="canvas"></canvas>
<img src="http://placekitten.com/g/320/261" id="photo" alt="photo" />
```

## El script completo

Aquí se muestra completamente el código JavaScript. Más abajo, explicaremos gradualmente cada sección con más detalle.

```js
(function () {
  var streaming = false,
    video = document.querySelector("#video"),
    canvas = document.querySelector("#canvas"),
    photo = document.querySelector("#photo"),
    startbutton = document.querySelector("#startbutton"),
    width = 320,
    height = 0;

  navigator.getMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia;

  navigator.getMedia(
    {
      video: true,
      audio: false,
    },
    function (stream) {
      if (navigator.mozGetUserMedia) {
        video.mozSrcObject = stream;
      } else {
        var vendorURL = window.URL || window.webkitURL;
        video.src = vendorURL.createObjectURL(stream);
      }
      video.play();
    },
    function (err) {
      console.log("An error occured! " + err);
    },
  );

  video.addEventListener(
    "canplay",
    function (ev) {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);
        video.setAttribute("width", width);
        video.setAttribute("height", height);
        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        streaming = true;
      }
    },
    false,
  );

  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext("2d").drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }

  startbutton.addEventListener(
    "click",
    function (ev) {
      takepicture();
      ev.preventDefault();
    },
    false,
  );
})();
```

## Explicando paso a paso

Entonces, ¿Qué es lo que sucede aquí? Lo analizaremos paso por paso.

### Función Anónima

```js
(function() {

  var streaming = false,
      video        = document.querySelector('#video'),
      canvas       = document.querySelector('#canvas'),
      photo        = document.querySelector('#photo'),
      startbutton  = document.querySelector('#startbutton'),
      width = 320,
      height = 0;
```

Empezamos por encerrar el script entero en una función anónima para evitar las variables globales. Tomamos los elementos HTML que necesitamos y definimos el ancho (width) del video a 320 y la altura (height) a 0, ya que calcularemos la altura apropiada posteriormente.

> **Advertencia:** En estos momentos existe una diferencia entre los tamaños de video proporcionados por getUserMedia. Firefox Nightly utiliza una resolución de 352x288 y Opera y Chrome utiliza una resolución de 640x400. Esto cambiará en el futuro, pero cambiando el tamaño con la proporción que usaremos más abajo, nos aseguraremos de no obtener sorpresas desagradables.

### Obtener el video

Ahora necesitamos obtener el video desde la cámara web. Actualmente esto está predeterminado para los diferentes navegadores, así que necesitamos comprobar cuál es compatible:

```js
navigator.getMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia ||
  navigator.msGetUserMedia;
```

Le solicitamos al navegador que nos dé un video sin audio y obtenemos una secuencia (stream) en la función de retrollamada:

```js
navigator.getMedia(
  {
    video: true,
    audio: false,
  },
  function (stream) {
    if (navigator.mozGetUserMedia) {
      video.mozSrcObject = stream;
    } else {
      var vendorURL = window.URL || window.webkitURL;
      video.src = vendorURL.createObjectURL(stream);
    }
    video.play();
  },
  function (err) {
    console.log("An error occured! " + err);
  },
);
```

En estos momentos Firefox Nightly necesita que tu configures la propiedad de `mozSrcObject` del elemento del video con el fin de reproducirlo; para otros navegadores, configura el atributo `src`. Mientras que Firefox puede utilizar la secuencia de video directamente, Webkit y Opera necesitan crear un objeto URL desde ella. Todo esto será estandarizado en un futuro cercano.

### Redefinir el tamaño del video

Luego necesitamos configurar el tamaño del video a las dimensiones deseadas.

```js
video.addEventListener(
  "canplay",
  function (ev) {
    if (!streaming) {
      height = video.videoHeight / (video.videoWidth / width);
      video.setAttribute("width", width);
      video.setAttribute("height", height);
      canvas.setAttribute("width", width);
      canvas.setAttribute("height", height);
      streaming = true;
    }
  },
  false,
);
```

Nos subscribimos al evento `canplay` del video y leemos sus dimensiones utilizando `videoHeight` y `videoWidth`. Estas no están disponible realmente hasta que el evento sea iniciado. Establecemos `streaming` a verdadero (true) para que compruebe esto solo una vez, mientras que el evento `canplay` siga en actividad.

Esto es todo lo que se necesita para que inicie el video.

### Capturar una imagen

Ahora necesitamos capturar una imagen utilizando un lienzo (canvas). Asignamos un manejador de eventos al botón de inicio para llamar a la función de `takepicture`.

```js
startbutton.addEventListener(
  "click",
  function (ev) {
    takepicture();
    ev.preventDefault();
  },
  false,
);
```

En esta función, reestablecemos el tamaño del lienzo (canvas) a las dimensiones del video, el cual lo sustituye y tenemos un marco del video, el cual se copia al canvas. Luego necesitamos convertir los datos del canvas en datos tipo URL con un encabezado PNG, y establecer el src de la fotografía a este mismo url.

```js
  function takepicture() {
    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(video, 0, 0, width, height);
    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }

})();
```

Eso es todo lo que se necesita para mostrar la secuencia de la cámara web y capturar una imagen fija de ella, a través de Chrome, Opera y Firefox.

## Compatibilidad

Actualmente utilizar WebRTC para acceder a la cámara es compatible en Chrome, Opera y Firefox Nightly 18. Para habilitar WebRTC en Firefox Nightly requiere que establezcas un indicador en la configuración:

- Teclea "about:config" en la barra de direcciones y afirma que quieres realizar algunos cambios.
- Encuentra la entrada "media.navigator.enabled" y establécelo a verdadero (true).
