---
title: Math.imul()
slug: Web/JavaScript/Reference/Global_Objects/Math/imul
tags:
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/imul
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/imul
---
<div>{{JSRef}}</div>

<p>La fonction <code><strong>Math.imul()</strong></code> renvoie le résultat de la multiplication de deux nombres, calculée avec la représentation sur 32 bits de ces nombres, à la façon du langage C.</p>

<div>{{EmbedInteractiveExample("pages/js/math-imul.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Math.imul(<var>a</var>, <var>b</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>a</code></dt>
 <dd>Le premier nombre.</dd>
 <dt><code>b</code></dt>
 <dd>Le second nombre.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le résultat de la multiplication sur 32 bits des valeurs passées en argument (comme en C).</p>

<h2 id="Description">Description</h2>

<p><code>Math.imul()</code> permet d'effectuer une multiplication rapide pour des entiers sur 32 bits avec une sémantique proche du langage C. Cela est utile pour des aspects de performance, notamment pour des projets comme <a href="/fr/docs/Mozilla/Projects/Emscripten">Emscripten</a>. <code>imul() </code>étant une méthode statique de <code>Math</code>, il faut utiliser <code>Math.<code>imul</code>()</code> et non pas la méthode d'un autre objet qui aurait été créé (<code>Math</code> n'est pas un constructeur). Attention à l'utilisation de nombres flottants avec <code>Math.imul()</code> car cela implique une opération de conversion des flottants vers les entiers pour la multiplication puis une opération de conversion du résultat en flottant. Dans la pratique, <code>Math</code><code>.imul()</code> est notamment pertinent pour asm.js.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_Math.imul()">Utiliser <code>Math.imul()</code></h3>

<pre class="brush: js">Math.imul(2, 4);          // 8
Math.imul(-1, 8);         //-8
Math.imul(-2, -2);        // 4
Math.imul(0xffffffff, 5); //-5
Math.imul(0xfffffffe, 5); //-10
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Si elle n'est pas disponible, cette fonction peut être émulée de la façon suivante :</p>

<pre class="brush: js">Math.imul = Math.imul || function(a, b) {
  var ah  = (a &gt;&gt;&gt; 16) &amp; 0xffff;
  var al = a &amp; 0xffff;
  var bh  = (b &gt;&gt;&gt; 16) &amp; 0xffff;
  var bl = b &amp; 0xffff;
  // Le décalage par 0 rétablit le signe de la partie haute
  // le |0 final convertit la valeur non-signée en une valeur signée
  return ((al * bl) + (((ah * bl + al * bh) &lt;&lt; 16) &gt;&gt;&gt; 0)|0);
};
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
   <td>{{SpecName('ES6', '#sec-math.imul', 'Math.imul')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-math.imul', 'Math.imul')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Math.imul")}}</p>
