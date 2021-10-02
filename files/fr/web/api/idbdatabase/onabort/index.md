---
title: IDBDatabase.onabort
slug: Web/API/IDBDatabase/onabort
tags:
  - API
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBDatabase/onabort
---
<div>{{APIRef("IndexedDB")}}</div>

<p>Le gestionnaire d'événement <strong><code>onabort</code></strong>, rattaché à l'interface {{domxref("IDBDatabase")}}, s'exécute au déclenchement de l'événement <code>abort</code>, lorsque la tentative d’accès à la base de données est interrompue.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">db.onabort = function() { ... }</pre>

<h2 id="Exemple">Exemple</h2>

<p>Cette exemple illustre un gestionnaire d'événement {{domxref("IDBOpenDBRequest.onupgradeneeded")}} dans lequel on ajoute un magasin d'objet et les deux gestionnaires d'événement <code>onerror</code> et <code>onabort</code> pour gérer les cas d'échec.</p>

<pre class="brush: js">DBOpenRequest.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function() {
    note.innerHTML += '&lt;li&gt;Erreur du chargement de la base de données.&lt;/li&gt;';
  };

  db.onabort = function() {
    note.innerHTML += '&lt;li&gt;L\'ouverture de la connexion à été annulée !&lt;/li&gt;';
  };

  // On ajoute un magasin d'objet à la base de données

  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // On définit les index du magasin

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });

  objectStore.createIndex("notified", "notified", { unique: false });

  note.innerHTML += '&lt;li&gt;Le magasin d\'objets à été ajouté.&lt;/li&gt;';
};</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBDatabase-onabort', 'onabort')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_avec_les_navigateurs">Compatibilité avec les navigateurs</h2>

<p>{{Compat("api.IDBDatabase.onabort")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB">Manipuler IndexedDB</a></li>
 <li>Démarrer des transactions : {{domxref("IDBDatabase")}}</li>
 <li>Manipuler des transactions : {{domxref("IDBTransaction")}}</li>
 <li>Définir un intervalle de clés : {{domxref("IDBKeyRange")}}</li>
 <li>Récupérer des données et les modifier : {{domxref("IDBObjectStore")}}</li>
 <li>Manipuler des curseurs : {{domxref("IDBCursor")}}</li>
 <li>Exemple de référence pour IndexedDB : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a></li>
</ul>
