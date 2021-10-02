---
title: GlobalEventHandlers.onclose
slug: Web/API/GlobalEventHandlers/onclose
tags:
  - API
  - DOM
  - HTML
  - Property
  - Reference
translation_of: Web/API/GlobalEventHandlers/onclose
---
<div>{{ApiRef("HTML DOM")}}</div>

<p>Un gestionnaire d'évènement utilisé lorsque des évènements de fermeture sont envoyés à la fenêtre (non disponible dans Firefox 2 ou Safari).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">window.onclose = funcRef;
</pre>

<h3 id="Paramètres">Paramètres</h3>

<ul>
 <li><code>funcRef</code> est une fonction.</li>
</ul>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">window.onclose = resetThatServerThing;
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG','webappapis.html#handler-onclose','onclose')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>
