---
title: "HTMLMediaElement : propriété volume"
short-title: volume
slug: Web/API/HTMLMediaElement/volume
l10n:
  sourceCommit: 7b6cb443731d0329299f15b0c35be7cc0f645679
---

{{APIRef("HTML DOM")}}

La propriété **`volume`** de l'interface {{DOMxRef("HTMLMediaElement")}} définit le volume auquel le média doit être lu.

## Valeur

Un nombre entre 0 et 1, si elle vaut 0 le son est coupé et elle vaut 1 le son est le plus élevé possible.

## Exemples

```js
const obj = document.createElement("audio");
console.log(obj.volume); // 1
obj.volume = 0.75;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.volume`
- La propriété {{DOMxRef("HTMLMediaElement.muted")}}
