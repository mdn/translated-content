---
title: "Function : propriété arguments"
short-title: arguments
slug: Web/JavaScript/Reference/Global_Objects/Function/arguments
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!NOTE]
> La propriété `arguments` des objets {{JSxRef("Function")}} est obsolète. La méthode recommandée pour accéder à l'objet `arguments` est de se référer à la variable {{JSxRef("Functions/arguments", "arguments")}} disponible dans les fonctions.

La propriété d'accesseur **`arguments`** des instances de {{JSxRef("Function")}} retourne les arguments passés à cette fonction. Pour les fonctions [strictes](/fr/docs/Web/JavaScript/Reference/Strict_mode), fléchées, asynchrones et génératrices, accéder à la propriété `arguments` lève une {{JSxRef("TypeError")}}.

## Description

La valeur de `arguments` est un objet semblable à un tableau correspondant aux arguments passés à une fonction.

Dans le cas de la récursivité, c'est-à-dire si la fonction `f` apparaît plusieurs fois dans la pile d'appels, la valeur de `f.arguments` représente les arguments correspondant à l'appel le plus récent de la fonction.

La valeur de la propriété `arguments` est normalement {{JSxRef("Operators/null", "null")}} s'il n'y a pas d'appel en cours de la fonction (c'est-à-dire si la fonction a été appelée mais n'a pas encore terminé son exécution).

Notez que le seul comportement défini par la spécification ECMAScript est que `Function.prototype` possède un accesseur initial `arguments` qui lève inconditionnellement une {{JSxRef("TypeError")}} pour toute requête `get` ou `set` (appelé «&nbsp;pillule d'accesseur empoisonné&nbsp;»), et que les implémentations ne sont pas autorisées à modifier cette sémantique pour toute fonction sauf les fonctions classiques non strictes. Le comportement réel de la propriété `arguments`, s'il diffère de la levée d'une erreur, dépend de l'implémentation. Par exemple, Chrome la définit comme une propriété propre de données, tandis que Firefox et Safari étendent l'accesseur poison initial `Function.prototype.arguments` pour gérer spécialement les valeurs de `this` qui sont des fonctions non strictes.

```js
(function f() {
  if (Object.hasOwn(f, "arguments")) {
    console.log(
      "arguments est une propriété propre avec le descripteur",
      Object.getOwnPropertyDescriptor(f, "arguments"),
    );
  } else {
    console.log(
      "f ne possède pas de propriété propre nommée arguments. Tentative d'accès à f.[[Prototype]].arguments",
    );
    console.log(
      Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(f),
        "arguments",
      ).get.call(f),
    );
  }
})();

// Dans Chrome :
// arguments est une propriété propre avec le descripteur {value: Arguments(0), writable: false, enumerable: false, configurable: false}

// Dans Firefox :
// f ne possède pas de propriété propre nommée arguments. Tentative d'accès à f.[[Prototype]].arguments
// Arguments { … }
```

## Exemples

### Utiliser la propriété `arguments`

```js
function f(n) {
  g(n - 1);
}

function g(n) {
  console.log("avant : " + g.arguments[0]);
  if (n > 0) {
    f(n);
  }
  console.log("après : " + g.arguments[0]);
}

f(2);

console.log("a retourné : " + g.arguments);

// Journalisation :
// avant : 1
// avant : 0
// après : 0
// après : 1
// a retourné : null
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Functions/arguments", "arguments")}}
- [Les fonctions](/fr/docs/Web/JavaScript/Reference/Functions)
