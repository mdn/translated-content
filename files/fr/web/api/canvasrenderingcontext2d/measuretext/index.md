---
title: CanvasRenderingContext2D.measureText()
slug: Web/API/CanvasRenderingContext2D/measureText
tags:
  - API
  - Canevas
  - CanvasRenderingContext2D
  - Méthode
  - Reference
translation_of: Web/API/CanvasRenderingContext2D/measureText
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.measureText()`** renvoie un objet {{domxref ("TextMetrics")}} qui contient des informations sur le texte mesuré (telle que sa largeur, par exemple).

## Syntaxe

    ctx.measureText(texte);

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
var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

var texte = ctx.measureText('foo'); // objet TextMetrics
texte.width; // 16;
```

## Spécifications

| Spécification                                                                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-measuretext", "CanvasRenderingContext2D.measureText")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.measureText")}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("TextMetrics")}}
