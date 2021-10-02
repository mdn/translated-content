---
title: element.click
slug: Web/API/HTMLElement/click
tags:
  - DOM
  - Référence_du_DOM_Gecko
translation_of: Web/API/HTMLElement/click
---
<p>{{ ApiRef() }}</p>
<h2 id="R.C3.A9sum.C3.A9">Résumé</h2>
<p>La méthode <b>click</b> simule un clic sur un élément.</p>
<h2 id="Syntaxe">Syntaxe</h2>
<pre class="syntaxbox">element.click()</pre>
<h2 id="Notes">Notes</h2>
<p>Lorsque la méthode <code>click</code> est utilisée sur des éléments où elle est gérée (par exemple un {{HTMLElement("input")}}), elle déclenche également l'évènement <code>click</code> de l'élément qui se propagera aux éléments situés plus haut dans l'arbre du document (ou la chaîne évènementielle) et déclenchera aussi leurs évènements <code>click</code>. Cependant, la propagation d'un évènement <code>click</code> ne déclenchera pas la navigation à partir d'un élément {{HTMLElement("a")}} comme si un vrai clic de souris avait été reçu.</p>
<p>Au moment où sont écrites ces lignes (Opera Next est à la version 12.11), la méthode <code>click</code> d'Opera <strong>sera ignorée silencieusement</strong>, si executée sur un élément {{HTMLElement("input")}} avec un type "file", et une propriété <a href="/fr/docs/CSS">CSS</a> {{cssxref('display')}} à "none".</p>
<div>
 <p>{{gecko_callout_heading("5.0")}}</p>
 <p>Avant Gecko 5.0 {{geckoRelease("5.0")}}, Gecko supportait la méthode <code>click</code> qu'avec des éléments {{HTMLElement("input")}} de type
  <i>
   button</i>
  ,
  <i>
   checkbox</i>
  ,
  <i>
   radio</i>
  ,
  <i>
   reset</i>
  ou
  <i>
   submit</i>
  . Gecko n'implémentait pas la méthode <code>click</code> sur d'autres éléments qui auraient pu répondre à des clics de souris comme les liens (éléments {{HTMLElement("a")}}), et ne déclenchait pas nécessairement l'évènement click d'autres éléments.</p>
 <p>Cependant, maintenant Gecko supporte la méthode sur tous les éléments comme requis par <a href="/fr/docs/HTML/HTML5">HTML5</a>.</p>
 <p>D'autres implémentations du DOM peuvent se comporter différemment.</p>
</div>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-2651361')}} <small>— <a href="http://www.yoyodesign.org/doc/w3c/dom2/html/html.html#ID-2651361">traduction en français</a> (non normative)</small></td>
   <td>{{Spec2('DOM2 HTML')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

p>{{Compat("api.HTMLElement.click")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li>Gestionnaires d'événements liés
    <ul>
      <li>{{domxref("GlobalEventHandlers.onclick")}}</li>
      <li>{{domxref("GlobalEventHandlers.ondblclick")}}</li>
      <li>{{domxref("GlobalEventHandlers.onauxclick")}}</li>
    </ul>
  </li>
</ul>
