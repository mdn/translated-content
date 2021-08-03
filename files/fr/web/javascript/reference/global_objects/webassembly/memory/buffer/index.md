---
title: WebAssembly.Memory.prototype.buffer
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer
tags:
  - API
  - JavaScript
  - Propriété
  - Reference
  - WebAssembly
  - memory
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory/buffer
---
<div>{{JSRef}}</div>

<p>La propriété <strong><code>buffer</code></strong>, rattachée au prototype de l'objet <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory">Memory</a></code>, renvoie le tampon (<em>buffer</em>) contenu dans l'espace mémoire.</p>

<pre class="syntaxbox">memory.buffer
</pre>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant (cf. le fichier <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html">memory.html</a> sur GitHub ainsi que <a href="https://mdn.github.io/webassembly-examples/js-api-examples/memory.html">le résultat obtenu</a>), on récupère puis on instancie le <em>bytecode</em> <code>memory.wasm</code> grâce à la méthode {{jsxref("WebAssembly.instantiateStreaming()")}} tout en important la mémoire créée à la ligne précédente. Ensuite, on enregistre certaines valeurs dans cette mémoire puis on exporte une fonction afin de l'utiliser pour additionner certaines valeurs.</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('memory.wasm'), { js: { mem: memory } })
.then(obj =&gt; {
  var i32 = new Uint32Array(memory.buffer);
  for (var i = 0; i &lt; 10; i++) {
    i32[i] = i;
  }
  var sum = obj.instance.exports.accumulate(0, 10);
  console.log(sum);
});</pre>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblymemoryprototypebuffer', 'buffer')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Memory.buffer")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>
