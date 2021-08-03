---
title: globalThis
slug: Web/JavaScript/Reference/Global_Objects/globalThis
tags:
  - JavaScript
  - Reference
  - globalThis
translation_of: Web/JavaScript/Reference/Global_Objects/globalThis
original_slug: Web/JavaScript/Reference/Objets_globaux/globalThis
---
{{jsSidebar("Objects")}}

La propriété globale **`globalThis`** renvoie l'objet global de plus haut niveau.

{{EmbedInteractiveExample("pages/js/globalprops-globalthis.html")}}

## Syntaxe

    globalThis

## Description

Par le passé, il était nécessaire d'utiliser différentes syntaxes pour différents environnements afin d'accéder à la portée globale. Sur le Web, on peut utiliser {{domxref("Window.window", "window")}}, {{domxref("Window.self", "self")}} ou {{domxref("Window.frames", "frames")}} ; pour les [web workers](/en-US/docs/Web/API/Worker), seul `self` peut être employé ; pour Node.js aucun de ces mots-clés ne fonctionne et il faut utiliser `global`.
Le mot-clé `this` pouvait être utilisé à l'intérieur des fonctions en [mode non-strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) mais vaudra sinon `undefined` dans les modules et dans les fonctions utilisant le [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

La propriété `globalThis` fournit une méthode standard d'accès à l'objet `this` global, quel que soit l'environnement. Contrairement aux propriétés `window` et `self`, ce mot-clé fonctionnera quel que soit le contexte (que celui-ci soit doté de fenêtres ou non). Ainsi, on peut accéder à l'objet global de façon homogène, quel que soit l'environnement dans lequel le code est utilisé.

Pour mieux mémoriser ce nom, on se rappellera que la valeur de `this` dans la portée globale est `globalThis`.

### Accès indirect à la variable globale dans un contexte web

Dans la plupart des environnements, `globalThis` sera une référence directe à l'objet global. Cependant, dans les navigateurs web, avec les principes de sécurité relatifs aux _iframes_ et aux liens entre les fenêtres, `globalThis` fournira un {{jsxref("Proxy")}} sur l'objet global (auquel on n'aura donc pas accès directement).

### Nommage

D'autres noms furent proposés pour cette fonctionnalité (tels que `self` et `global`) mais ils furent écartés car ils pouvaient entraîner des problèmes de compatibilité avec du code existant. Pour plus de détails, voir [le document de la proposition pour le nommage](https://github.com/tc39/proposal-global/blob/master/NAMING.md).

## Exemples

Avant l'introduction de `globalThis`, la seule façon qui permettait d'obtenir l'objet global de l'environnement de façon homogène était `Function('return this')()`. Toutefois, cela enfreignait certaines règles [CSP](/fr/docs/Web/HTTP/CSP) avec certains réglages et [es6-shim](https://github.com/paulmillr/es6-shim), par exemple, devait utiliser une logique conditionnelle :

```js
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error("impossible de trouver l'objet global");
};

var globals = getGlobal();

if (typeof globals.setTimeout !== 'function') {
  // pas de setTimeout pour cet environnement
}
```

Avec `globalThis`, il n'est plus nécessaire de parcourir les différents mots-clés des différents environnements :

```js
if (typeof globalThis.setTimeout !== 'function') {
  // pas de setTimeout pour cet environnement
}
```

## Spécifications

| Spécification                                                                                                             | État                                | Commentaires |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------ |
| [Proposition pour `globalThis`](https://tc39.github.io/proposal-global/#sec-other-properties-of-the-global-object-global) | Proposition de niveau 3 (_stage 3_) |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.globalThis")}}
