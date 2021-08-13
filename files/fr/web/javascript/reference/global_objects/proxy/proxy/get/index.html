---
title: handler.get()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/get
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/get
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>handler.get()</code></strong> est une trappe pour intercepter l'accès à la valeur d'une propriété.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-get.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  get: function(cible, propriété, récepteur) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Les paramètres suivants sont passés à la méthode <code>get</code>. <code>this</code> est lié au gestionnaire.</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
 <dt><code>propriété</code></dt>
 <dd>Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété qu'on souhaite obtenir.</dd>
 <dt><code>récepteur</code></dt>
 <dd>Le proxy ou un objet qui hérite du proxy.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>get</code> peut renvoyer n'importe quelle valeur.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.get</strong></code> est une trappe pour intercepter l'accès à une propriété.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe permet d'intercepter les opérations suivantes :</p>

<ul>
 <li>l'accès à une propriété : <code>proxy[toto]</code> et <code>proxy.truc</code></li>
 <li>L'accès aux propriétés héritées : <code>Object.create(proxy)[toto]</code></li>
 <li>{{jsxref("Reflect.get()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :</p>

<ul>
 <li>La valeur renvoyée pour la propriété doit être la même que la valeur de la propriété correspondante de l'objet cible si celle-ci est non-configurable et non accessible en lecture.</li>
 <li>La valeur renvoyée doit valoir <code>undefined</code> si la propriété correspondante de l'objet cible est une propriété d'accesseur non-configurable dont l'attribut [[Get]] vaut <code>undefined</code>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, on intercepte les accès aux propriétés :</p>

<pre class="brush: js">var p = new Proxy({}, {
  get: function(cible, propriété, récepteur) {
    console.log("appelée : " + propriété);
    return 10;
  }
});

console.log(p.a); // "appelée : a"
                  // 10
</pre>

<p>Le code suivant ne respecte pas l'invariant :</p>

<pre class="brush: js">var obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: false,
  value: 10,
  writable: false
});

var p = new Proxy(obj, {
  get: function(cible, propriété) {
    return 20;
  }
});

p.a; // exception TypeError levée
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
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver', '[[Get]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver', '[[Get]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatiblité_des_navigateurs">Compatiblité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.get")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Reflect.get()")}}</li>
</ul>
