---
title: IDBObjectStore.add()
slug: Web/API/IDBObjectStore/add
translation_of: Web/API/IDBObjectStore/add
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>add()</code></strong>, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un <em>thread</em> séparé, crée un <a href="https://www.whatwg.org/specs/web-apps/current-work/multipage/common-dom-interfaces.html#structured-clone">clone structurel</a> de la valeur et stocke la valeur clonée dans le magasin d'objet. Cette méthode permet d'ajouter de nouveaux enregistrements dans un magasin d'objet.</p>

<p>Afin de déterminer si l'opération <code>add</code> s'est effectuée correctement, on pourra écouter l'évènement <code>complete</code> de la transaction et l'évènement <code>success</code> de la requête <code>IDBObjectStore.add</code> car la transaction peut échouer après le déclenchement de l'évènement <code>success</code>. Autremnt dit, l'évènement <code>success</code> est uniquement déclenché au moment où la transaction a été mise dans la file.</p>

<p>La méthode <code>add</code> ne permet que d'insérer des objets. Si un enregistrement existe déjà dans le magasin d'objet pour la clé fournie en argument, un évènement <code>ConstrainError</code> sera déclenché via l'objet {{domxref("IDBRequest")}}. Si on souhaite mettre à jour des enregistrements existants, on utilisera plutôt la méthode {{domxref("IDBObjectStore.put")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var request = objectStore.add(valeur, clé);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeur</code></dt>
 <dd>La valeur à ajouter au magasin.</dd>
 <dt><code>clé</code></dt>
 <dd>La clé qu'on souhaite utiliser pour identifier l'enregistrement. Si elle n'est pas indiquée, la valeur par défaut sera <code>null</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBRequest")}} qui émettra les différents évènements relatifs à l'opération.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut lever une exception {{domxref("DOMException")}} ayant l'un des types suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Exception</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>ReadOnlyError</code></td>
   <td>La transaction associée à cette opération est en lecture seule.</td>
  </tr>
  <tr>
   <td><code>TransactionInactiveError</code></td>
   <td>La transaction pour cet objet  {{domxref("IDBObjectStore")}} est inactive.</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>
    <p>Un des conditions suivantes est vérifiée :</p>

    <ul>
     <li>Le magasin d'objet utilise des clés en ligne ou possède un générateur de clés et une clé a été fournie dans la fonction.</li>
     <li>Le magasin d'objet utilise des clés hors lignes et et n'a pas de générateur de clés et aucune clé n'a été fournie dans la fonction.</li>
     <li>Le magasin d'objet utilise des clés en ligne mais ne possède pas de générateur de clés et le chemin de clé utilisé par le magasin ne pointe pas vers une clé valide.</li>
     <li>La clé a été fournie à la fonction mais ce paramètre n'est pas une clé valide.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>L'objet {{domxref("IDBObjectStore")}} a été supprimé ou déplacé.</td>
  </tr>
  <tr>
   <td><code>DataCloneError</code></td>
   <td>La donnée qui devait être enregistrée n'a pas pu être clonée par l'algorithme de clonage interne.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans le fragment de code suivant, on ouvre une transaction en lecture/écriture vers la base de données et on ajoute des données au magasin d'objet grâce à la méthode <code>add()</code>. On notera également les fonctions rattachées à la transaction qui sont utilisées comme gestionnaires d'évènement et qui permettent de savoir si la transaction a réussi ou échoué.</p>

<pre class="brush: js">// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Database initialisée.&lt;/li&gt;';

  // On enregistre le résultat dans la variable db
  // afin de l'utiliser par la suite
  var db = DBOpenRequest.result;

  // On utilise la fonction addData() afin d'ajouter
  // des données dans la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet qu'on insèrera ensuite
  // dans la base de données
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture
  // afin d'ajouter les données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On indique si la transaction s'est déroulées
  // sans problème
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modification effectuée.&lt;/li&gt;';
  };


  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Ouverture de la transaction impossible : les objets dupliqués ne sont pas autorisés.&lt;/li&gt;';
  };

  // On crée un magasin d'objets pour la transaction
  var objectStore = transaction.objectStore("toDoList");

  // On ajoute l'objet newItem dans le magasin d'objets
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On indique la réussite de l'insertion
    note.innerHTML += '&lt;li&gt;Nouvel objet ajouté dans la base de données.&lt;/li&gt;';
  };
};</pre>

<div class="note">
<p><strong>Note :</strong> pour un exemple fonctionnel complet, voir notre <a href="https://github.com/mdn/to-do-notifications/">application To-do</a> (<a href="https://mdn.github.io/to-do-notifications/">exemple</a>).</p>
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
   <td>{{SpecName('IndexedDB', '#widl-IDBObjectStore-add-IDBRequest-any-value-any-key', 'add()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.add")}}</p>

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
