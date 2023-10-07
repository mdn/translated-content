---
title: console.dir()
slug: Web/API/console/dir
---

{{APIRef("Console API")}}

La méthode **`console.dir()`** affiche une liste interactive des propriétés de l'objet JavaScript passé en argument. La sortie est présentée comme une liste hiérarchique avec des triangles qui permettent de développer l'arborescence de l'objet et de voir le contenu des objets descendants.

Autrement dit, `console.dir()` permet de voir l'ensemble des propriétés d'un objet JavaScript dans la console.

{{AvailableInWorkers}}

![Une capture d'écran de l'instruction console.dir() où on peut voir les propriétés de `document.location`](console-dir.png)

## Syntaxe

```js
console.dir(object);
```

### Paramètres

- `object`
  - : Un objet JavaScript dont on souhaite afficher les propriétés dans la console.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Microsoft Docs&nbsp;: référence de l'API Console](https://docs.microsoft.com/fr-fr/microsoft-edge/devtools-guide-chromium/console/api#dir)
- [Chrome&nbsp;: référence de l'API Console (en anglais)](https://developer.chrome.com/docs/devtools/console/api/#dir)
