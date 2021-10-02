---
title: IDBCursor.continue()
slug: Web/API/IDBCursor/continue
tags:
  - API
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBCursor/continue
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>continue()</code></strong> de l'interface {{domxref("IDBCursor")}} fait avancer le curseur jusqu'à la prochaine position qui corrrespond à une clé donnée si celle-ci est passée en paramètre, si aucune clé n'est indiquée, le curseur avancera à la position qui suit immédiatement la position actuelle (dans la direction de progression du curseur).</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">curseur.continue(<em>cléOptionnelle</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code><em>cléOptionnelle</em></code></dt>
 <dd>La clé sur laquelle se positionne le curseur.</dd>
</dl>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut déclencher des exceptions  {{domxref("DOMException")}} de type :</p>

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
   <td>La transaction de l'IDBCursor est inactive.</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>
    <p>Le paramètre <code><em>cléOptionnelle</em></code> peut:</p>

    <ul>
     <li>Être invalide.</li>
     <li>Être inférieur ou égal à la position de ce curseur et la direction du curseur <code>next</code> ou <code>nextunique</code>.</li>
     <li>Être supérieur ou égal à la position de ce curseur et la direction de ce curseur <code>prev</code> ou <code>prevunique</code>.</li>
    </ul>
   </td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>Le curseur est en itération ou il a itéré au-delà de la plage.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemple">Exemple</h2>

<p>Dans ce petit morceau de code, on fait une transaction, on récupère un magasin d'objet, puis on utilise un curseur afin d'itérer sur les enregistrements contenus dans le magasin. Il n'est pas nécessaire de sélectionner les données selon une clé, on peut simplement toutes les récupérer. On notera qu'à chaque itération de la boucle, on récupère les données correspondantes à l'enregistrement grâce au curseur sous la forme <code>curseur.value.toto</code>. Pour étudier un exemple de travail complet, voir <a href="https://github.com/mdn/IDBcursor-example/">notre exemple IDBCursor</a> (<a href="https://mdn.github.io/IDBcursor-example/">voir l'exemple live</a>).</p>

<pre class="brush: js">function afficheDonnee() {
  var transaction = db.transaction(['granListAlbum'], "readonly");
  var objectStore = transaction.objectStore('granListAlbum');

  objectStore.openCursor().onsuccess = function(event) {
    var curseur = event.target.result;
    if(curseur) {
      var listItem = document.createElement('li');
      listItem.innerHTML = curseur.value.titreAlbum + ', ' + curseur.value.annee;
      list.appendChild(listItem);

      curseur.continue();
    } else {
      console.log('Entrées toutes affichés.');
    }
  };
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
   <td>{{SpecName('IndexedDB', '#widl-IDBCursor-continue-void-any-key', 'continue()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBCursor.continue")}}</p>

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
