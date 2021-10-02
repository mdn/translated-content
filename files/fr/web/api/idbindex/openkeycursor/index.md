---
title: IDBIndex.openKeyCursor()
slug: Web/API/IDBIndex/openKeyCursor
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Méthode
  - Reference
  - openKeyCursor
translation_of: Web/API/IDBIndex/openKeyCursor
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>openKeyCursor()</code></strong> de {{domxref("IDBIndex")}} renvoie un objet {{domxref("IDBRequest")}} et, dans un <em>thread</em> séparé, crée un curseur sur l'intervalle de clé passé en argument pour l'index courant.</p>

<p>Cette méthode positionne le curseur sur la clé appropriée, dans la direction indiquée :</p>

<ul>
 <li>si l'intervalle de clé n'est pas défini ou s'il est nul, l'intervalle englobera l'ensemble des clés</li>
 <li>si au moins une clé correspond à l'intervalle de clés, un évènement <code>success</code> est déclenché pour la requête qui est renvoyée. La propriété <code>result</code> de cet évènement contiendra un objet {{domxref("IDBCursor")}} dont la propriété <code>value</code> correspond à l'enregistrement qui a été traduit.</li>
 <li>Si aucun intervalle ne correspond à l'intervalle indiqué, un évènement <code>error</code> est déclenché pour la requête.</li>
</ul>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var monIndex = objectStore.index("index");
var request = monIndex.openKeyCursor(keyRange,direction);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>keyRange</code> {{optional_inline}}</dt>
 <dd>L'{{domxref("IDBKeyRange","intervalle de clé")}} sur lequel se déplace le curseur. On peut passer un clé seule qui sera alors considéré comme une {{domxref("IDBKeyRange.only","intervalle seule")}}. Par défaut le curseur se déplace sur l'ensemble des clés de l'index.</dd>
 <dt><code>direction</code> {{optional_inline}}</dt>
 <dd>La {{domxref("IDBCursor.direction","direction")}} du {{domxref("IDBCursor","curseur")}} qui défini le sens d'itération. par défaut "next".</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBRequest")}} sur lequel on peut écouter les évènements associés à l'opération lancée par la méthode.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut lever une exception :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Type d'exception</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>TransactionInactiveError</td>
   <td>La transaction pour cet index {{domxref("IDBIndex")}} est inactive.</td>
  </tr>
  <tr>
   <td><code>TypeError</code></td>
   <td>La valeur du paramètre pour la direction est invalide.</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>
    <p>La clé ou l'intervalle de clé fourni contient une clé invalide.</p>
   </td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>L'index {{domxref("IDBIndex")}} a été supprimé ou déplacé.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemple">Exemple</h2>

<p>Dans l'exemple suivant on ouvre une transaction puis un magasin d'objet et enfin l'index <code>lName</code>.</p>

<p>Ensuite, on itère sur l'ensemble des enregistrements pour en insérer leur clé dans un tableau HTML. En utilisant la méthode {{domxref("IDBIndex.openKeyCursor")}} qui travaille de la même façon que la méthode {{domxref("IDBObjectStore.openKeyCursor")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d'objet sauf que les enregistrements sont renvoyés dans l'ordre de l'index et non celui du magasin d'objet.</p>

<pre class="brush:js">function displayDataByIndex() {
  tableEntry.innerHTML = '';

  //ouvre un transaction
  var transaction = db.transaction(['contactsList'], 'readonly');
  //accés au magasin d'objet
  var objectStore = transaction.objectStore('contactsList');

  //on récupère l'index
  var myIndex = objectStore.index('lName');

  //un curseur qui itère sur l'index
  var request = myIndex.openCursor();
  request.onsuccess = function(event) {
    var cursor = request.result;
    if(cursor) {


      // cursor.key la clé de l'enregistrement à la position du curseur
      // il n'y as pas de cursor.value contrairement à openCursor()

      var tableRow = document.createElement('tr');
      tableRow.innerHTML =   '&lt;td&gt;' + cursor.key + '&lt;/td&gt;'
      tableEntry.appendChild(tableRow);

      //on relance la requête pour la position suivante du curseur
      cursor.continue();
    } else {
      console.log('Toutes les clé ont été affichés.');
    }
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
   <td>{{SpecName('IndexedDB', '#widl-IDBIndex-openKeyCursor-IDBRequest-any-range-IDBCursorDirection-direction', 'openKeyCursor()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.IDBIndex.openKeyCursor")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB">Utiliser IndexedDB</a></li>
 <li>Initier une connexion : {{domxref("IDBDatabase")}}</li>
 <li>Utiliser les transactions : {{domxref("IDBTransaction")}}</li>
 <li>Définir un intervalle de clés : {{domxref("IDBKeyRange")}}</li>
 <li>Récupérer et modifier les données : {{domxref("IDBObjectStore")}}</li>
 <li>Utiliser les curseurs {{domxref("IDBCursor")}}</li>
</ul>
