---
title: CustomEvent.detail
slug: Web/API/CustomEvent/detail
tags:
  - API
  - DOM
  - Propriétés
  - Évènement personnalisé
translation_of: Web/API/CustomEvent/detail
---
<p>{{APIRef("DOM")}}</p>

<p>Le <code><strong>detail</strong></code> de la propriété en lecture seule de l'interface {{domxref("CustomEvent")}} renvoie toutes les données transmises lors de l'initialisation de l'évènement.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"> let myDetail = <em>customEventInstance.detail</em>;</pre>

<h3 id="Valeur_retournée">Valeur retournée</h3>

<p>Toute donnée initialisée avec l'évènement.</p>

<h2 id="Exemple">Exemple</h2>

<pre class="brush: js">// ajoute un écouteur d'évènement approprié
obj.addEventListener("cat", function(e) { process(e.detail) });

// crée et distribue l'évènement
let event = new CustomEvent("cat", {
  detail: {
    hazcheeseburger: true
  }
});
obj.dispatchEvent(event);

// Retournera un objet contenant la propriété hazcheeseburger
let myDetail = <em>event.detail</em>;
</pre>

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
   <td>{{SpecName('DOM WHATWG','#dom-customeventinit-detail','detail')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.CustomEvent.detail")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("CustomEvent")}}</li>
</ul>

<p> </p>
