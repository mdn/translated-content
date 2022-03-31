---
title: HTMLCanvasElement.height
slug: Web/API/HTMLCanvasElement/height
tags:
  - API
  - Canvas
  - HTMLCanvasElement
  - Propriété
translation_of: Web/API/HTMLCanvasElement/height
---
{{APIRef("Canvas API")}}

La propriété **`HTMLCanvasElement.height`** est un entier positif reflétant l'attribut HTML {{htmlattrxref("height", "canvas")}} de l'élément {{HTMLElement("canvas")}} mesuré en pixels CSS. Quand cet attribut n'est pas spécifié, ou si on lui affecte une valeur invalide, telle que négative, la valeur par défaut de `150` is utilisée.

C'est l'une des deux propriétés, l'autre étant {{domxref("HTMLCanvasElement.width")}}, qui contrôlent la taille du canevas.

## Syntaxe

    var pxl = canvas.height;
    canvas.height = pxl;

## Exemples

Étant donné cet élément {{HTMLElement("canvas")}} :

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

vous pouvez obtenir la hauteur du canevas avec le code suivant :

```js
var canvas = document.getElementById('canvas');
console.log(canvas.height); // 300
```

## Spécifications

| Spécification                                                                                                                | Statut                           | Commentaire                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "scripting.html#attr-canvas-height", "HTMLCanvasElement.height")}} | {{Spec2('HTML WHATWG')}} | Pas de changement depuis l'instantané le plus récent, {{SpecName('HTML5 W3C')}} |
| {{SpecName('HTML5.1', "scripting-1.html#attr-canvas-height", "HTMLCanvasElement.height")}}     | {{Spec2('HTML5.1')}}     |                                                                                        |
| {{SpecName('HTML5 W3C', "scripting-1.html#attr-canvas-height", "HTMLCanvasElement.height")}} | {{Spec2('HTML5 W3C')}}     | Instantané du {{SpecName('HTML WHATWG')}} contenant la définition initiale.   |

## Compatibilité des navigateurs

{{Compat("api.HTMLCanvasElement.height")}}

## Voir aussi

- L'interface la définissant, {{domxref("HTMLCanvasElement")}}.
- L'autre propriété contrôlant la taille du canevas, {{domxref("HTMLCanvasElement.width")}}.
