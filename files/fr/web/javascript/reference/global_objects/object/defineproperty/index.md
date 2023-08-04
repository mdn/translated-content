---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
---

{{JSRef}}

La méthode statique **`Object.defineProperty()`** permet de définir une nouvelle propriété ou de modifier une propriété existante, directement sur un objet. La méthode renvoie l'objet modifié.

> **Note :** Cette méthode est directement appelée via le constructeur {{jsxref("Object")}} plutôt que sur les instances de type `Object`.

{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}

## Syntaxe

```js
Object.defineProperty(obj, prop, descripteur);
```

### Paramètres

- `obj`
  - : L'objet sur lequel on souhaite définir ou modifier une propriété.
- `prop`
  - : Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété qu'on définit ou qu'on modifie.
- `descripteur`
  - : Le descripteur de la propriété qu'on définit ou qu'on modifie.

### Valeur de retour

L'objet qui a été passé à la fonction et qui a éventuellement été modifié.

## Description

Cette méthode permet d'ajouter ou de modifier une propriété d'un objet avec une certaine précision. En effet, quand on ajoute une propriété « normalement » (via une affectation), on crée une propriété dont le comportement par défaut fait qu'elle sera listée dans une énumération de propriétés (par exemple avec une boucle {{jsxref("Instructions/for...in","for...in")}} ou via la méthode {{jsxref("Object.keys")}}), dont la valeur peut être changée et qui peut être supprimée via {{jsxref("Opérateurs/L_opérateur_delete","delete")}}. La méthode `Object.defineProperty()` permet de préciser le comportement attendu, potentiellement différent de celui par défaut.

Les descripteurs de propriété existent en deux versions : les descripteurs de données et les descripteurs d'accesseur. Un descripteur de données est une propriété qui possède une valeur et qui peut ou non être accessible en écriture. Un descripteur d'accesseur est une propriété décrite par une paire d'accesseur/mutateur (_getter/setter_) qui sont des fonctions. Un descripteur est un descripteur de données ou un descripteur d'accesseur, il ne peut pas être les deux.

Les descripteurs de données et d'accesseur sont des objets. Ils partagent les propriétés suivantes (la valeur par défaut indiquée est utilisée lorsqu'on passe par `Object.defineProperty()`) :

- `configurable`
  - : `true` si et seulement si le type de ce descripteur de propriété peut être changé et si la propriété peut/pourra être supprimée de l'objet correspondant..
    **La valeur par défaut est `false`.**
- `enumerable`
  - : `true` si et seulement si la propriété apparaît lors de l'énumération des propriétés de l'objet correspondant. **La valeur par défaut est `false`.**

Un descripteur de données possède les propriétés optionnelles suivantes :

- `value`
  - : La valeur associée à la propriété. Peut être n'importe quelle valeur JavaScript valide (un nombre, un objet, etc.).
    **La valeur par défaut est {{jsxref("undefined")}}.**
- `writable`
  - : `true` si et seulement si la valeur associée à la propriété peut être modifiée en utilisant un {{jsxref("Opérateurs/Opérateurs_d_affectation", "opérateur d'affectation", "", 1)}}. **La valeur par défaut est `false`.**

Un descripteur d'accesseur possède les propriétés optionnelles suivantes :

- `get`
  - : Une fonction qui est utilisée comme accesseur (_getter_) pour la propriété ou bien {{jsxref("undefined")}} s'il n'existe pas d'accesseur. La valeur de retour de la fonction sera utilisée comme valeur pour la propriété. Lorsqu'on accède à la propriété, la fonction est appelée sans argument avec `this` qui est l'objet pour lequel on souhaite consulter la propriété. **La valeur par défaut est {{jsxref("undefined")}}**.
- `set`
  - : Une fonction qui est utilisée comme mutateur (_setter_) pour la propriété ou bien {{jsxref("undefined")}} s'il n'existe pas de mutateur. Pour unique argument, la fonction recevra la nouvelle valeur à affecter à la propriété. Le contexte `this` passé est l'objet sur lequel on souhaite modifier la propriété.
    **La valeur par défaut est {{jsxref("undefined")}}**.

Si un descripteur ne possède aucune des clés `value`, `writable`, `get` ou `set`, il est considéré comme un descripteur de données. Si un descripteur possède à la fois une propriété `value` ou `writable` et une propriété `get` ou `set`, un exception sera déclenchée.

Il faut garder à l'esprit que ces options ne sont pas nécessairement les descripteurs des propriétés propres. Elles peuvent être héritées et faire partie de la chaine des prototypes. Afin de s'assurer que les valeur par défaut sont préservées, on peut d'abord geler le prototype {{jsxref("Object.prototype")}}, définir toutes les options explicitement ou faire pointer la propriété [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) vers {{jsxref("null")}} (par exemple avec {{jsxref("Object.create","Object.create(null)")}}).

```js
var obj = {};
// en utilisant __proto__
Object.defineProperty(obj, "clé", {
  __proto__: null, // aucune propriété héritée
  value: "static", // non énumérable
  // non configurable
  // non accessible en écriture
  // par défaut
});

// en étant explicite
Object.defineProperty(obj, "clé", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// en recyclant un objet
function avecValeur(valeur) {
  var d =
    avecValeur.d ||
    (avecValeur.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null,
    });
  if (d.value !== valeur) {
    d.value = valeur;
  }
  return d;
}
// ... autres instructions... puis
Object.defineProperty(obj, "clé", avecValeur("static"));

// si la méthode freeze est disponible,
// on peut empêcher que du code ajoute des
// propriétés (valeur, get, set, enumerable,
// writable, configurable) au prototype d'Object
(Object.freeze || Object)(Object.prototype);
```

## Exemples

Pour plus d'exemples utilisant la méthode `Object.defineProperty` avec une syntaxe de masque binaire, voir [les exemples supplémentaires](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty/Exemples_supplémentaires).

### Créer une propriété

Lorsqu'une propriété n'existe pas pour l'objet, `Object.defineProperty()` créera une nouvelle propriété telle qu'elle est décrite. Certains champs du descripteur peuvent manquer, les valeurs par défaut seront alors utilisées. Tous les booléens ont `false` pour valeur par défaut. Une propriété définie sans `get`/`set`/`value`/`writable` est appelée « générique » et « correspond » à un descripteur de données.

```js
var o = {}; // on crée un nouvel objet

// Exemple d'une propriété ajoutée via defineProperty
// avec un descripteur de données
Object.defineProperty(o, "a", {
  value: 37,
  writable: true,
  enumerable: true,
  configurable: true,
});
// la propriété 'a' existe pour l'objet o et vaut 37

// Exemple d'une propriété ajoutée via defineProperty
// avec un descripteur d'accesseur
var valeurB = 38;
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
// la propriété 'b' existe pour l'objet o
// et vaut 38
// La valeur de o.b est désormais toujours
// identique à valeurB, sauf si o.b est redéfini

// On ne peut pas mélanger les deux :
Object.defineProperty(o, "conflit", {
  value: 0x9f91102,
  get: function () {
    return 0xdeadbeef;
  },
});
// une exception TypeError sera lancée : value n'apparaît
// que dans les descripteurs de données
// get n'apparait que dans les descripteurs d'accesseur
```

### Modifier une propriété existante

Quand une propriété existe d'ores et déjà pour un objet, `Object.defineProperty()` tentera de modifier la propriété pour qu'elle corresponde aux valeurs indiquées dans le descripteur et à la configuration de l'objet courant. Si l'ancien descripteur avait `configurable` à `false` (la propriété est dite non-configurable), aucun attribut, à l'exception de `writable`, ne peut être changé. Dans ce cas, il n'est pas possible de changer entre les types de descripteur.

Si une propriété est non-configurable, son attribut `writable` ne peut être mis qu'à `false`.

Une exception {{jsxref("TypeError")}} peut être levée quand on essaie de modifier des attributs de propriété non-configurables (en dehors des attributs `value` et `writable`) sauf dans le cas où les valeurs souhaitées sont les mêmes que les valeurs courantes.

#### Attribut `writable`

Lorsque l'attribut `writable` vaut `false` pour la propriété, cette dernière n'est plus accessible en écriture. Il est impossible de la réaffecter.

```js
var o = {}; // On crée un nouvel objet

Object.defineProperty(o, "a", { value: 37, writable: false });

console.log(o.a); // inscrit 37 dans les journaux (logs)
o.a = 25; // Aucune exception n'est lancée (on aurait une
// exception en mode strict, y compris si la
// valeur souhaitée avait été la même)
console.log(o.a); // inscrit toujours 37.
//L'affectation n'a pas fonctionné.
```

```js
// En mode strict
(function () {
  "use strict";
  var o = {};
  Object.defineProperty(o, "b", {
    value: 2,
    writable: false,
  });
  o.b = 3; // déclenche une TypeError: "b" est en lecture seule
  return o.b; // renvoie 2 sans la ligne précédente
})();
```

Comme on l'a vu dans l'exemple, essayer de modifier une propriété non accessible en écriture ne la modifie pas. Cela ne rend pas d'erreur non plus (en mode non-strict).

#### Attribut `enumerable`

L'attribut de propriété `enumerable` permet de définir si la propriété est sélectionnée par {{jsxref("Object.assign()")}} ou via l'opérateur [de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) (_spread_). Pour les propriétés qui ne sont pas nommées avec des symboles, les propriétés énumérables correspondent aux propriétés qui sont listées avec une boucle {{jsxref("Instructions/for...in","for...in")}} ou avec la méthode {{jsxref("Object.keys()")}}.

```js
var o = {};
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
}); // enumerable vaut false par défaut
o.d = 4; // enumerable vaut true par défaut
// lorsqu'on crée une propriété
// en la définissant
Object.defineProperty(o, Symbol.for("e"), {
  value: 5,
  enumerable: true,
});
Object.defineProperty(o, Symbol.for("f"), {
  value: 6,
  enumerable: false,
});

for (var i in o) {
  console.log(i);
}
// affiche 'a' et 'd' (dans un ordre indéfini)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable("a"); // true
o.propertyIsEnumerable("b"); // false
o.propertyIsEnumerable("c"); // false
o.propertyIsEnumerable("d"); // true
o.propertyIsEnumerable(Symbol.for("e")); // true
o.propertyIsEnumerable(Symbol.for("f")); // false

var p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[Symbol.for("e")]; // 5
p[Symbol.for("f")]; // undefined
```

#### Attribut `configurable`

L'attribut `configurable` permet de contrôler si la propriété peut être supprimée et si les autres attributs de propriété (voir ci-avant), à l'exception de `value` ou de `writable`, peuvent être modifiés.

```js
var o = {};
Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
  configurable: false,
});

Object.defineProperty(o, "a", { configurable: true });
// renvoie une TypeError

Object.defineProperty(o, "a", { enumerable: true });
// renvoie une TypeError

Object.defineProperty(o, "a", { set: function () {} });
// renvoie une TypeError (set était non défini avant)

Object.defineProperty(o, "a", {
  get: function () {
    return 1;
  },
});
// renvoie une TypeError
// (bien que le nouveau get soit identique au précédent)

Object.defineProperty(o, "a", { value: 12 });
// renvoie une TypeError

console.log(o.a); // log 1
delete o.a; // Rien ne se passe
console.log(o.a); // log 1
```

Si l'attribut `configurable` de `o.a` avait été `true`, aucune de ces erreurs n'aurait été renvoyée et la propriété aurait été supprimée au final.

### Ajouter des propriétés et des valeurs par défaut

Il est toujours important de savoir comment les valeurs par défaut sont appliquées. Le comportement est souvent différent entre une affectation simple et l'utilisation de `Object.defineProperty()`. Par exemple :

```js
var o = {};

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
// sera équivalent à :
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});
```

### Accesseurs et mutateurs adaptés

L'exemple ci-dessous illustre comment implémenter un objet qui archive des données. Lorsque la propriété `température` est définie, on ajoute une entrée au tableau `archive` :

```js
function Archiviste() {
  var température = null;
  var archive = [];

  Object.defineProperty(this, "température", {
    get: function () {
      console.log("accès !");
      return température;
    },
    set: function (value) {
      température = value;
      archive.push({ val: température });
    },
  });

  this.getArchive = function () {
    return archive;
  };
}

var arc = new Archiviste();
arc.température; // "accès !"
arc.température = 11;
arc.température = 13;
arc.getArchive(); // [{val: 11}, {val: 13}]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Énumérabilité et maîtrise des propriétés](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement)
- {{jsxref("Object.defineProperties()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Object.prototype.watch()")}}
- {{jsxref("Object.prototype.unwatch()")}}
- {{jsxref("Opérateurs/L_opérateur_get", "get")}}
- {{jsxref("Opérateurs/L_opérateur_set", "set")}}
- {{jsxref("Object.create()")}}
- [Exemples supplémentaires utilisant `Object.defineProperty`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty/Exemples_supplémentaires)
- {{jsxref("Reflect.defineProperty()")}}
