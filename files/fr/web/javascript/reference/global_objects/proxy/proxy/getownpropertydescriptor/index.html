---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/getOwnPropertyDescriptor
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>handler.getOwnPropertyDescriptor()</code></strong> est une trappe pour intercepter {{jsxref("Object.getOwnPropertyDescriptor()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  getOwnPropertyDescriptor: function(cible, prop) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Les paramètres suivants sont passés à la méthode <code>getOwnPropertyDescriptor</code>. <code>this</code> est ici lié au gestionnaire (<em>handler</em>).</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible</dd>
 <dt><code>prop</code></dt>
 <dd>Le nom de la propriété dont on souhaite obtenir le descripteur.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>getOwnPropertyDescriptor</code> doit renvoyer un objet ou <code>undefined</code>.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.getOwnPropertyDescriptor()</strong></code> est une trappe pour un proxy afin d'intercepter les opérations effectuées avec {{jsxref("Object.getOwnPropertyDescriptor()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe permet d'intercepter :</p>

<ul>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivants ne sont pas respectés, le proxy lèvera une exception {{jsxref("TypeError")}} :</p>

<ul>
 <li><code>getOwnPropertyDescriptor</code> doit renvoyer un objet ou <code>undefined</code>.</li>
 <li>Une propriété ne peut pas être indiquée comme non-existante s'il existe une propriété correspondante de l'objet cible qui est une propriété propre et non-configurable.</li>
 <li>Une propriété ne peut pas être indiquée comme non-existante s'il existe une propriété correspondante de l'objet cible qui est une propriété propre et que l'objet cible n'est pas extensible.</li>
 <li>Une propriété ne peut pas être indiquée comme existante si elle n'existe pas de façon correspondante sur l'objet cible et que l'objet cible n'est pas extensible.</li>
 <li>Une propriété ne peut pas être indiquée comme non-configurable si la propriété correspondante n'existe pas pour l'objet cible ou si elle existe comme un propriété propre configurable.</li>
 <li>Le résultat de <code>Object.getOwnPropertyDescriptor(cible)</code> peut être appliqué à l'objet cible avec <code>Object.defineProperty</code> sans que cela lève une exception.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on intercepte {{jsxref("Object.getOwnPropertyDescriptor()")}}.</p>

<pre class="brush: js">var p = new Proxy({ a: 20 }, {
  getOwnPropertyDescriptor: function(cible, prop) {
    console.log("appelée : " + prop);
    return { configurable: true, enumerable: true, value: 10 };
  }
});

console.log(Object.getOwnPropertyDescriptor(p, "a").value); // "appelée : a"
                                                            // 10
</pre>

<p>L'exemple suivant ne respecte pas un invariant :</p>

<pre class="brush: js">var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  getOwnPropertyDescriptor: function(cible, prop) {
    return undefined;
  }
});

Object.getOwnPropertyDescriptor(p, "a"); // Une exception TypeError est renvoyée
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
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p', '[[GetOwnProperty]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-getownproperty-p', '[[GetOwnProperty]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.getOwnPropertyDescriptor")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Reflect.getOwnPropertyDescriptor()")}}</li>
</ul>
