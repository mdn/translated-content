---
title: IDBDatabase.objectStoreNames
slug: Web/API/IDBDatabase/objectStoreNames
tags:
  - API
  - Database
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBDatabase/objectStoreNames
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>objectStoreNames</code></strong>, rattachée à l'interface {{domxref("IDBDatabase")}}, est une liste de chaînes de caractères  ({{domxref("DOMStringList")}}) qui sont les noms des magasins d'objets ({{domxref("IDBObjectStore")}}) connectés à la base de données.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">db.objectStoreNames</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une liste {{domxref("DOMStringList")}} des noms de magasins d'objets ({{domxref("IDBObjectStore")}}) connectés à la base de données.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Les deux gestionnaires d’événements activés pour
// gérer la réussite ou l'échec de le connexion.
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '&lt;li&gt;Erreur de chargement de la base de données.&lt;/li&gt;';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Base de données initialisée.&lt;/li&gt;';

  // Affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // Cette ligne affiche sur la console la liste des magasins
  // d'objets de la base de données
  console.log(db.objectStoreNames);
};</pre>

<div class="note">
  <p><strong>Note :</strong>Pour un exemple fonctionnel complet, voir notre application de démo <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">l'exemple <em>live</em></a>).</p>
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
   <td>{{SpecName('IndexedDB', '#widl-IDBDatabase-objectStoreNames', 'objectStoreNames')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBDatabase.objectStoreNames")}}</p>

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
