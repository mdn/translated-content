---
title: Gérer à la fois événement tactile et événement de la souris
slug: Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
translation_of: Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent
original_slug: >-
  Web/Guide/DOM/Events/Touch_events/Gérer_à_la_fois_événement_tactile_et_événement_de_la_souris
---
<p>{{DefaultAPISidebar("Touch Events")}}</p>

<p>Les interfaces {{domxref("Touch_events","touch")}} permettent aux applications de créer de meilleures expériences utilisateurs sur les appareils tactiles. Pourtant, la grande majorité du contenu web actuel est développé pour fonctionner uniquement avec la souris. En conséquence, même si un navigateur supporte le tactile, le navigateur continue à <em>émuler</em> les événements de la souris, donc le contenu qui se veut fonctionner uniquement à la souris fonctionnera toujours <em>tel quel </em>sans modification directe.</p>

<p>Idéalement, une application tactile n'a pas besoin de supporter explicitement la souris. Mais puisque le navigateur doit émuler les événements de la souris, il peut être nécessaire de gérer certains problèmes d'interaction. Ci-dessous, vous trouverez des détails concernant l'interaction et ses répercussions pour les développeurs d'application.</p>

<h2 id="Déclenchement_de_l'événement">Déclenchement de l'événement</h2>

<p>La norme des événements tactiles définit quelques exigences envers les navigateurs concernant l'interaction tactile et souris (voir la section <a href="https://w3c.github.io/touch-events/#mouse-events"><em>Interaction with Mouse Events and click</em></a> pour plus de détails), noter que <em>le navigateur peut déclencher à la fois des événements tactiles et des événements de la souris en réponse à une seule et même entrée de l'utilisateur.</em> Cette section décrit les exigences pouvant affecter une application.</p>

<p>Si le navigateur déclenche à la fois des événements tactiles et souris en réponse à une seule entrée d'un utilisateur, le navigateur <em>doit</em> déclencher un événement {{event("touchstart")}} avant tout événement de la souris. En conséquence, si une application ne veut pas que des événements de la souris soient déclenchés sur un élément {{domxref("Touch.target","target")}} spécifiquement tactile, le gestionnaire de l'événement tactile de l'élément devrait appeler {{domxref("Event.preventDefault()","preventDefault()")}} ainsi aucun événement additionnel de la souris sera envoyé.</p>

<p>Voici un extrait de code du gestionnaire de l'événement {{event("touchmove")}} qui appelle <code>preventDefault()</code>.</p>

<pre class="brush: js">// touchmove handler
function process_touchmove(ev) {
  // Call preventDefault() to prevent any further handling
  ev.preventDefault();
}
</pre>

<h2 id="Ordre_des_événements">Ordre des événements</h2>

<p>Même si l'ordre spécifique des événements tactiles et souris est défini par l'implémentation, la norme indique que l'ordre suivant est <em>représentatif:</em> pour une entrée :</p>

<ul>
 <li><code>touchstart</code></li>
 <li>Zero ou plus d'événements <code>touchmove</code>, suivant le mouvement de(s) doigt(s)</li>
 <li><code>touchend</code></li>
 <li><code>mousemove</code></li>
 <li><code>mousedown</code></li>
 <li><code>mouseup</code></li>
 <li><code>click</code></li>
</ul>

<p>Si l'événement {{event("touchstart")}}, {{event("touchmove")}} ou {{event("touchend")}} est annulé pendant une interaction, aucun événement de la souris ou du click sera déclenché, et la séquence des événements qui en résulte serait seulement :</p>

<ul>
 <li><code>touchstart</code></li>
 <li>Zero ou plus d'événements <code>touchmove</code>, suivant le mouvement de(s) doigt(s)</li>
 <li><code>touchend</code></li>
</ul>

<h2 id="Community">Community</h2>

<ul>
 <li><a href="https://github.com/w3c/touch-events">Touch Events Community Group</a></li>
 <li><a href="https://lists.w3.org/Archives/Public/public-touchevents/">Mail list</a></li>
 <li><a href="irc://irc.w3.org:6667/">W3C #touchevents IRC channel</a></li>
</ul>

<h2 id="Related_topics_and_resources">Related topics and resources</h2>

<ul>
 <li><a href="/Web/API/Touch_events">Touch Events Overview</a></li>
 <li><a href="/Web/API/Touch_events/Using_Touch_Events">Using Touch Events</a></li>
 <li><a href="http://www.html5rocks.com/en/mobile/touchandmouse/">Touch and Mouse (Together Again for the First Time)</a></li>
</ul>
