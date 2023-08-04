---
title: await
slug: Web/JavaScript/Reference/Operators/await
---

{{jsSidebar("Operators")}}

L'opérateur **`await`** permet d'attendre la résolution d'une promesse ({{jsxref("Promise")}}). Il ne peut être utilisé qu'au sein d'une fonction asynchrone (définie avec l'instruction {{jsxref("Instructions/async_function", "async function")}}).

## Syntaxe

```js
[rv] = await expression;
```

- `expression`
  - : Une promesse ({{jsxref("Promise")}}) ou toute autre valeur dont on souhaite attendre la résolution.
- `rv`
  - : La valeur de retour qui est celle de la promesse lorsqu'elle est résolue ou la valeur de l'expression lorsque celle-ci n'est pas une promesse.

## Description

L'expression `await` interrompt l'exécution d'une fonction asynchrone et attend la résolution d'une promesse. Lorsque la promesse est résolue (tenue ou rompue), la valeur est renvoyée et l'exécution de la fonction asynchrone reprend. Si la valeur de l'expression n'est pas une promesse, elle est convertie en une promesse résolue ayant cette valeur.

Si la promesse est rompue, l'expression `await` lève une exception avec la raison.

## Exemples

Si on passe une promesse à une expression `await`, celle-ci attendra jusqu'à la résolution de la promesse et renverra la valeur de résolution.

```js
function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

Les objets dotés d'une méthode `then()` (_thenable_ en anglais) seront également résolus :

```js
async function f0() {
  const thenable = {
    then: function (resolve, _reject) {
      resolve("résolu :)");
    },
  };
  console.log(await thenable); // résolu :)
}
f0();
```

Si la valeur n'est pas une promesse, elle est convertie en une promesse résolue :

```js
async function f2() {
  var y = await 20;
  console.log(y); // 20
}
f2();
```

Si la promesse est rejetée, la raison est fournie avec l'exception.

```js
async function f3() {
  try {
    var z = await Promise.reject(30);
  } catch (e) {
    console.log(e); // 30
  }
}
f3();
```

On peut également gérer le cas où la promesse est rejetée grâce à {{jsxref("Promise.prototype.catch()")}} :

```js
var response = await maFonctionPromesse().catch((err) => {
  console.log(err);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'instruction {{jsxref("Instructions/async_function", "async function")}}
- L'expression {{jsxref("Opérateurs/async_function", "async function")}}
- L'objet {{jsxref("AsyncFunction")}}
