---
title: IDBIndex.get()
slug: Web/API/IDBIndex/get
translation_of: Web/API/IDBIndex/get
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
<p>La méthode <strong><code>get()</code></strong> de l'interface {{domxref("IDBIndex")}} fait une requête ({{domxref("IDBRequest")}}) pour renvoyer le premier enregistrement correspondant à la clé ou l'intervalle de clé {{domxref("IDBKeyRange","")}} du magasin d'objet suivant l'index.</p>
</div>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var request = myIndex.get(key);</pre>

<h2 id="Paramètre">Paramètre</h2>

<dl>
 <dt><code>key</code></dt>
 <dd>la clé ou l'intervalle de clé ({{domxref("IDBKeyRange")}}) de l'enregistrement dont on cherche la valeur.</dd>
</dl>

<h2 id="Valeur_de_retour">Valeur de retour</h2>

<dl>
 <dt>Une requête ({{domxref("IDBRequest")}})</dt>
 <dd>La propriété "result" ({{domxref("IDBRequest.result")}}) de cette requête renvoie en cas de succès le premier enregistrement correspondant à la clé ou à l'intervalle de clé. Le résultat contient l'enregistrement { key: la clé, value: un_clone_structuré_de_la_valeur }.</dd>
</dl>

<h2 id="Exceptions">Exceptions</h2>

<dl>
 <dt><code>TransactionInactiveError</code></dt>
 <dd>Cette exception ( {{domxref("DOMException")}}) est levée si la transaction ({{domxref("IDBTransaction")}}) dont dépend l'accès ({{domxref("IDBObjectStore")}}) au magasin d'objet de cet index est inactive.</dd>
 <dt><code>DataError</code></dt>
 <dd>Cette exception ({{domxref("DOMException")}}) est levée si la clé ou l'intervalle de clé ({{domxref("IDBKeyRange")}}) est invalide.</dd>
 <dt><code>InvalidStateError</code></dt>
 <dd>Cette exception ({{domxref("DOMException")}}) est levée si l'index à été supprimé.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>Dans l'exemple suivant on ouvre une transaction puis un magasin d'objet et enfin l'index <code>lName</code>.</p>

<p>Le code <code>myIndex.get('Bungle')</code> renvoie une requête qui cherche sur l'index un enregistrement dont la clé <code>lName</code> est <code>Bungle</code>. En cas de sucés le résultat de la requête qui contient l'enregistrement est affiché sur la console.</p>

<p>Finalement, on itère sur tous les enregistrements pour en insérer les données dans un tableau HTML. En utilisant la méthode {{domxref("IDBIndex.openCursor")}} qui travaille de la même façon que la méthode {{domxref("IDBObjectStore.openCursor")}} de l'accès ({{domxref("IDBObjectStore")}}) au magasin d'objet sauf que les enregistrements sont renvoyés dans l'ordre de l'index et non celui du magasin d'objet.</p>

<pre class="brush:js">function displayDataByIndex() {
  tableEntry.innerHTML = '';

  //ouvre un transaction
  var transaction = db.transaction(['contactsList'], 'readonly');
  //accés au magasin d'objet
  var objectStore = transaction.objectStore('contactsList');

  //on récupère l'index
  var myIndex = objectStore.index('lName');
  //requête de recherche
  var getRequest = myIndex.get('Bungle');
  //en cas de succès
  getRequest.onsuccess = function() {
    console.log(getRequest.result);
  }

  //un curseur qui itère sur l'index
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
      console.log('Tous les enregistrements ont été affichés.');
    }
  };
};</pre>

<div class="note"><p><strong>Note :</strong> Pour un exemple de travail complet, voir notre <a href="https://github.com/mdn/to-do-notifications/">To-do Notifications</a> app (<a href="http://mdn.github.io/to-do-notifications/">view example live</a>).</p></div>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Ètat</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBIndex-get-IDBRequest-any-key', 'get()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité avec les navigateurs</h2>

<p>{{Compat("api.IDBIndex.get")}}</p>

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
