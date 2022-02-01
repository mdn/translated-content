---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/isExtensible
---
{{JSRef}}

La méthode **`handler.isExtensible()`** est une trappe pour intercepter les opérations de {{jsxref("Object.isExtensible()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-isextensible.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  isExtensible: function(cible) {
  }
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `isExtensible`. `this` est ici lié au gestionnaire (_handler_).

- `cible`
  - : L'objet cible.

### Valeur de retour

La méthode `isExtensible` doit renvoyer une valeur booléenne.

## Description

La méthode **`handler.isExtensible()`** est une trappe pour intercepter {{jsxref("Object.isExtensible()")}}.

### Interceptions

Cette trappe intercepte les opérations suivantes :

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy renverra une exception  {{jsxref("TypeError")}} :

- `Object.isExtensible(proxy)` doit renvoyer la même valeur que `Object.isExtensible(cible)`.

## Exemples

Dans l'exemple qui suit, on intercepte {{jsxref("Object.isExtensible()")}}.

```js
var p = new Proxy({}, {
  isExtensible: function(cible) {
    console.log("appelée");
    return true;
  }
});

console.log(Object.isExtensible(p)); // "appelée"
                                     // true
```

Le code suivante ne respecte pas l'invariant et entraîne donc une exception.

```js
var p = new Proxy({}, {
  isExtensible: function(cible) {
    return false;
  }
});

Object.isExtensible(p); // TypeError est levée
```

## Spécifications

| Spécification                                                                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-isextensible', '[[IsExtensible]]')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-isextensible', '[[IsExtensible]]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy.handler.isExtensible")}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
