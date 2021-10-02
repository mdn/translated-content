---
title: hashchange
slug: Web/API/Window/hashchange_event
tags:
  - Reference
  - Web
translation_of: Web/API/Window/hashchange_event
---
<p>L'événement <code>hashchange</code> est déclenché lorsque l'identificateur de fragment de l'URL a changé (la partie de l'URL qui suit le symbole #, y compris le symbole # lui-même).</p>

<table class="properties">
 <tbody>
  <tr>
   <td>Bulles</td>
   <td>Oui</td>
  </tr>
  <tr>
   <td>Annulable</td>
   <td>Non</td>
  </tr>
  <tr>
   <td>Objets cibles</td>
   <td>{{domxref("Window")}}</td>
  </tr>
  <tr>
   <td>Interface</td>
   <td>{{domxref("HashChangeEvent")}}</td>
  </tr>
  <tr>
   <td>Action par défaut</td>
   <td>Aucune</td>
  </tr>
 </tbody>
</table>

<h2 id="Propriétés">Propriétés</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Propriété</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>The browsing context (<code>window</code>).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>Type de l'évènement</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event normally bubbles or not.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td>{{jsxref("Boolean")}}</td>
   <td>Whether the event is cancellable or not.</td>
  </tr>
  <tr>
   <td><code>oldURL</code> {{readonlyInline}}</td>
   <td>{{jsxref("String")}}</td>
   <td>The previous URL from which the window was navigated.</td>
  </tr>
  <tr>
   <td>newURL {{readonlyInline}}</td>
   <td>{{jsxref("String")}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<p>Il existe plusieurs scripts de secours listés sur <a href="https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills">cette page</a>. Fondamentalement, ces scripts vérifient le <code>location.hash</code> à intervalles réguliers. Voici une version qui n'autorise qu'un seul gestionnaire à être lié à la propriété <code>window.onhashchange</code>:</p>

<pre class="brush:js;">;(function(window) {

  // Sortir si le navigateur implémente cet événement
  if ("onhashchange" in window) { return; }

  var location = window.location,
    oldURL = location.href,
    oldHash = location.hash;

  // Vérifie la hash de la barre d'adresse toutes les 100ms
  setInterval(function() {
    var newURL = location.href,
      newHash = location.hash;

    // Si le hash a été changé et qu'un gestionnaire a été lié...
    if (newHash != oldHash &amp;&amp; typeof window.onhashchange === "function") {
      // exécute le gestionnaire
      window.onhashchange({
        type: "hashchange",
        oldURL: oldURL,
        newURL: newURL
      });

      oldURL = newURL;
      oldHash = newHash;
    }
  }, 100);

})(window);
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'indices.html#event-hashchange', 'hashchange')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.hashchange_event")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
 <li><a href="/en-US/docs/Mozilla_event_reference/popstate"><code>popstate</code></a></li>
 <li><a href="/en-US/docs/Web/API/WindowEventHandlers/onhashchange">WindowEventHandlers.onhashchange</a></li>
</ul>
