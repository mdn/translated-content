---
title: Event.cancelBubble
slug: Web/API/Event/cancelBubble
tags:
  - API
  - Annulation
  - DOM
  - Evènement
  - Propagation
  - Propriétés
translation_of: Web/API/Event/cancelBubble
---
<p>{{APIRef("DOM Events")}}</p>

<p>La propriété <code><strong>Event.cancelBubble</strong></code> est un alias historique de {{domxref("Event.stopPropagation()")}}. Définir sa valeur à <code>true</code> (vrai) avant le renvoi à partir d'un gestionnaire d'évènements empêche la propagation de l'évènement. Dans les implémentations les plus tardives, cette définition à false (<em>faux</em>) ne fait rien. Voir {{anch("Compatibilité des navigateurs")}} pour plus de détails. </p>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox">event.cancelBubble = <em>bool;</em>
<em>var bool</em> = event.cancelBubble;
</pre>

<h2 id="Exemple">Exemple</h2>

<pre>elem.onclick = function(e) {
 // fais des choses sympas ici
  e.cancelBubble = true;
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-event-cancelbubble', 'cancelBubble')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Event.cancelBubble")}}</p>
