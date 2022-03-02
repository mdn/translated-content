---
title: CanvasRenderingContext2D.globalAlpha
slug: Web/API/CanvasRenderingContext2D/globalAlpha
translation_of: Web/API/CanvasRenderingContext2D/globalAlpha
---
{{APIRef}}La propriété **CanvasRenderingContext2D.globalAlpha** de l'API Canvas 2D spécifie la valeur alpha qui sera appliquée aux formes et aux images avant qu'elles ne soient dessinées sur le canevas. La valeur est comprise entre 0,0 (entièrement transparente) et 1,0 (entièrement opaque).

Voir aussi le chapitre [Ajout de styles et de couleurs](/fr-FR/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dans le [Tutoriel canvas](/fr-FR/docs/Web/API/Canvas_API/Tutorial).

## Syntaxe

    ctx.globalAlpha = valeur;

### Options

- `valeur`
  - : Un nombre entre 0,0 (entièrement transparente) et 1,0 (entièrement opaque). La valeur par défaut est 1,0. Les valeurs hors de la plage, y compris {{jsxref ("Infinity")}} et {{jsxref ("NaN")}} ne seront pas définies et `globalAlpha` conservera sa valeur précédente.

## Exemples

### Utilisation de la propriété `globalAlpha`

Il s'agit seulement d'un simple fragment de code utilisant la propriété `globalAlpha` pour dessiner deux rectangles semi-transparents.

#### HTML

```html
<canvas id="canevas"></canvas>
```

#### JavaScript

```js
var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

ctx.globalAlpha = 0.5;

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 100);
```

Modifiez le code ci-dessous et voyez vos modifications mises à jour en direct dans le canevas :

#### Code jouable

```html hidden
<canvas id="canevas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="modifier" type="button" value="Modifier" />
  <input id="effacement" type="button" value="Effacement" />
</div>
<textarea id="code" class="playable-code" style="height:120px;">
ctx.globalAlpha = 0.5;

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);</textarea>
```

```js hidden
var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');
var zoneTexte = document.getElementById('code');
var effacement = document.getElementById('effacement');
var modifier = document.getElementById('modifier');
var code = zoneTexte.value;

function dessinerCanevas() {
  ctx.clearRect(0, 0, canevas.width, canevas.height);
  eval(zoneTexte.value);
}

effacement.addEventListener('click', function() {
  zoneT.value = code;
  dessinerCanevas();
});

modifier.addEventListener('click', function() {
  zoneTexte.focus();
})

zoneTexte.addEventListener('input', dessinerCanevas);
window.addEventListener('load', dessinerCanevas);
```

{{ EmbedLiveSample('Code_jouable', 700, 380) }}

### Un exemple de `globalAlpha`

Dans cet exemple, un arrière-plan de quatre carrés de différentes couleurs est dessiné. Au dessus, se trouve un ensemble de cercles semi-transparents. La propriété globalAlpha est définie à 0,2, valeur qui sera utilisée pour toutes les formes à partir de ce point. Chaque étape de la boucle `for` dessine un ensemble de cercles de rayons croissants. Le résultat final est un dégradé radial. En superposant toujours plus de cercles les uns sur les autres, la transparence des cercles déjà dessinés est réduite. En augmentant le nombre d'étapes et, concrètement, en dessinant davantage de cercles, l'arrière-plan disparaitra complètement du centre de l'image.

```js
var ctx = document.getElementById('canevas').getContext('2d');

// Dessiner l'arrière-plan
ctx.fillStyle = '#FD0';
ctx.fillRect(0, 0, 75, 75);
ctx.fillStyle = '#6C0';
ctx.fillRect(75, 0, 75, 75);
ctx.fillStyle = '#09F';
ctx.fillRect(0, 75, 75, 75);
ctx.fillStyle = '#F30';
ctx.fillRect(75, 75, 75, 75);
ctx.fillStyle = '#FFF';

// Définir la valeur de transparence
ctx.globalAlpha = 0.2;

// Dessiner les cercles semi-transparents
for (i = 0; i < 7; i++){
  ctx.beginPath();
  ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
  ctx.fill();
}
```

```html hidden
<canvas id="canevas" width="150" height="150"></canvas>
```

{{EmbedLiveSample("Un_exemple_de_globalAlpha", "180", "180", "canvas_globalalpha.png")}}

## Spécifications

| Spécification                                                                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-globalalpha", "CanvasRenderingContext2D.globalAlpha")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.globalAlpha")}}

## Notes spécifiques à Gecko

- À partir de Gecko 5.0, la spécification de valeurs invalides pour globalAlpha ne génère plus une exception SYNTAX_ERR ; celles-ci sont silencieusement et correctement ignorées.

## Notes spécifiques à WebKit/Blink

- Dans les navigateurs WebKit et Blink, une méthode non standard et désapprouvée `ctx.setAlpha()` est implémentée en plus de cette propriété.

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
