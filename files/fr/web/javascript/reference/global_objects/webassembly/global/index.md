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
{{JSRef}}

Un objet **`WebAssembly.Global`** représente une instance d'une variable globale, accessible depuis le code JavaScript et importable/exportable pour un ou plusieurs modules WebAssembly ({{jsxref("WebAssembly.Module")}}). Cela permet de lier dynamiquement plusieurs modules.

## Syntaxe

    var maGlobale = new WebAssembly.Global(descripteur, valeur);

### Paramètres

- `descripteur`

  - : Un dictionnaire `GlobalDescriptor` qui contient deux propriétés :

    - `value` : une valeur {{domxref("USVString")}} qui représente le type de donnée de la variable globale. Ce type peut être `i32`, `i64`, `f32` ou `f64`.
    - `mutable` : un booléen qui indique si la variable globale peut être modifiée ou non. Par défaut, cette propriété vaut `false`.

- `valeur`
  - : La valeur que la variable doit contenir. Ce peut être n'importe quelle valeur qui respecte le type de donnée de la variable. Si aucune valeur n'est indiquée, c'est une valeur nulle typée qui est utilisée, tel qu'indiqué dans l'[algorithme `DefaultValue`](https://webassembly.github.io/spec/js-api/#defaultvalue).

## Propriétés

Aucune.

## Instances de `WebAssembly.Global`

Toutes les instances de `Global` héritent du [prototype](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/prototype) du constructeur `Global()`. Ce prototype peut être modifié afin d'avoir un impact sur l'ensemble des instances de `Global`.

### Propriétés des instances

{{page('/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/prototype', 'Propriétés')}}

### Méthodes des instances

{{page('/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/prototype', 'Méthodes')}}

## Exemples

Dans l'exemple suivant, on montre comment créer une nouvelle instance globale grâce au constructeur `WebAssembly.Global()`. Cette instance globale est définie avec le type `i32` et est indiquée comme modifiable. Sa valeur initiale est 0.

On change ensuite la valeur de la variable globale en la passant à 42 grâce à la propriété `Global.value` puis en la passant à 43 grâce à la fonction `incGlobal()` qui a été exportée depuis le module `global.wasm` (cette fonction ajoute 1 à n'imorte quelle valeur puis renvoie cette nouvelle valeur).

```js
const output = document.getElementById('output');

function assertEq(msg, got, expected) {
    output.innerHTML += `Testing ${msg}: `;
    if (got !== expected)
        output.innerHTML += `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
    else
        output.innerHTML += `SUCCESS! Got: ${got}<br>`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) => {
    assertEq("getting initial value from wasm", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq("getting JS-updated value from wasm", instance.exports.getGlobal(), 42);
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
});
```

> **Note :** Cet exemple est [utilisable sur GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) et [son code source est également disponible](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html).

## Spécifications

| Spécification                                                                            | État                                 | Commentaires                         |
| ---------------------------------------------------------------------------------------- | ------------------------------------ | ------------------------------------ |
| {{SpecName('WebAssembly JS', '#globals', 'WebAssembly.Global()')}} | {{Spec2('WebAssembly JS')}} | Brouillon de spécification initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.Global")}}

## Voir aussi

- [Page principale pour la section WebAssembly de MDN](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
- [La proposition pour l'import/export de variables globales modifiables](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
