---
title: TextMetrics.width
slug: Web/API/TextMetrics/width
tags:
  - API
  - Canevas
  - Propriété
  - Référence(2)
  - TextMetrics
translation_of: Web/API/TextMetrics/width
---
{{APIRef("Canvas API")}}

La propriété en lecture seule **TextMetrics.width** contient en pixels CSS la largeur d'avance du texte (la largeur de la boîte de ligne).

## Syntaxe

    readonly metrics.width;

## Exemples

Étant donné cet élément {{HTMLElement("canvas")}} :

```html
<canvas id="canevas"></canvas>
```

vous pouvez obtenir un objet {{domxref("TextMetrics")}} en utilisant le code suivant :

```js
var canvas = document.getElementById("canevas");
var ctx = canvas.getContext("2d");

var texte = ctx.measureText("foo"); // objet TextMetrics
texte.width; // 16;
```

## Spécifications

| Spécification                                                                                                        | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-textmetrics-width", "TextMetrics.width")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.TextMetrics.width")}}

## Voir aussi

- {{domxref("TextMetrics")}}
