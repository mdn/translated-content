---
title: IDBObjectStore.createIndex()
slug: Web/API/IDBObjectStore/createIndex
translation_of: Web/API/IDBObjectStore/createIndex
---
<p>{{ APIRef("IndexedDB") }}</p>

<p>La méthode <strong><code>createIndex()</code></strong> de l'interface {{domxref("IDBObjectStore")}} met en place sur le magasin d'objet {{domxref("IDBObjectStore","relié")}} un nouvel index et en renvoie l'{{domxref("IDBIndex","accès")}}.</p>

<div class="note">
<p><strong>Note :</strong> Cette méthode ne peut être appelé que si la transaction de l'accès au magasin d'objet est en mode VersionChange.</p>
</div>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">objectStore.createIndex(nomIndex, nomCle, parametresIndexOptionnel);</pre>

<h2 id="Paramètres">Paramètres</h2>

<dl>
 <dt>nomIndex</dt>
 <dd>Le nom de l'index que l'on veut ajouter. Il est possible d'ajouter un index avec un nom vide.</dd>
 <dt>nomCle</dt>
 <dd>Le nom de clé qu'utilise l'index. Il est possible d'ajouter un index sans nom de clé.</dd>
 <dt>parametresIndexOptionnel {{optional_inline}}</dt>
 <dd>
 <p>Un objet optionnel pouvant inclure une ou plusieurs des propriétés suivantes:</p>

 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col">Propriété</th>
    <th scope="col">Description</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td><code>unique</code></td>
    <td>Si true, l'index empêcheras la duplication d'une clé.</td>
   </tr>
   <tr>
    <td><code>multiEntry</code></td>
    <td>Si true, l'index ajoutera une entrée pour chaque élément de tableau quand le nom de clé de clé est résolue. Si false, il ajoutera un seule entrée contenant le tableau.</td>
   </tr>
   <tr>
    <td><code>locale</code></td>
    <td>
     <p>Actuellement uniquement dans Firefox 43+ , cela vous permet de spécifier des paramètres de localisation pour l'index. Toutes les opérations de tri effectuées sur les données via des intervalle de clé obéirons aux règles locales de tri (voir <a href="/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB#Locale-aware_sorting">trie dans localisation courante</a>, en). Vous pouvez spécifier sa valeur de trois façons différentes:</p>

     <ul>
      <li><code>string</code>: une chaîne de caractère contenant le code de la localisation , par exemple 'fr' ou <code>'en-US'</code>.</li>
      <li><code>auto</code>: La localisation par défaut est utilisé (peut être régler par l'utilisateur).</li>
      <li><code>null or undefined</code>: Les règles de tri par défaut de javaScript seront utilisées.</li>
     </ul>
    </td>
   </tr>
  </tbody>
 </table>
 </dd>
</dl>

<h2 id="Renvoie">Renvoie</h2>

<p>L'{{domxref("IDBIndex","accès")}} au nouvel index.</p>

<h2 id="Exceptions">Exceptions</h2>

<dl>
 <dt><code>InvalidStateError</code></dt>
 <dd>Cette {{domxref("DOMException","exeption")}} si la {{domxref("IDBTransaction","transaction")}} dont dépend cet {{domxref("IDBObjectStore","accès")}} au magasin d'objet n'est pas en {{domxref("IDBTransaction.mode","mode")}} <code>versionchange</code>.</dd>
 <dt><code>TransactionInactiveError</code></dt>
 <dd>Cette {{domxref("DOMException","exeption")}} si la {{domxref("IDBTransaction","transaction")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d’objet est inactive.
 <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1176165">bug 1176165</a> ).
 </dd>
 <dt><code>ConstraintError</code></dt>
 <dd>Cette {{domxref("DOMException","exeption")}} si un index avec le même nom (case sensible) existe déjà sur le magasin d'objet.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>Dans l'exemple suivant on peut voir le gestionnaire d'événement {{domxref("IDBOpenDBRequest.onupgradeneeded","<code>onupgradeneeded</code>")}} être utilisé pour mètre à jour la structure de la base de donnée quand un numéro de version supérieur est chargé.</p>

<p>Des méthode <strong><code>createIndex()</code></strong> sont utilisées pour mètre en place différents index sur le magasin d'objet <code>toDoList</code>.</p>

<pre class="brush: js">var db;

// Requête d'ouverture de la base de données "toDoList"
var DBOpenRequest = window.indexedDB.open("toDoList", 4);

// Gère  l'échec de l'ouverture de la base
DBOpenRequest.onerror = function(event) {
  note.innerHTML += '&lt;li&gt;La base de donnée n\'as pas peut être ouverte.&lt;/li&gt;';
};

// Gère le succès de l'ouverture de la base
DBOpenRequest.onsuccess = function(event) {
  note.innerHTML += '&lt;li&gt;La base de données est ouverte.&lt;/li&gt;';

  //La connexion est affcté à la variable db.
  db = request.result;

  // Exécute une fonction d'affichage displayData()
  displayData();
};

// Ce gestionnaire d'événement nécessite  un nouveau numéro de version de la basse de données.
// Si la base n'existe pas un nouveau numéro de version est généré par la méthode d'ouverture de connexion window.indexDB.open .

DBOpenRequest.onupgradeneeded = function(event) {
  var db = event.target.result;

  db.onerror = function(event) {
    note.innerHTML += '&lt;li&gt;Erreur de chargement de la base de données.&lt;/li&gt;';
  };

  // L'Accès au magasin d'objet "toDoList" de la base de donnée
  var objectStore = db.createObjectStore("toDoList", { keyPath: "taskTitle" });

  // Met en place les index du magasin d'objet
  objectStore.createIndex("heures", "hours", { unique: false });
  objectStore.createIndex("minutes", "minutes", { unique: false });
  objectStore.createIndex("jour", "day", { unique: false });
  objectStore.createIndex("mois", "month", { unique: false });
  objectStore.createIndex("annee", "year", { unique: false });
  objectStore.createIndex("notifiee", "notified", { unique: false });
};
</pre>

<div class="note">
  <p><strong>Note :</strong> Pour un exemple de travail complet, voir notre <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>).</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBObjectStore-createIndex-IDBIndex-DOMString-name-DOMString-sequence-DOMString--keyPath-IDBIndexParameters-optionalParameters', 'createIndex()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité avec les navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.createIndex")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("IndexedDB_API.Using_IndexedDB","Utiliser IndexedDB")}}</li>
 <li>{{domxref("IDBDatabase","Débuter une connexion")}}</li>
 <li>{{domxref("IDBTransaction","Utilisé les transactions")}}</li>
 <li>{{domxref("IDBKeyRange","Définir l'intervalle des clés")}}</li>
 <li>{{domxref("IDBObjectStore","Accès aux magasins d'objets")}}</li>
 <li>{{domxref("IDBCursor","Utiliser les curseur")}}</li>
 <li>Exemple de référence: <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>.)</li>
</ul>
