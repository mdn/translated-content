---
title: Document.writeln()
slug: Web/API/Document/writeln
tags:
  - API
  - DOM
  - Method
  - Reference
translation_of: Web/API/Document/writeln
---
<p>{{ ApiRef("DOM") }}</p>

<p>Écrit une chaine de caractères suivie d'un retour de ligne.</p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="eval">document.writeln(<em>ligne</em>);
</pre>

<h3 id="Parameters">Paramètres</h3>

<ul>
 <li><code>ligne</code> est la chaine de caractère contenant le texte.</li>
</ul>

<h2 id="Example">Exemple</h2>

<pre class="notranslate">document.writeln("&lt;p&gt;Entrez votre mot de passe :&lt;/p&gt;");
</pre>

<h2 id="Notes">Notes</h2>

<p><strong>document.writeln </strong>est identique à <a href="/en-US/docs/Web/API/Document/write">{{domxref("document.write")}}</a>, mais ajoute une nouvelle ligne.</p>

<h2 id="Specification">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td><strong>Spécification</strong></td>
   <td><strong>État</strong></td>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "#dom-document-writeln", "document.writeln()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 HTML", "html.html#ID-35318390", "document.writeln()")}}</td>
   <td>{{Spec2("DOM2 HTML")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Document.writeln")}}</p>
