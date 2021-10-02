---
title: IDBObjectStore.index()
slug: Web/API/IDBObjectStore/index
tags:
  - API
  - IDBObjectStore
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBObjectStore/index
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>index()</code></strong>, rattachée à l'interface {{domxref("IDBObjectStore")}}, permet d'ouvrir un index sur le magasin d'objet courant pour, par exemple, renvoyer une liste d'enregistrements triés par cet index grâce à un curseur.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">objectStore.index(nomIndex);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>nomIndex</code></dt>
 <dd>Le nom de l'index qu'on souhaite ouvrir.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet {{domxref("IDBIndex")}} qui permet d'accéder à l'index.</p>

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
   <td>L'objet correspondant au magasin d'objet a été supprimé ou la transaction a été clôturée.</td>
  </tr>
  <tr>
   <td><code>NotFoundError</code></td>
   <td>Il n'existe pas d'index pour ce nom dans la base de données (la recherche est sensible à la casse).</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on ouvre une transaction sur un magasin d'objet et on accède à l'index <code>lName</code> de la base de données. Ensuite, on ouvre un curseur sur l'index grâce à la méthode {{domxref("IDBIndex.openCursor")}} — cela fonctionne de la même façon que d'ouvrir un curseur à même le magasin d'objet grâce à {{domxref("IDBObjectStore.openCursor")}} sauf que, cette fois, les enregistrements sont renvoyés triés selon l'index et non selon la clé primaire.</p>

<p>Enfin, on parcourt chaque enregistrement pour l'ajouter dans un tableau HTML.</p>

<pre class="brush: js">function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
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

<div class="note">
<p><strong>Note :</strong> pour un exemple fonctionnel complet, voir notre <a href="https://github.com/mdn/IDBIndex-example">exemple sur GitHub</a> (<a href="https://mdn.github.io/IDBIndex-example/">la démonstration associée</a>).</p>
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
   <td>{{SpecName('IndexedDB', '#widl-IDBObjectStore-index-IDBIndex-DOMString-name', 'index()')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBObjectStore.index")}}</p>

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
