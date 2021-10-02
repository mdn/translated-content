---
title: IDBIndex.unique
slug: Web/API/IDBIndex/unique
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBIndex/unique
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>unique</code></strong>, rattachée à l'interface <code>IDBIndex</code>, est un booléen qui indique si l'index utilisé permet d'avoir des clés dupliquées.</p>

<p>Cette caractéristique est décidée lors de la création de l'index, avec la méthode {{domxref("IDBObjectStore.createIndex")}}. Cette méthode prend un paramètre optionnel, <code>unique</code>, qui, s'il vaut <code>true</code>, indique que l'index ne permettra pas d'avoir de clés dupliquées.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var myIndex = objectStore.index('index');</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un booléen qui vaut <code>true</code> si l'index permet d'avoir des valeurs dupliquées pour une même clé ou <code>false</code> s'il n'est pas possible d'avoir de clés dupliquées.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, on ouvre une transaction en lecture sur un magasin d'objets puis on récupère l'index <code>lName</code>. On ouvre alors un curseur sur l'index grâce à {{domxref("IDBIndex.openCursor")}} (cela fonctionne de façon analogue à l'ouverture d'un curseur sur le magasin d'objets avec {{domxref("IDBObjectStore.openCursor")}} sauf qu'ici, les enregistrements sont triés selon l'index et pas selon la clé primaire.</p>

<p>On affiche le caractère unique des clé dans la console (ici, on voit que la propriété vaut <code>false</code>).</p>

<p>Enfin, on parcourt chaque enregistrement et on insère les données dans le tableau HTML (pour voir un exemple complet, consulter <a href="https://github.com/mdn/IDBIndex-example">notre dépôt IDBIndex-example</a> (<a href="https://mdn.github.io/IDBIndex-example/">voir la démonstration <em>live</em></a>).</p>

<pre class="brush: js">function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  console.log(myIndex.unique);

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

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBIndex-unique', 'unique')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBIndex.unique")}}</p>

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
