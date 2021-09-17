---
title: popstate
slug: Web/API/Window/popstate_event
translation_of: Web/API/Window/popstate_event
---
<p>L'événement <code>popstate</code> est exécuté lorsque l'entrée active de l'historique change. Si l'entrée active de l'historique en cours d'activation a été créé par un appel à <code>history.pushState()</code> ou a été affectée par un appel à <code>history.replaceState()</code>, la propriété <code>state</code> de l'événement <code>popstate</code> contient une copie de l'objet <code>state</code> de l'entrée d'historique.</p>

<p>Notez qu'un appel à <code>history.pushState()</code> ou <code>history.replaceState()</code> n'exécutera pas l'événement <code>popstate</code>. L'événement <code>popstate</code> est uniquement exécuté en réalisant une action dans le navigateur telle que cliquer sur le bouton de retour (ou appeler <code>history.back()</code> en JavaScript).</p>

<p>Les navigateurs ont tendance à gérer l'événement <code>popstate</code> différemment lors du chargement de la page. Chrome (avant la v34) et Safari émettent toujours un événement <code>popstate</code> lors du chargement de la page, contrairement à Firefox.</p>

<h2 id="Informations_générales">Informations générales</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Specification</dt>
 <dd style="margin: 0 0 0 120px;"><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/history.html#event-popstate">HTML5</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">PopStateEvent</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bubbles</dt>
 <dd style="margin: 0 0 0 120px;">Yes</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">defaultView</dd>
 <dt style="float: left; text-align: right; width: 120px;">Action par défaut</dt>
 <dd style="margin: 0 0 0 120px;">None</dd>
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
   <td>The browsing context (<code>window</code>).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>The type of event.</td>
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
   <td><code>state</code> {{readonlyInline}}</td>
   <td><em>any</em></td>
   <td>The current history entry's state object (if any).</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemple">Exemple</h2>

<p>Une page <code>http://example.com/example.html</code> exécutant le code suivant génèrera un journal comme spécifié :</p>

<pre class="brush: js">window.onpopstate = function(event) {
  console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
};
history.pushState({page: 1}, "title 1", "?page=1");
history.pushState({page: 2}, "title 2", "?page=2");
history.replaceState({page: 3}, "title 3", "?page=3");
history.back(); // Logs "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back(); // Logs "location: http://example.com/example.html, state: null
history.go(2);  // Logs "location: http://example.com/example.html?page=3, state: {"page":3}
</pre>

<p>Notez que même si l'entrée d'historique originelle (pour <code>http://example.com/example.html</code>) n'a pas d'objet state associé, un événement <code>popstate</code> est tout de même exécuté lorsque nous activons cette entrée au second appel à <code>history.back()</code>.</p>

<h2 id="Specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('HTML WHATWG', 'indices.html#event-popstate', 'popstate')}}</td>
      <td>{{Spec2('HTML WHATWG')}}</td>
    </tr>
  </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Window.popstate_event")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/API/History_API">Manipulation de l'historique du navigateur (l'API History)</a></li>
  <li><a href="/fr/docs/Web/API/Window/hashchange_event">Window : événement <code>hashchange</code></a></li>
 </ul>
