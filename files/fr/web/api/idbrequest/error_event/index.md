---
title: IDBRequest.onerror
slug: Web/API/IDBRequest/error_event
translation_of: Web/API/IDBRequest/onerror
original_slug: Web/API/IDBRequest/onerror
---
{{ APIRef("IndexedDB") }}

le gestionnaire d'événement **`onerror`** de l'interface {{domxref("IDBRequest")}} capte l'événement [`error`](/en-US/docs/Web/Events/error), déclenché quand une requête renvoie une erreur.

Le gestionnaire d'événement reçoit l'événement [error](/en-US/docs/Web/Events/error) avec le type="error" en paramètre.

{{AvailableInWorkers}}

## Syntaxe

```js
request.onerror = function( event ) { ... };
```

## Exemple

L'exemple suivant demande un titre d'enregistrement donné, `onsuccess` obtient l'enregistrement associé au {{domxref("IDBObjectStore","magasin d'objets")}} (mis à disposition en tant que `objectStoreTitleRequest.result`), on met à jour une propriété de l'enregistrement, puis le sauve dans le magasin d'objets. En bas le gestionnaire d'événement `onerror` affiche le code d'erreur si la {{domxref("IDBRequest","requête")}} échoue. Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](http://mdn.github.io/to-do-notifications/)).

    var title = "Walk dog";

    // Ouvrez une transaction comme d'habitude
    var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

    // Obtenez l'objet toDoList qui a ce titre
    var objectStoreTitleRequest = objectStore.get(title);

    objectStoreTitleRequest.onsuccess = function() {
      // Prenez l'objet de données renvoyé comme résultat
      var data = objectStoreTitleRequest.result;

      // Mettre à jour la valeur notified de l'objet à "yes"
      data.notified = "yes";

      // Créer une autre requête qui insère le nouvelle élément dans la base de données
      var updateTitleRequest = objectStore.put(data);

      // Lorsque cette requête réussit, appelle de la fonction displayData() pour mettre à jour l'affichage
      updateTitleRequest.onsuccess = function() {
        displayData();
      };
    };

    objectStoreTitleRequest.onerror = function() {
      // Si une erreur se produit à la demande, on l'affiche
      console.log("Il y a eu une erreur dans la récupération des données: " + objectStoreTitleRequest.error);
    };

## Spécifications

| Spécification                                                                        | Statut                       | Commentaire |
| ------------------------------------------------------------------------------------ | ---------------------------- | ----------- |
| {{SpecName('IndexedDB', '#widl-IDBRequest-onerror', 'onerror')}} | {{Spec2('IndexedDB')}} |             |

## Compatibilité des navigateurs

{{Compat("api.IDBRequest.onerror")}}

## Voir aussi

- [Using IndexedDB](/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- [Error Event](/en-US/docs/Web/Events/error)
- Starting transactions: {{domxref("IDBDatabase")}}
- Using transactions: {{domxref("IDBTransaction")}}
- Setting a range of keys: {{domxref("IDBKeyRange")}}
- Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}
- Using cursors: {{domxref("IDBCursor")}}
- Reference example: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
