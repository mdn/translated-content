---
title: IDBObjectStore.delete()
slug: Web/API/IDBObjectStore/delete
tags:
  - API
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBObjectStore/delete
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>delete()</code></strong>, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un <em>thread</em> séparé, supprime le ou les enregistrements concernés.</p>

<p>Cette méthode prend une clé ou un objet {{domxref("IDBKeyRange")}} en argument ce qui permet de supprimer un ou plusieurs enregistrements. Si on souhaite supprimer l'ensemble des enregistrements d'un magasin de données, on utilisera plutôt la méthode {{domxref("IDBObjectStore.clear")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var request = objectStore.delete(keyOrKeyRange);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>keyOrKeyRange</code></dt>
 <dd>La clé de l'enregistrement qu'on souhaite supprimer ou un objet {{domxref("IDBKeyRange")}} qui indique l'intervalle de clés à supprimer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBRequest")}} qui recevra les évènements relatifs à cette opération. <code>request.result</code> vaut {{jsxref("undefined")}}.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut lever une des exceptions suivantes :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Exception</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>TransactionInactiveError</code></td>
   <td>La transaction associée au curseur <code>IDBCursor</code> est inactive.</td>
  </tr>
  <tr>
   <td><code>ReadOnlyError</code></td>
   <td>La transaction est uniquement en lecture seule.</td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>Le curseur créé avec {{domxref("IDBindex.openKeyCursor")}}, est en train d'être parcouru ou a été parcouru après sa fin.</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>La clé ou l'intervalle de clés n'est pas valide.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on ouvre une transaction en lecture/écriture et on supprime un enregistrement donné grâce à <code>delete()</code>. Pour un exemple complet, voir l'application <a href="https://github.com/mdn/to-do-notifications/">Notifications To-do</a> (<a href="https://mdn.github.io/to-do-notifications/">démonstration</a>).</p>

<pre class="brush: js">// On ouvre l'accès à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Initialisation de la base&lt;/li&gt;';

  // On enregistre le résultat de l'ouverture
  // dans la variable db.
  var db = DBOpenRequest.result;

  // On utilise deleteData() pour supprimer
  // un enregistrement
  deleteData();
};

function deleteData() {
  // On ouvre une transaction en lecture/écriture
  // afin de supprimer la donnée
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On indique le succès de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modification de la base terminée.&lt;/li&gt;';
  };


  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction interrompue suite à l\'erreur : ' + transaction.error + '&lt;/li&gt;';
  };

  // On crée un magasin d'objets pour la transaction
  var objectStore = transaction.objectStore("toDoList");

  // On supprime l'enregistrement du magasin
  var objectStoreRequest = objectStore.delete("Walk dog");

  objectStoreRequest.onsuccess = function(event) {
    // On indique le succès de l'opération
    note.innerHTML += '&lt;li&gt;Enregistremnt supprimé.&lt;/li&gt;';
  };
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
   <td>{{SpecName('IndexedDB', '#widl-IDBObjectStore-delete-IDBRequest-any-key', 'delete()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.delete")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB">Utiliser IndexedDB</a></li>
 <li>Initier une connexion : {{domxref("IDBDatabase")}}</li>
 <li>Utiliser les transactions : {{domxref("IDBTransaction")}}</li>
 <li>Définir un intervalle de clés : {{domxref("IDBKeyRange")}}</li>
 <li>Récupérer et modifier les données : {{domxref("IDBObjectStore")}}</li>
 <li>Utiliser les curseurs {{domxref("IDBCursor")}}</li>
 <li>L'exemple de référence : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">notifications de trucs à faire</a> (<a href="https://mdn.github.io/to-do-notifications/">voir la démonstration</a>)</li>
</ul>
