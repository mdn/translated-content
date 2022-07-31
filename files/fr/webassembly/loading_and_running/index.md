---
title: Loading and running WebAssembly code
slug: WebAssembly/Loading_and_running
translation_of: WebAssembly/Loading_and_running
---
{{WebAssemblySidebar}}Pour utiliser webassembly au sein de javascript, votre module doit être placé en mémoire. La mise en mémoire du module précède les étapes de compiliation et d'instantiation. Cet article fournit une référence pour les différents méchanismes qui permettent de récupérer le bytecode webassembly, ainsi que des informations sur la manière de le compiler, l'instancier, et l'exécuter.

## Quelles sont les différentes options?

Webassembly n'est pas encore intégré à `<script type='module'>`  ou ES2015 `import`, autrement dit le navigateur ne peut pas récuperer les modules à l'aide de déclaration d'imports.

Les anciennes méthodes {{jsxref("WebAssembly.compile")}}/{{jsxref("WebAssembly.instantiate")}} requièrent la création d'un {{domxref("ArrayBuffer")}} contenant le binaire de votre module webassembly sous forme d'octet brut, pour ensuite effectuer sa compilation et son instantiation. Cette approche est simialire à `new Function(string)`, à la différence que dans notre cas, nous substituons une chaine de charactères par une chaine de bytes (le code source webassembly).

Les nouvelles méthodes {{jsxref("WebAssembly.compileStreaming")}}/{{jsxref("WebAssembly.instantiateStreaming")}} sont beaucoup plus efficace — elles s'applique directement sur le flux d'octets récupérer par le réseau, et ne nécessite pas l'utilisaton d'un {{domxref("ArrayBuffer")}}.

Quelle est donc la démarche à suivre pour obtenir cet array buffer et le compiler ? La réponse dans les sections suivantes.

## En utilisant Fetch

[Fetch](/fr/docs/Web/API/Fetch_API)  est une API qui facilite la récupération de ressources sur le réseau.

La façon la plus rapide et la plus efficace de récupérer un module wasm (webassembly) est d'utiliser la méthode {{jsxref("WebAssembly.instantiateStreaming()")}}, qui accepte comme premier argument un appel de fonction `fetch()`, et s'occupe de récupérer, compiler, et instancier le module en une seule et même étape, en accedant directement au flux de code binaire provenant du serveur:

```js
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(results => {
  // Do something with the results!
});
```

L'ancienne méthode {{jsxref("WebAssembly.instantiate()")}} n'accède pas directement au flux de données. Elle nécessite une étape supplémentaire afin de convertir le byte code récupéré en {{domxref("ArrayBuffer")}}. Elle s'implemente de cette façon:

```js
fetch('module.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, importObject)
).then(results => {
  // Do something with the results!
});
```

### Aside on instantiate() overloads

The {{jsxref("WebAssembly.instantiate()")}} function has two overload forms — the one shown above takes the byte code to compile as an argument and returns a promise that resolves to an object containing both the compiled module object, and an instantiated instance of it. The object looks like this:

```js
{
  module : Module // The newly compiled WebAssembly.Module object,
  instance : Instance // A new WebAssembly.Instance of the module object
}
```

> **Note :** En règle générale, on ne s'intéresse qu'à l'instance, mais il peut être utile de préserver le module afin de le mettre ultérieurement en cache, de le partager avec un autre worker ou window via [`postMessage()`](/fr/docs/Web/API/MessagePort/postMessage), ou tout simplement pour créer d'autres instances.

> **Note :** Un chargement supplémentaire du module nécessite un object de type {{jsxref("WebAssembly.Module")}} comme argument, et retourne une promesse contenant directement un objet de type instance comme résultat. Voir [Second overload example](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/instantiate#Second_overload_example).

### Mise en marche du code webassembly

Une fois l'instance webassembly disponible au sein de Javascript, vous pouvez commencer à utiliser les fonctionnalités exportées, accessibles via la propriété {{jsxref("WebAssembly.Instance/exports", "WebAssembly.Instance.exports")}}. Votre code peut s'organsier de la manière suivante:

```js
WebAssembly.instantiateStreaming(fetch('myModule.wasm'), importObject)
.then(obj => {
  // Call an exported function:
  obj.instance.exports.exported_func();

  // or access the buffer contents of an exported memory:
  var i32 = new Uint32Array(obj.instance.exports.memory.buffer);

  // or access the elements of an exported table:
  var table = obj.instance.exports.table;
  console.log(table.get(0)());
})
```

> **Note :** Pour plus d'informations sur la façon dont fonctionne l'exportation au sein d'un module webassembly, lisez [Using the WebAssembly JavaScript API](/fr/docs/WebAssembly/Using_the_JavaScript_API), et [Understanding WebAssembly text format](/fr/docs/WebAssembly/Understanding_the_text_format).

## En utilisant XMLHttpRequest

[`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) est plus ancien que Fetch, mais peut toujours être utiliser afin récupérer un array buffer. En supposant que notre module se nome `simple.wasm`:

1. Créer une nouvel instance {{domxref("XMLHttpRequest()")}}, afin d'utiliser la méthode {{domxref("XMLHttpRequest.open","open()")}} nécessaire pour ouvrir une requête. Paramètrer la requête avec une méthode `GET`, et y déclarer le chemin du fichier que nous souhaiter récupérer.
2. L'étape essentielle est içi de définir la réponse comme une réponse de type `'arraybuffer'` en utilisant la propriété {{domxref("XMLHttpRequest.responseType","responseType")}}.
3. Ensuite, la requête est envoyée à l'aide de la méthode {{domxref("XMLHttpRequest.send()")}}.
4. Enfin l'event handler {{domxref("XMLHttpRequest.onload", "onload")}} se charge d'invoquer une fonction lorsque la réponse a terminé de se télécharger — au sein de cette fonction, la propriété {{domxref("XMLHttpRequest.response", "response")}} nous donne accès à un array buffer. Celui ci est fournit à notre méthode {{jsxref("WebAssembly.instantiate()")}} d'un manière similaire à ce qui est fait avec la méthode Fetch().

Le code final est le suivant:

```js
request = new XMLHttpRequest();
request.open('GET', 'simple.wasm');
request.responseType = 'arraybuffer';
request.send();

request.onload = function() {
  var bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then(results => {
    results.instance.exports.exported_func();
  });
};
```

> **Note :** Vous pouvez retrouver un autre exemple sur [xhr-wasm.html](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
