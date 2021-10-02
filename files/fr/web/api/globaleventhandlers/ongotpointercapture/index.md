---
title: GlobalEventHandlers.ongotpointercapture
slug: Web/API/GlobalEventHandlers/ongotpointercapture
translation_of: Web/API/GlobalEventHandlers/ongotpointercapture
---
<div>{{ApiRef("HTML DOM")}}</div>

<div>La propriété <strong><code>ongotpointercapture</code></strong> du mixin {{domxref("GlobalEventHandlers")}} est un {{event("Event_handlers", "event handler")}} qui traite les évènements de type {{event("gotpointercapture")}}.</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>target</em>.ongotpointercapture = <em>functionRef</em>;</pre>

<h3 id="Valeur">Valeur</h3>

<p><code>functionRef</code> est un nom de fonction ou une <a href="/en-US/docs/Web/JavaScript/Reference/Operators/function">expression fonction</a>. La fonction accepte un objet {{domxref("FocusEvent")}} en tant qu'unique argument.</p>

<h2 id="Example">Example</h2>

<pre class="brush: js">function overHandler(event) {
  // Obtient le gestionnaire de type "gotpointercapture" de la cible de l'événement
  let gotCaptureHandler = event.target.ongotpointercapture;
}

function init() {
  let el = document.getElementById('target');
  el.ongotpointercapture = overHandler;
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Status</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('Pointer Events 2', '#the-gotpointercapture-event', 'onlostpointercapture')}}</td>
   <td>{{Spec2('Pointer Events 2')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.GlobalEventHandlers.ongotpointercapture")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'évènement <code><a href="/en-US/docs/Web/API/Document/gotpointercapture_event">Document: gotpointercapture</a></code></li>
 <li>L'évènement <code><a href="/en-US/docs/Web/API/Element/gotpointercapture_event">Element: gotpointercapture</a></code></li>
 <li>{{domxref("Element.setPointerCapture()")}}</li>
</ul>
