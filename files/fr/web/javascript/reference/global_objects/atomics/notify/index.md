---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/notify
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/notify
---
<div>{{JSRef}}</div>

<p>La méthode statique <code><strong>Atomics</strong></code><strong><code>.notify()</code></strong> permet de réveiller des agents dormants qui sont dans la file d'attente.</p>

<div class="note">
<p><strong>Note :</strong> Cette opération ne fonctionne que sur un tableau typé partagé de type {{jsxref("Int32Array")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Atomics.notify(typedArray, index, count)
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>typedArray</code></dt>
 <dd>Un table typé partagé de type {{jsxref("Int32Array")}}.</dd>
 <dt><code>index</code></dt>
 <dd>La position sur le tableau <code>typedArray</code> pour laquelle réveiller les agents.</dd>
 <dt><code>count</code></dt>
 <dd>Le nombre d'agents dormants à réveiller.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le nombre d'agents réveillés.</p>

<h3 id="Exceptions_levées">Exceptions levées</h3>

<ul>
 <li>Cette méthode lève {{jsxref("TypeError")}} si <code>typedArray</code> n'est pas un tableau typé partagé de type{{jsxref("Int32Array")}}.</li>
 <li>Cette méthode lève {{jsxref("RangeError")}} si <code>index</code> est en dehors des limites de <code>typedArray</code>.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<p>Soit un tableau typé partagé <code>Int32Array</code>:</p>

<pre class="brush: js">var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
</pre>

<p>Un <em>thread</em> de lecture est en sommeil et surveille l'emplacement 0 et s'attend à ce que la valeur soit 0. Tant que cette condition est vérifiée, l'exécution n'ira pas plus loin. Lorsque le <em>thread</em> d'écriture a enregistré une nouvelle valeur, le <em>thread</em> de lecture sera réveillé par le <em>thread</em> d'écriture et renverra la nouvelle valeur (123).</p>

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
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-atomics.notify', 'Atomics.notify')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définition initiale avec ES2017.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Atomics.notify")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Atomics")}}</li>
 <li>{{jsxref("Atomics.wait()")}}</li>
</ul>
