---
title: Element.clientLeft
slug: Web/API/Element/clientLeft
translation_of: Web/API/Element/clientLeft
browser-compat: api.Element.clientLeft
---
<div>{{APIRef("DOM")}}</div>

<p>La propriété en lecture seule <strong><code>Element.clientLeft</code></strong> représente la largeur de la bordure gauche d'un élément, exprimée en pixels. Cette largeur inclut l'éventuelle largeur de la barre de défilement verticale si le texte se lit de droite à gauche et s'il y a un dépassement entraînant l'apparition d'une barre de défilement à gauche. <code>clientLeft</code> n'inclut pas la marge gauche ou le remplissage (<i lang="en">padding</i>) à gauche.</p>

<p>Lorsque la préférence <a href="http://kb.mozillazine.org/Layout.scrollbar.side"><code>layout.scrollbar.side</code></a> est paramétrée à 1 ou à 3 et que la direction du texte est de droite à gauche, <strong>alors la barre de défilement verticale est placée à gauche</strong> et ce placement aura donc un impact sur la valeur de <code>clientLeft</code>.</p>

<div class="note">
  <p><strong>Note :</strong> Cette propriété sera arrondie en une valeur entière. Si vous souhaitez utiliser une valeur décimale, vous pouvez utiliser <a href="/fr/docs/Web/API/Element/getBoundingClientRect"><code>element.getBoundingClientRect()</code></a>. </p>
</div>

<div class="note">
  <p><strong>Note :</strong> Lorsqu'un élément se voit appliquer <code>display: inline</code>, <code>clientLeft</code> renvoie <code>0</code>, quelle que soit la bordure de l'élément.</p>
</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
var left = element.clientLeft;
</pre>

<h2 id="exemple">Exemple</h2>

<p>Dans l'exemple qui suit, la zone du client possède un arrière-plan blanc avec une bordure <code>border-left</code> noire de 24px. La valeur de <code>clientLeft</code> correspond à la distance entre la fin de la zone de la marge et le début des zones de contenu et de remplissage : 24px.</p>

<h3>HTML</h3>

<pre class="brush: html">
&lt;div id="container"&gt;
  &lt;div id="contained"&gt;
    &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
	  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
	  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3>CSS</h3>

<pre class="brush: css">

#container {
	margin: 3rem;
	background-color: rgb(255, 255, 204);
	border: 4px dashed black;
}

#contained {
	margin: 1rem;
	border-left: 24px black solid;
	padding: 0px 28px;
	overflow: auto;
	background-color: white;
}
</pre>

<h3>Résultat</h3>

{{EmbedLiveSample("Exemple", 400, 350)}}

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="Notes">Notes</h2>

<p><code>clientLeft</code> fut introduit avec le modèle d'objet DHTML d'Internet Explorer.</p>

<p>La position de la barre de défilement verticale pour les textes écrits de droite à gauche dépend de la préférence <a href="http://kb.mozillazine.org/Layout.scrollbar.side"><code>layout.scrollbar.side</code></a>.</p>

<p>Les applications utilisant le moteur Gecko prennent en charge <code>clientLeft</code> depuis Gecko 1.9 (Firefox 3 l'implémente avec <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=111207">le bug 111207</a>). Cette propriété n'est pas prise en charge pour Firefox 2 et les versions antérieures.</p>
