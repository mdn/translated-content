---
title: "HTMLProgressElement : propriété value"
short-title: value
slug: Web/API/HTMLProgressElement/value
l10n:
  sourceCommit: 63c87435a30517357c17c6bf49785cf0c14991b0
---

{{APIRef("HTML DOM")}}

La propriété **`value`** de l'interface {{DOMxRef("HTMLProgressElement")}} représente la progression actuelle de l'élément HTML {{HTMLElement("progress")}}.

## Valeur

Un nombre à virgule flottante. Si la valeur {{DOMxRef("HTMLProgressElement.max", "max")}} n'est pas définie sur la barre de progression, la valeur varie entre 0.0 et 1.0. Si la valeur `max` est définie, alors la valeur varie entre `0` et la valeur `max`.

Si la propriété `value` n'est pas définie sur l'objet {{DOMxRef("HTMLProgressElement")}}, la barre de progression reste indéterminée.

## Exemples

### HTML

```html
Barre de progression déterminée&nbsp;: <progress id="pBar"></progress>
<span>0</span>%
<br />
Barre de progression indéterminée&nbsp;: <progress></progress>
```

### JavaScript

```js
const pBar = document.getElementById("pBar");
const span = document.getElementsByTagName("span")[0];

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
