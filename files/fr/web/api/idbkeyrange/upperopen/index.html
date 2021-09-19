---
title: IDBKeyRange.upperOpen
slug: Web/API/IDBKeyRange/upperOpen
translation_of: Web/API/IDBKeyRange/upperOpen
---
<p>{{ APIRef("IndexedDB") }}</p>

<p>La propriété <strong><code>upperOpen</code></strong> de l'interface {{domxref("IDBKeyRange")}} renvoie un booléen indiquant si la valeur de la limite supérieure est incluse dans l'{{domxref("IDBKeyRange","intervalle de clé")}}.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">myKeyRange.upperOpen;</pre>

<h2 id="Value">Value</h2>

<dl>
 <dt>true</dt>
 <dd>La valeur de la limite supérieure n'est pas incluse dans l'intervalle.</dd>
 <dt>false</dt>
 <dd>La valeur de la limite supérieure est incluse dans l'intervalle.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>Dans l'exemple suivant, on récupère l'{{domxref("IDBKeyRange","intervalle de clé")}} entre "F" et "W". Puis on ouvre une {{domxref("IDBTransaction","transaction")}} sur la connexion pour avoir l’{{domxref("IDBObjectStore","accès")}} au magasin d'objets 'fThings'. On met en place un {{domxref("IDBCursor","curseur")}} sur l'intervalle pour afficher dans une liste les valeurs des propriétés fThing et fRating des objets trouvés.</p>

<p>La propriété <strong><code>upperOpen</code></strong> sert ici à afficher sur la console le booléen indiquant si la valeur de la limite supérieure est comprise dans l'intervalle.</p>

<pre class="brush: js">function displayData() {
  var keyRangeValue = IDBKeyRange.bound("F", "W", true, true);
  console.log(keyRangeValue.upperOpen);

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
        console.log('Entries all displayed.');
      }
    };
  };</pre>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('IndexedDB', '#widl-IDBKeyRange-upperOpen', 'upperOpen')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité avec les navigateurs</h2>

<p>{{Compat("api.IDBKeyRange.upperOpen")}}</p>

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
