---
title: Reflect.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
---

{{JSRef}}

La méthode statique **`Reflect.getOwnPropertyDescriptor()`** est similaire à {{jsxref("Object.getOwnPropertyDescriptor()")}}. Elle renvoie un descripteur de propriété pour la propriété visée si elle existe sur l'objet, sinon, elle renvoie {{jsxref("undefined")}}.

{{InteractiveExample("JavaScript Demo: Reflect.getOwnPropertyDescriptor()")}}

```js interactive-example
const object1 = {
  property1: 42,
};

console.log(Reflect.getOwnPropertyDescriptor(object1, "property1").value);
// Expected output: 42

console.log(Reflect.getOwnPropertyDescriptor(object1, "property2"));
// Expected output: undefined

console.log(Reflect.getOwnPropertyDescriptor(object1, "property1").writable);
// Expected output: true
```

## Syntaxe

```js
Reflect.getOwnPropertyDescriptor(cible, cléPropriété);
```

### Paramètres

- `cible`
  - : L'objet cible sur lequel on cherche la propriété.
- `cléPropriété`
  - : Le nom de la propriété dont on veut obtenir le descripteur.

### Valeur de retour

Un objet qui est un descripteur de propriété si elle existe sur l'objet cible ou {{jsxref("undefined")}} dans le cas contraire.

### Exceptions

Une erreur {{jsxref("TypeError")}} si `cible` n'est pas un {{jsxref("Object")}}.

## Description

La méthode `Reflect.getOwnPropertyDescriptor` renvoie un descripteur pour la propriété demandée si celle-ci existe sur l'objet, sinon, elle renvoie {{jsxref("undefined")}}. La seule différence avec {{jsxref("Object.getOwnPropertyDescriptor()")}} est la façon dont les cibles qui ne sont pas des objets sont gérées.

## Exemples

### Utiliser `Reflect.getOwnPropertyDescriptor()`

```js
Reflect.getOwnPropertyDescriptor({ x: "coucou" }, "x");
// {value: "coucou", writable: true, enumerable: true, configurable: true}

Reflect.getOwnPropertyDescriptor({ x: "coucou" }, "y");
// undefined

Reflect.getOwnPropertyDescriptor([], "length");
// {value: 0, writable: true, enumerable: false, configurable: false}
```

### Différence avec `Object.getOwnPropertyDescriptor()`

Si le premier argument passé à la méthode n'est pas un objet (autrement dit si c'est une valeur de type primitif), cela causera une exception {{jsxref("TypeError")}}. Si on utilise {{jsxref("Object.getOwnPropertyDescriptor")}}, une valeur qui n'est pas un objet sera d'abord convertie en objet.

```js
Reflect.getOwnPropertyDescriptor("toto", 0);
// TypeError: "toto" is not non-null object

Object.getOwnPropertyDescriptor("toto", 0);
// { value: "toto", writable: false, enumerable: true, configurable: false }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Reflect")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
