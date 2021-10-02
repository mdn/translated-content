---
title: Element.requestFullscreen()
slug: Web/API/Element/requestFullScreen
tags:
  - Méthode
  - Plein écran
translation_of: Web/API/Element/requestFullScreen
---
<div>{{APIRef("Fullscreen API")}}</div>

<p>La méthode <code><strong>Element.requestFullscreen()</strong></code> envoie une requête asynchrone pour que l'élément soit affiché en plein écran.</p>

<p>Il n'y a aucune garantie que l'élément passera effectivement en mode plein écran. Si la permission d'entrer en plein écran est acquise, le document recevra un événement {{event("fullscreenchange")}} pour l'informer qu'il est désormais en mode plein écran. Si la permission est refusée, le document recevra un événement {{event('fullscreenerror')}} à la place.</p>

<p>Cette méthode doit être invoquée par l'interaction d'un utilisateur ou un changement d'orientation du périphérique, sinon elle échouera.</p>

<div class="note">
<p><strong>Note :</strong> Seuls les éléments présents dans l'espace de noms (namespace) HTML (c'est à dire, les éléments qui font partie du standard HTML), ainsi que les éléments {{HTMLElement("svg")}} et {{HTMLElement("math")}}, qui se trouvent dans le plus haut niveau du document ou dans une {{HTMLElement('iframe')}} avec l'attribut {{htmlattrxref("allowfullscreen", "iframe")}} peuvent être affichés en plein écran. Cela signifie que les éléments se trouvant dans une {{HTMLElement('frame')}} ou un {{HTMLElement('object')}} ne le peuvent pas.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>Element</em>.requestFullscreen();
</pre>

<h2 id="Exemple">Exemple</h2>

<p>Avant d'appeler <code>requestFullScreen()</code>, mettez en place des gestionnaires (handlers) pour les évenements  {{event("fullscreenchange")}} et {{event("fullscreenerror")}}, pour savoir lorsque vous avez réussi à passer en mode plein écran (ou lorsque la permission de le faire a été refusée).</p>

<p>tbd</p>

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
   <td>{{SpecName("Fullscreen", "#dom-element-requestfullscreen", "Element.requestFullScreen()")}}</td>
   <td>{{Spec2("Fullscreen")}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Element.requestFullscreen")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Fullscreen_API">Full-screen API</a></li>
 <li>{{ domxref("Element.requestFullscreen()") }}</li>
 <li>{{ domxref("Document.exitFullscreen()") }}</li>
 <li>{{ domxref("Document.fullscreen") }}</li>
 <li>{{ domxref("Document.fullscreenElement") }}</li>
 <li>{{ cssxref(":fullscreen") }}</li>
 <li>{{ HTMLAttrXRef("allowfullscreen", "iframe") }}</li>
</ul>
