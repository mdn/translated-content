---
title: Dibujando formas con  canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
tags:
  - Canvas
  - HTML
  - HTML Canvas
  - HTML5
  - Intermedio
  - Tutorial
  - graficos
translation_of: Web/API/Canvas_API/Tutorial/Drawing_shapes
original_slug: Web/Guide/HTML/Canvas_tutorial/Dibujando_formas
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Ahora que hemos preparado nuestro [entorno canvas](/es/docs/Web/API/Canvas_API/Tutorial/Basic_usage), podemos entrar en detalles de como dibujar en el canvas. Al final de este artículo, habrás aprendido como dibujar rectángulos, triángulos, líneas, arcos y curvas, dándote familiaridad con algunas figuras básicas. Trabajar con rutas es esencial cuando dibujamos objetos sobre el canvas y veremos como se puede hacer eso.

## La cuadrícula

![](https://mdn.mozillademos.org/files/224/Canvas_default_grid.png)Antes de que podamos empezar a dibujar, necesitamos hablar sobre la cuadrícula del canvas o el **espacio de coordenadas**. La plantilla HTML de la página anterior tenía un elemento canvas con un 'height' y un 'width' de 150 píxeles. A la derecha, puedes ver este canvas con la cuadrícula por defecto superpuesta. Normalmente una unidad en la cuadrícula corresponde a un píxel en el elemento canvas. El origen de esta cuadrícula está posicionado en la esquina superior izquierda (coordenada (0,0)). Todos los elementos estan posicionados de manera relativa a este punto, así que la posición de la esquina superior izquierda del cuadrado azul es de 'x' pixeles desde la izquierda y 'y' pixeles desde arriba (coordenada (x,y)). Mas tarde en este tutorial veremos como trasladar el punto de origen a una posicion diferente, girar la cuadrícula e incluso darle una escala diferente. Por ahora nos dedicaremos a lo mas común.

## Dibujando rectángulos

A diferencia de [SVG](/es/docs/SVG "en/SVG"), {{HTMLElement("canvas")}} solo soporta una forma primitiva: rectangulos. Todas las otras formas deben ser creadas por la combinación de uno o más trazos, listas de puntos conectados por líneas. Afortunadamente, tenemos una variedad de funciones para dibujar trazos que hacen posible componer formas muy complejas.

Primero veamos el rectángulo. Aquí hay tres funciones que podemos usar en el canvas para dibujarlos:

- `fillRect(x, y, width, height)`
  - : Dibuja un rectángulo relleno.
- `strokeRect(x, y, width, height)`
  - : Dibuja el contorno de un rectángulo.
- `clearRect(x, y, width, height)`
  - : Borra un área rectangular especificada, dejándola totalmente transparente.

Cada una de estas tres funciones toma los mismos parámetros. X e Y especifican la posición del canvas (en relación con el origen) desde la esquina superior izquierda del rectángulo. Tambien especifica los parámetros de anchura y altura que proporcionan el tamaño del rectángulo.

A continuación se muestra la función draw() de la página anterior, pero ahora haciendo uso de estas tres funciones.

### Ejemplo de forma rectangular

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);
  }
}
```

El resultado de este ejemplo se muestra a continuación.

{{EmbedLiveSample("Rectangular_shape_example", 160, 160, "https://mdn.mozillademos.org/files/245/Canvas_rect.png")}}

La función fillRect() dibuja un cuadrado grande negro de 100 píxeles en cada lado. La función clearRect() luego borra un cuadrado de 60x60 píxeles del centro, y luego strokeRect() es llamado para crear un contorno rectangular de 50x50 píxeles dentro del cuadrado borrado.

En las próximas páginas veremos dos métodos alternativos para clearRect(), y también veremos cómo cambiar el color y el trazo de diferentes formas.

A diferencia de las funciones de trazo que veremos en la próxima sección, las tres funciones del rectángulo dibujan inmediatamente en el canvas.

## Dibujando trazos

Crear formas mediante trazos requiere algunos pasos adicionales.

1. Primero, se crea el trazo.
2. A continuación, se usan [comandos de dibujo](/es/docs/Web/API/CanvasRenderingContext2D#Paths) para dibujar dentro del trazo.
3. Después, se cierra el trazo.
4. Una vez el trazo ha sido creado, se le puede dar contorno o relleno para renderizarlo.

Estas son las funciones que se usan para llevar a cabo estos pasos:

- `beginPath()`
  - : Crea un nuevo trazo. Una vez creado, los comandos de dibujo futuros son aplicados dentro del trazo y usados para construir el nuevo trazo hacia arriba.
- `closePath()`
  - : Cierra el trazo de tal forma que los comandos de dibujo futuros son, una vez más redireccionados al contexto.
- `stroke()`
  - : Dibuja el contorno de la forma.
- `fill()`
  - : Dibuja una forma solida rellenando el área del trazo.

El primer paso para crear un trazo es llamar la función `beginPath()`. Internamente, los trazos son guardados como una lista de subtrazos (lineas, arcos, etc) los cuales juntos crean una forma. Todo tiempo que sea llamado este método la lista es reseteada y podemos empezar a dibujar nuevas formas.

> **Nota:** Cuando el trazo actual este vacio, como aparece inmediatamente despues de llamar la función `beginPath()`, o en un canvas nuevo, el primer comando para la construcción del trazo es siempre tratada como un `moveTo()`, independientemente de cual es el trazo actual. Por esta razón casi siempre querrás específicamente setear tu posición de inicio despues de resetear un trazo.

El segundo paso es llamar los métodos que específican los trazos a crear. Los veremos en seguida.

El tercero, y un paso opcional, es llamar a la función `closePath()`. Este método trata de cerrar la forma dibujando una linea recta desde el punto actual al inicio. Si la forma ya ha sido cerrada o hay solamente un punto en la lista, la función hace nada.

> **Nota:** Cuando llamas a la función `fill()`, cualquier forma abierta es cerrada automaticamente, de tal forma que no tendrás que llamar a la función `closePath()`. Este no es el caso cuando llamas a la función `stroke()`.

### Dibujando un triangulo

Por ejemplo, el código para dibujar un triangulo luciría como el siguiente:

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(75,50);
    ctx.lineTo(100,75);
    ctx.lineTo(100,25);
    ctx.closePath();
    ctx.fill();
  }
}
```

El resultado lucirá así:

{{EmbedLiveSample("Drawing_a_triangle", 160, 160)}}

### Moviendo la pluma

Una función muy útil, la cual realmente no dibuja algo pero convierte parte de la lista de trazos descrita arriba, es la función `moveTo()`. Puedes, probablemente, pensar mejor de esta como levantar el lápiz o la pluma de un punto en un pedazo de papel y ponerlo en el siguiente punto.

- `moveTo(x, y)`
  - : Mueve la pluma a las coordenadas específicadas por `x` e `y`.

Cuando el canvas es inicializado ó la función `beginPath()` es llamada, querrás usar la función `moveTo()` para colocar el punto de inicio en alguna otra parte. Podríamos usar `moveTo()` para dibujar trazos sin conectar. Toma un vistazo a la cara sonriente de abajo. He marcado los lugares donde use el método `moveTo()` (las líneas rojas).

Para intentar esto por tí mismo, puedes usar el pequeño código de abajo. Solo pégalo dentro de la función `draw()` que vimos antes.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // Círculo externo
    ctx.moveTo(110,75);
    ctx.arc(75,75,35,0,Math.PI,false);   // Boca (contra reloj)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // Ojo izquierdo
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // Ojo derecho
    ctx.stroke();
  }
}
```

El resultado luce así:

{{EmbedLiveSample("Moving_the_pen", 160, 160, "https://mdn.mozillademos.org/files/252/Canvas_smiley.png")}}

Si quisieras ver las líneas conectadas, puedes remover las líneas de código que llaman `moveTo()`.

> **Nota:** Para aprender más sobre la función `arc()`, vea los [Arcs](#arcs) a continuación.

### Líneas

Para dibujar lineas rectas usa el método `lineTo()`.

- `lineTo(x, y)`
  - : Dibuja una línea desde la posición actual del dibujo a la posición específicada por `x` e `y`.

Este método toma dos argumentos `x` e `y`, los cuales son las coordenadas del punto final de la linea. El punto de inicio es dependiente de los trazos previamente dibujados, donde el punto final del trazo anterior es el punto inicial para el siguiente, etc. El punto de inicio también puede ser cambiado usando el método `moveTo()`.

El ejemplo siguiente dibuja dos triángulos, uno rellenado y el otro contorneado.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // Triángulo rellenado
    ctx.beginPath();
    ctx.moveTo(25,25);
    ctx.lineTo(105,25);
    ctx.lineTo(25,105);
    ctx.fill();

    // Triángulo contorneado
    ctx.beginPath();
    ctx.moveTo(125,125);
    ctx.lineTo(125,45);
    ctx.lineTo(45,125);
    ctx.closePath();
    ctx.stroke();
  }
}
```

Esto comienza llamando a `beginPath()` para empezar una nueva forma. Entonces usamos el método `moveTo()` para mover el punto de inicio a la posición deseada. Debajo de esto dos líneas son dibujadas lo cual pinta dos lados del triángulo.

{{EmbedLiveSample("Lines", 160, 160, "https://mdn.mozillademos.org/files/238/Canvas_lineTo.png")}}

Te darás cuenta de la diferencia entre el triángulo rellenado y el contorneado. Esto es, como se menciona arriba, porque las formas son automáticamente cerradas cuando un trazo es rellenado, pero no cuando esta contorneado. Si sacamos el `closePath()` para el triángulo contorneado, solamente dos líneas serian dibujadas, no un triángulo completo.

### Arcos

Para dibujar arcos o circulos usamos el método `arc()`. También puedes usar `arcTo()`, pero su implementación es un poco menos confiable, así que no lo cubriremos aquí.

- `arc(x, y, radius, startAngle, endAngle, anticlockwise)`
  - : Dibuja un arco.

Este método toma cinco parámetros: `x` e `y` son las coordenadas del centro del círculo en el cual el arco debería ser dibujado. `radius` se explica por sí solo. Los parámetros `startAngle` y `endAngle` definen el punto de inicio y punto final del arco en radianes a lo largo de la curva del círculo. Estos son medidos desde el eje x. El parámetro `anticlockwise` es un valor Booleano el cual cuando es verdadero (`true`) dibuja el arco al contrario de las manecillas del reloj, de lo contrario el arco es dibujado al sentido de las manecillas del reloj.

> **Nota:** Los ángulos en la función del arco (`arc`) son medidos en radianes, no en grados. Para convertir grados a radianes puedes usar la siguiente expresión en Javascript: `radians = (Math.PI/180)*degrees`.

El siguiente ejemplo es un poco más complejo que otros que hemos visto arriba. Esto dibuja 12 diferentes arcos, todos con diferentes ángulos y rellenos.

Las dos sentencias `for` son para iterar a través de las filas y columnas de los arcos. Para cada arco, empezamos un nuevo trazo llamando `beginPath()`. En el código, cada uno de los parámetros para el arco estan en una variable para su entendimiento, pero no es necesario esto en la vida real.

Las coordenadas `x` e `y` deberían ser suficientemente claras. `radius` y `startAngle` estan arreglados. El `endAngle` inicia en 180 grados (la mitad de un círculo) en la primera columna y es incrementado por pasos de 90 grados, culminando en un círculo completo en la última columna.

El parámetro `clockwise` resulta, en la primera y tercera fila siendo dibujado como un arco al sentido de las manecillas de reloj y la segunda y cuarta fila como arcos al contrario de las manecillas de reloj. Finalmente, la estructura `if` hace los arcos contorneados a la mitad desde arriba y los arcos hacia abajorellenados a la mitad.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="200"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    for(var i=0;i<4;i++){
      for(var j=0;j<3;j++){
        ctx.beginPath();
        var x              = 25+j*50;               // Coordenada x
        var y              = 25+i*50;               // Coordenada y
        var radius         = 20;                    // Radio del arco
        var startAngle     = 0;                     // Punto inicial del círculo
        var endAngle       = Math.PI+(Math.PI*j)/2; // Punto final del círculo
        var anticlockwise  = i%2==0 ? false : true; // Sentido de las manecillas del reloj y contrario a ellas

        ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

        if (i>1){
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
```

{{EmbedLiveSample("Arcs", 160, 210, "https://mdn.mozillademos.org/files/204/Canvas_arc.png")}}

### Curvas Bezier curvas cuadráticas

El siguiente tipo de trazos disponibles son las [curvas Bézier](http://en.wikipedia.org/wiki/B%C3%A9zier_curve), en sus dos variantes, cúbicas y cuadráticas. Son usadas generalmente para dibujar complejas formas orgánicas.

- `quadraticCurveTo(cp1x, cp1y, x, y)`
  - : Dibuja una curva cuadrática de Bézier desde la posición actual de la pluma hasta el punto final especificado por `x` e `y`, utilizando el punto de control especificado por `cp1x` y `cp1y`.
- `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`
  - : Dibuja una curva cúbica de Bézier desde la posición actual de la pluma hasta el punto final especificado por `x` e `y`, utilizando los puntos de control especificados por (`cp1x`, `cp1y`) y (`cp2x`, `cp2y`).

![](https://mdn.mozillademos.org/files/223/Canvas_curves.png)La diferencia entre estos puede describirse mejor utilizando la imagen de la derecha. Una curva cuadrática de Bézier tiene un punto inicial y un punto final (puntos azules) y un solo **punto de control** (indicado por el punto rojo), mientras que una curva cúbica de Bézier utiliza dos puntos de control.

Los parámetros `x` e `y` de ambos métodos son las coordenadas del punto final. `cp1x` y `cp1y` son las coordenadas del primer punto de control, y `cp2x` y `cp2y` son las coordenadas del segundo punto de control.

El uso de curvas cuadráticas y cúbicas Bézier puede ser bastante difícil, ya que a diferencia del software de dibujo vectorial como Adobe Illustrator, no tenemos respuesta visual directa en cuanto a lo que estamos haciendo. Esto hace bastante difícil dibujar formas complejas. En el siguiente ejemplo, vamos a dibujar algunas formas orgánicas simples, pero si tienes el tiempo y, sobre todo, la paciencia, se pueden crear formas mucho más complejas.

No hay nada muy difícil en estos ejemplos. En ambos casos vemos una sucesión de curvas que se dibujan que finalmente dan lugar a una forma completa.

#### Curvas de Bezier cuadraticas

Este ejemplo usa multiples curvas cuadraticas de Bézier para renderizar un globo de voz.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75,25);
    ctx.quadraticCurveTo(25,25,25,62.5);
    ctx.quadraticCurveTo(25,100,50,100);
    ctx.quadraticCurveTo(50,120,30,125);
    ctx.quadraticCurveTo(60,120,65,100);
    ctx.quadraticCurveTo(125,100,125,62.5);
    ctx.quadraticCurveTo(125,25,75,25);
    ctx.stroke();
  }
}
```

{{EmbedLiveSample("Quadratic_Bezier_curves", 160, 160, "https://mdn.mozillademos.org/files/243/Canvas_quadratic.png")}}

#### Curvas cúbicas Bezier

Este ejemplo dibuja un corazon usanco curvas cúbicas de Bézier.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    // Quadratric curves example
    ctx.beginPath();
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();
  }
}
```

{{EmbedLiveSample("Cubic_Bezier_curves", 160, 160, "https://mdn.mozillademos.org/files/207/Canvas_bezier.png")}}

### Rectangles

In addition to the three methods we saw in [Drawing rectangles](#drawing_rectangles), which draw rectangular shapes directly to the canvas, there's also the `rect()` method, which adds a rectangular path to a currently open path.

- `rect(x, y, width, height)`
  - : Draws a rectangle whose top-left corner is specified by (`x`, `y`) with the specified `width` and `height`.

When this method is executed, the `moveTo()` method is automatically called with the parameters (0,0). In other words, the current pen position is automatically reset to the default coordinates.

### Making combinations

So far, each example on this page has used only one type of path function per shape. However, there's no limitation to the number or types of paths you can use to create a shape. So in this final example, let's combine all of the path functions to make a set of very famous game characters.

```html hidden
<html>
 <body onload="draw();">
   <canvas id="canvas" width="150" height="150"></canvas>
 </body>
</html>
```

```js
function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');

    roundedRect(ctx,12,12,150,150,15);
    roundedRect(ctx,19,19,150,150,9);
    roundedRect(ctx,53,53,49,33,10);
    roundedRect(ctx,53,119,49,16,6);
    roundedRect(ctx,135,53,49,33,10);
    roundedRect(ctx,135,119,25,49,10);

    ctx.beginPath();
    ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
    ctx.lineTo(31,37);
    ctx.fill();

    for(var i=0;i<8;i++){
      ctx.fillRect(51+i*16,35,4,4);
    }

    for(i=0;i<6;i++){
      ctx.fillRect(115,51+i*16,4,4);
    }

    for(i=0;i<8;i++){
      ctx.fillRect(51+i*16,99,4,4);
    }

    ctx.beginPath();
    ctx.moveTo(83,116);
    ctx.lineTo(83,102);
    ctx.bezierCurveTo(83,94,89,88,97,88);
    ctx.bezierCurveTo(105,88,111,94,111,102);
    ctx.lineTo(111,116);
    ctx.lineTo(106.333,111.333);
    ctx.lineTo(101.666,116);
    ctx.lineTo(97,111.333);
    ctx.lineTo(92.333,116);
    ctx.lineTo(87.666,111.333);
    ctx.lineTo(83,116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91,96);
    ctx.bezierCurveTo(88,96,87,99,87,101);
    ctx.bezierCurveTo(87,103,88,106,91,106);
    ctx.bezierCurveTo(94,106,95,103,95,101);
    ctx.bezierCurveTo(95,99,94,96,91,96);
    ctx.moveTo(103,96);
    ctx.bezierCurveTo(100,96,99,99,99,101);
    ctx.bezierCurveTo(99,103,100,106,103,106);
    ctx.bezierCurveTo(106,106,107,103,107,101);
    ctx.bezierCurveTo(107,99,106,96,103,96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101,102,2,0,Math.PI*2,true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89,102,2,0,Math.PI*2,true);
    ctx.fill();
  }
}

// A utility function to draw a rectangle with rounded corners.

function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.stroke();
}
```

The resulting image looks like this:

{{EmbedLiveSample("Making_combinations", 160, 160)}}

We won't go over this in detail, since it's actually surprisingly simple. The most important things to note are the use of the `fillStyle` property on the drawing context, and the use of a utility function (in this case `roundedRect()`). Using utility functions for bits of drawing you do often can be very helpful and reduce the amount of code you need, as well as its complexity.

We'll take another look at `fillStyle`, in more detail, later in this tutorial. Here, all we're doing is using it to change the fill color for paths from the default color of black to white, and then back again.

{{PreviousNext("Web/Guide/HTML/Canvas_tutorial/Basic_usage", "Web/Guide/HTML/Canvas_tutorial/Using_images")}}
