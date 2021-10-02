---
title: CanvasRenderingContext2D.save()
slug: Web/API/CanvasRenderingContext2D/save
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Restaurer
  - Save
translation_of: Web/API/CanvasRenderingContext2D/save
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D`\*\***`.save()`\*\* de l'API Canvas 2D API enregistre l'état complet du canvas en plaçant l'état courant dans une stack.

### L'état du dessin

L'état du dessin qui est sauvegardé dans une stack se compose de:

- La matrice de transformation actuelle.
- La région de détourage actuelle.
- Le tableau pour les tracés en pointillés.
- Les valeurs des attributs suivant: {{domxref("CanvasRenderingContext2D.strokeStyle", "strokeStyle")}}, {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}, {{domxref("CanvasRenderingContext2D.globalAlpha", "globalAlpha")}}, {{domxref("CanvasRenderingContext2D.lineWidth", "lineWidth")}}, {{domxref("CanvasRenderingContext2D.lineCap", "lineCap")}}, {{domxref("CanvasRenderingContext2D.lineJoin", "lineJoin")}}, {{domxref("CanvasRenderingContext2D.miterLimit", "miterLimit")}}, {{domxref("CanvasRenderingContext2D.lineDashOffset", "lineDashOffset")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetX", "shadowOffsetX")}}, {{domxref("CanvasRenderingContext2D.shadowOffsetY", "shadowOffsetY")}}, {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}}, {{domxref("CanvasRenderingContext2D.shadowColor", "shadowColor")}}, {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation")}}, {{domxref("CanvasRenderingContext2D.font", "font")}}, {{domxref("CanvasRenderingContext2D.textAlign", "textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline")}}, {{domxref("CanvasRenderingContext2D.direction", "direction")}}, {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}}.

## Syntaxe

    void ctx.save();

## Exemple

### Enregistrer l'état du dessin

Cet exemple utilise la méthode `save()` pour enregistrer l'état par défaut et `restore()`  pour le rétablir plus tard, on pourra ainsi dessiner un rectangle avec l'état de base après.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// On sauvegarde l'état par défaut
ctx.save();

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);

// On restaure l'état par défaut
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### Résultat

{{ EmbedLiveSample('Saving_the_drawing_state', 700, 180) }}

## Spécifications

| Spécification                                                                                                                        | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-save", "CanvasRenderingContext2D.save")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.save")}}

## Voir aussi

- L'interface définissant cette méthode: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.restore()")}}
