---
title: CanvasRenderingContext2D.imageSmoothingEnabled
slug: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
translation_of: Web/API/CanvasRenderingContext2D/imageSmoothingEnabled
---
{{APIRef}} {{SeeCompatTable}}

La propriété `CanvasRenderingContext2D.imageSmoothingEnabled` de l'API Canvas 2D peut être affectée pour changer le fait que les images soient lissées (`true`, par défaut) ou non (`false`). Lors de la récupération de la propriété `imageSmoothingEnabled`, la dernière valeur à laquelle elle a été définie est renvoyée.

Cette propriété est utile pour les jeux à thème pixel-art, lors d'une mise à l'échelle du canvas par exemple. L'algorithme de redimensionnement par défaut peut créer des effets de flou et ruiner les jolis pixels. Mettez cette propriété à `false` dans ce cas. Voir aussi la propriété CSS {{cssxref("image-rendering")}}.

## Syntaxe

    ctx.imageSmoothingEnabled = valeur;

### Options

- `valeur`
  - : Un {{jsxref("Boolean")}} indiquant de lisser les images ou non.

## Exemples

### Désactiver le lissage d'image

Dans cet exemple, on compare trois images. La première image est dessinée avec sa taille naturelle, la deuxième est élargie pour obtenir 3 fois la taille originale et le lissage est activée, la troisième est élargie pour obtenir 3 fois la taille originale et le lissage est désactivé.

#### HTML

```html
<canvas id="canvas" width="460" height="210"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');
ctx.font = '16px sans-serif';
ctx.textAlign = 'center';

const img = new Image();
img.src = 'https://interactive-examples.mdn.mozilla.net/media/examples/star.png';
img.onload = function() {
  const w = img.width,
        h = img.height;

  ctx.fillText('Source', w * .5, 20);
  ctx.drawImage(img, 0, 24, w, h);

  ctx.fillText('Smoothing = TRUE', w * 2.5, 20);
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(img, w, 24, w * 3, h * 3);

  ctx.fillText('Smoothing = FALSE', w * 5.5, 20);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, w * 4, 24, w * 3, h * 3);
};
```

#### Résultat

{{ EmbedLiveSample('Exemples', 700, 240) }}

## Spécifications

| Spécification                                                                                                                                                                    | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-imagesmoothingenabled", "CanvasRenderingContext2D.imageSmoothingEnabled")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.imageSmoothingEnabled")}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
- {{cssxref("image-rendering")}}
