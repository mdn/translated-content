---
title: StorageArea.clear()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/clear
---

{{AddonSidebar()}}

Supprime tous les éléments de la zone de stockage.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var clearing = browser.storage.<storageType>.clear()
```

`<storageType>` sera l'un des types de stockage accessibles en écriture — {{WebExtAPIRef("storage.sync")}} or {{WebExtAPIRef("storage.local")}}.

### Paramètres

None.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments si l'opération a réussi. Si l'opération a échoué, la promesse sera rejetée avec un message d'erreur..

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
function onCleared() {
  console.log("OK");
}

function onError(e) {
  console.log(e);
}

var clearStorage = browser.storage.local.clear();
clearStorage.then(onCleared, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
