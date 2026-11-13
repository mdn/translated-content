---
title: "Object : propriété constructor"
short-title: constructor
slug: Web/JavaScript/Reference/Global_Objects/Object/constructor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété **`constructor`** des instances de {{JSxRef("Object")}} retourne une référence à la fonction constructeur qui a créé l'objet instance. Notez que la valeur de cette propriété est une référence à _la fonction elle-même_, et non une chaîne de caractères contenant le nom de la fonction.

> [!NOTE]
> C'est une propriété des objets JavaScript. Pour la méthode `constructor` dans les classes, voir [sa propre page de référence](/fr/docs/Web/JavaScript/Reference/Classes/constructor).

## Valeur

Une référence à la fonction constructeur qui a créé l'objet instance.

{{js_property_attributes(1, 0, 1)}}

> [!NOTE]
> Cette propriété est créée par défaut sur la propriété [`prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) de chaque fonction constructeur et est héritée par tous les objets créés par ce constructeur.

## Description

Tout objet (à l'exception des [objets avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null)) possède une propriété `constructor` sur son `[[Prototype]]`. Les objets créés à l'aide de littéraux possèdent également une propriété `constructor` qui pointe vers le type de constructeur de cet objet — par exemple, les littéraux de tableau créent des objets {{JSxRef("Array")}}, et les [littéraux d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer) créent des objets simples.

```js
const o1 = {};
o1.constructor === Object; // true

const o2 = new Object();
o2.constructor === Object; // true

const a1 = [];
a1.constructor === Array; // true

const a2 = new Array();
a2.constructor === Array; // true

const n = 3;
n.constructor === Number; // true
```

## Exemples

### Afficher le constructeur d'un objet

L'exemple ci-dessous crée un constructeur (`Arbre`) et un objet de ce type( `monArbre`). L'exemple affiche ensuite la propriété `constructor` de l'objet `monArbre`.

```js
function Arbre(nom) {
  this.nom = nom;
}

const monArbre = new Arbre("Sequoia");
console.log("monArbre.constructor vaut " + monArbre.constructor);
```

Cet exemple produit le résultat suivant&nbsp;:

```js
monArbre.constructor vaut function Arbre(nom) {
  this.nom = nom;
}
```

### Affecter la propriété constructor à un objet

On peut affecter la propriété `constructor` des objets non primitifs.

```js
const arr = [];
arr.constructor = String;
arr.constructor === String; // true
arr instanceof String; // false
arr instanceof Array; // true

const toto = new Toto();
toto.constructor = "truc";
toto.constructor === "truc"; // true

// etc.
```

Cela ne remplace pas l'ancienne propriété `constructor`&nbsp;: celle-ci figurait à l'origine dans le `[[Prototype]]` de l'instance, et non en tant que propriété propre à celle-ci.

```js
const arr = [];
Object.hasOwn(arr, "constructor"); // false
Object.hasOwn(Object.getPrototypeOf(arr), "constructor"); // true

arr.constructor = String;
Object.hasOwn(arr, "constructor"); // true — la propriété de l'instance masque celle de son prototype
```

Mais même lorsque `Object.getPrototypeOf(a).constructor` est réaffecté, cela ne change pas les autres comportements de l'objet. Par exemple, le comportement de `instanceof` est contrôlé par [`Symbol.hasInstance`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance), et non par `constructor`&nbsp;:

```js
const arr = [];
arr.constructor = String;
arr instanceof String; // false
arr instanceof Array; // true
```

Il n'existe rien pour protéger la propriété `constructor` contre la réaffectation ou le masquage, donc l'utiliser pour détecter le type d'une variable doit généralement être évité au profit de méthodes moins fragiles comme `instanceof` et [`Symbol.toStringTag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) pour les objets, ou [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof) pour les types primitifs.

### Changer le constructeur du prototype d'une fonction constructeur

Chaque constructeur a une propriété [`prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype), qui devient le `[[Prototype]]` de l'instance lorsqu'il est appelé avec l'opérateur {{JSxRef("new")}}. `ConstructorFunction.prototype.constructor` devient donc une propriété du `[[Prototype]]` de l'instance, comme démontré précédemment.

Cependant, si `ConstructorFunction.prototype` est réaffecté, la propriété `constructor` est perdue. Par exemple, ce qui suit est une manière courante de créer un modèle d'héritage&nbsp;:

```js
function Parent() {
  // …
}
Parent.prototype.methodeParent = function () {};

function Enfant() {
  Parent.call(this); // Assurez-vous que tout est correctement initialisé
}
// Redirige le [[Prototype]] de Enfant.prototype vers Parent.prototype
Enfant.prototype = Object.create(Parent.prototype);
```

Le `constructor` des instances de `Enfant` est `Parent` en raison de la réaffectation de `Enfant.prototype`.

En général, ce n'est pas un gros problème — le langage ne lit presque jamais la propriété `constructor` d'un objet. La seule exception est l'utilisation de [`[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species) pour créer de nouvelles instances d'une classe, mais de tels cas sont rares, et vous devez de toute façon utiliser la syntaxe [`extends`](/fr/docs/Web/JavaScript/Reference/Classes/extends) pour sous-classer les objets intégrés.

Cependant, il est crucial de s'assurer que `Enfant.prototype.constructor` pointe toujours vers `Enfant` lui-même lorsque certains appelants utilisent `constructor` pour accéder à la classe d'origine à partir d'une instance. Prenons le cas suivant&nbsp;: l'objet possède la méthode `create()` pour se créer lui-même.

```js
function Parent() {
  // …
}
function ConstructeurCree() {
  Parent.call(this);
}

ConstructeurCree.prototype = Object.create(Parent.prototype);

ConstructeurCree.prototype.create = function () {
  return new this.constructor();
};

new ConstructeurCree().create().create(); // TypeError: new ConstructeurCree().create().create is undefined, since constructor === Parent
```

Dans l'exemple ci-dessus, une exception est levée, puisque le `constructor` pointe vers `Parent`. Pour éviter cela, il suffit d'assigner le constructeur nécessaire que vous allez utiliser.

```js
function Parent() {
  // …
}
function ConstructeurCree() {
  // …
}

ConstructeurCree.prototype = Object.create(Parent.prototype, {
  // Retourne le constructeur original à Enfant
  constructor: {
    value: ConstructeurCree,
    enumerable: false, // Rend non-énumérable, afin qu'elle n'apparaisse pas dans les boucles `for...in`
    writable: true,
    configurable: true,
  },
});

ConstructeurCree.prototype.create = function () {
  return new this.constructor();
};

new ConstructeurCree().create().create(); // c'est très bien
```

Notez que lorsque vous ajoutez manuellement la propriété `constructor`, il est crucial de rendre la propriété [non-énumérable](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties), afin que `constructor` ne soit pas visité dans les boucles [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) — comme c'est normalement le cas.

Si le code ci-dessus vous semble trop verbeux, vous pouvez également envisager d'utiliser [`Object.setPrototypeOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf) pour manipuler la chaîne de prototypes.

```js
function Parent() {
  // …
}
function ConstructeurCree() {
  // …
}

Object.setPrototypeOf(ConstructeurCree.prototype, Parent.prototype);

ConstructeurCree.prototype.create = function () {
  return new this.constructor();
};

new ConstructeurCree().create().create(); // ça fonctionne toujours sans recréer la propriété constructor
```

`Object.setPrototypeOf()` présente des inconvénients potentiels en termes de performance, car tous les objets précédemment créés impliqués dans la chaîne de prototypes doivent être recompilés&nbsp;; mais si le code d'initialisation ci-dessus s'exécute avant que `Parent` ou `ConstructeurCree` ne soient construits, l'effet doit être minimal.

Considérons un cas un peu plus complexe.

```js
function ParentAvecStatic() {}

ParentAvecStatic.startPosition = { x: 0, y: 0 }; // Propriété membre statique
ParentAvecStatic.getStartPosition = function () {
  return this.startPosition;
};

function Enfant(x, y) {
  this.position = { x, y };
}

Enfant.prototype = Object.create(ParentAvecStatic.prototype, {
  // Retourne le constructeur original à Enfant
  constructor: {
    value: Enfant,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});

Enfant.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  // Utilise this.constructor, en espérant que getStartPosition existe en tant que méthode statique
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

new Enfant(1, 1).getOffsetByInitialPosition();
// Erreur : this.constructor.getStartPosition est undefined, car le
// constructeur est Enfant, qui n'a pas la méthode statique getStartPosition
```

Pour que cet exemple fonctionne correctement, nous pouvons réaffecter les propriétés statiques de `ParentAvecStatic` à `Enfant`&nbsp;:

```js
// …
Object.assign(Enfant, ParentAvecStatic); // Notez que nous l'assignons avant de créer() un prototype ci-dessous
Enfant.prototype = Object.create(ParentAvecStatic.prototype, {
  // Retourne le constructeur original à Enfant
  constructor: {
    value: Enfant,
    enumerable: false,
    writable: true,
    configurable: true,
  },
});
// …
```

Mais encore mieux, nous pouvons faire en sorte que les fonctions constructrices elles-mêmes s'étendent les unes aux autres, comme le font les classes avec [`extends`](/fr/docs/Web/JavaScript/Reference/Classes/extends).

```js
function ParentAvecStatic() {}

ParentAvecStatic.startPosition = { x: 0, y: 0 }; // Propriété membre statique
ParentAvecStatic.getStartPosition = function () {
  return this.startPosition;
};

function Enfant(x, y) {
  this.position = { x, y };
}

// Crée correctement l'héritage !
Object.setPrototypeOf(Enfant.prototype, ParentAvecStatic.prototype);
Object.setPrototypeOf(Enfant, ParentAvecStatic);

Enfant.prototype.getOffsetByInitialPosition = function () {
  const position = this.position;
  const startPosition = this.constructor.getStartPosition();

  return {
    offsetX: startPosition.x - position.x,
    offsetY: startPosition.y - position.y,
  };
};

console.log(new Enfant(1, 1).getOffsetByInitialPosition()); // { offsetX: -1, offsetY: -1 }
```

Encore une fois, l'utilisation de `Object.setPrototypeOf()` peut avoir des effets négatifs sur les performances, donc assurez-vous que cela se produise immédiatement après la déclaration du constructeur et avant la création de toute instance — pour éviter que les objets ne soient «&nbsp;contaminés&nbsp;».

> [!NOTE]
> La mise à jour ou la définition manuelle du constructeur peut entraîner des conséquences différentes et parfois déroutantes. Pour éviter cela, définissez simplement le rôle de `constructor` dans chaque cas spécifique. Dans la plupart des cas, `constructor` n'est pas utilisé et il n'est pas nécessaire de le réaffecter.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'opérateur {{JSxRef("Statements/class", "class")}}
- L'opérateur {{JSxRef("Classes/constructor", "constructor")}}
- L'entrée du glossaire {{Glossary("Constructor", "Constructeur")}}
