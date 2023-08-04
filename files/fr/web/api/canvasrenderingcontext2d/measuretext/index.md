---
title: CanvasRenderingContext2D.measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
---

{{APIRef}}

La méthode **`CanvasRenderingContext2D.measureText()`** renvoie un objet {{domxref ("TextMetrics")}} qui contient des informations sur le texte mesuré (telle que sa largeur, par exemple).

## Syntaxe

```js
ctx.measureText(texte);
```

### Paramètres

- texte
  - : Le texte à mesurer.

### Valeur retournée

Un objet {{domxref("TextMetrics")}}.

## Exemples

Étant donné cet élément {{HTMLElement("canvas")}} :

```html
<canvas id="canevas"></canvas>
```

vous pouvez obtenir un objet {{domxref("TextMetrics")}} en utilisant le code suivant :

```js
var canevas = document.getElementById("canevas");
var ctx = canevas.getContext("2d");

var texte = ctx.measureText("foo"); // objet TextMetrics
texte.width; // 16;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("TextMetrics")}}
