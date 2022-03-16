---
title: CanvasRenderingContext2D.lineJoin
slug: Web/API/CanvasRenderingContext2D/lineJoin
translation_of: Web/API/CanvasRenderingContext2D/lineJoin
---
{{APIRef}}

La propriété **`CanvasRenderingContext2D.lineJoin`** de l'API Canvas 2D détermine la forme à utiliser pour joindre deux segments de ligne à leur intersection.

Cette propriété n'a aucun effet quand deux segments connectés ont la même direction, car aucune zone de jonction ne sera ajoutée dans ce cas. Les segments dégénérés d'une longueur de zéro (c'est à dire avec les extrémités à la même position) seront ignorés.

> **Note :** Les lignes peuvent être dessinées aves les méthodes  {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}}, {{domxref("CanvasRenderingContext2D.strokeRect()", "strokeRect()")}} et {{domxref("CanvasRenderingContext2D.strokeText()", "strokeText()")}}.

## Syntaxe

    ctx.lineJoin = "bevel" || "round" || "miter";

### Options

Il y a trois valeurs possibles pour cette propriété: `"round"`, `"bevel"` et `"miter"`. Celle par défaut est `"miter"`.

![](canvas_linejoin.png)

- `"round"` (rond)
  - : Arrondit les coins d'une forme en remplissant un zone supplémentaire centré sur le point final commun des segments connectés. Le rayon de ces coins arrondis est égal à la largeur de la ligne .
- `"bevel"` (biseau)
  - : Remplit une zone triangulaire supplémentaire entre les extrémités des segments connectés.
- `"miter"` (onglet)
  - : Les segments raccordés sont reliés entre eux en prolongeant leurs bors extérieurs en un seul point, ce qui a pour effet de remplir uen zone supplémentaire en forme de losange. Ce paramètre est affecté par la proriété {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}. Valeur par dafaut.

## Exemples

### Modifier les jointures d'un tracé

Cet exemple applique des jointures arrondies au tracé.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.lineWidth = 20;
ctx.lineJoin = 'round';
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(190, 100);
ctx.lineTo(280, 20);
ctx.lineTo(280, 150);
ctx.stroke();
```

#### Résultat

{{ EmbedLiveSample('Modifier_les_jointures_d\'un_tracé', 700, 180) }}

### Comparaison des jointures de lignes

L'exemple dessine 3 tracés différents, illustrant chacune des trois valeurs de `lineJoin`.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
var ctx = document.getElementById('canvas').getContext('2d');
var lineJoin = ['round', 'bevel', 'miter'];
ctx.lineWidth = 10;

for (let i = 0; i < lineJoin.length; i++) {
  ctx.lineJoin = lineJoin[i];
  ctx.beginPath();
  ctx.moveTo(-5, 5 + i * 40);
  ctx.lineTo(35, 45 + i * 40);
  ctx.lineTo(75, 5 + i * 40);
  ctx.lineTo(115, 45 + i * 40);
  ctx.lineTo(155, 5 + i * 40);
  ctx.stroke();
}
```

{{EmbedLiveSample("Comparaison_des_jointures_de_lignes", "180", "180", "canvas_linejoin.png")}}

## Spécifications

| Spécification                                                                                                                                | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-linejoin", "CanvasRenderingContext2D.lineJoin")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des naviagateurs

{{Compat("api.CanvasRenderingContext2D.lineJoin")}}

### WebKit/Blink-notes particulières

- Dans les navigateurs basés sur WebKit et Blink, une méthode `ctx.setLineJoin()` non-standard et obsolète est implémentée en plus de cette propriété.

## Voir aussi

- L'interface définissant cette propriété: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineWidth")}}
- [Ajout de styles et de couleurs](/fr-FR/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)
