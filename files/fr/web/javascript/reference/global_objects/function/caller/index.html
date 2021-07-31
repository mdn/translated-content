---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
tags:
  - Function
  - JavaScript
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function/caller
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/caller
---
<div>{{JSRef}} {{non-standard_header}}</div>

<p>La propriété <code><strong>function.caller</strong></code> renvoie la fonction qui a appelé la fonction donnée. Cette propriété est interdite en mode strict.</p>

<h2 id="Description">Description</h2>

<p>Si la fonction <code>f</code> a été invoquée par du code situé au plus haut niveau, la valeur de <code>f.caller</code> sera {{jsxref("null")}}, sinon, ce sera la fonction qui a appelé <code>f</code>.</p>

<p>Cette propriété remplace la propriété obsolète {{jsxref("Fonctions/arguments/caller", "arguments.caller")}} de l'objet {{jsxref("Fonctions/arguments", "arguments")}}.</p>

<p>La propriété spéciale <code>__caller__</code> qui renvoyait l'objet qui dans lequel était fait l'appel a été supprimée pour des raisons de sécurités.</p>

<h3 id="Notes">Notes</h3>

<p>Dans une fonction récursive, cette propriété ne peut pas être utilisée pour reconstituer la pile d'appels (<em>call stack</em>). Par exemple, si on a :</p>

<pre class="brush: js">function f(n) { g(n - 1); }
function g(n) { if (n &gt; 0) { f(n); } else { stop(); } }
f(2);
</pre>

<p>Au moment où <code>stop()</code> est appelé, la pile sera :</p>

<pre class="eval">f(2) -&gt; g(1) -&gt; f(1) -&gt; g(0) -&gt; stop()
</pre>

<p>Et ceci est vrai :</p>

<pre class="eval">stop.caller === g &amp;&amp; f.caller === g &amp;&amp; g.caller === f
</pre>

<p>Donc si on essaie d'obtenir la pile de cette façon :</p>

<pre class="brush: js">var f = stop;
var stack = 'Stack trace:';
while (f) {
  stack += '\n' + f.name;
  f = f.caller;
}
</pre>

<p>la boucle ne s'arrêterait jamais.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Vérifier_la_valeur_de_la_propriété_caller">Vérifier la valeur de la propriété <code>caller</code></h3>

<p>Dans l'exemple suivant, on verifie la propriété <code>caller</code> de la fonction.</p>

<pre class="brush: js">function maFonction() {
  if (maFonction.caller == null) {
    return 'Fonction appelée au plus haut niveau !';
  } else {
    return 'Fonction appelée par ' + maFonction.caller;
  }
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<p>Ne fait partie d'aucune spécification. Implémentée avec JavaScript 1.5.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Function.caller")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Le bug d'implémentation pour SpiderMonkey {{bug(65683)}}</li>
</ul>
