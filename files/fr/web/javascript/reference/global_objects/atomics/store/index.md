---
title: Atomics.store()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/store
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/store
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/store
---
<div>{{JSRef}}</div>

<p>La méthode statique <code><strong>Atomics</strong></code><strong><code>.store()</code></strong> enregistre une valeur donnée à un emplacement donné du tableau partagé et renvoie cette valeur.</p>

<div>{{EmbedInteractiveExample("pages/js/atomics-store.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Atomics.store(typedArray, index, valeur)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>typedArray</code></dt>
 <dd>Un tableau typé entier partagé parmi {{jsxref("Int8Array")}}, {{jsxref("Uint8Array")}}, {{jsxref("Int16Array")}}, {{jsxref("Uint16Array")}}, {{jsxref("Int32Array")}} ou {{jsxref("Uint32Array")}}.</dd>
 <dt><code>index</code></dt>
 <dd>La position du tableau <code>typedArray</code> à laquelle on souhaite stocker la valeur.</dd>
 <dt><code>valeur</code></dt>
 <dd>Le nombre à enregistrer.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La valeur qui a été enregistrée.</p>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Cette méthode lève {{jsxref("TypeError")}} si le type de <code>typedArray</code> n'est pas un des types entiers autorisés.</li>
 <li>Cette méthode lève {{jsxref("TypeError")}} si <code>typedArray</code> n'est pas tableau typé partagé.</li>
 <li>Cette méthode lève {{jsxref("RangeError")}} si <code>index</code> est en dehors des limites de <code>typedArray</code>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var buffer = new ArrayBuffer(4);         // Buffer classique
var float32 = new Float32Array(buffer);  // Nombre flottant
var uint32 = new Uint32Array(buffer);    // Représentation IEEE754

float32[0] = 0.5;
console.log("0x" + uint32[0].toString(16));

uint32[0] = 0x3f000000;   /// Représentation sur 32 bits de 0.5 (IEEE754)
console.log(float32[0]);

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
   <td>{{SpecName('ESDraft', '#sec-atomics.store', 'Atomics.store')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définition initiale avec ES2017.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Atomics.store")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("Atomics.load()")}}</li>
</ul>
