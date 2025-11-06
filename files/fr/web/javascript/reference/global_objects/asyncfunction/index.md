---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`AsyncFunction`** fournit des méthodes pour les [fonctions asynchrones](/fr/docs/Web/JavaScript/Reference/Statements/async_function). En JavaScript, chaque fonction asynchrone est en réalité un objet `AsyncFunction`.

Notez que `AsyncFunction` n'est _pas_ un objet global. Il peut être obtenu avec le code suivant&nbsp;:

```js
const AsyncFunction = async function () {}.constructor;
```

`AsyncFunction` est une sous-classe de {{JSxRef("Function")}}.

## Constructeur

- {{JSxRef("AsyncFunction/AsyncFunction", "AsyncFunction()")}}
  - : Crée un nouvel objet `AsyncFunction`.

## Propriétés d'instance

_Hérite également des propriétés d'instance de sa super-classe {{JSxRef("Function")}}._

Ces propriétés sont définies sur `AsyncFunction.prototype` et partagées par toutes les instances de `AsyncFunction`.

- {{JSxRef("Object/constructor", "AsyncFunction.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'instance de cet objet. Pour les objets `AsyncFunction`, la valeur initiale est le constructeur {{JSxRef("AsyncFunction/AsyncFunction", "AsyncFunction")}}.
- `AsyncFunction.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"AsyncFunction"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

> [!NOTE]
> Les instances de `AsyncFunction` ne possèdent pas la propriété [`prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function).

## Méthodes d'instance

_Hérite des méthodes d'instance de sa super-classe {{JSxRef("Function")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`async function`](/fr/docs/Web/JavaScript/Reference/Statements/async_function)
- [Expression de fonction `async`](/fr/docs/Web/JavaScript/Reference/Operators/async_function)
- L'objet global {{JSxRef("Function")}}
- L'objet {{JSxRef("AsyncGeneratorFunction")}}
- L'objet {{JSxRef("GeneratorFunction")}}
- {{JSxRef("Functions", "Fonctions", "", 1)}}
