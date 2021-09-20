---
title: IDBObjectStore.deleteIndex()
slug: Web/API/IDBObjectStore/deleteIndex
translation_of: Web/API/IDBObjectStore/deleteIndex
---
<p>{{ APIRef("IndexedDB") }}</p>

<p>La méthode <strong><code>deleteIndex()</code></strong> de l'interface {{domxref("IDBObjectStore")}} supprime l'index dont le nom est passé en paramètre, du magasin d'objet relié ({{domxref("IDBObjectStore")}}).</p>

<div class="note">
<p><strong>Note :</strong> Cette méthode ne peut être appelée que si la transaction ({{domxref("IDBTransaction")}}) de l'accès ({{domxref("IDBObjectStore")}}) au magasin d'objet est en mode ({{domxref("IDBTransaction.mode")}}) <strong><a href="/fr/docs/Web/API/IDBTransaction/mode#versionchange">versionchange</a></strong>. Les propriétés<strong> indexNames ({{domxref("IDBObjectStore.indexNames")}}) </strong>des accès au magasin d'object seront aussi mises à jour.</p>
</div>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">objectStore.deleteIndex(nomIndex);</pre>

<h3 id="Paramètre">Paramètre</h3>

<dl>
 <dt>nomIndex</dt>
 <dd>Le nom de l'index à supprimer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Void.</p>

<h3 id="Exceptions">Exceptions</h3>

<dl>
 <dt><code>InvalidStateError</code></dt>
 <dd>Cette exception ({{domxref("DOMException")}}) est levée si la transaction ({{domxref("IDBTransaction")}}) dont dépend cet accès ({{domxref("IDBObjectStore")}}) au magasin d'objet n'est pas en mode ({{domxref("IDBTransaction.mode")}}) <a href="/fr/docs/Web/API/IDBTransaction/mode#versionchange"><code>versionchange</code></a>.</dd>
 <dt><code>TransactionInactiveError</code></dt>
 <dd><p>Cette exception ({{domxref("DOMException")}}) est levée si la transaction ({{domxref("IDBTransaction")}}) de l'accès ({{domxref("IDBObjectStore")}}) au magasin d’objet est inactive.
 <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1176165">bug 1176165</a>).</p>
 </dd>
 <dt><code>NotFoundError</code></dt>
 <dd>Cette exception ({{domxref("DOMException")}}) est levée si l'index avec le nom (case sensible) demandé n'existe pas sur le magasin d'objet.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>Dans l'exemple suivant on peut voir le gestionnaire d'événement {{domxref("IDBOpenDBRequest.onupgradeneeded","<code>onupgradeneeded</code>")}} être utilisé pour mettre à jour la structure de la base de données quand un numéro de version supérieure est chargé.</p>

<p>Des méthode <strong><code>deleteIndex()</code></strong> sont utilisées pour supprimer d'anciens index du magasin d'objet <code>toDoList</code>.</p>

<pre class="brush: js">var db;

// Requête d'ouverture de la base de données "toDoList"
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Gère  l'échec de l'ouverture de la base
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '&lt;li&gt;La base de donnée n\'as pas peut être ouverte.&lt;/li&gt;';
};

// Gère le succès de l'ouverture de la base
DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;La base de données est ouverte.&lt;/li&gt;';

  //
  db = request.result;

  // Exécute une fonction d'affichage displayData()
  displayData();
};

// Ce gestionnaire d'événement nécessite  un nouveau numéro de version de la base de données.
// Si la base n'existe pas un nouveau numéro de version est généré par la méthode d'ouverture de connexion window.indexDB.open .

DBOpenRequest.onupgradeneeded = function(event) {

  db.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Erreur de chargement de la base de données.&lt;/li&gt;';
  };

  // L'Accès au magasin d'objet "toDoList" de la base de données
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // Met en place les index du magasin d'objet
  objectStore.createIndex("heures", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("jour", "day", { unique: false });
  objectStore.createIndex("mois", "month", { unique: false });
  objectStore.createIndex("annee", "year", { unique: false });
  objectStore.createIndex("notifiee", "notified", { unique: false });

  //supprime des index du magasin d'objet
  objectStore.deleteIndex("secondes");
  objectStore.deleteIndex("contact");
};
</pre>

<div class="note">
  <p><strong>Note :</strong> Pour un exemple de travail complet, voir notre <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>).</p>
</div>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBObjectStore-deleteIndex-void-DOMString-indexName', 'deleteIndex()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité avec les navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.deleteIndex")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}</li>
 <li>{{domxref("IDBDatabase","Débuter une connexion")}}</li>
 <li>{{domxref("IDBTransaction","Utilisé les transactions")}}</li>
 <li>{{domxref("IDBKeyRange","Définir l'intervalle des clés")}}</li>
 <li>{{domxref("IDBObjectStore","Accès aux magasins d'objets")}}</li>
 <li>{{domxref("IDBCursor","Utiliser les curseur")}}</li>
 <li>Exemple de référence: <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
