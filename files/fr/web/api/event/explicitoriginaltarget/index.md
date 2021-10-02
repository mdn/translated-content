---
title: Event.explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
tags:
  - API
  - DOM
  - Gecko
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/API/Event/explicitOriginalTarget
---
<div>{{ApiRef("DOM")}}{{Non-standard_header}}</div>

<p>Cette propriété représente la cible originale de l'évènement. Elle est spécifique à Mozilla.</p>

<p>Si l'évènement a été déporté pour une autre raison qu'une traverséee de frontière anonyme, cette propriété correspondra à la cible avant la déportation de l'évènement. Par exemples, les évènements de la souris sont déportés vers leur nœud parent lorsqu'ils se produisent sur des nœuds texte (cf. {{Bug(185889)}}). Dans ce cas <code><a href="/fr/docs/Web/API/Event/currentTarget">currentTarget</a></code> pointera vers le parent et <code>explicitOriginalTarget</code> vers le nœud texte.</p>

<p>À la différence de <code><a href="/fr/docs/Web/API/Event/originalTarget">originalTarget</a></code>, <code>explicitOriginalTarget</code> ne contiendra jamais de contenu anonyme.</p>

<p>Voir aussi une <a href="/fr/docs/DOM/event/Comparison_of_Event_Targets">comparaison des cibles pour les évènements</a>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Cette propriété peut être utiliséee avec <code>&lt;command&gt;</code> afin d'obtenir les détails de l'évènement de l'objet qui a invoqué la commande.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;command id="my-cmd-anAction"
         oncommand="myCommand(event);"/&gt;
&lt;menulist&gt;
  &lt;menupopup&gt;
    &lt;menuitem label="Get my element name!"
              command="my-cmd-anAction"/&gt;
  &lt;/menupopup&gt;
&lt;/menulist&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">function myCommand(ev) {
  console.log(ev.explicitOriginalTarget.nodeName);
  // affichera 'menuitem'
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Cette propriété est spécifique à Mozilla. Elle est définie dans l'IDL {{Source("/dom/public/idl/events/nsIDOMNSEvent.idl")}}</p>

<p>Cette propriété <strong>n'est pas définie</strong> dans la spécification <a href="https://www.w3.org/TR/DOM-Level-2-Events/events.html">DOM Level 2 Events</a></p>
