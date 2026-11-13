---
title: "Object : propriété __proto__"
short-title: __proto__
slug: Web/JavaScript/Reference/Global_Objects/Object/proto
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!WARNING]
> Changer le `[[Prototype]]` d'un objet est, de par la manière dont les moteurs JavaScript modernes optimisent les accès aux propriétés, actuellement une opération très lente dans tous les navigateurs et moteurs JavaScript. De plus, les effets de la modification de l'héritage sont subtils et étendus, et ne se limitent pas au temps passé dans l'instruction `obj.__proto__ = ...`, mais peuvent s'étendre à **_tout_** code ayant accès à un objet dont le `[[Prototype]]` a été modifié. Vous pouvez en lire plus dans [Fondamentaux du moteur JavaScript&nbsp;: optimisation des prototypes](https://mathiasbynens.be/notes/prototypes).

> [!NOTE]
> L'utilisation de `__proto__` est controversée et déconseillée. Son existence et son comportement exact n'ont été standardisés qu'en tant que fonctionnalité héritée pour garantir la compatibilité web, tout en présentant plusieurs [problèmes de sécurité](/fr/docs/Web/Security/Attacks/Prototype_pollution) et pièges. Pour un meilleur support, préférez {{JSxRef("Object.getPrototypeOf()")}}/{{JSxRef("Reflect.getPrototypeOf()")}} et {{JSxRef("Object.setPrototypeOf()")}}/{{JSxRef("Reflect.setPrototypeOf()")}} à la place.

La propriété d'accesseur **`__proto__`** des instances de {{JSxRef("Object")}} expose le [`[[Prototype]]`](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain) (soit un objet, soit {{JSxRef("null")}}) de cet objet.

La propriété `__proto__` peut également être utilisée dans une définition de littéral d'objet pour définir le `[[Prototype]]` de l'objet lors de sa création, comme alternative à {{JSxRef("Object.create()")}}. Voir&nbsp;: [syntaxe de l'initialiseur / littéral d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer). Cette syntaxe est standard et optimisée dans les implémentations, et assez différente de `Object.prototype.__proto__`.

## Syntaxe

```js-nolint
obj.__proto__
```

### Valeur de retour

Si elle est utilisée comme accesseur, retourne le `[[Prototype]]` de l'objet.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si vous tentez de définir le prototype d'un objet [non extensible](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) ou d'un [objet exotique à prototype immuable <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/ordinary-and-exotic-objects-behaviours.html#sec-immutable-prototype-exotic-objects), tel que `Object.prototype` ou {{DOMxRef("window")}}.

## Description

La fonction d'accesseur `__proto__` expose la valeur du `[[Prototype]]` interne d'un objet. Pour les objets créés à l'aide d'un littéral d'objet (à moins que vous n'utilisiez la syntaxe du [mutateur de prototype](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#mutateur_de_prototype)), cette valeur est `Object.prototype`. Pour les objets créés à l'aide de littéraux de tableau, cette valeur est [`Array.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array). Pour les fonctions, cette valeur est {{JSxRef("Function.prototype")}}. Vous pouvez en savoir plus sur la chaîne de prototypes dans [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

Le mutateur `__proto__` permet de modifier le `[[Prototype]]` d'un objet. La valeur fournie doit être un objet ou {{JSxRef("null")}}. Fournir toute autre valeur n'a aucun effet.

Contrairement à {{JSxRef("Object.getPrototypeOf()")}} et {{JSxRef("Object.setPrototypeOf()")}}, qui sont toujours disponibles sur `Object` en tant que propriétés statiques et reflètent toujours la propriété interne `[[Prototype]]`, la propriété `__proto__` n'existe pas toujours en tant que propriété sur tous les objets et, par conséquent, ne reflète pas de manière fiable `[[Prototype]]`.

La propriété `__proto__` n'est qu'une propriété d'accesseur sur `Object.prototype` composée d'une fonction accesseur et d'une fonction mutateur. Un accès à la propriété `__proto__` qui consulte finalement `Object.prototype` trouve cette propriété, mais un accès qui ne consulte pas `Object.prototype` ne la trouve pas. Si une autre propriété `__proto__` est trouvée avant que `Object.prototype` ne soit consulté, cette propriété masque celle trouvée sur `Object.prototype`.

Les [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null) n'héritent d'aucune propriété de `Object.prototype`, y compris la propriété d'accesseur `__proto__`. Par conséquent, si vous tentez de lire `__proto__` sur un tel objet, la valeur est toujours `undefined` indépendamment du `[[Prototype]]` réel de l'objet, et toute affectation à `__proto__` crée une nouvelle propriété appelée `__proto__` au lieu de définir le prototype de l'objet. De plus, `__proto__` peut être redéfini en tant que propriété propre sur n'importe quelle instance d'objet avec {{JSxRef("Object.defineProperty()")}} sans déclencher le mutateur. Dans ce cas, `__proto__` n'est plus un accesseur pour `[[Prototype]]`. Par conséquent, il est toujours préférable d'utiliser {{JSxRef("Object.getPrototypeOf()")}} et {{JSxRef("Object.setPrototypeOf()")}} pour définir et obtenir le `[[Prototype]]` d'un objet.

## Exemples

### Utiliser la propriété `__proto__`

```js
function Cercle() {}
const forme = {};
const circle = new Cercle();

// Définit le prototype de l'objet.
// OBSOLÈTE. Ceci est uniquement à des fins d'exemple. NE FAITES PAS CELA dans du vrai code.
forme.__proto__ = circle;

// Obtient le prototype de l'objet.
console.log(forme.__proto__ === Cercle); // false
```

```js
function FormeA() {}
const FormeB = {
  a() {
    console.log("aaa");
  },
};

FormeA.prototype.__proto__ = FormeB;
console.log(FormeA.prototype.__proto__); // { a: [Function: a] }

const formeA = new FormeA();
formeA.a(); // aaa
console.log(FormeA.prototype === formeA.__proto__); // true
```

```js
function FormeC() {}
const FormeD = {
  a() {
    console.log("a");
  },
};

const formeC = new FormeC();
formeC.__proto__ = FormeD;
formeC.a(); // a
console.log(FormeC.prototype === formeC.__proto__); // false
```

```js
function Test() {}
Test.prototype.monNom = function () {
  console.log("monNom");
};

const test = new Test();
console.log(test.__proto__ === Test.prototype); // true
test.monNom(); // monNom

const obj = {};
obj.__proto__ = Test.prototype;
obj.monNom(); // monNom
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.isPrototypeOf()")}}
- La méthode statique {{JSxRef("Object.getPrototypeOf()")}}
- La méthode statique {{JSxRef("Object.setPrototypeOf()")}}
- [Attaque de pollution de prototype](/fr/docs/Web/Security/Attacks/Prototype_pollution)
