---
title: Blob()
slug: Web/API/Blob/Blob
tags:
  - API
  - Blob
  - Constructeur
  - Experimental
  - File API
  - Reference
translation_of: Web/API/Blob/Blob
---
<div>{{APIRef("File API")}}</div>

<p>Le constructeur <code><strong>Blob()</strong></code> retourne un nouvel objet {{domxref("Blob")}}. Le contenu d'un blob consiste en une concaténation de valeurs données dans le tableau passé en paramètre.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var aBlob = new Blob(<em> array</em>)
var aBlob = new Blob( <em>array</em>, <em>options</em> );
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>array</code></dt>
 <dd>Un tableau ({{jsxref("Array")}}) d'objets de type {{jsxref("ArrayBuffer")}}, {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}}, ou un mélange de tels objets qui seront insérés dans le {{domxref("Blob")}}. Les chaînes <code>DOMString</code> seront encodées en UTF-8.</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>Un paramètre optionnel qui est un dictionnaire <code>BlobPropertyBag</code> et qui peut être utilisé pour définir les deux attributs suivants :
 <ul>
  <li><code>type</code> : cet attribut représente le type MIME du contenu du tableau qui sera inséré dans le blob. La valeur par défaut pour cette propriété est la chaîne vide <code>""</code>.</li>
  <li><code>endings</code> : cet attribut spécifie la façon dont les chaînes qui contiennent des sauts de lignes (<code>\n</code>) doivent être retranscrites. Il peut prendre l'une de ces valeurs :
   <ul>
    <li><code>"native"</code> indiquera que les caractères de fin doivent être adaptés pour correspondre à ceux utilisés par le système d'exploitation</li>
    <li><code>"transparent"</code> indiquera que les fin de lignes sont stockées telles quelles dans le blob (aucune modification).</li>
   </ul>
   La valeur par défaut pour cet attribut est <code>"transparent"</code>. {{non-standard_inline}}</li>
 </ul>
 </dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Un tableau qui contient une seule DOMString
var aFileParts = ['&lt;a id="a"&gt;&lt;b id="b"&gt;Coucou :) !&lt;/b&gt;&lt;/a&gt;'];

// Le blob
var oMyBlob = new Blob(aFileParts, {type : 'text/html'});</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('File API', '#constructorBlob', 'Blob()')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.Blob.Blob")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Le déprécié {{domxref("BlobBuilder")}} qui a été remplacé par ce constructeur.</li>
</ul>
