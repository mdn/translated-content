---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
---

{{jsSidebar("Statements")}}

Une fonction asynchrone est une fonction précédée par le mot-clé `async`, et qui peut contenir le mot-clé `await`. `async` et `await` permettent un comportement asynchrone, basé sur une promesse ([`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)), écrite de façon simple, et évitant de configurer explicitement les chaînes de promesse.

Les fonctions asynchrones peuvent également être définies comme des [expressions](/fr/docs/Web/JavaScript/Reference/Operators/async_function).

{{EmbedInteractiveExample("pages/js/statement-async.html", "taller")}}

## Syntaxe

```js
async function name([param[, param[, …param]]]) {
  instructions
}
```

### Paramètres

- `name`
  - : Le nom de la fonction.
- `param`
  - : Le nom d'un argument à passer à la fonction.
- `instructions`
  - : Les instructions qui composent le corps de la fonction.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) qui sera résolue avec la valeur renvoyée par la fonction asynchrone ou qui sera rompue s'il y a une exception non interceptée émise depuis la fonction asynchrone.

## Description

Une fonction `async` peut contenir une expression {{jsxref("Opérateurs/await", "await")}} qui interrompt l'exécution de la fonction asynchrone et attend la résolution de la promesse passée `Promise`. La fonction asynchrone reprend ensuite puis renvoie la valeur de résolution.

Le mot-clé `await` est uniquement valide au sein des fonctions asynchrones. Si ce mot-clé est utilisé en dehors du corps d'une fonction asynchrone, cela provoquera une exception {{jsxref("SyntaxError")}}.

> **Note :** Lorsqu'une fonction asynchrone est mise en pause, la fonction appelante continue son exécution (car elle a reçu la promesse implicite renvoyée par la fonction `async`).

> **Note :** Le but des fonctions `async`/`await` est de simplifier l'utilisation synchrone des promesses et d'opérer sur des groupes de promesses. De la même façon que les promesses sont semblables à des _callbacks_ structurés, `async`/`await` est semblable à la combinaison des générateurs et des promesses.

## Exemples

### Exemple simple

```js
var resolveAfter2Seconds = function () {
  console.log("Initialisation de la promesse lente");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("lente");
      console.log("La promesse lente est terminée");
    }, 2000);
  });
};

var resolveAfter1Second = function () {
  console.log("Initialisation de la promesse rapide");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("rapide");
      console.log("La promesse rapide est terminée");
    }, 1000);
  });
};

var sequentialStart = async function () {
  console.log("==Début séquentiel==");

  // 1. L'exécution atteint ce point quasi-instantanément
  const lente = await resolveAfter2Seconds();
  console.log(lente); // 2. cela s'exécute 2s après 1.

  const rapide = await resolveAfter1Second();
  console.log(rapide); // 3. cela s'exécute 3s après 1.
};

var concurrentStart = async function () {
  console.log("==Début concurrentiel avec await==");
  const lente = resolveAfter2Seconds(); // le minuteur démarre immédiatement
  const rapide = resolveAfter1Second(); // le minuteur démarre immédiatement

  // 1. L'exécution atteint ce point quasi-instantanément
  console.log(await lente); // 2. s'exécute 2s après 1.
  console.log(await rapide); // 3. s'exécute 2s après 1., immédiatement après 2.,
  // car "rapide" est déjà résolue
};

var concurrentPromise = function () {
  console.log("==Début concurrentiel avec Promise.all==");
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
    (messages) => {
      console.log(messages[0]); // lente
      console.log(messages[1]); // rapide
    },
  );
};

var parallel = async function () {
  console.log("==Exécution parallèle avec await Promise.all==");

  // Démarre 2 tâches en parallèle et on attend que les deux soient finies
  await Promise.all([
    (async () => console.log(await resolveAfter2Seconds()))(),
    (async () => console.log(await resolveAfter1Second()))(),
  ]);
};

// Cette fonction ne gère pas les erreurs
// voir les avertissement ci-après !
var parallelPromise = function () {
  console.log("==Exécution parallèle avec Promise.then==");
  resolveAfter2Seconds().then((message) => console.log(message));
  resolveAfter1Second().then((message) => console.log(message));
};

sequentialStart(); // après 2 secondes, "lente" est affichée, après une
// autre seconde, c'est "rapide" qui est affichée

// on attend que l'étape précédente soit terminée
setTimeout(concurrentStart, 4000); // 2s avant d'afficher "lente" puis "rapide"

// on attend à nouveau
setTimeout(concurrentPromise, 7000); // identique à concurrentStart

// on attend à nouveau
setTimeout(parallel, 10000); // réellement parallele : après 1 seconde,
// affiche "rapide" et après une autre seconde
// affiche "lente"

// on attend à nouveau
setTimeout(parallelPromise, 13000); // identique à parallel
```

#### `await` et l'exécution parallèle

Dans `sequentialStart`, l'exécution est arrêtée pendant deux secondes avant le premier `await` puis encore une autre seconde avant le deuxième `await`. Le deuxième minuteur n'est pas créé tant que le premier n'est pas écoulé. Le code s'exécute donc au moins en 3 secondes.

Avec `concurrentStart`, les deux minuteurs sont créés puis attendus derrière un `await` Les minuteurs sont exécutés de façon concurrente. L'ensemble du code se termine donc en au moins 2 secondes plutôt qu'en 3 secondes.
Toutefois, les appels utilisant `await` sont exécutés séquentiellement et la deuxième instruction avec `await` attendra que la première ait été traitée. Le minuteur le plus rapide est donc créé juste après le premier.

Si on souhaite avoir deux tâches qui s'exécutent réellement en parallèle, on pourra utiliser `await Promise.all([job1(), job2()])` comme illustré ci-avant avec `parallel`.

#### `async`/`await`, `Promise.prototype.then()` et la gestion des erreurs

La plupart des fonctions asynchrones peuvent être écrites avec des promesses. Toutefois, les fonctions asynchrones qui utilisent `async` se prêtent mieux à la gestion des erreurs.

`concurrentStart` et `concurrentPromise` sont fonctionnellement équivalentes.
Avec `concurrentStart`, si l'un des deux appels échoue, l'exception sera immédiatement interceptée et l'exécution de la fonction asynchrone sera interrompue. L'erreur sera propagée à la fonction appelante via la valeur de retour qui est une promesse implicite.
Pour obtenir les mêmes sécurités avec les promesses, il faut s'assurer que la fonction renvoie une promesse qui gère ce cas d'échec. Pour `concurrentPromise` cela signifie qu'il faut renvoyer la promesse de `Promise.all([]).then()`.

Bien entendu, il est toutefois possible d'avoir des fonctions asynchrones (avec `async`) qui gobent des erreurs involontairement. Si on considère la fonction `parallel` ci-avant, s'il n'y avait eu aucun `await` ou `return` pour le résultat de `Promise.all([])`, aucune erreur n'aurait été propagée.
Bien que l'exemple `parallelPromise` paraisse simple, il ne gère aucune erreur du tout. Il aurait fallu utiliser un `return Promise.all([])` analogue.

### Réécrire une chaîne de promesses avec une fonction asynchrone

Lorsqu'on utilise une API qui renvoie des promesses ({{jsxref("Promise")}}), on construit une chaîne de promesses et on divise la fonction en de nombreuses branches :

```js
function getProcessedData(url) {
  return downloadData(url) // renvoie une promesse
    .catch((e) => {
      return downloadFallbackData(url); // renvoie une promesse
    })
    .then((v) => {
      return processDataInWorker(v); // renvoie une promesse
    });
}
```

Cela peut être réécrit avec une seule fonction asynchrone, de la façon suivante :

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
```

On voit dans l'exemple précédent qu'il n'y a pas de `await` pour l'instruction `return` car la valeur de retour d'une fonction asynchrone est implicitement enveloppée dans un appel à {{jsxref("Promise.resolve")}}.

### Différences entre `return` et `return await`

La conversion automatique des valeurs en promesses avec {{jsxref("Promise.resolve")}} ne signifie pas que `return await valeurPromesse` sera équivalent à `return valeurPromesse`.

Si on reprend l'exemple précédent et qu'on le réécrit avec `return await` et qu'on intercepte une éventuelle erreur de la promesse :

```js
async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch (e) {
    v = await downloadFallbackData(url);
  }
  try {
    return await processDataInWorker(v); // et non plus simplement return
  } catch (e) {
    return null;
  }
}
```

Si on avait simplement écrit `return processDataInWorker(v);`, la promesse renvoyée par la fonction aurait déclenché une exception plutôt que d'être résolue avec la valeur `null`.

Lorsqu'on utilise `return toto;`, la valeur `toto` sera immédiatement renvoyée (sans lever d'exception, quel que soit le cas), tandis que `return await toto;` attendra la résolution de `toto` ou son échec et lèvera une exception si besoin **avant de parvenir à renvoyer une valeur**.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("AsyncFunction")}} object
- {{jsxref("Operators/await", "await")}}
- [Créer des décorateurs asynchrones en JavaScript (billet en anglais sur innolitics.com)](http://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/)
