---
title: IDBRequest.onsuccess
slug: Web/API/IDBRequest/onsuccess
translation_of: Web/API/IDBRequest/onsuccess
---
<p>{{ APIRef("IndexedDB") }}</p>


<p>Le gestionnaire d'événement <strong><code>onsuccess</code></strong> de l'interface {{domxref("IDBRequest")}} capte l'événement <code><a href="/en-US/docs/Web/Events/success">success</a></code>, déclenché quand la requête réussie.</p>

<p>Le gestionnaire d'événement un événement <a href="/en-US/docs/Web/Events/success">success</a> avec le type="success" en paramètre.</p>

<p>{{AvailableInWorkers}}</p>


<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">request.onsuccess = function( event ) { ... };</pre>

<h2 id="Exemple">Exemple</h2>

<p>L'exemple suivant demande un titre d'enregistrement donné, <code>onsuccess</code> obtient l'enregistrement associé de {{domxref("IDBObjectStore")}} (mis à disposition en tant que <code>objectStoreTitleRequest.result</code>), on met à jour une propriété de l'enregistrement, puis le sauve dans le magasin d'objets. En bas le gestionnaire d'événement <code>onerror</code> affiche le code d'erreur si la requête échoue. Pour un exemple de travail complet, voir notre <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>).</p>

<pre>var title = "Walk dog";

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

  // Lorsque cette requête réussit, appelle de la fonction displayData() pour mettre à jour l'affichage
  updateTitleRequest.onsuccess = function() {
    displayData();
  };
};

objectStoreTitleRequest.onerror = function() {
  // Si une erreur se produit à la demande, on l'affiche
  console.log("Il y a eu une erreur dans la récupération des données: " + objectStoreTitleRequest.error);
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
   <td>{{SpecName('IndexedDB', '#widl-IDBRequest-onsuccess', 'onsuccess')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBRequest.onsuccess")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB">Using IndexedDB</a></li>
 <li><a href="/en-US/docs/Web/Events/success">Success Event</a></li>
 <li>Starting transactions: {{domxref("IDBDatabase")}}</li>
 <li>Using transactions: {{domxref("IDBTransaction")}}</li>
 <li>Setting a range of keys: {{domxref("IDBKeyRange")}}</li>
 <li>Retrieving and making changes to your data: {{domxref("IDBObjectStore")}}</li>
 <li>Using cursors: {{domxref("IDBCursor")}}</li>
 <li>Reference example: <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
