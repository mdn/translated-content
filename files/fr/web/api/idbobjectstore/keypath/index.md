---
title: IDBObjectStore.keyPath
slug: Web/API/IDBObjectStore/keyPath
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Propriété
  - Reference
  - keyPath
translation_of: Web/API/IDBObjectStore/keyPath
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>keyPath</code></strong> de l'interface {{domxref("IDBObjectStore")}} renvoie le <a href="/fr/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#gloss_keypath">chemin de la clé</a> de ce magasin d'objet.</p>

<p>Si cette propriété vaut <code>null</code> l'application doit fournir une clé pour chaque opération de modification.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var mykeyPath = objectStore.keyPath;</pre>

<h3 id="Valeur">Valeur</h3>

<p>N'importe quel type de valeur.</p>

<h2 id="Exemple">Exemple</h2>

<p>Dans l'exemple suivant, on initialise une transaction de lecture/écriture sur une base de données en ajoutant des données dans un magasin d'objets via la méthode <code>add()</code>. Une fois l'objet créé, on affiche <code>objectStore.keyPath</code> en sortie de la console. Pour un exemple complet et fonctionnel, vous pouvez utiliser notre application <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">tester la démo</a>).</p>

<pre class="brush: js">// On commence par ouvrir la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Initialisation de la base.&lt;/li&gt;';

  // On enregistre le résultat de l'ouverture
  // dans la variable db afin de l'utiliser
  // ensuite
  var db = DBOpenRequest.result;

  // On utilise la fonction addData() afin d'ajouter
  // des données à la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet prêt à être inséré
  // dans la base de données
  var newItem = [ { taskTitle: "Promener le chien", hours: 19, minutes: 30, day: 24, month: "Décembre", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // vers la base de données afin d'ajouter des
  // données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On indique le succès de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modification finie.&lt;/li&gt;';
  };

  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction non-ouverte à cause d'une erreur. Les doublons ne sont pas autorisés.&lt;/li&gt;';
  };

  // On crée un magasin d'objet pour la transaction
  // et on affiche KeyPath dans la console
  var objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.keyPath);

  // On ajoute l'objet newItem au magasin d'objets
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On indique le succès de l'ajout de l'objet
    // dans la base de données
    note.innerHTML += '&lt;li&gt;Un nouvel élément a été ajouté dans la base de données.&lt;/li&gt;';
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
   <td>{{SpecName('IndexedDB', '#widl-IDBObjectStore-keyPath', 'keyPath')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.keyPath")}}</p>

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
