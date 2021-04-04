---
title: IDBKeyRange.includes()
slug: Web/API/IDBKeyRange/includes
tags:
  - API
  - IDBKeyRange
  - IndexedDB
  - Méthode
  - Reference
translation_of: Web/API/IDBKeyRange/includes
---
<div>{{APIRef("IndexedDB")}}</div>

<p>La méthode <code><strong>includes()</strong></code>, rattachée à l'interface {{domxref("IDBKeyRange")}}, renvoie un booléen si la clé est contenue dans un intervalle de clé.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">myIncludesResult = myKeyRange.includes('A');</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>key</code></dt>
 <dd>La clé dont on souhaite savoir si elle est dans l'intervalle.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen.</p>

<h3 id="Exceptions">Exceptions</h3>

<p>Cette méthode peut lever une exception {{domxref("DOMException")}} de type {{domxref("DataError")}} lorsque la clé fournie n'est pas une clé valide.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var keyRangeValue = IDBKeyRange.bound('A', 'K', false, false);

var monResultat = keyRangeValue.includes('F');
// Renvoie true

var monResultat = keyRangeValue.includes('W');
// Renvoie false
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>La méhode <code>includes()</code> a été ajoutée à partir de la deuxième édition de la spécification d'Indexed DB. Pour les navigateurs qui ne prennent pas en charge cette fonctionnalité, on peut utiliser la prothèse suivante.</p>

<pre class="brush: js">IDBKeyRange.prototype.includes = IDBKeyRange.prototype.includes || function(key) {
  var r = this, c;
  if (r.lower !== undefined) {
    c = indexedDB.cmp(key, r.lower);
    if (r.lowerOpen &amp;&amp; c &lt;= 0) return false;
    if (!r.lowerOpen &amp;&amp; c &lt; 0) return false;
  }
  if (r.upper !== undefined) {
    c = indexedDB.cmp(key, r.upper);
    if (r.upperOpen &amp;&amp; c &gt;= 0) return false;
    if (!r.upperOpen &amp;&amp; c &gt; 0) return false;
  }
  return true;
};
</pre>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('IndexedDB 2', '#dom-idbkeyrange-includes', 'includes()')}}</td>
      <td>{{Spec2('IndexedDB')}}</td>
      <td> </td>
    </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.IDBKeyRange.includes")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/API_IndexedDB/Using_IndexedDB">Utiliser IndexedDB</a></li>
 <li>Initier une connexion : {{domxref("IDBDatabase")}}</li>
 <li>Utiliser les transactions : {{domxref("IDBTransaction")}}</li>
 <li>Définir un intervalle de clés : {{domxref("IDBKeyRange")}}</li>
 <li>Récupérer et modifier les données : {{domxref("IDBObjectStore")}}</li>
 <li>Utiliser les curseurs {{domxref("IDBCursor")}}</li>
 <li>Exemple de référence : <a href="https://github.com/mdn/to-do-notifications/tree/gh-pages">To-do Notifications</a> (<a href="https://mdn.github.io/to-do-notifications/">exemple <em>live</em></a>).</li>
</ul>
