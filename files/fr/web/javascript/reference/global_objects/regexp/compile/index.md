---
title: RegExp.prototype.compile()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/compile
tags:
  - Deprecated
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/compile
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/compile
---
<div>{{JSRef}} {{deprecated_header}}</div>

<p>La méthode dépréciée <code><strong>compile</strong></code><strong><code>()</code></strong> est utilisée afin de (re)compiler une expression rationnelle lors de l'exécution d'un script. Cette méthode effectue essentiellement les mêmes actions que le constructeur <code>RegExp</code>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><code><var>regexObj</var>.compile(<var>motif, flags</var>)</code></pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>motif</code></dt>
 <dd>Le texte de l'expression rationnelle.</dd>
 <dt><code>flags</code></dt>
 <dd>
 <p>S'ils sont utilisés, les drapeaux (<em>flags</em>) peuvent être combinés avec les valeurs suivantes :</p>

 <dl>
  <dt><code>g</code></dt>
  <dd>correspondance globale</dd>
  <dt><code>i</code></dt>
  <dd>ignorer la casse</dd>
  <dt><code>m</code></dt>
  <dd>multiligne : on traite les caractères de début et de fin (^ et $) de façon à travailler sur plusieurs lignes (ils correspondent au début et à la fin de chaque ligne et non au début ou à la fin de la chaîne entière)</dd>
  <dt><code>y</code></dt>
  <dd>adhérence : ne recherche les correspondances qu'à partir de l'indice fourni par la propriété <code>lastIndex</code> de l'expression rationnelle dans la chaîne cible (la recherche n'est pas effectuée pour les indices suivants).</dd>
 </dl>
 </dd>
</dl>

<h2 id="Description">Description</h2>

<p>La méthode <code>compile</code> est dépréciée. Pour obtenir le même effet, on utilisera le constructeur <code>RegExp</code>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on voit comment réinitialiser le motif et les drapeaux d'une expression rationnelle grâce à  la méthode <code>compile()</code>.</p>

<pre class="brush: js">var regexObj = new RegExp("toto", "gi");
regexObj.compile("nouveau toto", "g");
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-regexp.prototype.compile', 'RegExp.prototype.compile')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype.compile', 'RegExp.prototype.compile')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définition initiale dans l'annexe B (normative) pour les fonctionnalités ECMAScript additionnelles pour les navigateurs web.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.compile")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("RegExp")}}</li>
</ul>
