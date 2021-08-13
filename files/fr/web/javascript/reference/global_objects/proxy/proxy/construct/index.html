---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/construct
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>handler.construct()</strong></code> est une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Afin que l'opération <code>new</code> puisse être valide sur le proxy correspondant, la cible utilisée doit avoir une méthode interne <code>[[Construct]]</code> (autrement dit, l'instruction <code>new cible</code> doit être valide).</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  construct: function(cible, listeArguments, newTarget) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Les paramètres suivants sont passés à la méthode <code>construct</code>.  <code>this</code> est ici lié au gestionnaire (<em>handler</em>).</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
 <dt><code>listeArguments</code></dt>
 <dd>La liste des arguments passés au constructeur.</dd>
 <dt><code>newTarget</code></dt>
 <dd>Le constructeur originellement appelé.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>construct</code> doit renvoyer un objet.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.construct()</strong></code> est une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Ce trappe intercepte les opérations suivantes :</p>

<ul>
 <li><code>new proxy(...args)</code></li>
 <li>{{jsxref("Reflect.construct()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :</p>

<ul>
 <li>Le résultat doit être un <code>Object</code>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on piège l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}.</p>

<pre class="brush: js">var p = new Proxy(function() {}, {
  construct: function(target, argumentsList) {
    console.log("called: " + argumentsList.join(", "));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p(1).value); // "appel sur : 1"
                             // 10
</pre>

<p>Dans cette version, on ne respecte pas la contrainte d'invariance :</p>

<pre class="brush: js">var p = new Proxy(function() {}, {
  construct: function(target, argumentsList) {
    return 1;
  }
});

new p(); // Une exception TypeError est levée
</pre>

<p>Dans le code qui suit, le proxy n'est pas correctement initialisé. La cible du proxy doit être un constructeur valide qui puisse être utilisé avec <code>new</code>.</p>

<pre class="brush: js">var p = new Proxy({}, {
  construct: function(target, argumentsList, newTarget){
    return {};
  }
});

new p(); // TypeError: p is not a constructor</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget', '[[Construct]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget', '[[Construct]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.construct")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>L'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}</li>
 <li>{{jsxref("Reflect.construct()")}}</li>
</ul>
