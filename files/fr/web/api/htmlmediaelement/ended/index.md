---
title: "HTMLMediaElement : propriété ended"
short-title: ended
slug: Web/API/HTMLMediaElement/ended
l10n:
  sourceCommit: ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{APIRef("HTML DOM")}}

La propriété **`ended`** de l'interface {{DOMxRef("HTMLMediaElement")}} indique si le média contenu dans l'élément a terminé sa lecture.

## Valeur

Une valeur booléenne qui vaut `true` si le média contenu dans l'élément a terminé sa lecture.

Si la source du média est un objet {{DOMxRef("MediaStream")}}, la valeur est `true` si la valeur de la propriété {{DOMxRef("MediaStream.active", "active")}} du flux est `false`.

## Exemples

```js
const obj = document.createElement("video");
console.log(obj.ended); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.ended`
- L'interface {{DOMxRef("MediaStream")}}
- La propriété {{DOMxRef("MediaStream.active")}}
