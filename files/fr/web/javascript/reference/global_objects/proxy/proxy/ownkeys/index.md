---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/ownKeys
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>handler.ownKeys()</code></strong> est une trappe pour {{jsxref("Object.getOwnPropertyNames()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-ownkeys.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  ownKeys: function(cible) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Le paramètre suivant est passé à la méthode <code>ownKeys</code>. <code>this</code> est lié au gestionnaire.</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>ownKeys</code> doit renvoyer un objet énumérable.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.ownKeys()</strong></code> est une trappe pour intercepter les opérations de {{jsxref("Object.getOwnPropertyNames()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe permet d'intercepter les opérations suivantes :</p>

<ul>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Object.getOwnPropertySymbols()")}}</li>
 <li>{{jsxref("Object.keys()")}}</li>
 <li>{{jsxref("Reflect.ownKeys()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :</p>

<ul>
 <li>Le résultat de <code>ownKeys</code> doit être un tableau.</li>
 <li>Le type de chaque élément de ce tableau est soit une {{jsxref("String")}}, soit un {{jsxref("Symbol")}}.</li>
 <li>Le tableau résultant doit contenir les clés de toutes les propriétés propres non-configurables de l'objet cible.</li>
 <li>Si l'objet cible n'est pas extensible, la liste obtenue doit contenir toutes les clés pour les propriétés propres et aucune autre valeur.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, on intercepte l'action de {{jsxref("Object.getOwnPropertyNames()")}}.</p>

<pre class="brush: js">var p = new Proxy({}, {
  ownKeys: function(target) {
    console.log("appelée");
    return ["a", "b", "c"];
  }
});

console.log(Object.getOwnPropertyNames(p)); // "appelée"
                                            // [ "a", "b", "c"]
</pre>

<p>L'exemple suivant ne respecte pas l'ensemble des invariants :</p>

<pre class="brush: js  example-bad">var obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10 }
);

var p = new Proxy(obj, {
  ownKeys: function(cible) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  }
});

console.log(Object.getOwnPropertyNames(p));
// TypeError est levée
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
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys', '[[OwnPropertyKeys]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys', '[[OwnPropertyKeys]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.ownKeys")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Reflect.ownKeys()")}}</li>
</ul>
