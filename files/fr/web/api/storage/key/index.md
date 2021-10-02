---
title: Storage.key()
slug: Web/API/Storage/key
tags:
  - API
  - Méthode
  - Reference
  - Stockage
  - Storage
  - Web Storage
translation_of: Web/API/Storage/key
---
<p>{{APIRef()}}</p>

<p>La méthode <code>key()</code> de l'interface {{domxref("Storage")}} prend un nombre n en argument et retourne la n-ième clé contenue dans storage. L'ordre des clés étant définie par le navigateur, il est recommandé de ne pas s'y référer .</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox">var <em>unNomDeCle</em> = <em>storage</em>.key(<em>cle</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>cle</em></dt>
 <dd>Un entier représentant le numéro de la clé voulue. L'index débute à zero.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un {{domxref("DOMString")}} contenant le nom de la clé .</p>

<h2 id="Exemple">Exemple</h2>

<p>La fonction suivante parcours les éléments présents dans le local storage.</p>

<pre class="brush: js">function forEachKey(callback) {
  for (var i = 0; i &lt; localStorage.length; i++) {
    callback(localStorage.key(i));
  }
}</pre>

<div class="note">
<p><strong>Note :</strong> Pour un exemple plus poussé, consultez la <a href="https://mdn.github.io/dom-examples/web-storage/">Web Storage Demo</a>.</p>
</div>

<h2 id="Autre_exemple">Autre exemple</h2>

<p>La fonction suivante parcourt chaque clé présente dans le localStorage et affiche les valeurs correspondantes.</p>

<pre class="brush: js">for (var i = 0; i &lt; localStorage.length; i++) {
   console.log(localStorage.getItem(localStorage.key(i)));
}
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'webstorage.html#dom-storage-key', 'Storage.key')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Storage.key")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API">Utilisation de l'API de stockage web</a></li>
</ul>
