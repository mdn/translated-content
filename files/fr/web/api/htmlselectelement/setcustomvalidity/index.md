---
title: HTMLSelectElement.setCustomValidity()
slug: Web/API/HTMLSelectElement/setCustomValidity
translation_of: Web/API/HTMLSelectElement/setCustomValidity
---
<div>{{ APIRef("HTML DOM") }}</div>

<p>La méthode <code><strong>HTMLSelectElement.setCustomValidity()</strong></code> définit le message de validation personnalisé de l'élément sélectionné avec le message renseigné. Utiliser une chaîne de caractère vide indique que l'élément <em>n'a pas</em> de message d'erreur de validation personnalisé.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">ElmSelectionne.setCustomValidity(message);</pre>

<h3 id="Paramètres">Paramètres</h3>

<ul>
 <li><em>message </em>est le {{domxref("DOMString")}} contenant le message d'erreur.</li>
</ul>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-cva-setcustomvalidity', 'HTMLSelectElement.setCustomValidity()')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de changement depuis la dernière snapshot, {{SpecName('HTML5 W3C')}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#dom-cva-setcustomvalidity', 'HTMLSelectElement.setCustomValidity()')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition initiale, snapshot de {{SpecName('HTML WHATWG')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("api.HTMLSelectElement.setCustomValidity")}}</p>

<h2 id="See_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/Guide/HTML/HTML5/Constraint_validation">Validation du formulaire</a>.</li>
</ul>
