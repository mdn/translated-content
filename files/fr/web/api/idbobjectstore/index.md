---
title: IDBObjectStore
slug: Web/API/IDBObjectStore
translation_of: Web/API/IDBObjectStore
---
{{APIRef("IndexedDB")}}

L'interface **`IDBObjectStore`** de l'{{domxref("IndexedDB_API","API IndexedDB")}} est un accès aux magasins d'objet de la base de données.

Le magasin d'objet emmagasine des enregistrements. Chaque enregistrement est constitué d'un couple clé/valeur. Chaque valeurs est indexée sur sa clé. Les clés sont triées pour former l'index primaire du magasin. Ce qui permet un accès rapide et ordonnée aux valeurs.

Le magasin d'objet peut en plus de l'index primaire avoir des index qui ordonnent les enregistrements sur d'autres clés. Ces index se mettent automatiquement à jour dans la plupart des cas et permettent de mettre des contraintes d’unicités pour d'autres clés que la clé primaire du magasin d'objet.

{{AvailableInWorkers}}

## Méthodes

- {{domxref("IDBObjectStore.add()")}}
  - : Une {{domxref("IDBRequest","requête")}} pour ajouter un enregistrement au magasin d'objet relié, un [clone structuré](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) de la valeur passé en paramètre et sa clé .
- {{domxref("IDBObjectStore.clear()")}}
  - : Une {{domxref("IDBRequest","requête")}} pour vider le magasin d'objet relié.
- {{domxref("IDBObjectStore.delete()")}}
  - : Une {{domxref("IDBRequest","requête")}} de suppression d'enregistrement(s) du magasin d'objet relié.
- {{domxref("IDBObjectStore.get()")}}
  - : Une {{domxref("IDBRequest","requête")}} pour renvoyer la valeur d'un enregistrement du magasin d'objet relié.
- {{domxref("IDBObjectStore.getAll()")}}
  - : Une {{domxref("IDBRequest","requête")}} qui renvoie un tableau ordonné suivant les clés, des valeurs de tous les enregistrements du magasin d'objet relié. On peut limité le nombre d'enregistrements en les filtrants suivant leurs clés ou en paramétrant le compteur.
- {{domxref("IDBObjectStore.getAllKeys()")}}
  - : Une {{domxref("IDBRequest","requête")}} qui renvoie la liste de toutes les clés des enregistrements du magasin d'objet. On peut limité le nombre d'enregistrements en les filtrants suivant leurs clés ou en paramétrant le compteur.
- {{domxref("IDBObjectStore.createIndex()")}}
  - : Met en place sur le magasin d'objet relié, un nouvel index et en renvoie l'{{domxref("IDBIndex","accès")}}.
- {{domxref("IDBObjectStore.deleteIndex()")}}
  - : Supprime l'index dont le nom est passé en paramètre, du magasin d'objet relié.
- {{domxref("IDBObjectStore.index()")}}
  - : L'{{domxref("IDBIndex","accès")}} à l'index dont le nom est passé en paramètre du magasin d'objet relié.
- {{domxref("IDBObjectStore.put()")}}
  - : Une {{domxref("IDBRequest","requête")}} pour ajouter ou mettre à jour un enregistrement du magasin d'objet relié, un [clone structuré](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) de la valeur passée en paramètre et sa clé.
- {{domxref("IDBObjectStore.openCursor()")}}
  - : Une {{domxref("IDBRequest","requête")}} récursive suivant un {{domxref("IDBCursorWithValue","curseur avec valeur")}} qui itère le magasin d'objet relié.
- {{domxref("IDBObjectStore.openKeyCursor()")}}
  - : Une {{domxref("IDBRequest","requête")}} récursive suivant un {{domxref("IDBCursor","curseur")}} qui itère le magasin d'objet relié.
- {{domxref("IDBObjectStore.count()")}}
  - : Une {{domxref("IDBRequest","requête")}} au magasin d'objet relié. La requête compte le nombre d'enregistrements dans ce magasin d'objet ou sur l'{{domxref("IDBKeyRange","intervalle de clé")}} passé en paramètre.

## Propriétés

- {{domxref("IDBObjectStore.indexNames")}} {{readonlyInline}}
  - : La liste des noms d'index du magasin d'objet relié.
- {{domxref("IDBObjectStore.keyPath")}} {{readonlyInline}}
  - : Le [nom de la clé](/fr/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keypath) du magasin d'objets relié.
- {{domxref("IDBObjectStore.name")}} {{readonlyInline}}
  - : Le nom du magasin d'objet relié.
- {{domxref("IDBObjectStore.transaction")}} {{readonlyInline}}
  - : La {{domxref("IDBTransaction","transaction")}} à laquelle l'accès du magasin d'objet appartient.
- {{domxref("IDBObjectStore.autoIncrement")}} {{readonlyInline}}
  - : La position du drapeau d’incrémentation automatique du magasin d'objet relié.

<!---->

## Exemple

Cet exemple montre différents usages de l'accès au magasin d'objet. On met à jour la structure de donnée avec {{domxref("IDBObjectStore.createIndex")}} dans un gestionnaire d'événement `onupgradeneeded`. On ajoute un nouvel enregistrement avec {{domxref("IDBObjectStore.add")}}.

```js
// connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// gère le succès de la connexion
DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Connexion ouverte.</li>';

  //affect la connexion à la variable db.
  db = DBOpenRequest.result;
};

// Ce gestionnaire d'événement s'active quand on à besoin d'une nouvelle version de la base de donnée.
// Si la base n'existais pas avant ou
// si on ouvre une nouvelle version avec window.indexedDB.open.
DBOpenRequest.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function(event) {
    note.innerHTML += '<li>Erreur de chargement de la base.</li>';
  };

  // Ajoute un magasin d'objets à la base de données
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // défini des index sur ce magasin

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += '<li>Le magasin d\'objet est ajouté.</li>';
};

// Un nouvel enregistrement à ajouter
var newItem = [
 { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: 'December', year: 2013, notified: "no" }
];

// ouvre une transaction en lecture/écriture sur la connexion, prête à ajouter l'enregistrement.
var transaction = db.transaction(["toDoList"], "readwrite");

// affiche le succès de la transaction
transaction.oncomplete = function(event) {
  note.innerHTML += '<li>La transaction à été effectuée.</li>';
};

transaction.onerror = function(event) {
  note.innerHTML += '<li>La transaction n\'as pue aboutir.</li>';
};

// Un accès à toDoList pour la transaction
var objectStore = transaction.objectStore("toDoList");
// Ajoute l'enregistrement au magasin d'objet
var objectStoreRequest = objectStore.add(newItem[0]);

//l'enregistrement s'est bien passé.
objectStoreRequest.onsuccess = function(event) {
  note.innerHTML += '<li>L\'enregistrement à été ajouté au magasin d\'objet.</li>';
}
```

> **Note :** Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](http://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                | Statut                       | Commentaire |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| {{SpecName('IndexedDB', '#idl-def-IDBObjectStore', 'IDBObjectStore')}} | {{Spec2('IndexedDB')}} |             |

## Compatibilité des navigateurs

{{Compat("api.IDBObjectStore")}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
