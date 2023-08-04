---
title: Exemplo de Composição
slug: Web/API/Canvas_API/Tutorial/Compositing/Example
---

{{DefaultAPISidebar("Canvas API")}}

Esse exemplo demonstra várias [operações de composição](/pt-BR/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation). A saída se parece assim:

{{ EmbedLiveSample('Exemplo_de_composição', '', '7240px', '', 'Web/Guide/HTML/Canvas_tutorial/Compositing/Exemplo') }}

## Exemplo de composição

Este código configura os valores globais usados pelo restante do programa.

```js
var canvas1 = document.createElement("canvas");
var canvas2 = document.createElement("canvas");
var gco = [
  "Source-over",
  "Source-in",
  "Source-out",
  "Source-atop",
  "Destination-over",
  "Destination-in",
  "Destination-out",
  "Destination-atop",
  "Lighter",
  "Copy",
  "XOR",
  "Multiply",
  "Screen",
  "Overlay",
  "Darken",
  "Lighten",
  "Color-dodge",
  "Color-burn",
  "Hard-light",
  "Soft-light",
  "Difference",
  "Exclusion",
  "HUE",
  "Saturation",
  "Color",
  "Luminosity",
].reverse();
var gcoText = [
  "Essa é a configuração padrão e desenha novas formas sobre o conteúdo da tela (canvas) existente.",
  "A nova forma é desenhada apenas onde a nova forma e a tela (canvas) de destino se sobrepõem. Todo o resto é transparente. ",
  "A nova forma é desenhada onde ela não sobrepõe o conteúdo da tela (canvas) existente.",
  "A nova forma é somente desenahda onde ela sobrepõe o conteúdo da tela (canvas) existente.",
  "Novas formas são desenhadas por trás do conteúdo da tela (canvas) existente.",
  "O conteúdo da tela (canvas) existente é mantido onde ambos, a nova forma e o conteúdo da tela (canvas) existente, se sobrepõe. Todo o resto é transparente.",
  "O conteúdo existente é mantido onde ele não sobrepõe a nova forma.",
  "A tela (canvas) existente só é mantida onde ela sobrepõe a nova forma. A nova forma é desenahda por trás do conteúdo canvas.",
  "Onde ambas formas se sebrepõem a cor é determinada adicionando seus respectivos valores de cores.",
  "Somente a nova forma é mostrada.",
  "Formas são feitas transparentes onde ambos se sobrepõem e todo o resto é desenhado normalmente.",
  "Os pixels da camada superior são multiplicados pelo pixel correspondente da camada inferior. Uma imagem mais escura é o resultado. ",
  "Os pixels são invertidos, multiplicados e invertidos novamente. Uma imagem mais clara é o resultado (oposto de multiplicar)",
  "Uma combinação de multiplicação e tela. As partes escuras na camada base tornam-se mais escuras e as partes claras tornam-se mais claras.",
  "Mantêm os pixels mais escuro de ambas camadas.",
  "Mantêm os pixels mais claro de ambas camadas.",
  "Divide a camada inferior pela camada superior invertida.",
  "Divide a camada inferior invertida pela camada superior e, em seguida, inverte o resultado.",
  "Uma combinação de multiplicação e tela como sobreposição, mas com a camada superior e inferior trocada.",
  "Uma versão mais suave da luz. Preto ou branco puro não resulta em preto ou branco puro.",
  "Subtrai a camada inferior da camada superior ou vice-versa para obter sempre um valor positivo.",
  "Como diferença, mas com menor contraste.",
  "Preserva o luma e o croma da camada inferior, enquanto adota a tonalidade da camada superior.",
  "Preserva o luma e a tonalidade da camada inferior, enquanto adota o croma da camada superior.",
  "Preserva a luma da camada inferior, enquanto adota a tonalidade e o croma da camada superior.",
  "Preserva a tonalidade e o croma da camada inferior, enquanto adota a luma da camada superior.",
].reverse();
var width = 320;
var height = 340;
```

### Programa principal

Quando a página é carregada, esse código é executado para configurar e executar o exemplo:

```js
window.onload = function () {
  // lum em sRGB
  var lum = {
    r: 0.33,
    g: 0.33,
    b: 0.33,
  };
  // redimensiona canvas
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

E esse código, `runComposite ()`, manipula a maior parte do trabalho, contando com várias funções utilitárias para fazer as partes difíceis.

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
    ctx.fillText("Conteúdo existente", 5, height / 2 - 5);
    ctx.restore();

    var ctx = canvasToDrawFrom.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("Novo conteúdo", 5, height / 2 - 5);
    ctx.restore();

    dd.appendChild(canvasToDrawOn);
    dd.appendChild(canvasToDrawFrom);
    dd.appendChild(canvasToDrawResult);

    dl.appendChild(dd);
  }
}
```

### Funções Utilitárias

O programa depende de várias funções utilitárias.

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
  var rotate = (1 / 360) * Math.PI * 2; // per degree
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
// HSV (1978) = H: Hue (tom)
//              S: Saturation (Saturação)
//              V: Value (Valor)
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
