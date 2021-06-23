---
title: await
slug: Web/JavaScript/Reference/Operators/await
tags:
  - JavaScript
  - Opérateur
  - Reference
translation_of: Web/JavaScript/Reference/Operators/await
original_slug: Web/JavaScript/Reference/Opérateurs/await
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur <strong><code>await</code></strong> permet d'attendre la résolution d'une promesse ({{jsxref("Promise")}}). Il ne peut être utilisé qu'au sein d'une fonction asynchrone (définie avec l'instruction {{jsxref("Instructions/async_function", "async function")}}).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">[<em>rv</em>] = await <em>expression</em>;</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>Une promesse ({{jsxref("Promise")}}) ou toute autre valeur dont on souhaite attendre la résolution.</dd>
 <dt><code>rv</code></dt>
 <dd>
 <p>La valeur de retour qui est celle de la promesse lorsqu'elle est résolue ou la valeur de l'expression lorsque celle-ci n'est pas une promesse.</p>
 </dd>
</dl>

<h2 id="Description">Description</h2>

<p>L'expression <code>await</code> interrompt l'exécution d'une fonction asynchrone et attend la résolution d'une promesse. Lorsque la promesse est résolue (tenue ou rompue), la valeur est renvoyée et l'exécution de la fonction asynchrone reprend. Si la valeur de l'expression n'est pas une promesse, elle est convertie en une promesse résolue ayant cette valeur.</p>

<p>Si la promesse est rompue, l'expression <code>await</code> lève une exception avec la raison.</p>

<h2 id="Exemples">Exemples</h2>

<p>Si on passe une promesse à une expression <code>await</code>, celle-ci attendra jusqu'à la résolution de la promesse et renverra la valeur de résolution.</p>

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
</pre>

<p>Les objets dotés d'une méthode <code>then()</code> (<em>thenable</em> en anglais) seront également résolus :</p>

<pre class="brush: js">async function f0() {
  const thenable = {
    then: function(resolve, _reject) {
      resolve("résolu :)");
    }
  };
  console.log(await thenable); // résolu :)
}
f0();</pre>

<p>Si la valeur n'est pas une promesse, elle est convertie en une promesse résolue :</p>

<pre class="brush: js">async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();</pre>

<p>Si la promesse est rejetée, la raison est fournie avec l'exception.</p>

<pre class="brush: js">async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();</pre>

<p>On peut également gérer le cas où la promesse est rejetée grâce à {{jsxref("Promise.prototype.catch()")}} :</p>

<pre class="brush: js">var response = await maFonctionPromesse().catch(
  (err) =&gt; {
    console.log(err);
  }
);</pre>

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
   <td>{{SpecName("ESDraft", "#sec-async-function-definitions", "async functions")}}</td>
   <td>{{Spec2("ESDraft")}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("ES2018", "#sec-async-function-definitions", "async functions")}}</td>
   <td>{{Spec2('ES2018')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName("ES2017", "#sec-async-function-definitions", "async functions")}}</td>
   <td>{{Spec2('ES2017')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.await")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'instruction {{jsxref("Instructions/async_function", "async function")}}</li>
 <li>L'expression {{jsxref("Opérateurs/async_function", "async function")}}</li>
 <li>L'objet {{jsxref("AsyncFunction")}}</li>
</ul>
