---
title: HTMLMediaElement.volume
slug: Web/API/HTMLMediaElement/volume
---

{{APIRef("HTML DOM")}}

La propriété **`HTMLMediaElement.volume`** définit le volume auquel le média doit être lu.

## Syntaxe

```js
var volume = video.volume; //1
```

### Valeur

Une valeur de type double (nombre à virgule) inclut entre 0 et 1, si elle vaut 0 le son est coupé et elle vaut 1 le son est le plus élevé possible.

## Exemple

```js
var obj = document.createElement("audio");
console.log(obj.volume); // 1
obj.volume = 0.75;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- The interface defining it, {{domxref("HTMLMediaElement")}}.
- {{domxref("HTMLMediaElement.muted")}}
