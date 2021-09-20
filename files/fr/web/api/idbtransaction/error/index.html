---
title: IDBTransaction.error
slug: Web/API/IDBTransaction/error
tags:
  - API
  - Erreur
  - IDBTransaction
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/error
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>IDBTransaction.error</code></strong> de l'interface {{domxref("IDBTransaction")}} renvoie un type d'erreur lorsque la {{domxref("IDBTransaction","transaction","",1)}} échoue.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var myError = transaction.error;</pre>

<h3 id="Valeur">Valeur</h3>

<p>L'{{domxref("DOMError","erreur","",1)}} correspondante qui est un objet <code>DOMError</code>. Il y a différents types d'erreurs possibles : l'erreur obtenue peut ainsi faire référence à l'objet de la requête qui l'a déclenchée ou à un échec de la transaction (par exemple <code> QuotaExceededError</code> ou <code> UnknownError</code>).</p>

<p>Cette propriété vaut <code>null</code> si la transaction n'est pas terminée ou qu'elle est terminée avec succès ou qu'elle a été annulée avec la méthode {{domxref("IDBTransaction.abort","abort")}}.</p>

<div class="note">
  <p><strong>Note :</strong> Dans Chrome 48+ cette propriété renvoie une exception {{domxref ("DOMException")}} parce que le type {{domxref("DOMError")}} a été retiré de la norme DOM.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<p>Dans le fragment de code suivant, on ouvre une {{domxref("IDBDatabase","connexion","",1)}} à la base de donnée. Sur cette connexion on démarre une {{domxref("IDBTransaction","transaction","",1)}} en lecture/écriture pour {{domxref("IDBObjectStore","accéder au magasin d'objet","",1)}}  <code>"toDoList"</code> et y {{domxref("IDBObjectStore.add","ajouter","",1)}} un enregistrement. Notez également les gestionnaires d'événements {{domxref("IDBTransaction.oncomplete","oncomplete")}} et {{domxref("IDBTransaction.onerror","onerror")}} de la transaction qui affichent sur la page le résultat de la transaction.</p>

<p>La propriété <strong><code>error</code></strong> sert dans le bloc <code>transaction.onerror = function(event) {...}</code> afin d'afficher le type d'erreur qui est survenue.</p>

<pre class="brush: js">//Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Connexion établie.&lt;/li&gt;';

  //Affecter la connexion à la variable db.
  db = DBOpenRequest.result;

  // Exécuter la fonction addData () pour emmagasiner
  // les données dans la base
  addData();
};

function addData() {
  // Créer un nouvel objet prêt à être emmagasiné
  newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // Ouvrir une transaction de lecture / écriture
  // pour permettre le traitement des données sur la connexion
  var transaction = db.transaction(["toDoList"], "readwrite");

  // En cas de succès de l'ouverture de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modification de la base de données terminée.&lt;/li&gt;';
  };
  // En  cas d'échec de l'ouverture de la transaction
  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.&lt;/li&gt;';
  };

  // Ouvrir l'accès au un magasin "toDoList" de la transaction
  var objectStore = transaction.objectStore("toDoList");

  // Ajouter un enregistrement
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function(event) {
    // Signaler l'ajout de l'enregistrement
    note.innerHTML += '&lt;li&gt;Enregistrement ajouté.&lt;/li&gt;';
  };
 };
 </pre>

<div class="note">
  <p><strong>Note :</strong> pour un exemple fonctionnel complet, voir notre <a href="https://github.com/mdn/to-do-notifications/">application To-do</a> (<a href="https://mdn.github.io/to-do-notifications/">exemple</a>).</p>
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
   <td>{{SpecName('IndexedDB', '#transaction', 'IDBTransaction')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBTransaction.error")}}</p>

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
