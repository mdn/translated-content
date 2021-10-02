---
title: IDBObjectStore.transaction
slug: Web/API/IDBObjectStore/transaction
translation_of: Web/API/IDBObjectStore/transaction
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
<p>La propriété <strong><code>transaction</code></strong> de l'interface {{domxref("IDBObjectStore")}} renvoie la {{domxref("IDBTransaction","transaction")}} à laquelle l'{{domxref("IDBObjectStore","accès")}} du magasin d'objet appartient.</p>

<p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var myTransaction = objectStore.transaction;</pre>

<h2 id="Valeur">Valeur</h2>

<p>Une {{domxref("IDBTransaction","transaction")}}.</p>

<h2 id="Exemple">Exemple</h2>

<p>Dans le code suivant, on ouvre une {{domxref("IDBDatabase","connexion")}} à la base de donnée. Sur cette connexion on démarre une {{domxref("IDBTransaction","transaction")}} en lecture/écriture pour avoir un {{domxref("IDBObjectStore","accès")}} au magasin d'objet <code>"toDoList"</code> dans lequel on {{domxref("IDBObjectStore.add","ajoute")}} un enregistrement.</p>

<p>La propriété <strong><code>transaction</code></strong> affiche la transaction à laquelle l'accès du magasin d'objet appartient.</p>

<pre class="brush: js">//Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
	note.innerHTML += '&lt;li&gt;Connexion établie.&lt;/li&gt;';

	//Affecte la connexion à la variable db.
	db = DBOpenRequest.result;

	// Exécutez la fonction addData () pour ajouter un enregistrement au magasin d'objet
	addData();
};
function addData() {
	// un nouvel objet prêt à être emmagasiné
	newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

	// ouvre une transaction de lecture / écriture  prête au traitement des données sur la connexion
	var transaction = db.transaction(["toDoList"], "readwrite");

	// en cas de succès de l'ouverture de la transaction
	transaction.oncomplete = function(event) {
		note.innerHTML += '&lt;li&gt;Transaction complété : modification de la base de données terminée.&lt;/li&gt;';
	};
	// en  cas d'échec de l'ouverture de la transaction
	transaction.onerror = function(event) {
		note.innerHTML += '&lt;li&gt;L\'erreur: "' + transaction.error +'" c\'est produite échec de la transaction.&lt;/li&gt;';
	};

	// ouvre l'accès au un magasin "toDoList" de la transaction
	var objectStore = transaction.objectStore("toDoList");

//-&gt;Affiche la transaction de l'accès du magasin d'objet
    console.log(objectStore.transaction);

	// Ajoute un enregistrement
	var objectStoreRequest = objectStore.add(newItem[0]);
	objectStoreRequest.onsuccess = function(event) {
		// signale l'ajout de l'enregistrement
		note.innerHTML += '&lt;li&gt;Enregistrement ajouté.&lt;/li&gt;';
	};
 };
 </pre>

<div class="note">
  <p><strong>Note :</strong> Pour un exemple de travail complet, voir notre <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>).</p>
</div>

<h2 id="Spécification">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBObjectStore-transaction', 'transaction')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.transaction")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}</li>
 <li>{{domxref("IDBDatabase","Débuter une connexion")}}</li>
 <li>{{domxref("IDBTransaction","Utilisé les transactions")}}</li>
 <li>{{domxref("IDBKeyRange","Définir l'intervalle des clés")}}</li>
 <li>{{domxref("IDBObjectStore","Accès aux magasins d'objets")}}</li>
 <li>{{domxref("IDBCursor","Utiliser les curseur")}}</li>
 <li>Exemple de référence: <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
