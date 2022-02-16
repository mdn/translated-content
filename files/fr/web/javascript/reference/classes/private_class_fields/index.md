---
title: Variables de classe privés
slug: Web/JavaScript/Reference/Classes/Private_class_fields
tags:
  - Classe
  - Fonctionnalité du langage
  - JavaScript
translation_of: Web/JavaScript/Reference/Classes/Private_class_fields
---
{{JsSidebar("Classes")}}Les propriétés de classe sont publiques par défaut et peuvent être lues et modifiées à l'extérieur de la classe. Cependant, [une proposition expérimentale](https://github.com/tc39/proposal-class-fields), permettant de définir des variables privées dans une classe avec le préfixe `#`, est disponible.

## Syntaxe

    class ClassWithPrivateField {
      #privateField
    }

    class ClassWithPrivateMethod {
      #privateMethod() {
        return 'hello world'
     }
    }

    class ClassWithPrivateStaticField {
      static #PRIVATE_STATIC_FIELD
    }

## Exemples

### Champs privés statiques

Les champs privés sont accessibles depuis le constructeur et depuis l'intérieur de la déclaration de la classe elle-même.

La limitation des variables statiques ne pouvant être appelées que par des méthodes statiques tient toujours.

```js
class ClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static publicStaticMethod() {
    ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD = 42
    return ClassWithPrivateStaticField.#PRIVATE_STATIC_FIELD
  }
}

console.assert(ClassWithPrivateStaticField.publicStaticMethod() === 42)
```

Les champs statiques privés sont ajoutés au constructeur de la classe au moment de l'évaluation de classe..

Il y a une restriction de provenance sur les champs statiques privés. Seule la classe qui a défini un champ statique privé peut y accéder.

Ceci peut conduire à un comportement inattendu lors de l'utilisation de **`this`**.

```js
class BaseClassWithPrivateStaticField {
  static #PRIVATE_STATIC_FIELD

  static basePublicStaticMethod() {
    this.#PRIVATE_STATIC_FIELD = 42
    return this.#PRIVATE_STATIC_FIELD
  }
}

class SubClass extends BaseClassWithPrivateStaticField { }

let error = null

try {
  SubClass.basePublicStaticMethod()
} catch(e) { error = e}

console.assert(error instanceof TypeError)
```

### Champs d'instance privés

Les champs d'instance privés sont déclarés avec des **noms** à **#** (prononcés "_noms à hash_", "_hash names_" en anglais), qui sont des identifieurs préfixés par `#`. Le `#` fait partie du nom lui-même. Il est utilisé tant pour la déclaration que pour l'accès.

L'encapsulation est forcée par le langage. C'est une erreur de syntaxe que de faire référence aux noms à `#` en dehors de leur portée.

```js
class ClassWithPrivateField {
  #privateField

  constructor() {
    this.#privateField = 42
    this.#randomField = 666 // Erreur de syntaxe
  }
}

const instance = new ClassWithPrivateField()
instance.#privateField === 42 // Erreur de syntaxe
```

### Méthodes Privées

#### Méthodes statiques privées

Comme leur équivalents publics, les méthodes statiques privées sont appelées dans la classe elle-même, pas dans les instances de la classe. Comme les champs statiques privés, elles ne sont accessibles que depuis l'intérieur de la déclaration de la classe.

Les méthodes statiques privées peuvent être des fonctions génératrices, asynchrones et génératrices asynchrones.

```js
class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() {
        return 42
    }

    static publicStaticMethod1() {
        return ClassWithPrivateStaticMethod.#privateStaticMethod();
    }

    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

console.assert(ClassWithPrivateStaticMethod.publicStaticMethod1() === 42);
console.assert(ClassWithPrivateStaticMethod.publicStaticMethod2() === 42);
```

Cela peut conduire à un comportement inattendu lors de l'utilisation de **`this`**. Dans l'exemple suivant, `this` fait référence à la classe `Derived` (pas à la classe `Base`) lorsqu'on essaie d'appeler `Derived.publicStaticMethod2()`, et fait ainsi apparaître la même "restriction de provenance" que mentionné ci-dessus :

```js
class Base {
    static #privateStaticMethod() {
        return 42;
    }
    static publicStaticMethod1() {
        return Base.#privateStaticMethod();
    }
    static publicStaticMethod2() {
        return this.#privateStaticMethod();
    }
}

class Derived extends Base {}

console.log(Derived.publicStaticMethod1()); // 42
console.log(Derived.publicStaticMethod2()); // TypeError
```

#### Méthodes d'instance privées

Les méthodes d'instance privées sont des méthodes disponibles dans les instances de classe privées, dont l'accès est restreint de la même manière que les champs d'instance privés.

```js
class ClassWithPrivateMethod {
  #privateMethod() {
    return 'hello world'
  }

  getPrivateMessage() {
      return this.#privateMethod()
  }
}

const instance = new ClassWithPrivateMethod()
console.log(instance.getPrivateMessage())
// expected output: "hello worl​d"
```

Les méthodes d'instance privées peuvent être des fonctions génératrices, asynchones ou génératrices asynchrones. Des accesseurs (getters) et des mutateurs (setters) privés sont aussi posibles :

```js
class ClassWithPrivateAccessor {
  #message

  get #decoratedMessage() {
    return `✨${this.#message}✨`
  }
  set #decoratedMessage(msg) {
    this.#message = msg
  }

  constructor() {
    this.#decoratedMessage = 'hello world'
    console.log(this.#decoratedMessage)
  }
}

new ClassWithPrivateAccessor();
// expected output: "✨hello worl​d✨"
```

## Spécifications

| Spécification                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Public and private instance fields', '#prod-FieldDefinition', 'FieldDefinition')}} |

## Compatibilité des navigateurs

{{Compat("javascript.classes.private_class_fields")}}

## Voir aussi

- [Champs de classe publiques](/fr/docs/Web/JavaScript/Reference/Classes/Class_fields)
- [The Semantics of All JS Class Elements](https://rfrn.org/~shu/2018/05/02/the-semantics-of-all-js-class-elements.html)
