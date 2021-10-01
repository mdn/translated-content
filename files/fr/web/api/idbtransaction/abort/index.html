---
title: IDBTransaction.abort()
slug: Web/API/IDBTransaction/abort
tags:
  - API
  - IDBTransaction
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBTransaction/abort
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>abort()</code></strong>, rattachée à l'interface {{domxref("IDBTransaction")}}, permet d'annuler les modifications apportées aux objets de la base de données pendant la transaction courante.</p>

<p>Tous les objets {{domxref("IDBRequest")}} créés pendant cette transaction verront leur attribut {{domxref("IDBRequest.error")}} prendre la valeur <code>AbortError</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">transaction.abort();</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Aucune.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut déclencher une exception {{domxref("DOMException")}} du type <code>InvalidStateError</code> lorsque la transaction a été validée ou qu'elle a déjà été annulée.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans le fragment de code suivant, on ouvre une transaction en lecture/écriture sur la base de données et on ajoute des données au magasin d'objets. On dispose également de fonctions attachées aux gestionnaires d'évènements de la transaction pour gérer la réussite ou l'échec des opérations. Ensuite, on annule les opérations de la transaction grâce à <code>abort()</code>. Pour un exemple complet, vous pouvez consulter <a href="https://github.com/mdn/to-do-notifications/">notre application de notifications To-do</a> (cf. <a href="https://mdn.github.io/to-do-notifications/">la démonstration <em>live</em></a>).</p>

<pre class="brush: js">// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Initialisation de la base.&lt;/li&gt;';

  // On enregistre le résultat de l'ouverture dans la
  // variable db afin de l'utiliser ensuite
  db = DBOpenRequest.result;

  // On exécute la fonction addData() afin d'ajouter
  // des données à la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet pour l'insérer dans la reate a new object ready for being
  // inserted into the IDB
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // afin d'ajouter des données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On gère la réussite de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modifications appliquées.&lt;/li&gt;';
  };


  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction non ouverte à cause d'une erreur.&lt;/li&gt;';
  };

  // On crée le magasin d'objet pour la transaction
  var objectStore = transaction.objectStore("toDoList");

  // On ajoute un nouvel objet newItem au magasin d'objet
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On gère la réussite de l'ajout de l'élément dans
    // la base de données
    note.innerHTML += '&lt;li&gt;Nouvel objet ajouté dans la base de données.&lt;/li&gt;';
  };

  // On annule la transaction en cours
  transaction.abort();
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
   <td>{{SpecName('IndexedDB', '#widl-IDBTransaction-abort-void', 'abort')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBTransaction.abort")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB">Utiliser IndexedDB</a></li>
 <li>Initier une connexion : {{domxref("IDBDatabase")}}</li>
 <li>Utiliser les transactions : {{domxref("IDBTransaction")}}</li>
 <li>Définir un intervalle de clés : {{domxref("IDBKeyRange")}}</li>
 <li>Récupérer et modifier les données : {{domxref("IDBObjectStore")}}</li>
 <li>Utiliser les curseurs {{domxref("IDBCursor")}}</li>
 <li>Exemple de référence : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">exemple <em>live</em></a>).</li>
</ul>
