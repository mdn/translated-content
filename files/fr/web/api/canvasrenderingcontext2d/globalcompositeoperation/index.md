---
title: "CanvasRenderingContext2D : propriété globalCompositeOperation"
slug: Web/API/CanvasRenderingContext2D/globalCompositeOperation
l10n:
  sourceCommit: 050c1825df97d836d7b91c0719386dcb5b5dded2
---

{{APIRef}}

La propriété **`CanvasRenderingContext2D.globalCompositeOperation`** de l'API <i lang="en">Canvas</i> 2D définit le type d'opération de composition à appliquer lors du tracé de nouvelles formes.

Voir aussi [Composition et découpe](/fr/docs/Web/API/Canvas_API/Tutorial/Compositing) dans le [Tutoriel sur l'API <i lang="en">Canvas</i>](/fr/docs/Web/API/Canvas_API/Tutorial).

## Valeur

Une chaîne de caractères qui identifie les opérations de composition ou de mode de fusion à utiliser. Elle peut prendre l'une des valeurs suivantes&nbsp;:

- `"source-over"`
  - : Il s'agit du paramètre par défaut. Les nouvelles formes sont dessinées par-dessus le contenu existant du canevas.
- `"source-in"`
  - : La nouvelle forme est uniquement dessinée là où elle chevauche le canevas de destination. Tout le reste est rendu transparent.
- `"source-out"`
  - : La nouvelle forme est dessinée où elle ne chevauche pas le contenu du canevas existant.
- `"source-atop"`
  - : La nouvelle forme est uniquement dessinée où elle chevauche le contenu du canevas existant.
- `"destination-over"`
  - : Les nouvelles formes sont dessinées derrière le contenu existant du canevas.
- `"destination-in"`
  - : Le contenu existant est conservé où la nouvelle forme chevauche le contenu existant du canevas. Tout le reste est rendu transparent.
- `"destination-out"`
  - : Le contenu existant est conservé où il ne chevauche pas la nouvelle forme.
- `"destination-atop"`
  - : Le canevas existant est uniquement conservé où il chevauche la nouvelle forme. La nouvelle forme est dessinée derrière le contenu du canevas.
- `"lighter"`
  - : Là où les deux formes se chevauchent, la couleur est déterminée en ajoutant les valeurs des couleurs.
- `"copy"`
  - : Seule la nouvelle forme est affichée.
- `"xor"`
  - : Les formes sont rendues transparentes où les deux se chevauchent, et dessinées normalement partout ailleurs.
- `"multiply"`
  - : Les pixels de la couche supérieure sont multipliés avec les pixels correspondants de la couche inférieure. On obtiendra une image plus sombre comme résultat.
- `"screen"`
  - : Les pixels sont inversés, multipliés, puis à nouveau inversés. À l'inverse de `multiply`, on obtiendra une image plus claire en résultat.
- `"overlay"`
  - : Une combinaison de `multiply` et `screen`. Les parties sombres de la couche de base deviennent plus sombres, les parties claires deviennent plus claires.
- `"darken"`
  - : Les pixels les plus sombres des deux couches sont conservés.
- `"lighten"`
  - : Les pixels les plus clairs des deux couches sont conservés.
- `"color-dodge"`
  - : La couche inférieure est divisée par l'inverse de la couche supérieure.
- `"color-burn"`
  - : L'inverse de la couche inférieure est divisé par la couche supérieure, le résultat obtenu est inversé pour fournir le résultat final.
- `"hard-light"`
  - : À l'instar d'`overlay`, une combinaison de `multiply` et `screen`, mais avec les couches supérieure et inférieure échangées.
- `"soft-light"`
  - : Une version plus douce de `hard-light`. Un noir ou un blanc pur ne donnera pas un noir ou un blanc pur.
- `"difference"`
  - : La couche inférieure est soustraite à la couche supérieure, ou inversement pour toujours obtenir une valeur positive.
- `"exclusion"`
  - : Semblable à `difference`, avec un contraste plus faible.
- `"hue"`
  - : Conserve la luminance et la chrominance de la couche inférieure, en prenant la teinte de la couche supérieure.
- `"saturation"`
  - : Conserve la luminance et la teinte de la couche inférieure, en prenant la chrominance de la couche supérieure.
- `"color"`
  - : Conserve la luminance de la couche inférieure, en prenant la teinte et la chrominance de la couche supérieure.
- `"luminosity"`
  - : Conserve la teinte et la chrominance de la couche inférieure, en prenant la luminance de la couche supérieure.

## Exemples

### Modifier l'opération de composition

Dans cet exemple, on utilise la propriété `globalCompositeOperation` afin de dessiner deux rectangles où leur intersection est exclue.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.globalCompositeOperation = "xor";

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

#### Résultat

{{EmbedLiveSample('', 700, 180)}}

### Démonstration pour toutes les valeurs

#### Valeurs globales

Ce fragment de code définit les valeurs globales utilisées par le reste du programme.

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
  "Il s'agit du paramètre par défaut. Les nouvelles formes sont dessinées par-dessus le contenu existant du canevas.",
  "La nouvelle forme est uniquement dessinée là où elle chevauche le canevas de destination. Tout le reste est rendu transparent.",
  "La nouvelle forme est dessinée où elle ne chevauche pas le contenu du canevas existant.",
  "La nouvelle forme est uniquement dessinée où elle chevauche le contenu du canevas existant.",
  "Les nouvelles formes sont dessinées derrière le contenu existant du canevas.",
  "Le contenu existant est conservé où la nouvelle forme chevauche le contenu existant du canevas. Tout le reste est rendu transparent.",
  "Le contenu existant est conservé où il ne chevauche pas la nouvelle forme.",
  "Le canevas existant est uniquement conservé où il chevauche la nouvelle forme. La nouvelle forme est dessinée derrière le contenu du canevas.",
  "Là où les deux formes se chevauchent, la couleur est déterminée en ajoutant les valeurs des couleurs.",
  "Seule la nouvelle forme est affichée.",
  "Les formes sont rendues transparentes où les deux se chevauchent, et dessinées normalement partout ailleurs.",
  "Les pixels de la couche supérieure sont multipliés avec les pixels correspondants de la couche inférieure. On obtiendra une image plus sombre comme résultat.",
  "Les pixels sont inversés, multipliés, puis à nouveau inversés. À l'inverse de multiply, on obtiendra une image plus claire en résultat.",
  "Une combinaison de multiply et screen. Les parties sombres de la couche de base deviennent plus sombres, les parties claires deviennent plus claires.",
  "Les pixels les plus sombres des deux couches sont conservés.",
  "Les pixels les plus clairs des deux couches sont conservés.",
  "La couche inférieure est divisée par l'inverse de la couche supérieure.",
  "L'inverse de la couche inférieure est divisé par la couche supérieure, le résultat obtenu est inversé pour fournir le résultat final.",
  "À l'instar d'overlay, une combinaison de multiply et screen, mais avec les couches supérieure et inférieure échangées.",
  "Une version plus douce de hard-light. Un noir ou un blanc pur ne donnera pas un noir ou un blanc pur.",
  "La couche inférieure est soustraite à la couche supérieure, ou inversement pour toujours obtenir une valeur positive.",
  "Semblable à difference, avec un contraste plus faible.",
  "Conserve la luminance et la chrominance de la couche inférieure, en prenant la teinte de la couche supérieure.",
  "Conserve la luminance et la teinte de la couche inférieure, en prenant la chrominance de la couche supérieure.",
  "Conserve la luminance de la couche inférieure, en prenant la teinte et la chrominance de la couche supérieure.",
  "Conserve la teinte et la chrominance de la couche inférieure, en prenant la luminance de la couche supérieure.",
].reverse();
const width = 320;
const height = 340;
```

#### Programme principal

Au chargement de la page, le code qui suit est exécuté pour initialiser puis exécuter l'exemple&nbsp;:

```js
window.onload = () => {
  // Luminance exprimée en sRGB
  const lum = {
    r: 0.33,
    g: 0.33,
    b: 0.33,
  };
  // Redimensionnement du canevas
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

Dans le fragment de code qui suit, c'est `runComposite()` qui est responsable de la majorité du travail, exploitant quelques fonctions utilitaires pour les parties les plus complexes.

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

#### Fonctions utilitaires

Ce programme utilise certaines fonctions utilitaires.

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
// HSV (1978)
// H: Hue (en anglais, teinte en français)
// S: Saturation
// V: Value (en anglais, valeur en français)
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

#### Résultat

{{EmbedLiveSample("démonstration_pour_toutes_les_valeurs", "100%", 7250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface définissant cette propriété&nbsp;: [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.globalAlpha`](/fr/docs/Web/API/CanvasRenderingContext2D/globalAlpha)
