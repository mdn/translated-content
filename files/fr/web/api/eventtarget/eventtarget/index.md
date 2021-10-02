---
title: EventTarget()
slug: Web/API/EventTarget/EventTarget
tags:
  - API
  - Cible
  - Constructeur
  - DOM
  - évènements
translation_of: Web/API/EventTarget/EventTarget
---
<div>{{APIRef("DOM Events")}}</div>

<p>Le constructeur <code><strong>EventTarget()</strong></code> crée une nouvelle instance d'objet {{domxref("EventTarget")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <var>myEventTarget</var> = new EventTarget();</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Aucun.</p>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Une instance d'objet {{domxref("EventTarget")}}.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret;  // == 5
myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-eventtarget-eventtarget', 'EventTarget() constructor')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.EventTarget.EventTarget")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("EventTarget")}}</li>
</ul>

<p> </p>
