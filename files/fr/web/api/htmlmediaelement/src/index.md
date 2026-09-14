---
title: "HTMLMediaElement : propriété src"
short-title: src
slug: Web/API/HTMLMediaElement/src
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

La propriété **`src`** de l'interface {{DOMxRef("HTMLMediaElement")}} reflète la valeur de l'attribut `src` de l'élément média HTML, qui indique l'URL d'une ressource média à utiliser dans l'élément.

> [!NOTE]
> La meilleure façon de connaître l'URL de la ressource média actuellement utilisée dans cet élément est de regarder la valeur de l'attribut {{DOMxRef("HTMLMediaElement.currentSrc", "currentSrc")}}, qui prend également en compte la sélection de la meilleure ou de la ressource média préférée à partir d'une liste fournie dans un objet {{DOMxRef("HTMLSourceElement")}} (qui représente un élément HTML {{HTMLElement("source")}}).

## Valeur

Une chaîne de caractères contenant l'URL d'une ressource média à utiliser dans l'élément&nbsp;; cette propriété reflète la valeur de l'attribut `src` de l'élément HTML.

## Exemples

```js
const obj = document.createElement("video");
console.log(obj.src); // ""
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.src`
