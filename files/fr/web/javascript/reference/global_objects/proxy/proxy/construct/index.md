---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Proxy
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
original_slug: Web/JavaScript/Reference/Objets_globaux/Proxy/handler/construct
---
{{JSRef}}

La méthode **`handler.construct()`** est une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Afin que l'opération `new` puisse être valide sur le proxy correspondant, la cible utilisée doit avoir une méthode interne `[[Construct]]` (autrement dit, l'instruction `new cible` doit être valide).

{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  construct: function(cible, listeArguments, newTarget) {
  }
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `construct`.  `this` est ici lié au gestionnaire (_handler_).

- `cible`
  - : L'objet cible.
- `listeArguments`
  - : La liste des arguments passés au constructeur.
- `newTarget`
  - : Le constructeur originellement appelé.

### Valeur de retour

La méthode `construct` doit renvoyer un objet.

## Description

La méthode **`handler.construct()`** est une trappe pour l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}.

### Interceptions

Ce trappe intercepte les opérations suivantes :

- `new proxy(...args)`
- {{jsxref("Reflect.construct()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :

- Le résultat doit être un `Object`.

## Exemples

Dans l'exemple qui suit, on piège l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}.

```js
var p = new Proxy(function() {}, {
  construct: function(target, argumentsList) {
    console.log("called: " + argumentsList.join(", "));
    return { value: argumentsList[0] * 10 };
  }
});

console.log(new p(1).value); // "appel sur : 1"
                             // 10
```

Dans cette version, on ne respecte pas la contrainte d'invariance :

```js
var p = new Proxy(function() {}, {
  construct: function(target, argumentsList) {
    return 1;
  }
});

new p(); // Une exception TypeError est levée
```

Dans le code qui suit, le proxy n'est pas correctement initialisé. La cible du proxy doit être un constructeur valide qui puisse être utilisé avec `new`.

```js
var p = new Proxy({}, {
  construct: function(target, argumentsList, newTarget){
    return {};
  }
});

new p(); // TypeError: p is not a constructor
```

## Spécifications

| Spécification                                                                                                                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget', '[[Construct]]')}}     | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-construct-argumentslist-newtarget', '[[Construct]]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Proxy.handler.construct")}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- L'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}
- {{jsxref("Reflect.construct()")}}
