---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Classes/extends
---
{{jsSidebar("Classes")}}

Le mot-clé **`extends`** est utilisé dans les [déclarations](/fr/docs/Web/JavaScript/Reference/Instructions/class) et [expressions de classes](/fr/docs/Web/JavaScript/Reference/Opérateurs/class) afin de signifier qu'un type représenté par une classe hérite d'un autre type.

{{EmbedInteractiveExample("pages/js/classes-extends.html", "taller")}}

## Syntaxe

    class ClasseFille extends ClasseParente { ... }

## Description

Le mot-clé `extends` peut être utilisé pour créer des sous-classes de classes existantes (natives ou non).

La propriété `.prototype` d'une classe fille (aussi appelée une _extension_) doit être un {{jsxref("Object")}} ou {{jsxref("null")}}.

## Exemples

### Utiliser `extends`

Ce fragment de code est tiré de [cet exemple](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html) et crée une classe `Carré` qui hérite de `Polygone` :

```js
class Carré extends Polygone {
  constructor(longueur) {
    // On utilise le constructeur de la classe parente
    // avec le mot-clé super
    super(longueur, longueur);
    // Pour les classes dérivées, super() doit être appelé avant de
    // pouvoir utiliser 'this' sinon cela provoque une exception
    // ReferenceError
    this.nom = 'Carré';
  }

  get aire() {
    return this.hauteur * this.largeur;
  }

}
```

### Utiliser `extends` avec des objets natifs

Dans l'exemple suivant, on crée l'équivalent d'une sous-classe pour {{jsxref("Date")}} :

```js
class maDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var mois = ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'];
    return this.getDate() + "-" + mois[this.getMonth()] + "-" + this.getFullYear();
  }
}
```

Ces exemples sont extraits de ces deux pages : [démonstration](https://googlechrome.github.io/samples/classes-es6/index.html), [source](https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html).

### Étendre `null`

Étendre {{jsxref("null")}} se fait comme avec une classe normale sauf que l'objet prototype n'hérite pas de {{jsxref("Object.prototype")}}.

```js
class extensionNull extends null {
  constructor() {}
}

Object.getPrototypeOf(extensionNull); // Function.prototype
Object.getPrototypeOf(extensionNull.prototype); // null

new extensionNull(); // ReferenceError
```

## Spécifications

| Spécification                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-class-definitions', 'extends')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-class-definitions', 'extends')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.classes.extends")}}

## Voir aussi

- [Les classes](/fr/docs/Web/JavaScript/Reference/Classes)
- [`super`](/fr/docs/Web/JavaScript/Reference/Opérateurs/super)
