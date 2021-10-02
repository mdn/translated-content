---
title: IDBIndex.count()
slug: Web/API/IDBIndex/count
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBIndex/count
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>count()</code></strong>, rattachée à l'interface {{domxref("IDBIndex")}}, renvoie un objet {{domxref("IDBRequest")}} et, dans un <em>thread</em> séparé, renvoie le nombre d'enregistrements contenu dans un intervalle de clé.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>request</em> = <em>monIndex</em>.count();
var <em>request</em> = <em>monIndex</em>.count(<em>cle</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>cle</code> {{optional_inline}}</dt>
 <dd>La clé ou l'intervalle de clé qui définit les enregistrements qu'on souhaite compter.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBRequest")}} sur lequel seront déclenchés les différents évènements relatifs à l'opération.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut déclencher différents types d'exceptions :</p>

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
   <td>La transaction associée à cet index est inactive.</td>
  </tr>
  <tr>
   <td><code>DataError</code></td>
   <td>
    <p>La clé ou l'intervalle de clé fourni possède une clé invalide.</p>
   </td>
  </tr>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>L'index a été supprimé ou retiré.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on ouvre une transaction et un magasin d'objets puis on récupère l'index <code>lName</code> depuis une base de données de contacts. Ensuite, on ouvre un curseur simple sur cet index grâce à la méthode {{domxref("IDBIndex.openCursor")}} (ce qui fonctionne comme si on ouvrait un curseur sur le magasin d'objets avec {{domxref("IDBObjectStore.openCursor")}} sauf que les enregistrements sont ici triés selon l'index plutôt que selon la clé primaire).</p>

<p><code>myIndex.count()</code> est alors utilisé afin de compter le nombre d'enregistrements dans l'index et le résultat de la requête est affiché dans la console au travers du gestionnaire d'évènements pour la réussite (<code>onsuccess</code>).</p>

<p>Efin, on parcourt chaque enregistrement pour l'insérer dans un tableau HTML. Pour consulter un exemple fonctionnel complet, vous pouvez vous référer à notre dépôt <a href="https://github.com/mdn/IDBIndex-example">IDBIndex-example</a> (<a href="https://mdn.github.io/IDBIndex-example/">cf. la démonstration <em>live</em></a>).</p>

<pre class="brush: js">function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  var countRequest = myIndex.count();
  countRequest.onsuccess = function() {
    console.log(countRequest.result);
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
      console.log('Éléments affichés.');
    }
  };
};</pre>

<h2 id="Spécifications">Spécifications</h2>

<dl>
</dl>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBIndex-count-IDBRequest-any-key', 'count()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("IndexedDB 2", "#dom-idbindex-count", "count()")}}</td>
   <td>{{Spec2("IndexedDB 2")}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBIndex.count")}}</p>

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
