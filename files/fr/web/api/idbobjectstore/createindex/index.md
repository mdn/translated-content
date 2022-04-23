---
title: IDBObjectStore.createIndex()
slug: Web/API/IDBObjectStore/createIndex
translation_of: Web/API/IDBObjectStore/createIndex
---
{{ APIRef("IndexedDB") }}

La méthode **`createIndex()`** de l'interface {{domxref("IDBObjectStore")}} met en place sur le magasin d'objet {{domxref("IDBObjectStore","relié")}} un nouvel index et en renvoie l'{{domxref("IDBIndex","accès")}}.

> **Note :** Cette méthode ne peut être appelé que si la transaction de l'accès au magasin d'objet est en mode VersionChange.

{{AvailableInWorkers}}

## Syntaxe

```js
objectStore.createIndex(nomIndex, nomCle, parametresIndexOptionnel);
```

## Paramètres

- nomIndex
  - : Le nom de l'index que l'on veut ajouter. Il est possible d'ajouter un index avec un nom vide.
- nomCle
  - : Le nom de clé qu'utilise l'index. Il est possible d'ajouter un index sans nom de clé.
- parametresIndexOptionnel {{optional_inline}}

  - : Un objet optionnel pouvant inclure une ou plusieurs des propriétés suivantes:

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">Propriété</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>unique</code></td>
          <td>Si true, l'index empêcheras la duplication d'une clé.</td>
        </tr>
        <tr>
          <td><code>multiEntry</code></td>
          <td>
            Si true, l'index ajoutera une entrée pour chaque élément de tableau
            quand le nom de clé de clé est résolue. Si false, il ajoutera un seule
            entrée contenant le tableau.
          </td>
        </tr>
        <tr>
          <td><code>locale</code></td>
          <td>
            <p>
              Actuellement uniquement dans Firefox 43+ , cela vous permet de
              spécifier des paramètres de localisation pour l'index. Toutes les
              opérations de tri effectuées sur les données via des intervalle de clé
              obéirons aux règles locales de tri (voir
              <a
                href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#Locale-aware_sorting"
                >trie dans localisation courante</a
              >, en). Vous pouvez spécifier sa valeur de trois façons différentes:
            </p>
            <ul>
              <li>
                <code>string</code>: une chaîne de caractère contenant le code de la
                localisation , par exemple 'fr' ou <code>'en-US'</code>.
              </li>
              <li>
                <code>auto</code>: La localisation par défaut est utilisé (peut être
                régler par l'utilisateur).
              </li>
              <li>
                <code>null or undefined</code>: Les règles de tri par défaut de
                javaScript seront utilisées.
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>

## Renvoie

L'{{domxref("IDBIndex","accès")}} au nouvel index.

## Exceptions

- `InvalidStateError`
  - : Cette {{domxref("DOMException","exeption")}} si la {{domxref("IDBTransaction","transaction")}} dont dépend cet {{domxref("IDBObjectStore","accès")}} au magasin d'objet n'est pas en {{domxref("IDBTransaction.mode","mode")}} `versionchange`.
- `TransactionInactiveError`
  - : Cette {{domxref("DOMException","exeption")}} si la {{domxref("IDBTransaction","transaction")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d’objet est inactive.
    [bug 1176165](https://bugzilla.mozilla.org/show_bug.cgi?id=1176165) ).
- `ConstraintError`
  - : Cette {{domxref("DOMException","exeption")}} si un index avec le même nom (case sensible) existe déjà sur le magasin d'objet.

## Exemple

Dans l'exemple suivant on peut voir le gestionnaire d'événement {{domxref("IDBOpenDBRequest.onupgradeneeded","<code>onupgradeneeded</code>")}} être utilisé pour mètre à jour la structure de la base de donnée quand un numéro de version supérieur est chargé.

Des méthode **`createIndex()`** sont utilisées pour mètre en place différents index sur le magasin d'objet `toDoList`.

```js
var db;

// Requête d'ouverture de la base de données "toDoList"
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Gère l'échec de l'ouverture de la base
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '<li>La base de donnée n\'as pas peut être ouverte.</li>';
};

// Gère le succès de l'ouverture de la base
DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '<li>La base de données est ouverte.</li>';

  //La connexion est affcté à la variable db.
  db = request.result;

  // Exécute une fonction d'affichage displayData()
  displayData();
};

// Ce gestionnaire d'événement nécessite un nouveau numéro de version de la basse de données.
// Si la base n'existe pas un nouveau numéro de version est généré par la méthode d'ouverture de connexion window.indexDB.open .

DBOpenRequest.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function(event) {
    note.innerHTML += '<li>Erreur de chargement de la base de données.</li>';
  };

  // L'Accès au magasin d'objet "toDoList" de la base de donnée
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // Met en place les index du magasin d'objet
  objectStore.createIndex("heures", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("jour", "day", { unique: false });
  objectStore.createIndex("mois", "month", { unique: false });
  objectStore.createIndex("annee", "year", { unique: false });
  objectStore.createIndex("notifiee", "notified", { unique: false });
};
```

> **Note :** Pour un exemple de travail complet, voir notre [To-do Notifications](https://github.com/mdn/to-do-notifications/) app ([view example live](http://mdn.github.io/to-do-notifications/)).

## Spécifications

| Spécification                                                                                                                                                                                                                                | Statut                       | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------- |
| {{SpecName('IndexedDB', '#widl-IDBObjectStore-createIndex-IDBIndex-DOMString-name-DOMString-sequence-DOMString--keyPath-IDBIndexParameters-optionalParameters', 'createIndex()')}} | {{Spec2('IndexedDB')}} |             |

## Compatibilité avec les navigateurs

{{Compat("api.IDBObjectStore.createIndex")}}

## Voir aussi

- {{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}
- {{domxref("IDBDatabase","Débuter une connexion")}}
- {{domxref("IDBTransaction","Utilisé les transactions")}}
- {{domxref("IDBKeyRange","Définir l'intervalle des clés")}}
- {{domxref("IDBObjectStore","Accès aux magasins d'objets")}}
- {{domxref("IDBCursor","Utiliser les curseur")}}
- Exemple de référence: [To-do Notifications](https://github.com/mdn/to-do-notifications/tree/gh-pages) ([view example live](http://mdn.github.io/to-do-notifications/).)
