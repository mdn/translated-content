---
title: Loading and running WebAssembly code
slug: WebAssembly/Loading_and_running
translation_of: WebAssembly/Loading_and_running
---
<div>{{WebAssemblySidebar}}</div>

<div>Pour utiliser webassembly au sein de javascript, votre module doit être placé en mémoire. La mise en mémoire du module précède les étapes de compiliation et d'instantiation. Cet article fournit une référence pour les différents méchanismes qui permettent de récupérer le bytecode webassembly, ainsi que des informations sur la manière de le compiler, l'instancier, et l'exécuter.  </div>

<h2 id="Quelles_sont_les_différentes_options">Quelles sont les différentes options?</h2>

<p>Webassembly n'est pas encore intégré à <code>&lt;script type='module'&gt;</code>  ou ES2015 <code>import</code>, autrement dit le navigateur ne peut pas récuperer les modules à l'aide de déclaration d'imports. </p>

<p>Les anciennes méthodes {{jsxref("WebAssembly.compile")}}/{{jsxref("WebAssembly.instantiate")}} requièrent la création d'un {{domxref("ArrayBuffer")}} contenant le binaire de votre module webassembly sous forme d'octet brut, pour ensuite effectuer sa compilation et son instantiation. Cette approche est simialire à <code>new Function(string)</code>, à la différence que dans notre cas, nous substituons une chaine de charactères par une chaine de bytes (le code source webassembly). </p>

<p>Les nouvelles méthodes {{jsxref("WebAssembly.compileStreaming")}}/{{jsxref("WebAssembly.instantiateStreaming")}} sont beaucoup plus efficace — elles s'applique directement sur le flux d'octets récupérer par le réseau, et ne nécessite pas l'utilisaton d'un {{domxref("ArrayBuffer")}}.</p>

<p>Quelle est donc la démarche à suivre pour obtenir cet array buffer et le compiler ? La réponse dans les sections suivantes.</p>

<h2 id="En_utilisant_Fetch">En utilisant Fetch</h2>

<p><a href="/fr/docs/Web/API/Fetch_API">Fetch</a>  est une API qui facilite la récupération de ressources sur le réseau.</p>

<p>La façon la plus rapide et la plus efficace de récupérer un module wasm (webassembly) est d'utiliser la méthode {{jsxref("WebAssembly.instantiateStreaming()")}}, qui accepte comme premier argument un appel de fonction <code>fetch()</code>, et s'occupe de récupérer, compiler, et instancier le module en une seule et même étape, en accedant directement au flux de code binaire provenant du serveur:</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(results =&gt; {
  // Do something with the results!
});</pre>

<p>L'ancienne méthode {{jsxref("WebAssembly.instantiate()")}} n'accède pas directement au flux de données. Elle nécessite une étape supplémentaire afin de convertir le byte code récupéré en {{domxref("ArrayBuffer")}}. Elle s'implemente de cette façon:</p>

<pre class="brush: js">fetch('module.wasm').then(response =&gt;
  response.arrayBuffer()
).then(bytes =&gt;
  WebAssembly.instantiate(bytes, importObject)
).then(results =&gt; {
  // Do something with the results!
});</pre>



<h3 id="Aside_on_instantiate()_overloads">Aside on instantiate() overloads</h3>

<p>The {{jsxref("WebAssembly.instantiate()")}} function has two overload forms — the one shown above takes the byte code to compile as an argument and returns a promise that resolves to an object containing both the compiled module object, and an instantiated instance of it. The object looks like this:</p>

<pre class="brush: js">{
  module : Module // The newly compiled WebAssembly.Module object,
  instance : Instance // A new WebAssembly.Instance of the module object
}</pre>

<div class="note">
<p><strong>Note :</strong> En règle générale, on ne s'intéresse qu'à l'instance, mais il peut être utile de préserver le module afin de le mettre ultérieurement en cache, de le partager avec un autre worker ou window via <code><a href="/fr/docs/Web/API/MessagePort/postMessage">postMessage()</a></code>, ou tout simplement pour créer d'autres instances.</p>
</div>

<div class="note">
<p><strong>Note :</strong> Un chargement supplémentaire du module nécessite un object  de type {{jsxref("WebAssembly.Module")}} comme argument, et retourne une promesse contenant directement un objet de type instance comme résultat. Voir <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#Second_overload_example">Second overload example</a>.</p>
</div>

<h3 id="Mise_en_marche_du_code_webassembly">Mise en marche du code webassembly</h3>

<p>Une fois l'instance webassembly disponible au sein de Javascript, vous pouvez commencer à utiliser les fonctionnalités exportées, accessibles via la propriété {{jsxref("WebAssembly.Instance/exports", "WebAssembly.Instance.exports")}}. Votre code peut s'organsier de la manière suivante:</p>

<pre class="brush: js">WebAssembly.instantiateStreaming(fetch('myModule.wasm'), importObject)
.then(obj =&gt; {
  // Call an exported function:
  obj.instance.exports.exported_func();

  // or access the buffer contents of an exported memory:
  var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

  // or access the elements of an exported table:
  var table = obj.instance.exports.table;
  console.log(table.get(0)());
})</pre>

<div class="note">
<p><strong>Note :</strong> Pour plus d'informations sur la façon dont fonctionne l'exportation au sein d'un module webassembly, lisez <a href="/fr/docs/WebAssembly/Using_the_JavaScript_API">Using the WebAssembly JavaScript API</a>, et <a href="/fr/docs/WebAssembly/Understanding_the_text_format">Understanding WebAssembly text format</a>.</p>
</div>

<h2 id="En_utilisant_XMLHttpRequest">En utilisant XMLHttpRequest</h2>

<p><code><a href="/fr/docs/Web/API/XMLHttpRequest">XMLHttpRequest</a></code> est plus ancien que Fetch, mais peut toujours être utiliser afin récupérer un array buffer. En supposant que notre module se nome <code>simple.wasm</code>:</p>

<ol>
 <li>Créer une nouvel instance {{domxref("XMLHttpRequest()")}}, afin d'utiliser la méthode {{domxref("XMLHttpRequest.open","open()")}} nécessaire pour ouvrir une requête. Paramètrer la requête avec une méthode <code>GET</code>, et y déclarer le chemin du fichier que nous souhaiter récupérer.</li>
 <li>L'étape essentielle est içi de définir la réponse comme une réponse de type <code>'arraybuffer'</code> en utilisant  la propriété {{domxref("XMLHttpRequest.responseType","responseType")}}.</li>
 <li>Ensuite, la requête est envoyée à l'aide de la méthode {{domxref("XMLHttpRequest.send()")}}.</li>
 <li>Enfin l'event handler {{domxref("XMLHttpRequest.onload", "onload")}} se charge d'invoquer une fonction lorsque la réponse a terminé de se télécharger — au sein de cette fonction, la propriété {{domxref("XMLHttpRequest.response", "response")}} nous donne accès à un array buffer. Celui ci est fournit à notre méthode {{jsxref("WebAssembly.instantiate()")}} d'un manière similaire à ce qui est fait avec la méthode Fetch().</li>
</ol>

<p>Le code final est le suivant:</p>

<pre class="brush: js">request = new XMLHttpRequest();
request.open('GET', 'simple.wasm');
request.responseType = 'arraybuffer';
request.send();

request.onload = function() {
  var bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then(results =&gt; {
    results.instance.exports.exported_func();
  });
};</pre>

<div class="note">
<p><strong>Note :</strong> Vous pouvez retrouver un autre exemple sur <a href="https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html">xhr-wasm.html</a>.</p>
</div>
