---
title: IDBTransaction.objectStore()
slug: Web/API/IDBTransaction/objectStore
tags:
  - API
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBTransaction/objectStore
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>objectStore()</code></strong>, rattachée à l'interface {{domxref("IDBTransaction")}}, renvoie l'accès à un des magasins d'objets liés à la transation sous la forme d'un objet {{domxref("IDBObjectStore")}}.</p>

<p>Si cette méthode est appelée plusieurs fois sur la même transaction et avec le même nom de magasin, elle renverra la même instance de  {{domxref("IDBObjectStore")}}. Si cette méthode est appelée sur une autre transaction, elle renverra une instance différente.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var objectStore = transaction.objectStore(nom);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>nom</code></dt>
 <dd>Le nom du magasin d'objets auquel on veut accéder.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBObjectStore")}} qui permet d'accéder au magasin d'objets.</p>

<h2 id="Exceptions">Exceptions</h2>

<dl>
 <dt><code>NotFoundError</code></dt>
 <dd>Cette exception {{domxref("DOMException")}} est levée si le magasin d'objets demandé n'a pas été trouvé sur la transaction.</dd>
 <dt><code>InvalidStateError</code></dt>
 <dd>Cette exception {{domxref("DOMException")}} est levée si la transaction est terminée ou si la demande a été faite sur un objet source qui a été supprimé ou retiré.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>Dans le code qui suit, on ouvre une connexion à la base de données. Sur cette connexion, on démarre une transaction (cf.  {{domxref("IDBTransaction")}}) en lecture/écriture afin d'accéder au magasin d'objets <code>"toDoList"</code> pour y ajouter un enregistrement (via la méthode {{domxref("IDBObjectStore.add")}}). On notera également l'utilisation des gestionnaires d'événement {{domxref("IDBTransaction.oncomplete")}} et {{domxref("IDBTransaction.onerror")}} de la transaction qui permettent d'afficher la résultat de la transaction sur la page.</p>

<p>La méthode <strong><code>objectStore()</code></strong> permet d'accéder au magasin d'objets <code>"toDoList"</code>.</p>

<pre class="brush: js">// Connexion à la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Connexion établie.&lt;/li&gt;';

  // On affecte la connexion à la variable db.
  db = DBOpenRequest.result;

  // On exécute la fonction addData() pour
  // ajouter des données dans la base
  addData();
};

function addData() {
  // Un nouvel objet prêt à être emmagasiné
  newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // pour le traitement des données sur la connexion
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On utilise oncomplete en cas de succès de
  // l'ouverture de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modification de la base de données OK.&lt;/li&gt;';
  };

  // En cas d'échec de l'ouverture, on utilisera
  // le gestionnaire onerror
  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;L\'erreur: "' + transaction.error +'" s\'est produite, échec de la transaction.&lt;/li&gt;';
  };

  // On ouvre un magasin d'objets sur la transaction
  // grâce à la méthode objectStore
  var objectStore = transaction.objectStore("toDoList");

  // Enfin, on ajoute un enregistrement
  var objectStoreRequest = objectStore.add(newItem[0]);
  objectStoreRequest.onsuccess = function(event) {
    // et on signale l'ajout de l'enregistrement
    note.innerHTML += '&lt;li&gt;Enregistrement ajouté.&lt;/li&gt;';
  };
};
</pre>

<div class="note">
  <p><strong>Note :</strong> Pour un exemple fonctionnel complet, voir notre application <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">l'exemple <em>live</em> est disponible ici</a>).</p>
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
   <td>{{SpecName('IndexedDB', '#widl-IDBTransaction-objectStore-IDBObjectStore-DOMString-name', 'objectStore()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBTransaction.objectStore")}}</p>

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
