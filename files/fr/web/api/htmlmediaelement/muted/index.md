---
title: "HTMLMediaElement : propriété muted"
short-title: muted
slug: Web/API/HTMLMediaElement/muted
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

La propriété **`muted`** de l'interface {{DOMxRef("HTMLMediaElement")}} indique si l'élément multimédia est muet.

## Valeur

Une valeur booléenne. `true` signifie que l'élément est muet et `false` signifie qu'il ne l'est pas.

## Exemples

```js
const obj = document.createElement("video");
console.log(obj.muted); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.muted`
- La propriété {{DOMxRef("HTMLMediaElement.defaultMuted")}}
- La propriété {{DOMxRef("HTMLMediaElement.volume")}}
