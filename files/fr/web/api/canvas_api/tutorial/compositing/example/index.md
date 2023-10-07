---
title: Exemple de composition
slug: Web/API/Canvas_API/Tutorial/Compositing/Example
l10n:
  sourceCommit: 3c67eed7b0d2c91198ec95bcc9b1a570f6c0f585
---

{{DefaultAPISidebar("Canvas API")}}

Cet exemple illustre un certain nombre d'[opérations de composition](/fr/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation). Voici le résultat&nbsp;:

{{EmbedLiveSample("Exemple_de_composition", "100%", 7250)}}

## Exemple de composition

Ce code configure les valeurs globales utilisées par le reste du programme.

```js
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
  "La configuration par défaut, les nouvelles formes sont dessinées au-dessus du contenu existant sur le canevas.",
  "La nouvelle forme est dessinée aux endroits où elle chevauche le contenu du canevas. Tout le reste est rendu transparent.",
  "La nouvelle forme est dessinée là où elle ne chevauche pas le contenu existant sur le canevas.",
  "La nouvelle forme est uniquement dessinée où elle chevauche le contenu existant du canevas.",
  "Les nouvelles formes sont dessinées derrière le contenu existant du canevas.",
  "Le contenu existant du canevas est conservé là où il chevauche la nouvelle forme. Tout le reste est rendu transparent.",
  "Le contenu existant est conservé où il ne chevauche pas la nouvelle forme.",
  "Le canevas existant est uniquement conservé où il chevauche la nouvelle forme. Cette dernière est dessinée derrière le contenu du canevas.",
  "Là où les formes se chevauchent, la couleur est déterminée en additionnant les valeurs des couleurs.",
  "Seule la nouvelle forme est affichée.",
  "Les formes sont rendues transparentes où elles se chevauchent et dessinées normalement par ailleurs.",
  "Les pixels de la couche supérieure sont multipliés par les pixels correspondants de la couche inférieure. On obtient alors une image plus sombre.",
  "Les pixels sont inversés, multipliés, puis inversés à nouveau. On obtient alors une image plus claire (contrairement à multiply",
  "Une combinaison de multiply et de screen. Les parties sombres de la couche de base deviennent plus sombres, et les parties plus claires deviennent plus claires.",
  "Ce sont pixels les plus sombres entre les deux couches qui sont retenus.",
  "Ce sont pixels les plus clairs entre les deux couches qui sont retenus.",
  "Divise la couche inférieure par l'inverse de la couche supérieure.",
  "Divise la couche inférieure par la couche supérieure puis inverse le résultat.",
  "Une combinaison de multiply et de screen, comme overlay, mais où les couches supérieure et inférieure sont échangées.",
  "Une version plus douce de hard-light. Le blanc pur ou le noir pur ne donne pas un noir ou un blanc pur.",
  "La couche inférieure est soustraite de la couche supérieure, ou dans l'autre sens, afin de toujours obtenir une valeur positive.",
  "Fonctionne comme difference, mais avec un contraste moindre.",
  "Conserve la luminance et la chrominance de la couche inférieure, mais adopte la teinte de la couche supérieure.",
  "Conserve la luminance et la teinte de la couche inférieure, mais adopte la chrominance de la couche supérieure.",
  "Conserve la luminance de la couche inférieure, mais adopte la teinte et la chrominance de la couche supérieure.",
  "Conserve la teinte et la chrominance de la couche inférieure, mais adopte la luminance de la couche supérieure.",
].reverse();
const width = 320;
const height = 340;
```

### Programme principal

Quand la page se charge, le code suivant s'exécute pour configurer et exécuter l'exemple&nbsp;:

```js
window.onload = () => {
  // lum en sRGB
  const lum = {
    r: 0.33,
    g: 0.33,
    b: 0.33,
  };
  // redimensionne le canevas
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

Dans le code suivant, `runComposite()` gère la majeure partie du travail, en s'appuyant sur un certain nombre de fonctions utilitaires pour réaliser les parties difficiles.

```js
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
    ctx.fillText("contenu existant", 5, height / 2 - 5);
    ctx.restore();

    ctx = canvasToDrawFrom.getContext("2d");
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.drawImage(canvas2, 0, 0, width / 2, height / 2);
    ctx.fillStyle = "rgba(0,0,0,0.8)";
    ctx.fillRect(0, height / 2 - 20, width / 2, 20);
    ctx.fillStyle = "#FFF";
    ctx.font = "14px arial";
    ctx.fillText("nouveau contenu", 5, height / 2 - 5);
    ctx.restore();

    dd.appendChild(canvasToDrawOn);
    dd.appendChild(canvasToDrawFrom);
    dd.appendChild(canvasToDrawResult);

    dl.appendChild(dd);
  }
}
```

### Fonctions utilitaires

Notre programme repose sur un certain nombre de fonctions utilitaires.

```js
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

```js
const colorSphere = (element) => {
  const ctx = canvas1.getContext("2d");
  const width = 360;
  const halfWidth = width / 2;
  const rotate = (1 / 360) * Math.PI * 2; // par degré
  const offset = 0; // décalage de la barre de défilement
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

```js
// HSV (1978) = H: Teinte / S: Saturation / V: Valeur
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
  proto.fillStyle = color1; // supérieur gauche
  proto.fillRect(0, 0, size, size);
  proto.fillStyle = color2; // supérieur droit
  proto.fillRect(size, 0, size, size);
  proto.fillStyle = color2; // inférieur gauche
  proto.fillRect(0, size, size, size);
  proto.fillStyle = color1; // inférieur droit
  proto.fillRect(size, size, size, size);
  const pattern = proto.createPattern(proto.canvas, "repeat");
  pattern.data = proto.canvas.toDataURL();
  return pattern;
};

const op_8x8 = createInterlace(8, "#FFF", "#eee");
```
