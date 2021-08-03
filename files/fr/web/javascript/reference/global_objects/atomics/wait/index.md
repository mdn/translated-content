---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/wait
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/wait
---
<div>{{JSRef}}</div>

<p>La méthode statique <code><strong>Atomics</strong></code><strong><code>.wait()</code></strong> permet de vérifier qu'un emplacement d'un tableau {{jsxref("Int32Array")}} contient toujours une valeur donnée et, si c'est le cas, l'agent dort en attendant un réveil ou un délai d'expiration. La méthode renvoie une chaîne qui vaut <code>"ok"</code>, <code>"not-equal"</code> ou <code>"timed-out"</code>.</p>

<div class="note">
<p><strong>Note :</strong> Cette opération ne fonctionne qu'avec un tableau typé partagé {{jsxref("Int32Array")}} et peut ne pas être autorisée sur le <em>thread</em> principal.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Atomics.wait(typedArray, index, valeur[, timeout])
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>typedArray</code></dt>
 <dd>Un tableau typé partagé de type {{jsxref("Int32Array")}}.</dd>
 <dt><code>index</code></dt>
 <dd>La position du tableau typé <code>typedArray</code> sur laquelle on attend un changement.</dd>
 <dt><code>valeur</code></dt>
 <dd>La valeur attendue qu'on souhaite tester.</dd>
 <dt><code>timeout</code> {{optional_inline}}</dt>
 <dd>Le temps à attendre pour le changement de valeur, exprimé en millisecondes. La valeur par défaut est {{jsxref("Infinity")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères ({{jsxref("String")}} qui vaut <code>"ok"</code>, <code>"not-equal"</code> ou <code>"timed-out"</code> selon le cas.</p>

<h3 id="Exceptions_levées">Exceptions levées</h3>

<ul>
 <li>Cette méthode lève {{jsxref("TypeError")}} si <code>typedArray</code> n'est pas un tableau typé partagé de type {{jsxref("Int32Array")}}.</li>
 <li>Cette méthode lève {{jsxref("RangeError")}} si <code>index</code> est en dehors des limites de <code>typedArray</code>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Soit un tableau typé partagé <code>Int32Array</code>:</p>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
</pre>

<p>Un <em>thread</em> de lecture est en sommeille et surveille l'emplacement 0 et s'attend à ce que la valeur soit 0. Tant que cette condition est vérifiée, l'exécution n'ira pas plus loin. Lorsque le <em>thread</em> d'écriture a enregistré une nouvelle valeur, le <em>thread</em> de lecture sera notifié par le <em>thread</em> d'écriture et renverra la nouvelle valeur (123).</p>

<pre class="brush: js">Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123</pre>

<p>Un <em>thread</em> d'écriture stocke une nouvelle valeur et notifie le <em>thread</em> de lecture une fois que la valeur a bien été écrite :</p>

<pre class="brush: js">console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-atomics.wait', 'Atomics.wait')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définition initiale avec ES2017.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Atomics.wait")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("Atomics.notify()")}}</li>
</ul>
