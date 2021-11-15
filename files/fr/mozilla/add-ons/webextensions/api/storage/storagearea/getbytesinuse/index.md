---
title: StorageArea.getBytesInUse()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
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
  - getBytesInUse
translation_of: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getBytesInUse
---
{{AddonSidebar()}}

Obtient la quantité d'espace de stockage, en octets, utilisé un ou plusieurs éléments stockés dans la zone de stockage.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
var gettingSpace = browser.storage.<storageType>.getBytesInUse(
  keys                      // null, string, or array of strings
)
```

`<storageType>` sera l'un des types de stockage accessibles en écriture — {{WebExtAPIRef("storage.sync")}} ou {{WebExtAPIRef("storage.local")}}.

### Paramètres

- `keys`
  - : Une clef (chaîne) ou des cléfs (un tableau de chaînes) pour identifier le ou les éléments dont vous voulez récupérer l'espace de stockage. Si un tableau vide est passé, 0 sera renvoyé. Si vous passez à `null` ou `indéfini` ici, la fonction retournera l'espace utilisé par l'ensemble de la zone de stockage.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un entier, `bytesUsed`, représentant l'espace de stockage utilisé par les objets spécifiés dans les `clefs`. Si l'opération a échoué, la promesse sera rejetée avec un message d'erreur.

## Compatibilité du navigateur

{{Compat("webextensions.api.storage.StorageArea.getBytesInUse")}}

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
