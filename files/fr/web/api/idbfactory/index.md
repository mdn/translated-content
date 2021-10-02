---
title: IDBFactory
slug: Web/API/IDBFactory
translation_of: Web/API/IDBFactory
---
<div>{{APIRef("IndexedDB")}}</div>

<p>L'interface <strong><code>IDBFactory</code></strong> fait partie de l'<a href="/fr/docs/Web/API/API_IndexedDB">API IndexedDB</a> et permet aux applications d'accéder à des bases de données de façon asynchrone. L'objet qui implémente cette interface  est <code>window.indexedDB</code>. Autrement dit, on créera et on accèdera à une base de données (voire on la supprimera) directement via cet objet plutôt qu'en utilisant l'objet <code>IDBFactory</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("IDBFactory.open")}}</dt>
 <dd>Une méthode qui permet d'ouvrir une connexion à une base de données.</dd>
 <dt>{{domxref("IDBFactory.deleteDatabase")}}</dt>
 <dd>Une méthode qui permet de demander la suppression d'une base de données.</dd>
 <dt>{{domxref("IDBFactory.cmp")}}</dt>
 <dd>Une méthode qui compare deux clés et renvoie un résultat qui indique laquelle est la plus grande.</dd>
 <dt>{{domxref("IDBFactory.databases")}}</dt>
 <dd>Une méthode qui répertorie toutes les bases de données disponibles, y compris leurs noms et leurs versions.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on effectue une requête sur une base de données et on gère les cas de succès et d'erreur. Vous pouvez consulter un exemple complet sur <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">notre application To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">voir l'exemple en <em>live</em></a>).</p>

<pre class="brush:js">var note = document.querySelector("ul");

// Dans la ligne suivante, inclure les préfixes des
// implémentations à tester
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// attention à ne pas utiliser "var indexedDB = ..."
// si on n'est pas dans une fonction

// On pourra éventuellement avoir besoin de références
// envers les objets window.IDB* :
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// (Mozilla n'a jamais préfixé ces objets,
// il n'est pas nécessaire d'écrire window.mozIDB*)

// On ouvre la version 4 de notre base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// On ajoute ensuite les gestionnaires d'évènements
// pour gérer le succès ou l'échec de l'ouverture
// de la base de données
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '&lt;li&gt;Erreur lors du chargement de la base.&lt;/li&gt;';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Base de données initialisée.&lt;/li&gt;';

  // store the result of opening the database in the db
  // variable. This is used a lot later on, for opening
  // transactions and suchlike.
  db = DBOpenRequest.result;
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
   <td>{{SpecName("IndexedDB", "#idl-def-IDBFactory", "IDBFactory")}}</td>
   <td>{{Spec2("IndexedDB")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2", "#factory-interface", "IDBFactory")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 3", "#factory-interface", "IDBFactory")}}</td>
   <td>{{Spec2("IndexedDB 3")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBFactory")}}</p>

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
