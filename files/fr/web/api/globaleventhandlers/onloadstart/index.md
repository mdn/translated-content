---
title: GlobalEventHandlers.onloadstart
slug: Web/API/GlobalEventHandlers/onloadstart
tags:
  - API
  - DOM
  - Gestionnaires d'évènements
  - Propriétés
  - évènements
translation_of: Web/API/GlobalEventHandlers/onloadstart
---
<div>{{ApiRef}}</div>

<p>La propriété <strong><code>onloadstart</code></strong> du "mixin" {{domxref("GlobalEventHandlers")}} est un {{event("Event_handlers", "event handler")}} (<em>gestionnaire d'évènements</em>) représentant le code à appeler lorsque l'évènement {{event("loadstart")}} est déclenché (quand la progression est commencée sur le chargement d'une ressource).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>img</var>.onloadstart = <var>funcRef</var>;
</pre>

<h3 id="Valeur">Valeur</h3>

<p><code>funcRef</code> est la fonction du gestionnaire à appeler lorsque l'évènement <code>loadstart</code> de la ressource est déclenché.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Contenu_HTML">Contenu HTML</h3>

<pre class="brush: html">&lt;img src="myImage.jpg"&gt;</pre>

<h3 id="Contenu_JavaScript">Contenu JavaScript</h3>

<pre class="brush: js">// 'loadstart' est lancé le premier, puis 'load', puis 'loadend'

image.addEventListener('load', function(e) {
  console.log('Image loaded');
});

image.addEventListener('loadstart', function(e) {
  console.log('Image load started');
});

image.addEventListener('loadend', function(e) {
  console.log('Image load finished');
});</pre>

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
   <td>{{SpecName("HTML WHATWG", "webappapis.html#handler-onloadstart", "onloadstart")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>
<div>


<p>{{Compat("api.GlobalEventHandlers.onloadstart")}}</p>
</div>
</div>
