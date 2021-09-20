---
title: IDBTransaction.onerror
slug: Web/API/IDBTransaction/onerror
tags:
  - API
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/onerror
---
<div>{{APIRef("IndexedDB")}}</div>

<p>Le gestionnaire d'événement <strong><code>onerror</code></strong>, rattaché à l'interface {{domxref("IDBTransaction")}}, s'exécute au déclenchement d'un événement <code><a href="/fr/docs/Web/Events/error">error</a></code> lorsque la transaction échoue.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">transaction.onerror = function() { ... };</pre>

<h2 id="Exemple">Exemple</h2>

<p>Dans le code suivant, on commence par ouvrir une connexion à la base de donnée. Grâce à cette connexion, on initialise une transaction en lecture/écriture grâce à <code>IDBTransaction</code> pour accéder au magasin d'objets intitulé <code>toDoList</code> et y ajouter un enregistrement via la méthode  {{domxref("IDBObjectStore.add")}}. On notera également l'utilisation du gestionnaire d'événements {{domxref("IDBTransaction.oncomplete")}}.</p>

<p>Le gestionnaire d'événement <strong><code>onerror</code></strong> de la transaction affiche le code d'erreur de la propriété propriété {{domxref("IDBTransaction.error","error")}} sur la page.</p>

<pre class="brush: js">// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
	note.innerHTML += '&lt;li&gt;Connexion établie.&lt;/li&gt;';

	// On affecte la connexion à la variable db.
	db = DBOpenRequest.result;

	// On exécute la fonction addData () pour ajouter
    // des données dans la base
	addData();
};
function addData() {
	// On crée un nouvel objet prêt à être emmagasiné
	newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

	// On ouvre une transaction de lecture / écriture
    // pour traiter les données via la connexion
	var transaction = db.transaction(["toDoList"], "readwrite");

	// En cas de succès de l'ouverture de la transaction
    // on utilise ce gestionnaire
	transaction.oncomplete = function(event) {
		note.innerHTML += '&lt;li&gt;Transaction terminée : modification de la base de données OK.&lt;/li&gt;';
	};
	// En  cas d'échec de l'ouverture de la transaction
    // on utilisera ce gestionnaire
	transaction.onerror = function(event) {
		note.innerHTML += '&lt;li&gt;L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.&lt;/li&gt;';
	};

	// On ouvre l'accès au magasin "toDoList" de la transaction
	var objectStore = transaction.objectStore("toDoList");

	// Enfin on ajoute un enregistrement
	var objectStoreRequest = objectStore.add(newItem[0]);
	objectStoreRequest.onsuccess = function(event) {
		// On signale l'ajout de l'enregistrement
		note.innerHTML += '&lt;li&gt;Enregistrement ajouté.&lt;/li&gt;';
	};
 };
 </pre>

<div class="note">
  <p><strong>Note :</strong> Pour un exemple de travail complet, voir l'application <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">exemple <em>live</em> disponible ici</a>).</p>
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
   <td>{{SpecName('IndexedDB', '#widl-IDBTransaction-ononerror', 'onerror')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBTransaction.onerror")}}</p>

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
