---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/has
---
{{JSRef}}

La méthode **`handler.has()`** est une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}}.

{{EmbedInteractiveExample("pages/js/proxyhandler-has.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  has: function(cible, prop) {
  }
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `has`. `this` est lié au gestionnaire.

- `cible`
  - : L'objet cible.
- `prop`
  - : Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété dont on veut connaître l'existence.

### Valeur de retour

La méthode `has` doit renvoyer une valeur booléenne.

## Description

La méthode **`handler.has`** est une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}}.

### Interceptions

Cette trappe permet d'intercepter les opérations suivantes :

- L'accès à une propriété : `toto in proxy`
- L'accès à une propriété héritée : `toto in Object.create(proxy)`
- Accès via l'instruction [`with`](/fr/docs/Web/JavaScript/Reference/Instructions/with) : `with(proxy) { (foo); }`
- {{jsxref("Reflect.has()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy lèvera une exception {{jsxref("TypeError")}} :

- Une propriété ne peut pas être indiquée comme non-existante s'il existe une propriété correspondante de l'objet cible qui est une propriété propre et non-configurable.
- Une propriété ne peut pas être indiquée comme non-existante s'il existe une propriété correspondante propre sur l'objet cible et que celui-ci n'est pas extensible.

## Exemples

Dans l'exemple qui suit, on intercepte l'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}} :

```js
var p = new Proxy({}, {
  has: function(cible, prop) {
    console.log("appelée : " + prop);
    return true;
  }
});

console.log("a" in p); // "appelée : a"
                       // true
```

L'exemple suivant ne respecte pas un invariant :

```js
var obj = { a: 10 };
Object.preventExtensions(obj);
var p = new Proxy(obj, {
  has: function(cible, prop) {
    return false;
  }
});

"a" in p; // TypeError levée
```

## Spécifications

| Spécification                                                                                                                                            | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p', '[[HasProperty]]')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-hasproperty-p', '[[HasProperty]]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy.handler.has")}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- L'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}}
- {{jsxref("Reflect.has()")}}
