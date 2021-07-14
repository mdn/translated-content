---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/preventExtensions
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>handler.preventExtensions()</code></strong> est une trappe pour {{jsxref("Object.preventExtensions()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  preventExtensions: function(cible) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Le paramètre suivant est passé à la méthode <code>preventExtensions</code>. <code>this</code> est lié au gestionnaire (<em>handler</em>).</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>preventExtensions</code> doit renvoyer une valeur booléenne.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.preventExtensions()</strong></code> est une trappe pour intercepter {{jsxref("Object.preventExtensions()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe peut intercepter les opérations de :</p>

<ul>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivants ne sont pas respectés, le proxy renverra une execption {{jsxref("TypeError")}} :</p>

<ul>
 <li><code>Object.preventExtensions(proxy)</code> ne renvoie <code>true</code> que si <code>Object.isExtensible(proxy)</code> vaut <code>false</code>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>On intercepte l'appel à {{jsxref("Object.preventExtensions()")}} dans l'exemple suivant :</p>

<pre class="brush: js">var p = new Proxy({}, {
  preventExtensions: function(cible) {
    console.log("appelé");
    Object.preventExtensions(cible);
    return true;
  }
});

console.log(Object.preventExtensions(p)); // "appelé"
                                          // true
</pre>

<p>Le code suivant ne respecte pas l'invariant :</p>

<pre class="brush: js">var p = new Proxy({}, {
  preventExtensions: function(cible) {
    return true;
  }
});

Object.preventExtensions(p); // TypeError est levée
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
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-preventextensions', '[[PreventExtensions]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-preventextensions', '[[PreventExtensions]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.preventExtensions")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.preventExtensions()")}}</li>
 <li>{{jsxref("Reflect.preventExtensions()")}}</li>
</ul>
