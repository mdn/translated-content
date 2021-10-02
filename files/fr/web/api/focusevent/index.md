---
title: FocusEvent
slug: Web/API/FocusEvent
tags:
  - API
  - DOM
  - Evènement
  - Focus
  - Interface
translation_of: Web/API/FocusEvent
---
<p>{{APIRef("DOM Events")}}{{SeeCompatTable}}</p>

<p>L'interface <strong><code>FocusEvent</code> </strong>représente les événements liés au focus tels que<code> </code>{{event("focus")}}, {{event("blur")}}, {{event("focusin")}} ou {{event("focusout")}}.</p>

<h2 id="Constructeur">Constructeur</h2>

<dl>
 <dt>{{domxref("FocusEvent.FocusEvent", "FocusEvent()")}}</dt>
 <dd>crée un événement <strong>FocusEvent </strong>avec les paramètres donnés<strong>.</strong></dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p><em>Hértite des propriétés de son parent domxref("UIEvent")}} et indirectement de {{domxref("Event")}}</em>.</p>

<dl>
 <dt>{{domxref("FocusEvent.relatedTarget")}} {{readonlyInline}}</dt>
 <dd>est un {{domxref("EventTarget")}} représentant une cible secondaire pour cet événement. Car dans certain cas (comme quand vous tabulez dans ou hors de la page), cette propriété peut être définie comme étant nulle pour des raisons de sécurité.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<p><em>Aucune méthode spécifique ; Hérite des propriétés de son parent<em> {{domxref("UIEvent")}} </em>et indirectement de {{domxref("Event")}}</em>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM3 Events', '#interface-FocusEvent', 'FocusEvent')}}</td>
   <td>{{Spec2('DOM3 Events')}}</td>
   <td>Première définition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.FocusEvent")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface de base {{domxref("Event")}}</li>
</ul>
