---
title: element.replaceChild
slug: Web/API/Node/replaceChild
tags:
  - API
  - DOM
  - Enfant
  - Méthodes
  - Noeuds
  - Remplacement
translation_of: Web/API/Node/replaceChild
---
<p>{{APIRef("DOM")}}</p>

<p>La méthode <strong><code>Node.replaceChild()</code></strong> remplace un nœud enfant du noeud spécifié par un autre nœud.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>replacedNode</em> = <em>parentNode</em>.replaceChild(<em>newChild</em>, <em>oldChild</em>);
</pre>

<ul>
 <li><code>newChild</code> est le nouveau nœud qui remplacera <code>oldChild</code>. S'il existe déjà dans le DOM, il sera d'abord enlevé.</li>
 <li><code>oldChild</code> est le nœud existant à remplacer.</li>
 <li><code>replaceNode</code> est le nœud remplacé. C'est le même nœud que <code>oldChild</code>.</li>
</ul>

<h2 id="Example">Exemple</h2>

<pre class="brush:js">// Étant donné que :
// &lt;div&gt;
//   &lt;span id="childSpan"&gt;foo bar&lt;/span&gt;
// &lt;/div&gt;

// Crée un nœud d'élément vide
// sans ID, sans attributs et sans contenu
var sp1 = document.createElement("span");

// Donne un attribut id appelé "newSpan"
sp1.id = "newSpan";

// Crée du contenu pour le nouvel élément
var sp1_content = document.createTextNode("nouvel élément span de remplacement.");

// Applique ce contenu au nouvel élément
sp1.appendChild(sp1_content);

// Construit une référence au nœud existant à remplacer
var sp2 = document.getElementById("childSpan");
var parentDiv = sp2.parentNode;

// Remplacer le noeud existant sp2 par le nouvel élément span sp1
parentDiv.replaceChild(sp1, sp2);

// Résultat :
// &lt;div&gt;
//   &lt;span id="newSpan"&gt;nouvel élément span de remplacement.&lt;/span&gt;
// &lt;/div&gt;
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
			<td>{{SpecName("DOM WHATWG", "#dom-node-replacechild", "Node: replaceChild")}}
			</td>
			<td>{{Spec2("DOM WHATWG")}}</td>
			<td></td>
		</tr>
	</tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Node.replaceChild")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li>{{domxref("Node.removeChild")}}</li>
 <li>{{domxref("ChildNode.replaceWith")}}</li>
</ul>
