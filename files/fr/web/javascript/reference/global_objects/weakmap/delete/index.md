---
title: WeakMap.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/delete
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakMap/delete
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>delete()</strong></code> retire un élément donné de l'objet {{jsxref("WeakMap")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/weakmap-prototype-delete.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>wm</var>.delete(<var>clé</var>);</pre>

<h3 id="Paramètre">Paramètre</h3>

<dl>
 <dt><code>clé</code></dt>
 <dd>Il correspond à la clé de l'élément qu'on souhaite retirer de l'objet <code>WeakMap</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p><code>true</code> si un élément de l'objet <code>WeakMap</code> a bien été retiré, <code>false</code> si la clé n'a pas été trouvée ou si la clé n'est pas un objet.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var wm = new WeakMap();
wm.set(window, "toto");

wm.delete(window); // Renvoie true. La suppression a bien eu lieu.

wm.has(window);    // Renvoie false. L'objet window n'est plus dans la WeakMap.
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
   <td>{{SpecName('ES2015', '#sec-weakmap.prototype.delete', 'WeakMap.prototype.delete')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-weakmap.prototype.delete', 'WeakMap.prototype.delete')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WeakMap.delete")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("WeakMap")}}</li>
</ul>
