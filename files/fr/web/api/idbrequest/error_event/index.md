---
title: IDBRequest.onerror
slug: Web/API/IDBRequest/error_event
---

{{ APIRef("IndexedDB") }}

le gestionnaire d'événement **`onerror`** de l'interface {{domxref("IDBRequest")}} capte l'événement [`error`](/fr/docs/Web/API/HTMLElement/error_event), déclenché quand une requête renvoie une erreur.

Le gestionnaire d'événement reçoit l'événement [error](/fr/docs/Web/API/HTMLElement/error_event) avec le type="error" en paramètre.

{{AvailableInWorkers}}

## Syntaxe

```js
request.onerror = function( event ) { ... };
```

## Exemple

L'exemple suivant demande un titre d'enregistrement donné, `onsuccess` obtient l'enregistrement associé au {{domxref("IDBObjectStore","magasin d'objets")}} (mis à disposition en tant que `objectStoreTitleRequest.result`), on met à jour une propriété de l'enregistrement, puis le sauve dans le magasin d'objets. En bas le gestionnaire d'événement `onerror` affiche le code d'erreur si la {{domxref("IDBRequest","requête")}} échoue. Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
var title = "Walk dog";

// Ouvrez une transaction comme d'habitude
var objectStore = db
  .transaction(["toDoList"], "readwrite")
  .objectStore("toDoList");

// Obtenez l'objet toDoList qui a ce titre
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function () {
  // Prenez l'objet de données renvoyé comme résultat
  var data = objectStoreTitleRequest.result;

  // Mettre à jour la valeur notified de l'objet à "yes"
  data.notified = "yes";

  // Créer une autre requête qui insère le nouvelle élément dans la base de données
  var updateTitleRequest = objectStore.put(data);

  // Lorsque cette requête réussit, appelle de la fonction displayData() pour mettre à jour l'affichage
  updateTitleRequest.onsuccess = function () {
    displayData();
  };
};

objectStoreTitleRequest.onerror = function () {
  // Si une erreur se produit à la demande, on l'affiche
  console.log(
    "Il y a eu une erreur dans la récupération des données: " +
      objectStoreTitleRequest.error,
  );
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Using IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [Error Event](/fr/docs/Web/API/HTMLElement/error_event)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
