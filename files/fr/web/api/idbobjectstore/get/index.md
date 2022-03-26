---
title: IDBObjectStore.get()
slug: Web/API/IDBObjectStore/get
translation_of: Web/API/IDBObjectStore/get
---
{{ APIRef("IndexedDB") }}

La méthode **`get()`** de l'interface {{domxref("IDBObjectStore")}} fait une {{domxref("IDBRequest","requête")}} pour renvoyer la valeur d'un enregistrement du magasin d'objet {{domxref("IDBObjectStore","relié")}}.

{{Note("Si plusieurs enregistrements peuvent être sélectionnés la valeur du premier enregistrement rencontré (dont la valeur n'est pas <code>undefined</code>) sera renvoyée.")}} {{Note("On ne peut pas savoir s'il y a correspondance mais que l(es) enregistrement(s) a/ont des valeurs non définie (<code>undefined</code>) ou s'ils n'y as pas de correspondance par cette méthode. On peut utulisé la methode getAllKeys pour retrouvé la ou les clés du ou des enregistrements qui n'ont pas de valeur défini (valeur = <code>undefined</code>).")}}

{{AvailableInWorkers}}

## Syntaxe

```js
var request = objectStore.get(cle);
```

## Paramètre

- `cle`
  - : la clé ou l'{{domxref("IDBKeyRange","intervalle de clé")}} de l'enregistrement dont on cherche la valeur.

## Renvoie

- Une {{domxref("IDBRequest","requête")}}
  - : La propriété {{domxref("IDBRequest.result","result")}} de cette requête renvoie en cas de succès,  un clone structuré de la valeur de l'enregistrement correspondant à la clé ou du premier correspondant à l'intervalle de clé.

## Exceptions

- `TransactionInactiveError`
  - : Cette {{domxref("DOMException","exception")}} est levé si la {{domxref("IDBTransaction","transaction")}} dont dépend cet {{domxref("IDBObjectStore","accès")}} au magasin d'objet est inactive.
- `DataError`
  - : Cette {{domxref("DOMException","exception")}} est levé si la clé ou l'{{domxref("IDBKeyRange","intervalle de clé")}} est invalide.
- `InvalidStateError`
  - : Cette {{domxref("DOMException","exception")}} est levé si le magasin d'objet à été supprimé.

## Exemple

Dans le code suivant , on ouvre une {{domxref("IDBTransaction","transaction")}} sur la {{domxref("IDBDatabase","connexion")}} à la base de données, pour avoir l'{{domxref("IDBObjectStore","accès")}} au magasin d'objet dans lequel on veut retrouver la valeur d'un enregistrement.

La méthode **`get()`** sert à retrouver la valeur de l'enregistrement dont la clé est `Walk dog` dans le magasin d'objets _`toDoList`_.

```js
// ouvre la connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Gère l'ouverture de la connexion
DBOpenRequest.onsuccess = function() {
  note.innerHTML += '<li>Database initialised.</li>';

  // enregistre la connexion dans la variable db
  db = DBOpenRequest.result;

  // exécute la fonction deleteData()
  deleteData();
};

function deleteData() {
  // ouvre un transaction en mode lecture/écriture pour effectuer la suppression
  var transaction = db.transaction(["toDoList"], "readwrite");

  // affiche le succès de la transaction.
  transaction.oncomplete = function() {
    note.innerHTML += '<li>Transaction effectuée: fin de la modification de la base de données.</li>';
  };

  // affiche la cause de l’échec de la transaction.
  transaction.onerror = function() {
    note.innerHTML += '<li>Échec de la transaction: ' + transaction.error + ' la base de données n\'a pas été modifié</li>';
  };

  // ouvre un accès au magasin d'objet toDoList
  var objectStore = transaction.objectStore("toDoList");

  // Retrouve l'enregistrement dont la clé est Walk dog
   var objectStoreRequest = objectStore.get("Walk dog");

  objectStoreRequest.onsuccess = function() {
    //Affiche le succès de la requête
    note.innerHTML += '<li>Enregistrement retrouvé.</li>';

    //affecte la valeur de l'enregistrement à la variable
    var myRecord = objectStoreRequest.result;
  };
};
```

> **Note :** Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](http://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                                | Statut                       | Commentaire |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------- |
| {{SpecName('IndexedDB', '#widl-IDBObjectStore-get-IDBRequest-any-key', 'get()')}} | {{Spec2('IndexedDB')}} |             |

## Compatibilité des navigateurs

{{Compat("api.IDBObjectStore.get")}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
