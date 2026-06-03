---
title: Generator
slug: Web/JavaScript/Reference/Global_Objects/Generator
l10n:
  sourceCommit: 8ee475f0fd4e606f1cb94b44eb5380d769c2452c
---

L'objet **`Generator`** est retourné par une {{JSxRef("Statements/function*", "fonction génératrice", "", 1)}} et il respecte à la fois le [protocole itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») et le [protocole itérateur](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérateur_»).

`Generator` est une sous-classe de {{JSxRef("Iterator")}}.

## Constructeur

Il n'existe aucune entité JavaScript qui corresponde au constructeur `Generator`. Les instances de `Generator` doivent être retournées par des [fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Statements/function*)&nbsp;:

```js
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"

console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

Il existe seulement un objet caché qui est l'objet prototype partagé par tous les objets créés par les fonctions génératrices. Cet objet est souvent présenté comme `Generator.prototype` pour lui donner l'apparence d'une classe, mais il devrait plus justement être appelé {{JSxRef("GeneratorFunction.prototype.prototype")}}, car `GeneratorFunction` est une entité JavaScript réelle. Pour comprendre la chaîne de prototypes des instances de `Generator`, voir {{JSxRef("GeneratorFunction.prototype.prototype")}}.

## Propriétés d'instance

Ces propriétés sont définies sur `Generator.prototype` et partagées par toutes les instances de `Generator`.

- {{JSxRef("Object/constructor", "Generator.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Generator`, la valeur initiale est [`GeneratorFunction.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction).

    > [!NOTE]
    > Les objets `Generator` ne conservent pas de référence à la fonction génératrice qui les a créés.

- `Generator.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Generator"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes d'instance

_Hérite également des méthodes d'instance de son parent {{JSxRef("Iterator")}}._

- {{JSxRef("Generator.prototype.next()")}}
  - : Retourne une valeur produite par l'expression {{JSxRef("Operators/yield", "yield")}}.
- {{JSxRef("Generator.prototype.return()")}}
  - : Agit comme si une instruction `return` était insérée dans le corps du générateur à la position actuelle de suspension, ce qui termine le générateur et lui permet d'effectuer toute tâche de libération lorsqu'elle est combinée avec un bloc [`try...finally`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch#la_clause_finally).
- {{JSxRef("Generator.prototype.throw()")}}
  - : Agit comme si une instruction `throw` était insérée dans le corps du générateur à la position actuelle de suspension, ce qui informe le générateur d'une condition d'erreur et lui permet de gérer l'erreur, ou d'effectuer une libération et de se clôturer.

## Exemple

### Un itérateur infini

```js
function* infinite() {
  let index = 0;

  while (true) {
    yield index++;
  }
}

const generator = infinite(); // "Generator { }"

console.log(generator.next().value); // 0
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
// …
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La déclaration {{JSxRef("Statements/function*", "function*")}}
- [L'expression `function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*)
- L'objet {{JSxRef("GeneratorFunction")}}
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
