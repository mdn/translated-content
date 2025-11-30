---
title: "HTMLAreaElement : propriété shape"
short-title: shape
slug: Web/API/HTMLAreaElement/shape
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`shape`** de l'interface {{DOMxRef("HTMLAreaElement")}} définit la forme d'une zone d'une image réactive. Elle reflète l'attribut [`shape`](/fr/docs/Web/HTML/Reference/Elements/area#shape) de l'élément HTML {{HTMLElement("area")}}.

## Valeur

Une chaîne de caractères&nbsp;: `rect`, `circle` ou `poly`.

## Exemples

```js
const areaElement = document.getElementById("imageMapArea");
console.log(areaElement.shape);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La prorpiété {{DOMxRef("HTMLAreaElement.coords")}}
- La prorpiété {{DOMxRef("HTMLAreaElement.alt")}}
- L'interface {{DOMxRef("HTMLMapElement")}}
- L'élément HTML {{HTMLElement("area")}}
- L'élément HTML {{HTMLElement("map")}}
- L'élément HTML {{HTMLElement("a")}}
