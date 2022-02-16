---
title: IDBRequest.source
slug: Web/API/IDBRequest/source
tags:
  - API
  - IDBRequest
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBRequest/source
---
{{APIRef("IndexedDB")}}

La propriété **`source`** est une propriété en lecture seule, rattachée à l'interface {{domxref("IDBRequest")}}, et qui indique la source de la requête (c'est-à-dire l'index ou le magasin d'objets utilisé). Si aucune source n'existe (par exemple car on a appelé {{domxref("indexedDB.open")}}), la propriété vaut `null`.

{{AvailableInWorkers}}

## Syntaxe

    var IDBIndex = request.source;
    var IDBCursor = request.source;
    var IDBObjectStore = request.source;

### Valeur

Un objet qui représente la source de la requête. Ce peut être un objet {{domxref("IDBIndex")}}, {{domxref("IDBObjectStore")}} ou un objet  {{domxref("IDBCursor")}}.

## Exemples

Dans l'exemple qui suit, on récupère un enregistrement avec un titre donné depuis un magasin d'objets. Ensuite, on met à jour une des propriétés de cet enregistrement et on met à jour le magasin d'objets en insérant cet objet modifié. Lors de cette deuxième requête, on affiche la source dans la console. Pour consulter un exemple fonctionnel complet, vous pouvez vous référer à notre application [To-do Notifications](https://github.com/mdn/to-do-notifications/) ([cf. l'exemple _live_](https://mdn.github.io/to-do-notifications/)).

```js
var title = "Walk dog";

// On ouvre une transaction
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// On fait une requête pour récupérer
// l'enregistrement qui possède le titre
// souhaité
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // On récupère l'objet afin de le modifier
  var data = objectStoreTitleRequest.result;

  // On met à jour la propriété notified
  // avec la valeur "yes"
  data.notified = "yes";

  // On crée une autre requête pour replacer
  // l'enregistrement modifié dans la base de d
  // données
  var updateTitleRequest = objectStore.put(data);

  // Ici, on affiche la source de la requête dans
  // la console
  console.log("La source de cette requête est " + updateTitlerequest.source);
  // Quand cette deuxième requête sera appliquée,
  // on lancera displayData() pour mettre à jour
  // l'affichage
  updateTitleRequest.onsuccess = function() { displayData(); };
};
```

## Spécifications

| Spécification                                                                        | État                             | Commentaires |
| ------------------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBRequest-source', 'source')}} | {{Spec2('IndexedDB')}}     |              |
| {{SpecName("IndexedDB 2", "#dom-idbrequest-source", "source")}} | {{Spec2("IndexedDB 2")}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBRequest.source")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
