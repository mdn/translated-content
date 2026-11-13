---
title: "HTMLMediaElement : propriété currentSrc"
short-title: currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
l10n:
  sourceCommit: 937f993c79bb6f3a42b0db72712aaf5f18277d3d
---

{{APIRef("HTML DOM")}}

La propriété **`currentSrc`** de l'interface {{DOMxRef("HTMLMediaElement")}} contient l'URL absolue de la ressource multimédia choisie. Cela peut se produire, par exemple, si le serveur web sélectionne un fichier multimédia en fonction de la résolution de l'affichage de l'utilisateur·ice. La valeur est une chaîne vide si la propriété `networkState` vaut `EMPTY`.

## Valeur

Une chaîne de caractères contenant l'URL absolue de la source multimédia choisie&nbsp;; cela peut être une chaîne de caractères vide si `networkState` vaut `EMPTY`&nbsp;; sinon, ce sera l'une des ressources répertoriées par le {{DOMxRef("HTMLSourceElement")}} contenu dans l'élément multimédia, ou la valeur de {{DOMxRef("HTMLMediaElement.src", "src")}} si aucun élément {{HTMLElement("source")}} n'est fourni.

## Exemples

```js
const obj = document.createElement("video");
console.log(obj.currentSrc); // ""
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.currentSrc`
