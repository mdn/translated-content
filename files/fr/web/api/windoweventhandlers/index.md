---
title: WindowEventHandlers
slug: Web/API/WindowEventHandlers
tags:
  - API
translation_of: Web/API/WindowEventHandlers
---
<div>{{APIRef("HTML DOM")}}</div>

<div>La mixin <strong><code>WindowEventHandlers</code></strong> décrit les gestionnaires d'événements communs à plusieurs interfaces comme {{domxref("Window")}}, or {{domxref("HTMLBodyElement")}} et {{domxref("HTMLFrameSetElement")}}. Chacune de ces interfaces peut implémenter des gestionnaires d'événement supplémentaires.</div>


<div class="note">
<p><strong>Note :</strong> <code>WindowEventHandlers</code> est une mixin et non une interface; il n'est pas possible de créer un objet de type <code>WindowEventHandlers</code>.</p>
</div>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Les propriétés d'événement, de la forme <code>onXYZ</code>, sont définis sur {{domxref("WindowEventHandlers")}} et implémentées par {{domxref("Window")}} ou {{domxref("WorkerGlobalScope")}} pour les Web Workers.</em></p>

<dl>
 <dt>{{domxref("WindowEventHandlers.onafterprint")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("afterprint")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onbeforeprint")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("beforeprint")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onbeforeunload")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("beforeunload")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onhashchange")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("hashchange")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onlanguagechange")}} {{experimental_inline}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("languagechange")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onmessage")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("message")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onoffline")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("offline")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.ononline")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("online")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onpagehide")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("pagehide")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onpageshow")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("pageshow")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onpopstate")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("popstate")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onresize")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("resize")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onstorage")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("storage")}} est déclenché.</dd>
 <dt>{{domxref("WindowEventHandlers.onunload")}}</dt>
 <dd>Est un {{event("Event_handlers", "event handler")}} représentant le code à appeler lorsque l'événement {{event("unload")}} est déclenché.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Cette interface ne définit aucune méthode.</em></p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#windoweventhandlers', 'GlobalEventHandlers')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de changement depuis {{SpecName("HTML5.1")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', '#windoweventhandlers', 'GlobalEventHandlers')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Snapshot de {{SpecName("HTML WHATWG")}}. Ajoute <code>onlanguage</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "#windoweventhandlers", "GlobalEventHandlers")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Snapshot de {{SpecName("HTML WHATWG")}}. Création de <code>WindowEventHandlers</code> (les propriétés étaient sur la cible avant).</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WindowEventHandlers")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Window")}} et {{domxref("WorkerGlobalScope")}}</li>
</ul>
