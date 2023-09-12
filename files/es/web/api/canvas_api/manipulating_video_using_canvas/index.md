---
title: Manipular video por medio de canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
---

Al combinar las capacidades del elemento [`video`](/En/HTML/Element/Video) introducido en Firefox 3.5 con un elemento [`canvas`](/en/HTML/Canvas) , puedes manipular los datos de video en tiempo real para incorporar una variedad de efectos visuales que se mostrarán en el video. Este artículo, adaptado de [esta entrada del blog](http://blog.mozbox.org/post/2009/02/25/video-canvas%3A-special-effects) de Paul Rouget, muestra cómo realizar una inserción croma (también conocida como el "efecto pantalla verde") utilizando el código JavaScript.

[Ver este ejemplo en vivo](/samples/video/chroma-key/index.xhtml) .

## El contenido del documento

El documento XHTML que se utiliza para representar este contenido se muestra a continuación.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <style>
      body {
        background: black;
        color: #cccccc;
      }
      #c2 {
        background-image: url(foo.png);
        background-repeat: no-repeat;
      }
      div {
        float: left;
        border: 1px solid #444444;
        padding: 10px;
        margin: 10px;
        background: #3b3b3b;
      }
    </style>
    <script type="text/javascript;version=1.8" src="main.js"></script>
  </head>

  <body onload="processor.doLoad()">
    <div>
      <video id="video" src="video.ogv" controls="true" />
    </div>
    <div>
      <canvas id="c1" width="160" height="96" />
      <canvas id="c2" width="160" height="96" />
    </div>
  </body>
</html>
```

Los puntos clave a tener en cuenta son:

1. Este documento establece dos elemento&#x20;

   `canvas`

   &#x20;, con los identificadores de `c1` y `c2` . Canvas `c1` se utiliza para mostrar la imagen actual del video original, mientras que `c2` se utiliza para mostrar el video después de realizar la manipulación con el efecto croma; `c2` se carga previamente con la imagen fija que se utilizará para sustituir el fondo verde en el video.

2. El código JavaScript es importado de un script llamado `main.js` ; este script utiliza JavaScript 1.8 características, de modo que la versión se especifica en la línea 22 al importar la secuencia de comandos.
3. Cuando se carga el documento, se ejecuta el método `processor.doLoad()` de `main.js`.

## El código JavaScript

El código JavaScript en `main.js` consta de tres métodos.

### Inicializar el reproductor de croma

El método `doLoad()` se llama cuando el documento XHTML se carga inicialmente. La función de este método es preparar las variables necesarias para el código de procesamiento del croma y la creación de un detector de eventos para que podamos detectar cuándo inicia el usuario la reproducción del video.

```js
  doLoad: function() {
    this.video = document.getElementById("video");
    this.c1 = document.getElementById("c1");
    this.ctx1 = this.c1.getContext("2d");
    this.c2 = document.getElementById("c2");
    this.ctx2 = this.c2.getContext("2d");
    let self = this;
    this.video.addEventListener("play", function() {
        self.width = self.video.videoWidth / 2;
        self.height = self.video.videoHeight / 2;
        self.timerCallback();
      }, false);
  },
```

Este código obtiene referencias a los elementos del documento XHTML que son de particular interés, a saber, el elemento `video` y los dos elementos `canvas`. También recupera las referencias a los contextos gráficos para cada uno de los dos elementos canvas. Estos serán utilizados cuando estamos haciendo de verdad el efecto croma.

Luego `addEventListener()` es llamado para empezar a ver el elemento `video` de forma que podamos obtener una notificación cuando el usuario presione el botón de reproducción en el video. En respuesta al usuario que inicia la reproducción, el código obtiene la anchura y la altura de video, reduciendo a la mitad cada uno (vamos a reducir a la mitad el tamaño del video, cuando llevamos a cabo la manipulación efecto croma). A continuación, llama al método `timerCallback()` para iniciar el visionado del video y la computación del efecto visual.

### La devolución de llamada del temporizador

La devolución de llamada del temporizador se llama inicialmente cuando el video comienza a reproducirse (cuando tiene lugar el evento "reproducir"), a continuación, toma la responsabilidad por la que se establece a sí mismo para ser llamado periódicamente, a fin de poner en marcha el efecto croma para cada imagen.

```js
  timerCallback: function() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    let self = this;
    setTimeout(function () {
        self.timerCallback();
      }, 0);
  },
```

Lo primero que la devolución de llamada hace es comprobar si el video se está aún reproduciendo, y si no lo está, la devolución de llamada regresa inmediatamente sin hacer nada.

A continuación, llama al método `computeFrame()`, que lleva a cabo la manipulación del efecto croma en la imagen de video actual.

Lo último que la devolución de llamada hace es llamar a `setTimeout()` para programarse para ser llamado lo más pronto posible. En el mundo real, es probable que programes esto en función de la velocidad de fotogramas del video.

### Manipulación de los datos de la imagen del video

El método `computeFrame()`, que se muestra a continuación, se encarga de ir a buscar realmente un fotograma de datos y realizar el efecto croma.

```js
  computeFrame: function() {
    this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
    let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
    let l = frame.data.length / 4;

    for (let i = 0; i < l; i++) {
      let r = frame.data[i * 4 + 0];
      let g = frame.data[i * 4 + 1];
      let b = frame.data[i * 4 + 2];
      if (g > 100 && r > 100 && b < 43)
        frame.data[i * 4 + 3] = 0;
    }
    this.ctx2.putImageData(frame, 0, 0);
    return;
  }
```

Cuando esta rutina es llamada, el elemento video muestra el fotograma de datos de video más reciente, que tiene este aspecto:

![video.png](video.png)

En la línea 2, ese fotograma de video se copia al contexto gráfico `ctx1` del primer lienzo, especificando como alto y ancho los valores que previamente guardamos para dibujar el fotograma a mitad de tamaño. Ten en cuenta que puedes pasar simplemente el elemento de video al método `drawImage()` del contexto para dibujar el fotograma de video actual en dicho contexto. El resultado es:

![sourcectx.png](sourcectx.png)

Línea 3 obtiene una copia de los datos gráficos del actual fotograma de video llamando al método `getImageData()` en el primer contexto. Esto proporciona los datos de imagen en píxeles de 32 bits sin procesar que podemos después manipular. Línea 4 calcula el número de píxeles de la imagen al dividir entre cuatro el tamaño total de los datos de la imagen del fotograma.

El bucle `for` que comienza en la línea 6 explora a través de los píxeles del fotograma, extrayendo los valores rojo, verde y azul para cada píxel, y compara los valores frente a números predeterminados que se utilizan para detectar la pantalla verde que se reemplazará por la imagen de fondo fija importada de `foo.png` .

Cada píxel de datos de imagen del fotograma que se encuentra que está dentro de los parámetros que se consideran parte de la pantalla verde tiene su valor alfa reemplazado por un cero, lo que indica que el píxel es totalmente transparente. Como resultado, la imagen final tiene toda el área de pantalla verde 100% transparente, de modo que cuando se dibuja en el contexto de destino en la línea 13, el resultado es una superposición sobre el fondo estático.

La imagen resultante tiene este aspecto:

![output.png](output.png)

Esto se hace en varias ocasiones mientras el video se reproduce, de manera que fotograma tras fotograma se procesa y se muestra con el efecto de croma.

[Ver este ejemplo en vivo](/samples/video/chroma-key/index.xhtml) .

## Consulta también

- [Usar audio y video en Firefox](/es/Usando_audio_y_video_en_Firefox)
