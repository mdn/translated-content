---
title: element.insertAdjacentHTML
slug: Web/API/Element/insertAdjacentHTML
tags:
  - API
  - DOM
  - Méthode
  - Reference
translation_of: Web/API/Element/insertAdjacentHTML
---
<div>{{APIRef("DOM")}}</div>

<p><code>insertAdjacentHTML()</code> analyse le texte spécifié en tant que HTML ou XML et insère les noeuds résultants dans le DOM à la position spécifiée. L'élement qui est utilisé n'est pas réanalysé et les élements qu'il contient ne sont donc pas corrompus. Ceci, et le fait d'éviter la sérialisation supplémentaire, rend la fonction plus rapide et directe que <strong>innerHTML</strong>.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="brush: js">element.insertAdjacentHTML(position, text);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>position</code> </dt>
 <dd>une {{domxref("DOMString")}}  représentant la position relative à l'<code>element</code>, et doit être une des chaînes de caractères suivantes :</dd>
</dl>

<ul>
 <li><code>'beforebegin'</code> : Avant l'<code>element</code>  lui-même.</li>
 <li><code>'afterbegin'</code> : Juste à l'intérieur de l'<code>element</code> , avant son premier enfant.</li>
 <li><code>'beforeend'</code> : Juste à l'intérieur de l'<code>element</code> , après son dernier enfant.</li>
 <li><code>'afterend'</code> : Après <code>element</code> lui-même.</li>
</ul>

<dl>
 <dt><code>text</code></dt>
 <dd> est la chaîne de caractères qui doit être analysée en tant qu'HTML ou XML et insérée dans l'arbre du DOM.</dd>
</dl>

<h3 id="Visualisation_des_noms_de_position">Visualisation des noms de position</h3>


<pre>&lt;!-- beforebegin --&gt;
&lt;p&gt;
  &lt;!-- afterbegin --&gt;
  foo
  &lt;!-- beforeend --&gt;
&lt;/p&gt;
&lt;!-- afterend --&gt;</pre>

<div class="note">
  <p><strong>Note :</strong> Les positions <code>beforebegin</code> et <code>afterend</code> ne fonctionnent que si le noeud est un arbre et a un élément parent.</p>
</div>

<h2 id="Example">Exemple</h2>

<pre class="brush: js">// &lt;div id="one"&gt;one&lt;/div&gt;
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '&lt;div id="two"&gt;two&lt;/div&gt;');

// Ici la nouvelle structure est :
// &lt;div id="one"&gt;one&lt;/div&gt;&lt;div id="two"&gt;two&lt;/div&gt;</pre>

<h2 id="Browser_Compatibility">Notes</h2>

<h3 id="Considérations_de_sécurité">Considérations de sécurité</h3>

<p>Lorsque vous insérez du code HTML dans une page en utilisant insertAdjacentHTML, veillez à ne pas utiliser d'entrée utilisateur qui n'a pas été échappée.</p>

<p>Il est recommandé de ne pas utiliser <code>insertAdjacentHTML</code> lors de l'insertion de texte brut; à la place, utilisez la propriété <code>node.textContent</code> ou la méthode <code>node.insertAdjacentText()</code>. Cela n'interprète pas le contenu transmis au format HTML, mais l'insère à la place sous forme de texte brut.</p>

<h2 id="Spécification">Spécification</h2>

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
   <td>{{SpecName('DOM Parsing', '#widl-Element-insertAdjacentHTML-void-DOMString-position-DOMString-text', 'Element.insertAdjacentHTML()')}}</td>
   <td>{{ Spec2('DOM Parsing') }}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.insertAdjacentHTML")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Element.insertAdjacentElement()")}}</li>
 <li>{{domxref("Element.insertAdjacentText()")}}</li>
 <li><a href="https://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/">hacks.mozilla.org guest post</a> par Henri Sivonen  y compris le benchmark montrant que insertAdjacentHTML peut être beaucoup plus rapide dans certains cas.</li>
</ul>
