---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La propriété globale **`globalThis`** contient la valeur [globale de `this`](/fr/docs/Web/JavaScript/Reference/Operators/this#dans_le_contexte_global), qui est généralement similaire à [l'objet global](/fr/docs/Glossary/Global_object).

{{InteractiveExample("Démonstration JavaScript&nbsp;: globalThis", "shorter")}}

```js interactive-example
function canMakeHTTPRequest() {
  return typeof globalThis.XMLHttpRequest === "function";
}

console.log(canMakeHTTPRequest());
// Résultat attendu (dans un navigateur) : true
```

## Valeur

L'objet global `this`.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> La propriété `globalThis` est configurable et modifiable afin que les auteur·ice·s de code puissent la masquer lors de l'exécution de code non fiable et éviter d'exposer l'objet global.

## Description

Historiquement, accéder à l'objet global a nécessité différentes syntaxes selon les environnements JavaScript. Sur le Web, vous pouvez utiliser {{DOMxRef("Window/window", "window")}}, {{DOMxRef("Window/self", "self")}}, ou {{DOMxRef("Window/frames", "frames")}} — mais dans les [Web Workers](/fr/docs/Web/API/Worker) seul `self` fonctionne. Dans Node.js aucun de ces mots-clés ne fonctionne et il faut utiliser `global`. Le mot-clé `this` pouvait être utilisé à l'intérieur des fonctions en mode non-strict, mais `this` vaudra `undefined` dans les modules et dans les fonctions utilisant le mode strict. Vous pouvez aussi utiliser `Function('return this')()`, mais les environnements qui désactivent {{JSxRef("Global_Objects/eval", "eval()")}}, comme {{Glossary("CSP")}} dans les navigateurs, empêchent l'utilisation de {{JSxRef("Function")}} de cette manière.

La propriété `globalThis` fournit une méthode standard pour accéder à la valeur de `this` global (et donc à l'objet global lui-même) dans tous les environnements. Contrairement à des propriétés similaires comme `window` et `self`, elle fonctionne aussi bien dans les contextes avec ou sans fenêtre. Ainsi, on peut accéder à l'objet global de façon homogène, sans avoir à connaître l'environnement d'exécution du code. Pour mieux mémoriser ce nom, rappelez-vous que dans la portée globale, la valeur de `this` est `globalThis`.

> [!NOTE]
> `globalThis` correspond généralement au même concept que l'objet global (c'est-à-dire qu'ajouter des propriétés à `globalThis` en fait des variables globales) — c'est le cas pour les navigateurs et Node — mais les hôtes peuvent fournir une valeur différente pour `globalThis` qui n'est pas liée à l'objet global.

### HTML et WindowProxy

Dans de nombreux moteurs, `globalThis` est une référence à l'objet global réel, mais dans les navigateurs web, en raison des considérations de sécurité liées aux cadres intégrés et aux fenêtres croisées, il référence un {{JSxRef("Proxy")}} autour de l'objet global réel auquel vous n'avez pas accès directement. Cette distinction est rarement pertinente dans l'usage courant, mais il est important d'en être conscient.

### Nommage

D'autres noms furent proposés pour cette fonctionnalité (tels que `self` et `global`) mais ils furent écartés car ils pouvaient entraîner des problèmes de compatibilité avec du code existant. Pour plus de détails, voir [le document de la proposition pour le nommage](https://github.com/tc39/proposal-global/blob/master/NAMING.md).

## Exemples

### Rechercher l'objet global dans différents environnements

Habituellement, il n'est pas nécessaire de préciser explicitement l'objet global — ses propriétés sont automatiquement accessibles comme variables globales.

```js
console.log(window.Math === Math); // true
```

Cependant, un cas où il faut accéder explicitement à l'objet global est lors de l'écriture sur celui-ci, généralement pour des [prothèses d'émulation](/fr/docs/Glossary/Polyfill).

Avant `globalThis`, la seule façon fiable et multiplateforme d'obtenir l'objet global d'un environnement était `Function('return this')()`. Cependant, cela provoque des violations de [CSP](/fr/docs/Web/HTTP/Guides/CSP) dans certains contextes, donc les auteur·ice·s utilisaient une définition par morceaux comme celle-ci (légèrement adaptée de la [source core-js originale <sup>(angl.)</sup>](https://github.com/zloirock/core-js/blob/master/packages/core-js/internals/global-this.js))&nbsp;:

```js
function verifier(it) {
  // Math est connu pour exister en tant que global dans chaque environnement.
  return it && it.Math === Math && it;
}

const globalObject =
  verifier(typeof window === "object" && window) ||
  verifier(typeof self === "object" && self) ||
  verifier(typeof global === "object" && global) ||
  // Ça retourne undefined lorsqu'on exécute en mode strict
  (function () {
    return this;
  })() ||
  Function("return this")();
```

Après avoir obtenu l'objet global, nous pouvons définir de nouvelles propriétés globales dessus. Par exemple, ajouter une implémentation pour [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)&nbsp;:

```js
if (typeof globalObject.Intl === "undefined") {
  // Pas de Intl dans cet environnement ; définissons le nôtre dans la portée globale
  Object.defineProperty(globalObject, "Intl", {
    value: {
      // Notre implémentation d'Intl
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

Avec la disponibilité de `globalThis`, la recherche supplémentaire de l'objet global dans les différents environnements n'est plus nécessaire&nbsp;:

```js
if (typeof globalThis.Intl === "undefined") {
  Object.defineProperty(globalThis, "Intl", {
    value: {
      // Notre implémentation d'Intl
    },
    enumerable: false,
    configurable: true,
    writable: true,
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `globalThis` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-globalthis)
- [Prothèse d'émulation es-shims de `globalThis` <sup>(angl.)</sup>](https://www.npmjs.com/package/globalthis)
- L'opérateur {{JSxRef("Operators/this", "this")}}
