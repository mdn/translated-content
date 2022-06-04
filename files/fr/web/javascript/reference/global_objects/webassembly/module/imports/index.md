---
title: WebAssembly.Module.imports()
slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports
tags:
  - API
  - JavaScript
  - Module
  - Méthode
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Module/imports
original_slug: Web/JavaScript/Reference/Objets_globaux/WebAssembly/Module/imports
---
{{JSRef}}

La méthode **`WebAssembly.imports()`** renvoie un tableau qui contient les références des fonctions importées qui sont disponibles dans un module WebAssembly donné.

## Syntaxe

```js
var arrImport = WebAssembly.Module.imports(module);
```

### Paramètres

- `module`
  - : Une instance de {{jsxref("WebAssembly.Module")}}.

### Valeur de retour

Un tableau qui contient des objets représentant les fonctions importées du module passé en argument.

### Exceptions

Si `module` n'est pas une instance de {{jsxref("WebAssembly.Module")}}, une exception {{jsxref("TypeError")}} sera levée.

## Exemples

Dans l'exemple qui suit, on compile le module `simple.wasm` puis on parcourt ses imports (cf. aussi [le code sur GitHub](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/imports.html) et [l'exemple _live_](https://mdn.github.io/webassembly-examples/js-api-examples/imports.html))

```js
WebAssembly.compileStreaming(fetch('simple.wasm'))
.then(function(mod) {
  var imports = WebAssembly.Module.imports(mod);
  console.log(imports[0]);
});
```

Le résultat affiché dans la console ressemble alors à :

```js
{ module: "imports", name: "imported_func", kind: "function" }
```

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblymoduleimports', 'imports()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initial pour WebAssembly. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.Module.imports")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
