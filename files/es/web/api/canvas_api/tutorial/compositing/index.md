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

```js hidden
const canvas1 = document.createElement("canvas");
const canvas2 = document.createElement("canvas");
const gco = [
  "source-over",
  "source-in",
  "source-out",
  "source-atop",
  "destination-over",
  "destination-in",
  "destination-out",
  "destination-atop",
  "lighter",
  "copy",
  "xor",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
].reverse();
const gcoText = [
  "This is the default setting and draws new shapes on top of the existing canvas content.",
  "The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent.",
  "The new shape is drawn where it doesn't overlap the existing canvas content.",
  "The new shape is only drawn where it overlaps the existing canvas content.",
  "New shapes are drawn behind the existing canvas content.",
  "The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.",
  "The existing content is kept where it doesn't overlap the new shape.",
  "The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.",
  "Where both shapes overlap the color is determined by adding color values.",
  "Only the new shape is shown.",
  "Shapes are made transparent where both overlap and drawn normal everywhere else.",
  "The pixels of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.",
  "The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)",
  "A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.",
  "Retains the darkest pixels of both layers.",
  "Retains the lightest pixels of both layers.",
  "Divides the bottom layer by the inverted top layer.",
  "Divides the inverted bottom layer by the top layer, and then inverts the result.",
  "A combination of multiply and screen like overlay, but with top and bottom layer swapped.",
  "A softer version of hard-light. Pure black or white does not result in pure black or white.",
  "Subtracts the bottom layer from the top layer or the other way round to always get a positive value.",
  "Like difference, but with lower contrast.",
  "Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.",
  "Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.",
  "Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.",
  "Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.",
].reverse();
const width = 320;
const height = 340;
```

```js hidden
window.onload = () => {
  // lum in sRGB
  const lum = {
    r: 0.33,
    g: 0.33,
    b: 0.33,
  };
  // resize canvas
  canvas1.width = width;
  canvas1.height = height;
  canvas2.width = width;
  canvas2.height = height;
  lightMix();
  colorSphere();
  runComposite();
  return;
};
```

```js hidden
function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.style.background = `url(${op_8x8.data})`;
  canvas.style.border = "1px solid #000";
  canvas.style.margin = "5px";
  canvas.width = width / 2;
  canvas.height = height / 2;
  return canvas;
}

function runComposite() {
  const dl = document.createElement("dl");
  document.body.appendChild(dl);
  while (gco.length) {
    const pop = gco.pop();
    const dt = document.createElement("dt");
    dt.textContent = pop;
    dl.appendChild(dt);
    const dd = document.createElement("dd");
    const p = document.createElement("p");
    p.textContent = gcoText.pop();
    dd.appendChild(p);

    const canvasToDrawOn = createCanvas();
    const canvasToDrawFrom = createCanvas();
    const canvasToDrawResult = createCanvas();

    let ctx = canvasToDrawResult.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = pop;
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText(pop, 5, height / 2 - 5);
    ctx.restore();

    ctx = canvasToDrawOn.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("existing content", 5, height / 2 - 5);
    ctx.restore();

    ctx = canvasToDrawFrom.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("new content", 5, height / 2 - 5);
    ctx.restore();

    dd.appendChild(canvasToDrawOn);
    dd.appendChild(canvasToDrawFrom);
    dd.appendChild(canvasToDrawResult);

    dl.appendChild(dd);
  }
}
```

```js hidden
const lightMix = () => {
  const ctx = canvas2.getContext("2d");
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,1)";
  ctx.arc(100, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "rgba(0,0,255,1)";
  ctx.arc(220, 200, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "rgba(0,255,0,1)";
  ctx.arc(160, 100, 100, Math.PI * 2, 0, false);
  ctx.fill();
  ctx.restore();
  ctx.beginPath();
  ctx.fillStyle = "#f00";
  ctx.fillRect(0, 0, 30, 30);
  ctx.fill();
};
```

```js hidden
const colorSphere = (element) => {
  const ctx = canvas1.getContext("2d");
  const width = 360;
  const halfWidth = width / 2;
  const rotate = (1 / 360) * Math.PI * 2; // per degree
  const offset = 0; // scrollbar offset
  const oleft = -20;
  const otop = -20;
  for (let n = 0; n <= 359; n++) {
    const gradient = ctx.createLinearGradient(
      oleft + halfWidth,
      otop,
      oleft + halfWidth,
      otop + halfWidth,
    );
    const color = Color.HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 });
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(0.7, `rgba(${color.R}, ${color.G}, ${color.B}, 1)`);
    gradient.addColorStop(1, "rgba(255,255,255,1)");
    ctx.beginPath();
    ctx.moveTo(oleft + halfWidth, otop);
    ctx.lineTo(oleft + halfWidth, otop + halfWidth);
    ctx.lineTo(oleft + halfWidth + 6, otop);
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.translate(oleft + halfWidth, otop + halfWidth);
    ctx.rotate(rotate);
    ctx.translate(-(oleft + halfWidth), -(otop + halfWidth));
  }
  ctx.beginPath();
  ctx.fillStyle = "#00f";
  ctx.fillRect(15, 15, 30, 30);
  ctx.fill();
  return ctx.canvas;
};
```

```js hidden
// HSV (1978) = H: Hue / S: Saturation / V: Value
Color = {};
Color.HSV_RGB = (o) => {
  const S = o.S / 100;
  let H = o.H / 360,
    V = o.V / 100;
  let R, G;
  let A, B, C, D;
  if (S === 0) {
    R = G = B = Math.round(V * 255);
  } else {
    if (H >= 1) H = 0;
    H *= 6;
    D = H - Math.floor(H);
    A = Math.round(255 * V * (1 - S));
    B = Math.round(255 * V * (1 - S * D));
    C = Math.round(255 * V * (1 - S * (1 - D)));
    V = Math.round(255 * V);
    switch (Math.floor(H)) {
      case 0:
        R = V;
        G = C;
        B = A;
        break;
      case 1:
        R = B;
        G = V;
        B = A;
        break;
      case 2:
        R = A;
        G = V;
        B = C;
        break;
      case 3:
        R = A;
        G = B;
        B = V;
        break;
      case 4:
        R = C;
        G = A;
        B = V;
        break;
      case 5:
        R = V;
        G = A;
        B = B;
        break;
    }
  }
  return { R, G, B };
};

const createInterlace = (size, color1, color2) => {
  const proto = document.createElement("canvas").getContext("2d");
  proto.canvas.width = size * 2;
  proto.canvas.height = size * 2;
  proto.fillStyle = color1; // top-left
  proto.fillRect(0, 0, size, size);
  proto.fillStyle = color2; // top-right
  proto.fillRect(size, 0, size, size);
  proto.fillStyle = color2; // bottom-left
  proto.fillRect(0, size, size, size);
  proto.fillStyle = color1; // bottom-right
  proto.fillRect(size, size, size, size);
  const pattern = proto.createPattern(proto.canvas, "repeat");
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

const op_8x8 = createInterlace(8, "#FFF", "#eee");
```

{{EmbedLiveSample("", 750, 6750)}}

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
  var ctx = document.getElementById("lienzo").getContext("2d");
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // crear un trazado de corte de forma circular
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // pinta el fondo
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, "#232256");
  lingrad.addColorStop(1, "#143778");

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // dibuja las estrellas
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150),
    );
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
