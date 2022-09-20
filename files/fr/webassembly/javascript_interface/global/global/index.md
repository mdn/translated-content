---
title: Constructeur WebAssembly.Global()
slug: WebAssembly/JavaScript_interface/Global/Global
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/Global/Global
browser-compat: javascript.builtins.WebAssembly.Global.Global
---
{{JSRef}}

Le constructeur **`WebAssembly.Global()`** permet de créer un nouvel objet `Global` représentant une instance d'une variable globale, accessible depuis le code JavaScript et importable/exportable dans plusieurs instances de [`WebAssembly.Module`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module). Cela permet la liaison dynamique de plusieurs modules.

## Syntaxe

```js
new WebAssembly.Global(descripteur, valeur)
```

### Paramètres

- _descripteur_

  - : Un objet dictionnaire `GlobalDescriptor` qui contient deux propriétés&nbsp;:

    - `value`: Une chaîne [`USVString`](/fr/docs/Web/API/USVString) représentant le type de données de la variable globale. Elle peut être `i32`, `i64`, `f32`, ou `f64`. `USVString` correspond à l'ensemble des différentes séquences Unicode scalaires possibles. `USVString` correspond à `String` lorsqu'il est renvoyé en JavaScript et est un type généralement utilisé par les API qui effectuent du traitement de texte et qui ont besoin de manipuler une chaîne de valeurs Unicode scalaire. `USVString` est équivalent à `DOMString` sauf qu'il n'accepte pas les codets surrogate non appairés. De tels caractères présents dans une valeur `USVString` seront convertis par le navigateur en caractères de remplacement Unicode&nbsp;: U+FFFD, (�).
    - `mutable`: Une valeur booléenne qui indique si la variable globale est modifiable ou non. Par défaut, elle vaut `false`.

- _valeur_
  - : La valeur que contient la variable. Ce peut être n'importe quelle valeur dont le type correspond au type de données de la variable. Si aucune valeur n'est indiquée, c'est une valeur 0 typée qui est utilisée, comme indiqué dans [l'algorithme `DefaultValue`](https://webassembly.github.io/spec/js-api/#defaultvalue).

## Exemples

### Créer une nouvelle instance de Global

L'exemple suivant illustre une nouvelle instance de variable globale créée avec le constructeur `WebAssembly.Global()`. Dans cet exemple, on définit une variable globale modifiable, de type `i32` avec une valeur initiale à 0.

La valeur de la variable globale est ensuite changée&nbsp;: d'abord en `42` avec la propriété `Global.value`, puis en `43` avec la fonction `incGlobal()` qu'on a exportée du module `global.wasm` (cette fonction ajoute 1 à toute valeur qui lui est fournie et renvoie la valeur obtenue).

```js
const output = document.getElementById('output');

function assertEq(msg, got, expected) {
  output.innerHTML += `Test ${msg}: `;
  if (got !== expected)
    output.innerHTML += `ÉCHEC&nbsp;!<br>Résultat&nbsp; ${got}<br>Attendu&nbsp: ${expected}<br>`;
  else
    output.innerHTML += `SUCCÈS&nbsp;! Résultat&nbsp; ${got}<br>`;
}

assertEq("WebAssembly.Global existe", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) => {
  assertEq("Obtenir une valeur initiale WASM", instance.exports.getGlobal(), 0);
  global.value = 42;
  assertEq("Obtenir une valeur mise à jour depuis le code JS", instance.exports.getGlobal(), 42);
  instance.exports.incGlobal();
  assertEq("Obtenir une valeur mise à jour depuis le code WASM", global.value, 43);
});
```

> **Note :** Voir [l'exemple live sur GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html) et aussi [le code source](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La page  [WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
