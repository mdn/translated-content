---
title: "HTMLMediaElement : propriété defaultPlaybackRate"
short-title: defaultPlaybackRate
slug: Web/API/HTMLMediaElement/defaultPlaybackRate
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

La propriété **`defaultPlaybackRate`** de l'interface {{DOMxRef("HTMLMediaElement")}} indique la vitesse de lecture par défaut du média.

## Valeur

Un nombre à virgule flottante. `1.0` correspond à la «&nbsp;vitesse normale&nbsp;», des valeurs inférieures à `1.0` ralentissent la lecture du média, des valeurs supérieures l'accélèrent.

### Exceptions

- `NotSupportedError` {{DOMxRef("DOMException")}}
  - : Levée si la valeur définie n'est pas prise en charge.

## Exemples

```js
const obj = document.createElement("video");
console.log(obj.defaultPlaybackRate); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.defaultPlaybackRate`
