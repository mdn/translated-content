---
title: IDBKeyRange.lower
slug: Web/API/IDBKeyRange/lower
tags:
  - API
  - IDBKeyRange
  - IndexedDB
  - Propriété
  - Reference
translation_of: Web/API/IDBKeyRange/lower
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La propriété <strong><code>lower</code></strong>, rattachée à l'interface {{domxref("IDBKeyRange")}}, renvoie la borne inférieure de l'intervalle de clé.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">monIntervalle.lower;</pre>

<h3 id="Valeur">Valeur</h3>

<p>La borne inférieure de l'intervalle de clé (qui peut être d'un type quelconque).</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on voit comment utiliser un intervalle de clé. On déclare <code>keyRangeValue = IDBKeyRange.upperBound("F", "W", true, true);</code> — ce qui correspond à intervalle qui inclut tout ce qui se trouve entre "F" et "W" mais pas ces valeurs (l'intervalle est « ouvert »). Ensuite, on ouvre une transaction grâce à {{domxref("IDBTransaction")}}, un magasin d'objet et un curseur grâce à {{domxref("IDBObjectStore.openCursor")}} pour lequel on déclare que <code>keyRangeValue</code> est l'intervalle de clé optionnel.</p>

<p>Après avoir déclaré l'intervalle de clé, on affiche la valeur de la propriété <code>lower</code> dans la console (ce qui doit donner "F").</p>

<pre class="brush: js">function displayData() {
  var keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.lower);

  var transaction = db.transaction(['fThings'], 'readonly');
  var objectStore = transaction.objectStore('fThings');

  objectStore.openCursor(keyRangeValue).onsuccess = function(event) {
    var cursor = event.target.result;
      if(cursor) {
        var listItem = document.createElement('li');
        listItem.innerHTML = '&lt;strong&gt;' + cursor.value.fThing + '&lt;/strong&gt;, ' + cursor.value.fRating;
        list.appendChild(listItem);

        cursor.continue();
      } else {
        console.log('Les éléments ont été affichés.');
      }
    };
  };</pre>

<div class="note">
<p><strong>Note :</strong> Pour un exemple complet qui utilise les intervalles de clé, vous pouvez consulter <a href="https://github.com/mdn/IDBKeyRange-example">le dépôt GitHub IDBKeyRange-example</a> (<a href="https://mdn.github.io/IDBKeyRange-example/">ainsi que la démonstration associée</a>).</p>
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
   <td>{{SpecName('IndexedDB', '#widl-IDBKeyRange-lower', 'lower')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBKeyRange.lower")}}</p>

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
