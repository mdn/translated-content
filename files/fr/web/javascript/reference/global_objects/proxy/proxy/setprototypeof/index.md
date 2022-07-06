---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/setPrototypeOf
---
{{JSRef}}

La méthode **`handler.setPrototypeOf()`** est une trappe pour intercepter {{jsxref("Object.setPrototypeOf()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-setprototypeof.html", "taller", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  setPrototypeOf: function(cible, prototype) {
  }
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `setPrototypeOf`. `this` est lié au gestionnaire.

- `cible`
  - : L'objet cible.
- `prototype`
  - : Le nouveau prototype de l'objet ou `null`.

### Valeur de retour

La méthode `setPrototypeOf` renvoie `true` si la propriété interne `[[Prototype]]` a bien été modifiée et `false` sinon.

## Description

La méthode **`handler.setPrototypeOf`** est une trappe utilisée pour intercepter les opérations de {{jsxref("Object.setPrototypeOf()")}}.

### Interceptions

Cette trappe permet d'intercepter :

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :

- Si `cible` n'est pas extensible, le paramètre `prototype` doit être le même valeur que `Object.getPrototypeOf(cible)`.

## Exemples

Si on souhaite interdire la définition d'un nouveau prototype pour un objet, on peut utiliser une méthode `setPrototypeOf` qui renvoie `false` ou qui génère une exception.

Avec cette première approche, toute opération qui voudra modifier le prototype génèrera une exception. On aura par exemple {{jsxref("Object.setPrototypeOf()")}} qui créera et lèvera l'exception `TypeError`. Si la modification est effectuée par une opération qui ne génère pas d'exception en cas d'échec (comme  {{jsxref("Reflect.setPrototypeOf()")}}), aucune exception ne sera générée.

```js
var handlerReturnsFalse = {
    setPrototypeOf(target, newProto) {
        return false;
    }
};

var newProto = {}, target = {};

var p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto);
// lève une TypeError
Reflect.setPrototypeOf(p1, newProto);
// renvoie false
```

Avec cette seconde approche, toute tentative de modification génèrera une exception. On utilisera celle-ci lorsqu'on souhaite qu'une erreur se produisent, y compris pour les opérations qui ne génèrent habituellement pas d'exception ou si on souhaite générer une exception sur mesure.

```js
var handlerThrows = {
    setPrototypeOf(target, newProto) {
        throw new Error("erreur custom");
    }
};

var newProto = {}, target = {};

var p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto);
// lève une exception new Error("erreur custom")
Reflect.setPrototypeOf(p2, newProto);
// lève une exception new Error("erreur custom")
```

## Spécifications

| Spécification                                                                                                                                                    | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v', '[[SetPrototypeOf]]')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-setprototypeof-v', '[[SetPrototypeOf]]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy.handler.setPrototypeOf")}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}
