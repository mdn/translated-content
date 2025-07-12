---
title: WebAssembly.Module.imports()
slug: WebAssembly/Reference/JavaScript_interface/Module/imports_static
original_slug: WebAssembly/JavaScript_interface/Module/imports_static
l10n:
  sourceCommit: 292e29ec89933d06416419f8403241b7e34f6555
---

{{WebAssemblySidebar}}

La méthode statique **`WebAssembly.Module.imports()`** renvoie un tableau qui contient les références des fonctions importées qui sont disponibles dans un module WebAssembly donné.

## Syntaxe

```js-nolint
WebAssembly.Module.imports(module)
```

### Paramètres

- `module`
  - : Une instance de [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module).

### Valeur de retour

Un tableau qui contient des objets représentant les fonctions importées du module passé en argument.

### Exceptions

Si `module` n'est pas une instance de [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module), une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError) sera levée.

## Exemples

Dans l'exemple qui suit, on compile le module `simple.wasm` puis on parcourt ses imports (cf. aussi [le code sur GitHub](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/imports.html) et [l'exemple <i lang="en">live</i>](https://mdn.github.io/webassembly-examples/js-api-examples/imports.html))

```js
WebAssembly.compileStreaming(fetch("simple.wasm")).then((mod) => {
  const imports = WebAssembly.Module.imports(mod);
  console.log(imports[0]);
});
```

Le résultat affiché dans la console ressemble alors à&nbsp;:

```js
{ module: "imports", name: "imported_func", kind: "function" }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Guides/Using_the_JavaScript_API)
