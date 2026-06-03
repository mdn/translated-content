---
title: "Function : méthode apply()"
short-title: apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`apply()`** des instances de {{JSxRef("Function")}} appelle cette fonction avec une valeur `this` donnée, et des `arguments` fournis sous forme de tableau (ou [d'objet semblable à un tableau](/fr/docs/Web/JavaScript/Guide/Indexed_collections#travailler_avec_des_objets_sembables_à_un_tableau)).

{{InteractiveExample("Démonstration JavaScript&nbsp;: Function.prototype.apply()")}}

```js interactive-example
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Résultat attendu : 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Résultat attendu : 2
```

## Syntaxe

```js-nolint
apply(thisArg)
apply(thisArg, argsArray)
```

### Paramètres

- `thisArg`
  - : La valeur de `this` fournie pour l'appel à `func`. Si la fonction n'est pas en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), {{JSxRef("Operators/null", "null")}} et {{JSxRef("Global_Objects/undefined", "undefined")}} seront remplacées par l'objet global, et les valeurs primitives seront converties en objets.
- `argsArray` {{Optional_Inline}}
  - : Un objet semblable à un tableau, définissant les arguments avec lesquels `func` doit être appelée, ou {{JSxRef("Operators/null", "null")}} ou {{JSxRef("Global_Objects/undefined", "undefined")}} si aucun argument ne doit être fourni à la fonction.

### Valeur de retour

Le résultat obtenu en appelant la fonction avec la valeur `this` indiquée et les arguments fournis.

## Description

> [!NOTE]
> Cette fonction est presque identique à {{JSxRef("Function/call", "call()")}}, sauf que les arguments de la fonction sont passés à `call()` individuellement sous forme de liste, tandis qu'avec `apply()` ils sont combinés dans un seul objet, généralement un tableau — par exemple, `func.call(this, "eat", "bananas")` contre `func.apply(this, ["eat", "bananas"])`.

Normalement, lors de l'appel d'une fonction, la valeur de {{JSxRef("Operators/this", "this")}} à l'intérieur de la fonction est l'objet sur lequel la fonction a été appelée. Avec `apply()`, vous pouvez attribuer une valeur arbitraire à `this` lors de l'appel d'une fonction existante, sans avoir à rattacher d'abord la fonction à l'objet en tant que propriété. Cela permet d'utiliser les méthodes d'un objet comme fonctions utilitaires génériques.

Vous pouvez également utiliser tout type d'objet semblable à un tableau comme second paramètre. En pratique, cela signifie qu'il doit posséder une propriété `length` et des propriétés entières («&nbsp;index&nbsp;») dans l'intervalle `(0..length - 1)`. Par exemple, vous pouvez utiliser un {{DOMxRef("NodeList")}}, ou un objet personnalisé comme `{ 'length': 2, '0': 'eat', '1': 'bananas' }`. Vous pouvez aussi utiliser {{JSxRef("Functions/arguments", "arguments")}}, par exemple&nbsp;:

```js
function enveloppe() {
  return autreFonction.apply(null, arguments);
}
```

Avec les [paramètres du reste](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters) et la [syntaxe de décomposition des paramètres](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), cela peut être réécrit ainsi&nbsp;:

```js
function enveloppe(...args) {
  return autreFonction(...args);
}
```

En général, `fn.apply(null, args)` est équivalent à `fn(...args)` avec la syntaxe de décomposition des paramètres, sauf que `args` doit être un objet semblable à un tableau dans le premier cas avec `apply()`, et un objet [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») dans le second cas avec la syntaxe de décomposition.

> [!WARNING]
> Ne pas utiliser `apply()` pour chaîner des constructeurs (par exemple, pour implémenter l'héritage). Cela invoque la fonction constructeur comme une fonction ordinaire, ce qui signifie que {{JSxRef("Operators/new.target", "new.target")}} vaut `undefined`, et les classes lèvent une erreur car elles ne peuvent pas être appelées sans {{JSxRef("Operators/new", "new")}}. Utilisez plutôt {{JSxRef("Reflect.construct()")}} ou {{JSxRef("Classes/extends", "extends")}}.

## Exemples

### Utiliser `apply()` pour ajouter un tableau à un autre

Vous pouvez utiliser {{JSxRef("Array.prototype.push()")}} pour ajouter un élément à un tableau. Comme `push()` accepte un nombre variable d'arguments, vous pouvez aussi ajouter plusieurs éléments en une seule fois. Mais si vous passez un tableau à `push()`, il ajoutera en réalité ce tableau comme un seul élément, au lieu d'ajouter les éléments individuellement, ce qui aboutit à un tableau dans un tableau. À l'inverse, {{JSxRef("Array.prototype.concat()")}} a le comportement souhaité dans ce cas, mais il ne modifie pas le tableau _existant_ — il crée et retourne un nouveau tableau.

Dans ce cas, vous pouvez utiliser `apply` pour «&nbsp;étaler&nbsp;» implicitement un tableau en une série d'arguments.

```js
const tableau = ["a", "b"];
const elements = [0, 1, 2];
tableau.push.apply(tableau, elements);
console.info(tableau); // ["a", "b", 0, 1, 2]
```

Le même effet peut être obtenu avec la syntaxe de décomposition.

```js
const tableau = ["a", "b"];
const elements = [0, 1, 2];
tableau.push(...elements);
console.info(tableau); // ["a", "b", 0, 1, 2]
```

### Utiliser `apply()` et des fonctions natives

Un usage astucieux de `apply()` permet d'utiliser des fonctions natives pour certaines tâches qui nécessiteraient autrement de parcourir manuellement une collection (ou d'utiliser la syntaxe de décomposition).

Par exemple, on peut utiliser {{JSxRef("Math.max()")}} et {{JSxRef("Math.min()")}} pour obtenir la valeur maximale et minimale d'un tableau.

```js
/* min/max tableau de nombres */
const nombres = [5, 6, 2, 3, 7];

/* usage de Math.min/Math.max et de la méthode apply */
let max = Math.max.apply(null, nombres);
/* Equivalent à Math.max(nombres[0], ...)
  ou Math.max(5, 6, ..) */

let min = Math.min.apply(null, nombres);

/* vs. algorithme trivial avec une boucle */
max = -Infinity;
min = Infinity;

for (const n of nombres) {
  if (n > max) {
    max = n;
  }
  if (n < min) {
    min = n;
  }
}
```

Attention&nbsp;: en utilisant `apply()` (ou la syntaxe de décomposition) avec une liste d'arguments arbitrairement longue, vous risquez de dépasser la limite du nombre d'arguments du moteur JavaScript.

Les conséquences d'un appel de fonction avec trop d'arguments (c'est-à-dire plus de plusieurs dizaines de milliers d'arguments) ne sont pas spécifiées et varient selon les moteurs. (Le moteur JavaScriptCore a une [limite d'arguments de 65536 <sup>(angl.)</sup>](https://webkit.org/b/80797)). La plupart des moteurs lèvent une exception&nbsp;; mais il n'existe aucune spécification normative empêchant d'autres comportements, comme la limitation arbitraire du nombre d'arguments effectivement transmis à la fonction appelée. Pour illustrer ce dernier cas&nbsp;: si un tel moteur avait une limite de quatre arguments (les limites réelles sont bien sûr bien plus élevées), cela reviendrait à ce que les arguments `5, 6, 2, 3` soient passés à `apply` dans les exemples ci-dessus, plutôt que le tableau complet.

Si votre tableau de valeurs risque d'atteindre plusieurs dizaines de milliers d'éléments, utilisez une stratégie hybride&nbsp;: appliquez votre fonction à des portions du tableau à la fois&nbsp;:

```js
function minimumDuTableau(tableau) {
  let min = Infinity;
  const QUANTUM = 32768;

  for (let i = 0; i < tableau.length; i += QUANTUM) {
    const submin = Math.min.apply(
      null,
      tableau.slice(i, Math.min(i + QUANTUM, tableau.length)),
    );
    min = Math.min(submin, min);
  }

  return min;
}

const min = minimumDuTableau([5, 6, 2, 3, 7]);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Functions/arguments", "arguments")}}
- La méthode {{JSxRef("Function.prototype.bind()")}}
- La méthode {{JSxRef("Function.prototype.call()")}}
- La méthode {{JSxRef("Reflect.apply()")}}
- [Les fonctions](/fr/docs/Web/JavaScript/Reference/Functions)
- [La syntaxe de décomposition (`...`)](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
