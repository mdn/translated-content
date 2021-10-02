---
title: IDBObjectStore.openCursor()
slug: Web/API/IDBObjectStore/openCursor
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBObjectStore/openCursor
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>openCursor()</code></strong>, rattachée à l'interface {{domxref("IDBObjectStore")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un <em>thread</em> séparé, renvoie un nouvel objet {{domxref("IDBCursorWithValue")}} qu'on peut utiliser pour parcourir un magasin d'objets avec un curseur.</p>

<p>Afin de déterminer si l'opération s'est déroulée correctement, on pourra surveiller l'évènement <code>success</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var requete = ObjectStore.openCursor(optionalKeyRange, optionalDirection);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>range</code> {{optional_inline}}</dt>
 <dd>Une clé ou un intervalle de clés ({{domxref("IDBKeyRange")}}) qu'on souhaite parcourir. Si une seule clé est passée en argument, l'intervalle utilisé pour le curseur sera restreint à cette seule clé. Si aucune valeur n'est passée pour cet argument, l'intervalle utilisé pour le curseur englobera tous les enregistrements du magasin d'objets.</dd>
 <dt><code>direction</code> {{optional_inline}}</dt>
 <dd>Un objet {{domxref("IDBCursorDirection")}} qui indique la direction de parcours du curseur. La valeur par défaut est <code>"next"</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBRequest")}} sur lequel seront déclenchés les évènements relatifs à l'opération.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut déclencher une exception {{domxref("DOMException")}} ayant l'un des types suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Exception</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>L'objet {{domxref("IDBObjectStore")}} ou l'objet {{domxref("IDBIndex")}} a été supprimé.</td>
  </tr>
  <tr>
   <td><code>TransactionInactiveError</code></td>
   <td>La transaction rattachée au magasin d'objets ({{domxref("IDBObjectStore")}}) est inactive.</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>La clé ou l'intervalle de clés indiqué est invalide.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans ce fragment de code, on crée une transaction, on ouvre le magasin d'objets souhaité puis on place un curseur pour parcourir tous les enregistrements du magasin d'objets :</p>

<pre class="brush: js">var transaction = db.transaction("name", "readonly");
var objectStore = transaction.objectStore("name");
var request = objectStore.openCursor();
request.onsuccess = function(event) {
  var cursor = event.target.result;
  if(cursor) {
    // cursor.value contient l'enregistrement courant
    // pendant le parcours, on peut éventuellement le manipuler ici
    cursor.continue();
  } else {
    // il n'y a plus de résultats
  }
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
   <td>{{SpecName('IndexedDB', '#widl-IDBIndex-openCursor-IDBRequest-any-range-IDBCursorDirection-direction', 'openCursor')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.openCursor")}}</p>

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
