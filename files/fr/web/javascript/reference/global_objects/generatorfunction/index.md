---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`GeneratorFunction`** fournit des méthodes pour [les fonctions génératrices](/fr/docs/Web/JavaScript/Reference/Statements/function*). En JavaScript, chaque fonction génératrice est en réalité un objet `GeneratorFunction`.

Notez que `GeneratorFunction` n'est _pas_ un objet global. Vous pouvez l'obtenir avec le code suivant&nbsp;:

```js
const GeneratorFunction = function* () {}.constructor;
```

`GeneratorFunction` est une sous-classe de {{JSxRef("Function")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: GeneratorFunction", "taller")}}

```js interactive-example
const GeneratorFunction = function* () {}.constructor;

const foo = new GeneratorFunction(`
  yield 'a';
  yield 'b';
  yield 'c';
`);

let str = "";
for (const val of foo()) {
  str += val;
}

console.log(str);
// Résultat attendu : "abc"
```

## Constructeur

- {{JSxRef("GeneratorFunction/GeneratorFunction", "GeneratorFunction()")}}
  - : Crée un nouvel objet `GeneratorFunction`.

## Propriétés d'instance

_Hérite aussi des propriétés d'instance de son parent {{JSxRef("Function")}}._

Ces propriétés sont définies sur `GeneratorFunction.prototype` et partagées par toutes les instances de `GeneratorFunction`.

- {{JSxRef("Object/constructor", "GeneratorFunction.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet d'instance. Pour les instances de `GeneratorFunction`, la valeur initiale est le constructeur {{JSxRef("GeneratorFunction/GeneratorFunction", "GeneratorFunction")}}.
- {{JSxRef("GeneratorFunction.prototype.prototype")}}
  - : Toutes les fonctions génératrices partagent la même propriété [`prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype), qui est [`Generator.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Generator). Chaque fonction génératrice créée avec la syntaxe `function*` ou le constructeur `GeneratorFunction()` possède aussi sa propre propriété `prototype`, dont le prototype est `GeneratorFunction.prototype.prototype`. Quand la fonction génératrice est appelée, sa propriété `prototype` devient le prototype de l'objet générateur retourné.
- `GeneratorFunction.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"GeneratorFunction"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

Ces propriétés sont propres à chaque instance de `GeneratorFunction`.

- {{JSxRef("GeneratorFunction/prototype", "prototype")}}
  - : Utilisée quand la fonction est utilisée comme constructeur avec l'opérateur {{JSxRef("Operators/new", "new")}}. Elle devient le prototype du nouvel objet.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("Function")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La déclaration {{JSxRef("Statements/function*", "function*")}}
- [L'expression `function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*)
- L'objet {{JSxRef("Function")}}
- L'objet {{JSxRef("AsyncFunction")}}
- L'objet {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Functions", "Les fonctions", "", 1)}}
