---
title: CanvasRenderingContext2D.save()
slug: Web/API/CanvasRenderingContext2D/save
---

{{APIRef}}

La méthode **`CanvasRenderingContext2D.save()`** de l'API Canvas 2D API enregistre l'état complet du canvas en plaçant l'état courant dans une stack.

### L'état du dessin

L'état du dessin qui est sauvegardé dans une stack se compose de&nbsp;:

- La matrice de transformation actuelle.
- La région de détourage actuelle.
- Le tableau pour les tracés en pointillés.
- Les valeurs des attributs suivant&nbsp;: [`strokeStyle`](/fr/docs/Web/API/CanvasRenderingContext2D/strokeStyle), [`fillStyle`](/fr/docs/Web/API/CanvasRenderingContext2D/fillStyle), [`globalAlpha`](/fr/docs/Web/API/CanvasRenderingContext2D/globalAlpha), [`lineWidth`](/fr/docs/Web/API/CanvasRenderingContext2D/lineWidth), [`lineCap`](/fr/docs/Web/API/CanvasRenderingContext2D/lineCap), [`lineJoin`](/fr/docs/Web/API/CanvasRenderingContext2D/lineJoin), [`miterLimit`](/fr/docs/Web/API/CanvasRenderingContext2D/miterLimit), [`lineDashOffset`](/fr/docs/Web/API/CanvasRenderingContext2D/lineDashOffset), [`shadowOffsetX`](/fr/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX), [`shadowOffsetY`](/fr/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY), [`shadowBlur`](/fr/docs/Web/API/CanvasRenderingContext2D/shadowBlur), [`shadowColor`](/fr/docs/Web/API/CanvasRenderingContext2D/shadowColor), [`globalCompositeOperation`](/fr/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation), [`font`](/fr/docs/Web/API/CanvasRenderingContext2D/font), [`textAlign`](/fr/docs/Web/API/CanvasRenderingContext2D/textAlign), [`textBaseline`](/fr/docs/Web/API/CanvasRenderingContext2D/textBaseline), [`direction`](/fr/docs/Web/API/CanvasRenderingContext2D/direction), [`imageSmoothingEnabled`](/fr/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled).

## Syntaxe

```js
void ctx.save();
```

## Exemples

### Enregistrer l'état du dessin

Cet exemple utilise la méthode `save()` pour enregistrer l'état par défaut et `restore()` pour le rétablir plus tard, on pourra ainsi dessiner un rectangle avec l'état de base après.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// On sauvegarde l'état par défaut
ctx.save();

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// On restaure l'état par défaut
ctx.restore();

ctx.fillRect(150, 40, 100, 100);
```

#### Résultat

{{EmbedLiveSample('Enregistrer_létat_du_dessin', 700, 180)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface définissant cette méthode&nbsp;: [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D)
- [`CanvasRenderingContext2D.restore()`](/fr/docs/Web/API/CanvasRenderingContext2D/restore)
