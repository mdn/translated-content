---
title: TransitionEvent
slug: Web/API/TransitionEvent
translation_of: Web/API/TransitionEvent
---
<p>{{APIRef("CSSOM")}} {{SeeCompatTable}}</p>

<p>L' <code><strong>Transition</strong></code><strong><code>Event</code></strong>interface représente des événements fournissant des informations relatives aux <a href="/en-US/docs/Web/Guide/CSS/Using_CSS_transitions">transitions</a> .</p>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite également des propriétés de son parent {{domxref("Event")}}</em> .</p>

<dl>
 <dt>{{domxref("TransitionEvent.propertyName")}} {{readonlyInline}}</dt>
 <dd>Est-ce qu'un {{domxref("DOMString")}} contient le nom de la propriété CSS associée à la transition.</dd>
 <dt>{{domxref("TransitionEvent.elapsedTime")}} {{readonlyInline}}</dt>
 <dd>Est- <code>float</code>ce que la durée de l'exécution est en cours, en secondes, lorsque cet événement a été déclenché. Cette valeur n'est pas affectée par la propriété {{cssxref ("transition-delay")}}.</dd>
 <dt>{{domxref("TransitionEvent.pseudoElement")}} {{readonlyInline}}</dt>
 <dd>Est-ce qu'un {{domxref("DOMString")}}, commençant par <code>'::'</code>, contenant le nom du <a href="/en-US/docs/Web/CSS/Pseudo-elements">pseudo-élément</a> sur lequel s'exécute l'animation. Si la transition ne s'exécute pas sur un pseudo-élément mais sur l'élément, une chaîne vide:<code>''</code><code>.</code></dd>
</dl>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("TransitionEvent.TransitionEvent", "TransitionEvent ()")}}</dt>
 <dd>Crée un <code>TransitionEvent</code>événement avec les paramètres donnés.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Hérite également des propriétés de son parent {{domxref("Event")}}</em> .</p>

<dl>
 <dt>{{domxref("TransitionEvent.initTransitionEvent ()")}} {{non-standard_inline}} {{deprecated_inline}}</dt>
 <dd>Initialise un <code>TransitionEvent</code>créé en utilisant la méthode {{domxref("Document.createEvent ()")}} déconseillée.</dd>
</dl>

<h2 id="Caractéristiques">Caractéristiques</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName ('Transitions CSS3', '# Événements-TransitionEvent', 'TransitionEvent')}}</td>
   <td>{{Spec2 ('Transitions CSS3')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_du_navigateur">Compatibilité du navigateur</h2>

<p>{{Compat}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li><a href="/en-US/docs/Web/Guide/CSS/Using_CSS_transitions">Utilisation des transitions CSS</a></li>
 <li>Propriétés de CSS: {{cssxref ("transition")}}, {{cssxref ("transition-delay")}}, {{cssxref ("transition-duration")}}, {{cssxref ("transition-property") }}, {{Cssxref ("transition-timing-function")}}.</li>
</ul>
