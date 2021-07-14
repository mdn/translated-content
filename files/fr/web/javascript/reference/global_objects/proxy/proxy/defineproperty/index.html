---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/defineProperty
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>handler.defineProperty()</code></strong> est une trappe pour {{jsxref("Object.defineProperty()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  defineProperty: function(cible, propriété, descripteur) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Les paramètres suivants sont passés à la méthode <code>defineProperty</code>. <code>this</code> est ici lié au gestionnaire.</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
 <dt><code>propriété</code></dt>
 <dd>Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété dont on veut modifier la description.</dd>
 <dt><code>descripteur</code></dt>
 <dd>Le descripteur de la propriété qui est à modifier ou à définir.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>defineProperty()</code> doit renvoyer un booléen qui indique si la propriété a correctement été définie sur la cible.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.defineProperty()</strong></code> est une trappe pour {{jsxref("Object.defineProperty()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe intercepte les opérations suivantes :</p>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Reflect.defineProperty()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les contraintes d'invariances suivantes ne sont pas respectées, le proxy renverra une exception {{jsxref("TypeError")}} :</p>

<ul>
 <li>Une propriété ne peut pas être ajoutée si l'objet cible n'est pas extensible.</li>
 <li>Une propriété ne peut pas être ajoutée ou modifiée pour être rendue non-configurable si elle n'existe pas comme une propriété propre non-configurable de l'objet cible.</li>
 <li>Une propriété ne peut pas être non-configurable s'il existe une propriété correspondante de l'objet cible qui est configurable.</li>
 <li>Si une propriété correspondante existe pour l'objet cible <code>Object.defineProperty(cible, propriété, descripteur)</code> ne lèvera pas d'exception.</li>
 <li>En mode stricte, si le gestionnaire defineProperty renvoie une valeur fausse (dans un contexte booléen), cela entraînera une exception {{jsxref("TypeError")}}.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans le code suivant, on piège l'appel à {{jsxref("Object.defineProperty()")}}.</p>

<pre class="brush: js">var p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log("appelé avec : " + prop);
  }
});

var desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, "a", desc); // "appelé avec : a"
</pre>

<p>Lorsqu'on appelle {{jsxref("Object.defineProperty()")}} ou {{jsxref("Reflect.defineProperty()")}}, le descripteur passé à la trappe <code>defineProperty</code> doit respecter une contrainte : seules les propriétés suivants sont utilisables, les propriétés non-standards seront ignorées :</p>

<ul>
 <li><code>enumerable</code></li>
 <li><code>configurable</code></li>
 <li><code>writable</code></li>
 <li><code>value</code></li>
 <li><code>get</code></li>
 <li><code>set</code></li>
</ul>

<pre class="brush: js">var p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(p, "name, {
  value: "proxy",
  type: "custom"
});
// { value: "proxy" }
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
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc', '[[DefineOwnProperty]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc', '[[DefineOwnProperty]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.defineProperty")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Reflect.defineProperty()")}}</li>
</ul>
