---
title: WebAssembly.Memory()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory
tags:
  - API
  - Constructeur
  - JavaScript
  - Object
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory
---
<div>{{JSRef}}</div>

<p>Le constructeur <code><strong>WebAssembly.Memory()</strong></code> crée un nouvel objet <code>Memory</code> dont la propriété {{jsxref("WebAssembly/Memory/buffer","buffer")}} est un {{jsxref("ArrayBuffer")}} redimensionnable qui contient les octets de mémoire bruts accessibles par une instance WebAssembly.</p>

<p>Un espace mémoire créé depuis du code JavaScript ou depuis du code WebAssembly sera accessible et modifiable (<em>mutable</em>) depuis JavaScript <strong>et</strong> depuis WebAssembly.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var maMemoire = new WebAssembly.Memory(descripteurMemoire);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>descripteurMemoire</code></dt>
 <dd>Un objet qui contient les propriétés suivantes :
 <dl>
  <dt><code>initial</code></dt>
  <dd>La taille initiale de cet espace mémoire WebAssembly, exprimée en nombre de pages WebAssembly.</dd>
  <dt><code>maximum</code> {{optional_inline}}</dt>
  <dd>La taille maximale autorisée pour cet espace mémoire WebAssembly, exprimée en nombre de pages WebAssembly. Lorsque ce paramètre est utilisé, il est fournit comme indication au moteur pour que celui-ci réserve l'espace mémoire correspondant. Toutefois, le moteur peut choisir d'ignorer cette indication. Dans la plupart des cas, il n'est pas nécessaire d'indiquer un maximum pour les modules WebAssembly.</dd>
 </dl>
 </dd>
</dl>

<div class="note">
<p><strong>Note :</strong> Une page mémoire WebAssembly correspond à une taille fixe de 65 536 octets, soit environ 64 Ko.</p>
</div>

<h3 id="Exceptions">Exceptions</h3>

<ul>
 <li>Si <code>descripteurMemoire</code> n'est pas un objet, une exception {{jsxref("TypeError")}} sera levée.</li>
 <li>Si <code>maximum</code> est indiqué et qu'il est inférieur à <code>initial</code>, une exception {{jsxref("RangeError")}} sera levée.</li>
</ul>

<h2 id="Méthodes_du_constructeur_Memory">Méthodes du constructeur <code>Memory</code></h2>

<p>Aucune.</p>

<h2 id="Instances_de_Memory">Instances de <code>Memory</code></h2>

<p>Toutes les instances de <code>Memory</code> héritent des propriétés du <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/WebAssembly/Memory/prototype">prototype du constructeur</a> <code>Memory()</code> qui peut être utilisé afin de modifier le comportement de l'ensemble des instances de <code>Memory</code>.</p>

<h3 id="Propriétés">Propriétés</h3>

<dl>
 <dt><code>Memory.prototype.constructor</code></dt>
 <dd>Renvoie la fonction qui a créé l'instance de l'objet. Par défaut, c'est le constructeur {{jsxref("WebAssembly.Memory()")}}.</dd>
 <dt>{{jsxref("WebAssembly/Memory/buffer","Memory.prototype.buffer")}}</dt>
 <dd>Une propriété d'accesseur qui renvoie le tampon contenu dans l'espace mémoire.</dd>
</dl>

<h3 id="Méthodes">Méthodes</h3>

<dl>
 <dt>{{jsxref("WebAssembly/Memory/grow","Memory.prototype.grow()")}}</dt>
 <dd>Cette méthode permet d'augmenter la taille de l'espace mémoire d'un nombre de pages donné (dont chacune mesure 64 Ko).</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<p>Il existe deux façons de créer un objet <code>WebAssembly.Memory</code>. La première consiste à le créer explicitement en JavaScript. Avec l'instruction qui suit, on crée un espace mémoire avec une taille initiale de 10 pages (soit 640 Ko) et une taille maximale de 100 pages (soit 6,4 Mo).</p>

<pre class="brush: js">var memoire = new WebAssembly.Memory({initial:10, maximum:100});</pre>

<p>La seconde méthode permettant d'obtenir un objet <code>WebAssembly.Memory</code> est de l'exporter depuis un module WebAssembly. Dans l'exemple suivant (cf. le fichier <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html">memory.html</a> sur GitHub ainsi que <a href="https://mdn.github.io/webassembly-examples/js-api-examples/memory.html">le résultat obtenu</a>) on récupère et on instancie le <em>bytecode</em> <code>memory.wasm</code> grâce à la méthode {{jsxref("WebAssembly.instantiateStreaming()")}} tout en important la mémoire créée à la ligne précédente. Ensuite, on enregistre des valeurs au sein de cette mémoire puis on exporte une fonction qu'on utilise pour additionner certaines valeurs.</p>

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
   <td>{{SpecName('WebAssembly JS', '#webassemblymemory-objects', 'Memory')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de définition initiale pour WebAssembly.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Memory")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Le portail WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Les concepts relatifs à WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
</ul>
