---
title: IDBDatabase
slug: Web/API/IDBDatabase
---

{{APIRef("IndexedDB")}}

L'interface **`IDBDatabase`** de l'API IndexedDB fournit [une connexion à la base de données](/fr/docs/Web/API/API_IndexedDB#Se_connecter_à_la_base_de_données). On peut utiliser un objet `IDBDatabase` pour ouvrir une {{domxref("IDBTransaction","transaction")}} sur la base de données puis ajouter, éditer ou supprimer des enregistrements de cette base de données. Cette interface constitue le seul moyen d'accéder et de gérer les versions de la base de données.

{{AvailableInWorkers}}

> **Note :** Tout ce qui est fait dans une base de données indexée s'inscrit dans le contexte d'une transaction qui représente un interaction avec les données dans la base. Tout les objets de l'interface IndexedDB (incluant les accès aux magasins d'objets, indexes et curseurs) sont liés à une transaction en particulier. Aussi, on ne peut pas exécuter une commande, accéder aux données ou ouvrir quoi que ce soit, en dehors d'une transaction.

## Méthodes

Cet objet hérite de [EventTarget](/fr/docs/Web/API/EventTarget).

- {{domxref("IDBDatabase.close()")}}
  - : Ferme de façon asynchrone la connexion à la base de données.
- {{domxref("IDBDatabase.createObjectStore()")}}
  - : Ajoute un magasin d'objet ou un index à la base de donnéeset le renvoie.
- {{domxref("IDBDatabase.deleteObjectStore()")}}
  - : À partir d'un nom donné, supprime un magasin d'objet et les index associés.
- {{domxref("IDBDatabase.transaction()")}}
  - : Renvoie une transaction sous la forme d'un objet {{domxref("IDBTransaction")}} sur lequel on peut appeler la méthode {{domxref("IDBTransaction.objectStore")}} afin d'accéder aux magasins d'objet de la base de données.

## Propriétés

- {{domxref("IDBDatabase.name")}} {{readonlyInline}}
  - : Une chaîne de caractères ({{domxref("DOMString")}}) qui contient le nom de la base de données connectée.
- {{domxref("IDBDatabase.version")}} {{readonlyInline}}
  - : Un [entier de 64 bits](</fr/docs/Mozilla/Projects/NSPR/Reference/Long_Long_(64-bit)_Integers>) qui indique la version de la base de données connectée. Quand une base de données est créée, cette propriété est une chaîne de caractère vide.
- {{domxref("IDBDatabase.objectStoreNames")}} {{readonlyInline}}
  - : Une liste de noms (sous la forme d'un objet {{domxref("DOMStringList")}} des magasins d'objets correspondants à la base de données connectée.

### Gestionnaires d'événements

- {{domxref("IDBDatabase.onabort")}}
  - : S'exécute au déclenchement de l'événement `abort` quand la tentative d'accès à la base de donnée est interrompue.
- {{domxref("IDBDatabase.onerror")}}
  - : S'exécute au déclenchement de l'événement `error` quand la connexion à la base de donnée échoue.
- {{domxref("IDBDatabase.onversionchange")}}
  - : S'exécute au déclenchement de l'événement `versionchange` quand la structure de la base de donnée change (l'événement {{domxref("IDBOpenDBRequest.onupgradeneeded")}} ou {{domxref("IDBFactory.deleteDatabase")}} à été demandé ailleurs (probablement dans une autre fenêtre ou onglet sur le même ordinateur). Cela est différent de la transaction correspondant à un changement de version (cf. {{domxref("IDBVersionChangeEvent")}}) mais les concepts sont liés.

## Exemples

Dans le fragment de code suivant, on ouvre une base de données de façon asynchrone avec {{domxref("IDBFactory")}} puis on gère les cas de succès et d'erreur avant de créer un nouveau magasin d'objet au cas où une mise à jour est nécessaire ({{domxref("IDBdatabase")}}). Pour étudier un exemple complet et fonctionnel, voir notre application [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir l'exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).

```js
// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// On ajoute les deux gestionnaires d'événements
// qui agissent sur l'objet IDBDatabase object,
// dans le cas où tout se passe bien ou non
DBOpenRequest.onerror = function (event) {
  note.innerHTML += "<li>Erreur lors du chargement de la base de données.</li>";
};

DBOpenRequest.onsuccess = function (event) {
  note.innerHTML += "<li>Base de données initialisée.</li>";

  // On enregistre le résultat de l'ouverture
  // dans la variable db (on l'utilisera plusieurs
  // fois par la suite).
  db = DBOpenRequest.result;

  // On lance la fonction displayData()
  // afin de remplir la liste de tâches
  // avec les données contenues dans la base
  displayData();
};

// Ce gestionnaire permet de parer au cas où une
// nouvelle version de la base de données doit
// être créée.
// Soit la base de données n'existait pas, soit
// il faut utiliser une nouvelle version

DBOpenRequest.onupgradeneeded = function (event) {
  var db = event.target.result;

  db.onerror = function (event) {
    note.innerHTML +=
      "<li>Erreur lors du chargement de la base de données.</li>";
  };

  // On crée un magasin d'objet objectStore pour
  // cette base de données via IDBDatabase.createObjectStore

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // Enfin, on définit les données qui seront contenues
  // dans ce modèle de données

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += "<li>Magasin d'objets créé.</li>";
};
```

La ligne qui suit permet d'ouvrir une transaction avec cette base de données afin de consulter le magasin d'objets et de manipuler les données qu'il contient..

```js
var objectStore = db.transaction("toDoList").objectStore("toDoList");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Démarrer des transactions : {{domxref("IDBDatabase")}}
- Manipuler des transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}
- Manipuler des curseurs : {{domxref("IDBCursor")}}
- Exemple de référence pour IndexedDB : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications)
