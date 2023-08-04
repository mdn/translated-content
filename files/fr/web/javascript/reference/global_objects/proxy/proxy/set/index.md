---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
---

{{JSRef}}

La méthode **`handler.set()`** est une trappe permettant d'intercepter les opérations visant à définir ou modifier la valeur d'une propriété.

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

## Syntaxe

```js
var p = new Proxy(cible, {
  set: function (cible, propriété, valeur, récepteur) {},
});
```

### Paramètres

Les paramètres suivants sont passés à la méthode `set`. `this` est lié au gestionnaire.

- `cible`
  - : L'objet cible.
- `propriété`
  - : Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété à définir.
- `valeur`
  - : La nouvelle valeur à définir pour la propriété.
- `récepteur`
  - : L'objet intialement visé par l'affectation. Généralement ce sera le proxy lui-même. Le gestionnaire `set` peut également être appelé indirectement, via la chaîne de prototypes ou d'autres façons. Par exemple, si on exécute l'instruction `obj.nom = "Jean"`, et qu'`obj` n'est pas un proxy ni ne possède de propriété `nom` mais s'il possède un proxy dans sa chaîne de prototypes, le gestionnaire `set` sera appelé et `obj` sera passé en tant que récepteur.

### Valeur de retour

La méthode `set` doit renvoyer une valeur booléenne. Elle renvoie `true` pour indiquer que l'affectation a réussi. Si la méthode `set` renvoie false et que l'affectation était exécutée dans du code en mode strict, une exception {{jsxref("TypeError")}} sera levée.

## Description

La méthode **`handler.set`** est une trappe qui permet d'intercepter les opérations qui sont utilisées pour définir ou modifier la valeur d'une propriété.

### Interceptions

Cette trappe permet d'intercepter les opérations suivantes :

- L'affectation à des propriétés : `proxy[toto] = truc` et `proxy.toto = truc`
- L'affectation de propriétés héritées : `Object.create(proxy)[toto] = truc`
- {{jsxref("Reflect.set()")}}

### Invariants

Si les invariants suivants ne sont pas respectés, le proxy renverra une exception {{jsxref("TypeError")}} :

- Il est impossible de modifier la valeur d'une propriété pour qu'elle soit différente de la valeur de la propriété correspondante de l'objet cible si celle-ci n'est pas accessible en lecture seule et est non-configurable (pour les propriétés de données).
- Il est impossible de modifier la valeur d'une propriété si la propriété correspondante de l'objet cible est une propriété d'accesseur/mutateur dont l'attribut \[\[Set]] vaut `undefined`.
- En mode strict, si le gestionnaire `set` renvoie une valeur fausse (dans un contexte booléen), cela lèvera une exception {{jsxref("TypeError")}}.

## Exemples

Dans l'exemple qui suit, on intercepte la définition d'une nouvelle propriété.

```js
var p = new Proxy(
  {},
  {
    set: function (target, prop, value, receiver) {
      target[prop] = value;
      console.log("property set: " + prop + " = " + value);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "property set: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Proxy")}}
- {{jsxref("Proxy.handler", "handler")}}
- {{jsxref("Reflect.set()")}}
