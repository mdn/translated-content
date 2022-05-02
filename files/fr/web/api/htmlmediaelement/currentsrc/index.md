---
title: HTMLMediaElement.currentSrc
slug: Web/API/HTMLMediaElement/currentSrc
browser-compat: api.HTMLMediaElement.currentSrc
translation_of: Web/API/HTMLMediaElement/currentSrc
---
{{APIRef("HTML DOM")}}

La propriété **`HTMLMediaElement.currentSrc`** contient l'URL absolue de la ressource multimédia choisie. Cela peut se produire, par exemple, si le serveur web sélectionne un fichier multimédia en fonction de la résolution de l'affichage de l'utilisateur. La valeur est une chaîne vide si la propriété `networkState` est `EMPTY`.

## Valeur

Un objet [`DOMString`](/fr/docs/Web/API/DOMString) contenant l'URL absolue de la source multimédia choisie, ce peut être&nbsp;:
- Une chaîne vide si `networkState` est `EMPTY`&nbsp;;
- Ou une des ressources répertoriées par l'objet [`HTMLSourceElement`](/fr/docs/Web/API/HTMLSourceElement) contenu dans l'élément média&nbsp;;
- Ou la valeur de `src` si aucun élément [`<source>`](/fr/docs/Web/HTML/Element/source) n'est fourni.

## Exemples

```js
let obj = document.createElement('video');
console.log(obj.currentSrc); // ""
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui porte cette propriété, [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement).
