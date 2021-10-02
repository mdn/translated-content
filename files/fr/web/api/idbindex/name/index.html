---
title: IDBIndex.name
slug: Web/API/IDBIndex/name
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBIndex/name
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>name</code></strong>, rattachée à l'interface {{domxref("IDBIndex")}}, contient une chaîne de caractères qui permet de désigner l'index courant.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>indexName</em> = <em>IDBIndex</em>.name;
<em>IDBIndex</em>.name = <em>indexName</em>;</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une chaîne de caractères qui fournit le nom à l'index.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Différentes exceptions peuvent être déclenchées lorsqu'on souhaite modifier le nom d'un index.</p>

<dl>
 <dt><code>InvalidStateError</code></dt>
 <dd>L'index ou le magasin d'objets a été supprimé ou la transaction courante n'est pas une transaction de montée de niveau. Le renommage des index est uniquement possible lors des transactions de montée de niveau (c'est-à-dire quand le mode de la transaction est <code>"versionchange"</code>).</dd>
 <dt><code>TransactionInactiveError</code></dt>
 <dd>La transaction courante n'est pas active.</dd>
 <dt><code>ConstraintError</code></dt>
 <dd>Il existe déjà un index avec ce nom.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on ouvre une transaction sur un magasin d'objets pour lequel on récupère l'index <code>lName</code>. Ensuite, on ouvre un curseur sur cet index avec la méthode {{domxref("IDBIndex.openCursor()")}} (celle-ci fonctionne comme la méthode {{domxref("IDBObjectStore.openCursor", "openCursor()")}} qui s'utilise sur les magasins d'objets mais ici, les enregistrements sont triés selon l'index et pas selon la clé primaire).</p>

<p>Le nom de l'index est affiché dans la console grâce à la propriété (ici, le nom sera <code>"lName"</code>).</p>

<p>Enfin, on parcourt chacun des enregistrements et on ajoute les données dans un tableau HTML.</p>

<pre class="brush: js">function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  console.log(myIndex.name);

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
   <td>{{SpecName('IndexedDB', '#widl-IDBIndex-name', 'name')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBIndex.name")}}</p>

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
