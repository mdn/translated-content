---
title: Charger et exécuter du code WebAssembly
slug: WebAssembly/Guides/Loading_and_running
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

Pour utiliser webassembly au sein de javascript, votre module doit être placé en mémoire. La mise en mémoire du module précède les étapes de compiliation et d'instantiation. Cet article fournit une référence pour les différents méchanismes qui permettent de récupérer le bytecode webassembly, ainsi que des informations sur la manière de le compiler, l'instancier, et l'exécuter.

## Quelles sont les différentes options ?

Webassembly n'est pas encore intégré à `<script type='module'>` ou ES2015 `import`, autrement dit le navigateur ne peut pas récuperer les modules à l'aide de déclaration d'imports.

Les anciennes méthodes [`WebAssembly.compile`](/fr/docs/WebAssembly/Reference/JavaScript_interface/compile_static)/[`WebAssembly.instantiate`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) requièrent la création d'un {{JSxRef("ArrayBuffer")}} contenant le binaire de votre module webassembly sous forme d'octet brut, pour ensuite effectuer sa compilation et son instantiation. Cette approche est simialire à `new Function(string)`, à la différence que dans notre cas, nous substituons une chaine de charactères par une chaine de bytes (le code source webassembly).

Les nouvelles méthodes [`WebAssembly.compileStreaming`](/fr/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static)/[`WebAssembly.instantiateStreaming`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) sont beaucoup plus efficace — elles s'applique directement sur le flux d'octets récupérer par le réseau, et ne nécessite pas l'utilisaton d'un {{JSxRef("ArrayBuffer")}}.

Quelle est donc la démarche à suivre pour obtenir cet array buffer et le compiler&nbsp;? La réponse dans les sections suivantes.

## Utiliser Fetch

[Fetch](/fr/docs/Web/API/Fetch_API) est une API qui facilite la récupération de ressources sur le réseau.

La façon la plus rapide et la plus efficace de récupérer un module wasm (webassembly) est d'utiliser la méthode [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), qui accepte comme premier argument un appel de fonction `fetch()`, et s'occupe de récupérer, compiler, et instancier le module en une seule et même étape, en accedant directement au flux de code binaire provenant du serveur&nbsp;:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (results) => {
    // Faites quelque chose avec les résultats !
  },
);
```

L'ancienne méthode [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) n'accède pas directement au flux de données. Elle nécessite une étape supplémentaire afin de convertir le byte code récupéré en {{JSxRef("ArrayBuffer")}}. Elle s'implemente de cette façon:

```js
fetch("module.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    // Faites quelque chose avec les résultats !
  });
```

### À propos des surcharges de `instantiate()`

La fonction [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) possède deux formes de surcharge — celle présentée ci-dessus prend le bytecode à compiler en argument et retourne une promesse qui se résout en un objet contenant à la fois l'objet module compilé et une instance instanciée de celui-ci. L'objet ressemble à ceci&nbsp;:

```js
({
  module: Module, // Le nouvel objet WebAssembly.Module compilé,
  instance: Instance, // Une nouvelle WebAssembly.Instance de l'objet module
});
```

> [!NOTE]
> En général, seul l'instance nous intéresse, mais il est utile d'avoir le module si l'on souhaite le mettre en cache, le partager avec un autre processus ou fenêtre via {{DOMxRef("MessagePort/postMessage", "postMessage()")}}, ou créer d'autres instances.

> [!NOTE]
> La seconde forme de surcharge prend un objet [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module) en argument, et retourne une promesse contenant directement l'objet instance en résultat. Voir l'[exemple de la seconde surcharge](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static#second_exemple_de_surcharge).

### Exécuter votre code WebAssembly

Une fois que vous avez votre instance WebAssembly disponible dans votre JavaScript, vous pouvez commencer à utiliser les fonctionnalités qui ont été exportées via la propriété [`WebAssembly.Instance.exports`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports). Votre code pourrait ressembler à ceci&nbsp;:

```js
WebAssembly.instantiateStreaming(fetch("myModule.wasm"), importObject).then(
  (obj) => {
    // Appeler une fonction exportée :
    obj.instance.exports.exported_func();

    // ou accéder au contenu du buffer d'une mémoire exportée :
    const dv = new DataView(obj.instance.exports.memory.buffer);

    // ou accéder aux éléments d'une table exportée :
    const table = obj.instance.exports.table;
    console.log(table.get(0)());
  },
);
```

> [!NOTE]
> Pour plus d'informations sur la façon dont l'exportation depuis un module WebAssembly fonctionne, consultez [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API) et [Comprendre le format texte WebAssembly](/fr/docs/WebAssembly/Guides/Understanding_the_text_format).

## Utiliser XMLHttpRequest

[`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) est un peu plus ancien que Fetch, mais peut toujours être utilisé pour obtenir un tableau typé. Supposons à nouveau que notre module s'appelle `simple.wasm`&nbsp;:

1. Créez une nouvelle instance de {{DOMxRef("XMLHttpRequest()")}}, et utilisez sa méthode {{DOMxRef("XMLHttpRequest.open","open()")}} pour ouvrir une requête, en définissant la méthode sur `GET` et en indiquant le chemin du fichier à récupérer.
2. L'étape clé consiste à définir le type de réponse sur `'arraybuffer'` à l'aide de la propriété {{DOMxRef("XMLHttpRequest.responseType","responseType")}}.
3. Ensuite, envoyez la requête avec {{DOMxRef("XMLHttpRequest.send()")}}.
4. Utilisez ensuite le gestionnaire d'évènement {{DOMxRef("XMLHttpRequestEventTarget/load_event", "load")}} pour invoquer une fonction lorsque la réponse a fini d'être téléchargée — dans cette fonction, récupérez le array buffer depuis la propriété {{DOMxRef("XMLHttpRequest.response", "response")}}, puis transmettez-le à la méthode [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static) comme avec Fetch.

Le code final ressemble à ceci&nbsp;:

```js
const request = new XMLHttpRequest();
request.open("GET", "simple.wasm");
request.responseType = "arraybuffer";
request.send();

request.onload = () => {
  const bytes = request.response;
  WebAssembly.instantiate(bytes, importObject).then((results) => {
    results.instance.exports.exported_func();
  });
};
```

> [!NOTE]
> Vous pouvez voir un exemple en action dans [xhr-wasm.html <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/xhr-wasm.html).
