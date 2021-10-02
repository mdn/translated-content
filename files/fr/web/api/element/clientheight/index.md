---
title: Element.clientHeight
slug: Web/API/Element/clientHeight
translation_of: Web/API/Element/clientHeight
browser-compat: api.Element.clientHeight
---
<div>{{APIRef("DOM")}}</div>

<p>La propriété en lecture seule <strong><code>Element.clientHeight</code></strong> vaut zéro pour les éléments sans CSS ou sans boîte de disposition en ligne/incise ; sinon elle vaut la hauteur interne d'un élément, exprimée en pixels. Cette hauteur inclut le remplissage (<i lang="en">padding</i>) mais exclut les bordures, les marges et les éventuelles barres de défilement horizontales.</p>

<p><code>clientHeight</code> peut être calculée comme : <em>hauteur CSS</em> + <em>remplissage CSS</em> - <em>hauteur des barres de défilement horizontales</em> s'il y en a.</p>

<p>Lorsque <code>clientHeight</code> est utilisée sur l'élément racine (l'élément <code>&lt;html&gt;</code>), (ou sur <code>&lt;body&gt;</code> si le document est en mode de compatibilité (<i lang="en">quirks mode</i>)), c'est la hauteur de la zone d'affichage (<i lang="en">viewport</i>) (sans tenir compte des barres de défilement) qui est renvoyée. <a href="https://www.w3.org/TR/2016/WD-cssom-view-1-20160317/#dom-element-clientheight">Il s'agit ici d'un cas aux limites pour <code>clientHeight</code></a>.</p>

<div class="note">
  <p><strong>Note :</strong> Cette propriété sera arrondie en un entier. Si vous souhaitez utiliser une valeur décimale, vous pouvez utiliser <a href="/fr/docs/Web/API/Element/getBoundingClientRect"><code>element.getBoundingClientRect()</code></a>.</p>
</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
var intElemClientHeight = element.clientHeight;
</pre>

<p><code>intElemClientHeight</code> est un entier correspondant à la valeur de <code>clientHeight</code> pour l'élément représenté par  <code>element</code>, exprimée en pixels. La propriété <code>clientHeight</code> est uniquement accessible en lecture-seule.</p>

<h2 id="example">Exemples</h2>

<p><img src="dimensions-client.png"></p>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h3 id="Notes">Notes</h3>

<p><code>clientHeight</code> est une propriété introduite par le modèle objet d'Internet Explorer.</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/HTMLElement/offsetHeight"><code>HTMLElement.offsetHeight</code></a></li>
  <li><a href="/fr/docs/Web/API/Element/scrollHeight"><code>Element.scrollHeight</code></a></li>
  <li><a href="/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements">Déterminer les dimensions des éléments</a></li>
</ul>
