---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/has
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>handler.has()</code></strong> est une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-has.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  has: function(cible, prop) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Les paramètres suivants sont passés à la méthode <code>has</code>. <code>this</code> est lié au gestionnaire.</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
 <dt><code>prop</code></dt>
 <dd>Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété dont on veut connaître l'existence.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>has</code> doit renvoyer une valeur booléenne.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.has</strong></code> est une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe permet d'intercepter les opérations suivantes :</p>

<ul>
 <li>L'accès à une propriété : <code>toto in proxy</code></li>
 <li>L'accès à une propriété héritée : <code>toto in Object.create(proxy)</code></li>
 <li>Accès via l'instruction <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/with">with</a></code> : <code>with(proxy) { (foo); }</code></li>
 <li>{{jsxref("Reflect.has()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivants ne sont pas respectés, le proxy lèvera une exception {{jsxref("TypeError")}} :</p>

<ul>
 <li>Une propriété ne peut pas être indiquée comme non-existante s'il existe une propriété correspondante de l'objet cible qui est une propriété propre et non-configurable.</li>
 <li>Une propriété ne peut pas être indiquée comme non-existante s'il existe une propriété correspondante propre sur l'objet cible et que celui-ci n'est pas extensible.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on intercepte l'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}} :</p>

<pre class="brush: js">var p = new Proxy({}, {
  has: function(cible, prop) {
    console.log("appelée : " + prop);
    return true;
  }
});

console.log("a" in p); // "appelée : a"
                       // true
</pre>

<p>L'exemple suivant ne respecte pas un invariant :</p>

<pre class="brush: js">var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  has: function(cible, prop) {
    return false;
  }
});

"a" in p; // TypeError levée
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
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p', '[[HasProperty]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p', '[[HasProperty]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.has")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>L'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}}</li>
 <li>{{jsxref("Reflect.has()")}}</li>
</ul>
