---
title: "Promise : méthode statique all()"
short-title: all()
slug: Web/JavaScript/Reference/Global_Objects/Promise/all
l10n:
  sourceCommit: cbf7f4b55e2c0bc0c096773435b159edcaa8c9e2
---

La méthode statique **`Promise.all()`** prend en entrée un itérable de promesses et retourne une seule promesse ({{JSxRef("Promise")}}). Cette promesse retournée est complétée (<i lang="en">fulfilled</i> en anglais) lorsque toutes les promesses de l'entrée sont complétées (y compris lorsqu'un itérable vide est passé), avec un tableau des valeurs de complétion. Elle est rompue (<i lang="en">rejected</i> en anglais) lorsqu'une des promesses de l'entrée est rompue, avec la raison de ce premier rejet.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Promise.all()")}}

```js interactive-example
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "toto");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Résultat attendu : Array [3, 42, "toto"]
```

## Syntaxe

```js-nolint
Promise.all(iterable)
```

### Paramètres

- `iterable`
  - : Un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») (tel qu'un tableau ({{JSxRef("Array")}})) contenant des promesses. Ces valeurs sont [attendues](/fr/docs/Web/JavaScript/Reference/Operators/await), donc d'autres [semi-promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse) sont également résolues, tandis que les valeurs qui ne sont pas des semi-promesses sont retournées tels quels.

### Valeur de retour

Un objet {{JSxRef("Promise")}} qui est&nbsp;:

- **Déjà complétée**, si un `iterable` vide est passé en argument.
- **Complétée de façon asynchrone**, si toutes les promesses d'un `iterable` donné sont complétées. La valeur de complétion est un tableau des valeurs de complétion, dans l'ordre des promesses passées, indépendamment de l'ordre de complétion. Si un `iterable` passé n'est pas vide mais ne contient aucune promesse en attente, la promesse retournée est toujours complétée de façon asynchrone (au lieu de synchrone).
- **Rompue de façon asynchrone**, si l'une des promesses d'un `iterable` donné est rompue. La raison du rejet est la raison du rejet de la première promesse qui a été rompue.

## Description

La méthode `Promise.all()` est l'une des [méthodes de concurrence des promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#concurrence_des_promesses). Elle peut être utile pour agréger les résultats de plusieurs promesses. Elle est généralement utilisée lorsqu'il y a plusieurs tâches asynchrones liées dont le code global dépend pour fonctionner correctement — toutes devant être accomplies avant que l'exécution du code ne continue.

`Promise.all()` rompt immédiatement dès qu'une **des** promesses d'entrée est rompue. En revanche, la promesse retournée par {{JSxRef("Promise.allSettled()")}} attends que toutes les promesses d'entrée soient exécutées, qu'une d'entre elles soit rompue ou non. Utilisez `allSettled()` si vous avez besoin du résultat final de chaque promesse de l'itérable d'entrée.

À l'instar d'autres combinateurs de promesses, `Promise.all()` marque immédiatement toutes les promesses comme «&nbsp;gérées&nbsp;» lorsqu'il est appelé (en appelant leurs méthodes `.then()`). Les rejets survenant après le premier rejet sont ignorés et ne déclenchent aucun évènement `unhandledrejection`.

## Exemples

### Utiliser `Promise.all()`

`Promise.all()` attend que l'ensemble des promesses soient tenues ou qu'une promesse soit rompue&nbsp;:

```js
const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("toto");
  }, 100);
});

Promise.all([p1, p2, p3]).then((valeurs) => {
  console.log(valeurs); // [3, 1337, "toto"]
});
```

Si un `iterable` contient des valeurs qui ne sont pas des promesses, il est ignoré, mais est tout de même compté comme valeur du tableau de promesses retourné (si la promesse est complétée)&nbsp;:

```js
// Toutes les valeurs ne sont pas des promesses, donc la promesse
// retournée est complétée
const p = Promise.all([1, 2, 3]);
// Si la seule promesse d'entrée est déjà complétée,
// alors la promesse retournée est complétée
const p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// Une (et la seule) promesse d'entrée est rompue,
// donc la promesse retournée est rompue
const p3 = Promise.all([1, 2, 3, Promise.reject(new Error("bad"))]);

// En utilisant setTimeout, nous pouvons exécuter du code après que la
// file d'attente soit vide
setTimeout(() => {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// Journaux :
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: Error: bad }
```

### Déstructurer le résultat

Vous trouvez la [destructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring) très utile si vous regroupez un nombre connu de tâches.

```js
// Avec then()
Promise.all([p1, p2, p3]).then(([a, b, c]) => {
  console.log(a, b, c); // 3 1337 "toto"
});

// Avec await
const [a, b, c] = await Promise.all([p1, p2, p3]);
```

Soyez prudent&nbsp;: si l'ordre des promesses originales et des variables de résultat ne correspond pas, vous risquez de rencontrer des bogues subtils. La méthode {{JSxRef("Promise.allKeyed()")}} résout exactement ce problème.

### Asynchronicité ou synchronicité de `Promise.all()`

L'exemple suivant démontre l'asynchronicité de `Promise.all` lorsqu'un `iterable` non vide est passé&nbsp;:

```js
// Passe un tableau de promesses déjà résolues,
// pour déclencher Promise.all dès que possible
const tableauPromessesResolues = [Promise.resolve(33), Promise.resolve(44)];

const p = Promise.all(tableauPromessesResolues);
// Journalisation immédiate de la valeur de p
console.log(p);

// En utilisant setTimeout, nous pouvons exécuter du code après que la file d'attente soit vide
setTimeout(() => {
  console.log("la pile est maintenant vide");
  console.log(p);
});

// Journaux, dans l'ordre :
// Promise { <state>: "pending" }
// la pile est maintenant vide
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

La même chose se produit si `Promise.all` est rompue&nbsp;:

```js
const tableauPromessesMixtes = [
  Promise.resolve(33),
  Promise.reject(new Error("mauvais")),
];
const p = Promise.all(tableauPromessesMixtes);
console.log(p);
setTimeout(() => {
  console.log("la pile est maintenant vide");
  console.log(p);
});

// Journaux :
// Promise { <state>: "pending" }
// la pile est maintenant vide
// Promise { <state>: "rejected", <reason>: Error: mauvais }
```

`Promise.all` se résout de manière synchrone si et seulement si un `iterable` passé est vide&nbsp;:

```js
const p = Promise.all([]); // Est immédiatement résolue
const p2 = Promise.all([1337, "hi"]); // Les valeurs qui ne sont pas des promesses sont ignorées, mais l'évaluation se fait de manière asynchrone
console.log(p);
console.log(p2);
setTimeout(() => {
  console.log("la pile est maintenant vide");
  console.log(p2);
});

// Journaux :
// Promise { <state>: "fulfilled", <value>: Array[0] }
// Promise { <state>: "pending" }
// la pile est maintenant vide
// Promise { <state>: "fulfilled", <value>: Array[2] }
```

### Utiliser `Promise.all()` avec des fonctions asynchrones

Dans les [fonctions asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function), il est très courant de «&nbsp;trop attendre&nbsp;» votre code. Par exemple, étant donné les fonctions suivantes&nbsp;:

```js
function fenetrePourChoixPlat() {
  return new Promise((resolve, reject) => {
    const dialog = document.createElement("dialog");
    dialog.innerHTML = `
<form method="dialog">
  <p>Que souhaitez-vous manger ?</p>
  <select>
    <option value="pizza">Pizza</option>
    <option value="pates">Pâtes</option>
    <option value="salade">Salade</option>
  </select>
  <menu>
    <li><button value="annuler">Annuler</button></li>
    <li><button type="submit" value="ok">OK</button></li>
  </menu>
</form>
    `;
    dialog.addEventListener("close", () => {
      if (dialog.returnValue === "ok") {
        resolve(dialog.querySelector("select").value);
      } else {
        reject(new Error("L'utilisateur·ice a annulé la boîte de dialogue"));
      }
    });
    document.body.appendChild(dialog);
    dialog.showModal();
  });
}

async function recupererPrix() {
  const response = await fetch("/prices");
  return await response.json();
}
```

Vous pouvez écrire une fonction comme ceci&nbsp;:

```js example-bad
async function obtenirPrix() {
  const choix = await fenetrePourChoixPlat();
  const prix = await recupererPrix();
  return prix[choix];
}
```

Cependant, notez que l'exécution de `fenetrePourChoixPlat` et `recupererPrix` ne dépend pas du résultat de l'autre. Pendant que l'utilisateur·ice choisit son plat, il est acceptable que les prix soient récupérés en arrière-plan, mais dans le code ci-dessus, l'opérateur [`await`](/fr/docs/Web/JavaScript/Reference/Operators/await) fait que la fonction asynchrone se met en pause jusqu'à ce que le choix soit fait, puis à nouveau jusqu'à ce que les prix soient récupérés. Nous pouvons utiliser `Promise.all` pour les exécuter simultanément, afin que l'utilisateur·ice n'ait pas à attendre que les prix soient récupérés avant que le résultat soit donné&nbsp;:

```js example-good
async function obtenirPrix() {
  const [choix, prix] = await Promise.all([
    fenetrePourChoixPlat(),
    recupererPrix(),
  ]);
  return prix[choix];
}
```

`Promise.all` est le meilleur choix de [méthode de concurrence](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#concurrence_des_promesses) ici, car la gestion des erreurs est intuitive — si l'une des promesses est rompue, le résultat n'est plus disponible, donc toute l'expression `await` lève une exception.

`Promise.all` accepte un itérable de promesses, donc si vous l'utilisez pour exécuter plusieurs fonctions asynchrones simultanément, vous devez appeler les fonctions asynchrones et utiliser les promesses retournées. Passer directement les fonctions à `Promise.all` ne fonctionne pas, car elles ne sont pas des promesses.

```js example-bad
async function obtenirPrix() {
  const [choix, prix] = await Promise.all([
    fenetrePourChoixPlat,
    recupererPrix,
  ]);
  // `choix` et `prix` sont toujours les fonctions asynchrones originales ;
  // Promise.all() ne fait rien pour les valeurs qui ne sont pas des promesses
}
```

Notez que ce qui suit, malgré d'autres aspects indésirables (comme la création de plus de variables et une gestion des erreurs sujette aux bogues), permet également d'obtenir de la concurrence&nbsp;:

```js
async function obtenirPrix() {
  // Déclenche toutes les opérations asynchrones immédiatement
  const choixPromesse = fenetrePourChoixPlat();
  const prixPromesse = recupererPrix();

  // Attend chaque promesse (toutes les opérations asynchrones en cours continuent de s'exécuter)
  const choix = await choixPromesse;
  const prix = await prixPromesse;
}
```

### Comportement d'échec rapide de `Promise.all()`

`Promise.all` est rompue si l'un des éléments est rejeté. Par exemple, si vous passez quatre promesses qui se résolvent après un délai et une promesse qui est rompue immédiatement, alors `Promise.all` est rompue immédiatement.

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("un"), 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("deux"), 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("trois"), 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("quatre"), 4000);
});
const p5 = new Promise((resolve, reject) => {
  reject(new Error("rompu"));
});

// Utiliser .catch:
Promise.all([p1, p2, p3, p4, p5])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error.message);
  });

// Journaux :
// "rompu"
```

Il est possible de changer ce comportement en gérant les rejets possibles&nbsp;:

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p1_delayed_resolution"), 1000);
});

const p2 = new Promise((resolve, reject) => {
  reject(new Error("p2_immediate_rejection"));
});

Promise.all([p1.catch((error) => error), p2.catch((error) => error)]).then(
  (values) => {
    console.log(values[0]); // "p1_delayed_resolution"
    console.error(values[1]); // "Error: p2_immediate_rejection"
  },
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet natif {{JSxRef("Promise")}}
- La méthode statique {{JSxRef("Promise.allKeyed()")}}
- La méthode statique {{JSxRef("Promise.allSettled()")}}
- La méthode statique {{JSxRef("Promise.any()")}}
- La méthode statique {{JSxRef("Promise.race()")}}
