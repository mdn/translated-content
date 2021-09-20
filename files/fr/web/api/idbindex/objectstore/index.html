---
title: IDBIndex.objectStore
slug: Web/API/IDBIndex/objectStore
translation_of: Web/API/IDBIndex/objectStore
---
<p>{{ APIRef("IndexedDB") }}</p>

<div>
<p>La propriètè <strong><code>objectStore</code></strong> de l'interface {{domxref("IDBIndex")}} renvoie un accès au magasin d'objet que référence l'index.</p>

<p>{{AvailableInWorkers}}</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var indexObjectStore = myIndex.objectStore;</pre>

<h2 id="Valeur">Valeur</h2>

<p>Un {{ domxref("IDBObjectStore","accès au magasin d'objet") }}.</p>

<h2 id="Example">Example</h2>

<p>Dans l'exemple suivant on ouvre une transaction puis un magasin d'objet et enfin l'index <code>lName</code>.</p>

<p>Le magasin d'objet référencé par l'index est afficher sur la console, quelque chose ressemblant à:</p>

<pre>IDBObjectStore { name: "contactsList", keyPath: "id", indexNames: DOMStringList[7], transaction: IDBTransaction, autoIncrement: false }</pre>

<p>Finalement, On itère sur tous les enregistrements pour en insérer les données dans un tableau HTML. En utilisant la méthode {{domxref("IDBIndex.openCursor")}} qui travaille de la même façon que la méthode {{domxref("IDBObjectStore.openCursor")}} de l'{{domxref("IDBObjectStore","accès")}} au magasin d'objet sauf que les enregistrements sont renvoyés dans l'ordre de l'index et non celui du magasin d'objet.</p>

<pre class="brush:js">function displayDataByIndex() {
  tableEntry.innerHTML = '';

  //ouvre un transaction
  var transaction = db.transaction(['contactsList'], 'readonly');
  //accés au magasin d'objet
  var objectStore = transaction.objectStore('contactsList');

  //on récupère l'index
  var myIndex = objectStore.index('lName');
  //on affiche le magasin d'objet référencé locale sur la console
  console.log(myIndex.objectStore);

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
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBIndex-objectStore', 'objectStore')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBIndex.objectStore")}}</p>

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
