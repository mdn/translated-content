---
title: Document.hidden
slug: Web/API/Document/hidden
translation_of: Web/API/Document/hidden
---
<p>{{ ApiRef("DOM") }}</p>

<p>La propriété <code><strong>Document.hidden</strong></code> retourne un Booléen qui indique si la page est considérée cachée ou pas.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>boolean</em> = document.hidden</pre>

<h2 id="Exemples">Exemples</h2>

<pre class="brush:js;">document.addEventListener("visibilitychange", function() {
  console.log( document.hidden );
  // Modifier le comportement...
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Specification</th>
   <th>Status</th>
   <th>Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Page Visibility API','#dom-document-hidden', 'Document.hidden')}}</td>
   <td>{{Spec2('Page Visibility API')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.Document.hidden")}}</p>
