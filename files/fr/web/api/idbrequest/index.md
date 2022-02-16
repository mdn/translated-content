---
title: IDBRequest
slug: Web/API/IDBRequest
tags:
  - API
  - Database
  - IDBRequest
  - IndexedDB
  - Interface
  - Reference
  - Storage
  - TopicStub
translation_of: Web/API/IDBRequest
---
{{APIRef("IndexedDB")}}

L'interface **`IDBRequest`** de l'API IndexedDB donne accès par ses gestionnaires d'événements aux résultats des requêtes asynchrones sur la base de données, les magasins d'objets ou les index. Chaque opération d'écriture ou lecture sur la base de données utilise une requête.

Cet objet **`IDBRequest`** ne contient aucune information sur le résultat de l'opération, mais dès qu'une information est disponible un événement est déclenché. L'objet **`IDBRequest`** utilise ses gestionnaires d'événements pour le capter et mettre l'information à disposition.

Toute les opération asynchrone retourne immédiatement une instance **`IDBRequest`** avec une propriété `readyState` défini à `'pending'` qui passe à  `'done'` lorsque la requête réussie ou échoue. Quand l'état passe à `done`, chaque requête retourne `result` et `error`, et un évènement est envoyé sur la requête. Quand l'état est sur `pending`, chaque accès à `result` ou `error` lève une exception `InvalidStateError`.

Pour faire simple, chaque méthode asynchrome retourne un objet de requête. Si l'opération réussi, le résultat est disponible dans la propriété `result` et un évènement `success` est lancé ({{domxref("IDBRequest.onsuccess")}}). Si une erreur est rencontrée, une exeption est disponible dans la propriété `error` et un évènement `error` est lancé ({{domxref("IDBRequest.onerror")}}).

L'interface {{domxref("IDBOpenDBRequest")}} est dérivé de `IDBRequest`.

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## Propriétés

_Hérite des propriétés de {{domxref("EventTarget")}}._

- {{domxref("IDBRequest.result","result")}} {{readonlyInline}}
  - : La propriété **`result`** de l'interface **`IDBRequest`** renvoie le résultat de la requête. Si la requête est en cours, échoue ou que le résultat n'est pas disponible, l'exception `InvalidStateError` est levée.
- {{domxref("IDBRequest.error","error")}} {{readonlyInline}}
  - : La propriété **`error`** de l'interface **`IDBRequest`** indique le code de l'erreur survenue durant le traitement de la requête. Si la requête est en cours l'exception `InvalidStateError` est levée.
- {{domxref("IDBRequest.source","source")}} {{readonlyInline}}
  - : La propriété **`source`** de l'interface **`IDBRequest`** renvoie la source de la requête, tel qu'un {{domxref("IDBIndex","index")}}, un {{domxref("IDBObjectStore","magasin d'ojets")}} ou `null` s'il n'y a pas de source (lors de l'appel {{domxref("indexedDB.open")}} par exemple).
- {{domxref("IDBRequest.transaction","transaction")}} {{readonlyInline}}
  - : La propriété **`transaction`** de l'interface **`IDBRequest`** renvoie la {{domxref("IDBTransaction","transaction")}} dans laquelle on fait la requête. La propriété peut renvoyer `null` si requête se fait sans transaction, comme un objet IDBRequest renvoyé par {{domxref("IDBFactory.open")}} dans ce cas on est juste connecté à la base de données.
- {{domxref("IDBRequest.readyState","readyState")}} {{readonlyInline}}
  - : La propriété **`readyState`** de l'interface **`IDBRequest`** renvoie l'état de la requête. Chaque requête débute avec un statut `pending` et passe au statut `done` quand la requête réussie ou échoue.

## Méthodes

_Pas de méthodes spécifiques, mais hérite des méthodes de {{domxref("EventTarget")}}._

## Gestionnaire d'événement

On peut écouter les évènement avec `addEventListener()` ou bien en assignant un gestionnaire d'évènement à la propriété `oneventname` de cette interface.

- {{domxref("IDBRequest.onerror","onerror")}}
  - : Le gestionnaire d'événement **`onerror`** de l'interface **`IDBRequest`** capte l'événement [`error`](/en-US/docs/Web/Events/error), déclenché quand une requête renvoie une erreur.
- {{domxref("IDBRequest.onsuccess","onsuccess")}}
  - : Le gestionnaire d'événement **`onsuccess`** de l'interface **`IDBRequest`** capte l'événement [`success`](/en-US/docs/Web/Events/success), déclenché quand la requête réussie.

## Exemple

Dans l'exemple suivant, on ouvre une base de données et on fait une requête. Les gestionnaires d'événement `{{domxref("IDBRequest.onsuccess","onsuccess")}}` et `{{domxref("IDBRequest","onerror")}}` sont inclus. Pour un exemple de travail complet, voir notre application [To-do Notifications](https://github.com/mdn/to-do-notifications/) ([voir l'exemple en direct](http://mdn.github.io/to-do-notifications/)).

```js
var db;

// Ouvre une base de données.
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Ces deux gestionnaires d'événement interviennent quand la dase de
// de données s'ouvre ou non.
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>Error loading database.</li>';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialised.</li>';

  // Affecte le resutat de l'ouverture à la variable.
  db = DBOpenRequest.result;
};
```

## Spécifications

| Spécification                                                                | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('IndexedDB', '#idbrequest', 'IDBRequest')}}     | {{Spec2('IndexedDB')}}     | Définition initiale. |
| {{SpecName("IndexedDB 2", "#request-api", "IDBRequest")}} | {{Spec2("IndexedDB 2")}} |                      |

## Compatibilité avec les navigateurs

{{Compat("api.IDBRequest")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/IndexedDB_API/Using_IndexedDB)
- Démarrer une transaction: {{domxref("IDBDatabase")}}
- Utiliser les transactions: {{domxref("IDBTransaction")}}
- Définir un intervalle de clés: {{domxref("IDBKeyRange")}}
- Récupérer et modifier vos données: {{domxref("IDBObjectStore")}}
- utiliser les curseurs: {{domxref("IDBCursor")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
