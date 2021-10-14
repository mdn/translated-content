---
title: Exemple de composition
slug: Web/API/Canvas_API/Tutorial/Compositing/Example
tags:
  - Canvas
  - Exemple
  - Graphisme
  - HTML
  - HTML5
  - Tutoriel
translation_of: Web/API/Canvas_API/Tutorial/Compositing/Example
original_slug: Web/API/Canvas_API/Tutoriel_canvas/Composition/Example
---
{{CanvasSidebar}}

Cet exemple illustre un certain nombre d'[opérations de composition](/fr/docs/Web/API/CanvasRenderingContext2D.globalCompositeOperation). Le résultat donne ceci:

{{EmbedLiveSample("Exemple_de_composition", "100%", 7250)}}

## Exemple de composition

Ce code configure les valeurs globales utilisées par le reste du programme.

```js
var canvas1 = document.createElement("canvas");
var canvas2 = document.createElement("canvas");
var gco = [ 'source-over','source-in','source-out','source-atop',
            'destination-over','destination-in','destination-out','destination-atop',
            'lighter', 'copy','xor', 'multiply', 'screen', 'overlay', 'darken',
            'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light',
            'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'
          ].reverse();
var gcoText = [
"C'est la configuration par défaut, elle dessine les nouvelles formes au-dessus du contenu existant sur le canvas.",
"La nouvelle forme est dessinée uniquement là où il y a déjà du contenu sur le canvas. Tout le reste est rendu transparent.",
"La nouvelle forme est dessinée uniquement là où il n'y a pas de contenu sur le canvas.",
"La nouvelle forme est dessinée uniquement là où il y a déjà du contenu sur le canvas. Elle s'ajoute au contenu existant.",
"Les nouvelles formes sont dessinées derrière le contenu existant du canvas.",
"Le contenu existant du canvas est conservé là où il chevauche la nouvelle forme. Tout le reste est rendu transparent.",
"Le contenu existant du canvas est conservé là où il ne chevauche pas la nouvelle forme.",
"Le contenu existant du canvas est conservé là où il chevauche la nouvelle forme. La nouvelle forme est dessinée derrière le contenu existant.",
"La nouvelle forme est ajoutée en additionnant ses couleurs à celles du contenu existant.",
"Seule la nouvelle forme est affichée.",
"Les formes sont rendues transparentes lorsqu'elles se chevauchent.",
"Les pixels de la nouvelle forme sont multipliés avec les pixels du contenu existant. Le résultat est une image plus sombre.",
"Les pixels sont inversés, multipliés, puis inversés de nouveau. Le résultat est une image plus claire (l'inverse de multiply)",
"Une combinaison de multiply et screen. Les parties sombres du contenu existant deviennent plus sombres, et les parties claires deviennent plus claires.",
"Retiens les pixels les plus sombres entre les deux.",
"Retiens les pixels les plus clairs entre les deux.",
"Divise le layer inférieur par le layer supérieur inversé.",
"Divise le layer inférieur inversé par le layer supérieur, puis inverse le résultat.",
"Une combinaison de multiply et screen (comme overlay), mais avec le layer supérieur et inférieur inversés.",
"Assombrit ou éclaircit les couleurs, en fonction de la couleur de la forme ajoutée.",
"Soustrait le layer inférieur au layer supérieur ou inversemment pour toujours obtenir une valeur positive.",
"Comme difference, mais avec un contraste moins élevé.",
"Préserve la luminance et saturation du layer inférieur, et utilise la teinte du layer supérieur.",
"Préserve la luminance et teinte du layer inférieur, et utilise la saturation du layer supérieur.",
"Préserve la luminance du layer inférieur, et utilise la teinte et saturation du layer supérieur.",
"Préserve la teinte et saturation du layer inférieur, et utilise la luminance du layer supérieur."
].reverse();
var width = 320;
var height = 340;
```

### Programme principal

Quand la page se charge, le code suivant s'exécute pour configurer et exécuter l'exemple:

```js
window.onload = function() {
    // lum en sRGB
    var lum = {
        r: 0.33,
        g: 0.33,
        b: 0.33
    };
    // redimensionne le canvas
    canvas1.width = width;
    canvas1.height = height;
    canvas2.width = width;
    canvas2.height = height;
    lightMix()
    colorSphere();
    runComposite();
    return;
};
```

Et dans le code suivant, `runComposite()` gère la majeure partie du travail, en s'appuyant sur un certain nombre de fonctions utilitaires pour faire les parties difficiles.

```js
function createCanvas() {
    var canvas = document.createElement("canvas");
    canvas.style.background = "url("+op_8x8.data+")";
    canvas.style.border = "1px solid #000";
    canvas.style.margin = "5px";
    canvas.width = width/2;
    canvas.height = height/2;
    return canvas;
}

function runComposite() {
    var dl = document.createElement("dl");
    document.body.appendChild(dl);
    while(gco.length) {
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

        var ctx = canvasToDrawResult.getContext('2d');
        ctx.clearRect(0, 0, width, height)
        ctx.save();
        ctx.drawImage(canvas1, 0, 0, width/2, height/2);
        ctx.globalCompositeOperation = pop;
        ctx.drawImage(canvas2, 0, 0, width/2, height/2);
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, height/2 - 20, width/2, 20);
        ctx.fillStyle = "#FFF";
        ctx.font = "14px arial";
        ctx.fillText(pop, 5, height/2 - 5);
        ctx.restore();

        var ctx = canvasToDrawOn.getContext('2d');
        ctx.clearRect(0, 0, width, height)
        ctx.save();
        ctx.drawImage(canvas1, 0, 0, width/2, height/2);
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, height/2 - 20, width/2, 20);
        ctx.fillStyle = "#FFF";
        ctx.font = "14px arial";
        ctx.fillText('existing content', 5, height/2 - 5);
        ctx.restore();

        var ctx = canvasToDrawFrom.getContext('2d');
        ctx.clearRect(0, 0, width, height)
        ctx.save();
        ctx.drawImage(canvas2, 0, 0, width/2, height/2);
        ctx.fillStyle = "rgba(0,0,0,0.8)";
        ctx.fillRect(0, height/2 - 20, width/2, 20);
        ctx.fillStyle = "#FFF";
        ctx.font = "14px arial";
        ctx.fillText('new content', 5, height/2 - 5);
        ctx.restore();

        dd.appendChild(canvasToDrawOn);
        dd.appendChild(canvasToDrawFrom);
        dd.appendChild(canvasToDrawResult);

        dl.appendChild(dd);
    }
};
```

### Fonctions utilitaires

Notre programme repose sur un certain nombbre de fonctions utilitaires:

```js
var lightMix = function() {
    var ctx = canvas2.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,1)";
    ctx.arc(100, 200, 100, Math.PI*2, 0, false);
    ctx.fill()
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,0,255,1)";
    ctx.arc(220, 200, 100, Math.PI*2, 0, false);
    ctx.fill()
    ctx.beginPath();
    ctx.fillStyle = "rgba(0,255,0,1)";
    ctx.arc(160, 100, 100, Math.PI*2, 0, false);
    ctx.fill();
    ctx.restore();
    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.fillRect(0,0,30,30)
    ctx.fill();
};
```

```js
var colorSphere = function(element) {
    var ctx = canvas1.getContext("2d");
    var width = 360;
    var halfWidth = width / 2;
    var rotate = (1 / 360) * Math.PI * 2; // per degree
    var offset = 0; // scrollbar offset
    var oleft = -20;
    var otop = -20;
    for (var n = 0; n <= 359; n ++) {
        var gradient = ctx.createLinearGradient(oleft + halfWidth, otop, oleft + halfWidth, otop + halfWidth);
        var color = Color.HSV_RGB({ H: (n + 300) % 360, S: 100, V: 100 });
        gradient.addColorStop(0, "rgba(0,0,0,0)");
        gradient.addColorStop(0.7, "rgba("+color.R+","+color.G+","+color.B+",1)");
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
    ctx.fillRect(15,15,30,30)
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
        R, G, B;
    var A, B, C, D;
    if (S == 0) {
        R = G = B = Math.round(V * 255);
    } else {
        if (H >= 1) H = 0;
        H = 6 * H;
        D = H - Math.floor(H);
        A = Math.round(255 * V * (1 - S));
        B = Math.round(255 * V * (1 - (S * D)));
        C = Math.round(255 * V * (1 - (S * (1 - D))));
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
        B: B
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
