---
title: Dibujando formas con canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_shapes
l10n:
  sourceCommit: 411e3bb536f858a9d58600b4017979c79b2a4408
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}

Ahora que hemos preparado nuestro [entorno canvas](/es/docs/Web/API/Canvas_API/Tutorial/Basic_usage), podemos entrar en detalles de cómo dibujar en el canvas. Al final de este artículo, habrás aprendido cómo dibujar rectángulos, triángulos, líneas, arcos y curvas, familiarizándote con algunas de las formas básicas. Trabajar con trazados es esencial a la hora de dibujar objetos en el canvas y veremos cómo hacerlo.

## La cuadrícula

Antes de empezar a dibujar, tenemos que hablar de la cuadrícula del canvas o del **espacio de coordenadas**.
Nuestra estructura HTML de la página anterior tenía un elemento de canvas de 150 píxeles de ancho y 150 píxeles de alto.

![](canvas_default_grid.png)

Normalmente, 1 unidad en la cuadrícula corresponde a 1 píxel en el canvas. El origen de esta cuadrícula se sitúa en la esquina superior izquierda en la coordenada (0,0). Todos los elementos se colocan en relación con este origen. Así que la posición de la esquina superior izquierda del cuadrado azul se sitúa a x píxeles de la izquierda y a y píxeles de la parte superior, en la coordenada (x,y). Más adelante en este tutorial veremos cómo podemos trasladar el origen a una posición diferente, rotar la cuadrícula e incluso escalarla, pero por ahora nos ceñiremos a la posición por defecto.

## Dibujar rectángulos

A diferencia de {{Glossary("SVG")}}, {{HTMLElement("canvas")}} sólo admite dos formas primitivas: rectángulos y trazados (listas de puntos conectados por líneas). Todas las demás formas deben crearse combinando uno o más trazados. Por suerte, tenemos un surtido de funciones de dibujo de trazados que hacen posible componer formas muy complejas.

Primero veamos el rectángulo. Hay tres funciones que dibujan rectángulos en el canvas:

- {{domxref("CanvasRenderingContext2D.fillRect", "fillRect(x, y, width, height)")}}
  - : Dibuja un rectángulo relleno.
- {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect(x, y, width, height)")}}
  - : Dibuja un contorno rectangular.
- {{domxref("CanvasRenderingContext2D.clearRect", "clearRect(x, y, width, height)")}}
  - : Borra el área rectangular especificada, haciéndola totalmente transparente.

Cada una de estas tres funciones toma los mismos parámetros. `x` e `y` especifican la posición en el canvas (relativa al origen) de la esquina superior izquierda del rectángulo. `width` y `height` proporcionan el tamaño del rectángulo.

A continuación se muestra la función `draw()` de la página anterior, pero ahora hace uso de estas tres funciones.

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
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }
}
```

La salida de este ejemplo se muestra a continuación.

{{EmbedLiveSample("Rectangular_shape_example", 160, 160, "canvas_rect.png")}}

La función `fillRect()` dibuja un gran cuadrado negro de 100 píxeles en cada lado. La función `clearRect()` borra un cuadrado de 60x60 píxeles del centro, y luego se llama a `strokeRect()` para crear un contorno rectangular de 50x50 píxeles dentro del cuadrado borrado.

En las próximas páginas veremos dos métodos alternativos para `clearRect()`, y también veremos cómo cambiar el color y el estilo de trazo de las formas renderizadas.

A diferencia de las funciones de trazado que veremos en la siguiente sección, las tres funciones de rectángulo dibujan inmediatamente en el canvas.

## Dibujar trazados (paths)

Veamos ahora los trazados. Un trazado es una lista de puntos, conectados por segmentos de líneas que pueden ser de diferentes formas, curvas o no, de diferente anchura y de diferente color. Un trazado, o incluso un sub-trazado, puede ser cerrado. Para hacer formas usando trazados, damos algunos pasos adicionales:

1. Primero, se crea el camino.
2. Luego, se utiliza [comandos de dibujo](/es/docs/Web/API/CanvasRenderingContext2D#paths) para dibujar en el trazado.
3. Una vez creado el trazado, puedes trazar o rellenar el trazado para renderizarlo.

Aquí están las funciones utilizadas para realizar estos pasos:

- {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}}
  - : Crea un nuevo trazado. Una vez creado, los futuros comandos de dibujo se dirigen al trazado y se utilizan para construirlo.
- [Métodos de trazado (path)](/es/docs/Web/API/CanvasRenderingContext2D#paths)
  - : Métodos para establecer diferentes trazados para los objetos.
- {{domxref("CanvasRenderingContext2D.closePath", "closePath()")}}
  - : Añade una línea recta al trazado, que va al inicio del sub-trazado actual.
- {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}
  - : Dibuja la forma trazando su contorno.
- {{domxref("CanvasRenderingContext2D.fill", "fill()")}}
  - : Dibuja una forma sólida rellenando el área de contenido del trazado.

El primer paso para crear un trazado es llamar a `beginPath()`. Internamente, los trazados se almacenan como una lista de sub-trazados (líneas, arcos, etc.) que juntos forman una forma. Cada vez que se llama a este método, la lista se restablece y podemos empezar a dibujar nuevas formas.

> **Nota:** Cuando el trazado actual está vacío, como por ejemplo inmediatamente después de llamar a `beginPath()`, o en un canvas recién creado, el primer comando de construcción del trazado siempre se trata como un `moveTo()`, independientemente de lo que realmente sea. Por esta razón, casi siempre querrá establecer específicamente su posición inicial después de reiniciar un trazado.

El segundo paso es llamar a los métodos que realmente especifican los trazados a dibujar. Los veremos en breve.

El tercer paso, y opcional, es llamar a `closePath()`. Este método intenta cerrar la forma dibujando una línea recta desde el punto actual hasta el inicio. Si la forma ya ha sido cerrada o sólo hay un punto en la lista, esta función no hace nada.

> **Nota:** Cuando se llama a `fill()`, cualquier forma abierta se cierra automáticamente, por lo que no es necesario llamar a `closePath()`. Este **no** es el caso cuando se llama a `stroke()`.

### Dibujar un triángulo

Por ejemplo, el código para dibujar un triángulo sería algo así:

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="100" height="100"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}
```

El resultado se ve así:

{{EmbedLiveSample("Drawing_a_triangle", 110, 110, "triangle.png")}}

### Mover la pluma

Una función muy útil, que en realidad no dibuja nada sino que se convierte en parte de la lista de trazados descrita anteriormente, es la función `moveTo()`. La mejor manera de pensar en esto es como levantar un bolígrafo o un lápiz de un lugar en un pedazo de papel y colocarlo en el siguiente.

- {{domxref("CanvasRenderingContext2D.moveTo", "moveTo(x, y)")}}
  - : Mueve la pluma a las coordenadas especificadas por `x` e `y`.

Cuando se inicializa el canvas o se llama a `beginPath()`, normalmente se querrá utilizar la función `moveTo()` para colocar el punto de partida en otro lugar. También podemos usar `moveTo()` para dibujar trazados no conectados. Echa un vistazo a la cara sonriente de abajo.

Para probarlo por ti mismo, puedes utilizar el siguiente fragmento de código. Sólo tienes que pegarlo en la función `draw()` que vimos antes.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo externo
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Boca (en el sentido de las agujas del reloj)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
    ctx.stroke();
  }
}
```

El resultado se ve así:

{{EmbedLiveSample("Moving_the_pen", 160, 160, "canvas_smiley.png")}}

Si quisieras ver las líneas conectadas, puedes eliminar las líneas que llaman a `moveTo()`.

> **Nota:** Para saber más sobre la función `arc()`, consulte la sección [Arcos](#arcos) más abajo.

### Líneas

Para dibujar líneas rectas, utilice el método `lineTo()`.

- {{domxref("CanvasRenderingContext2D.lineTo", "lineTo(x, y)")}}
  - : Dibuja una línea desde la posición actual de dibujo hasta la posición especificada por `x` e `y`.

Este método toma dos argumentos, `x` e `y`, que son las coordenadas del punto final de la línea. El punto de partida depende de los trazados anteriores, donde el punto final del trazado anterior es el punto de partida del siguiente, etc. El punto de partida también puede cambiarse utilizando el método `moveTo()`.

El ejemplo siguiente dibuja dos triángulos, uno relleno y otro contorneado.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // Triángulo relleno
    ctx.beginPath();
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    // Triángulo contorneado
    ctx.beginPath();
    ctx.moveTo(125, 125);
    ctx.lineTo(125, 45);
    ctx.lineTo(45, 125);
    ctx.closePath();
    ctx.stroke();
  }
}
```

Esto comienza llamando a `beginPath()` para iniciar un nuevo trazado de forma. A continuación, utilizamos el método `moveTo()` para mover el punto de partida a la posición deseada. Debajo de esto, se dibujan dos líneas que forman los dos lados del triángulo.

{{EmbedLiveSample("Lines", 160, 160, "canvas_lineto.png")}}

Notará la diferencia entre el triángulo relleno y el trazado. Esto se debe, como se ha mencionado anteriormente, a que las formas se cierran automáticamente cuando se rellena un trazado, pero no cuando se traza. Si omitimos el `closePath()` para el triángulo trazado, sólo se habrían dibujado dos líneas, no un triángulo completo.

### Arcos

Para dibujar arcos o círculos, utilizamos los métodos `arc()` o `arcTo()`.

- {{domxref("CanvasRenderingContext2D.arc", "arc(x, y, radius, startAngle, endAngle, counterclockwise)")}}
  - : Dibuja un arco centrado en la posición _(x, y)_ con radio _r_ que comienza en _startAngle_ y termina en _endAngle_ yendo en la dirección indicada por _counterclockwise_ (por defecto en el sentido de las agujas del reloj).
- {{domxref("CanvasRenderingContext2D.arcTo", "arcTo(x1, y1, x2, y2, radius)")}}
  - : Dibuja un arco con los puntos de control y el radio dados, conectado al punto anterior por una línea recta.

Veamos con más detalle el método `arc`, que toma seis parámetros: `x` e `y` son las coordenadas del centro del círculo sobre el que se dibujará el arco. El parámetro `radio` se explica por sí mismo. Los parámetros `startAngle` y `endAngle` definen los puntos inicial y final del arco en radianes, a lo largo de la curva del círculo. Se miden desde el eje x. El parámetro `counterclockwise` es un valor Booleano que, cuando es `true`, dibuja el arco en sentido contrario a las agujas del reloj; en caso contrario, el arco se dibuja en sentido de las agujas del reloj.

> **Nota:** Los ángulos en la función `arc` se miden en radianes, no en grados. Para convertir los grados en radianes puedes utilizar la siguiente expresión de JavaScript: `radianes = (Math.PI/180)*grados`.

El siguiente ejemplo es un poco más complejo que los que hemos visto anteriormente. Dibuja 12 arcos diferentes, todos con diferentes ángulos y rellenos.

Los dos [bucles `for`](/es/docs/Web/JavaScript/Reference/Statements/for) son para recorrer las filas y columnas de arcos. Para cada arco, iniciamos un nuevo trazado llamando a `beginPath()`. En el código, cada uno de los parámetros del arco está en una variable para mayor claridad, pero no necesariamente se haría eso en la vida real.

Las coordenadas `x` e `y` deberían ser lo suficientemente claras. `radius` y `startAngle` son fijos. `endAngle` comienza en 180 grados (medio círculo) en la primera columna y se incrementa en pasos de 90 grados, culminando en un círculo completo en la última columna.

La sentencia para el parámetro `clockwise` hace que la primera y tercera fila se dibujen como arcos en el sentido de las agujas del reloj y la segunda y cuarta fila como arcos en sentido contrario. Por último, la sentencia `if` hace que la mitad superior tenga arcos trazados y la mitad inferior arcos rellenos.

> **Nota:** Este ejemplo requiere un canvas ligeramente más grande que los otros de esta página: 150 x 200 píxeles.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="200"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.beginPath();
        const x = 25 + j * 50; // Coordenada x
        const y = 25 + i * 50; // Coordenada y
        const radius = 20; // Radio del Arco
        const startAngle = 0; // Punto inicial del Círculo
        const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
        const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        if (i > 1) {
          ctx.fill();
        } else {
          ctx.stroke();
        }
      }
    }
  }
}
```

{{EmbedLiveSample("Arcs", 160, 210, "canvas_arc.png")}}

### Curvas de Bézier y cuadráticas

El siguiente tipo de trayectorias disponibles son las [Curvas de Bézier](/es/docs/Glossary/Bezier_curve), disponibles en las variedades cúbica y cuadrática. Se utilizan generalmente para dibujar formas orgánicas complejas.

- {{domxref("CanvasRenderingContext2D.quadraticCurveTo", "quadraticCurveTo(cp1x, cp1y, x, y)")}}
  - : Dibuja una curva cuadrática de Bézier desde la posición actual de la pluma hasta el punto final especificado por `x` e `y`, utilizando el punto de control especificado por `cp1x` y `cp1y`.
- {{domxref("CanvasRenderingContext2D.bezierCurveTo", "bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)")}}
  - : Dibuja una curva cúbica de Bézier desde la posición actual de la pluma hasta el punto final especificado por `x` e `y`, utilizando los puntos de control especificados por (`cp1x`, `cp1y`) y (cp2x, cp2y).

La diferencia entre ellas es que una curva de Bézier cuadrática tiene un punto inicial y otro final (puntos azules) y sólo un **punto de control** (indicado por el punto rojo) mientras que una curva de Bézier cúbica utiliza dos puntos de control.
![](canvas_curves.png)

Los parámetros `x` e `y` de estos dos métodos son las coordenadas del punto final. Los parámetros `cp1x` y `cp1y` son las coordenadas del primer punto de control, y `cp2x` y `cp2y` son las coordenadas del segundo punto de control.

El uso de las curvas cuadráticas y cúbicas de Bézier puede ser un reto, porque a diferencia de los programas de dibujo vectorial como Adobe Illustrator, no tenemos información visual directa sobre lo que estamos haciendo. Esto hace que sea bastante difícil dibujar formas complejas. En el siguiente ejemplo, dibujaremos algunas formas orgánicas simples, pero si tienes tiempo y, sobre todo, paciencia, se pueden crear formas mucho más complejas.

No hay nada muy difícil en estos ejemplos. En ambos casos vemos cómo se dibuja una sucesión de curvas que finalmente dan lugar a una forma completa.

#### Curvas cuadráticas de Bézier

Este ejemplo utiliza múltiples curvas cuadráticas de Bézier para representar un globo de voz.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // Ejemplo de curvas cuadráticas
    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
  }
}
```

{{EmbedLiveSample("Quadratic_Bezier_curves", 160, 160, "canvas_quadratic.png")}}

#### Curvas cúbicas de Bézier

Este ejemplo dibuja un corazón utilizando curvas cúbicas de Bézier.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    // Ejemplo de curvas cúbicas
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fill();
  }
}
```

{{EmbedLiveSample("Cubic_Bezier_curves", 160, 160, "canvas_bezier.png")}}

### Rectángulos

Además de los tres métodos que vimos en [Dibujar rectángulos](#dibujar_rectángulos), que dibujan formas rectangulares directamente en el canvas, existe también el método `rect()`, que añade un trazado rectangular a un trazado actualmente abierto.

- {{domxref("CanvasRenderingContext2D.rect", "rect(x, y, width, height)")}}
  - : Dibuja un rectángulo cuya esquina superior izquierda está especificada por (`x`, `y`) con el `width` y `height` especificados.

Antes de que se ejecute este método, se llama automáticamente al método `moveTo()` con los parámetros (x,y). En otras palabras, la posición actual de la pluma se restablece automáticamente a las coordenadas por defecto.

### Hacer combinaciones

Hasta ahora, cada ejemplo de esta página ha utilizado sólo un tipo de función de trazado por forma. Sin embargo, no hay ninguna limitación en cuanto al número o los tipos de trazados que puedes utilizar para crear una forma. Así que en este último ejemplo, vamos a combinar todas las funciones de trazado para crear un conjunto de personajes de juegos muy famosos.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="150" height="150"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    roundedRect(ctx, 12, 12, 150, 150, 15);
    roundedRect(ctx, 19, 19, 150, 150, 9);
    roundedRect(ctx, 53, 53, 49, 33, 10);
    roundedRect(ctx, 53, 119, 49, 16, 6);
    roundedRect(ctx, 135, 53, 49, 33, 10);
    roundedRect(ctx, 135, 119, 25, 49, 10);

    ctx.beginPath();
    ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    ctx.lineTo(31, 37);
    ctx.fill();

    for (let i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 35, 4, 4);
    }

    for (i = 0; i < 6; i++) {
      ctx.fillRect(115, 51 + i * 16, 4, 4);
    }

    for (i = 0; i < 8; i++) {
      ctx.fillRect(51 + i * 16, 99, 4, 4);
    }

    ctx.beginPath();
    ctx.moveTo(83, 116);
    ctx.lineTo(83, 102);
    ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    ctx.lineTo(111, 116);
    ctx.lineTo(106.333, 111.333);
    ctx.lineTo(101.666, 116);
    ctx.lineTo(97, 111.333);
    ctx.lineTo(92.333, 116);
    ctx.lineTo(87.666, 111.333);
    ctx.lineTo(83, 116);
    ctx.fill();

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.moveTo(91, 96);
    ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    ctx.moveTo(103, 96);
    ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    ctx.fill();

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    ctx.fill();
  }
}

// Una función auxiliar para dibujar un rectángulo con esquinas redondeadas.

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.arcTo(x, y, x, y + radius, radius);
  ctx.stroke();
}
```

La imagen resultante se ve así:

{{EmbedLiveSample("Making_combinations", 160, 160, "combinations.png")}}

No vamos a repasar esto en detalle, ya que en realidad es sorprendentemente sencillo. Las cosas más importantes a tener en cuenta son el uso de la propiedad `fillStyle` en el contexto de dibujo, y el uso de una función auxiliar (en este caso `roundedRect()`). El uso de funciones auxiliares para las partes del dibujo que se hacen a menudo puede ser muy útil y reducir la cantidad de código que se necesita, así como su complejidad.

Volveremos a ver `fillStyle`, con más detalle, más adelante en este tutorial. Aquí, todo lo que estamos haciendo es utilizarlo para cambiar el color de relleno de los trazados desde el color por defecto de negro a blanco, y luego de nuevo.

## Objetos Path2D

Como hemos visto en el último ejemplo, puede haber una serie trazados y comandos de dibujo para dibujar objetos en su canvas. Para simplificar el código y mejorar el rendimiento, el objeto {{domxref("Path2D")}}, disponible en las versiones recientes de los navegadores, le permite almacenar en caché o grabar estos comandos de dibujo. De este modo, se pueden reproducir los trazados rápidamente.
Veamos cómo podemos construir un objeto `Path2D`:

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : El constructor **`Path2D()`** devuelve un objeto `Path2D` recién instanciado, opcionalmente con otra ruta como argumento (crea una copia), u opcionalmente con una cadena de caracteres formada por datos de un trazado [SVG path](/es/docs/Web/SVG/Tutorial/Paths).

```js
new Path2D(); // Objeto Path2D vacío
new Path2D(path); // Copia de otro objecto Path2D
new Path2D(d); // Path2D a partir de datos de un trazado (SVG path)
```

Todos los [Métodos de trazado](/es/docs/Web/API/CanvasRenderingContext2D#paths) como `moveTo`, `rect`, `arc` o `quadraticCurveTo`, etc., que hemos conocido anteriormente, están disponibles en los objetos `Path2D`.

La API `Path2D` también añade una forma de combinar trazados mediante el método `addPath`. Esto puede ser útil cuando se quiere construir objetos a partir de varios componentes, por ejemplo.

- {{domxref("Path2D.addPath", "Path2D.addPath(path [, transform])")}}
  - : Añade un trazado al trazado actual con una matriz de transformación opcional.

### Ejemplo de Path2D

En este ejemplo, estamos creando un rectángulo y un círculo. Ambos se almacenan como un objeto `Path2D`, para que estén disponibles para su uso posterior. Con la nueva API `Path2D`, varios métodos se han actualizado para aceptar opcionalmente un objeto `Path2D` para utilizarlo en lugar del trazado actual. Aquí, `stroke` y `fill` se utilizan con un argumento de trazado para dibujar ambos objetos en el canvas, por ejemplo.

```html hidden
<html>
  <body onload="draw();">
    <canvas id="canvas" width="130" height="100"></canvas>
  </body>
</html>
```

```js
function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
  }
}
```

{{EmbedLiveSample("Path2D_example", 130, 110, "path2d.png")}}

### Uso de trazados (SVG paths)

Otra poderosa característica de la nueva API `Path2D` del canvas es el uso de datos de trazados o [SVG path](/es/docs/Web/SVG/Tutorial/Paths) para inicializar los trazados en el canvas. Esto podría permitirle pasar los datos del trazado y reutilizarlos tanto en el SVG como en el canvas.

El trazado se moverá al punto (`M10 10`) y luego se moverá horizontalmente 80 puntos a la derecha (`h 80`), luego 80 puntos hacia abajo (`v 80`), luego 80 puntos a la izquierda (`h -80`), y luego de vuelta al inicio (`z`). Puedes ver este ejemplo en el [`constructor Path2D`](/es/docs/Web/API/Path2D/Path2D#using_svg_paths).

```js
const p = new Path2D("M10 10 h 80 v 80 h -80 Z");
```

{{PreviousNext("Web/API/Canvas_API/Tutorial/Basic_usage", "Web/API/Canvas_API/Tutorial/Applying_styles_and_colors")}}
