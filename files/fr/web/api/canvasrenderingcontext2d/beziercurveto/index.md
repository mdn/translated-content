---
title: CanvasRenderingContext2D.bezierCurveTo()
slug: Web/API/CanvasRenderingContext2D/bezierCurveTo
translation_of: Web/API/CanvasRenderingContext2D/bezierCurveTo
browser-compat: api.CanvasRenderingContext2D.bezierCurveTo
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.bezierCurveTo()`** de l'API Canvas 2D ajoute une [courbe de Bézier](https://fr.wikipedia.org/wiki/Courbe_de_B%C3%A9zier) cubique au sous-chemin courant. Elle requiert trois points : les deux premiers sont des points de contrôle et le troisième est le point d'arrivée. Le point de départ est le dernier point dans le chemin courant, qui peut être changé au moyen de la méthode [`moveTo()`](/fr/docs/Web/API/CanvasRenderingContext2D/moveTo) avant de créer une courbe de Bézier.

## Syntaxe

```js
void ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
```

### Paramètres

- `cp1x`
  - : L'abscisse du premier point de contrôle.
- `cp1y`
  - : L'ordonnée du premier point de contrôle.
- `cp2x`
  - : L'abscisse du second point de contrôle.
- `cp2y`
  - : L'ordonnée du second point de contrôle.
- `x`
  - : L'abscisse du point d'arrivée.
- `y`
  - : L'ordonnée du point d'arrivée.

## Exemples

### Fonctionnement de bezierCurveTo()

Cet exemple montre comment une courbe cubique de Bézier est dessinée.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
// Define canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define the points as {x, y}
let debut = { x: 50,    y: 20  };
let cp1 =   { x: 230,   y: 30  };
let cp2 =   { x: 150,   y: 80  };
let fin =   { x: 250,   y: 100 };

// Courbe de Bézier cubique
ctx.beginPath();
ctx.moveTo(debut.x, debut.y);
ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, fin.x, fin.y);
ctx.stroke();

// Points de début et d'arrivée
ctx.fillStyle = 'blue';
ctx.beginPath();
ctx.arc(debut.x, debut.y, 5, 0, 2 * Math.PI);  // Début
ctx.arc(fin.x, fin.y, 5, 0, 2 * Math.PI);      // Fin
ctx.fill();

// Points de contrôles
ctx.fillStyle = 'red';
ctx.beginPath();
ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI);  // Point de contrôle n°1
ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI);  // Point de contrôle n°2
ctx.fill();
```

#### Résultat

Dans cet exemple, les points de contrôle sont rouges et les points de départ et d'arrivée sont bleus.

{{EmbedLiveSample('Fonctionnement_de_bezierCurveTo', 315, 165)}}

### Une courbe cubique de Bézier simple

Cet exemple dessine une courbe cubique de Bézier simple en utilisant `bezierCurveTo()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

La courbe débute au point spécifié par `moveTo()`&nbsp;: (30, 30). Le premier point de contrôle est placé à (120, 160), le second à (180, 10) et le point d'arrivée à (220, 140).

```js
const canvas = document.getElementById("canvas");
const contexte2D = canvas.getContext("2d");

contexte2D.beginPath();
contexte2D.moveTo(30, 30);
contexte2D.bezierCurveTo(120,160, 180,10, 220,140);
contexte2D.stroke();
```

#### Résultat

{{EmbedLiveSample('Une_courbe_cubique_de_Bézier_simple', 700, 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface définissant cette méthode : [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D)
- [L'article Wikipédia sur les courbes de Bézier](https://fr.wikipedia.org/wiki/Courbe_de_B%C3%A9zier)
