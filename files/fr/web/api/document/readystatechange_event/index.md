---
title: readystatechange
slug: Web/API/Document/readystatechange_event
translation_of: Web/API/Document/readystatechange_event
original_slug: Web/Events/readystatechange
---
<p>{{ApiRef}}</p>

<p>L'événement <code>readystatechange</code> est déclenché lorsque l'attribut <a href="/fr/docs/DOM/document.readyState"> <code>readyState</code> </a> d'un document a changé.</p>

<h2 id="Information_générale">Information générale</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Specification</dt>
 <dd style="margin: 0 0 0 120px;"><a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#current-document-readiness">HTML5</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">Event</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bubbles</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">Document</dd>
 <dt style="float: left; text-align: right; width: 120px;">Default Action</dt>
 <dd style="margin: 0 0 0 120px;">None.</dd>
</dl>

<h2 id="propriétés">propriétés</h2>

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
   <td>The event target (the topmost target in the DOM tree).</td>
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
 </tbody>
</table>

<h2 id="exemple">exemple</h2>

<pre class="brush: js">document.readyState === "complete";
// true


//alternative à DOMContentLoaded
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        initApplication();
    }
}
</pre>

<h2 id="Navigateur_compatible">Navigateur compatible</h2>

<p>Cet événement a longtemps été soutenue par Internet Explorer et peut être utilisé comme une alternative à l'evenement <code><a href="/fr/docs/">DOMContentLoaded</a></code> (voir la note [2] de la section <a href="/fr/docs/Web/Events/DOMContentLoaded#Navigateurs_compatibles">Navigateurs compatibles</a>).</p>

<h2 id="Les_événements_liés">Les événements liés</h2>

<ul>
 <li>{{event("DOMContentLoaded")}}</li>
 <li>{{event("readystatechange")}}</li>
 <li>{{event("load")}}</li>
 <li>{{event("beforeunload")}}</li>
 <li>{{event("unload")}}</li>
</ul>
