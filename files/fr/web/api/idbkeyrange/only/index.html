---
title: IDBKeyRange.only()
slug: Web/API/IDBKeyRange/only
tags:
  - API
  - IDBKeyRange
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBKeyRange/only
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <strong><code>only()</code></strong>, rattachée à l'interface {{domxref("IDBKeyRange")}}, permet de créer un nouvel intervalle de clé qui ne contient qu'une valeur.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">myKeyRange = IDBKeyRange.only(valeur);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeur</code></dt>
 <dd>La valeur dans l'intervalle de clé.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'objet {{domxref("IDBKeyRange")}} correspondant à l'intervalle de clé qui vient d'être créé.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut déclencher une exception {{domxref("DOMException")}} du type <code>DataError</code> lorsque la valeur passée en argument n'est pas une clé valide.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on illustre comment utiliser un intervalle de clé qui ne contient qu'une seule clé. On déclare un intervalle qui ne contient que la valeur "A" avec <code>keyRangeValue = IDBKeyRange.only("A");</code> Ensuite, on ouvre une transaction grâce à {{domxref("IDBTransaction")}} puis un magasin d'objets et un curseur grâce à la méthode {{domxref("IDBObjectStore.openCursor")}} pour laquelle on passe <code>keyRangeValue</code> en argument. Cela signifie que le curseur permettra uniquement de récupérer les enregistrements dont la clé vaut "A".</p>

<pre class="brush: js">function displayData() {
  var keyRangeValue = IDBKeyRange.only("A");

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
        console.log('Les éléments sont affichés.');
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
   <td>{{SpecName('IndexedDB', '#widl-IDBKeyRange-only-IDBKeyRange-any-value', 'only')}}</td>
   <td>{{Spec2('IndexedDB')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBKeyRange.only")}}</p>

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
