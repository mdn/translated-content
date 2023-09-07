---
title: IDBTransaction
slug: Web/API/IDBTransaction
---

{{APIRef("IndexedDB")}}

L'interface **`IDBTransaction`** de l'[API IndexedDB](/fr/docs/Web/API/API_IndexedDB) fournit une transaction statique asynchrone vers une base de données grâce à des attributs de gestion d'évènementns. Toutes les opérations de lecture et d'écriture de données sont effectuées au sein de transaction. Il est possible d'utiliser {{domxref("IDBDatabase")}} afin d'initier des transactions puis {{domxref("IDBTransaction")}} afin de paramétrer le mode de la transaction (c'est-à-dire s'il est en lecture seule ou en lecture/écriture) et d'accéder à un objet {{domxref("IDBObjectStore")}} pour réaliser une requête. On peut également utiliser `IDBTransaction` pour interrompre une requête.

S'il vous garantir une certaine longévité (par exemple si on utilise des données critiques qui ne peuvent pas être recalculées par la suite), il est possible d'écrire le contenu de la transaction sur le disque avant la diffusion de l'évènement `complete` grâce au mode expérimental non-standard `readwriteflush` (cf. {{domxref("IDBDatabase.transaction")}}).

On notera qu'une transaction commence dès sa création et pas lorsque la première requête est lancée. Par exemple :

```js
var trans1 = db.transaction("toto", "readwrite");
var trans2 = db.transaction("toto", "readwrite");
trans2.put("2", "clé");
trans1.put("1", "clé");
```

Une fois que le code est exécuté, le magasin d'objet contiendra la valeur "2" car la transaction est lancée après la transaction `trans1`.

{{AvailableInWorkers}}

## Méthodes

Cette interface hérite de {{domxref("EventTarget")}}.

- {{domxref("IDBTransaction.abort")}}
  - : Cette méthode annule les modifications apportées aux objets associés à cette transaction. Si la transaction a déjà été interrompue ou est terminée, cette méthode déclenchera un évènement d'erreur.
- {{domxref("IDBTransaction.objectStore")}}
  - : Cette méthode renvoie un objet {{domxref("IDBObjectStore")}} qui représente le magasin d'objet associé à cette transaction.

## Propriétés

- {{domxref("IDBTransaction.db")}} {{readonlyInline}}
  - : La connexion à la base de données associée à cette transaction.
- {{domxref("IDBTransaction.mode")}} {{readonlyInline}}
  - : Le mode de la transaction qui définit la façon dont on accède/modifie les données. Les différentes valeurs sont définies ci-après dans la section Constante. Par défaut, la valeur est `readonly`.
- {{domxref("IDBTransaction.objectStoreNames")}} {{readonlyinline}}
  - : Cette propriété est une liste ({{domxref("DOMStringList")}}) des noms des objets {{domxref("IDBObjectStore")}}.
- {{domxref("IDBTransaction.error")}} {{readonlyInline}}
  - : Cette propriété renvoie le type de l'erreur qui se produit lorsque la transaction infructueuse. Cette propriété vaut `null` si la transaction n'est pas finie, est finie et validée correctement ou a été cloturée avec la fonction{{domxref("IDBTransaction.abort")}}.

### Gestionnaires d'évènements

- {{domxref("IDBTransaction.onabort")}} {{readonlyInline}}
  - : Ce gestionnaire permet de gérer l'évènement `abort` qui est déclenché lorsque la transaction a été interrompue.
- {{domxref("IDBTransaction.oncomplete")}} {{readonlyInline}}
  - : Ce gestionnaire permet de gérer l'évènement `complete` qui est déclenché lorsque la transaction se finit correctement.
- {{domxref("IDBTransaction.onerror")}} {{readonlyInline}}
  - : Ce gestionnaire permet de gérer l'évènement `error` qui est déclenché lorsqu'une erreur empêche la transaction de se finir correctement.

## Les différents modes

Une transaction peut s'effectuer dans l'un de ces modes :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Valeur</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <p>"readonly"</p>
        <p>(0 dans Chrome)</p>
      </td>
      <td>Ce mode permet de lire les données mais pas de les modifier.</td>
    </tr>
    <tr>
      <td>
        <p>"readwrite"</p>
        <p>(1 dans Chrome)</p>
      </td>
      <td>
        Ce mode permet de lire, d'écrire et de modifier les données du magasin
        d'objets.
      </td>
    </tr>
    <tr>
      <td>
        <p>"versionchange"</p>
        <p>(2 dans Chrome)</p>
      </td>
      <td>
        Ce mode permet d'effectuer toutes les opérations, y compris l'ajout ou
        la suppression de magasins d'objets et d'index. Ce mode doit être
        utilisé pour mettre à jour le numéro de version utilisé par les
        transactions démarées avec la méthode
        <a href="/fr/docs/Web/API/IDBDatabase"><code>setVersion()</code></a> de
        <code><a href="/fr/docs/Web/API/IDBDatabase">IDBDatabase</a></code
        >. Les transactions lancées dans ce mode ne peuvent pas être lancées en
        même temps que d'autres transactions. Ces transactions sont parfois
        qualifiées comme « transactions de mise à jour ».
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Dans l'exemple qui suit, on ouvre une transaction en lecture/écriture sur la base de données et on ajoute des données dans le magasin d'objet. On notera également l'utilisation des gestionnaires d'évènements attachés à la transaction qui permettent d'indiquer la réussite ou l'échec de l'ouverture de la transaction. Pour un exemple complet, voir [l'application de notifications To-do](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([voir également la démonstration _live_](https://mdn.github.io/dom-examples/to-do-notifications/))

```js
// On commence par ouvrir la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Initialisation de la base.</li>';

  // On enregistre le résultat de l'ouverture
  // dans la variable db afin de l'utiliser
  // ensuite
  var db = DBOpenRequest.result;

  // On utilise la fonction addData() afin d'ajouter
  // des données à la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet prêt à être inséré
  // dans la base de données
  var newItem = [ { taskTitle: "Promener le chien", hours: 19, minutes: 30, day: 24, month: "Décembre", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // vers la base de données afin d'ajouter des
  // données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On indique le succès de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction terminée : modification finie.</li>';
  };


  transaction.onerror = function(event) {
    note.innerHTML += '<li>Transaction non-ouverte à cause d'une erreur. Les doublons ne sont pas autorisés.</li>';
  };

  // On crée un magasin d'objet pour la transaction
  var objectStore = transaction.objectStore("toDoList");

  // On ajoute l'objet newItem au magasin d'objets
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On indique le succès de l'ajout de l'objet
    // dans la base de données
    note.innerHTML += '<li>Un nouvel élément a été ajouté dans la base de données.</li>';
  };
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([exemple _live_](https://mdn.github.io/dom-examples/to-do-notifications/)).
