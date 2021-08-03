---
title: Atomics.compareExchange()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/compareExchange
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/compareExchange
---
<div>{{JSRef}}</div>

<p>La méthode statique <code><strong>Atomics</strong></code><strong><code>.compareExchange()</code></strong> échange une valeur d'un tableau à un emplacement donné si la valeur qui était dans le tableau correspond à une valeur donnée. Cette méthode renvoie l'ancienne valeur à cet emplacement, qu'il y ait eu remplacement ou non. Cette opération atomique garantit qu'aucune autre opération d'écriture n'est appliquée tant que la valeur modifiée n'est pas écrite.</p>

<div>{{EmbedInteractiveExample("pages/js/atomics-compareexchange.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Atomics.compareExchange(typedArray, index, valeurAttendue, valeurRemplacement)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>typedArray</code></dt>
 <dd>Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.</dd>
 <dt><code>index</code></dt>
 <dd>La position du tableau <code>typedArray</code> à laquelle on veut échanger les valeurs.</dd>
 <dt><code>valeurAttendue</code></dt>
 <dd>La valeur avec laquelle on teste l'égalité.</dd>
 <dt><code>valeurRemplacement</code></dt>
 <dd>Le nombre qu'on souhaite placer dans le tableau si l'ancienne valeur est égale avec <code>valeurAttendue</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'ancienne valeur présente à <code>typedArray[index]</code>.</p>

<h3 id="Exceptions_levées">Exceptions levées</h3>

<ul>
 <li>Cette méthode lève {{jsxref("TypeError")}} si le type de <code>typedArray</code> n'est pas un des types entiers autorisés.</li>
 <li>Cette méthode lève {{jsxref("TypeError")}} si <code>typedArray</code> n'est pas tableau typé partagé.</li>
 <li>Cette méthode lève {{jsxref("RangeError")}} si <code>index</code> est en dehors des limites de <code>typedArray</code>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
var ta = new Uint8Array(sab);
ta[0] = 7;

Atomics.compareExchange(ta, 0, 7, 12); // renvoie 7, l'ancienne valeur
Atomics.load(ta, 0);                   // 12</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-atomics.compareexchange', 'Atomics.compareExchange')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définition initiale avec ES2017.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Atomics.compareExchange")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("Atomics.exchange()")}}</li>
</ul>
