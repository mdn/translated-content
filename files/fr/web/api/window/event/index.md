---
title: Window.event
slug: Web/API/Window/event
tags:
  - API
  - Evènement
  - Gestionnaire d'évènements
  - HTML DOM
  - Lecture seulement
  - Propriété
  - Window
translation_of: Web/API/Window/event
---
<div>{{APIRef("DOM")}}</div>

<p>L'événement de propriété {{domxref("Window")}} en lecture seule renvoie le {{domxref("Event")}} qui est actuellement géré par le code du site. En dehors du contexte d'un gestionnaire d'événements, la valeur est toujours <code>undefined</code>.</p>

<p>Vous devez éviter d'utiliser cette propriété dans un nouveau code et utiliser à la place le {{domxref ("Event")}} transmis à la fonction de gestionnaire d'événements. Cette propriété n'est pas prise en charge universellement et même lorsqu'elle est prise en charge, elle introduit une fragilité potentielle dans votre code.</p>

<div class="note">
<p><strong>Note:</strong> Cette propriété peut être fragile, dans la mesure où il peut y avoir des situations dans lesquelles <code>l'événement</code> renvoyé n'est pas la valeur attendue. De plus, <code>Window.event</code> n'est pas précis pour les événements distribués dans {{Glossary("shadow tree", "shadow trees")}}.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', "#dom-window-event", "Window.event")}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_Compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.event")}}</p>

<h2 id="Voir_également">Voir également</h2>

<ul>
 <li>{{domxref("Event.srcElement")}}</li>
</ul>
