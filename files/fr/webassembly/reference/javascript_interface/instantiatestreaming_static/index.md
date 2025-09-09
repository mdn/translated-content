---
title: WebAssembly.instantiateStreaming()
slug: WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static
original_slug: WebAssembly/JavaScript_interface/instantiateStreaming_static
l10n:
  sourceCommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{WebAssemblySidebar}}

La méthode statique **`WebAssembly.instantiateStreaming()`** permet de compiler et d'instancier un module WebAssembly depuis un flux source. C'est la méthode la plus efficace, et la plus optimisée, permettant de charger du code WebAssembly.

> [!NOTE]
> Les pages web qui utilisent une [CSP](/fr/docs/Web/HTTP/Guides/CSP) stricte peuvent bloquer la compilation WebAssembly et l'exécution des modules. Pour plus d'informations pour l'autorisation de la compilation et de l'exécution, voir [la directive CSP `script-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src).

## Syntaxe

```js-nolint
WebAssembly.instantiateStreaming(source, importObject)
```

### Paramètres

- `source`
  - : Un objet [`Response`](/fr/docs/Web/API/Response) ou une promesse qui sera tenue avec une valeur [`Response`](/fr/docs/Web/API/Response) qui représente la source du module .wasm dont on souhaite récupérer le flux, la compiler puis l'instancier.
- `importObject` {{optional_inline}}
  - : Un objet qui contient les valeurs qui doivent être importées dans le nouvel objet `Instance` résultant. Cela peut être des fonctions ou des objets [`WebAssembly.Memory`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory). Il est nécessaire qu'il y ait une propriété correspondante pour chaque import déclaré dans le module compilé, sinon, une exception [`WebAssembly.LinkError`](/fr/docs/WebAssembly/Reference/JavaScript_interface/LinkError) sera levée.

### Valeur de retour

Un objet `Promise` dont la valeur de résolution est un objet `ResultObject` contenant deux champs&nbsp;:

- `module`
  - : Un objet [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module) qui représente le module WebAssembly compilé. Ce module pourra être instancié à nouveau, partagé avec [`postMessage()`](/fr/docs/Web/API/Worker/postMessage).
- `instance`
  - : Un objet [`WebAssembly.Instance`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Instance) qui contient l'ensemble [des fonctions WebAssembly exportées](/fr/docs/WebAssembly/Guides/Exported_functions).

### Exceptions

- Si l'un des paramètres n'est pas du bon type ou ne possède pas la bonne structure, une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) est déclenchée.
- Si l'opération échoue, la promesse lève une exception [`WebAssembly.CompileError`](/fr/docs/WebAssembly/Reference/JavaScript_interface/CompileError), [`WebAssembly.LinkError`](/fr/docs/WebAssembly/Reference/JavaScript_interface/LinkError), ou [`WebAssembly.RuntimeError`](/fr/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError)selon la cause de l'échec.

## Examples

Dans l'exemple suivant (également disponible sur GitHub&nbsp;: [`instantiate-streaming.html`](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html) et avec [le résultat <i lang="en">live</i>](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)), on récupère le flux d'un module .wasm depuis une source, on le compile et on l'instancie. La promesse est alors résolue avec un objet `ResultObject`. La méthode `instantiateStreaming()` acceptant une promesse fournissant un objet [`Response`](/fr/docs/Web/API/Response), on peut directement l'appel de [`fetch()`](/fr/docs/Web/API/Window/fetch) en argument qui transfèrera la réponse lorsque la promesse résultante sera tenue.

```js
const importObject = { imports: { imported_func: (arg) => console.log(arg) } };

WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Ensuite, on accède au champ `instance` de l'objet `ResultObject` afin de pouvoir invoquer une des fonctions exportées.

> [!NOTE]
> Pour que cela fonctionne, il faut que les fichiers soient renvoyés avec le type MIME `application/wasm` par le serveur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La page d'aperçu de WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript de WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
