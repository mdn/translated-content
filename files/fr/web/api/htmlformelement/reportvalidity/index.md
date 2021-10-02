---
title: HTMLFormElement.reportValidity()
slug: Web/API/HTMLFormElement/reportValidity
tags:
  - HTML
  - Méthode
translation_of: Web/API/HTMLFormElement/reportValidity
---
<div>{{APIRef("HTML DOM")}}</div>

<p>La méthode  <strong><code>HTMLFormElement.reportValidity()</code></strong> renvoie true si les contrôles enfants de l'élément répondent à leurs contraintes de validation. Lorsque la valeur <code>false</code> est renvoyée, ,  les événements <code><a href="/en-US/docs/Web/Events/invalid">invalid</a></code> annulables sont déclenchés pour chaque enfant non valide et les problèmes de validation sont signalés à l'utilisateur. .</p>

<h2 id="Syntax">Syntax</h2>

<pre class="syntaxbox"><em>HTMLFormElement</em>.reportValidity()
</pre>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>{{domxref("Boolean")}}</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">document.forms['myform'].addEventListener('invalid', function() {
  // Optional response here
}, false);

document.forms['myform'].addEventListener('submit', function() {
  document.forms['myform'].reportValidity();
}, false);</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("HTML WHATWG", "forms.html#dom-cva-reportvalidity", "HTMLFormElement.reportValidity()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5.1", "semantics.html#the-constraint-validation-api", "HTMLFormElement.reportValidity()")}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_du_navigateur">Compatibilité des navigateurs</h2>

<p>{{Compat("api.HTMLFormElement.reportValidity")}}</p>
