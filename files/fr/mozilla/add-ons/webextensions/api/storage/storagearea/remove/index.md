---
title: StorageArea.remove()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Non-standard
  - Reference
  - Storage
  - StorageArea
  - WebExtensions
  - remove
translation_of: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/remove
---
{{AddonSidebar()}}

Supprime un ou plusieurs éléments de la zone de stockage.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
let removingItem = browser.storage.<storageType>.remove(
  keys             // string, or array of strings
)
```

`<storageType>` sera l'un des types de stockage accessibles en écriture — {{WebExtAPIRef("storage.sync")}} ou {{WebExtAPIRef("storage.local")}}.

### Paramètres

- `keys`
  - : Une chaîne ou un tableau de chaînes représentant la ou les clés de l'élément à supprimer.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments si l'opération a réussi. Si l'opération a échoué, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.storage.StorageArea.remove")}}

## Exemples

Supprimer un seul élément:

```js
function onRemoved() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

let removeKitten = browser.storage.sync.remove("kitten");
removeKitten.then(onRemoved, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
