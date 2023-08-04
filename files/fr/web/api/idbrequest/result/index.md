---
title: IDBRequest.result
slug: Web/API/IDBRequest/result
---

{{APIRef("IndexedDB")}}

La propriété **`result`**, rattachée à l'interface [`IDBRequest`](/fr/docs/Web/API/IDBRequest), renvoie le résultat de la requête. Si la requête échoue et que le résultat n'est pas disponible, une exception `InvalidStateError` sera levée.

> **Note :** Cette fonctionnalité est disponible via les [Web Workers](/fr/docs/Web/API/Web_Workers_API).

## Syntaxe

```js
let resultat = request.result;
```

### Valeur

La valeur du résultat de la requête (le type dépend des objets du magasin d'objets).

## Exemple

Dans l'exemple qui suit, on souhaite récupérer l'enregistrement qui correspond à un titre donné. Le gestionnaire d'évènements `onsuccess` permet de récupérer l'enregistrement contenu dans le magasin d'objet ([`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore)) (via `objectStoreTitleRequest.result`). Ensuite, on met à jour une propriété de cet enregistrement et on replace cet enregistrement dans le magasin d'objet. Pour un exemple fonctionnel complet, voir [l'application To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir l'exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
let title = "Promener le chien";

// On ouvre une transaction en lecture/écriture
let objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// On récupère l'objet qui possède le titre souhaité
let objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function () {
  // On agit sur les données de l'objet de la requête
  let data = objectStoreTitleRequest.result;

  // On met à jour la propriété notified avec "yes"
  data.notified = "yes";

  // On crée une autre requête pour réinsérer l'objet dans la base
  let updateTitleRequest = objectStore.put(data);

  // Lorsque cette seconde requête est terminée, on lance displayData() pour rafraîchir l'écran
  updateTitleRequest.onsuccess = function () {
    displayData();
  };
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Initier une transaction : [`IDBDatabase`](/fr/docs/Web/API/IDBDatabase)
- Utiliser les transactions : [`IDBTransaction`](/fr/docs/Web/API/IDBTransaction)
- Définir un intervalle de clés : [`IDBKeyRange`](/fr/docs/Web/API/IDBKeyRange)
- Récupérer et modifier les données : [`IDBObjectStore`](/fr/docs/Web/API/IDBObjectStore)
- Utiliser les curseurs : [`IDBCursor`](/fr/docs/Web/API/IDBCursor)
- Exemple de référence : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).
