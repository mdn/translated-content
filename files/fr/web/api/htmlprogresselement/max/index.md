---
title: "HTMLProgressElement : propriété max"
short-title: max
slug: Web/API/HTMLProgressElement/max
l10n:
  sourceCommit: 63c87435a30517357c17c6bf49785cf0c14991b0
---

{{APIRef("HTML DOM")}}

La propriété **`max`** de l'interface {{DOMxRef("HTMLProgressElement")}} représente la borne supérieure de l'intervalle de l'élément HTML {{HTMLElement("progress")}}.

## Valeur

Un nombre à virgule flottante supérieur à zéro. La valeur par défaut est 1.0.

## Exemples

### HTML

```html
Progression&nbsp;: <progress id="pBar"></progress> <span>0</span>%
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

console.log(`Valeur par défaut de max : ${pBar.max}`);

pBar.max = 100;
pBar.value = 0;

setInterval(() => {
  pBar.value = pBar.value < pBar.max ? pBar.value + 1 : 0;

  span.textContent = Math.trunc(pBar.position * 100);
}, 100);
```

{{EmbedLiveSample("Exemples", "100%", 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
