---
title: "Object : méthode statique setPrototypeOf()"
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

La méthode statique **`Object.setPrototypeOf()`** définit le prototype (c'est-à-dire la propriété `[[Prototype]]` interne) de l'objet défini par un autre objet ou {{JSxRef("null")}}.

> [!WARNING]
> Changer le `[[Prototype]]` d'un objet est, par la nature des moteurs JavaScript modernes et la façon dont ils optimisent les accès aux propriétés, actuellement une opération très lente dans tous les navigateurs et moteurs JavaScript. De plus, les effets de la modification de l'héritage sont subtils et étendus, et ne se limitent pas au temps passé dans l'instruction `Object.setPrototypeOf(...)`, mais peuvent s'étendre à **_tout_** code ayant accès à un objet dont le `[[Prototype]]` a été modifié. Vous pouvez en lire davantage dans [Fondamentaux des moteurs JavaScript&nbsp;: optimisation des prototypes <sup>(angl.)</sup>](https://mathiasbynens.be/notes/prototypes).
>
> Parce que cette fonctionnalité fait partie du langage, il incombe toujours aux développeur·euse·s de moteurs de l'implémenter de manière performante (idéalement). Jusqu'à ce que les développeur·euse·s de moteurs résolvent ce problème, si vous vous souciez des performances, vous devez éviter de définir le `[[Prototype]]` d'un objet. À la place, créez un nouvel objet avec le `[[Prototype]]` souhaité en utilisant {{jsxref("Object.create()")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.setPrototypeOf()")}}

```js interactive-example
const obj = {};
const parent = { toto: "truc" };

console.log(obj.toto);
// Résultat attendu : undefined

Object.setPrototypeOf(obj, parent);

console.log(obj.toto);
// Résultat attendu : "truc"
```

## Syntaxe

```js-nolint
Object.setPrototypeOf(obj, prototype)
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite définir le prototype.
- `prototype`
  - : Le nouveau prototype de l'objet (un objet ou {{JSxRef("null")}}).

### Valeur de retour

L'objet défini.

### Exceptions

- {{jsxref("TypeError")}}
  - : Une exception est levée dans l'un des cas suivants&nbsp;:
    - Le paramètres `obj` est `undefined` ou `null`.
    - Le paramètre `obj` n'est [pas extensible](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible), ou c'est un [objet exotique à prototype immuable <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), tel que `Object.prototype` ou {{domxref("window")}}. Cependant, l'erreur n'est pas levée si le nouveau prototype est la même valeur que le prototype original de `obj`.
    - Le paramètre `prototype` n'est pas un objet ou {{JSxRef("null")}}.

## Description

`Object.setPrototypeOf()` est généralement considéré comme la manière appropriée de définir le prototype d'un objet. Vous devez toujours l'utiliser plutôt que l'accesseur obsolète [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto).

Si le paramètre `obj` n'est pas un objet (par exemple, un nombre, une chaîne de caractères, etc.), cette méthode ne fait rien — sans le convertir en objet ni tenter de définir son prototype — et retourne directement `obj` en tant que valeur primitive. Si `prototype` a la même valeur que le prototype de `obj`, alors `obj` est directement retourné, sans provoquer de `TypeError` même lorsque `obj` a un prototype immuable.

Pour des raisons de sécurité, certains objets intégrés sont conçus pour avoir un _prototype immuable_. Cela empêche les [attaques de pollution de prototype](/fr/docs/Web/Security/Attacks/Prototype_pollution), en particulier celles liées aux [mandataires]((https://github.com/tc39/ecma262/issues/272). Le langage de base ne définit que `Object.prototype` comme un objet exotique à prototype immuable, dont le prototype est toujours `null`. Dans les navigateurs, [`window`](/fr/docs/Web/API/Window) et [`location`](/fr/docs/Web/API/Window/location) sont deux autres exemples très courants.

```js
Object.isExtensible(Object.prototype); // true ; vous pouvez ajouter plus de propriétés
Object.setPrototypeOf(Object.prototype, {}); // TypeError: Impossible de définir le prototype de l'objet exotique à prototype immuable '#<Object>'
Object.setPrototypeOf(Object.prototype, null); // Pas d'erreur ; le prototype de `Object.prototype` est déjà `null`
```

## Exemples

### Héritage pseudo-classique utilisant `Object.setPrototypeOf()`

L'héritage en JS utilisant les classes.

```js
class Humain {}
class SuperHero extends Humain {}

const superMan = new SuperHero();
```

Cependant, si nous voulons implémenter des sous-classes sans utiliser `class`, nous pouvons faire ce qui suit&nbsp;:

```js
function Humain(nom, niveau) {
  this.nom = nom;
  this.niveau = niveau;
}

function SuperHero(nom, niveau) {
  Humain.call(this, nom, niveau);
}

Object.setPrototypeOf(SuperHero.prototype, Humain.prototype);

// Définit le `[[Prototype]]` de `SuperHero.prototype`
// à `Humain.prototype`
// Pour définir la chaîne d'héritage de prototype

Humain.prototype.parler = function () {
  return `${this.nom} dit bonjour.`;
};

SuperHero.prototype.voler = function () {
  return `${this.nom} est en train de voler.`;
};

const superMan = new SuperHero("Clark Kent", 1);

console.log(superMan.voler());
console.log(superMan.parler());
```

La similitude entre l'héritage classique (avec les classes) et l'héritage pseudo-classique (avec la propriété `prototype` des constructeurs) comme montré ci-dessus est mentionnée dans [Chaînes d'héritage](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#construire_de_longues_chaînes_dhéritage).

Comme la propriété [`prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) des constructeurs de fonctions est modifiable, vous pouvez la réaffecter à un nouvel objet créé avec [`Object.create()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create#classical_inheritance_with_object.create) pour obtenir la même chaîne d'héritage. Il y a des points auxquels il faut faire attention lors de l'utilisation de `create()`, comme se rappeler de ré-ajouter la propriété [`constructor`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor).

Dans l'exemple ci-dessous, qui utilise également des classes, `SuperHero` est fait pour hériter de `Humain` sans utiliser `extends` en utilisant `setPrototypeOf()` à la place.

> [!WARNING]
> Il n'est pas conseillé d'utiliser `setPrototypeOf()` à la place de `extends` pour des raisons de performance et de lisibilité.

```js
class Humain {}
class SuperHero {}

// Définit les propriétés d'instance
Object.setPrototypeOf(SuperHero.prototype, Humain.prototype);

// Définit les propriétés statiques
Object.setPrototypeOf(SuperHero, Humain);

const superMan = new SuperHero();
```

L'héritage sans `extends` est mentionné dans [le sous-classement ES-6 <sup>(angl.)</sup>](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.setPrototypeOf` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- La méthode statique {{jsxref("Reflect.setPrototypeOf()")}}
- La méthode {{jsxref("Object.prototype.isPrototypeOf()")}}
- La méthode statique {{jsxref("Object.getPrototypeOf()")}}
- La propriété [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- [Chaînes d'héritage](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain#construire_de_longues_chaînes_dhéritage)
- [ES6 en profondeur&nbsp;: sous-classement <sup>(angl.)</sup>](https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/) sur hacks.mozilla.org (2015)
