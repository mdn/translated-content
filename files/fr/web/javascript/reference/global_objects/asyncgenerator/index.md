---
title: AsyncGenerator
slug: Web/JavaScript/Reference/Global_Objects/AsyncGenerator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`AsyncGenerator`** est retourné par une {{JSxRef("Statements/async_function*", "fonction génératrice asynchrone", "", 1)}} et il respecte à la fois le [protocole d'itérable asynchrone et le protocole d'itérateur asynchrone](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#les_protocoles_ditérateur_asynchrone_et_ditérable_asynchrone).

Les méthodes des générateurs asynchrones renvoient toujours des objets {{JSxRef("Promise")}}.

`AsyncGenerator` est une sous‑classe de la classe cachée {{JSxRef("AsyncIterator")}}.

## Constructeur

Il n'existe pas d'entité JavaScript correspondant au constructeur `AsyncGenerator`. Les instances d'`AsyncGenerator` doivent être retournées par des [fonctions génératrices asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function*)&nbsp;:

```js
async function* createAsyncGenerator() {
  yield Promise.resolve(1);
  yield await Promise.resolve(2);
  yield 3;
}
const asyncGen = createAsyncGenerator();
asyncGen.next().then((res) => console.log(res.value)); // 1
asyncGen.next().then((res) => console.log(res.value)); // 2
asyncGen.next().then((res) => console.log(res.value)); // 3
```

Il existe uniquement un objet caché qui est l'objet prototype partagé par tous les objets créés par les fonctions génératrices asynchrones. Cet objet est souvent présenté sous la forme `AsyncGenerator.prototype` pour lui donner l'apparence d'une classe, mais il devrait plutôt s'appeler {{JSxRef("AsyncGeneratorFunction.prototype.prototype")}}, car `AsyncGeneratorFunction` est une véritable entité JavaScript. Pour comprendre la chaîne de prototypes des instances d'`AsyncGenerator`, voir {{JSxRef("AsyncGeneratorFunction.prototype.prototype")}}.

## Propriétés d'instance

Ces propriétés sont définies sur `AsyncGenerator.prototype` et partagées par toutes les instances d'`AsyncGenerator`.

- {{JSxRef("Object/constructor", "AsyncGenerator.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances d'`AsyncGenerator`, la valeur initiale est [`AsyncGeneratorFunction.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AsyncGeneratorFunction).

    > [!NOTE]
    > Les objets `AsyncGenerator` ne conservent pas de référence vers la fonction génératrice asynchrone qui les a créés.

- `AsyncGenerator.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"AsyncGenerator"`. Cette propriété est utilisée par {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

_Hérite aussi des méthodes d'instance de sa super‑classe {{JSxRef("AsyncIterator")}}_.

- {{JSxRef("AsyncGenerator.prototype.next()")}}
  - : Retourne une promesse ({{JSxRef("Promise")}}) qui sera résolue avec la valeur fournie par l'expression {{JSxRef("Operators/yield", "yield")}}.
- {{JSxRef("AsyncGenerator.prototype.return()")}}
  - : Agit comme si une instruction `return` était insérée dans le corps du générateur à la position suspendue actuelle, ce qui termine le générateur et lui permet d'effectuer des opérations de nettoyage lorsqu'il est combiné avec un bloc [`try...finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block).
- {{JSxRef("AsyncGenerator.prototype.throw()")}}
  - : Agit comme si une instruction `throw` était insérée dans le corps du générateur à la position suspendue actuelle, ce qui informe le générateur d'une condition d'erreur et lui permet de gérer l'erreur, ou d'effectuer un nettoyage et de se fermer.

## Exemples

### Itération d'un générateur asynchrone

L'exemple suivant itère sur un générateur asynchrone, affichant les valeurs 1-6 dans la console à des intervalles de temps décroissants. Remarquez qu'à chaque fois qu'une Promise est yieldée, elle est automatiquement résolue dans la boucle `for await...of`.

```js
// Une tâche asynchrone. Imaginez qu'elle fasse quelque chose de plus utile
// en pratique.
function valeurRetardee(time, value) {
  return new Promise((resolve /*, reject */) => {
    setTimeout(() => resolve(value), time);
  });
}

async function* generer() {
  yield valeurRetardee(2000, 1);
  yield valeurRetardee(1000, 2);
  yield valeurRetardee(500, 3);
  yield valeurRetardee(250, 4);
  yield valeurRetardee(125, 5);
  yield valeurRetardee(50, 6);
  console.log("Terminé !");
}

async function principal() {
  for await (const value of generer()) {
    console.log("valeur", value);
  }
}

principal().catch((e) => console.error(e));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'instruction {{JSxRef("Statements/function*", "function*", "", 1)}}
- L'instruction {{JSxRef("Statements/async_function*", "async function*", "", 1)}}
- [L'expression `function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*)
- {{JSxRef("GeneratorFunction", "Fonction génératrice", "", 1)}}
- {{JSxRef("AsyncGeneratorFunction", "Fonction génératrice asynchrone", "", 1)}}
- [Guide des itérateurs et des générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
