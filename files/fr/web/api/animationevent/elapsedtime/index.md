---
title: AnimationEvent.elapsedTime
slug: Web/API/AnimationEvent/elapsedTime
tags:
  - API
  - AnimationEvent
  - CSS Animations
  - Experimental
  - Property
  - Reference
translation_of: Web/API/AnimationEvent/elapsedTime
---
<p>{{SeeCompatTable}}{{ apiref("AnimationEvent") }}</p>

<h2 id="Résumé">Résumé</h2>

<p>La propriété en lecture seule <code><strong>AnimationEvent.elapsedTime</strong></code> est un <code>float</code> indiquant la quantité de temps pendant laquelle l'animation a tournée, en secondes, quand l'évènement a été déclenché, excluant tout temps où l'animation était en pause. Pour un évènement <code>"animationstart", </code><code>elapsedTime</code> est <code>0.0</code> sauf si {{cssxref("animation-delay")}} a une valeur négative, dans ce cas l'évènement est déclenché avec <code>elapsedTime </code>contenant <code>(-1 * </code><em>délai</em><code>)</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>temps</em> = <em>AnimationEvent</em>.elapsedTime</pre>

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
   <td>{{ SpecName('CSS3 Animations', '#AnimationEvent-elapsedTime', 'AnimationEvent.elapsedTime') }}</td>
   <td>{{ Spec2('CSS3 Animations')}}</td>
   <td>Première définition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.AnimationEvent.elapsedTime")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/CSS/Animations_CSS">Utiliser les animations CSS</a></li>
 <li>Propriétés CSS et règles @ en relations avec les animations CSS: {{cssxref("animation")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-fill-mode")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-name")}}, {{cssxref("animation-play-state")}}, {{cssxref("animation-timing-function")}}, {{cssxref("@keyframes")}}.</li>
 <li>L'interface {{domxref("AnimationEvent")}} à laquelle elle appartient.</li>
</ul>
