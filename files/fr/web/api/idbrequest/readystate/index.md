---
title: IDBRequest.readyState
slug: Web/API/IDBRequest/readyState
tags:
  - API
  - IDBRequest
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBRequest/readyState
---
{{APIRef("IndexedDB")}}

La propriété **`readyState`**, rattachée à l'interface {{domxref("IDBRequest")}}, est une propriété en lecture seule qui indique l'état de la requête.

Chaque requête démarre avec l'état `pending` (c'est-à-dire en attente). Cet état vaut ensuite `done` (fini) lorsque la requête est terminée (en cas de réussite de l'opération comme en cas d'échec).

{{AvailableInWorkers}}

## Syntaxe

    var currentReadyState = request.readyState;

### Valeur

La valeur {{domxref("IDBRequestReadyState")}} de la requête, qui peut être l'un de deux valeurs. `pending` lorsque la requête est en attente, `done` lorsque celle-ci est finie.

## Exemples

Dans l'exemple qui suit, on effectue une requête sur un enregistrement avec un titre donné et on recupère l'enregistrement associé grâce au gestionnaire d'évènement `onsuccess` à partir du magasin d'objets {{domxref("IDBObjectStore")}}. Ensuite, on met à jour une des propriétés de cet enregistrement et on replace cet objet mis à jour dans le magasin d'objets via une autre requête. La valeur de la propriété `readyState` pour la deuxième requête est affichée dans la console. Pour consulter un exemple fonctionnel complet, vous pouvez vous référer à notre appliction [To-do Notifications](https://github.com/mdn/to-do-notifications/) ([cf. également l'exemple _live_](https://mdn.github.io/to-do-notifications/)).

```js
var title = "Walk dog";

// On ouvre une transaction
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// On récupère l'enregistrement avec le titre souhaité
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // On récupère les données du résultat de la requête
  var data = objectStoreTitleRequest.result;

  // On met à jour la propriété notified de l'objet
  // avec la valeur "yes"
  data.notified = "yes";

  // Ensuite, on crée une autre requête pour insérer
  // l'enregistrement dans la base de données
  var updateTitleRequest = objectStore.put(data);

  // On affiche l'état de la requête dans la console
  console.log("La valeur de readyState est " + updateTitlerequest.readyState);

  // Lorsque cette deuxième requête est appliquée,
  // on exécute la fonction displayData() afin d'afficher
  // les données à jour
  updateTitleRequest.onsuccess = function() {
    displayData();
  };
};
```

## Spécifications

| Spécification                                                                                    | État                             | Commentaires |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBRequest-readyState', 'readyState')}}     | {{Spec2('IndexedDB')}}     |              |
| {{SpecName("IndexedDB 2", "#dom-idbrequest-readystate", "readyState")}} | {{Spec2("IndexedDB 2")}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBRequest.readyState")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
