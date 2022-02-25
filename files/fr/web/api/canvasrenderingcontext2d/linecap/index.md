---
title: CanvasRenderingContext2D.lineCap
slug: Web/API/CanvasRenderingContext2D/lineCap
translation_of: Web/API/CanvasRenderingContext2D/lineCap
---
{{APIRef}}

La propriété **CanvasRenderingContext2D.lineCap** de l'API Canvas 2D détermine la façon dont les extrémités de chaque ligne sont dessinées. Il y a trois valeurs possibles pour cette propriété, qui sont : `butt`, `round` et `square`. Par défaut, cette propriété est définie comme `butt`.

Voir aussi le chapitre [Ajout de styles et de couleurs](/fr-FR/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dans le [Tutoriel canvas](/fr-FR/docs/Web/API/Canvas_API/Tutorial).

## Syntaxe

    ctx.lineCap = "butt";
    ctx.lineCap = "round";
    ctx.lineCap = "square";

### Options

- `butt`
  - : Les extrémités de ligne sont coupées à angle droit.
- `round`
  - : Les extrémités de ligne sont arrondies.
- `square`
  - : Les extrémités de ligne sont coupées à angle droit en ajoutant un rectangle d'une longueur égale à celle de l'épaisseur de la ligne et de largeur moitié.

## Exemples

### Utilisation de la propriété `lineCap`

Il ne s'agit que d'un fragment de code simple utilisant la propriété lineCap pour dessiner des lignes avec des extrémités arrondies.

#### HTML

```html
<canvas id="canevas"></canvas>
```

#### JavaScript

```js
var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.lineTo(100, 100);
ctx.stroke();
```

Modifiez le code ci-dessous et voyez vos modifications mises à jour en direct dans le canvas :

#### Code jouable

```html hidden
<canvas id="canevas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="modifier" type="button" value="Modifier" />
  <input id="effacer" type="button" value="Effacer" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineWidth = 15;
ctx.lineCap = 'round';
ctx.lineTo(100, 100);
ctx.stroke();</textarea>
```

```js hidden
var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');
var zoneTexte = document.getElementById('code');
var effacer = document.getElementById('effacer');
var modifier = document.getElementById('modifier');
var code = zoneTexte.value;

function dessinerCanevas() {
  ctx.clearRect(0, 0, canevas.width, canevas.height);
  eval(zoneTexte.value);
}

effacer.addEventListener('click', function() {
  zoneTexte.value = code;
  dessinerCanevas();
});

modifier.addEventListener('click', function() {
  zoneTexte.focus();
})

zoneTexte.addEventListener('input', dessinerCanevas);
window.addEventListener('load', dessinerCanevas);
```

{{ EmbedLiveSample('Code_jouable', 700, 360) }}

### Un exemple de `lineCap`

Dans cet exemple, trois lignes sont dessinées, chacune avec une valeur différente pour la propriété `lineCap`. Deux guides pour voir les différences exactes entre les trois ont été ajoutés. Chacune de ces lignes commence et se termine exactement sur ces guides.

La ligne à gauche utilise l'option par défaut `butt`. Elle est dessinée complètement au raz des guides. La seconde est paramétrée pour utiliser l'option `round`. Cela ajoute à l'extrémité un demi-cercle d'un rayon égal à la moitié de la largeur de la ligne. La ligne de droite utilise l'option `square`. Cela ajoute un rectangle de longueur égale à l'épaisseur de la ligne et de largeur moitié.

```js
var ctx = document.getElementById('canevas').getContext('2d');
var lineCap = ['butt','round','square'];

// Dessiner les guides
ctx.strokeStyle = '#09f';
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(140, 10);
ctx.moveTo(10, 140);
ctx.lineTo(140, 140);
ctx.stroke();

// Dessiner les lignes
ctx.strokeStyle = 'black';
for (var i = 0; i < lineCap.length; i++) {
  ctx.lineWidth = 15;
  ctx.lineCap = lineCap[i];
  ctx.beginPath();
  ctx.moveTo(25 + i * 50, 10);
  ctx.lineTo(25 + i * 50, 140);
  ctx.stroke();
}
```

```html hidden
<canvas id="canevas" width="150" height="150"></canvas>
```

{{EmbedLiveSample("Un_exemple_de_lineCap", "180", "180", "canvas_linecap.png")}}

## Spécifications

| Spécification                                                                                                                                | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-linecap", "CanvasRenderingContext2D.lineCap")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.lineCap")}}

## Notes spécifiques à WebKit/Blink

- Dans les navigateurs basés sur WebKit et Blink, une méthode non-standard et désapprouvée `ctx.setLineCap()` est implémentée en plus de cette propriété.

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
