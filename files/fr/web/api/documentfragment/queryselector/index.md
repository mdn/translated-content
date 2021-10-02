---
title: DocumentFragment.querySelector()
slug: Web/API/DocumentFragment/querySelector
tags:
  - API
  - DOM
  - Document
  - Méthodes
  - fragment
translation_of: Web/API/DocumentFragment/querySelector
---
<div>{{ApiRef("DOM")}}</div>

<p>La méthode <strong><code>DocumentFragment.querySelector()</code></strong> renvoie le premier élément ou <code>null</code> si aucune correspondance n'est trouvée, dans le {{domxref("DocumentFragment")}} (en utilisant la traversée en profondeur des noeuds du document), avec le groupe spécifié de sélecteurs.</p>

<p>Si le sélecteur correspond à un ID (<em>identifiant</em>) et que cet ID est utilisé plusieurs fois par erreur dans le document, il renvoie le premier élément correspondant.</p>

<p>Si les sélecteurs spécifiés dans paramètre sont invalides une {{domxref("DOMException")}} avec une valeur <code>SYNTAX_ERR</code> est lancée.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox"><em>element</em> = <em>documentfragment</em>.querySelector(<em>selectors</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><em>selectors </em></dt>
 <dd>est une {{domxref("DOMString")}} (<em>chaîne de caractères</em>) contenant un ou plusieurs sélecteurs CSS séparés par des virgules.</dd>
</dl>

<h2 id="Example">Exemples</h2>

<h3 id="Exemple_de_base">Exemple de base</h3>

<p>Dans cet exemple de base, le premier élément dans le {{domxref("DocumentFragment")}} avec la classe "<code>myclass</code>" est renvoyé :</p>

<pre class="brush: js">var el = documentfragment.querySelector(".myclass");
</pre>

<h3 id="Syntaxe_CSS_et_argument_de_la_méthode">Syntaxe CSS et argument de la méthode</h3>

<p>L'argument chaîne transmis à <code>querySelector</code> doit suivre la syntaxe CSS. Pour faire correspondre un identifiant ou des sélecteurs qui ne suivent pas la syntaxe CSS (utilisant un point-virgule ou un espace inappropriés par exemple), il est obligatoire d'échapper les mauvais caractères avec une double barre oblique inverse :</p>

<pre class="brush: html">&lt;div id="foo\bar"&gt;&lt;/div&gt;
&lt;div id="foo:bar"&gt;&lt;/div&gt;

&lt;script&gt;
document.querySelector('#foo\bar')    // Ne correspond à rien
document.querySelector('#foo\\\\bar') // Correspond au premier div
document.querySelector('#foo:bar')     //  Ne correspond à rien
document.querySelector('#foo\\:bar')   // Correspond au second div
&lt;/script&gt;
</pre>

<h2 id="Specification">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Selectors API Level 2', '#queryselector', 'DocumentFragment.querySelector')}}</td>
   <td>{{Spec2('Selectors API Level 2')}}</td>
   <td>Pas de changement de {{SpecName('Selectors API Level 1')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('Selectors API Level 1', '#queryselector', 'DocumentFragment.querySelector')}}</td>
   <td>{{Spec2('Selectors API Level 1')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.DocumentFragment.querySelector")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("DocumentFragment")}} à laquelle elle appartient.</li>
</ul>
