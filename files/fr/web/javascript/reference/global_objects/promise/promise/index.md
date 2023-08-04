---
title: Constructeur Promise()
slug: Web/JavaScript/Reference/Global_Objects/Promise/Promise
---

{{JSRef}}

Le constructeur **`Promise()`** est principalement utilisé afin d'envelopper des fonctions qui ne prennent pas en charge les promesses.

{{EmbedInteractiveExample("pages/js/promise-constructor.html", "taller")}}

## Syntaxe

```js
new Promise(executeur);
```

### Paramètres

- `executeur`

  - : Une [fonction](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function) à exécuter par le constructeur lors de la construction du nouvel objet `Promise`. `executeur` contient du code spécifique qui relie le résultat d'une opération à une promesse. C'est le programme qui doit fournir ce code. Sa signature doit être&nbsp;:

    ```js
    function(fonctionResolution, fonctionRejet){
      // généralement une opération asynchrone
    }
    ```

    `fonctionResolution` et `fonctionRejet` sont également des fonctions, qu'on peut nommer librement. Ces deux fonctions prennent un seul paramètre, qui peut être de n'importe quel type.

    <!-- prettier-ignore -->
    ```js
    fonctionResolution(valeur) // appelée lors de la résolution
    fonctionRejet(raison)      // appelée lors du rejet
    ```

    Le paramètre `valeur` de `fonctionResolution` peut être une autre promesse, auquel cas la promesse est insérée dynamiquement dans [la chaîne de promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#enchaînement_de_promesses).

    Quant à `executeur`, il est important de comprendre&nbsp;:

    - Que la valeur de retour de `executeur` est ignorée.
    - Que si une erreur est déclenchée pendant l'exécution de `executeur`, la promesse est rejetée.

    Ainsi, voici le mécanisme par lequel `executeur` produit un effet&nbsp;:

    - Au moment où le constructeur génère le nouvel objet `Promise`, il génère également une paire de fonctions correspondantes `fonctionResolution` et `fonctionRejet` qui sont «&nbsp;reliées&nbsp;» à l'objet `Promise`.
    - Le code contenu dans `executeur` peut réaliser une opération et refléter le résultat de l'opération (si la valeur n'est pas un autre objet `Promise`) en object) comme étant «&nbsp;résolue&nbsp;» ou «&nbsp;rejetée&nbsp;» en appelant respectivement `fonctionResolution` ou `fonctionRejet`.
    - Autrement dit, le code contenu dans `executeur` communique par l'effet de bord fourni avec `fonctionResolution` ou `fonctionRejet`. De cette façon, la promesse devient «&nbsp;résolue&nbsp;» ou «&nbsp;rejetée&nbsp;».

    Pour résumer, voici les étapes généralement suivies&nbsp;:

    1. L'opération portée par `executeur` est asynchrone et fournit une fonction de rappel (<i lang="en">callback</i>).
    2. La fonction de rappel est définie au sein du code de `executeur`.
    3. La fonction de rappel se termine en invoquant `fonctionResolution`.
    4. L'invocation de `fonctionResolution` se fait avec un paramètre `valeur`.
    5. `valeur` est passée en retour à l'objet `Promise`.
    6. L'objet `Promise` appelle, de façon asynchrone, toute fonction passée via `.then(gestionSucces)`.
    7. La valeur reçue par `.then(gestionSucces)` est passée comme paramètre d'entrée à `gestionSucces` qui est appelée (voir [l'enchaînement des promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#enchaînement_de_promesses)).

### Valeur de retour

Lorsqu'il est appelé avec l'opérateur `new`, le constructeur `Promise()` renvoie un objet `Promise`. Cette promesse sera résolue lorsque l'une des fonctions `fonctionResolution` ou `fonctionRejet` sera appelée. Si on passe une promesse comme argument à `fonctionResolution` ou `fonctionRejet`, on pourra dire que la promesse courante est résolue, mais pas que la chaîne de promesses est terminée.

## Exemples

### Créer une nouvelle promesse

On crée un objet `Promise` en utilisant le constructeur avec l'opérateur `new`. Ce constructeur prend une fonction en argument, et cette fonction prend à son tour deux fonctions en paramètres. La première de ces deux fonctions est appelée lorsque la tâche asynchrone se termine correctement, c'est alors le résultat de l'opération qui est passé comme paramètre. La seconde fonction est appelée lorsque la tâche échoue et c'est alors la raison de l'échec (généralement un objet d'erreur) qui est passée en argument.

```js
const maPremierePromesse = new Promise((resolution, rejet) => {
  // réaliser une opération asynchrone qui appellera :
  //
  //   resolution(uneValeur)    // réussite
  // ou
  //   rejet("raison d'échec")  // échec
});
```

### Renvoyer une promesse depuis une fonction

Pour qu'une fonction ait les fonctionnalités d'une promesse, on lui fera renvoyer une promesse&nbsp;:

```js
function maFonctionAsync(url) {
  return new Promise((resolution, rejet) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolution(xhr.responseText);
    xhr.onerror = () => rejet(xhr.statusText);
    xhr.send();
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation de `Promise` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#ecmascript-promise)
- [Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
