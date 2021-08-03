---
title: WebAssembly.Global
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global
tags:
  - API
  - Constructor
  - JavaScript
  - Reference
  - TopicStub
  - WebAssembly
  - global
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Global
---
<div>{{JSRef}}</div>

<p>Un objet <strong><code>WebAssembly.Global</code></strong> représente une instance d'une variable globale, accessible depuis le code JavaScript et importable/exportable pour un ou plusieurs modules WebAssembly ({{jsxref("WebAssembly.Module")}}). Cela permet de lier dynamiquement plusieurs modules.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate">var maGlobale = new WebAssembly.Global(<em>descripteur</em>, <em>valeur</em>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>descripteur</code></dt>
 <dd>Un dictionnaire <code>GlobalDescriptor</code> qui contient deux propriétés :
 <ul>
  <li><code>value</code> : une valeur {{domxref("USVString")}} qui représente le type de donnée de la variable globale. Ce type peut être <code>i32</code>, <code>i64</code>, <code>f32</code> ou <code>f64</code>.</li>
  <li><code>mutable</code> : un booléen qui indique si la variable globale peut être modifiée ou non. Par défaut, cette propriété vaut <code>false</code>.</li>
 </ul>
 </dd>
 <dt><code>valeur</code></dt>
 <dd>La valeur que la variable doit contenir. Ce peut être n'importe quelle valeur qui respecte le type de donnée de la variable. Si aucune valeur n'est indiquée, c'est une valeur nulle typée qui est utilisée, tel qu'indiqué dans l'<a href="https://webassembly.github.io/spec/js-api/#defaultvalue">algorithme <code>DefaultValue</code></a>.</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<p>Aucune.</p>

<h2 id="Instances_de_WebAssembly.Global">Instances de <code>WebAssembly.Global</code></h2>

<p>Toutes les instances de <code>Global</code> héritent du <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/prototype">prototype </a>du constructeur <code>Global()</code>. Ce prototype peut être modifié afin d'avoir un impact sur l'ensemble des instances de <code>Global</code>.</p>

<h3 id="Propriétés_des_instances">Propriétés des instances</h3>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/prototype', 'Propriétés')}}</p>

<h3 id="Méthodes_des_instances">Méthodes des instances</h3>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/prototype', 'Méthodes')}}</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple suivant, on montre comment créer une nouvelle instance globale grâce au constructeur <code>WebAssembly.Global()</code>. Cette instance globale est définie avec le type <code>i32</code> et est indiquée comme modifiable. Sa valeur initiale est 0.</p>

<p>On change ensuite la valeur de la variable globale en la passant à 42 grâce à la propriété <code>Global.value</code> puis en la passant à 43 grâce à la fonction <code>incGlobal()</code> qui a été exportée depuis le module <code>global.wasm</code> (cette fonction ajoute 1 à n'imorte quelle valeur puis renvoie cette nouvelle valeur).</p>

<pre class="brush: js notranslate">const output = document.getElementById('output');

function assertEq(msg, got, expected) {
    output.innerHTML += `Testing ${msg}: `;
    if (got !== expected)
        output.innerHTML += `FAIL!&lt;br&gt;Got: ${got}&lt;br&gt;Expected: ${expected}&lt;br&gt;`;
    else
        output.innerHTML += `SUCCESS! Got: ${got}&lt;br&gt;`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) =&gt; {
    assertEq("getting initial value from wasm", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq("getting JS-updated value from wasm", instance.exports.getGlobal(), 42);
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
});</pre>

<div class="note">
<p><strong>Note :</strong> Cet exemple est<a href="https://mdn.github.io/webassembly-examples/js-api-examples/global.html"> utilisable sur GitHub</a> et <a href="https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html">son code source est également disponible</a>.</p>
</div>

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
   <td>{{SpecName('WebAssembly JS', '#globals', 'WebAssembly.Global()')}}</td>
   <td>{{Spec2('WebAssembly JS')}}</td>
   <td>Brouillon de spécification initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WebAssembly.Global")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/WebAssembly">Page principale pour la section WebAssembly de MDN</a></li>
 <li><a href="/fr/docs/WebAssembly/Concepts">Concepts WebAssembly</a></li>
 <li><a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Utiliser l'API JavaScript WebAssembly</a></li>
 <li><a href="https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md">La proposition pour l'import/export de variables globales modifiables</a></li>
</ul>
