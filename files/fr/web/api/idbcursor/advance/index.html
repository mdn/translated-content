---
title: IDBCursor.advance()
slug: Web/API/IDBCursor/advance
tags:
  - API
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBCursor/advance
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>advance()</code></strong> de l'interface {{domxref("IDBCursor")}} définit le nombre d'itérations du curseur avec lequel celui-ci doit se déplacer vers l'avant.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">cursor.advance(count);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>count</code></dt>
 <dd>Le nombre d'itérations du curseur.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Aucune.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut déclencher des exceptions  {{domxref("DOMException")}} :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Exception</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>TransactionInactiveError</code></td>
   <td>Cette transaction IDBCursor est inactive.</td>
  </tr>
  <tr>
   <td><code>TypeError</code></td>
   <td>La valeur passée au paramètre <code>count</code> vaut zéro ou est négative.</td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>Le curseur est en itération ou a itéré au-delà de la plage.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemple">Exemple</h2>

<p>Dans ce petit morceau de code on fait une transaction, récupère un magasin d'objet, puis utilise un curseur pour itérer sur les enregistrements du magasin. Ici, on utilise <code>cursor.advance(2)</code> pour avancer de 2 cases à chaque fois, ce qui signifie que seule la moitié des résultats sera affichée. <code>advance()</code>fonctionne de façon similaire à {{domxref ("IDBCursor.continue")}} mais permet de sauter plusieurs enregistrements à la fois et pas uniquement d'accéder à l'enregistrement suivant.</p>

<p>On notera également que, dans chaque itération de la boucle, on peut  récupérer les données de l'enregistrement en cours grâce à l'objet curseur via <code>curseur.value.foo</code>. Pour un exemple fonctionnel complet, voir <a href="https://github.com/mdn/IDBcursor-example/">notre exemple IDBCursor</a> (<a href="https://mdn.github.io/IDBcursor-example/">l'exemple en <em>live</em></a>).</p>

<pre class="brush: js">function advanceResult() {
  list.innerHTML = '';
  var transaction = db.transaction(['granListAlbum'], "readonly");
  var objectStore = transaction.objectStore('granListAlbum');

  objectStore.openCursor().onsuccess = function(event) {
    var curseur = event.target.result;
    if(curseur) {
      var listItem = document.createElement('li');
      listItem.innerHTML = '<strong>' + curseur.value.titreAlbum + '</strong>, ' + curseur.value.annee;
      list.appendChild(listItem);
      curseur.advance(2);
    } else {
      console.log('moitié des resultats affichée');
    }
  };
};</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBCursor-advance-void-unsigned-long-count', 'advance()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBCursor.advance")}}</p>

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
