---
title: EvalError
slug: Web/JavaScript/Reference/Global_Objects/EvalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet **`EvalError`** indique une erreur concernant la fonction globale {{JSxRef("Global_Objects/eval", "eval()")}}. Cette exception n'est plus levée par JavaScript, toutefois l'objet `EvalError` reste disponible pour des raisons de compatibilité.

`EvalError` est un {{Glossary("serializable object", "objet sérialisable")}}, donc il peut être cloné avec {{DOMxRef("Window.structuredClone", "structuredClone()")}} ou copié entre des [Workers](/fr/docs/Web/API/Worker) en utilisant {{DOMxRef("Worker/postMessage()", "postMessage()")}}.

`EvalError` est une sous-classe de {{JSxRef("Error")}}.

## Constructeur

- {{JSxRef("EvalError/EvalError", "EvalError()")}}
  - : Crée un nouvel objet `EvalError`.

## Propriétés d'instance

_Hérite également des propriétés d'instance de son parent {{JSxRef("Error")}}_.

Ces propriétés sont définies sur `EvalError.prototype` et partagées par toutes les instances de `EvalError`.

- {{JSxRef("Object/constructor", "EvalError.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `EvalError`, la valeur initiale est le constructeur {{JSxRef("EvalError/EvalError", "EvalError")}}.
- {{JSxRef("Error/name", "EvalError.prototype.name")}}
  - : Représente le nom du type d'erreur. Pour `EvalError.prototype.name`, la valeur initiale est `"EvalError"`.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("Error")}}_.

## Exemples

### Créer un objet `EvalError`

```js
try {
  throw new EvalError("Bonjour");
} catch (e) {
  console.log(e instanceof EvalError); // true
  console.log(e.message); // "Bonjour"
  console.log(e.name); // "EvalError"
  console.log(e.stack); // Pile de l'erreur
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Error")}}
- La fonction {{JSxRef("Global_Objects/eval", "eval()")}}
