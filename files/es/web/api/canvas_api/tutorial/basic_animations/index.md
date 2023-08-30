---
title: Animaciones básicas
slug: Web/API/Canvas_API/Tutorial/Basic_animations
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}

Ya que estamos usando JavaScript para controlar elementos {{HTMLElement("canvas")}} , también es muy fácil hacer animaciones (interactivas). En este capitulo veremos como hacer algunas animaciones básicas.

Probablemente la mayor limitación es que una vez que se dibuja una forma, se mantiene de esa manera. Si necesitamos moverlo tenemos que volver a dibujarlo y todo lo que se dibujó antes. Se necesita mucho tiempo para volver a dibujar estructuras complejas y el rendimiento depende en gran medida de la velocidad de la computadora en la que se ejecuta.

## Pasos básicos de animación

Estos son los pasos que necesitas para dibujar un cuadro:

1. **Limpiar el canvas**
   A menos que las formas que vas a dibujar llenen el canvas completo (por ejemplo, una imagen de fondo), debes borrar cualquier forma que haya dibujado previamente. La forma más fácil de hacerlo es usar el método {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}.
2. **Guardar el estado del canvas**
   Si estás cambiando alguna configuración (como estilos, transformaciones, etc.) que afecte el estado del canvas y deseas asegurarte de que se utiliza el estado original cada vez que se dibuja una figura, debes guardar ese estado original.
3. **Dibujar formas animadas**
   El paso en el que realizas el renderizado del cuadro actual.
4. **Restaurar el estado del canvas**
   Si has guardado el estado, restáuralo antes de dibujar un nuevo cuadro.

## Controlando una animación

Las formas se dibujan en el canvas utilizando los métodos de canvas directamente o llamando a funciones personalizadas. En circunstancias normales, solo vemos que estos resultados aparecen en el canvas cuando el script termina de ejecutarse. Por ejemplo, no es posible hacer una animación desde un bucle `for`.

Eso significa que necesitamos una forma de ejecutar nuestras funciones de dibujo durante un período de tiempo. Hay dos formas de controlar una animación como esta.

### Actualizaciones Programadas

Primero {{domxref("window.setInterval()")}}, {{domxref("window.setTimeout()")}}, y {{domxref("window.requestAnimationFrame()")}} son funciones que pueden ser usadas para llamar una función especifica en un periodo de tiempo establecido.

- {{domxref("WindowTimers.setInterval", "setInterval(function, delay)")}}
  - : Ejecuta una función especificada por `function` cada `delay` milisegundos.
- {{domxref("WindowTimers.setTimeout", "setTimeout(function, delay)")}}
  - : Ejecuta una función especificada por `function` dentro de `delay` milisegundos.
- {{domxref("Window.requestAnimationFrame()", "requestAnimationFrame(callback)")}}
  - : Comunica al navegador que deseas iniciar una animación y requieres que el navegador llame a las funciones especificas para actualizar la misma antes de la siguiente escena.

Si no quieres ninguna interacción del usuario puedes usar la función `setInterval()` que repite la ejecución del código suministrado. Si lo que queremos es hacer un juego, podríamos usar eventos de teclado o el mouse para controlar la animación y usar `setTimeout()`. Al establecer los {{domxref("EventListener")}}, capturamos cualquier interacción del usuario y ejecutamos nuestras funciones de animación.

> **Nota:** En los siguiente ejemplo,usaremos el método para controlar animaciones {{domxref("window.requestAnimationFrame()")}}. El método `requestAnimationFrame` provee formas amigables y mas eficientes para animar llamando cada marco de animación cuando el sistema esta listo para dibujar. La cantidad de devoluciones de llamadas suele ser 60 veces por segundo y podría ser reducido a menor periodo cuando se corre en un segundo plano. Para mas información acerca de los ciclos de animación, especialmente para juegos, Ver el Articulo [Anatomía de un videojuego](/es/docs/Games/Anatomy) en nuestra [GameZona de desarrollo de Juegos](/es/docs/Games).

## Un sistema solar animado

Este ejemplo animado es un pequeño modelo de nuestro sistema solar.

```js
var sun = new Image();
var moon = new Image();
var earth = new Image();
function init() {
  sun.src = "canvas_sun.png";
  moon.src = "canvas_moon.png";
  earth.src = "canvas_earth.png";
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");

  ctx.globalCompositeOperation = "destination-over";
  ctx.clearRect(0, 0, 300, 300); // limpiar canvas

  ctx.fillStyle = "rgba(0,0,0,0.4)";
  ctx.strokeStyle = "rgba(0,153,255,0.4)";
  ctx.save();
  ctx.translate(150, 150);

  // La tierra
  var time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() +
      ((2 * Math.PI) / 60000) * time.getMilliseconds(),
  );
  ctx.translate(105, 0);
  ctx.fillRect(0, -12, 50, 24); // Sombra
  ctx.drawImage(earth, -12, -12);

  // La luna
  ctx.save();
  ctx.rotate(
    ((2 * Math.PI) / 6) * time.getSeconds() +
      ((2 * Math.PI) / 6000) * time.getMilliseconds(),
  );
  ctx.translate(0, 28.5);
  ctx.drawImage(moon, -3.5, -3.5);
  ctx.restore();

  ctx.restore();

  ctx.beginPath();
  ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Órbita terrestre
  ctx.stroke();

  ctx.drawImage(sun, 0, 0, 300, 300);

  window.requestAnimationFrame(draw);
}

init();
```

```html hidden
<canvas id="canvas" width="300" height="300"></canvas>
```

{{EmbedLiveSample("", "310", "310")}}

## Un reloj animado

Este ejemplo dibuja una reloj animado, mostrando la hora actual.

```js
function clock() {
  var now = new Date();
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.save();
  ctx.clearRect(0, 0, 150, 150);
  ctx.translate(75, 75);
  ctx.scale(0.4, 0.4);
  ctx.rotate(-Math.PI / 2);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "white";
  ctx.lineWidth = 8;
  ctx.lineCap = "round";

  // Aguja de la hora
  ctx.save();
  for (var i = 0; i < 12; i++) {
    ctx.beginPath();
    ctx.rotate(Math.PI / 6);
    ctx.moveTo(100, 0);
    ctx.lineTo(120, 0);
    ctx.stroke();
  }
  ctx.restore();

  // Aguja del minuto
  ctx.save();
  ctx.lineWidth = 5;
  for (i = 0; i < 60; i++) {
    if (i % 5 != 0) {
      ctx.beginPath();
      ctx.moveTo(117, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.rotate(Math.PI / 30);
  }
  ctx.restore();

  var sec = now.getSeconds();
  var min = now.getMinutes();
  var hr = now.getHours();
  hr = hr >= 12 ? hr - 12 : hr;

  ctx.fillStyle = "black";

  // Escribimos la hora
  ctx.save();
  ctx.rotate(
    hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
  );
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.moveTo(-20, 0);
  ctx.lineTo(80, 0);
  ctx.stroke();
  ctx.restore();

  // escribimos los minutos
  ctx.save();
  ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.moveTo(-28, 0);
  ctx.lineTo(112, 0);
  ctx.stroke();
  ctx.restore();

  // escribimos los segundos
  ctx.save();
  ctx.rotate((sec * Math.PI) / 30);
  ctx.strokeStyle = "#D40000";
  ctx.fillStyle = "#D40000";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.moveTo(-30, 0);
  ctx.lineTo(83, 0);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.restore();

  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = "#325FA2";
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.restore();

  window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

{{EmbedLiveSample("", "180", "180")}}

## Un panorama en bucle

En este ejemplo, una foto panorámica avanza de izquierda a derecha. Donde usaremos [una imagen del Parque Nacional de Yosemite](http://commons.wikimedia.org/wiki/File:Capitan_Meadows,_Yosemite_National_Park.jpg) que tomamos de Wikipedia, pero tu podrías usar cualquier imagen que sea mas grande que el canvas.

```js
var img = new Image();

// Variables de usuario - personalizar estas para cambiar la imagen cuando inicie el desplazamiento
// dirección y velocidad.

img.src = "capitan_meadows_yosemite_national_park.jpg";
var CanvasXSize = 800;
var CanvasYSize = 200;
var speed = 30; //más bajo es más rápido
var scale = 1.05;
var y = -4.5; //desplazamiento vertical

// Programa principal

var dx = 0.75;
var imgW;
var imgH;
var x = 0;
var clearX;
var clearY;
var ctx;

img.onload = function () {
  imgW = img.width * scale;
  imgH = img.height * scale;

  if (imgW > CanvasXSize) {
    // imagen más grande que canvas
    x = CanvasXSize - imgW;
  }
  if (imgW > CanvasXSize) {
    // ancho de imagen más grande que canvas
    clearX = imgW;
  } else {
    clearX = CanvasXSize;
  }
  if (imgH > CanvasYSize) {
    // altura de la imagen más grande que canvas
    clearY = imgH;
  } else {
    clearY = CanvasYSize;
  }

  // obtener contexto de canvas
  ctx = document.getElementById("canvas").getContext("2d");

  // establecer frecuencia de actualización
  return setInterval(draw, speed);
};

function draw() {
  ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

  // si la imagen es <= tamaño de Canvas
  if (imgW <= CanvasXSize) {
    // reiniciar, comenzar desde el principio
    if (x > CanvasXSize) {
      x = -imgW + x;
    }
    // dibujar image1 adicional
    if (x > 0) {
      ctx.drawImage(img, -imgW + x, y, imgW, imgH);
    }
    // dibujar image2 adicional
    if (x - imgW > 0) {
      ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
    }
  }

  // la imagen es > tamaño de Canvas
  else {
    // reiniciar, comenzar desde el principio
    if (x > CanvasXSize) {
      x = CanvasXSize - imgW;
    }
    // dibujar image adicional
    if (x > CanvasXSize - imgW) {
      ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
    }
  }
  // dibujar imagen
  ctx.drawImage(img, x, y, imgW, imgH);
  // cantidad para moverse
  x += dx;
}
```

Debajo esta el elemento {{HTMLElement("canvas")}} en el cual va la imagen se va ha desplazar. Nota que el ancho y el alto especificado aquí son las variables `CanvasXZSize` y `CanvasYSize`.

```html
<canvas id="canvas" width="800" height="200"></canvas>
```

{{EmbedLiveSample("", "830", "230")}}

## Otros ejemplos

- [Un ray-caster básico](/es/docs/Web/API/Canvas_API/A_basic_ray-caster)
  - : Un buen ejemplo de como hacer animaciones usando como control el teclado.
- [Animaciones avanzadas](/es/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)
  - : Vamos a echar un vistazo a algunas técnicas de animación avanzadas y física en el próximo capítulo.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Compositing", "Web/API/Canvas_API/Tutorial/Advanced_animations")}}
