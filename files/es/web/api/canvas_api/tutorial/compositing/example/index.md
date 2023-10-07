---
title: Ejemplo de composición
slug: Web/API/Canvas_API/Tutorial/Compositing/Example
---

{{DefaultAPISidebar("Canvas API")}}

Este programa de ejemplo muestra una cantidad de [operaciones de composición](/es/docs/Web/API/CanvasRenderingContext2D.globalCompositeOperation). La salida se ve así:

{{EmbedLiveSample("Ejemplo_de_composición", "100%", 7250)}}

## Ejemplo de composición

Este código establece los valores globales utilizados por el resto del programa.

```js
var canvas1 = document.createElement("canvas");
var canvas2 = document.createElement("canvas");
var gco = [
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
var gcoText = [
  "Esta es la configuración predeterminada y dibuja nuevas formas sobre el contenido del canvas existente.",
  "La nueva forma se dibuja solo donde la nueva forma y el canvas de destino se superponen. Todo lo demás se hace transparente.",
  "La nueva forma se dibuja donde no se superpone al contenido del canvas existente.",
  "La nueva forma solo se dibuja donde se solapa con el contenido del canvas existente.",
  "Se dibujan nuevas formas detrás del contenido del canvas existente",
  "El contenido del canvas existente se conserva donde la nueva forma y el contenido del canvas existente se superponen. Todo lo demás se hace transparente.",
  "El contenido existente se mantiene donde no se superpone a la nueva forma.",
  "El canvas existente solo se conserva donde se solapa con la nueva forma. La nueva forma se dibuja detrás del contenido del canvas.",
  "Donde ambas formas se superponen, el color se determina agregando valores de color.",
  "Solo se muestra la nueva forma.",
  "Las formas se hacen transparentes donde ambas se superponen y se dibujan de manera normal en cualquier otro lugar.",
  "Los píxeles de la capa superior se multiplican con el píxel correspondiente de la capa inferior. El resultado es una imagen más oscura. ",
  "Los píxeles están invertidos, multiplicados e invertidos nuevamente. Una imagen más clara es el resultado (opuesto a multiplicar).",
  "Una combinación de multiplicar y pantalla. Las partes oscuras en la capa base se oscurecen y las partes claras se vuelven más claras.",
  "Conserva los píxeles más oscuros de ambas capas.",
  "Conserva los píxeles más claros de ambas capas.",
  "Divide la capa inferior por la capa superior invertida.",
  "Divide la capa inferior invertida por la capa superior, y luego invierte el resultado.",
  "Una combinación de multiplicar y pantalla como superposición, pero con la parte superior y la capa inferior intercambiado.",
  "Una versión más suave de la luz dura. Negro puro o blanco no da como resultado negro o blanco puro.",
  "Resta la capa inferior de la capa superior o viceversa para obtener siempre un valor positivo.",
  "Al igual que la diferencia, pero con menor contraste.",
  "Conserva la luma y el croma de la capa inferior, mientras adopta el tono de la capa superior.",
  "Conserva la luma y el tono de la capa inferior, mientras adopta el croma de la capa superior.",
  "Conserva la luma de la capa inferior, mientras adopta el matiz y el croma de la capa superior.",
  "Conserva el tono y el croma de la capa inferior, mientras adopta la luma de la capa superior.",
].reverse();
var width = 320;
var height = 340;
```

### Programa principal

Cuando se carga la página, este código se ejecuta para configurar y ejecutar el ejemplo:

```js
window.onload = function () {
  // lum en sRGB
  var lum = {
    r: 0.33,
    g: 0.33,
    b: 0.33,
  };
  // redimensionar canvas
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

Y este código, `runComposite()`, maneja la mayor parte del trabajo, dependiendo de una serie de funciones de utilidad para hacer las partes difíciles.

```js
function createCanvas() {
  var canvas = document.createElement("canvas");
  canvas.style.background = "url(" + op_8x8.data + ")";
  canvas.style.border = "1px solid #000";
  canvas.style.margin = "5px";
  canvas.width = width / 2;
  canvas.height = height / 2;
  return canvas;
}

function runComposite() {
  var dl = document.createElement("dl");
  document.body.appendChild(dl);
  while (gco.length) {
    var pop = gco.pop();
    var dt = document.createElement("dt");
    dt.textContent = pop;
    dl.appendChild(dt);
    var dd = document.createElement("dd");
    var p = document.createElement("p");
    p.textContent = gcoText.pop();
    dd.appendChild(p);

    var canvasToDrawOn = createCanvas();
    var canvasToDrawFrom = createCanvas();
    var canvasToDrawResult = createCanvas();

    var ctx = canvasToDrawResult.getContext("2d");
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

    var ctx = canvasToDrawOn.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas1, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("existing content", 5, height / 2 - 5);
    ctx.restore();

    var ctx = canvasToDrawFrom.getContext("2d");
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

### Funciones de utilidad

El programa se basa en una serie de funciones de utilidad.

```js
var lightMix = function () {
  var ctx = canvas2.getContext("2d");
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

```js
var colorSphere = function (element) {
  var ctx = canvas1.getContext("2d");
  var width = 360;
  var halfWidth = width / 2;
  var rotate = (1 / 360) * Math.PI * 2; // por grado
  var offset = 0; // scrollbar offset
  var oleft = -20;
  var otop = -20;
  for (var n = 0; n <= 359; n++) {
    var gradient = ctx.createLinearGradient(
      oleft + halfWidth,
      otop,
      oleft + halfWidth,
      otop + halfWidth,
    );
    var color = Color.HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 });
    gradient.addColorStop(0, "rgba(0,0,0,0)");
    gradient.addColorStop(
      0.7,
      "rgba(" + color.R + "," + color.G + "," + color.B + ",1)",
    );
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

```js
// HSV (1978) = H: Hue / S: Saturation / V: Value
Color = {};
Color.HSV_RGB = function (o) {
  var H = o.H / 360,
    S = o.S / 100,
    V = o.V / 100,
    R,
    G,
    B;
  var A, B, C, D;
  if (S == 0) {
    R = G = B = Math.round(V * 255);
  } else {
    if (H >= 1) H = 0;
    H = 6 * H;
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
  return {
    R: R,
    G: G,
    B: B,
  };
};

var createInterlace = function (size, color1, color2) {
  var proto = document.createElement("canvas").getContext("2d");
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
  var pattern = proto.createPattern(proto.canvas, "repeat");
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

var op_8x8 = createInterlace(8, "#FFF", "#eee");
```
