---
title: for await...of
slug: Web/JavaScript/Reference/Statements/for-await...of
tags:
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/for-await...of
original_slug: Web/JavaScript/Reference/Instructions/for-await...of
---
{{jsSidebar("Statements")}}

L'instruction **`for await…of`** permet de créer une boucle qui parcourt les objets itérables asynchrones de la même façon qu'on parcourt les itérables synchrones (tels que les chaînes de caractères ({{jsxref("String")}}), les tableaux {{jsxref("Array")}}, les objets semblables aux tableaux comme {{jsxref("Fonctions/arguments", "arguments")}} ou {{domxref("NodeList")}}), {{jsxref("TypedArray")}}, {{jsxref("Map")}}, {{jsxref("Set")}}. Cette instruction invoque un mécanisme d'itération spécifique et les instructions à exécuter pour chaque propriété de l'objet.

## Syntaxe

```js
for await (const variable of iterable) {
  instruction
}
```

- `variable`
  - : À chaque itération, la valeur d'une propriété différente est affectée à _variable_. Cette variable peut être déclarée avec `const`, `let` ou `var`.
- `iterable`
  - : Un objet pour lequel on parcourt les propriétés itérables.

## Exemples

### Parcourir des itérables asynchrones

```js
var asyncIterable = {
  [Symbol.asyncIterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return Promise.resolve({ value: this.i++, done: false });
        }

        return Promise.resolve({ done: true });
      }
    };
  }
};

(async function() {
   for await (let num of asyncIterable) {
     console.log(num);
  }
})();
// 0
// 1
// 2
```

### Parcourir des générateurs asynchrones

Les générateurs asynchrones implémentent le protocole d'itérateur asynchrone et on peut donc les parcourir avec `for await...of`:

```js
async function* asyncGenerator() {
  var i = 0;
  while (i < 3) {
    yield i++;
  }
}

(async function() {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();
// 0
// 1
// 2
```

Pour prendre un exemple plus concret, on peut parcourir les données fournies par une API avec un générateur asynchrone grâce à `for await... of`. Dans cet exemple, on commence par créer un itérateur asynchrone à partir d'un flux de données puis on utilise cet itérateur et `for await...of` afin de calculer la taille de la réponse fournie par l'API :

```js
async function* streamAsyncIterator(stream) {
  const reader = stream.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}
// On récupère les données d'une URL et
// on calcule la taille de la réponse
// avec un générateur asynchrone
async function getResponseSize(url) {
  const response = await fetch(url);
  // La taille de la réponse, exprimée en octets.
  let responseSize = 0;
  // La boucle for-await-of qui parcourt, de façon asynchrone,
  // chaque portion de la réponse.
  for await (const chunk of streamAsyncIterator(response.body)) {
    responseSize += chunk.length;
  }

  console.log(`Taille de la réponse : ${responseSize} octets`);
  return responseSize;
}
getResponseSize('https://jsonplaceholder.typicode.com/photos');
```

## Spécifications

| Spécification                                                                                                                                                                    | État                         | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------ |
| {{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'ECMAScript Language: The for-in, for-of, and for-await-of Statements')}} | {{Spec2('ESDraft')}} |              |

## Compatibilité des navigateurs

{{Compat("javascript.statements.for_await_of")}}

## Voir aussi

- {{jsxref("Instructions/for...of")}}
