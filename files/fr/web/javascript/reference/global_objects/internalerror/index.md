---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}

L'objet **`InternalError`** indique une erreur qui s'est produite en interne dans le moteur JavaScript.

Les cas d'exemple concernent principalement des situations où quelque chose est trop grand, par exemple&nbsp;:

- «&nbsp;trop de cas pour le `switch`&nbsp;»&nbsp;;
- «&nbsp;trop de parenthèses dans l'expression rationnelle&nbsp;»&nbsp;;
- «&nbsp;initialisateur de tableau trop grand&nbsp;»&nbsp;;
- «&nbsp;trop de niveaux de récursion&nbsp;».

`InternalError` est une sous-classe de {{JSxRef("Error")}}.

## Constructeur

- {{JSxRef("InternalError/InternalError", "InternalError()")}} {{Non-standard_Inline}}
  - : Crée un nouvel objet `InternalError`.

## Propriétés d'instance

_Hérite aussi des propriétés d'instance de son parent {{JSxRef("Error")}}._

Ces propriétés sont définies sur `InternalError.prototype` et partagées par toutes les instances de `InternalError`.

- {{JSxRef("Object/constructor", "InternalError.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet d'instance. Pour les instances de `InternalError`, la valeur initiale est le constructeur {{JSxRef("InternalError/InternalError", "InternalError")}}.
- {{JSxRef("Error/name", "InternalError.prototype.name")}}
  - : Représente le nom du type d'erreur. Pour `InternalError.prototype.name`, la valeur initiale est `"InternalError"`.

## Méthodes d'instance

_Hérite des méthodes d'instance de son parent {{JSxRef("Error")}}._

## Exemples

### Trop de niveau de récursion

Cette fonction récursive s'appelle 10 fois, comme indiquée par la condition d'arrêt.

```js
function boucle(x) {
  // "x >= 10" représente la condition d'arrêt
  if (x >= 10) return;

  // faire des trucs
  boucle(x + 1); // l'appel récursif
}
boucle(0);
```

En changeant cette condition avec une valeur extrêmement grande, cela ne fonctionnera plus&nbsp;:

```js example-bad
function boucle(x) {
  if (x >= 1000000000000) return;

  // faire des trucs
  boucle(x + 1);
}
boucle(0);

// InternalError: too much recursion
```

Pour plus d'informations, voir [la page sur `InternalError: too much recursion`](/fr/docs/Web/JavaScript/Reference/Errors/Too_much_recursion).

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Error")}}
- [`InternalError: too much recursion`](/fr/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
