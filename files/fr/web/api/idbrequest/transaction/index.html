---
title: IDBRequest.transaction
slug: Web/API/IDBRequest/transaction
translation_of: Web/API/IDBRequest/transaction
---
<p>{{ APIRef("IndexedDB") }}</p>

<p>La propriété <strong><code>transaction</code></strong> de l'interface IDBRequest renvoie la {{domxref("IDBTransaction","transaction")}} dans laquelle on fait la requête.La propriètè peut renvoiyer <code>null</code> si requête se fait sans transaction, comme un objet IDBRequest renvoyé par {{domxref("IDBFactory.open")}} dans ce cas on est juste connecté à la base de données.</p>

<div class="note">
  <p><strong>Note :</strong> Durant la gestion d'un événement {{domxref("IDBOpenDBRequest.onupgradeneeded", "upgradeneeded")}} qui met à jour la version de la base de données, la propriété <strong><code>transaction</code></strong> doit être une {{domxref("IDBTransaction","transaction")}} ouverte en {{domxref("IDBTransaction.mode", "mode")}} <code>"versionchange"</code>, on peut alors accéder aux {{domxref("IDBObjectStore","magasins d'objets")}} et {{domxref("IDBIndex","index")}} ou annulé la mise à niveau. Après quoi, la propriété <strong><code>transaction</code></strong> renverra encore <code>null</code>.</p>
</div>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var myTransaction = request.transaction;</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une {{domxref("IDBTransaction","transaction")}}.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant demande un titre d'enregistrement donné, <code>onsuccess</code> obtient l'enregistrement associé du {{domxref("IDBObjectStore","magasin d'objects")}} (mis à disposition en tant que <code>objectStoreTitleRequest.result</code>), on met à jour une propriété de l'enregistrement, puis le sauve dans le magasin d'objects. La {{domxref("IDBTransaction","transaction")}} à l'origine de la deuxième {{domxref("IBBRequest","requête")}} est affichée sur la console du développeur (Ps, les deux requêtes proviennent de la même transaction). En bas est une fonction onerror qui affiche le code d'erreur si la requête échoue. Pour un exemple de travail complet, voir notre <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>).</p>

<pre class="brush: js">var title = "Walk dog";

// Ouvrez une transaction comme d'habitude
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// Obtenez l'objet toDoList qui a ce titre
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // Prenez l'objet de données renvoyé comme résultat
  var data = objectStoreTitleRequest.result;

  // Mettre à jour la valeur notified de l'objet à "yes"
  data.notified = "yes";

  // Créer une autre requête qui insère le nouvelle élément dans la base de données
  var updateTitleRequest = objectStore.put(data);

  // Affiche la transaction à l'origine de la deuxième requête
  console.log(" la transaction à l'origine de ces requêtes est " + updateTitleRequest.transaction);

  // Lorsque cette requête réussit, appelle de la fonction displayData() pour mettre à jour l'affichage
  updateTitleRequest.onsuccess = function() {
    displayData();
  };

objectStoreTitleRequest.onerror = function() {
  // Si une erreur pendant la requête, on l'affiche
  console.log("Il y a eu une erreur dans la récupération des données: " + objectStoreTitleRequest.error);
};
</pre>

<p>Cet exemple montre comment la propriété <strong><code>transaction</code></strong> peut être utilisé pendant une mise à niveau de version pour accéder à des {{domxref("IDBObjectStore","magasins d'objects")}} existants: ​</p>

<pre class="brush: js">var openRequest = indexedDB.open('db', 2);
console.log(openRequest.transaction); // Affiche "null".

openRequest.onupgradeneeded = function(event) {
  console.log(openRequest.transaction.mode); // Affiche "versionchange".
  var db = openRequest.result;
  if (event.oldVersion &lt; 1) {
    // Nouvelle base de données, créer un magasin d'objets "livres".
    db.createObjectStore('books');
  }
  if (event.oldVersion &lt; 2) {
    // Mise à niveau de la base de données v1: ajoute un index sur "title" pour stocker les livres.
    var bookStore = openRequest.transaction.objectStore('books');
    bookStore.createIndex('by_title', 'title');
  }
};

openRequest.onsuccess = function() {
  console.log(openRequest.transaction); // Affiche "null".
};
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBRequest-transaction', 'transaction')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBRequest.transaction")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li>Starting transactions: {{domxref("IDBDatabase")}}</li>
 <li>Using transactions: {{domxref("IDBTransaction")}}</li>
 <li>Setting a range of keys: {{domxref("IDBKeyRange")}}</li>
 <li>Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}</li>
 <li>Using cursors: {{domxref("IDBCursor")}}</li>
 <li>Reference example: <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
