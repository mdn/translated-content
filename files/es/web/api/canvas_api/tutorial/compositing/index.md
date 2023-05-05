---
title: Compositing and clipping
slug: Web/API/Canvas_API/Tutorial/Compositing
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

En todos nuestros [ejemplos a](/es/docs/Web/API/Canvas_API/Tutorial/Transformations)nteriores, las formas siempre fueron dibujadas una encima de la anterior. Estos es más que adecuado para la mayoría de las situaciones pero se limita al orden compuesto de las figuras. Podemos, sin embargo, cambiar este comportamiento estableciendo el valor de la propiedad `globalCompositeOperation`. Además, la proeidad `clip` nos permite ocultar partes de figuras que no queremos mostrar.

## `globalCompositeOperation`

No solo podemos dibujar formas nuevas detrás de las ya existentes sino que las podemos utilizar para enmascarar ciertas áreas, limpiar secciones del lienzo (canvas no se limita a utilizar rectángulos como en el método {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}) y algunas cosas más.

- {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation = type")}}
  - : Esto establece el tipo de operación compuesta a aplicar cuando se dibujan nuevas figuras, en donde tipo (type) es una cadena de caracteres que identifica cual de las doce operaciones compuestas se utilizará.

Vea [ejemplos de composición](/es/docs/Web/API/Canvas_API/Tutorial/Compositing/Example) para el código de los siguientes ejemplos.

{{EmbedLiveSample("Ejemplo_de_composición", 750, 6750, "" ,"Web/API/Canvas_API/Tutorial/Compositing/Example")}}

## Trazado de Recorte

![](canvas_clipping_path.png)Un trazado de recoirte es como una figura normal en el lienzo pero actúa como una máscara para ocultar las partes de la misma que no se quieren mostrar. Este efecto se muestra en la figura de la derecha. La estrella roja es nuestro trazado de recorte. Todo lo que cae fuera de este trazado no se dibujará en el lienzo.

Si comparamos el trazado de recorte con la propiedad `globalCompositeOperation` que hemos visto antes, vemos dos modos compuestos que logran mas o menos los mismos efectos en `source-in` y `source-atop`. Las diferencias mas importantes entre éstos dos son que el trazado de recorte no dibujan nunca en el lienzo y que nunca se afecta por agregar nuevas figuras. Esto vuelve al trazado de recorte ideal para dibujar múltiples figuras en un área delimitada.

En el capítulo acerca de [dibujo de figuras](/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes) solo menciono a los métodos `stroke()` y `fill()` pero existe un tercer método que se usa para trazados llamado `clip()`.

- {{domxref("CanvasRenderingContext2D.clip", "clip()")}}
  - : Convierte al trazado en ejecución a un trazado de recorte.

Se utiliza `clip()` en lugar de `closePath()` para cerrar el trazado y volverlo uno de recorte, en vez de marcar (stroke) o rellenar el trazado.

Por edfecto el elemento {{HTMLElement("canvas")}} tiene un trazado de recorte que es de extacamente el mismo tamaño del propio lienzo. En otras palabras, la máscara de recorte (clipping) no se da.

### Un ejemplo de `clip`

En este ejemplo, utilizamos un trazado de recorte de forma circular para restringir el dibujo de un conjunto de estrellas aleatorias dentro de una región particular del lienzo.

```js
function dibuja() {
  var ctx = document.getElementById('lienzo').getContext('2d');
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // crear un trazado de corte de forma circular
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // pinta el fondo
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // dibuja las estrellas
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75 - Math.floor(Math.random() * 150),
                  75 - Math.floor(Math.random() * 150));
    dibulaEstrella(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }

}

function dibujaEstrella(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```

```html hidden
<canvas id="lienzo" width="150" height="150"></canvas>
```

```js hidden
dibuja();
```

En las primeras líneas de código, dibujamos un rectángulo negro del tamaño del lienzo como telón de fondo, luego trasladamos el origen del mismo al centro. A continuación, creamos un trazado de recorte de forma circular, a través de dibujar un arco y mediante la llamada a `clip()`. El recorte también es parte del estado guardado del lienzo. Si queremos mantener el recorte original, podríamos haber guardado el estado anterior del lienzo justo antes de que creamos el nuevo.

Todo lo que se dibuja después de crear un recorte aparecerá dentro de su trazado. Se puede ver claramente esto en el dibujo de gradiente lineal que realizamos a continuación. Después se ubican estrellas en 50 posiciones alteatorias y escaladas utilizando la función `drawStar()`. Una vez más, las estrellas solo aparecen dentro del recorte trazado en el lienzo.

{{EmbedLiveSample("A_clip_example", "180", "190", "canvas_clip.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}
