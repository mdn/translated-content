---
title: Event()
slug: Web/API/Event/Event
tags:
  - API
  - Constructeur
  - DOM
  - évènements
translation_of: Web/API/Event/Event
---
<p>{{APIRef("DOM")}}</p>

<p>Le constructeur <code><strong>Event()</strong></code> crée un nouvel {{domxref("Event")}} (<em>évènement</em>).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"> <em>event</em> = new Event(<em>typeArg</em>, <em>eventInit</em>);</pre>

<h3 id="Valeurs">Valeurs</h3>

<dl>
 <dt><em>typeArg</em></dt>
 <dd>C'est une {{domxref("DOMString")}} (<em>chaîne de caractères</em>) représentant le nom de l'évènement.</dd>
 <dt><em>eventInit</em>{{optional_inline}}</dt>
 <dd><p>C'est un dictionnaire <code>EventInit</code> ayant les champs suivants :</p>
 <ul>
  <li><code>bubbles</code>: (facultatif) un {{jsxref("Boolean")}} indiquant si les événements sont propagés . Par défaut est <code>false</code> (<em>faux</em>).</li>
  <li><code>cancelable</code>: (facultatif) un {{jsxref("Boolean")}} indiquant si l'évènement peut être annulé. Par défaut est <code>false</code> (<em>faux</em>) .</li>
  <li><code>composed</code>: ( facultatif ) un {{jsxref("Boolean")}} indiquant si l'évènement déclenchera les écouteurs en dehors d'une racine shadow (voir {{domxref("Event.composed")}} pour plus de détails). Par défaut est <code>false</code> (<em>faux</em>) .</li>
 </ul>
 </dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">// crée un évènement "look" qui est diffusé et ne peut être annulé
var evt = new Event("look", {"bubbles":true, "cancelable":false});
document.dispatchEvent(evt);

// l'événement peut être envoyé à partir de n'importe quel élément, pas seulement le document
myDiv.dispatchEvent(evt);
</pre>

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
   <td>{{SpecName('DOM WHATWG','#interface-event','Event()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.Event.Event")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Event")}}</li>
</ul>
