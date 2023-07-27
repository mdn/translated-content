---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{JSRef}}

La méthode **`then()`**, disponible sur les instances [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise), prend jusqu'à deux arguments qui sont les fonctions de rappel respectivement utilisées pour la réussite ou l'échec de la promesse. Cette méthode renvoie immédiatement un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) équivalent, ce qui permet [d'enchaîner](/fr/docs/Web/JavaScript/Guide/Using_promises#chaînage_des_promesses) les appels aux autres méthodes des promesses.

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

## Syntaxe

```js-nolint
then(siTenue)
then(siTenue, siRejetée)
```

### Paramètres

- `siTenue` {{optional_inline}}
  - : Une fonction à exécuter de façon asynchrone quand la promesse est tenue. La valeur de retour de cette fonction devient la valeur de réussite de la promesse renvoyée par `then()`. Cette fonction de rappel est appelée avec les arguments suivants&nbsp;:
    - `valeur`
      - : La valeur avec laquelle la promesse a été tenue.
        Si cet argument n'est pas une fonction, il est remplacé en interne par la fonction _identité_ (`(x) => x`) qui passe la valeur de réussite.
- `siRejetée` {{optional_inline}}
  - : Une fonction à exécuter de façon asynchrone quand la promesse est rompue. Sa valeur de retour devient la valeur de réussite de la promesse renvoyée par `catch()`. Cette fonction de rappel est appelée avec les arguments suivants&nbsp;:
    - `raison`
      - : La valeur avec laquelle la promesse a été rompue.
        Si cet argument n'est pas une fonction, il est remplacé en interne par une fonction de _rejet_ (`(x) => { throw x; }`) qui renvoie la raison d'échec qui a été reçue en amont.

### Valeur de retour

Cette méthode renvoie immédiatement un nouvel objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise). Cette nouvelle promesse est toujours en attente de résolution lorsqu'elle est renvoyée, quel que soit le statut de la promesse courante.

Une des deux fonctions de rappel entre `siTenue()` et `siRejetée()` sera exécutée selon la réussite ou l'échec de la promesse. L'appel est toujours exécuté de façon asynchrone, même si la promesse courante est déjà résolue. Le comportement de la promesse renvoyée (désignée ici avec `p`) dépend du résultat de l'exécution de la fonction de rappel, selon les règles suivantes. Si la fonction de rappel&nbsp;:

- Renvoie une valeur&nbsp;: `p` est réussie avec la valeur de retour.
- Ne renvoie rien&nbsp;: `p` est réussie avec `undefined` comme valeur.
- Lève une erreur&nbsp;: `p` échoue avec l'erreur levée comme valeur.
- Renvoie une promesse déjà réussie&nbsp;: `p` est réussie avec la valeur de réussite de la promesse courante.
- Renvoie une promesse déjà échouée&nbsp;: `p` échoue avec la valeur d'échec de la promesse courante.
- Renvoie une autre promesse en attente&nbsp;: `p` est en attente et réussit/échoue avec la valeur de la promesse courante immédiatement après que celle-ci ait réussi/échoué.

## Description

La méthode `then()` permet de planifier l'exécution des fonctions de rappel pour gérer la résolution d'une promesse (que ce soit une réussite ou un échec). Il s'agit d'une méthode primitive pour les promesses&nbsp;: le protocole [<i lang="en">thenable</i>](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) attend de tous les objets semblables à une promesse qu'ils exposent une méthode `then()`, et les méthodes [`catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) et [`finally()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally) fonctionnent toutes les deux en appelant la méthode `then()`.

Pour plus d'informations à propos du gestionnaire d'échec `siRejetée()`, voir la référence pour la méthode [`catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch).

`then()` renvoie un nouvel objet `Promise`. Si vous appelez la méthode `then()` par deux fois, sur le même objet `Promise` (plutôt que de les enchaîner), vous obtiendrez alors une promesse dotée de deux paires de gestionnaires de réussite/échec. Tous les gestionnaires attachés à une même promesse sont appelés dans l'ordre selon lequel ils ont été ajoutés. Toutefois, les deux promesses renvoyées par chaque appel `then()` engendre deux chaînes séparées qui n'attendent pas la résolution de l'autre.

Les objets [dotés d'une méthode `then()` (<i lang="en">thenable</i>)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) créés le long d'une chaîne d'appels à `then()` sont toujours [résolus](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#fonction_de_résolution). Le gestionnaire `siTenue()` ne reçoit jamais d'objet doté d'une méthode `then()` et toute valeur avec une méthode `then()` renvoyée par l'un des gestionnaires est résolue avant d'être passée au gestionnaire suivant. En effet, lors de la construction d'une promesse, les fonctions de résolution et de rejet passées sont enregistrées et lorsque la promesse courante est terminée, la fonction correspondante est appelée avec la valeur de réussite ou la raison de l'échec. La logique de résolution est déterminée par la fonction passée au constructeur [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise).

`then()` prend en charge les sous-classes, ce qui signifie qu'elle peut être appelée depuis les instances des sous-classes de `Promise`, le résultat sera alors une promesse du type de la sous-classe. Vous pouvez personnaliser le type de la valeur de retour grâce à la propriété [`@@species`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/@@species).

## Exemples

### Utiliser la méthode `then()`

```js
const p1 = new Promise((resoudre, rejeter) => {
  resoudre("Réussite !");
  // ou
  // rejeter(new Error("Erreur !"));
});

p1.then(
  (value) => {
    console.log(value); // Réussite !
  },
  (reason) => {
    console.error(reason); // Erreur !
  },
);
```

### Avoir l'un des paramètres qui n'est pas une fonction

```js
Promise.resolve(1).then(2).then(console.log); // 1
Promise.reject(1).then(2, 2).then(console.log, console.log); // 1
```

### Enchaînement

La méthode `then()` renvoie un nouvel objet `Promise`, ce qui permet d'enchaîner les appels aux méthodes des promesses.

Si la fonction passée à `then()` comme gestionnaire renvoie un objet `Promise`, une promesse équivalente sera exposée à l'appel à `then()` qui suit. Le fragment de code qui suit simule du code asynchrone à l'aide de la fonction `setTimeout()`.

```js
Promise.resolve("toto")
  // 1. On reçoit "toto", on y concatène "truc" et on résout
  // avec la valeur obtenue pour le prochain then
  .then(
    (chaine) =>
      new Promise((resoudre, rejeter) => {
        setTimeout(() => {
          chaine += "truc";
          resoudre(chaine);
        }, 1);
      }),
  )
  // 2. On reçoit "tototruc", on enregistre une fonction de rappel
  // pour manipuler cette chaîne et l'afficher dans la console
  // mais on renverra avant la chaîne non modifiée au prochain then
  .then((chaine) => {
    setTimeout(() => {
      chaine += "machin";
      console.log(chaine); // tototrucmachin
    }, 1);
    return chaine;
  })
  // 3. On affiche des messages sur l'exécution du code dans cette section
  // avant le traitement de la chaîne dans le bloc then() précédent.
  .then((chaine) => {
    console.log(
      "Dernier then(). Oups, on n'a pas pris la peine d'instancier et de renvoyer une promesse dans l'appel then() précédent. L'ordre de la séquence pourrait être surprenant.",
    );

    // On notera qu'ici `chaine` n'a pas le suffixe 'machin'. En effet, nous avons
    // simuler l'attente asynchrone avec une fonction setTimeout()
    console.log(chaine); // tototruc
  });

// Affichera ceci dans la console, dans cet ordre :
// Dernier then(). Oups, on n'a pas pris la peine d'instancier et de renvoyer une promesse dans l'appel then() précédent. L'ordre de la séquence pourrait être surprenant.
// tototruc
// tototrucmachin
```

La valeur renvoyée par `then()` est résolue de la même façon qu'avec [`Promise.resolve()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve). Cela signifie que [les objets avec une méthode `then()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) sont pris en charge et que si la valeur de retour n'est pas une promesse, elle est implicitement convertie en un objet `Promise` puis résolue.

```js
const p2 = new Promise((resoudre, rejeter) => {
  resoudre(1);
});

p2.then((valeur) => {
  console.log(valeur); // 1
  return valeur + 1;
}).then((valeur) => {
  console.log(valeur, "- une valeur synchrone fonctionne"); // 2 - une valeur synchrone fonctionne
});

p2.then((valeur) => {
  console.log(valeur); // 1
});
```

Un appel à `then()` renvoie une promesse qui pourra échouer si la fonction déclenche une erreur ou renvoie une promesse rompue.

```js
Promise.resolve()
  .then(() => {
    // On lève une exception pour que .then()
    // renvoie une promesse rompue
    throw new Error("Oh non !");
  })
  .then(
    () => {
      console.log("Pas appelée.");
    },
    (erreur) => {
      console.error(`Fonction siRejetée() appelée : ${erreur.message}`);
    },
  );
```

En pratique, il est plutôt souhaitable d'intercepter les promesses rompues avec [`catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) plutôt que d'utiliser la syntaxe de `then()` avec les deux cas (réussite/échec). Voici un exemple.

```js
Promise.resolve()
  .then(() => {
    // On lève une exception pour que .then()
    // renvoie une promesse rompue
    throw new Error("Oh non !");
  })
  .catch((erreur) => {
    console.error(`Fonction siRejetée() appelée : ${erreur.message}`);
  })
  .then(() => {
    console.log(
      "Je suis toujours appelée, même si la promesse du then() précédent échoue.",
    );
  });
```

Dans tous les autres cas, la promesse renvoyée finit par être tenue. Dans l'exemple qui suit, le premier appel à `then()` renvoie la valeur `42`, enveloppée dans une promesse tenue, même si la promesse précédente dans la chaîne avait été rejetée.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // siRejetée renvoie 42 qui est empaqueté dans une promesse tenue
  .then((solution) => console.log(`Résolue avec ${solution}`)); // Résolue avec 42
```

Si `siTenue()` renvoie une promesse, la valeur de retour de `then()` sera tenue/rompue selon l'état de cette promesse.

```js
function resoudrePlusTard(resoudre, rejeter) {
  setTimeout(() => {
    resoudre(10);
  }, 1000);
}
function rejeterPlusTard(resoudre, rejeter) {
  setTimeout(() => {
    rejeter(new Error("Erreur"));
  }, 1000);
}

const p1 = Promise.resolve("toto");
const p2 = p1.then(() => {
  // On renvoie une promesse qui sera résolue avec la valeur 10 après 1 seconde
  return new Promise(resoudrePlusTard);
});
p2.then(
  (v) => {
    console.log("résolue", v); // "résolue", 10
  },
  (e) => {
    // N'est pas appelée
    console.error("rejetée", e);
  },
);

const p3 = p1.then(() => {
  // On renvoie une promesse qui sera rejetée avec 'Erreur' après 1 seconde
  return new Promise(rejeterPlusTard);
});
p3.then(
  (v) => {
    // N'est pas appelée
    console.log("résolue", v);
  },
  (e) => {
    console.error("rejetée", e); // "rejetée", 'Erreur'
  },
);
```

On peut enchaîner les appels des fonctions qui renvoient des promesses.

```js
function obtenirDonnees() {
  // L'API fetch() renvoie une promesse. Cette fonction
  // renvoie également une promesse sauf qu'on effectue
  // un traitement plus avancé sur la valeur de résolution
  // de la promesse renvoyée.
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") !== "application/json") {
      throw new TypeError();
    }
    const j = response.json();
    // faire quelque chose avec j

    // La valeur de réussite fournie lorsqu'on
    // appelle obtenirDonnees().then()
    return j;
  });
}
```

### Caractère asynchrone de `then()`

Dans l'exemple qui suit, on illustre le caractère asynchrone de la méthode `then()`.

```js
// Prenons une promesse résolue comme 'promResolue', l'appel à
// 'promResolue.then(…)' renvoie immédiatement une nouvelle promesse,
// mais la fonction de rappel '(value) => {…}' sera appelée de
// façon asynchrone, comme on peut le voir dans la console.
// La nouvelle promesse est affectée à 'promSuivante', cette
// dernière est résolue avec la valeur renvoyée par le gestionnaire.
const promResolue = Promise.resolve(33);
console.log(promResolue);

const promSuivante = promResolue.then((valeur) => {
  console.log(
    `Ceci est appelé après la fin de la pile principale. ` +
      `La valeur reçue est : ${valeur}, la valeur renvoyée est : ${valeur + 1}`,
  );
  return valeur + 1;
});
console.log(promSuivante);

// En utilisant setTimeout(), on peut retarder l'exécution d'une fonction
// jusqu'au moment où la pile des appels est vide
setTimeout(() => {
  console.log(promSuivante);
});

// Le code qui précède, affichera ce qui suit dans cet ordre :
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 33}
// Promise {[[PromiseStatus]]: "pending", [[PromiseResult]]: undefined}
// "Ceci est appelé après la fin de la pile principale. La valeur reçue est : 33, la valeur renvoyée est : 34"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 34}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`Promise.prototype.catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
