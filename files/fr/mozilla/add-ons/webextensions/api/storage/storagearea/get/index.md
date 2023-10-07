---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
---

{{AddonSidebar()}}

Récupère un ou plusieurs éléments de la zone de stockage.

C'est une fonction asynchrone qui renvoie une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise).

## Syntaxe

```js
let gettingItem = browser.storage.<storageType>.get(
  keys    // null, string, object or array of strings
)
```

`<storageType>` sera l'un des types de stockage accessibles en écriture — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, ou {{WebExtAPIRef("storage.managed", "managed")}}.

### Paramètres

- `keys`
  - : Une clé (chaîne) ou des clés (un tableau de chaînes ou un objet spécifiant des valeurs par défaut) pour identifier le ou les articles à extraire du stockage. Si vous passez une chaîne vide, un objet ou un tableau ici, un objet vide sera récupéré. Si vous passez `null`, ou une valeur indéfinie, le contenu entier du stockage sera récupéré.

### Valeur retournée

Une [`Promise`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) qui sera remplie avec un objet de `resultat` contenant tous les objets dans les `clefs` trouvées dans la zone de stockage. Si l'opération a échoué, la promesse sera rejetée avec un message d'erreur. Si le stockage géré n'est pas défini, les données `non définies` seront retournées.

> **Attention :** Lorsqu'elle est utilisée dans un script de contenu dans les versions de Firefox antérieures à 52, la promesse retournée par `browser.storage.local.get()` est remplie avec un tableau contenant un objet. L'objet dans le tableau contient les `clefs` trouvées dans la zone de stockage, comme décrit ci-dessus. La promesse est correctement remplie avec un objet lorsqu'il est utilisé dans le contexte d'arrière-plan
> (scripts d'arrière-plan, popups, pages d'options, etc.). Lorsque cette API est utilisée en tant que `chrome.storage.local.get()`, elle transmet correctement un objet à la fonction de rappel.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Supposons que le stockage contienne deux éléments :

```js
// storage contains two items,
// "kitten" and "monster"
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

Définissez les gestionnaires de réussite et d'échec pour la promesse:

```js
function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
```

Sans arguments `clefs`, tout récupérez :

```js
let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

Avec un argument de clefs vide, ne retourne rien:

```js
// with an empty array, retrieve nothing
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -> Object { }
```

Avec le nom d'un objet, récupérez la correspondance :

```js
let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -> Object { kitten: Object }
```

Avec un tableau de noms d'objets, récupérez toutes les correspondances :

```js
let gettingItem = browser.storage.local.get([
  "kitten",
  "monster",
  "grapefruit",
]);
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

Avec un objet avec des noms d'objets en tant que clefs et la valeur par défaut en tant que valeur :

```js
let gettingItem = browser.storage.local.get({
  kitten: "no kitten",
  monster: "no monster",
  grapefruit: {
    name: "Grape Fruit",
    eats: "Water",
  },
});

// -> Object { kitten: Object, monster: Object, grapefruit: Object }
```

{{WebExtExamples}}

### Chrome exemples

```js
chrome.storage.local.get("kitten", function (items) {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

Ou avec une fonction de flèche

```js
chrome.storage.local.get("kitten", (items) => {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

> **Note :**
>
> Cette API est basée sur l'API Chromium [`chrome.storage`](https://developer.chrome.com/extensions/storage). Cette documentation est dérivée de [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) dans le code de Chromium.
>
> Les données de compatibilité relatives à Microsoft Edge sont fournies par Microsoft Corporation et incluses ici sous la licence Creative Commons Attribution 3.0 pour les États-Unis.
