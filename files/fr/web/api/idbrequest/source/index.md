---
title: IDBRequest.source
slug: Web/API/IDBRequest/source
tags:
  - API
  - IDBRequest
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBRequest/source
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>source</code></strong> est une propriété en lecture seule, rattachée à l'interface {{domxref("IDBRequest")}}, et qui indique la source de la requête (c'est-à-dire l'index ou le magasin d'objets utilisé). Si aucune source n'existe (par exemple car on a appelé {{domxref("indexedDB.open")}}), la propriété vaut <code>null</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>IDBIndex</em> = <em>request</em>.source;
var <em>IDBCursor</em> = <em>request</em>.source;
var <em>IDBObjectStore</em> = <em>request</em>.source;
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un objet qui représente la source de la requête. Ce peut être un objet {{domxref("IDBIndex")}}, {{domxref("IDBObjectStore")}} ou un objet  {{domxref("IDBCursor")}}.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on récupère un enregistrement avec un titre donné depuis un magasin d'objets. Ensuite, on met à jour une des propriétés de cet enregistrement et on met à jour le magasin d'objets en insérant cet objet modifié. Lors de cette deuxième requête, on affiche la source dans la console. Pour consulter un exemple fonctionnel complet, vous pouvez vous référer à notre application <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">cf. l'exemple <em>live</em></a>).</p>

<pre class="brush: js">var title = "Walk dog";

// On ouvre une transaction
var objectStore = db.transaction(['toDoList'], "readwrite").objectStore('toDoList');

// On fait une requête pour récupérer
// l'enregistrement qui possède le titre
// souhaité
var objectStoreTitleRequest = objectStore.get(title);

objectStoreTitleRequest.onsuccess = function() {
  // On récupère l'objet afin de le modifier
  var data = objectStoreTitleRequest.result;

  // On met à jour la propriété notified
  // avec la valeur "yes"
  data.notified = "yes";

  // On crée une autre requête pour replacer
  // l'enregistrement modifié dans la base de d
  // données
  var updateTitleRequest = objectStore.put(data);

  // Ici, on affiche la source de la requête dans
  // la console
  console.log("La source de cette requête est " + updateTitlerequest.source);
  // Quand cette deuxième requête sera appliquée,
  // on lancera displayData() pour mettre à jour
  // l'affichage
  updateTitleRequest.onsuccess = function() { displayData(); };
};
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBRequest-source', 'source')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2", "#dom-idbrequest-source", "source")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBRequest.source")}}</p>

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
