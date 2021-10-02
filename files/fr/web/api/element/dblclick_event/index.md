---
title: 'Element : évènement dblclick'
slug: Web/API/Element/dblclick_event
tags:
  - API
  - DOM
  - Event
  - Interface
  - Reference
  - dblclick
translation_of: Web/API/Element/dblclick_event
---
<div>{{APIRef}}</div>

<p>L'évènement <strong><code>dblclick</code></strong> se déclenche à partir d'un élément lorsqu'un bouton d'un dispositif de pointage est double-cliqué (c'est-à-dire qu'on clique deux fois sur le méme élément dans un temps très court).</p>

<p><code>dblclick</code> se déclenche après deux évènements {{domxref("Element/click_event", "click")}} (et, par extension, après deux paires d'évènements {{domxref("Element.mousedown_event", "mousedown")}} et {{domxref("Element.mouseup_event", "mouseup")}}).</p>

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
   <th scope="row">Propriété pour la gestion d'évènements</th>
   <td>{{domxref("GlobalEventHandlers.ondblclick", "ondblclick")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<p>Dans cet exemple, on modifie la taille d'une tuile lorsqu'on double-clique dessus.</p>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});</pre>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;aside&gt;
  &lt;h3&gt;Une tuile&lt;/h3&gt;
  &lt;p&gt;Double-cliquer pour redimensionner cet objet.&lt;/p&gt;
&lt;/aside&gt;</pre>

<h3 id="CSS">CSS</h3>

<pre class="brush: css">aside {
  background: #fe9;
  border-radius: 1em;
  display: inline-block;
  padding: 1em;
  transform: scale(.9);
  transform-origin: 0 0;
  transition: transform .6s;
}

.large {
  transform: scale(1.3);
}</pre>

<h3 id="Résultat">Résultat</h3>

<p>{{EmbedLiveSample("Exemples", 700, 200)}}</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
  </tr>
  <tr>
   <td>{{SpecName('UI Events', '#event-type-dblclick', 'dblclick')}}</td>
   <td>{{Spec2('UI Events')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#event-type-dblclick', 'dblclick')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.dblclick_event")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements">Une introduction aux évènements</a></li>
 <li>D'autres évènements connexes
  <ul>
   <li><a href="/fr/docs/Web/API/Element/mousedown_event"><code>mousedown</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseup_event"><code>mouseup</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mousemove_event"><code>mousemove</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseover_event">mouseover</a></li>
   <li><a href="/fr/docs/Web/API/Element/click_event"><code>click</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseout_event"><code>mouseout</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseenter_event"><code>mouseenter</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/mouseleave_event"><code>mouseleave</code></a></li>
   <li><a href="/fr/docs/Web/API/Element/contextmenu_event"><code>contextmenu</code></a></li>
  </ul>
 </li>
</ul>
