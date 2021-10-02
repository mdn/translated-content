---
title: HTMLInputElement.labels
slug: Web/API/HTMLInputElement/labels
tags:
  - API
  - DOM
  - Propriété
  - Étiquettes
translation_of: Web/API/HTMLInputElement/labels
---
<div>{{APIRef("DOM")}}</div>

<p>La propriété en lecture seule <code><strong>HTMLInputElement.labels</strong></code> renvoie une {{domxref("NodeList")}} (<em>liste de noeuds</em>) des éléments {{HTMLElement("label")}} (<em>étiquette</em>) associés avec l'élément {{HTMLElement("input")}} (<em>entrée</em>).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <var>labelElements</var> = <var>input</var>.labels;
</pre>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une {{domxref("NodeList")}} contenant les éléments <code>&lt;label&gt;</code> associés avec l'élément <code>&lt;input&gt;</code>.</p>

<h2 id="Exemple">Exemple</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;label id="label1" for="test"&gt;Label 1&lt;/label&gt;
&lt;input id="test"/&gt;
&lt;label id="label2" for="test"&gt;Label 2&lt;/label&gt;
</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">window.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("test");
  for(var i = 0; i &lt; input.labels.length; i++) {
    console.log(input.labels[i].textContent); // "Label 1" et "Label 2"
  }
});</pre>

<p>{{EmbedLiveSample("Exemple", "100%", 30)}}</p>

<h2 id="Spécifications">Spécifications</h2>

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
   <td>{{SpecName("HTML WHATWG", "forms.html#dom-lfe-labels", "labels")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Pas de changement.</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "forms.html#dom-lfe-labels", "labels")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.HTMLInputElement.labels")}}</p>
