---
title: handler.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getPrototypeOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/getPrototypeOf
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>handler.getPrototypeOf()</code></strong> représente une trappe pour la méthode interne <code>[[GetPrototypeOf]]</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-getprototypeof.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(obj, {
  getPrototypeOf(cible) {
  ...
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Le paramètre suivant est passé à la méthode <code>getPrototypeOf</code>. <code>this</code> est lié au gestionnaire.</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>getPrototypeOf</code> doit renvoyer un objet ou <code>null</code>.</p>

<h2 id="Description">Description</h2>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe permet d'intercepter les opérations suivantes :</p>

<ul>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.getPrototypeOf()")}}</li>
 <li>{{jsxref("Object/proto", "__proto__")}}</li>
 <li>{{jsxref("Object.prototype.isPrototypeOf()")}}</li>
 <li>{{jsxref("Opérateurs/instanceof", "instanceof")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivant ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :</p>

<ul>
 <li><code>getPrototypeOf</code> doit renvoyer un objet ou <code>null</code>.</li>
 <li>Si la <code>cible</code> n'est pas extensible, <code>Object.getPrototypeOf(proxy)</code> doit renvoyer la même valeur que <code>Object.getPrototypeOf(cible)</code>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_simple">Utilisation simple</h3>

<pre class="brush: js">var obj = {};
var proto = {};
var gestionnaire = {
    getPrototypeOf(cible) {
        console.log(cible === obj);   // true
        console.log(this === gestionnaire); // true
        return proto;
    }
};

var p = new Proxy(obj, gestionnaire);
console.log(Object.getPrototypeOf(p) === proto);    // true
</pre>

<h3 id="Cinq_façons_de_déclencher_la_trappe_getPrototypeOf">Cinq façons de déclencher la trappe <code>getPrototypeOf</code></h3>

<pre class="brush: js">var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(cible) {
        return Array.prototype;
    }
});
console.log(
    Object.getPrototypeOf(p) === Array.prototype,  // true
    Reflect.getPrototypeOf(p) === Array.prototype, // true
    p.__proto__ === Array.prototype,               // true
    Array.prototype.isPrototypeOf(p),              // true
    p instanceof Array                             // true
);
</pre>

<h3 id="Deux_types_d'exceptions">Deux types d'exceptions</h3>

<pre class="brush: js">var obj = {};
var p = new Proxy(obj, {
    getPrototypeOf(cible) {
        return "toto";
    }
});
Object.getPrototypeOf(p); // TypeError : "toto" n'est pas un objet ou null

var obj = Object.preventExtensions({});
var p = new Proxy(obj, {
    getPrototypeOf(cible) {
        return {};
    }
});
Object.getPrototypeOf(p); // TypeError : on attend la même valeur pour le prototype
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
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof', '[[GetPrototypeOf]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-getprototypeof', '[[GetPrototypeOf]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.getPrototypeOf")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.getPrototypeOf()")}}</li>
</ul>
