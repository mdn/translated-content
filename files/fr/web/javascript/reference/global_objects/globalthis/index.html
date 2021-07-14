---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
tags:
  - JavaScript
  - Reference
  - globalThis
translation_of: Web/JavaScript/Reference/Global_Objects/globalThis
original_slug: Web/JavaScript/Reference/Objets_globaux/globalThis
---
<div>{{jsSidebar("Objects")}}</div>

<p>La propriété globale <code><strong>globalThis</strong></code> renvoie l'objet global de plus haut niveau.</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><code>globalThis</code>
</pre>

<h2 id="Description">Description</h2>

<p>Par le passé, il était nécessaire d'utiliser différentes syntaxes pour différents environnements afin d'accéder à la portée globale. Sur le Web, on peut utiliser {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}} ou {{domxref("Window.frames", "frames")}} ; pour les <a href="/en-US/docs/Web/API/Worker">web workers</a>, seul <code>self</code> peut être employé ; pour Node.js aucun de ces mots-clés ne fonctionne et il faut utiliser <code>global</code>.<br>
 Le mot-clé <code>this</code> pouvait être utilisé à l'intérieur des fonctions en <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode non-strict</a> mais vaudra sinon <code>undefined</code> dans les modules et dans les fonctions utilisant le <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>.</p>

<p>La propriété <code>globalThis</code> fournit une méthode standard d'accès à l'objet <code>this</code> global, quel que soit l'environnement. Contrairement aux propriétés <code>window</code> et <code>self</code>, ce mot-clé fonctionnera quel que soit le contexte (que celui-ci soit doté de fenêtres ou non). Ainsi, on peut accéder à l'objet global de façon homogène, quel que soit l'environnement dans lequel le code est utilisé.</p>

<p>Pour mieux mémoriser ce nom, on se rappellera que la valeur de <code>this</code> dans la portée globale est <code>globalThis</code>.</p>

<h3 id="Accès_indirect_à_la_variable_globale_dans_un_contexte_web">Accès indirect à la variable globale dans un contexte web</h3>

<p>Dans la plupart des environnements, <code>globalThis</code> sera une référence directe à l'objet global. Cependant, dans les navigateurs web, avec les principes de sécurité relatifs aux <em>iframes</em> et aux liens entre les fenêtres, <code>globalThis</code> fournira un {{jsxref("Proxy")}} sur l'objet global (auquel on n'aura donc pas accès directement).</p>

<h3 id="Nommage">Nommage</h3>

<p>D'autres noms furent proposés pour cette fonctionnalité (tels que <code>self</code> et <code>global</code>) mais ils furent écartés car ils pouvaient entraîner des problèmes de compatibilité avec du code existant. Pour plus de détails, voir <a href="https://github.com/tc39/proposal-global/blob/master/NAMING.md">le document de la proposition pour le nommage</a>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Avant l'introduction de <code>globalThis</code>, la seule façon qui permettait d'obtenir l'objet global de l'environnement de façon homogène était <code>Function('return this')()</code>. Toutefois, cela enfreignait certaines règles <a href="/fr/docs/Web/HTTP/CSP">CSP</a> avec certains réglages et <a href="https://github.com/paulmillr/es6-shim">es6-shim</a>, par exemple, devait utiliser une logique conditionnelle :</p>

<pre class="brush: js">var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error("impossible de trouver l'objet global");
};

var globals = getGlobal();

if (typeof globals.setTimeout !== 'function') {
  // pas de setTimeout pour cet environnement
}
</pre>

<p>Avec <code>globalThis</code>, il n'est plus nécessaire de parcourir les différents mots-clés des différents environnements :</p>

<pre class="brush: js">if (typeof globalThis.setTimeout !== 'function') {
  // pas de setTimeout pour cet environnement
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="https://tc39.github.io/proposal-global/#sec-other-properties-of-the-global-object-global">Proposition pour <code>globalThis</code></a></td>
   <td>Proposition de niveau 3 (<em>stage 3</em>)</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.globalThis")}}</p>
