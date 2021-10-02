---
title: IDBTransaction.onabort
slug: Web/API/IDBTransaction/onabort
tags:
  - API
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/onabort
---
<div>{{APIRef("IndexedDB")}}</div>

<p>Le gestionnaire d'événement <strong><code>onabort</code></strong>, rattaché à l'interface {{domxref("IDBTransaction")}}, s'exécute au déclenchement d'un événement <code><a href="/fr/docs/Web/Events/abort">abort</a></code>, lorsque la transaction a été annulée avec la méthode {{domxref("IDBTransaction.abort")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">transaction.onabort = function() { ... };</pre>

<h2 id="Exemple">Exemple</h2>

<p>Dans le code suivant, on ouvre une connexion à la base de données. Sur cette connexion, on démarre une transaction avec {{domxref("IDBTransaction")}} en lecture/écriture pour accéder au magasin d'objets intitulé <code>"toDoList"</code> et y ajouter un enregistrement (grâce à la méthode {{domxref("IDBObjectStore.add")}}). On notera également l'utilisation des gestionnaires d'événement {{domxref("IDBTransaction.oncomplete")}} et {{domxref("IDBTransaction.onerror")}} qui affichent le résultat de la transaction sur la page.</p>

<p>On voit ici le gestionnaire d'événement <strong><code>onabort</code></strong> qui est utilisé pour afficher un message sur la console du développeur.</p>

<pre class="brush: js">// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Connexion établie.&lt;/li&gt;';

  // On affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // On exécute la fonction addData () afin de
  // stocker des données dans la base
  addData();
};

function addData() {
  // Voici un nouvel objet prêt à être emmagasiné
  newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture, prête
  // à traiter des données sur la connexion
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On utilise oncomplete en cas de succès de
  // l'ouverture de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modification de la base de données OK.&lt;/li&gt;';
  };

  // En cas d'échec de l'ouverture, ce sera
  // le gestionnaire onerror qui interviendra
  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.&lt;/li&gt;';
  };

  // On ouvre l'accès au un magasin "toDoList"
  // dans la transaction
  var objectStore = transaction.objectStore("toDoList");

  // Ici, l'enregistrement est ajouté
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function(event) {
    // On signale l'ajout de l'enregistrement
    note.innerHTML += '&lt;li&gt;Enregistrement ajouté.&lt;/li&gt;';
  };

  transaction.onabort = function() {
    // Ce gestionnaire permet de signaler
    // qu'une transaction a été annulée avec succès
    console.log("Transaction annulée !");
  };

  // On abandonne la transaction qu'on vient de faire
  transaction.abort();
};</pre>

<div class="note">
  <p><strong>Note :</strong> Pour un exemple fonctionnel complet, voir notre application <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">exemple <em>live</em> disponible</a>).</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBTransaction-onabort', 'onabort')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBTransaction.onabort")}}</p>

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
