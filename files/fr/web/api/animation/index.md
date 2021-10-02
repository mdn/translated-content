---
title: Animation
slug: Web/API/Animation
tags:
  - API
  - Animations
  - Experimental
  - Interface
  - Reference
  - Web Animations
  - waapi
  - web animation api
translation_of: Web/API/Animation
---
<p>{{ APIRef("Web Animations API") }}{{SeeCompatTable}}</p>

<p>L'interface <strong><code>Animation</code></strong> de <a href="/en-US/docs/Web/API/Web_Animations_API">l'API Web Animations</a> correspond à un lecteur d'animations et offre les commandes nécessaires au contrôle et à la chronologie d'un noeud ou d'une source d'animation.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("Animation.Animation()", "Animation()")}}</dt>
 <dd>Crée une nouvelle instance de l'objet <code>Animation</code>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{domxref("Animation.currentTime")}}</dt>
 <dd>La valeur actuelle de temps de l'animation en millisecondes, que l'animation soit en pause ou en cours. Si l'animation ne possède pas de {{domxref("AnimationTimeline", "timeline")}}, est inactive ou n'a toujours pas été lancée, la valeur est <code>null</code>.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.effect")}}</dt>
 <dd>Récupère et défini le {{domxref("KeyframeEffect")}} associé à cette animation.</dd>
 <dt>{{domxref("Animation.finished")}} {{readOnlyInline}}</dt>
 <dd>Retourne la <code>Promise </code>terminée en cours pour cette animation.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.id")}}</dt>
 <dd>Récupère et défini le <code>String</code> utilisé pour identifier l'animation.</dd>
 <dt>{{domxref("Animation.playState")}} {{readOnlyInline}}</dt>
 <dd>Retourne une valeur énumérée qui décit l'état de lecture de l'animation.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.playbackRate")}}</dt>
 <dd>Retourne et défini la fréquence de lecture de l'animation.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.ready")}} {{readOnlyInline}}</dt>
 <dd>Retourne la <code>Promise </code>prête en cours pour l'animation.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.startTime")}}</dt>
 <dd>Retourne et défini le moment prévu auquel la lecture de l'animation devrait commencer.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.timeline")}}</dt>
 <dd>Retourne et défini la {{domxref("AnimationTimeline", "timeline")}} associée à cette animation.</dd>
</dl>

<h3 id="Gestionnaire_d'événements">Gestionnaire d'événements</h3>

<dl>
 <dt>{{domxref("Animation.oncancel")}}</dt>
 <dd>Retourne et défini le gestionnaire d'événement pour l'événement <code>cancel </code>(annuler).</dd>
 <dt>{{domxref("Animation.onfinish")}}</dt>
 <dd>Retourne et défini le gestionnaire d'événement pour l'événement <code>finish</code> (terminer).</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{domxref("Animation.cancel()")}}</dt>
 <dd>Supprime toutes les {{domxref("KeyframeEffect", "keyframeEffects")}} dues à cette animation et interomp la lecture.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.finish()")}}</dt>
 <dd>Cherche la fin de l'animation, en fonction que l'animation soit en lecture normale ou inversée.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.pause()")}}</dt>
 <dd>Suspend la lecture de l'animation.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.play()")}}</dt>
 <dd>Démarre ou reprend la lecture de l'animation, ou redémarre l'animation au début si celle-ci est déjà terminée.</dd>
</dl>

<dl>
 <dt>{{domxref("Animation.reverse()")}}</dt>
 <dd>Inverse la direction de lecture, en s'arrêtant au début de l'animation. Si l'animation est terminée ou annulée, elle sera jouée de la fin vers le début.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName("Web Animations", "#the-animation-interface", "Animation")}}</td>
   <td>{{Spec2("Web Animations")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Animation")}}</p>