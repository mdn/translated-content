---
title: IDBIndex.multiEntry
slug: Web/API/IDBIndex/multiEntry
tags:
  - API
  - IDBIndex
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBIndex/multiEntry
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>multiEntry</code></strong>, rattachée à l'interface {{domxref("IDBIndex")}}, est un booléen qui indique le comportement de l'index lorsque le résultat de l'évaluation d'un chemin de clé renvoie un tableau.</p>

<p>Ce comportement est paramétré au moment où l'index est créé avec la méthode {{domxref("IDBObjectStore.createIndex")}}. Cette méthode permet d'utiliser un paramètre facultatif <code>options</code> pour définir la propriété <code>multiEntry</code> avec <code>true</code>/<code>false</code>.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var monIndex = objectStore.index('index');
console.log(monIndex.multiEntry);</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un booléen. S'il vaut <code>true</code>, cela signifie qu'il y a autant d'enregistrement que de valeurs dans le tableau renvoyé lors de l'évaluation du chemin (les clés des enregistrements sont les valeurs du tableau). S'il vaut <code>false</code>, cela signifie qu'il n'y aura qu'un seul enregistrement ajouté et que la clé sera le tableau.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on ouvre une transaction sur un magasin d'objets et on récupère l'index <code>lName</code> depuis la base de données des contacts. Ensuite, on ouvre un curseur simple sur l'index grâce à la méthode {{domxref("IDBIndex.openCursor")}} (cela fonctionne comme si on avait directement ouvert un curseur sur le magasin d'objets avec {{domxref("IDBObjectStore.openCursor")}} mais les enregistrements sont ici renvoyés en étant triés selon l'index et non selon la clé primaire.</p>

<p>La propriété <code>multiEntry</code> est affichée dans la console. Dans cet exemple, elle a la valeur <code>false</code>.</p>

<p>Enfin, on parcourt chacun des enregistrements pour insérer les données dans un tableau HTML. Pour consulter un exemple complet, vous pouvez vous référer à <a href="https://github.com/mdn/IDBIndex-example">notre dépôt IDBIndex-example</a> (<a href="https://mdn.github.io/IDBIndex-example/">voir également la démo <em>live</em></a>).</p>

<pre class="brush: js">function displayDataByIndex() {
  tableEntry.innerHTML = '';
  var transaction = db.transaction(['contactsList'], 'readonly');
  var objectStore = transaction.objectStore('contactsList');

  var myIndex = objectStore.index('lName');
  console.log(myIndex.multiEntry);

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
      console.log('Les éléments ont été affichés.');
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
   <td>{{SpecName('IndexedDB', '#widl-IDBIndex-multiEntry', 'multiEntry')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBIndex.multiEntry")}}</p>

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
