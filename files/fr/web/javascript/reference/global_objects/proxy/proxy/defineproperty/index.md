---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/defineProperty
---
{{JSRef}}

La méthode **`handler.defineProperty()`** est une trappe pour {{jsxref("Object.defineProperty()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  defineProperty: function(cible, propriété, descripteur) {
  }
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `defineProperty`. `this` est ici lié au gestionnaire.

- `cible`
  - : L'objet cible.
- `propriété`
  - : Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété dont on veut modifier la description.
- `descripteur`
  - : Le descripteur de la propriété qui est à modifier ou à définir.

### Valeur de retour

La méthode `defineProperty()` doit renvoyer un booléen qui indique si la propriété a correctement été définie sur la cible.

## Description

La méthode **`handler.defineProperty()`** est une trappe pour {{jsxref("Object.defineProperty()")}}.

### Interceptions

Cette trappe intercepte les opérations suivantes :

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}

### Invariants

Si les contraintes d'invariances suivantes ne sont pas respectées, le proxy renverra une exception {{jsxref("TypeError")}} :

- Une propriété ne peut pas être ajoutée si l'objet cible n'est pas extensible.
- Une propriété ne peut pas être ajoutée ou modifiée pour être rendue non-configurable si elle n'existe pas comme une propriété propre non-configurable de l'objet cible.
- Une propriété ne peut pas être non-configurable s'il existe une propriété correspondante de l'objet cible qui est configurable.
- Si une propriété correspondante existe pour l'objet cible `Object.defineProperty(cible, propriété, descripteur)` ne lèvera pas d'exception.
- En mode stricte, si le gestionnaire defineProperty renvoie une valeur fausse (dans un contexte booléen), cela entraînera une exception {{jsxref("TypeError")}}.

## Exemples

Dans le code suivant, on piège l'appel à {{jsxref("Object.defineProperty()")}}.

```js
var p = new Proxy({}, {
  defineProperty: function(target, prop, descriptor) {
    console.log("appelé avec : " + prop);
  }
});

var desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, "a", desc); // "appelé avec : a"
```

Lorsqu'on appelle {{jsxref("Object.defineProperty()")}} ou {{jsxref("Reflect.defineProperty()")}}, le descripteur passé à la trappe `defineProperty` doit respecter une contrainte : seules les propriétés suivants sont utilisables, les propriétés non-standards seront ignorées :

- `enumerable`
- `configurable`
- `writable`
- `value`
- `get`
- `set`

```js
var p = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(descriptor);
    return Reflect.defineProperty(target, prop, descriptor);
  }
});

Object.defineProperty(p, "name, {
  value: "proxy",
  type: "custom"
});
// { value: "proxy" }
```

## Spécifications

| Spécification                                                                                                                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc', '[[DefineOwnProperty]]')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-defineownproperty-p-desc', '[[DefineOwnProperty]]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy.handler.defineProperty")}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}
