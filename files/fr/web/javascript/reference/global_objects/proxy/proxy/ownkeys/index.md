---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/ownKeys
---
{{JSRef}}

La méthode **`handler.ownKeys()`** est une trappe pour {{jsxref("Object.getOwnPropertyNames()")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-ownkeys.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  ownKeys: function(cible) {
  }
});
```

### Paramètres

Le paramètre suivant est passé à la méthode `ownKeys`. `this` est lié au gestionnaire.

- `cible`
  - : L'objet cible.

### Valeur de retour

La méthode `ownKeys` doit renvoyer un objet énumérable.

## Description

La méthode **`handler.ownKeys()`** est une trappe pour intercepter les opérations de {{jsxref("Object.getOwnPropertyNames()")}}.

### Interceptions

Cette trappe permet d'intercepter les opérations suivantes :

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Reflect.ownKeys()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :

- Le résultat de `ownKeys` doit être un tableau.
- Le type de chaque élément de ce tableau est soit une {{jsxref("String")}}, soit un {{jsxref("Symbol")}}.
- Le tableau résultant doit contenir les clés de toutes les propriétés propres non-configurables de l'objet cible.
- Si l'objet cible n'est pas extensible, la liste obtenue doit contenir toutes les clés pour les propriétés propres et aucune autre valeur.

## Exemples

Dans l'exemple suivant, on intercepte l'action de {{jsxref("Object.getOwnPropertyNames()")}}.

```js
var p = new Proxy({}, {
  ownKeys: function(target) {
    console.log("appelée");
    return ["a", "b", "c"];
  }
});

console.log(Object.getOwnPropertyNames(p)); // "appelée"
                                            // [ "a", "b", "c"]
```

L'exemple suivant ne respecte pas l'ensemble des invariants :

```js example-bad
var obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10 }
);

var p = new Proxy(obj, {
  ownKeys: function(cible) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  }
});

console.log(Object.getOwnPropertyNames(p));
// TypeError est levée
```

## Spécifications

| Spécification                                                                                                                                                    | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys', '[[OwnPropertyKeys]]')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-ownpropertykeys', '[[OwnPropertyKeys]]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy.handler.ownKeys")}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Reflect.ownKeys()")}}
