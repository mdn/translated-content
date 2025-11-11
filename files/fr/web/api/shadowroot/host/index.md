---
title: ShadowRoot.host
slug: Web/API/ShadowRoot/host
---

{{APIRef("Shadow DOM")}}

La propriété **`host`** est une propriété en lecture seule, rattachée à l'interface {{domxref("ShadowRoot")}} et qui représente une référence à l'élément du DOM auquel la racine `ShadowRoot` est attachée.

## Syntaxe

```js
var element = shadowRoot.host;
```

### Valeur

Un élément du DOM sous la forme d'un objet {{domxref('Element')}}.

## Exemples

```js
let customElem = document.querySelector('mon-element-shadow-dom');
let shadow = customElem.shadowRoot;

  ...

// renvoie l'élément hôte
let hostElem = shadow.host;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
