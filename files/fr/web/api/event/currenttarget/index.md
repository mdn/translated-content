---
title: Event.currentTarget
slug: Web/API/Event/currentTarget
tags:
  - API
  - Cible
  - DOM
  - Evènement
  - Propriété
translation_of: Web/API/Event/currentTarget
---
<div>{{APIRef("DOM")}}</div>

<p>La propriété <code><strong>currentTarget</strong></code>, accessible en lecture seule et rattachée à l'interface {{domxref("Event")}}, identifie la cible courante pour l'évènement lorsque celui-ci traverse le DOM. Elle fait toujours référence à l'élément sur lequel le gestionnaire d'évènement a été attaché tandis que {{domxref("Event.target")}} identifie l'élément à partir duquel l'évènement s'est produit (<code>event.target</code> peut donc être un descendant de <code>event.currentTarget</code>).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>currentEventTarget</em> = <em>event</em>.currentTarget;</pre>

<h3 id="Valeur">Valeur</h3>

<p>{{domxref("EventTarget")}}</p>

<h2 id="Exemples">Exemples</h2>

<p><code>Event.currentTarget</code> peut s'avérer utile lorsqu'on attache le même gestionnaire d'évènement à plusieurs éléments.</p>

<pre class="brush: js">// Cette fonction masque la cible courante de l'évènement
// et l'affiche dans la console.
function hide(e){
  e.currentTarget.style.visibility = 'hidden';
  console.log(e.currentTarget);
  // Lorsque cette fonction est utilisée en gestionnaire d'évènement
  // on aura this === e.currentTarget
}

var ps = document.getElementsByTagName('p');

for(var i = 0; i &lt; ps.length; i++){
  // On affiche l'élément &lt;p&gt; qui a été cliqué dans la console
  ps[i].addEventListener('click', hide, false);
}
// On affiche l'élément &lt;body&gt; dans la console
document.body.addEventListener('click', hide, false);

</pre>

<div class="note">
<p><strong>Note :</strong> La valeur de <code>event.currentTarget</code> est <strong>uniquement</strong> disponible lorsque l'évènement est géré. Ainsi, on ne pourra pas observer la valeur de <code>currentTarget</code> <em>a posteriori</em> (ex. si on a stocké la valeur d'<code>event</code> dans une variable lors de la gestion de l'évènement puis qu'on utilise celle-ci plus tard, <code>event.currentTarget</code> aura la valeur <code>null</code>).</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Spécification</th>
   <th>État</th>
   <th>Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName("DOM WHATWG", "#dom-event-currenttarget", "Event.currentTarget")}}</td>
   <td>{{Spec2("DOM WHATWG")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM4", "#dom-event-currenttarget", "Event.currentTarget")}}</td>
   <td>{{Spec2("DOM4")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM3 Events", "#dfn-current-event-target", "current event target")}}</td>
   <td>{{Spec2("DOM3 Events")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("DOM2 Events", "#Events-Event-currentTarget", "Event.currentTarget")}}</td>
   <td>{{Spec2("DOM2 Events")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Event.currentTarget")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/API/Event/Comparaison_des_cibles_d_évènements">Comparaison des différentes cibles pour les évènements</a></li>
</ul>
