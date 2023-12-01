---
title: IDBDatabase.transaction()
slug: Web/API/IDBDatabase/transaction
---

{{ APIRef("IndexedDB") }}

La méthode **`transaction`** de l'interface {{domxref("IDBDatabase")}} renvoie une {{domxref("IDBTransaction","transaction")}} sur laquelle on peut appeler la méthode {{domxref("IDBTransaction.objectStore")}} pour accéder aux magasins d'objets de la base de donnée.

{{AvailableInWorkers}}

## Syntaxe

```js
var transaction = db.transaction(storeNames, mode);
```

## Paramètres

- storeNames

  - : un tableau de noms de magasins d'objets entrant dans le cadre de cette transaction. Indique seulement les magasins d'objets dont on a besoin. Si l'on n'a besoin que d'un seul magasin d'objet, on peut simplement passer son nom. Les lignes suivantes sont équivalentes :

    ```js
    var transaction = db.transaction(["my-store-name"]);
    var transaction = db.transaction("my-store-name");
    ```

    Pour utiliser tous les magasins d'objets de la base de donnée, on peut appeler la methode {{domxref("IDBDatabase.objectStoreNames")}}:

    ```js
    var transaction = db.transaction(db.objectStoreNames);
    ```

    Passer un tableau vide lèvera une exception.

- mode {{optional_inline}}

  - : Le {{domxref("IDBTransactionMode","mode")}} d'{{domxref("IDBObjectStore","accès aux magasins d'objets")}} à la base de données (par default `readonly`):

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Valeur</th>
          <th scope="col">Explication</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>readonly</code></td>
          <td>
            permet de prendre des objets dans les magasins d'objets, de lire les
            index et de faire des curseurs.
          </td>
        </tr>
        <tr>
          <td><code>readwrite</code></td>
          <td>
            Permet en plus de que l'on peut faire en readonly, d'ajouter et mettre à
            jour des objets dans les magasins d'objets.
          </td>
        </tr>
        <tr>
          <td><code>versionchange</code></td>
          <td>
            Permet toute les opérations, y compris celles qui suppriment ou ajoutent
            des {{domxref("IDBOjectStore","magasins d'objets")}} ou
            des {{domxref("IDBIndex","index")}}. Ce mode met à jour le
            numéro de version de la base de données, il se sert au début de
            {{domxref ("IDBDatabase.setVersion")}}. Les
            {{domxref("IDBTransaction","transactions")}} dans ce
            mode ne peuvent pas fonctionner en même temps que d'autres.
          </td>
        </tr>
        <tr>
          <td><code>readwriteflush</code></td>
          <td>
            <p>
              Si vous devez vous assurer de l'efficacité d'une transaction pour une
              raison quelconque (par exemple, vous stockez des données critiques qui
              ne peuvent être recalculées plus tard), vous pouvez forcer
              l'enregistrement complet sur disque avant de déclencher l'événement
              <code>complete</code> en utilisant le mode
              <code>readwriteflush</code> (non standard) expérimental ( voir
              {{domxref("IDBDatabase.transaction")}} ). C'est
              expérimental, et ne peut être utilisé que si le
              <code>dom.indexedDB.experimental </code>pref est réglé sur
              <code>true </code>dans <code>about:config.</code>
            </p>
            <div class="note">
              <p>
                <strong>Note :</strong> Depuis Firefox 40, les transactions
                IndexedDB diminuent en efficacité pour gagner en efficience (voir
                le [bug Firefox 1112702](https://bugzil.la/1112702).) Auparavant, dans une transaction en
                <code><a href="#const_read_write">readwrite</a></code> l'événement
                complete était déclanché seulement lorsque toutes les données
                étaient écrites sur le disque. Maintenant l'événement
                <code>complete</code> est déclenché après que l'OS ai envoyé l'ordre
                d'écrire les données, mais potentiellement avant qu'elles aient été
                écrites sur le disque. L'événement <code>complete</code> peut ainsi
                se déclancher plus rapidement qu'auparavant, cependant, il existe
                une chance infime pour que l'ensemble de la transaction soit perdue
                si le système d'exploitation plante ou s'il y a une perte de courant
                avant que les données aient été écites sur le disque. Étant donné
                que ces événements catastrophiques sont rares la plupart des
                utilisateurs ne devraient pas avoir à s'en préoccuper davantage.
              </p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    Pour éviter des pertes de performance, n'utilisez le mode `readwrite` que si vous avez effectivement besoin d'écrire ou de mettre à jour des données sur la base.")}} Si on a besoin d'accéder à un magasin d'objets pour écrire ou mettre à jour des enregistrement, on utilise la sytaxe:

    ```js
    var transaction = db.transaction("monMagasin", "readwrite");
    ```

## Renvoie

Une {{domxref("IDBTransaction","transaction")}}.

## Exceptions

- `InvalidStateError`
  - : Cette {{domxref("DOMException","exception")}} est levée si la méthode `close()` a été appelée sur cette connexion à la base de donnée.
- `NotFoundError`
  - : Cette {{domxref("DOMException","exception")}} est levée si un magasin d'objets indiqué dans le paramètre `storeNames` n'existe pas ou plus.
- `TypeError`
  - : Cette {{domxref("DOMException","exception")}} est levée si la valeur du paramètre `mode` n'est pas valide.
- `InvalidAccessError`
  - : Cette {{domxref("DOMException","exception")}} est levée si la liste passée à `storeNames` est vide

## Exemple

Dans cet exemple, on ouvre simplement une connexion à la base de donnée puis une transaction sur cette connexion.

```js
var db;

// Connexion à la base de donnée
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>Base de donnée initialisée.</li>';

  // affecte la connexion à la variable db
  db = DBOpenRequest.result;

  // exécute la fonction displayData() qui affiche la liste des taches présentes dans la base de donnée
  displayData();

};

// ouvre une transaction en lecture/écriture prête pour l'ajout d'enregistrement.
var transaction = db.transaction(["toDoList"], "readwrite");

// affiche le succès de l'ouverture de la transaction
transaction.oncomplete = function(event) {
  note.innerHTML += '<li>Fin de transaction: les modifications sur la base de donnée sont terminées.</li>';
};

transaction.onerror = function(event) {
  note.innerHTML += '<li>La transaction n'a pas pu être initiée.</li>';
};

// On peut maintenant accéder au magasin d'objet
var objectStore = transaction.objectStore("toDoList");
// etc.
```

> **Note :** Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) app ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/dom-examples/tree/main/to-do-notifications) ([view example live](https://mdn.github.io/dom-examples/to-do-notifications/).)
