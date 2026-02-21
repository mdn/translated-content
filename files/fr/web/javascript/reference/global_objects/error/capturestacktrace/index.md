---
title: "Error : méthode statique captureStackTrace()"
short-title: captureStackTrace()
slug: Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`captureStackTrace()`** d'une instance de {{JSxRef("Error")}} installe des informations de trace de pile sur un objet fourni, sous la forme de la propriété [`stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/stack).

## Syntaxe

```js-nolint
Error.captureStackTrace(object)
Error.captureStackTrace(object, constructor)
```

### Paramètres

- `object`
  - : L'objet sur lequel ajouter la propriété `stack`.
- `constructor` {{Optional_Inline}}
  - : Une fonction, typiquement le constructeur où un `object` a été créé. Lors de la collecte de la trace de pile, toutes les trames situées au‑dessus de l'appel le plus haut à cette fonction, y compris cet appel, sont exclues de la trace de pile.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

Un `object` est modifié sur place et se voit ajouter une propriété propre nommée `stack` dont la valeur chaîne suit le même format que {{JSxRef("Error.prototype.stack")}}. Cette propriété est non énumérable et configurable. Dans V8, il s'agit d'une paire accesseur/modificateur. Dans SpiderMonkey et JavaScriptCore, c'est une propriété de données modifiable.

## Exemples

### Utiliser la méthode `captureStackTrace()`

La fonction utilitaire `obtenirPile()` retourne la trace de pile courante au point où elle est appelée, en s'excluant elle‑même de la pile. Cela sert le même objectif de débogage que {{DOMxRef("console.trace()")}}, mais permet d'afficher une chaîne de caractères ailleurs. Notez qu'elle ne construit pas d'instance `Error` à cette fin, mais installe `stack` sur un objet simple, ce qui serait plus efficace pour nos besoins. Normalement, vous appelez `Error.captureStackTrace` sur des objets destinés à être lancés comme erreurs, comme montré dans l'exemple suivant.

```js
function obtenirPile() {
  const obj = {};
  if ("captureStackTrace" in Error) {
    // Éviter que obtenirPile elle‑même apparaisse dans la trace de pile
    Error.captureStackTrace(obj, obtenirPile);
  }
  return obj.stack;
}

function toto() {
  console.log(obtenirPile());
}

toto();
// Error
//     at toto (<anonymous>:8:15)
//     at <anonymous>:11:1
```

### Installer une trace de pile sur un objet d'erreur personnalisé

Le cas d'utilisation principal de `Error.captureStackTrace()` est d'installer une trace de pile sur un objet d'erreur personnalisé. Typiquement, on définit des [erreurs personnalisées](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error#types_derreur_personnalisés) en étendant la classe `Error`, ce qui rend automatiquement la propriété `stack` disponible par héritage. Cependant, le problème de la trace de pile par défaut est qu'elle inclut l'appel au constructeur lui‑même, ce qui divulgue des détails d'implémentation. On peut éviter cela en utilisant `Error.captureStackTrace()`, qui permet d'installer la trace de pile même pour des erreurs personnalisées qui n'héritent pas de `Error`.

```js
class MonErreur extends Error {
  constructor(message, options) {
    super(message, options);
    if ("captureStackTrace" in Error) {
      // Éviter que MonErreur elle‑même apparaisse dans la trace de pile
      Error.captureStackTrace(this, MonErreur);
    }
  }
}

const monErreur = new MonErreur("Une erreur s'est produite");
console.log(monErreur.stack);
// Error: Une erreur s'est produite
//     at <anonymous>:8:17
```

Notez que même si vous n'appellez pas `Error.captureStackTrace()` ici, certains moteurs évitent parfois d'inclure `MonErreur` dans la trace de pile si le constructeur hérite de `Error`. Appeler `Error.captureStackTrace()` est plus important pour des erreurs personnalisées qui, pour une raison quelconque, n'héritent pas de `Error`.

```js
class MonErreur {
  constructor(message) {
    this.message = message;
    if ("captureStackTrace" in Error) {
      // Éviter que MonErreur elle‑même apparaisse dans la trace de pile
      Error.captureStackTrace(this, MonErreur);
    }
  }
}

const monErreur = new MonErreur("Une erreur s'est produite");
console.log(monErreur.stack);
// Error: Une erreur s'est produite
//     at <anonymous>:8:17
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Error.prototype.stack")}}
- La propriété statique {{JSxRef("Error.stackTraceLimit")}}
- [L'API de trace de pile <sup>(angl.)</sup>](https://v8.dev/docs/stack-trace-api) dans la documentation V8
