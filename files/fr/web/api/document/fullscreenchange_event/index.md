---
title: fullscreenchange
slug: Web/API/Document/fullscreenchange_event
translation_of: Web/API/Document/fullscreenchange_event
---
<p>L'événement <strong><code>onfullscreenchange</code></strong> est déclenché lorsque le navigateur alterne entre le mode fenêtré et plein écran.</p>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Spécification</dt>
 <dd style="margin: 0 0 0 120px;"><a href="https://dvcs.w3.org/hg/fullscreen/raw-file/tip/Overview.html#api">Fullscreen</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("Event")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Propagation</dt>
 <dd style="margin: 0 0 0 120px;">Oui</dd>
 <dt style="float: left; text-align: right; width: 120px;">Annulable</dt>
 <dd style="margin: 0 0 0 120px;">Non</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cible</dt>
 <dd style="margin: 0 0 0 120px;">{{domxref("Document")}}</dd>
 <dt style="float: left; text-align: right; width: 120px;">Action par défaut</dt>
 <dd style="margin: 0 0 0 120px;">Aucune</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>L'élément recevant l'événement.</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>Le type de l'événement.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Indique si l'événement bubble habituellement ou non.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Indique si l'événement est annulable ou non.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemple">Exemple</h2>

<pre class="brush:js;">// Noter que l'API est toujours vendor-prefixed dans les navigateurs l'implémentant
document.addEventListener("fullscreenchange", function( event ) {

    // L'objet event ne porte pas l'information à propos du mode plein écran
    // Cependant, il est possible de la trouver à travers l'API fullscreen
    if ( document.fullscreen ) {

        // La cible de l'événement est toujours le document,
        // mais il est possible de retrouver l'élément fullscreen à travers l'API
        document.fullscreenElement;
    }

});</pre>

<h2 id="Evénements_liés">Evénements liés</h2>

<ul>
 <li><a href="/fr/docs/Mozilla_event_reference/fullscreenerror"><code>fullscreenerror</code></a></li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/DOM/Using_full-screen_mode">Utilisation du mode plein écran</a></li>
</ul>
