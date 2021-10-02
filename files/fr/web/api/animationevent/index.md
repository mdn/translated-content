---
title: AnimationEvent
slug: Web/API/AnimationEvent
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - Web Animations
translation_of: Web/API/AnimationEvent
---
<p>{{SeeCompatTable}}{{APIRef("Web Animations API")}}</p>

<p>L'interface <code><strong>AnimationEvent</strong></code> représentent les évènements apportant des informations sur les <a href="/fr/docs/CSS/Animations_CSS">animations CSS</a>.</p>

<p>{{InheritanceDiagram}}</p>

<dl>
</dl>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}</dt>
 <dd>Créer un évènement AnimationEvent avec les paramètres spécifiés.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hérite également des propriétés de son parent {{domxref("Event")}}.</em></p>

<dl>
 <dt>{{domxref("AnimationEvent.animationName")}} {{readonlyInline}}</dt>
 <dd>Est une {{domxref("DOMString")}} contenant la valeur de la propriété CSS {{cssxref("animation-name")}} associée à la transition.</dd>
 <dt>{{domxref("AnimationEvent.elapsedTime")}} {{readonlyInline}}</dt>
 <dd>Est un nombre à virgule flottante, donnant le temps pendant lequel l'animation s'est déroulée, en secondes, quand l'évènement est déclenché, en excluant tous les temps de pause de l'animation. Pour un évènement <code>animationstart</code>, <code>elapsedTime</code> est à 0.0 sauf si {{cssxref("animation-delay")}} a une valeur négative. Dans ce cas, l'évènement sera déclenché avec <code>elapsedTime</code> contenant (-1 * la valeur de <code>animation-delay</code>).</dd>
 <dt>{{domxref("AnimationEvent.pseudoElement")}} {{readonlyInline}}</dt>
 <dd>est une {{domxref("DOMString")}}, démarrant avec '::', contenant le nom du pseudo-élément où l'animation se déroule. Si l'animation ne se déroule pas sur un pseudo-élément, mais sur un élément, la chaîne de caractères sera vide.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Hérite également des propriétés de son parent {{domxref("Event")}}.</em></p>

<dl>
 <dt>{{domxref("AnimationEvent.initAnimationEvent()")}} {{non-standard_inline}}{{deprecated_inline}}</dt>
 <dd>Initialise un AnimationEvent créé avec la méthode obsolète {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}}.</dd>
</dl>

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
   <td>{{ SpecName('CSS3 Animations', '#AnimationEvent-interface', 'AnimationEvent') }}</td>
   <td>{{ Spec2('CSS3 Animations') }}</td>
   <td>Première définition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.AnimationEvent")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li><a href="/fr/docs/CSS/Animations_CSS">Utiliser les animations CSS</a></li>
 <li>{{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.</li>
</ul>
