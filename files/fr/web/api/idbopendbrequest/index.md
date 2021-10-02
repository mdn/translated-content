---
title: IDBOpenDBRequest
slug: Web/API/IDBOpenDBRequest
tags:
  - API
  - Base de données
  - IndexedDB
  - Interface
  - Reference
  - Référence DOM
  - Stockage
translation_of: Web/API/IDBOpenDBRequest
---
<p>{{APIRef("IndexedDB")}}</p>

<div>
<p>L'interface <strong><code>IDBOpenDBRequest</code></strong> de l'API IndexedDB donne un accès aux résultats des requêtes permettant d'ouvrir ou  de supprimer des bases de donnée (Effectuée via {{domxref("IDBFactory.open")}} et {{domxref("IDBFactory.deleteDatabase")}}).</p>
</div>

<p>{{AvailableInWorkers}}</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite  des méthodes de ses parents {{domxref("IDBRequest")}} et {{domxref("EventTarget")}}</em>.</p>

<h3 id="Évènements">Évènements</h3>

<dl>
 <dt>{{domxref("IDBOpenDBRequest.onblocked")}}</dt>
 <dd>Le gestionnaire d'événements pour événement bloqué . Cet événement est lancé lorsqu' un événement  <code>upgradeneeded </code>doit être déclenché en raison d'un changement de version, mais que la base de données est toujours en cours d'utilisation (c'est-à-dire, non fermée) quelque part, même après l'envoi de l'évènement <code>versionchange</code> .</dd>
 <dt>{{domxref("IDBOpenDBRequest.onupgradeneeded")}}</dt>
 <dd>Le gestionnaire d'évènement pour évènement <code>upgradeneeded</code> <em>(mise-à-jour nécessaire)</em>, lancé quand une base de données d'une version supérieure à celle de la base de données existante est chargé.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Pas de méthodes, mais hérite des méthodes de ses parents {{domxref("IDBRequest")}} et {{domxref("EventTarget")}}.</em></p>

<h2 id="Exemple">Exemple</h2>

<p>Dans l'exemple ci-dessous,  le gestionnaire <code>onupgradeneeded</code> est utilisé pour mettre à jour la structure de la base de données, si une base plus récente est chargée. Pour voir un exemple complet, référez-vous à notre application <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="http://mdn.github.io/to-do-notifications/">voir cet exemple réel</a>)</p>

<pre class="brush: js">var db;

// Ouvre la base de données.
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Ces gestionnaires d'évènements agissent sur la base de données en cours d'ouverture.
  note.innerHTML += '&lt;li&gt;Error loading database.&lt;/li&gt;';
};

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Database initialised.&lt;/li&gt;';

  // stocke le résultat de l'ouverture de la base de données dans la variable db .
  // Ceci est beaucoup moins utilisé.
  db = DBOpenRequest.result;

  // Exécute la fonction displayData() pour remplir la liste de tâches
  // avec toutes les données de la lste de tâches déjà dans la base.
  displayData();
};

// Cet évènement gère l'évènement par lequel une nouvelle version
// de la base de données doit être créée. Soit elle n'a pas
// été créée avant, soit un nouveau numéro de version a été
// soumis via la ligne "window.indexedDB.open" ci-dessous.
// Il n'est implémenté que dans les navigateurs récents.
DBOpenRequest.onupgradeneeded = function(event) {
  var db = this.result;

  db.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Error loading database.&lt;/li&gt;';
  };

  // Crée un objet de stockage pour cette base de données.
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // définit quels éléments de données l'objet de stockage contiendra.

  objectStore.createIndex("hours", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("day", "day", { unique: false });
  objectStore.createIndex("month", "month", { unique: false });
  objectStore.createIndex("year", "year", { unique: false });
  objectStore.createIndex("notified", "notified", { unique: false });
};</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#idl-def-IDBOpenDBRequest', 'IDBOpenDBRequest')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2", "#idbopendbrequest", "IDBOpenDBRequest")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBOpenDBRequest")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB">Utiliser IndexedDB</a></li>
 <li>Démarrage de transactions : {{domxref("IDBDatabase")}}</li>
 <li>Utilisation de transactions : {{domxref("IDBTransaction")}}</li>
 <li>Définition un intervalle de clés : {{domxref("IDBKeyRange")}}</li>
 <li>Récupération et modification des données : {{domxref("IDBObjectStore")}}</li>
 <li>Utilisation de curseurs : {{domxref("IDBCursor")}}</li>
 <li>Exemple de référence : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
