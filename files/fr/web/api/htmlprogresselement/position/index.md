---
title: "HTMLProgressElement : propriété position"
short-title: position
slug: Web/API/HTMLProgressElement/position
l10n:
  sourceCommit: 2b1417faf65c87bb164a0e75043c1fb53f43a848
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`position`** de l'interface {{DOMxRef("HTMLProgressElement")}} retourne la progression actuelle de l'élément HTML {{HTMLElement("progress")}}.

## Valeur

Pour une barre de progression déterminée, retourne le résultat de la valeur courante divisée par la valeur maximale, c'est-à-dire une fraction comprise entre `0.0` et `1.0`.

Pour une barre de progression indéterminée, la valeur est toujours `-1`.

## Exemples

### HTML

```html
Barre de progression déterminée&nbsp;:
<progress id="pBar"></progress> Position&nbsp;: <span>0</span>
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

pBar.max = 100;
pBar.value = 0;

setInterval(() => {
  pBar.value = pBar.value < pBar.max ? pBar.value + 1 : 0;

  span.textContent = pBar.position;
}, 100);
```

{{EmbedLiveSample("Exemples", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
