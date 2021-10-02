---
title: Document.currentScript
slug: Web/API/Document/currentScript
tags:
  - API
  - DOM
  - Propriété
  - Reference
  - Script
translation_of: Web/API/Document/currentScript
---
<div>{{ApiRef("DOM")}}</div>

<p>Retourne l'élément {{HTMLElement("script")}} dont le script est en cours de traitement.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <var>curScriptElement</var> = document.currentScript;
</pre>

<h2 id="Exemple">Exemple</h2>

<p>Cet exemple vérifie si le script s'exécute de manière asynchrone :</p>

<pre class="brush:js">if (document.currentScript.async) {
  console.log("Exécution asynchrone");
} else {
  console.log("Exécution synchrone");
}</pre>

<p><a href="/samples/html/currentScript.html">Voir l'exemple sur une page</a></p>

<h2 id="Notes">Notes</h2>

<p>Il est important de noter que l'élément {{HTMLElement("script")}} ne sera pas référencé si le code dans le script est appelé par une fonction de rappel ou par un gestionnaire d'événements ; seul sera référencé l'élément alors qu'il est initialement en cours d'exécution.</p>

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
   <td>{{SpecName("HTML WHATWG", "dom.html#dom-document-currentscript", "Document.currentScript")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateur">Compatibilité navigateur</h2>

<div>{{Compat("api.Document.currentScript")}}</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{HTMLElement("script")}}</li>
 <li>{{domxref("document.onafterscriptexecute")}}</li>
 <li>{{domxref("document.onbeforescriptexecute")}}</li>
</ul>
