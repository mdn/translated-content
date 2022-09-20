---
title: WebAssembly.Global
slug: WebAssembly/JavaScript_interface/Global
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global
browser-compat: javascript.builtins.WebAssembly.Global
---
{{JSRef}}

Un objet **`WebAssembly.Global`** représente une instance d'une variable globale, accessible depuis le code JavaScript et importable/exportable pour un ou plusieurs modules WebAssembly ([`WebAssembly.Module`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module)). Cela permet de lier dynamiquement plusieurs modules.

## Constructeur

- [`WebAssembly.Global()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global)
  - : Crée un nouvel objet `Global`.

## Instances `Global`

Toutes les instances de `Global` héritent du prototype du constructeur `Global()`, ce dernier peut être modifié afin de modifier le comportement de l'ensemble des instances `Global`.

### Propriétés des instances

- `Global.prototype.constructor`
  - : Renvoie la fonction qui a créé cette instance d'objet. Par défaut, c'est le constructeur [`WebAssembly.Global()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global).
- `Global.prototype[@@toStringTag]`
  - : La valeur initiale de la propriété [`@@toStringTag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"WebAssembly.Global"`.
- `Global.prototype.value`
  - : La valeur contenue au sein de la variable globale. Elle peut être utilisée pour récupérer ou modifier la valeur de la variable globale.

### Méthodes des instances

- `Global.prototype.valueOf()`
  - : Une méthode ancienne qui renvoie la valeur contenue au sein de la variable globale.

## Exemples

### Créer une nouvelle instance `Global`

Dans l'exemple suivant, on montre comment créer une nouvelle instance globale grâce au constructeur `WebAssembly.Global()`. Cette instance globale est définie avec le type `i32` et est indiquée comme modifiable. Sa valeur initiale est `0`.

On change ensuite la valeur de la variable globale en la passant à `42` grâce à la propriété `Global.value` puis en la passant à `43` grâce à la fonction `incGlobal()` qui a été exportée depuis le module `global.wasm` (cette fonction ajoute `1` à n'imorte quelle valeur puis renvoie cette nouvelle valeur).

```js
const output = document.getElementById('output');

function assertEq(msg, res, attendu) {
  output.innerHTML += `Test ${msg} : `;
  if (res !== attendu)
    output.innerHTML += `ÉCHEC !<br>Résultat : ${res}<br>Attendu : ${attendu}<br>`;
  else
    output.innerHTML += `SUCCÈS ! Résultat : ${res}<br>`;
}

assertEq("Existence de WebAssembly.Global", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) => {
    assertEq("Obtention de la valeur initiale depuis wasm", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq("Obtention de la valeur mise à jour en JS depuis wasm", instance.exports.getGlobal(), 42);
    instance.exports.incGlobal();
    assertEq("Obtention de la valeur mise à jour côté wasm en JS", global.value, 43);
});
```

> **Note :** Cet exemple est [utilisable sur GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) et [son code source est également disponible](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu de WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
- [Proposition d'import/export pour les variables globales mutables](https://github.com/WebAssembly/mutable-global/blob/master/proposals/mutable-global/Overview.md)
