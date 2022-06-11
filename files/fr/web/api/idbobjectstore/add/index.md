---
title: IDBObjectStore.add()
slug: Web/API/IDBObjectStore/add
translation_of: Web/API/IDBObjectStore/add
---
{{APIRef("IndexedDB")}}

La méthode **`add()`**, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un _thread_ séparé, crée un [clone structurel](https://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone) de la valeur et stocke la valeur clonée dans le magasin d'objet. Cette méthode permet d'ajouter de nouveaux enregistrements dans un magasin d'objet.

Afin de déterminer si l'opération `add` s'est effectuée correctement, on pourra écouter l'évènement `complete` de la transaction et l'évènement `success` de la requête `IDBObjectStore.add` car la transaction peut échouer après le déclenchement de l'évènement `success`. Autremnt dit, l'évènement `success` est uniquement déclenché au moment où la transaction a été mise dans la file.

La méthode `add` ne permet que d'insérer des objets. Si un enregistrement existe déjà dans le magasin d'objet pour la clé fournie en argument, un évènement `ConstrainError` sera déclenché via l'objet {{domxref("IDBRequest")}}. Si on souhaite mettre à jour des enregistrements existants, on utilisera plutôt la méthode {{domxref("IDBObjectStore.put")}}.

{{AvailableInWorkers}}

## Syntaxe

```js
var request = objectStore.add(valeur, clé);
```

### Paramètres

- `valeur`
  - : La valeur à ajouter au magasin.
- `clé`
  - : La clé qu'on souhaite utiliser pour identifier l'enregistrement. Si elle n'est pas indiquée, la valeur par défaut sera `null`.

### Valeur de retour

Un objet {{domxref("IDBRequest")}} qui émettra les différents évènements relatifs à l'opération.

### Exceptions

Cette méthode peut lever une exception {{domxref("DOMException")}} ayant l'un des types suivants :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Exception</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ReadOnlyError</code></td>
      <td>La transaction associée à cette opération est en lecture seule.</td>
    </tr>
    <tr>
      <td><code>TransactionInactiveError</code></td>
      <td>
        La transaction pour cet objet  {{domxref("IDBObjectStore")}}
        est inactive.
      </td>
    </tr>
    <tr>
      <td><code>DataError</code></td>
      <td>
        <p>Un des conditions suivantes est vérifiée :</p>
        <ul>
          <li>
            Le magasin d'objet utilise des clés en ligne ou possède un
            générateur de clés et une clé a été fournie dans la fonction.
          </li>
          <li>
            Le magasin d'objet utilise des clés hors lignes et et n'a pas de
            générateur de clés et aucune clé n'a été fournie dans la fonction.
          </li>
          <li>
            Le magasin d'objet utilise des clés en ligne mais ne possède pas de
            générateur de clés et le chemin de clé utilisé par le magasin ne
            pointe pas vers une clé valide.
          </li>
          <li>
            La clé a été fournie à la fonction mais ce paramètre n'est pas une
            clé valide.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td><code>InvalidStateError</code></td>
      <td>
        L'objet {{domxref("IDBObjectStore")}} a été supprimé ou
        déplacé.
      </td>
    </tr>
    <tr>
      <td><code>DataCloneError</code></td>
      <td>
        La donnée qui devait être enregistrée n'a pas pu être clonée par
        l'algorithme de clonage interne.
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Dans le fragment de code suivant, on ouvre une transaction en lecture/écriture vers la base de données et on ajoute des données au magasin d'objet grâce à la méthode `add()`. On notera également les fonctions rattachées à la transaction qui sont utilisées comme gestionnaires d'évènement et qui permettent de savoir si la transaction a réussi ou échoué.

```js
// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Database initialisée.</li>';

  // On enregistre le résultat dans la variable db
  // afin de l'utiliser par la suite
  var db = DBOpenRequest.result;

  // On utilise la fonction addData() afin d'ajouter
  // des données dans la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet qu'on insèrera ensuite
  // dans la base de données
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // afin d'ajouter les données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On indique si la transaction s'est déroulées
  // sans problème
  transaction.oncomplete = function(event) {
    note.innerHTML += '<li>Transaction terminée : modification effectuée.</li>';
  };


  transaction.onerror = function(event) {
    note.innerHTML += '<li>Ouverture de la transaction impossible : les objets dupliqués ne sont pas autorisés.</li>';
  };

  // On crée un magasin d'objets pour la transaction
  var objectStore = transaction.objectStore("toDoList");

  // On ajoute l'objet newItem dans le magasin d'objets
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On indique la réussite de l'insertion
    note.innerHTML += '<li>Nouvel objet ajouté dans la base de données.</li>';
  };
};
```

> **Note :** pour un exemple fonctionnel complet, voir notre [application To-do](https://github.com/mdn/to-do-notifications/) ([exemple](https://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------ |
| {{SpecName('IndexedDB', '#widl-IDBObjectStore-add-IDBRequest-any-value-any-key', 'add()')}} | {{Spec2('IndexedDB')}} |              |

## Compatibilité des navigateurs

{{Compat("api.IDBObjectStore.add")}}

## Voir aussi

- [Utiliser IndexedDB](/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB)
- Initier une connexion : {{domxref("IDBDatabase")}}
- Utiliser les transactions : {{domxref("IDBTransaction")}}
- Définir un intervalle de clés : {{domxref("IDBKeyRange")}}
- Récupérer et modifier les données : {{domxref("IDBObjectStore")}}
- Utiliser les curseurs {{domxref("IDBCursor")}}
- Exemple de référence : [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([exemple _live_](https://mdn.github.io/to-do-notifications/)).
