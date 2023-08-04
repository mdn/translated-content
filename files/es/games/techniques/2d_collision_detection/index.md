---
title: Detección de colisiones 2D
slug: Games/Techniques/2D_collision_detection
---

{{GamesSidebar}}

Los algoritmos para detectar colisiones en juegos 2D dependen del tipo de formas que pueden colisionar (p. ej., Rectángulo con rectángulo, Rectángulo con círculo, Círculo con círculo). En general, tendrá una forma genérica simple que cubre la entidad conocida como _"hitbox"_, por lo que, aunque la colisión no sea perfecta en píxeles, se verá lo suficientemente bien y tendrá un rendimiento eficiente en varias entidades. Este artículo proporciona una revisión de las técnicas más comunes utilizadas para proporcionar detección de colisiones en juegos 2D.

## Hitbox alineado con el eje

Una de las formas más simples de detección de colisiones es entre dos rectángulos que están alineados con el eje, lo que significa que no hay rotación. El algoritmo funciona asegurándose de que no haya espacio entre ninguno de los 4 lados de los rectángulos. Cualquier brecha significa que no existe una colisión.

```html hidden
<div id="cr-stage"></div>
<p>
  Mueva el rectángulo con las teclas de flecha. Verde significa colisión, azul
  significa que no hay colisión.
</p>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```js
Crafty.init(200, 200);

var dim1 = { x: 5, y: 5, w: 50, h: 50 };
var dim2 = { x: 20, y: 10, w: 60, h: 40 };

var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway")
  .fourway(2)
  .attr(dim2)
  .color("blue");

rect2.bind("EnterFrame", function () {
  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    // ¡colisión detectada!
    this.color("green");
  } else {
    // no hay colisión
    this.color("blue");
  }
});
```

{{ EmbedLiveSample('Hitbox_alineado_con_el_eje', '700', '300') }}

> **Nota:** [Aquí hay otro ejemplo sin Canvas o bibliotecas externas](https://jsfiddle.net/jlr7245/217jrozd/3/).

## Colisión circular

Otra forma simple para la detección de colisiones es entre dos círculos. Este algoritmo funciona tomando los puntos centrales de los dos círculos y asegurando que la distancia entre los puntos centrales sea menor que la suma de los dos radios.

```html hidden
<div id="cr-stage"></div>
<p>
  Mueve el círculo con las teclas de flecha. Verde significa colisión, azul
  significa que no hay colisión.
</p>
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/crafty/0.5.4/crafty-min.js"></script>
```

```css hidden
#cr-stage {
  position: static !important;
  height: 200px !important;
}
```

```js
Crafty.init(200, 200);

var dim1 = { x: 5, y: 5 };
var dim2 = { x: 20, y: 20 };

Crafty.c("Circle", {
  circle: function (radius, color) {
    this.radius = radius;
    this.w = this.h = radius * 2;
    this.color = color || "#000000";

    this.bind("Move", Crafty.DrawManager.drawAll);
    return this;
  },

  draw: function () {
    var ctx = Crafty.canvas.context;
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x + this.radius,
      this.y + this.radius,
      this.radius,
      0,
      Math.PI * 2,
    );
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  },
});

var circle1 = Crafty.e("2D, Canvas, Circle").attr(dim1).circle(15, "red");

var circle2 = Crafty.e("2D, Canvas, Circle, Fourway")
  .fourway(2)
  .attr(dim2)
  .circle(20, "blue");

circle2.bind("EnterFrame", function () {
  var dx = circle1.x + circle1.radius - (circle2.x + circle2.radius);
  var dy = circle1.y + circle1.radius - (circle2.y + circle2.radius);
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < circle1.radius + circle2.radius) {
    // ¡colisión detectada!
    this.color = "green";
  } else {
    // no hay colisión
    this.color = "blue";
  }
});
```

{{ EmbedLiveSample('Colisión_circular', '700', '300') }}

> **Nota:** [Aquí hay otro ejemplo sin Canvas o bibliotecas externas.](https://jsfiddle.net/jlr7245/teb4znk0/20/)

## Teorema del eje de separación

Este es un algoritmo de colisión que puede detectar una colisión entre dos polígonos \*convexos\* cualesquiera. Es más complicado de implementar que los métodos anteriores, pero es más poderoso. La complejidad de un algoritmo como este significa que tendremos que considerar la optimización del rendimiento, que se trata en la siguiente sección.

La implementación de SAT (Teorema del eje de separación) está fuera del alcance de esta página, así que consulte los tutoriales recomendados a continuación:

1. [Explicación del teorema del eje de separación (SAT)](https://www.sevenson.com.au/programming/sat/)
2. [Detección de colisiones y respuesta](https://www.metanetsoftware.com/technique/tutorialA.html)
3. [Detección de colisiones utilizando el teorema del eje de separación](https://gamedevelopment.tutsplus.com/tutorials/collision-detection-using-the-separating-axis-theorem--gamedev-169)
4. [SAT (Teorema del eje de separación)](https://dyn4j.org/2010/01/sat/)
5. [Teorema del eje de separación](https://programmerart.weebly.com/separating-axis-theorem.html)

## Rendimiento de colisión

Si bien algunos de estos algoritmos para la detección de colisiones son lo suficientemente simples de calcular, puede ser una pérdida de ciclos probar \*todas\* las entidades con todas las demás entidades. Por lo general, los juegos dividirán la colisión en dos fases, amplia y estrecha.

### Fase amplia

La fase amplia debería proporcionarle una lista de entidades que \*podrían\* estar colisionando. Esto se puede implementar con una estructura de datos espaciales que le dará una idea aproximada de dónde existe la entidad y qué existe a su alrededor. Algunos ejemplos de estructuras de datos espaciales son _Quad Trees_, _R-Trees_ o _Spacial Hashmap_.

### Fase estrecha

Cuando tenga una pequeña lista de entidades para verificar, querrá usar un algoritmo de fase estrecha (como los enumerados anteriormente) para proporcionar una respuesta determinada sobre si hay una colisión o no.
