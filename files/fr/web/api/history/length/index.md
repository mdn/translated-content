---
title: History.length
slug: Web/API/History/length
translation_of: Web/API/History/length
---
<div>{{APIRef("History API")}}</div>

<p>La propriété en lecture seule <code><strong>History.length</strong></code> retourne un entier indiquant le nombre d'élément dans l'historique de session, incluant la page courante. Par exemple, pour une page dans un nouvel onglet, la propriété retournera <code>1</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">const <em>length</em> = history.length
</pre>

<h2 id="Spécification">Spécification</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statuts</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "history.html#dom-history-length", "History.length")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Pas de changement depuis {{SpecName("HTML5 W3C")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', "browsers.html#dom-history-length", "History.length")}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.History.length")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'interface {{domxref("History")}} auquel <code>length</code> se rattache.</li>
</ul>
