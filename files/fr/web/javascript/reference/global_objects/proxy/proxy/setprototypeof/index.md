---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/setPrototypeOf
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>handler.setPrototypeOf()</code></strong> est une trappe pour intercepter {{jsxref("Object.setPrototypeOf()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/proxyhandler-setprototypeof.html", "taller", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var p = new Proxy(cible, {
  setPrototypeOf: function(cible, prototype) {
  }
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Les paramètres suivants sont passés à la méthode <code>setPrototypeOf</code>. <code>this</code> est lié au gestionnaire.</p>

<dl>
 <dt><code>cible</code></dt>
 <dd>L'objet cible.</dd>
 <dt><code>prototype</code></dt>
 <dd>Le nouveau prototype de l'objet ou <code>null</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>setPrototypeOf</code> renvoie <code>true</code> si la propriété interne <code>[[Prototype]]</code> a bien été modifiée et <code>false</code> sinon.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code><strong>handler.setPrototypeOf</strong></code> est une trappe utilisée pour intercepter les opérations de {{jsxref("Object.setPrototypeOf()")}}.</p>

<h3 id="Interceptions">Interceptions</h3>

<p>Cette trappe permet d'intercepter :</p>

<ul>
 <li>{{jsxref("Object.setPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.setPrototypeOf()")}}</li>
</ul>

<h3 id="Invariants">Invariants</h3>

<p>Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :</p>

<ul>
 <li>Si <code>cible</code> n'est pas extensible, le paramètre <code>prototype</code> doit être le même valeur que <code>Object.getPrototypeOf(cible)</code>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Si on souhaite interdire la définition d'un nouveau prototype pour un objet, on peut utiliser une méthode <code>setPrototypeOf</code> qui renvoie <code>false</code> ou qui génère une exception.</p>

<p>Avec cette première approche, toute opération qui voudra modifier le prototype génèrera une exception. On aura par exemple {{jsxref("Object.setPrototypeOf()")}} qui créera et lèvera l'exception <code>TypeError</code>. Si la modification est effectuée par une opération qui ne génère pas d'exception en cas d'échec (comme  {{jsxref("Reflect.setPrototypeOf()")}}), aucune exception ne sera générée.</p>

<pre class="brush: js">var handlerReturnsFalse = {
    setPrototypeOf(target, newProto) {
        return false;
    }
};

var newProto = {}, target = {};

var p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto);
// lève une TypeError
Reflect.setPrototypeOf(p1, newProto);
// renvoie false
</pre>

<p>Avec cette seconde approche, toute tentative de modification génèrera une exception. On utilisera celle-ci lorsqu'on souhaite qu'une erreur se produisent, y compris pour les opérations qui ne génèrent habituellement pas d'exception ou si on souhaite générer une exception sur mesure.</p>

<pre class="brush: js">var handlerThrows = {
    setPrototypeOf(target, newProto) {
        throw new Error("erreur custom");
    }
};

var newProto = {}, target = {};

var p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto);
// lève une exception new Error("erreur custom")
Reflect.setPrototypeOf(p2, newProto);
// lève une exception new Error("erreur custom")</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v', '[[SetPrototypeOf]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v', '[[SetPrototypeOf]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.handler.setPrototypeOf")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Object.setPrototypeOf()")}}</li>
 <li>{{jsxref("Reflect.setPrototypeOf()")}}</li>
</ul>
