---
title: IDBObjectStore.name
slug: Web/API/IDBObjectStore/name
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBObjectStore/name
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>name</code></strong>, rattachée à l'interface {{domxref("IDBObjectStore")}}, indique le nom du magasin d'objets courant.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>nomDuMagasin</em> = <em>IDBObjectStore</em>.name;
<em>IDBObjectStore</em>.name = <em>nouveauNom</em>;</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une chaîne de caractères qui contient le nom du magasin d'objet.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Plusieurs exceptions peuvent être levées lorsqu'on tente de modifier le nom d'un magasin d'objets.</p>

<dl>
 <dt><code>InvalidStateError</code></dt>
 <dd>Le magasin d'objets a été supprimé ou la transaction courante n'est pas une transaction de mise à jour : il est uniquemnet possible d'opérer un renommage lorsque le mode de la transaction est <code>"versionchange"</code>.</dd>
 <dt><code>TransactionInactiveError</code></dt>
 <dd>La transaction actuelle est inactive.</dd>
 <dt><code>ConstraintError</code></dt>
 <dd>Un magasin d'objets utilise déjà le nom qu'on souhaite employer.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Dans le fragment de code qui suit, on ouvre une transaction en lecture/écriture pour la base de données et on ajoute des données au magasin d'objets grâce à la méthode <code>add()</code>. Une fois que le magasin d'objets a été créé, on inscrit la valeur de <code>objectStore.name</code> dans la console. Pour un exemple complet, voir notre application <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> (cf. également <a href="https://mdn.github.io/to-do-notifications/">la démonstration <em>live</em></a>).</p>

<pre class="brush: js">// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Initialisation de la base de données&lt;/li&gt;';

  // On enregistre le résultat de l'ouverture dans la variable
  // db afin de l'utiliser ensuite.
  db = DBOpenRequest.result;

  // On exécute la fonction addData() afin d'ajouter des
  // données à la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet pour l'insérer dans la base
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // afin d'ajouter les données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On gère le cas où la transaction est effectuée correctement
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modification appliquée.&lt;/li&gt;';
  };

  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction non ouverte. Les doublons sont interdits.&lt;/li&gt;';
  };

  // On crée un magasin d'objets pour la transaction
  var objectStore = transaction.objectStore("toDoList");
  console.log(objectStore.name);

  // On ajoute l'objet newItem dans le magasin d'objet
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On rapporte la réussite de l'ajout de l'objet en base
    note.innerHTML += '&lt;li&gt;Nouvel élément ajouté dans la base de données.&lt;/li&gt;';
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
   <td>{{SpecName('IndexedDB', '#widl-IDBObjectStore-name', 'name')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.name")}}</p>

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
