---
title: CanvasRenderingContext2D.globalCompositeOperation
slug: Web/API/CanvasRenderingContext2D/globalCompositeOperation
---

{{APIRef}}

La propriété **`CanvasRenderingContext2D.globalCompositeOperation`** de l'API Canvas 2D définit le type d'opération de composition à appliquer lors du tracé de nouvelles formes.

Voir aussi [Composition et découpe](/fr/docs/Tutoriel_canvas/Composition) dans le [Tutoriel canvas](/fr/docs/Tutoriel_canvas).

## Syntaxe

```js
ctx.globalCompositeOperation = type;
```

`type` est de type {{jsxref("String")}} et permet de choisir quelle opération de composition ou de mode fondu utiliser.

## Exemples

### Changer l'opération de composition

Cet exemple utilise la propriété `globalCompositeOperation` pour dessiner deux rectangles qui s'excluent l'un l'autre quand ils se superposent.

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

{{ EmbedLiveSample('Exemples', 700, 180) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui définit cette propriété : {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
