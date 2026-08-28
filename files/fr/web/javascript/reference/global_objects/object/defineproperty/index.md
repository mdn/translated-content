---
title: "Object : méthode statique defineProperty()"
short-title: defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.defineProperty()`** définit une nouvelle propriété directement sur un objet, ou modifie une propriété existante sur un objet, et retourne l'objet.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.defineProperty()")}}

```js interactive-example
const object = {};

Object.defineProperty(object, "foo", {
  value: 42,
  writable: false,
});

object.foo = 77;
// Lève une erreur en mode strict

console.log(object.foo);
// Résultat attendu : 42
```

## Syntaxe

```js-nolint
Object.defineProperty(obj, prop, descriptor)
```

### Paramètres

- `obj`
  - : L'objet sur lequel on souhaite définir la propriété.
- `prop`
  - : Une chaîne de caractères ou le symbole ({{JSxRef("Symbol")}}) définissant la clé de la propriété qui doit être définie ou modifiée.
- `descripteur`
  - : Le descripteur pour la propriété qui doit être définie ou modifiée.

### Valeur de retour

L'objet qui a été passé à la fonction et qui a éventuellement été modifié.

## Description

`Object.defineProperty()` permet d'ajouter ou de modifier de manière précise une propriété sur un objet. L'ajout normal de propriétés par [l'affectation](/fr/docs/Web/JavaScript/Reference/Operators/Assignment) crée des propriétés qui apparaissent lors de l'énumération des propriétés ({{JSxRef("Statements/for...in", "for...in")}}, {{JSxRef("Object.keys()")}}, etc.), dont les valeurs peuvent être modifiées et qui peuvent être {{JSxRef("Operators/delete", "supprimées", "", 1)}}. Cette méthode permet de modifier ces détails supplémentaires par rapport à leurs valeurs par défaut. Par défaut, les propriétés ajoutées à l'aide de `Object.defineProperty()` ne sont pas modifiables, pas énumérables et pas configurables. De plus, `Object.defineProperty()` utilise la méthode interne [`[[DefineOwnProperty]]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty), au lieu de [`[[Set]]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set), donc elle n'invoque pas les [mutateurs](/fr/docs/Web/JavaScript/Reference/Functions/set), même lorsque la propriété est déjà présente.

Les descripteurs de propriétés présents dans les objets se présentent sous deux formes principales&nbsp;: les descripteurs de données et les descripteurs d'accès. Un **descripteur de données** est une propriété avec une valeur qui peut ou non être modifiable. Un **descripteur d'accès** est une propriété décrite par une paire de fonctions accesseur et mutateur. Un descripteur doit être l'une de ces deux formes&nbsp;; il ne peut pas être les deux.

Les descripteurs de données et d'accès sont des objets. Ils partagent les clés optionnelles suivantes (veuillez noter&nbsp;: les **valeurs par défaut** mentionnées ici s'appliquent dans le cas de la définition de propriétés à l'aide de `Object.defineProperty()`)&nbsp;:

- `configurable`
  - : lorsque cela est défini sur `false`,
    - le type de cette propriété ne peut pas être modifié entre propriété de données et propriété d'accès, et
    - la propriété ne peut pas être supprimée, et
    - les autres attributs de son descripteur ne peuvent pas être modifiés (cependant, si c'est un descripteur de données avec `writable: true`, la `value` peut être modifiée, et `writable` peut être changé en `false`).

    **Par défaut sur `false`.**

- `enumerable`
  - : `true` si et seulement si cette propriété apparaît lors de l'énumération des propriétés de l'objet correspondant. **Par défaut sur `false`.**

Un **descripteur de données** possède également les clés optionnelles suivantes&nbsp;:

- `value`
  - : La valeur associée à la propriété. Peut être n'importe quelle valeur JavaScript valide (nombre, objet, fonction, etc.). **Par défaut sur {{JSxRef("undefined")}}.**
- `writable`
  - : `true` si la valeur associée à la propriété peut être modifiée avec un [opérateur d'affectation](/fr/docs/Web/JavaScript/Reference/Operators/Assignment). **Par défaut sur `false`.**

Un **descripteur d'accès** possède également les clés optionnelles suivantes&nbsp;:

- `get`
  - : Une fonction qui sert d'accesseur pour la propriété, ou {{JSxRef("undefined")}} s'il n'y a pas d'accesseur. Lorsque la propriété est consultée, cette fonction est appelée sans arguments et avec `this` défini sur l'objet par lequel la propriété est consultée (il se peut que ce ne soit pas l'objet sur lequel la propriété est définie en raison de l'héritage). La valeur de retour est utilisée comme valeur de la propriété. **Par défaut sur {{JSxRef("undefined")}}.**
- `set`
  - : Une fonction qui sert de mutateur pour la propriété, ou {{JSxRef("undefined")}} s'il n'y a pas de mutateur. Lorsque la propriété est affectée, cette fonction est appelée avec un argument (la valeur affectée à la propriété) et avec `this` défini sur l'objet par lequel la propriété est affectée. **Par défaut sur {{JSxRef("undefined")}}.**

Si un descripteur ne possède aucune des clés `value`, `writable`, `get` et `set`, il est traité comme un descripteur de données. Si un descripteur est à la fois un descripteur de données (parce qu'il a `value` ou `writable`) et un descripteur d'accès (parce qu'il a `get` ou `set`), une exception est levée.

Ces attributs ne sont pas nécessairement les propriétés propres du descripteur. Les propriétés héritées sont également prises en compte. Afin de garantir que ces valeurs par défaut sont préservées, vous pouvez geler les objets existants dans la chaîne de prototypes de l'objet descripteur dès le départ, définir toutes les options explicitement ou créer un [objet avec prototype `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null).

```js
const obj = {};
// 1. Utilise un prototype null : pas de propriétés héritées
const descripteur = Object.create(null);
descripteur.value = "static";

// n'est pas énumérable, pas configurable, pas modifiable par défaut
Object.defineProperty(obj, "key", descripteur);

// 2. Être explicite en utilisant un littéral d'objet jetable avec tous les attributs présents
Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 3. Empêche l'ajout ou la suppression des propriétés du prototype de l'objet
// (value, get, set, enumerable, writable, configurable)
Object.freeze(Object.prototype);
```

Lorsque la propriété existe déjà, `Object.defineProperty()` tente de modifier la propriété en fonction des valeurs du descripteur et de la configuration actuelle de la propriété.

Si l'ancien descripteur a son attribut `configurable` défini sur `false`, la propriété est dite _non configurable_. Il n'est pas possible de modifier un attribut d'une propriété d'accesseur non configurable, et il n'est pas possible de passer d'un type de propriété de données à un type de propriété d'accesseur. Pour les propriétés de données avec `writable: true`, il est possible de modifier la valeur et de changer l'attribut `writable` de `true` à `false`. Une {{JSxRef("TypeError")}} est levée lorsque des tentatives sont faites pour modifier les attributs d'une propriété non configurable (sauf `value` et `writable`, si autorisé), sauf lors de la définition d'une valeur identique à la valeur originale sur une propriété de données.

Lorsque la propriété actuelle est configurable, définir un attribut à `undefined` le supprime effectivement. Par exemple, si `o.k` est une propriété d'accesseur, `Object.defineProperty(o, "k", { set: undefined })` supprime le mutateur, faisant en sorte que `k` n'a qu'un accesseur et devienne en lecture seule. Si un attribut est absent du nouveau descripteur, la valeur de l'attribut du descripteur ancien est conservée (il n'est pas redéfini implicitement à `undefined`). Il est possible de basculer entre une propriété de données et une propriété d'accesseur en donnant un descripteur d'un «&nbsp;type&nbsp;» différent. Par exemple, si le nouveau descripteur est un descripteur de données (avec `value` ou `writable`), les attributs `get` et `set` du descripteur original sont tous deux supprimés.

## Exemples

### Créer une propriété

Lorsque la propriété définie n'existe pas dans l'objet, `Object.defineProperty()` crée une nouvelle propriété comme décrit. Certains champs peuvent être omis du descripteur et des valeurs par défaut sont alors attribuées à ces champs.

```js
const o = {}; // on crée un nouvel objet

// Exemple d'une propriété ajoutée avec defineProperty
// avec un descripteur de données
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// la propriété 'a' existe pour l'objet o et vaut 37

// Exemple d'une propriété ajoutée avec defineProperty
// avec un descripteur d'accesseur
let valeurB = 38;
Object.defineProperty(o, "b", {
  get: function () {
    return valeurB;
  },
  set: function (nouvelleValeur) {
    valeurB = nouvelleValeur;
  },
  enumerable: true,
  configurable: true,
});
o.b; // 38
// la propriété 'b' existe pour l'objet o et vaut 38
// La valeur de o.b est désormais toujours
// identique à valeurB, sauf si o.b est redéfini

// On ne peut pas mélanger les deux :
Object.defineProperty(o, "conflit", {
  value: 0x9f91102,
  get: function () {
    return 0xdeadbeef;
  },
});
// une exception TypeError est levée : value n'apparaît
// que dans les descripteurs de données
// get n'apparait que dans les descripteurs d'accesseur
```

### Modifier une propriété existante

Lors de la modification d'une propriété existante, la configuration actuelle de la propriété détermine si l'opérateur aboutit, ne fait rien ou lève une erreur {{JSxRef("TypeError")}}.

#### Attribut `writable`

Lorsque la propriété `writable` a la valeur `false`, on dit que la propriété «&nbsp;n'est pas modifiable&nbsp;». Elle ne peut pas être réinitialisée. Tenter d'écrire dans une propriété non modifiable ne la modifie pas et génère une erreur en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

```js
const o = {}; // On crée un nouvel objet

Object.defineProperty(o, "a", {
  value: 37,
  writable: false,
});

console.log(o.a); // 37
o.a = 25; // Aucune exception n'est levée
// (on a une exception en mode strict,
// y compris si la valeur souhaitée est la même)
console.log(o.a); // 37 ; l'affectation n'a pas fonctionné.

// En mode strict
(() => {
  "use strict";
  const o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // déclenche une TypeError: "b" est en lecture seule
  return o.b; // retourne 2 sans la ligne précédente
})();
```

#### Attribut `enumerable`

L'attribut de propriété `enumerable` définit si la propriété est prise en compte par {{JSxRef("Object.assign()")}} ou par l'opérateur [de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax). Pour les propriétés autres que {{JSxRef("Symbol")}}, il définit également si elles apparaissent ou non dans une boucle {{JSxRef("Statements/for...in","for...in")}} et dans {{JSxRef("Object.keys()")}}. Pour plus d'informations, consultez [Rattachement et caractère énumérable des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties).

```js
const o = {};
Object.defineProperty(o, "a", {
  value: 1,
  enumerable: true,
});
Object.defineProperty(o, "b", {
  value: 2,
  enumerable: false,
});
Object.defineProperty(o, "c", {
  value: 3,
}); // enumerable par défaut sur false
o.d = 4; // enumerable par défaut sur true lors de la création d'une propriété en la définissant
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (const i in o) {
  console.log(i);
}
// Journalise 'a' et 'd' (toujours dans cet ordre)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

const p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### Attribut `configurable`

L'attribut `configurable` détermine si la propriété peut être supprimée de l'objet et si ses attributs (autres que `value` et `writable`) peuvent être modifiés.

Cet exemple illustre une propriété d'accès non configurable.

```js
const o = {};
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", {
  configurable: true,
}); // lève une TypeError
Object.defineProperty(o, "a", {
  enumerable: true,
}); // lève une TypeError
Object.defineProperty(o, "a", {
  set() {},
}); // lève une TypeError (set n'est pas définit auparavant)
Object.defineProperty(o, "a", {
  get() {
    return 1;
  },
}); // lève une TypeError
// (même si la nouvelle méthode get fait exactement la même chose)
Object.defineProperty(o, "a", {
  value: 12,
}); // lève une TypeError
// ('value' peut être modifié lorsque 'configurable' est à 'false', mais uniquement si la propriété est une propriété de données modifiable)

console.log(o.a); // 1
delete o.a; // Il ne se passe rien ; une erreur est levée en mode strict.
console.log(o.a); // 1
```

Si l'attribut `configurable` de `o.a` est défini sur `true`, aucune erreur n'est levée et la propriété est supprimée à la fin.

Cet exemple illustre une propriété de données non configurable mais modifiable. La `value` de la propriété peut toujours être modifiée, et l'attribut `writable` peut toujours passer de `true` à `false`.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: true,
  configurable: false,
});
console.log(o.b); // undefined
Object.defineProperty(o, "b", {
  value: 1,
}); // Même lorsque la propriété configurable est définie sur faux, comme l'objet est modifiable, nous pouvons tout de même remplacer la valeur
console.log(o.b); // 1
o.b = 2; // Nous pouvons également changer la valeur avec les opérateurs d'affectation
console.log(o.b); // 2
// Basculer la possibilité d'écriture de la propriété
Object.defineProperty(o, "b", {
  writable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError : parce que la propriété n'est ni modifiable ni configurable, elle ne peut pas être modifiée
// À ce stade, il n'y a aucun moyen de modifier davantage 'b'
// ou de restaurer sa possibilité d'écriture
```

Cet exemple illustre une propriété de données configurable mais non modifiable. La `value` de la propriété peut toujours être remplacée avec `defineProperty` (mais pas avec les opérateurs d'affectation), et `writable` peut être basculé.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: true,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // Nous pouvons remplacer la valeur avec defineProperty
console.log(o.b); // 1
o.b = 2; // lance TypeError en mode strict : impossible de changer la valeur d'une propriété non modifiable avec une affectation
```

Cet exemple illustre une propriété de données non configurable et non modifiable. Il n'y a aucun moyen de mettre à jour un attribut de la propriété, y compris sa `value`.

```js
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError : la propriété ne peut pas être modifiée, car elle n'est ni modifiable ni configurable.
```

### Ajouter des propriétés et des valeurs par défaut

Il est important de prendre en compte la manière dont les valeurs par défaut des attributs sont appliquées. Il existe souvent une différence entre l'utilisation des [accesseurs de propriété](/fr/docs/Web/JavaScript/Reference/Operators/Property_accessors) pour attribuer une valeur et l'utilisation de `Object.defineProperty()`, comme le montre l'exemple ci-dessous.

```js
const o = {};

o.a = 1;
// est équivalent à :
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// D'un autre côté,
Object.defineProperty(o, "a", { value: 1 });
// est équivalent à :
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Accesseurs et mutateurs personnalisés

L'exemple ci-dessous montre comment implémenter un objet à archivage automatique. Lorsque la propriété `temperature` est définie, un élément est ajouté au tableau `archive`.

```js
function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("obtenir !");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = () => archive;
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```

Dans cet exemple, un accesseur retourne toujours la même valeur.

```js
const modele = {
  get() {
    return "Je retourne toujours cette chaîne de caractères, quoi que vous ayez assigné";
  },
  set() {
    this.monNom = "c'est mon nom en chaîne de caractères.";
  },
};

function EssayerDefinirSetEtGet() {
  Object.defineProperty(this, "maPropriete", modele);
}

const instance = new EssayerDefinirSetEtGet();
instance.maPropriete = "test";
console.log(instance.maPropriete);
// Je retourne toujours cette chaîne de caractères, quoi que vous ayez assigné

console.log(instance.monNom); // c'est mon nom en chaîne de caractères.
```

### Héritage des propriétés

Si une propriété d'accesseur est héritée, ses méthodes `get` et `set` sont appelées lorsque la propriété est accédée et modifiée sur des objets descendants. Si ces méthodes utilisent une variable pour stocker la valeur, cette valeur est partagée par tous les objets.

```js
function MaClasse() {}

let valeur;
Object.defineProperty(MaClasse.prototype, "x", {
  get() {
    return valeur;
  },
  set(x) {
    valeur = x;
  },
});

const a = new MaClasse();
const b = new MaClasse();
a.x = 1;
console.log(b.x); // 1
```

Cela peut être corrigé en stockant la valeur dans une autre propriété. Dans les méthodes `get` et `set`, `this` fait référence à l'objet utilisé pour accéder ou modifier la propriété.

```js
function MaClasse() {}

Object.defineProperty(MaClasse.prototype, "x", {
  get() {
    return this.xStocke;
  },
  set(x) {
    this.xStocke = x;
  },
});

const a = new MaClasse();
const b = new MaClasse();
a.x = 1;
console.log(b.x); // undefined
```

Contrairement aux propriétés d'accesseur, les propriétés de données sont toujours définies sur l'objet lui-même, et non sur un prototype. Cependant, si une propriété de données non modifiable est héritée, elle ne peut toujours pas être modifiée sur l'objet.

```js
function MaClasse() {}

MaClasse.prototype.x = 1;
Object.defineProperty(MaClasse.prototype, "y", {
  writable: false,
  value: 1,
});

const a = new MaClasse();
a.x = 2;
console.log(a.x); // 2
console.log(MaClasse.prototype.x); // 1
a.y = 2; // Ignoré, lève une exception en mode strict
console.log(a.y); // 1
console.log(MaClasse.prototype.y); // 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Énumérabilité et maîtrise des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- La méthode statique {{JSxRef("Object.defineProperties()")}}
- La méthode {{JSxRef("Object.prototype.propertyIsEnumerable()")}}
- La méthode statique {{JSxRef("Object.getOwnPropertyDescriptor()")}}
- L'opérateur {{JSxRef("Functions/get", "get")}}
- L'opérateur {{JSxRef("Functions/set", "set")}}
- La méthode statique {{JSxRef("Object.create()")}}
- La méthode statique {{JSxRef("Reflect.defineProperty()")}}
