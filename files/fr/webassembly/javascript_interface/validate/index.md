---
title: WebAssembly.validate()
slug: WebAssembly/JavaScript_interface/validate
tags:
  - API
  - JavaScript
  - Méthode
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/validate
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/validate
---
{{JSRef}}

La fonction **`WebAssembly.validate()`** permet de valider un [tableau typé](/fr/docs/Web/JavaScript/Tableaux_typés) de _bytecode_ WebAssembly et renvoie un booléen qui indique si le contenu du tableau forme un module WebAssembly valide (`true`) ou non (`false`).

## Syntaxe

```js
WebAssembly.validate(bufferSource);
```

### Paramètres

- `bufferSource`
  - : Un [tableau typé](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypedArray) ou un {{jsxref("ArrayBuffer")}} qui contient le _bytecode_ du module qu'on souhaite valider.

### Valeur de retour

Un booléen qui indique si la source est un code WebAssembly valide (`true`) ou non (`false`).

### Exceptions

Si la valeur passée en argument n'est pas un tableau typé ou un {{jsxref("ArrayBuffer")}}, une exception {{jsxref("TypeError")}} sera levée.

## Exemples

Dans l'exemple suivant, (cf. le fichier `validate.html` du [code source](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/validate.html), ainsi que [l'exemple _live_](https://mdn.github.io/webassembly-examples/js-api-examples/validate.html)), on récupère un module .wasm et on le convertit en un tableau typé. Ensuite, on appelle la méthode `validate()` afin de vérifier si le module est valide.

```js
fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(function(bytes) {
  var valid = WebAssembly.validate(bytes);
  console.log("Les octets forment un module "
    + (valid ? "" : "in") + "valide.");
});
```

## Spécifications

| Spécification                                                                                | État                                 | Commentaires                                       |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#webassemblyvalidate', 'validate()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de définition initiale pour WebAssembly. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.validate")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
