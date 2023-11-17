---
title: Uso básico de Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Dibujando_formas")}}

Comenzamos este tutorial observando el elemento {{HTMLElement("canvas")}}. Al final de esta página, sabrás como configurar el entorno 2D de canvas y habrás dibujado el primer ejemplo en tu navegador.

## El elemento `<canvas>`

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

A primera vista, un elemento {{HTMLElement("canvas")}} es parecido al elemento {{HTMLElement("img")}}, con la diferencia que este no tiene los atributos `src` y `alt`. El elemento `<canvas>` tiene solo dos atributos - [`width`](/es/docs/Web/HTML/Element/canvas#width) y [`height`](/es/docs/Web/HTML/Element/canvas#height). Ambos son opcionales y pueden ser definidos usando propiedades [DOM](/es/docs/DOM). Cuando los atributos ancho y alto no estan especificados, el lienzo se inicializara con **300 pixels** ancho y **150 pixels** de alto. El elemento puede ser arbitrariamente redimensionado por CSS, pero durante el renderizado la imagen es escalada para ajustarse al tamaño de su layout. Si el tamaño del CSS no respeta el ratio del canvas inicial, este aparecerá distorsionado.

> **Nota:** Si su renderizado se ve distorsionado, pruebe especificar los atributos width y height explícitamente en los atributos del `<canvas>` , y no usando CSS.

El atributo [id](/es/docs/Web/HTML/Atributos_Globales/id) no está especificado para el elemento `<canvas>` pero es uno de los [atributos globales de HTML](/es/docs/Web/HTML/Atributos_Globales) el cual puede ser aplicado a cualquier elemento HTML (como [class](/es/docs/Web/HTML/Global_attributes/class) por ejemplo). Siempre es buena idea proporcionar un `id` porque esto hace más fácil identificarlo en un script.

El elemento `<canvas>` puede ser estilizado como a cualquier imagen normal (margin, border, background, etc). Estas reglas, sin embargo, no afectan a lo dibujado sobre el canvas. Mas adelante veremos cómo se hace esto en un [capítulo dedicado](/es/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) en este tutorial. Cuando no tenemos reglas de estilo aplicadas al canvas, este será completamente transparente.

### Contenido alternativo

El elemento \<canvas> se diferencia de un tag {{HTMLElement("img")}} en que, como los elementos {{HTMLElement("video")}}, {{HTMLElement("audio")}} o {{HTMLElement("picture")}}, es fácil definir contenido alternativo (fallback content) para mostrarse en navegadores viejos que no soporten el elemento \<canvas>, como versiones de Internet Explorer previas a la versión 9 o navegadores de texto. Siempre debes proporcionar contenido alternativo para mostrar en estos navegadores.

Proporcionar contenido alternativo es muy explicito: solo debemos insertar el contenido alterno dentro del elemento \<canvas>. Los navegadores que no soporten `<canvas>` ignoraran el contenedor y mostrarán el contenido indicado dentro de este. Navegadores que soporten `<canvas>` ignorarán el contenido en su interior (de las etiquetas), y mostrarán el canvas normalmente.

Por ejemplo, podremos proporcionar un texto descriptivo del contenido del canvas o proveer una imagen estática del contenido rederizado. Nos podría quedar algo así:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 +0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="" />
</canvas>
```

## Etiqueta `</canvas>` requerida

De manera distinta al elemento {{HTMLElement("img")}}, el elemento {{HTMLElement("canvas")}} requiere cerrar la etiqueta (`</canvas>`).

> **Nota:** Aunque las versiones anteriores del navegador Safari de Apple no requeria el cierre de la etiqueta, la especificacion indica que es necesaria, asi que tu deberias incluir esta para asegurarte la compatibilidad. Aquellas versiones de Safari (anteriores versiones a 2.0) renderizaran el contenido de regreso agregandolo al canvas mismo a no ser que utilice trucos de CSS para enmascararlo. Afortunadamente, los usuarios de aquellas versiones de Safari son raros hoy en dia.

Si el contenido alternativo no se necesita, un simple `<canvas id="foo" ...></canvas>` es completamente compatible con todos los navegadores que soportan canvas.

## El contexto de renderización

{{HTMLElement("canvas")}} crea un lienzo de dibujo fijado que expone uno o mas contextos renderizados, los cuales son usados para crear y manipular el contenido mostrado. Nos enfocaremos en renderizacion de contextos 2D. Otros contextos deberan proveer diferentes tipos de renderizaciones; por ejemplo, [WebGL](/es/docs/Web/WebGL) usa un 3D contexto ("experimental-webgl") basado sobre [OpenGL ES](http://www.khronos.org/opengles/).

El canvas esta inicialmente en blanco. Para mostrar alguna cosa, un script primero necesita acceder al contexto a renderizar y dibujar sobre este. El elemento {{HTMLElement("canvas")}} tiene un [method](/es/docs/Web/API/HTMLCanvasElement#Methods) llamado `getContext()`, usado para obtener el contexto a renderizar y sus funciones de dibujo. `getContext()` toma un parametro, el tipo de contexto. Para graficos 2D, como los que cubre este tutorial, su especificacion es "2d".

```js
var canvas = document.getElementById("tutorial");
var ctx = canvas.getContext("2d");
```

La primera linea regresa el nodo DOM para el elemento {{HTMLElement("canvas")}} llamando al metodo {{domxref("document.getElementById()")}}. Una vez tu tienes el elemento nodo, tu puedes acceder al contexto de dibujo usando su metodo `getContext()`.

## Comprobando soporte

El contenido de regreso que es mostrado en navegadores los cuales no soportan {{HTMLElement("canvas")}}. Para los Scripts puede tambien comprobarse su soporte desde la programacion por un simple test para la presencia del metodo `getContext()`. Con un trozo de codigo parecido al que viene debajo:

```js
var canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  var ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## Un esqueleto de plantilla

Aqui esta una plantilla minimalista, la cual usaremos como punto de partida para posteriores ejemplos.

```html
<html>
  <head>
    <title>Canvas tutorial</title>
    <script type="text/javascript">
      function draw() {
        var canvas = document.getElementById("tutorial");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");
        }
      }
    </script>
    <style type="text/css">
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body onload="draw();">
    <canvas id="tutorial" width="150" height="150"></canvas>
  </body>
</html>
```

El script incluye una funcion llamada draw(), la cual es ejecutada una vez finalizada la carga de la pagina; este esta hecho usando el evento load del documento. Esta funcion, o una parecida, podria tambien ser llamada usando {{domxref("window.setTimeout()")}}, {{domxref("window.setInterval()")}}, o cualquier otro manejador de evento, a lo largo de que la pagina esta siendo cargada la primera vez.

Aqui esta como la plantilla se ve en acción:

{{EmbedLiveSample("Un_esqueleto_de_plantilla", 160, 160)}}

## Un simple ejemplo

Para comenzar, daremos un vistazo a un simple ejemplo que dibuja dos rectangulos que se intersectan, uno de los cuales tiene alpha transparencia. Exploraremos como esto trabaja en mas detalle en posteriores ejemplos.

```html
<html>
  <head>
    <script type="application/javascript">
      function draw() {
        var canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          var ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200,0,0)";
          ctx.fillRect(10, 10, 55, 50);

          ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
          ctx.fillRect(30, 30, 55, 50);
        }
      }
    </script>
  </head>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

Este ejemplo quedaría así:

{{EmbedLiveSample("Un_simple_ejemplo", 160, 160, "canvas_ex1.png")}}

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial", "Web/Guide/HTML/Canvas_tutorial/Dibujando_formas")}}
