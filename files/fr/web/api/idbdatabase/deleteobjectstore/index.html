---
title: IDBDatabase.deleteObjectStore()
slug: Web/API/IDBDatabase/deleteObjectStore
tags:
  - API
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBDatabase/deleteObjectStore
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>deleteObjectStore()</code></strong> de l'interface {{domxref("IDBDatabase")}} supprime un magasin d'objet et ses index de la base de données.</p>

<p>Comme la méthode {{domxref("IDBDatabase.createObjectStore")}}, cette méthode doit être appelée <em>uniquement</em> lors d'une transaction en mode <a href="/fr/docs/Web/API/IDBTransaction"><code>versionchange</code></a>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">dbInstance.deleteObjectStore(name);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Le nom du magasin d'objet à supprimer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Aucune.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut lever une {{domxref("DOMException")}} d'un de ces types suivants:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Exception</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>Levée si la méthode n'est pas appelée lors d'une transaction en mode <code>versionchange</code>. Pour les anciens navigateurs basés sur WebKit, il faut d'abord appeler la méthode  {{domxref("IDBVersionChangeRequest.setVersion")}}.</td>
  </tr>
  <tr>
   <td><code>TransactionInactiveError</code></td>
   <td>Levée si la méthode est appelée sur une base de données qui n'existe pas (ex. elle a été effacée). Pour les versions antérieures à Firefox 41, ce dernier déclenchait une erreur <code>InvalidStateError</code>, cela est désormais corrigé (cf. {{bug("1176165")}}).</td>
  </tr>
  <tr>
   <td><code>NotFoundError</code></td>
   <td>Levée lors de la suppression d'un magasin d'objets qui n'existe pas. Les noms sont sensibles à la casse.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on ouvre une connexion à la base de données et dans le gestionnaire d'événements <code>onupdateneeded</code>, on ajoute un magasin d'objets en utilisant la méthode {{domxref("IDBDatabase.createObjectStore")}}. Enfin, on supprime ce magasin d'objets grâce à <code>deleteObjectStore()</code>.</p>

<pre class="brush: js;">  // Connexion à la base de données
  var DBOpenRequest = window.indexedDB.open("toDoList", 4);

  /* Gestionnaire d'événements qui intervient lors de
     la mise en place d'une nouvelle version de la
     base de données, que la base n'existe pas, qu'elle
     soit ajoutée ou qu'un nouveau numéro de version
     soit utilisé avec à window.indexedDB.open
     Seulement utilisé avec les navigateurs récents */
  DBOpenRequest.onupgradeneeded = function(event) {
    var db = event.target.result;

    db.onerror = function(event) {
      note.innerHTML += '&lt;li&gt;Erreur du chargement de la base de données.&lt;/li&gt;';
    };

    // Ajoute un magasin d'objets à la base de données

    var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

    // Définition des index de ce magasin d'objets

    objectStore.createIndex("hours", "hours", { unique: false });
    objectStore.createIndex("minutes", "minutes", { unique: false });
    objectStore.createIndex("day", "day", { unique: false });
    objectStore.createIndex("month", "month", { unique: false });
    objectStore.createIndex("year", "year", { unique: false });

    objectStore.createIndex("notified", "notified", { unique: false });

    note.innerHTML += '&lt;li&gt;Magasin d\'objets ajouté.&lt;/li&gt;';

    // Supprime le magasin d'objets

    db.deleteObjectStore("toDoList");
  };
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBDatabase-deleteObjectStore-void-DOMString-name', 'deleteObjectStore()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2", "#dom-idbdatabase-deleteobjectstore", "deleteObjectStore()")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBDatabase.deleteObjectStore")}}</p>

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
