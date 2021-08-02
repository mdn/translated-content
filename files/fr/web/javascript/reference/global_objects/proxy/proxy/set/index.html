---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/set
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>handler.set()</strong></code> est une trappe permettant d'intercepter les opérations visant à définir ou modifier la valeur d'une propriété.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  set: function(cible, propriété, valeur, récepteur) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Les paramètres suivants sont passés à la méthode <code>set</code>. <code>this</code> est lié au gestionnaire.</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
 <dt><code>propriété</code></dt>
 <dd>Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété à définir.</dd>
 <dt><code>valeur</code></dt>
 <dd>La nouvelle valeur à définir pour la propriété.</dd>
 <dt><code>récepteur</code></dt>
 <dd>L'objet intialement visé par l'affectation. Généralement ce sera le proxy lui-même. Le gestionnaire <code>set</code> peut également être appelé indirectement, via la chaîne de prototypes ou d'autres façons. Par exemple, si on exécute l'instruction <code>obj.nom = "Jean"</code>, et qu'<code>obj</code> n'est pas un proxy ni ne possède de propriété <code>nom</code> mais s'il possède un proxy dans sa chaîne de prototypes, le gestionnaire <code>set</code> sera appelé et <code>obj</code> sera passé en tant que récepteur.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>set</code> doit renvoyer une valeur booléenne. Elle renvoie <code>true</code> pour indiquer que l'affectation a réussi. Si la méthode <code>set</code> renvoie false et que l'affectation était exécutée dans du code en mode strict, une exception {{jsxref("TypeError")}} sera levée.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.set</strong></code> est une trappe qui permet d'intercepter les opérations qui sont utilisées pour définir ou modifier la valeur d'une propriété.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe permet d'intercepter les opérations suivantes :</p>

<ul>
 <li>L'affectation à des propriétés : <code>proxy[toto] = truc</code> et <code>proxy.toto = truc</code></li>
 <li>L'affectation de propriétés héritées : <code>Object.create(proxy)[toto] = truc</code></li>
 <li>{{jsxref("Reflect.set()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :</p>

<ul>
 <li>Il est impossible de modifier la valeur d'une propriété pour qu'elle soit différente de la valeur de la propriété correspondante de l'objet cible si celle-ci n'est pas accessible en lecture seule et est non-configurable (pour les propriétés de données).</li>
 <li>Il est impossible de modifier la valeur d'une propriété si la propriété correspondante de l'objet cible est une propriété d'accesseur/mutateur dont l'attribut [[Set]] vaut <code>undefined</code>.</li>
 <li>En mode strict, si le gestionnaire <code>set</code> renvoie une valeur fausse (dans un contexte booléen), cela lèvera une exception {{jsxref("TypeError")}}.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on intercepte la définition d'une nouvelle propriété.</p>

<pre class="brush: js">var p = new Proxy({}, {
  set: function(target, prop, value, receiver) {
    target[prop] = value;
    console.log('property set: ' + prop + ' = ' + value);
    return true;
  }
});

console.log('a' in p);  // false

p.a = 10;               // "property set: a = 10"
console.log('a' in p);  // true
console.log(p.a);       // 10
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
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver', '[[Set]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver', '[[Set]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.set")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Reflect.set()")}}</li>
</ul>
