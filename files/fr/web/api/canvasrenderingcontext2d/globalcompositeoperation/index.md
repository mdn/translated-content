---
title: CanvasRenderingContext2D.globalCompositeOperation
slug: Web/API/CanvasRenderingContext2D/globalCompositeOperation
translation_of: Web/API/CanvasRenderingContext2D/globalCompositeOperation
---
{{APIRef}}

La propriété **`CanvasRenderingContext2D.globalCompositeOperation`** de l'API Canvas 2D définit le type d'opération de composition à appliquer lors du tracé de nouvelles formes.

Voir aussi [Composition et découpe](/fr/docs/Tutoriel_canvas/Composition) dans le [Tutoriel canvas](/fr/docs/Tutoriel_canvas).

## Syntaxe

    ctx.globalCompositeOperation = type;

`type` est de type {{jsxref("String")}} et permet de choisir quelle opération de composition ou de mode fondu utiliser.

## Exemples

### Changer l'opération de composition

Cet exemple utilise la propriété `globalCompositeOperation` pour dessiner deux rectangles qui s'excluent l'un l'autre quand ils se superposent.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.globalCompositeOperation = 'xor';

ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);

ctx.fillStyle = 'red';
ctx.fillRect(50, 50, 100, 100);
```

#### Résultat

{{ EmbedLiveSample('Exemples', 700, 180) }}

## Spécifications

| Spécification                                                                                                                                                                            | Etat                             | Commentaires |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-globalcompositeoperation", "CanvasRenderingContext2D.globalCompositeOperation")}} | {{Spec2('HTML WHATWG')}} |              |
| {{SpecName('Compositing')}}                                                                                                                                                     | {{Spec2('Compositing')}} |              |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.globalCompositeOperation")}}

### Remarques concernant WebKit/Blink

- Dans les navigateurs de type WebKit et Blink, la méthode non-standard et obsolète `ctx.setCompositeOperation()` est implémentée à la place de cette propriété.
- Le support de `"plus-darker"` et`"darker"` a été abandonné à partir de Chrome 48. Veuillez utiliser `"darken"` à la place.

### Remarques concernant Gecko

- Une version préliminaire de la spécification de Canvas définissait une valeur `"darker"`. Cependant, Firefox a abandonné le support de `"darker"` dans sa version 4 ({{bug(571532)}}). Voir aussi [cet article de blog](http://dropshado.ws/post/77229081704/firefox-doesnt-support-canvas-composite-darker) qui suggère l'utilisation de `"difference"` pour parvenir à un effet similaire à `"darker"`.

## Voir aussi

- L'interface qui définit cette propriété : {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
