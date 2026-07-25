---
title: "Promise : méthode then()"
short-title: then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
l10n:
  sourceCommit: 337d60017f421e14f17bf8e9051d302b0fdb9b9b
---

La méthode **`then()`** des instances {{JSxRef("Promise")}} prend jusqu'à deux arguments&nbsp;: des fonctions de rappel pour les cas de réussite et d'échec de la `Promise`. Elle stocke les fonctions de rappel dans la promesse sur laquelle elle est appelée et retourne immédiatement un autre objet {{JSxRef("Promise")}}, ce qui permet de [chaîner](/fr/docs/Web/JavaScript/Guide/Using_promises#chaînage_des_promesses) les appels à d'autres méthodes de promesse.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Promise.then()")}}

```js interactive-example
const promise1 = new Promise((resolve, reject) => {
  resolve("Succès !");
});

promise1.then((value) => {
  console.log(value);
  // Sortie attendue : "Succès !"
});
```

## Syntaxe

```js-nolint
then(onFulfilled)
then(onFulfilled, onRejected)
```

### Paramètres

- `onFulfilled`
  - : Une fonction à exécuter de façon asynchrone lorsque cette promesse est tenue. Sa valeur de retour devient la valeur de réussite de la promesse retournée par `then()`. La fonction est appelée avec les arguments suivants&nbsp;:
    - `value`
      - : La valeur avec laquelle la promesse a été tenue.

    Si ce n'est pas une fonction, elle est remplacée en interne par une fonction _identité_ (`(x) => x`) qui transmet simplement la valeur de réussite.

- `onRejected` {{Optional_Inline}}
  - : Une fonction à exécuter de façon asynchrone lorsque cette promesse est rejetée. Sa valeur de retour devient la valeur de réussite de la promesse retournée par `then()`. La fonction est appelée avec les arguments suivants&nbsp;:
    - `reason`
      - : La valeur avec laquelle la promesse a été rejetée.

    Si ce n'est pas une fonction, elle est remplacée en interne par une fonction _lanceuse_ (`(x) => { throw x; }`) qui lance la raison du rejet qu'elle a reçue.

### Valeur de retour

Retourne une nouvelle promesse ({{JSxRef("Promise")}}) immédiatement. Cette promesse retournée est toujours en attente lorsqu'elle est retournée, quel que soit l'état de la promesse actuelle.

L'un des gestionnaires `onFulfilled` ou `onRejected` est exécuté pour gérer la réussite ou le rejet de la promesse actuelle. L'appel se produit toujours de manière asynchrone, même lorsque la promesse actuelle est déjà réglée. Le comportement de la promesse retournée par `then()` (appelée `p` dans la liste suivante) dépend du résultat de l'exécution du gestionnaire, selon un ensemble spécifique de règles. Si la fonction gestionnaire&nbsp;:

- retourne une valeur&nbsp;: `p` est tenue avec la valeur retournée comme sa valeur.
- ne retourne rien&nbsp;: `p` est tenue avec `undefined` comme sa valeur.
- lance une erreur&nbsp;: `p` est rejetée avec l'erreur lancée comme sa valeur.
- retourne une promesse déjà tenue&nbsp;: `p` est tenue avec la valeur de cette promesse comme sa valeur.
- retourne une promesse déjà rejetée&nbsp;: `p` est rejetée avec la valeur de cette promesse comme sa valeur.
- retourne une autre promesse en attente&nbsp;: `p` est en attente et est tenue/rejetée avec la valeur de cette promesse immédiatement après que cette promesse est tenue/rejetée.

## Description

La méthode `then()` permet de planifier l'exécution des fonctions de rappel pour gérer la résolution d'une promesse (que ce soit une réussite ou un échec). Il s'agit d'une méthode primitive pour les promesses&nbsp;: le protocole [<i lang="en">thenable</i>](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) attend de tous les objets semblables à une promesse qu'ils exposent une méthode `then()`, et les méthodes {{JSxRef("Promise/catch", "catch()")}} et {{JSxRef("Promise/finally", "finally()")}} fonctionnent toutes les deux en appelant la méthode `then()`.

Pour plus d'informations à propos du gestionnaire d'échec `siRejetée()`, voir la référence pour la méthode {{JSxRef("Promise/catch", "catch()")}}.

`then()` retourne un nouvel objet `Promise` mais modifie l'objet `Promise` sur lequel il est appelé, en ajoutant les gestionnaires à une liste interne. Par conséquent, le gestionnaire est conservé par la promesse originale et sa durée de vie est au moins aussi longue que celle de la promesse originale. Par exemple, l'exemple suivant finit par épuiser la mémoire même si la promesse retournée n'est pas conservée&nbsp;:

```js
const promesseAttendue = new Promise(() => {});
while (true) {
  promesseAttendue.then(faitQuelqueChose);
}
```

Les objets [thenable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) qui apparaissent le long de la chaîne `then()` sont toujours [résolus](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#the_resolve_function) — le gestionnaire `onFulfilled` ne reçoit jamais un objet thenable, et tout thenable retourné par l'un ou l'autre des gestionnaires est toujours résolu avant d'être passé au gestionnaire suivant. Cela s'explique par le fait que lors de la construction de la nouvelle promesse, les fonctions `resolve` et `reject` passées par un `executor` sont sauvegardées, et lorsque la promesse actuelle est réglée, la fonction respective est appelée avec la valeur de réussite ou la raison du rejet. La logique de résolution provient de la fonction `resolve` passée par le constructeur {{JSxRef("Promise/Promise", "Promise()")}}.

`then()` prend en charge la sous-classification, ce qui signifie qu'il peut être appelé sur des instances de sous-classes de `Promise`, et le résultat est une promesse du type de la sous-classe. Vous pouvez personnaliser le type de la valeur de retour grâce à la propriété [`[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species).

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

La méthode `then()` retourne un nouvel objet `Promise`, ce qui permet d'enchaîner les appels aux méthodes des promesses.

Si la fonction passée à `then()` comme gestionnaire retourne un objet `Promise`, une promesse équivalente est exposée à l'appel à `then()` qui suit. Le fragment de code qui suit simule du code asynchrone à l'aide de la fonction `setTimeout()`.

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
  // mais on retourne avant la chaîne non modifiée au prochain then
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
      "Dernier then(). Oups, on n'a pas pris la peine d'instancier et de renvoyer une promesse dans l'appel then() précédent. L'ordre de la séquence peut être surprenant.",
    );

    // Notez qu'ici `chaine` n'a pas le suffixe 'machin'. En effet, nous
    // avons simulé l'attente asynchrone avec une fonction setTimeout()
    console.log(chaine); // tototruc
  });

// Affiche ceci dans la console, dans cet ordre :
// Dernier then(). Oups, on n'a pas pris la peine d'instancier et de renvoyer une promesse dans l'appel then() précédent. L'ordre de la séquence peut être surprenant.
// tototruc
// tototrucmachin
```

La valeur retournée par `then()` est résolue de la même façon qu'avec {{JSxRef("Promise.resolve()")}}. Cela signifie que [les objets avec une méthode `then()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#thenables) sont pris en charge et que si la valeur de retour n'est pas une promesse, elle est implicitement convertie en un objet `Promise` puis résolue.

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

Un appel à `then()` retourne une promesse qui peut échouer si la fonction déclenche une erreur ou retourne une promesse rompue.

```js
Promise.resolve()
  .then(() => {
    // On lève une exception pour que .then()
    // retourne une promesse rompue
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
    // retourne une promesse rompue
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

Dans tous les autres cas, la promesse retournée finit par être tenue. Dans l'exemple qui suit, le premier appel à `then()` retourne la valeur `42`, enveloppée dans une promesse tenue, même si la promesse précédente dans la chaîne avait été rejetée.

```js
Promise.reject()
  .then(
    () => 99,
    () => 42,
  ) // siRejetée retourne 42 qui est empaqueté dans une promesse tenue
  .then((solution) => console.log(`Résolue avec ${solution}`)); // Résolue avec 42
```

Si `onFulfilled` retourne une promesse, la valeur de retour de `then()` est tenue/rompue selon l'état de cette promesse.

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
  // On retourne une promesse qui est résolue avec la valeur 10 après 1 seconde
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
  // On retourne une promesse qui est rejetée avec 'Erreur' après 1 seconde
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

On peut enchaîner les appels des fonctions qui retournent des promesses.

```js
function obtenirDonnees() {
  // L'API fetch() retourne une promesse. Cette fonction
  // retourne également une promesse sauf qu'on effectue
  // un traitement plus avancé sur la valeur de résolution
  // de la promesse retournée.
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
// 'promResolue.then(…)' retourne immédiatement une nouvelle promesse,
// mais la fonction de rappel '(value) => {…}' est appelée de
// façon asynchrone, comme on peut le voir dans la console.
// La nouvelle promesse est affectée à 'promSuivante', cette
// dernière est résolue avec la valeur retournée par le gestionnaire.
const promResolue = Promise.resolve(33);
console.log(promResolue);

const promSuivante = promResolue.then((valeur) => {
  console.log(
    `Ceci est appelé après la fin de la pile principale. ` +
      `La valeur reçue est : ${valeur}, la valeur retournée est : ${valeur + 1}`,
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
// "Ceci est appelé après la fin de la pile principale. La valeur reçue est : 33, la valeur retournée est : 34"
// Promise {[[PromiseStatus]]: "resolved", [[PromiseResult]]: 34}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Promise")}}
- La méthode {{JSxRef("Promise.prototype.catch()")}}
