---
title: await
slug: Web/JavaScript/Reference/Operators/await
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

L'opérateur **`await`** est utilisé pour attendre une promesse ({{JSxRef("Promise")}}) et obtenir sa valeur de complétion (<i lang="en">fulfill</i> en anglais). Il ne peut être utilisé qu'à l'intérieur d'une [fonction asynchrone](/fr/docs/Web/JavaScript/Reference/Statements/async_function) ou au niveau supérieur d'un [module](/fr/docs/Web/JavaScript/Guide/Modules).

## Syntaxe

```js-nolint
await expression
```

### Paramètres

- `expression`
  - : Une promesse ({{JSxRef("Promise")}}), un [objet de semi-promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse), ou toute autre valeur dont on souhaite attendre.

### Valeur de retour

La valeur de complétion de la promesse ou de l'objet semi-promesse, ou, si l'expression n'est pas semi-promesse, la valeur propre de l'expression.

### Exceptions

Lève la raison du rejet si la promesse ou l'objet semi-promesse est rompue (<i lang="en">reject</i> en anglais).

## Description

`await` est généralement utilisé pour déballer les promesses en passant une promesse ({{JSxRef("Promise")}}) comme `expression`. L'utilisation de `await` suspend l'exécution de la fonction `async` englobante jusqu'à ce que la promesse soit acquittée (<i lang="en">settle</i> en anglais) (c'est-à-dire complétée ou rompue). Lorsque l'exécution reprend, la valeur de l'expression `await` devient celle de la promesse complétée.

Si la promesse est rompue, l'expression `await` lève la valeur de rejet. La fonction contenant l'expression `await` apparaît [dans la trace de la pile](#améliorer_la_trace_de_la_pile) de l'erreur. Sinon, si la promesse rompue n'est pas attendue ou est immédiatement retournée, la fonction appelante n'apparaît pas dans la trace de la pile.

Une `expression` est résolue de la même manière que {{JSxRef("Promise.resolve()")}}&nbsp;: elle est toujours convertie en une `Promise` native, puis attendue. Si une `expression` est&nbsp;:

- Une `Promise` native (ce qui signifie que `expression` appartient à `Promise` ou à une sous-classe, et que `expression.constructor === Promise`)&nbsp;: la promesse est directement utilisée et attendue nativement, sans appeler `then()`.
- [Objet semi-promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) (y compris les promesses qui ne sont pas natives, des prothèses d'émulation, des mandataires, sous-classes, etc.)&nbsp;: une nouvelle promesse est construite avec le constructeur natif [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) en appelant la méthode `then()` de l'objet et en passant un gestionnaire qui appelle la fonction de rappel `resolve`.
- Valeur qui n'est pas semi-promesse&nbsp;: une `Promise` déjà acquittée est construite et utilisée.

Même lorsque la promesse utilisée est déjà acquittée, l'exécution de la fonction asynchrone est toujours suspendue jusqu'au battement d'horloge suivant. Pendant ce temps, l'appelant de la fonction asynchrone reprend l'exécution. [Voir l'exemple ci-dessous.](#observer_les_effets_de_await_sur_le_flux)

Comme `await` n'est valide qu'à l'intérieur des fonctions asynchrones et des modules, qui sont eux-mêmes asynchrones et retournent des promesses, l'expression `await` ne bloque jamais le thread principal et ne fait que différer l'exécution du code qui dépend réellement du résultat, c'est-à-dire de tout ce qui se trouve après l'expression `await`.

## Exemples

### Attendre la complétion d'une promesse

Si une promesse (`Promise`) est passée à une expression `await`, celle-ci attend que la promesse (`Promise`) soit complétée et retourne la valeur complétée.

```js
function resoudreApres2Secondes(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  const x = await resoudreApres2Secondes(10);
  console.log(x); // 10
}

f1();
```

### Objets semi-promesses

[Les objets semi-promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) sont résolus exactement de la même manière que les véritables objets `Promise`.

```js
async function f2() {
  const objetSemiPromesse = {
    then(resoudre) {
      resoudre("résolue !");
    },
  };
  console.log(await objetSemiPromesse); // "résolue !"
}

f2();
```

Ils peuvent également être rompus&nbsp;:

```js
async function f2() {
  const objetSemiPromesse = {
    then(_, rejeter) {
      rejeter(new Error("rejetée !"));
    },
  };
  await objetSemiPromesse; // Lève l'erreur Error : rejetée !
}

f2();
```

### Conversion en promesse

Si la valeur n'est pas une `Promise`, `await` la convertit en une `Promise` complétée et l'attend. L'identité de la valeur attendue ne change pas tant qu'elle ne possède pas de propriété `then` appelable.

```js
async function f3() {
  const y = await 20;
  console.log(y); // 20

  const obj = {};
  console.log((await obj) === obj); // true
}

f3();
```

### Gérer les promesses rompues

Si la promesse (`Promise`) est rompue, la valeur rompue est levée.

```js
async function f4() {
  try {
    const z = await Promise.reject(new Error("rejetée !"));
  } catch (e) {
    console.error(e); // Erreur : rejetée !
  }
}

f4();
```

Vous pouvez gérer les promesses rompues sans bloc `try` en chaînant un gestionnaire [`catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) avant d'attendre la promesse.

```js
const reponse = await fonctionPromesse().catch((erreur) => {
  console.error(erreur);
  return "réponse par défaut";
});
// reponse vaut « réponse par défaut » si la promesse est rompue
```

Cette approche repose sur l'hypothèse que `fonctionPromesse()` ne lève jamais d'erreur de manière synchrone, mais retourne toujours une promesse rompue. C'est le cas de la plupart des fonctions fondées sur les promesses et correctement conçues, qui ressemblent généralement à ceci&nbsp;:

```js
function fonctionPromesse() {
  // Retourne immédiatement une promesse pour réduire le risque de lever une erreur
  return new Promise((resoudre, rejeter) => {
    // Effectuer une opération asynchrone
  });
}
```

Cependant, si `fonctionPromesse()` lève une erreur de manière synchrone, le gestionnaire `catch()` ne l'intercepte pas. Dans ce cas, l'instruction `try...catch` est nécessaire.

### `await` au niveau supérieur

Vous pouvez utiliser le mot-clé `await` seul, en dehors d'une fonction asynchrone, au niveau supérieur d'un [module](/fr/docs/Web/JavaScript/Guide/Modules). Ainsi, les modules qui possèdent des modules enfants utilisant `await` attendent l'exécution de ces modules enfants avant de s'exécuter eux-mêmes, sans bloquer le chargement des autres modules enfants.

Voici un exemple de module qui utilise [l'API Fetch <sup>(angl.)</sup>](/fr/docs/Web/API/Fetch_API) et définit `await` dans l'instruction [`export`](/fr/docs/Web/JavaScript/Reference/Statements/export). Les modules qui incluent ce module attendent la résolution de la requête avant d'exécuter du code.

```js
// Requête Fetch
const couleurs = fetch("../data/colors.json").then((reponse) => reponse.json());

export default await couleurs;
```

### Observer les effets de `await` sur le flux

Lorsqu'un `await` est rencontré dans le code (soit dans une fonction asynchrone, soit dans un module), l'expression attendue est exécutée, tandis que tout le code qui dépend de la valeur de l'expression est mis en pause. Le contrôle quitte la fonction et revient à l'appelant. Lorsque la valeur de l'expression attendue est résolue, une autre [micro-tâche](/fr/docs/Web/JavaScript/Reference/Execution_model) qui continue le code en pause est planifiée. Cela se produit même si la valeur attendue est une promesse déjà résolue ou non&nbsp;: l'exécution ne revient pas à la fonction actuelle tant que toutes les autres micro-tâches déjà planifiées ne sont pas traitées. Par exemple, considérez le code suivant&nbsp;:

```js
async function toto(nom) {
  console.log(nom, "début");
  console.log(nom, "milieu");
  console.log(nom, "fin");
}

toto("Première");
toto("Deuxième");

// Première début
// Première milieu
// Première fin
// Deuxième début
// Deuxième milieu
// Deuxième fin
```

Dans ce cas, la fonction `toto` est synchrone en pratique, car elle ne contient aucune expression `await`. Les trois instructions s'exécutent lors du même cycle. Les deux appels de fonction exécutent donc toutes les instructions dans l'ordre. En termes de promesses, la fonction correspond à ceci&nbsp;:

```js
function toto(nom) {
  return new Promise((resoudre) => {
    console.log(nom, "début");
    console.log(nom, "milieu");
    console.log(nom, "fin");
    resoudre();
  });
}
```

Cependant, dès qu'un `await` apparaît, la fonction devient asynchrone et l'exécution des instructions suivantes est reportée au cycle suivant.

```js
async function toto(nom) {
  console.log(nom, "début");
  await console.log(nom, "milieu");
  console.log(nom, "fin");
}

toto("Première");
toto("Deuxième");

// Première début
// Première milieu
// Deuxième début
// Deuxième milieu
// Première fin
// Deuxième fin
```

Cela correspond à ceci&nbsp;:

```js
function toto(nom) {
  return new Promise((resoudre) => {
    console.log(nom, "début");
    resoudre(console.log(nom, "milieu"));
  }).then(() => {
    console.log(nom, "fin");
  });
}
```

Le gestionnaire `then()` supplémentaire peut être fusionné avec l'exécuteur transmis au constructeur, car il n'attend aucune opération asynchrone. Cependant, sa présence divise le code en une micro-tâche supplémentaire pour chaque appel de `toto`. Ces micro-tâches sont planifiées et exécutées de manière entrelacée, ce qui peut ralentir votre code et introduire des conditions de concurrence inutiles. Utilisez donc `await` uniquement lorsque c'est nécessaire, pour déballer les promesses en leurs valeurs.

Les micro-tâches sont planifiées non seulement lors de la résolution des promesses, mais aussi par d'autres API web, et elles s'exécutent avec la même priorité. Cet exemple utilise {{DOMxRef("Window.queueMicrotask", "queueMicrotask()")}} pour montrer comment la file des micro-tâches est traitée lorsqu'une expression `await` est rencontrée.

```js
let i = 0;

queueMicrotask(function tester() {
  i++;
  console.log("micro-tâche", i);
  if (i < 3) {
    queueMicrotask(tester);
  }
});

(async () => {
  console.log("début de la fonction asynchrone");
  for (let i = 1; i < 3; i++) {
    await null;
    console.log("reprise de la fonction asynchrone", i);
  }
  await null;
  console.log("fin de la fonction asynchrone");
})();

queueMicrotask(() => {
  console.log("queueMicrotask() après l'appel de la fonction asynchrone");
});

console.log("fin de la partie synchrone du script");

// Journalisation :
// début de la fonction asynchrone
// fin de la partie synchrone du script
// opération 1
// reprise de la fonction asynchrone 1
// queueMicrotask() après l'appel de la fonction asynchrone
// opération 2
// reprise de la fonction asynchrone 2
// opération 3
// fin de la fonction asynchrone
```

Dans cet exemple, la fonction `test()` est toujours appelée avant la reprise de la fonction asynchrone. Les micro-tâches qu'elles planifient sont donc toujours exécutées de manière entrelacée. En revanche, comme `await` et `queueMicrotask()` planifient tous deux des micro-tâches, l'ordre d'exécution dépend toujours de l'ordre de planification. C'est pourquoi le message «&nbsp;queueMicrotask() après l'appel de la fonction asynchrone&nbsp;» apparaît après la première reprise de la fonction asynchrone.

### Améliorer la trace de la pile

Parfois, `await` est omis lorsqu'une promesse est directement retournée par une fonction asynchrone.

```js
async function sansAwait() {
  // Certaines actions...

  return /* await */ derniereTacheAsynchrone();
}
```

Cependant, prenons le cas où `derniereTacheAsynchrone` lève une erreur de manière asynchrone.

```js
async function derniereTacheAsynchrone() {
  await null;
  throw new Error("échec");
}

async function sansAwait() {
  return derniereTacheAsynchrone();
}

sansAwait();

// Erreur : échec
//    à derniereTacheAsynchrone
```

Seule `derniereTacheAsynchrone` apparaît dans la trace de la pile, car la promesse est rompue après avoir déjà été retournée par `sansAwait`&nbsp;: d'une certaine manière, la promesse n'est pas liée à `sansAwait`. Pour améliorer la trace de la pile, vous pouvez utiliser `await` pour déballer la promesse afin que l'exception soit levée dans la fonction actuelle. L'exception est alors immédiatement enveloppée dans une nouvelle promesse rompue, mais l'appelant apparaît dans la trace de la pile lors de la création de l'erreur.

```js
async function derniereTacheAsynchrone() {
  await null;
  throw new Error("échec");
}

async function avecAwait() {
  return await derniereTacheAsynchrone();
}

avecAwait();

// Erreur : échec
//    at derniereTacheAsynchrone
//    at async avecAwait
```

Contrairement à une idée répandue, `return await promise` est au moins aussi rapide que `return promise`, grâce à l'optimisation de la résolution des promesses natives par la spécification et les moteurs. Une proposition vise à [rendre `return promise` plus rapide <sup>(angl.)</sup>](https://github.com/tc39/proposal-faster-promise-adoption), et vous pouvez également lire l'article sur [l'optimisation de V8 concernant les fonctions asynchrones <sup>(angl.)</sup>](https://v8.dev/blog/fast-async). Ainsi, sauf pour des raisons stylistiques, `return await` est presque toujours préférable.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'instruction {{JSxRef("Statements/async_function", "async function")}}
- L'expression {{JSxRef("Operators/async_function", "async function")}}
- L'objet natif {{JSxRef("AsyncFunction")}}
- [`await` de niveau supérieur <sup>(angl.)</sup>](https://v8.dev/features/top-level-await) sur v8.dev (2019)
- [Règle typescript-eslint&nbsp;: `return-await` <sup>(angl.)</sup>](https://typescript-eslint.io/rules/return-await/)
