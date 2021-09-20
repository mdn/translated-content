---
title: IDBTransaction.oncomplete
slug: Web/API/IDBTransaction/oncomplete
tags:
  - API
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/oncomplete
---
<div>{{ APIRef("IndexedDB") }}</div>

<p>Le gestionnaire d'événement <strong><code>oncomplete</code></strong>, rattaché à l'interface {{domxref("IDBTransaction")}}, s'exécute au déclenchement d'un événement <code><a href="/fr/docs/Web/Events/complete">complete</a></code> lorsque la transaction se termine avec succès.</p>

<div class="note">
<p><strong>Note :</strong> Depuis Firefox 40, les transactions IndexedDB diminuent en efficacité pour gagner en efficience (voir {{Bug ( "1112702")}}). Auparavant, dans une transaction en <code><a href="#const_read_write">readwrite</a></code>, l'événement <code>complete</code> était déclenché seulement lorsque toutes les données étaient écrites sur le disque. Maintenant, l'événement <code>complete</code> est déclenché après que l'OS ai envoyé l'ordre d'écrire les données, mais potentiellement avant qu'elles aient été écrites sur le disque. L'événement <code>complete</code> peut ainsi être déclenché plus rapidement qu'auparavant. Cependant, il existe une chance infime pour que l'ensemble de la transaction soit perdue si le système d'exploitation plante ou s'il y a une perte de courant avant que les données aient été écrites sur le disque. Étant donné que ces événements catastrophiques sont rares, la plupart des utilisateurs ne devraient pas avoir à s'en préoccuper davantage.</p>

<div class="warning">
  <p><strong>Attention :</strong> Si vous devez vous assurer de l'efficacité d'une transaction pour une raison quelconque (par exemple, vous stockez des données critiques qui ne peuvent être recalculé plus tard), vous pouvez forcer l'enregistrement complet sur disque avant de déclencher l'événement <code>complete</code> en utilisant le mode <code>readwriteflush</code> (non-standard) expérimental (cf. {{domxref("IDBDatabase.transaction")}} ). Ce mode expérimentale ne peut être utilisé que si la préférence<code> dom.indexedDB.experimental </code> pref est réglée sur <code> true</code> dans <code> about: config</code>.</p>
</div>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">transaction.oncomplete = function() { ... };</pre>

<h2 id="Exemple">Exemple</h2>

<p>Dans le code suivant, on ouvre une connexion à la base de donnée. Ensuite, sur cette connexion, on démarre une transaction (avec  {{domxref("IDBTransaction")}}) en lecture/écriture pour accéder au magasin d'objet <code>"toDoList"</code> et y ajouter un enregistrement grâce à la méthode {{domxref("IDBObjectStore.add")}}. On notera également la façon dont le gestionnaire d'événement {{domxref("IDBTransaction.onerror")}} est utilisé dans la transaction.</p>

<p>Le gestionnaires d'événement <strong><code>oncomplete</code></strong> de la transaction permet d'afficher un message de succès sur la page.</p>

<pre class="brush: js">// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Connexion établie.&lt;/li&gt;';

  // Affectation de la connexion à la variable db.
  db = DBOpenRequest.result;

  // Exécution de la fonction addData () pour
  // stocker des données dans la base
  addData();
};

function addData() {
  // Voici un nouvel objet prêt à être emmagasiné
  newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // prête au traitement des données sur la connexion
  var transaction = db.transaction(["toDoList"], "readwrite");

  // Voici le gestionnaire utilisé en cas de succès
  // de l'ouverture de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modification de la base de données OK.&lt;/li&gt;';
  };

  // Et celui utilisé en cas d'échec de
  // l'ouverture de la transaction
  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.&lt;/li&gt;';
  };

  // Puis, on ouvre l'accès au un magasin "toDoList"
  // de la transaction
  var objectStore = transaction.objectStore("toDoList");

  // Enfin on ajoute l'enregistrement
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function(event) {
    // Et on signale l'ajout de l'enregistrement
    note.innerHTML += '&lt;li&gt;Enregistrement ajouté.&lt;/li&gt;';
  };
 };
</pre>

<div class="note">
  <p><strong>Note :</strong>Pour un exemple de travail complet, voir notre application <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">exemple <em>live</em> disponible</a>).</p>
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
   <td>{{SpecName('IndexedDB', '#widl-IDBTransaction-oncomplete', 'oncomplete')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des  navigateurs</h2>

<p>{{Compat("api.IDBTransaction.oncomplete")}}</p>

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
