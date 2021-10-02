---
title: PointerEvent
slug: Web/API/PointerEvent
translation_of: Web/API/PointerEvent
---
<p>{{ APIRef("Pointer Events") }}</p>

<p>L'interface <strong><code>PointerEvent</code></strong> représente les données de l'état d'un événément du DOM produit par un pointeur, tels que la géométrie du point de contact, le type d'appareil qui a généré l'événément, l'intensité de pression qui a été appliquée au contact de la surface, etc.</p>

<p>Un <em>pointeur</em> est une représentation agnostique de tout appareil de saisie (tels qu'une souris, un stylet, ou un point de contact sur une surface tactile). Le pointeur peut cibler des coordonnées spécifiques (ou une collection de coordonnées) sur la surface de contact telle qu'un écran.</p>

<p>Le <em>test de ciblage</em> d'un pointeur est le processus qu'un navigateur utilise pour déterminer l'élément pour un événément de pointeur. Typiquement, cela est déterminé en considérant la position du pointeur ainsi que l'agencement visuel des éléments dans un document sur l'écran.</p>

<h2 id="Constructeurs">Constructeurs</h2>

<dl>
 <dt>{{domxref("PointerEvent.PointerEvent", "PointerEvent()")}}</dt>
 <dd>Crée un PointerEvent synthétique et anonyme.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Cette interface hérite des proprétés de {{domxref("MouseEvent")}} et {{domxref("Event")}}.</em></p>

<dl>
 <dt>{{ domxref('PointerEvent.pointerId')}} {{readonlyInline}}</dt>
 <dd>Un identifiant unique pour le pointeur ayant provoqué l'événément.</dd>
 <dt>{{ domxref('PointerEvent.width')}} {{readonlyInline}}</dt>
 <dd>La largeur (magnitude sur l'axe X), en pixels CSS, de la géométrie de contact du pointeur.</dd>
 <dt>{{ domxref('PointerEvent.height')}} {{readonlyInline}}</dt>
 <dd>La hauteur (magniture sur l'axe Y), en pixels CSS, de la géométrie de contact du pointeur.</dd>
 <dt>{{ domxref('PointerEvent.pressure')}} {{readonlyInline}}</dt>
 <dd>La pressure normalisée de l'influx du pointeur dans un intervalle compris entre 0 et 1, où 0 et 1 représentent respectivement la pression minimale et maximale que l'appareil est capable de détecter.</dd>
 <dt>{{ domxref('PointerEvent.tangentialPressure')}} {{readonlyInline}}</dt>
 <dd>La pression tangentielle normalisée d'un influx de pointeur (également nommée compression ou contrainte cylindrique), où 0 et 1 représentent respectivement la pression minimale et maximale que l'appareil est capable de détecter.</dd>
 <dt>{{ domxref('PointerEvent.tiltX')}} {{readonlyInline}}</dt>
 <dd>Le plan de l'angle (en dégrés, dans un intervalle compris entre -90 et 90) entre le plan Y-Z et le plan contenant à la fois l'axe du transducteur (ex. : un crayon stylet) et l'axe Y.</dd>
 <dt>{{ domxref('PointerEvent.tiltY')}} {{readonlyInline}}</dt>
 <dd>Le plan de l'angle (en dégrés, dans un intervalle compris entre -90 et 90) entre le plan X-Z et le plan contenant à la fois l'axe du transducteur (ex. : un crayon stylet) et l'axe X.</dd>
 <dt>{{ domxref('PointerEvent.twist')}} {{readonlyInline}}</dt>
 <dd>La rotation en degrés et dans le sens des aiguilles d'une montre, d'un transducteur (ex. : crayon stylet) autour de axe principal, avec une valeur comprise dans un intervalle entre 0 et 359.</dd>
 <dt>{{ domxref('PointerEvent.pointerType')}} {{readonlyInline}}</dt>
 <dd>Indique le type d'appareil qui a provoqué l'événément (souris, stylet, touché, etc.)</dd>
 <dt>{{ domxref('PointerEvent.isPrimary')}} {{readonlyInline}}</dt>
 <dd>Indique si le pointeur est le principal appareil de ce type.</dd>
</dl>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{ domxref('PointerEvent.getCoalescedEvents()')}} {{deprecated_inline}}</dt>
 <dd>Retourne une séquence de toutes les instances de <code>PointerEvent</code> qui ont été dirigées vers l'événément {{event("pointermove")}} envoyé.</dd>
</dl>

<h2 id="Types_d'événéments_de_pointeur">Types d'événéments de pointeur</h2>

<p>L'interface <code>PointerEvent</code> a plusieurs types d'événéments. Pour déterminer quel événément s'est produit, regardez la propriété {{ domxref("Event.type", "type") }} de l'événément.</p>

<div class="note">
  <p><strong>Note :</strong> Il est important de remarquer que dans beaucoup de cas, à la fois les événéments du pointeur et de la souris sont envoyés (afin de laisser la logique interagir avec l'utilisateur même lorsqu'elle n'est pas spécifique à un type de pointeur) . Si vous utilisez les événéments de pointeur, vous devez exécuter {{ domxref("event.preventDefault()") }} afin d'empêcher l'événément de la souris d'être également envoyée.</p>
</div>

<dl>
 <dt>{{event('pointerover')}}</dt>
 <dd>Cet événément est déclenché lorsqu'un appareil de pointage est déplacé vers la zone du test de ciblage d'un élément.</dd>
 <dt>{{event('pointerenter')}}</dt>
 <dd>Cet événément est déclenché lorsqu'un appareil de pointage est déplacé vers la zone du test de ciblage d'un élément ou l'un de ses descendants, ce qui inclut un événément de pointage vers le bas d'un appareil qui ne propose pas de fonctionnalité de survol (voir pointage vers le bas). Ce type d'événément est similaire à un pointage par dessus, mais se différencie en ne faisant pas circuler l'événément.</dd>
 <dt>{{event('pointerdown')}}</dt>
 <dd>L'événément est déclenché lorsqu'un pointeur devient <em>actif</em>. Pour une souris, il est déclenché lorsque l'appareil passe d'aucun bouton pressé à au moins un bouton pressé. Pour un touché, il est déclenché lorsqu'un contact physique est effectué avec le numériseur. Pour un stylet, il est déclenché au contact de ce dernier avec le numériseur.</dd>
 <dt>{{event('pointermove')}}</dt>
 <dd>Cet événément est déclenché lorsqu'un pointeur change de coordonnées.</dd>
 <dt>{{event('pointerup')}}</dt>
 <dd>Cet événement est déclenché lorsqu'un pointeur n'est plus <em>actif</em>.</dd>
 <dt>{{event('pointercancel')}}</dt>
 <dd>Un navigateur déclenche cet événément s'il conclut que le pointeur ne sera plus capable de générer des événéments (par exemple, l'appareil concerné a été désactivé).</dd>
 <dt>{{event('pointerout')}}</dt>
 <dd>Cet événément est déclenché pour plusieurs raisons qui incluent : l'appareil de pointage est déplacé en dehors de la zone du test de ciblage d'un élément; déclencher l'événément de pointage vers le haut pour un appareil qui ne supporte pas le survol (voir pointage vers le haut); après avoir déclenché un événément de pointage annulé (voir pointage annulé); lorsqu'un stylet quitte la zone de portée pour être détectée au survol par le numériseur.</dd>
 <dt>{{event('pointerleave')}}</dt>
 <dd>Cet événément est déclenché lorsqu'un appareil de pointage est déplacé en dehors de la zone de ciblage d'un élément. Pour les appareils avec un stylet, cet événément est déclenché lorsque le stylet quitte la zone de portée pour être détectée au survol par le numériseur.</dd>
 <dt>{{event('gotpointercapture')}}</dt>
 <dd>Cet événément est déclenché lorsqu'un élément est capturé par un pointeur.</dd>
 <dt>{{event('lostpointercapture')}}</dt>
 <dd>Cet événément est déclenché après qu'un pointeur ait relâché sa capture.</dd>
</dl>

<h2 id="GlobalEventHandlers">GlobalEventHandlers</h2>

<dl>
 <dt>{{ domxref('GlobalEventHandlers.onpointerover') }}</dt>
 <dd>Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerover')}}.</dd>
 <dt>{{ domxref('GlobalEventHandlers.onpointerenter') }}</dt>
 <dd>Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerenter')}}.</dd>
 <dt>{{ domxref('GlobalEventHandlers.onpointerdown') }}</dt>
 <dd>Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerdown')}}.</dd>
 <dt>{{ domxref('GlobalEventHandlers.onpointermove') }}</dt>
 <dd>Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointermove')}}.</dd>
 <dt>{{ domxref('GlobalEventHandlers.onpointerup') }}</dt>
 <dd>Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerup')}}.</dd>
 <dt>{{ domxref('GlobalEventHandlers.onpointercancel') }}</dt>
 <dd>Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointercancel')}}.</dd>
 <dt>{{ domxref('GlobalEventHandlers.onpointerout') }}</dt>
 <dd>Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerout')}}.</dd>
 <dt>{{ domxref('GlobalEventHandlers.onpointerleave') }}</dt>
 <dd>Un {{domxref('GlobalEventHandlers','global event handler')}} pour l'événement {{event('pointerleave')}}.</dd>
</dl>

<h2 id="Exemple">Exemple</h2>

<p>Un exemple de chaque propriété, type d'événément, et un gestionnaire d'événéments global sont inclus dans leur page respective de référence.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events 2','#pointerevent-interface', 'PointerEvent')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td>Version non-stable.</td>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events', '#pointerevent-interface', 'PointerEvent')}}</td>
   <td>{{Spec2('Pointer Events')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_navigateurs">Compatibilité navigateurs</h2>



<p>{{Compat("api.PointerEvent")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{ domxref("Touch_events","Touch Events") }}</li>
 <li>{{ domxref("GestureEvent") }}</li>
 <li>{{ domxref("MSGestureEvent") }}</li>
 <li>{{cssxref("touch-action")}}</li>
</ul>
