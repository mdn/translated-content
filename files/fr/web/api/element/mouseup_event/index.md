---
title: 'Element : évènement mouseup'
slug: Web/API/Element/mouseup_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - Reference
  - events
  - mouseup
translation_of: Web/API/Element/mouseup_event
---
<div>{{APIRef}}</div>

<p>L'évènement <strong><code>mouseup</code></strong> est déclenché à partir d'un {{domxref("Element")}} lorsqu'un bouton d'un dispositif de pointage (une souris ou un pavé tactile par exemple) est relaché lorsque le pointeur est sur cet élément.</p>

<p>Les évènements <code>mouseup</code> peuvent être comparés aux évènements {{domxref("Element.mousedown_event", "mousedown")}} qui se produisent lorsqu'on <em>appuie</em> sur un bouton.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Se propage/remonte dans le DOM</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Annulable</th>
   <td>Oui</td>
  </tr>
  <tr>
   <th scope="row">Interface</th>
   <td>{{domxref("MouseEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Propriété pour la gestion d'évènement</th>
   <td>{{domxref("GlobalEventHandlers.onmouseup", "onmouseup")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>{{page("/fr/docs/Web/API/Element/mousemove_event", "Exemples")}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
  </tr>
  <tr>
   <td>{{SpecName('UI Events', '#event-type-mouseup', 'mouseup')}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#event-type-mouseup', 'mouseup')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.mouseup_event")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements">Une introduction aux évènements</a></li>
 <li>D'autres évènements connexes
  <ul>
   <li><a href="/fr/docs/Web/API/Element/mousedown_event"><code>mousedown</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mousemove_event"><code>mousemove</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/click_event"><code>click</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/dblclick_event"><code>dblclick</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseout_event"><code>mouseout</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseover_event"><code>mouseover</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseenter_event"><code>mouseenter</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseleave_event"><code>mouseleave</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/contextmenu_event"><code>contextmenu</code></a></li>
  </ul>
 </li>
</ul>
