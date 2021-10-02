---
title: HTMLSelectElement.selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
translation_of: Web/API/HTMLSelectElement/selectedIndex
---
<div>{{APIRef("HTML DOM")}}</div>

<p><code><strong>HTMLSelectElement.selectedIndex</strong></code> est un <code>long</code> qui représente l'index du premier élément sélectionné {{HTMLElement("option")}}. La valeur <code>-1</code> indique qu'aucun élément est sélectionné.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <var>index</var> = <var>selectElem</var>.selectedIndex;
<em>selectElem<code>.selectedIndex = </code>index;</em>
</pre>

<h2 id="Exemple">Exemple</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;p id="p"&gt;selectedIndex: 0&lt;/p&gt;

&lt;select id="select"&gt;
  &lt;option selected&gt;Option A&lt;/option&gt;
  &lt;option&gt;Option B&lt;/option&gt;
  &lt;option&gt;Option C&lt;/option&gt;
  &lt;option&gt;Option D&lt;/option&gt;
  &lt;option&gt;Option E&lt;/option&gt;
&lt;/select&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">var selectElem = document.getElementById('select');
var pElem = document.getElementById('p');

// Quand une nouvelle &lt;option&gt; est selectionnée
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  // Rapporter cette donnée au &lt;p&gt;
  pElem.innerHTML = 'selectedIndex: ' + index;
})</pre>

<p>{{EmbedLiveSample("Exemple", "200px", "80px")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-select-selectedindex', 'HTMLSelectElement')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de changement depuis le snapshot précédent, {{SpecName("HTML5 W3C")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#dom-select-selectedindex', 'HTMLSelectElement')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition initiale, snapshot de {{SpecName("HTML WHATWG")}}.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_entre_les_navigateurs">Compatibilité entre les navigateurs</h2>

<p>{{Compat("api.HTMLSelectElement.selectedIndex")}}</p>
