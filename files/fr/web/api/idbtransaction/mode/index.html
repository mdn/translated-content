---
title: IDBTransaction.mode
slug: Web/API/IDBTransaction/mode
tags:
  - API
  - IDBTransaction
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBTransaction/mode
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>mode</code></strong> de l'interface {{domxref("IDBTransaction")}} renvoie le mode d'accès aux données des magasins d'objet pendant la transaction (autrement dit, s'agit-il d'une transaction en lecture seule ou d'un accès en écriture ?). La valeur par défaut est <code>readonly</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>modeCourant</em> = <em>IDBTransaction</em>.mode;</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un objet {{domxref("IDBTransactionMode")}} qui définit le mode d'accès aux données des magasins d'objet :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Valeur</th>
   <th scope="col">Signification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>readonly</code></td>
   <td>Lecture seule : on peut lire (consulter) les données mais on ne peut pas les modifier.</td>
  </tr>
  <tr>
   <td><code>readwrite</code></td>
   <td>Lecture et écriture : on peut lire et écrire (modifier) des données dans les magasins d'objet.</td>
  </tr>
  <tr>
   <td><code>versionchange</code></td>
   <td>Toutes les opérations peuvent être effectuées, y compris celles qui suppriment ou créent des magasins d'objets et des index. Ce mode doit être utilisé lorsqu'on souhaite mettre à jour le numéro de version pour les transactions qui démarrent avec {{domxref("IDBDatabase.setVersion()")}}. Les transactions effectuées dans ce mode ne peuvent pas être exécutées de façon concurrente avec les autres transactions. Les transactions effectuées dans ce mode sont parfois appelées transactions de mise à jour (<em>upgrade transactions</em>).</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans le fragment de code suivant, on ouvre une transaction en lecture/écriture sur la base de données et on ajoute des données au magasin d'objets. On notera que les fonctions attachées aux gestionnaires d'évènement de la transaction permettent de rapporter des informations en cas de succès ou d'échec de la transaction. Enfin, on affiche le mode de la transaction dans la console grâce à la propriété <code>mode</code>. Pour un exemple complet, se référer à l'<a href="https://github.com/mdn/to-do-notifications/">exemple d'application To-do</a> (cf. <a href="https://mdn.github.io/to-do-notifications/">la démonstration</a>).</p>

<pre class="brush: js">// On ouvre la base de données
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;Initialisation de la base de données.&lt;/li&gt;';

  // On enregistre le résultat de l'ouverture dans la variable
  // db utilisée ensuite.
  var db = DBOpenRequest.result;

  // On utilise la fonction addData() afin d'ajouter des données
  // dans la base de données
  addData();
};

function addData() {
  // On crée un nouvel objet prêt à être inséré dans la base
  // de données
  var newItem = [ { taskTitle: "Walk dog", hours: 19, minutes: 30, day: 24, month: "December", year: 2013, notified: "no" } ];

  // On ouvre une transaction en lecture/écriture afin d'ajouter
  // des données
  var transaction = db.transaction(["toDoList"], "readwrite");

  // On gère le succès ou l'échec de la transaction
  transaction.oncomplete = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction terminée : modifications appliquées.&lt;/li&gt;';
  };

  transaction.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Transaction non-ouverte à cause d'une erreur (duplication d'objet interdite).&lt;/li&gt;';
  };

  // On crée un magasin d'objets pour la transaction
  var objectStore = transaction.objectStore("toDoList");

  // On ajoute l'objet newItem dans le magasin d'objets
  var objectStoreRequest = objectStore.add(newItem[0]);

  objectStoreRequest.onsuccess = function(event) {
    // On indique le succès de l'opération pour ajouter
    // l'objet dans la base de données
    note.innerHTML += '&lt;li&gt;Nouvel objet ajouté à la base de données.&lt;/li&gt;';
  };

  // On renvoie le mode de la transaction qui était ouverte
  // (ce devrait être "readwrite")
  transaction.mode;
};</pre>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBTransaction-mode', 'mode')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBTransaction.mode")}}</p>

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
