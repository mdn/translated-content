---
title: StorageArea.set()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/set
---

{{AddonSidebar()}}

Stocke un ou plusieurs éléments dans la zone de stockage ou met à jour les éléments existants..

Lorsque vous stockez ou mettez à jour une valeur à l'aide de cette API, l'événement {{WebExtAPIRef("storage.onChanged")}} se déclenche.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
let settingItem = browser.storage.<storageType>.set(
  keys             // object
)
```

`<storageType>` sera l'un des types de stockage accessibles en écriture — {{WebExtAPIRef("storage.sync")}} ou {{WebExtAPIRef("storage.local")}}.

### Paramètres

- `keys`

  - : Un objet contenant une ou plusieurs paires clé / valeur à stocker dans le stockage. Si un élément existe déjà, sa valeur sera mise à jour.

    Les valeurs peuvent être des [types primitifs](/fr/docs/Glossary/Primitive) tels que des nombres, des booléens et des chaînes) ou des types de [`tableau`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array).

    Il n'est généralement pas possible de stocker d'autres types, tels que `Function`, `Date`, `RegExp`, `Set`, `Map`, `ArrayBuffer` et etc. Certains de ces types non pris en charge seront restaurés en tant qu'objet vide, et d'autres entraîneront `set()` à lancer une erreur. Le comportement exact ici est spécifique au navigateur.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie sans arguments si l'opération a réussi. Si l'opération a échoué, la promesse sera rejetée avec un message d'erreur.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

```js
function setItem() {
  console.log("OK");
}

function gotKitten(item) {
  console.log(`${item.kitten.name} has ${item.kitten.eyeCount} eyes`);
}

function gotMonster(item) {
  console.log(`${item.monster.name} has ${item.monster.eyeCount} eyes`);
}

function onError(error) {
  console.log(error);
}

// define 2 objects
var monster = {
  name: "Kraken",
  tentacles: true,
  eyeCount: 10,
};

var kitten = {
  name: "Moggy",
  tentacles: false,
  eyeCount: 2,
};

// store the objects
browser.storage.local.set({ kitten, monster }).then(setItem, onError);

browser.storage.local.get("kitten").then(gotKitten, onError);
browser.storage.local.get("monster").then(gotMonster, onError);
```

{{WebExtExamples}}

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.
