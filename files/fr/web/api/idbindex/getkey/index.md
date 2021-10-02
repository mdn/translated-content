---
title: IDBIndex.getKey()
slug: Web/API/IDBIndex/getKey
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBIndex/getKey
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>getKey()</code></strong>, rattachée à l'interface {{domxref("IDBIndex")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un <em>thread</em> séparé, récupère la clé associée ou la clé primaire si l'argument passé à la fonction est un intervalle {{domxref("IDBKeyRange")}}.</p>

<p>Si la méthode trouve une clé, ce sera alors la propriété <code>result</code> de la requête renvoyée. Seule la clé primaire de l'enregistrement est renvoyée (pour obtenir l'ensemble de l'enregistrement, on utilisera {{domxref("IDBIndex.get")}}).</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var myIndex = objectStore.index('index');
var request = myIndex.getKey(key);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>key</code> {{optional_inline}}</dt>
 <dd>Une clé ou un intervalle {{domxref("IDBKeyRange")}} qui identifie l'enregistrement dont on souhaite obtenir la clé. Si la valeur vaut {{jsxref("null")}} ou si elle est absente, le navigateur utilisera un intervalle de clé sans limite.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBRequest")}} qui recevra les différents évènements relatifs à l'opération qui est déclenchée.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut déclencher une exception. Celle-ci peut avoir l'un des types suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Exception</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>TransactionInactiveError</td>
   <td>La transaction rattachée à cet <code>IDBIndex</code> est inactive.</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>
    <p>La clé ou l'intervalle de clés qui est fourni contient une clé invalide.</p>
   </td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>L'index a été supprimé ou déplacé.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on ouvre une transaction et un magasin d'objets. Ensuite on récupère l'index <code>lName</code> sur cette base de donnée. On ouvre alors un curseur sur l'index grâce à la méthode {{domxref("IDBIndex.openCursor")}} (cela fonctionne de la même façon que {{domxref("IDBObjectStore.openCursor")}} sauf que les enregistrements sont triés selon l'index et pas selon la clé primaire).</p>

<p><code>myIndex.getKey('Bungle')</code> est ensuite utilisé afin d'obtenir la clé primaire de l'enregistrement pour lequel <code>lName</code> vaut <code>Bungle</code>. Le résultat de cette requête est imprimé dans la console lorsque la fonction de rappel (<em>callback</em>) de succès est déclenché.</p>

<p>Enfin, on parcourt les enregistrements pour remplir un tableau HTML. Le dépôt <a href="https://github.com/mdn/IDBIndex-example">IDBIndex-example </a>contient un exemple complet (<a href="https://mdn.github.io/IDBIndex-example/">ainsi qu'une démonstration</a>).</p>

<pre class="brush: js">function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');
  var myIndex = objectStore.index('lName');
  var getKeyRequest = myIndex.getKey('Bungle');
  getKeyRequest.onsuccess = function() {
    console.log(getKeyRequest.result);
  }

  myIndex.openCursor().onsuccess = function(event) {
    var cursor = event.target.result;
    if(cursor) {
      var tableRow = document.createElement('tr');
      tableRow.innerHTML =   '&lt;td&gt;' + cursor.value.id + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.lName + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.fName + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.jTitle + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.company + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.eMail + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.phone + '&lt;/td&gt;'
                           + '&lt;td&gt;' + cursor.value.age + '&lt;/td&gt;';
      tableEntry.appendChild(tableRow);

      cursor.continue();
    } else {
      console.log('Les éléments sont affichés.');
    }
  };
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
   <td>{{SpecName('IndexedDB', '#widl-IDBIndex-getKey-IDBRequest-any-key', 'getKey()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBIndex.getKey")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB">Utiliser IndexedDB</a></li>
 <li>Initier une connexion : {{domxref("IDBDatabase")}}</li>
 <li>Utiliser les transactions : {{domxref("IDBTransaction")}}</li>
 <li>Définir un intervalle de clés : {{domxref("IDBKeyRange")}}</li>
 <li>Récupérer et modifier les données : {{domxref("IDBObjectStore")}}</li>
 <li>Utiliser les curseurs {{domxref("IDBCursor")}}</li>
 <li>L'exemple de référence : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">notifications de trucs à faire</a> (<a href="https://mdn.github.io/to-do-notifications/">voir la démonstration</a>)</li>
</ul>
