---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/apply
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>handler.apply()</code></strong> représente une trappe pour un appel de fonctions.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  apply: function(cible, thisArg, listeArguments) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Les paramètres suivants sont passés à la méthode <code>apply</code>. Ici, <code>this</code> est lié au gestionnaire.</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
 <dt><code>thisArg</code></dt>
 <dd>L'argument {{jsxref("Opérateurs/L_opérateur_this","this")}} pour cet appel.</dd>
 <dt><code>listeArguments</code></dt>
 <dd>La liste d'arguments pour l'appel.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>apply</code> peut renvoyer n'importe quelle valeur.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.apply</strong></code> est une trappe pour l'appel à une fonction.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe intercepte les opérations suivantes :</p>

<ul>
 <li><code>proxy(...args)</code></li>
 <li>{{jsxref("Function.prototype.apply()")}} et {{jsxref("Function.prototype.call()")}}</li>
 <li>{{jsxref("Reflect.apply()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivants ne sont pas respectés, le proxy lèvera une exception <code>TypeError</code> :</p>

<ul>
 <li>la cible doit pouvoir être « appelable ». Autrement dit, il doit s'agir d'une fonction.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple ci-dessous, on piège un appel de fonction.</p>

<pre class="brush: js">var p = new Proxy(function() {}, {
  apply: function(target, thisArg, argumentsList) {
    console.log("called: " + argumentsList.join(", "));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
});

console.log(p(1, 2, 3)); // "called: 1, 2, 3"
                         // 6
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist', '[[Call]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-call-thisargument-argumentslist', '[[Call]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.apply")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Function.prototype.apply")}}</li>
 <li>{{jsxref("Function.prototype.call")}}</li>
 <li>{{jsxref("Reflect.apply()")}}</li>
</ul>
