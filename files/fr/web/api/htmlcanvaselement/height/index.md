---
title: HTMLCanvasElement.height
slug: Web/API/HTMLCanvasElement/height
---

{{APIRef("Canvas API")}}

La propriété **`HTMLCanvasElement.height`** est un entier positif reflétant l'attribut HTML [`height`](/fr/docs/Web/HTML/Element/canvas#height) de l'élément {{HTMLElement("canvas")}} mesuré en pixels CSS. Quand cet attribut n'est pas spécifié, ou si on lui affecte une valeur invalide, telle que négative, la valeur par défaut de `150` is utilisée.

C'est l'une des deux propriétés, l'autre étant {{domxref("HTMLCanvasElement.width")}}, qui contrôlent la taille du canevas.

## Syntaxe

```js
var pxl = canvas.height;
canvas.height = pxl;
```

## Exemples

Étant donné cet élément {{HTMLElement("canvas")}} :

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

vous pouvez obtenir la hauteur du canevas avec le code suivant :

```js
var canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface la définissant, {{domxref("HTMLCanvasElement")}}.
- L'autre propriété contrôlant la taille du canevas, {{domxref("HTMLCanvasElement.width")}}.
