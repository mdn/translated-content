---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/revocable
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Proxy.revocable()</strong></code> est utilisée afin de créer un objet {{jsxref("Proxy")}} révocable.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Proxy.revocable(cible, gestionnaire);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<div>{{Page("/fr/docs/Web/JavaScript/Reference/Objets_globaux/Proxy", "Paramètres")}}</div>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nouvel objet <code>Proxy</code> révocable est renvoyé par la méthode.</p>

<h2 id="Description">Description</h2>

<p>Un <code>Proxy</code> révocable est un objet qui possède les propriétés suivantes : <code>{proxy: proxy, revoke: revoke}</code>.</p>

<dl>
 <dt><code>proxy</code></dt>
 <dd>Un proxy crée avec un appel à <code>new Proxy(cible, gestionnaire)</code>.</dd>
 <dt><code>revoke</code></dt>
 <dd>Une fonction sans argument qui permet de désactiver le proxy.</dd>
</dl>

<p>Si la fonction <code>revoke()</code> est appelée, le proxy devient inutilisable et toutes les trappes définies via un gestionnaire lèveront une exception {{jsxref("TypeError")}}. Une fois que le proxy est révoqué, il conserve cet état et peut être traité par le ramasse-miettes. D'éventuels appels suivants à <code>revoke()</code> n'auront aucun effet.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var révocable = Proxy.revocable({}, {
  get: function(cible, nom) {
    return "[[" + nom + "]]";
  }
});
var proxy = révocable.proxy;
console.log(proxy.toto); // "[[toto]]"

révocable.revoke();

console.log(proxy.toto); // TypeError est levée
proxy.toto = 1           // TypeError à nouveau
delete proxy.toto        // TypeError toujours
typeof proxy             // "object", typeof ne déclenche aucune trappe
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
   <td>{{SpecName('ES2015', '#sec-proxy.revocable', 'Proxy Revocation Functions')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy.revocable', 'Proxy Revocation Functions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Proxy.revocable")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
</ul>
