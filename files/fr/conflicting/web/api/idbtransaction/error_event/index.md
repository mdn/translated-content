---
title: IDBTransaction.onerror
slug: conflicting/Web/API/IDBTransaction/error_event
tags:
  - API
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/onerror
original_slug: Web/API/IDBTransaction/onerror
---
{{APIRef("IndexedDB")}}

Le gestionnaire d'événement **`onerror`**, rattaché à l'interface {{domxref("IDBTransaction")}}, s'exécute au déclenchement d'un événement [`error`](/fr/docs/Web/Events/error) lorsque la transaction échoue.

{{AvailableInWorkers}}

## Syntaxe

```js
transaction.onerror = function() { ... };
```

## Exemple

Dans le code suivant, on commence par ouvrir une connexion à la base de donnée. Grâce à cette connexion, on initialise une transaction en lecture/écriture grâce à `IDBTransaction` pour accéder au magasin d'objets intitulé `toDoList` et y ajouter un enregistrement via la méthode  {{domxref("IDBObjectStore.add")}}. On notera également l'utilisation du gestionnaire d'événements {{domxref("IDBTransaction.oncomplete")}}.

Le gestionnaire d'événement **`onerror`** de la transaction affiche le code d'erreur de la propriété propriété {{domxref("IDBTransaction.error","error")}} sur la page.

```js
// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
	note.innerHTML += '<li>Connexion établie.</li>';

	// On affecte la connexion à la variable db.
	db = DBOpenRequest.result;

	// On exécute la fonction addData () pour ajouter
    // des données dans la base
	addData();
};
function addData() {
	// On crée un nouvel objet prêt à être emmagasiné
	newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

	// On ouvre une transaction de lecture / écriture
    // pour traiter les données via la connexion
	var transaction = db.transaction(["toDoList"], "readwrite");

	// En cas de succès de l'ouverture de la transaction
    // on utilise ce gestionnaire
	transaction.oncomplete = function(event) {
		note.innerHTML += '<li>Transaction terminée : modification de la base de données OK.</li>';
	};
	// En  cas d'échec de l'ouverture de la transaction
    // on utilisera ce gestionnaire
	transaction.onerror = function(event) {
		note.innerHTML += '<li>L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.</li>';
	};

	// On ouvre l'accès au magasin "toDoList" de la transaction
	var objectStore = transaction.objectStore("toDoList");

	// Enfin on ajoute un enregistrement
	var objectStoreRequest = objectStore.add(newItem[0]);
	objectStoreRequest.onsuccess = function(event) {
		// On signale l'ajout de l'enregistrement
		note.innerHTML += '<li>Enregistrement ajouté.</li>';
	};
 };

```

> **Note :** Pour un exemple de travail complet, voir l'application [To-do Notifications](https://github.com/mdn/to-do-notifications/) ([exemple _live_ disponible ici](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                | État                         | Commentaires |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBTransaction-ononerror', 'onerror')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBTransaction.onerror")}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages)
