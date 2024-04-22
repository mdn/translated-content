---
title: CanvasRenderingContext2D.quadraticCurveTo()
slug: Web/API/CanvasRenderingContext2D/quadraticCurveTo
---

{{APIRef}}

La méthode **`CanvasRenderingContext2D.quadraticCurveTo()`** de l'API Canvas 2D ajoute une [courbe de Bézier](https://en.wikipedia.org/wiki/Bézier_curve) quadratique au sous-chemin courant. Elle requiert deux points: le premier est le point de contrôle et le second est le point d'arrivée. Le point de départ est le dernier point du chemin courant, qui peut être changé au moyen de la méthode {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} avant de créer la courbe quadratique de Bézier.

## Syntaxe

```js
void contexte2D.quadraticCurveTo(
  pointContrôleX,
  pointContrôleY,
  pointArrivéeX,
  pointArrivéeY,
);
```

### Paramètress

- `pointContrôleX`
  - : La coordonnée en x du point de contrôle.
- `pointContrôleY`
  - : La coordonnée en y du point de contrôle.
- `pointArrivéeX`
  - : La coordonnée en x du point d'arrivée.
- `pointArrivéeY`
  - : La coordonnée en y du point d'arrivée.

## Exemples

### Comment quadraticCurveTo fonctionne

Cet exemple montre comment un courbe quadratique de Bézier est dessinée.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canevas = document.getElementById("canvas");
const contexte2D = canevas.getContext("2d");

// courbe quadratique de Bézier
contexte2D.beginPath();
contexte2D.moveTo(50, 20);
contexte2D.quadraticCurveTo(230, 30, 50, 100);
contexte2D.stroke();

// Points de départ et d'arrivée
contexte2D.fillStyle = "blue";
contexte2D.beginPath();
contexte2D.arc(50, 20, 5, 0, 2 * Math.PI); // Point de départ
contexte2D.arc(50, 100, 5, 0, 2 * Math.PI); // Point d'arrivée
contexte2D.fill();

// Point de contrôle
contexte2D.fillStyle = "red";
contexte2D.beginPath();
contexte2D.arc(230, 30, 5, 0, 2 * Math.PI);
contexte2D.fill();
```

#### Résultat

Dans cet exemple, le point de contrôle est rouge et les points de départ et d'arrivée sont en bleu.

{{EmbedLiveSample('Comment_quadraticCurveTo_fonctionne', 315, 165)}}

### Une courbe quadratique simple

Cet exemple dessine une simple courbe quadratique de Bézier au moyen de la méthode `quadraticCurveTo()`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

La courbe commence au point spécifié par `moveTo()`: (20, 110). Le point de contrôle est placé à (230, 150). La courbe s'achève en (250, 20).

```js
const canevas = document.getElementById("canvas");
const contexte2D = canevas.getContext("2d");

contexte2D.beginPath();
contexte2D.moveTo(20, 110);
contexte2D.quadraticCurveTo(230, 150, 250, 20);
contexte2D.stroke();
```

#### Résultat

{{EmbedLiveSample('Une_courbe_quadratique_simple', 700, 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface définissant cette méthode : {{domxref("CanvasRenderingContext2D")}}
- [L'article Wikipédia sur les courbes quadratiques de Bézier](http://fr.wikipedia.org/wiki/Courbe_de_Bézier)
