---
title: Object.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/valueOf
---

{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive d'un objet donné.

{{InteractiveExample("JavaScript Demo: Object.prototype.valueOf()")}}

```js interactive-example
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return this.number;
};

const object1 = new MyNumberType(4);

console.log(object1 + 3);
// Expected output: 7
```

## Syntaxe

```js
object.valueOf();
```

### Valeur de retour

La valeur primitive de l'objet appelant.

## Description

JavaScript appelle la méthode `valueOf` pour convertir un objet en une valeur primitive. Il est rarement nécessaire d'appeler soi-même la méthode `valueOf`&nbsp;; JavaScript l'invoque automatiquement lorsqu'il rencontre un objet alors qu'il attend une valeur primitive.

Par défaut, la méthode `valueOf` est héritée par tout objet descendant d'{{jsxref("Object")}}. Tous les objets globaux natifs redéfinissent cette méthode pour renvoyer une valeur appropriée. Si un objet n'a pas de valeur primitive, `valueOf` renvoie l'objet lui-même, ce qui sera affiché comme&nbsp;:

```js
[object Object]
```

`valueOf` peut être utilisée afin de convertir un objet prédéfini en une valeur primitive. Si un objet est défini dans un script, il est possible de surcharger `Object.prototype.valueOf` pour appeler une méthode personnalisée au lieu de la méthode par défaut d'`Object`.

### Surcharger `valueOf` pour des objets personnalisés

Il est possible de créer une fonction à appeler à la place de la méthode `valueOf` par défaut. Celle-ci ne peut pas recevoir de paramètres.

Supposons qu'on ait un type d'objet `monTypeDeNombre` et qu'on désire lui ajouter une méthode `valueOf` spécifique, on pourra utiliser le code suivant :

```js
monTypeDeNombre.prototype.valueOf = function () {
  return valeurPrimitive;
};
```

En utilisant ce code, chaque fois qu'un objet de type `monTypeDeNombre` sera utilisé dans un contexte où il doit être représenté comme une valeur primitive, JavaScript appellera automatiquement la fonction qui y est définie.

C'est habituellement JavaScript qui invoquera la méthode `valueOf`, mais il est aussi possible de l'appeler soi-même :

```js
monNombre.valueOf();
```

> [!NOTE]
> Les objets à utiliser dans un contexte textuel sont convertis avec la méthode {{jsxref("Object.toString", "toString()")}} ce qui est différent de la conversion d'objets {{jsxref("String")}} en valeurs primitives avec `valueOf`. Tous les objets peuvent être convertis en chaînes de caractères (la façon la plus générique étant "`[object type]`"). En revanche, la plupart des objets ne peut pas être convertie en nombre ou booléen par exemple.

## Exemples

### Utiliser `valueOf`

```js
function MonTypeDeNombre(n) {
  this.nombre = n;
}

MonTypeDeNombre.prototype.valueOf = function () {
  return this.nombre;
};

var monObj = new MonTypeDeNombre(4);
console.log(monObj + 3); // 7 car l'opération a implicitement utilisé valueOf
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.toString()")}}
- {{jsxref("parseInt()")}}
- {{jsxref("Symbol.toPrimitive")}}
