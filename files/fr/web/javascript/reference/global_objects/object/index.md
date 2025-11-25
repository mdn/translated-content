---
title: Object
slug: Web/JavaScript/Reference/Global_Objects/Object
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

Le type **`Object`** représente l'un des [types de données de JavaScript](/fr/docs/Web/JavaScript/Guide/Data_structures). Il est utilisé pour stocker diverses collections à clés et des entités plus complexes. Les objets peuvent être créés en utilisant le constructeur {{JSxRef("Object/Object", "Object()")}} ou la [syntaxe d'initialisation / littérale d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer).

## Description

Presque tous les [objets](/fr/docs/Web/JavaScript/Guide/Data_structures#objects) en JavaScript sont des instances de `Object`&nbsp;; un objet typique hérite de propriétés (y compris des méthodes) de `Object.prototype`, bien que ces propriétés puissent être masquées (c'est-à-dire remplacées). Les seuls objets qui n'héritent pas de `Object.prototype` sont ceux avec un [prototype `null`](#objets_avec_prototype_null), ou qui en descendent.

Les modifications apportées à l'objet `Object.prototype` sont visibles par **tous** les objets via la chaîne de prototypes, sauf si les propriétés et méthodes soumises à ces modifications sont remplacées ailleurs dans la chaîne de prototypes. Cela fournit un mécanisme très puissant, bien que [potentiellement dangereux](/fr/docs/Web/Security/Attacks/Prototype_pollution), pour remplacer ou étendre le comportement des objets. Pour plus de sécurité, `Object.prototype` est le seul objet du langage JavaScript de base qui possède un [prototype immuable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf#description) — le prototype de `Object.prototype` est toujours `null` et ne peut pas être modifié.

### Propriétés de prototype d'`Object`

Vous devez éviter d'appeler directement les méthodes de `Object.prototype` à partir de l'instance, en particulier celles qui ne sont pas destinées à être polymorphes (c'est-à-dire que seul son comportement initial a du sens et aucun objet descendant ne pourrait le remplacer de manière significative). Tous les objets descendant de `Object.prototype` peuvent définir une propriété propre personnalisée qui porte le même nom, mais avec une sémantique entièrement différente de ce que vous attendez. De plus, ces propriétés ne sont pas héritées par les [objets avec prototype `null`](#objets_avec_prototype_null). Tous les utilitaires JavaScript modernes pour travailler avec des objets sont [statiques](#méthodes_statiques). Plus précisément&nbsp;:

- [`valueOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf), [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString), et [`toLocaleString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toLocaleString) existent pour être polymorphes et vous devez vous attendre à ce que l'objet définisse sa propre implémentation avec des comportements sensibles, de sorte que vous pouvez les appeler comme des méthodes d'instance. Cependant, `valueOf()` et `toString()` sont généralement appelées implicitement via [la conversion de type](/fr/docs/Web/JavaScript/Guide/Data_structures#coercion_de_type) et vous n'avez pas besoin de les appeler vous-même dans votre code.
- [`__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__), [`__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__), [`__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__), et [`__lookupSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) sont dépréciées et ne doivent pas être utilisées. Utilisez plutôt les alternatives statiques {{JSxRef("Object.defineProperty()")}} et {{JSxRef("Object.getOwnPropertyDescriptor()")}}.
- La propriété [`__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) est dépréciée et ne doit pas être utilisée. Les alternatives {{JSxRef("Object.getPrototypeOf()")}} et {{JSxRef("Object.setPrototypeOf()")}} sont des méthodes statiques.
- Les méthodes [`propertyIsEnumerable()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable) et [`hasOwnProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) peuvent être remplacées respectivement par les méthodes statiques {{JSxRef("Object.getOwnPropertyDescriptor()")}} et {{JSxRef("Object.hasOwn()")}}.
- La méthode [`isPrototypeOf()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf) peut généralement être remplacée par [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof), si vous vérifiez la propriété `prototype` d'un constructeur.

Au cas où une méthode statique sémantiquement équivalente n'existe pas, ou si vous voulez vraiment utiliser la méthode `Object.prototype`, vous devez appeler directement [`call()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/call) la méthode `Object.prototype` sur votre objet cible au lieu de cela, pour empêcher l'objet d'avoir une propriété de remplacement qui produit des résultats inattendus.

```js
const obj = {
  foo: 1,
  // Vous ne devez pas définir une telle méthode sur votre propre objet,
  // mais vous pourriez ne pas être capable d'empêcher cela si
  // vous recevez l'objet d'une source externe
  propertyIsEnumerable() {
    return false;
  },
};

obj.propertyIsEnumerable("foo"); // false ; résultat inattendu
Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true ; résultat attendu
```

### Suppression d'une propriété d'un objet

Il n'existe pas de méthode dans un objet lui-même pour supprimer ses propres propriétés (comme {{JSxRef("Map.prototype.delete()")}}). Pour ce faire, vous devez utiliser l'opérateur {{JSxRef("Operators/delete", "delete")}}.

### Objets avec prototype `null`

Presque tous les objets en JavaScript héritent finalement de `Object.prototype` (voir [héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)). Cependant, vous pouvez créer des objets avec prototype `null` en utilisant [`Object.create(null)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/create) ou la [syntaxe d'initialisation d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer) avec `__proto__: null` (remarque&nbsp;: la clé `__proto__` dans les littéraux d'objet est différente de la propriété dépréciée [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)). Vous pouvez également modifier le prototype d'un objet existant en `null` en appelant [`Object.setPrototypeOf(obj, null)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

```js
const obj = Object.create(null);
const obj2 = { __proto__: null };
```

Un objet avec un prototype `null` peut se comporter de manières inattendues, car il n'hérite d'aucune méthode d'objet de `Object.prototype`. C'est particulièrement vrai lors du débogage, car les fonctions utilitaires courantes de conversion/détection de propriété d'objet peuvent générer des erreurs ou perdre des informations (en particulier si vous utilisez des pièges d'erreur silencieux qui ignorent les erreurs).

Par exemple, l'absence de [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString) rend souvent le débogage impossible&nbsp;:

```js
const normalObj = {}; // créer un objet normal
const nullProtoObj = Object.create(null); // créer un objet avec prototype "null"

console.log(`normalObj is: ${normalObj}`); // affiche "normalObj is: [object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // lève une erreur : Cannot convert object to primitive value

alert(normalObj); // affiche [object Object]
alert(nullProtoObj); // lève une erreur : Cannot convert object to primitive value
```

D'autres méthodes échoueront également.

```js
normalObj.valueOf(); // affiche {}
nullProtoObj.valueOf(); // lève une erreur : nullProtoObj.valueOf is not a function

normalObj.hasOwnProperty("p"); // affiche "true"
nullProtoObj.hasOwnProperty("p"); // lève une erreur : nullProtoObj.hasOwnProperty is not a function

normalObj.constructor; // affiche "Object() { [native code] }"
nullProtoObj.constructor; // affiche "undefined"
```

Nous pouvons rajouter la méthode `toString` à l'objet avec prototype null en en assignant une&nbsp;:

```js
nullProtoObj.toString = Object.prototype.toString; // puisque le nouvel objet n'a pas toString, rajouter l'objet générique original

console.log(nullProtoObj.toString()); // affiche "[object Object]"
console.log(`nullProtoObj is: ${nullProtoObj}`); // affiche "nullProtoObj is: [object Object]"
```

Contrairement aux objets normaux, dans lesquels `toString()` se trouve sur le prototype de l'objet, la méthode `toString()` ici est une propriété propre de `nullProtoObj`. C'est parce que `nullProtoObj` n'a pas de prototype (`null`).

Vous pouvez aussi revenir à un objet ordinaire depuis un objet avec prototype null en utilisant [`Object.setPrototypeOf(nullProtoObj, Object.prototype)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf).

En pratique, les objets avec prototype `null` sont généralement utilisés comme substitut bon marché pour les [cartes (<i lang="en">maps</i>)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map). La présence de propriétés `Object.prototype` causera quelques bogues&nbsp;:

```js
const ages = { alice: 18, bob: 27 };

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return ages[name];
}

hasPerson("hasOwnProperty"); // true
getAge("toString"); // [Function: toString]
```

L'utilisation d'un objet avec prototype null supprime ce risque sans ajouter trop de complexité aux fonctions `hasPerson` et `getAge`&nbsp;:

```js
const ages = Object.create(null, {
  alice: { value: 18, enumerable: true },
  bob: { value: 27, enumerable: true },
});

hasPerson("hasOwnProperty"); // false
getAge("toString"); // undefined
```

Dans un tel cas, l'ajout de toute méthode doit être fait prudemment, car elles peuvent être confondues avec les autres paires clé-valeur stockées en tant que données.

Faire en sorte que votre objet n'hérite pas de `Object.prototype` prévient aussi les [attaques par pollution de prototype](/fr/docs/Web/Security/Attacks/Prototype_pollution). Si un script malveillant ajoute une propriété à `Object.prototype`, elle sera accessible sur chaque objet de votre programme, sauf sur les objets qui ont un prototype null.

```js
const user = {};

// Un script malveillant :
Object.prototype.authenticated = true;

// Permettant inopinément à un·e utilisateur·ice non authentifié·e de passer
if (user.authenticated) {
  // accéder aux données confidentielles
}
```

JavaScript a aussi des API intégrées qui produisent des objets avec prototype `null`, particulièrement celles qui utilisent des objets comme collections ad hoc clé-valeur. Par exemple&nbsp;:

- La valeur de retour de {{JSxRef("Object.groupBy()")}}
- Les propriétés `groups` et `indices.groups` du résultat de {{JSxRef("RegExp.prototype.exec()")}}
- [`Array.prototype[Symbol.unscopables]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.unscopables) (tous les objets `[Symbol.unscopables]` devraient avoir un prototype `null`)
- [`import.meta`](/fr/docs/Web/JavaScript/Reference/Operators/import.meta)
- Les objets d'espace de noms de module, obtenus via [`import * as ns from "module";`](/fr/docs/Web/JavaScript/Reference/Statements/import#namespace_import) ou [`import()`](/fr/docs/Web/JavaScript/Reference/Operators/import)

Le terme «&nbsp;objet avec prototype `null`&nbsp;» inclut souvent aussi tout objet sans `Object.prototype` dans sa chaîne de prototypes. De tels objets peuvent être créés avec [`extends null`](/fr/docs/Web/JavaScript/Reference/Classes/extends#étendre_null) quand on utilise des classes.

### Coercition d'objet

Beaucoup d'opérations intégrées qui attendent des objets convertissent d'abord leurs arguments en objets. [L'opération <sup>(angl.)</sup>](https://tc39.es/ecma262/multipage/abstract-operations.html#sec-toobject) peut être résumée comme suit&nbsp;:

- Les objets sont retournés tels quels.
- {{JSxRef("Global_Objects/undefined", "undefined")}} et {{JSxRef("Operators/null", "null")}} lèvent une {{JSxRef("TypeError")}}.
- Les primitives {{JSxRef("Number")}}, {{JSxRef("String")}}, {{JSxRef("Boolean")}}, {{JSxRef("Symbol")}}, {{JSxRef("BigInt")}} sont enveloppées dans leurs enveloppes d'objet correspondantes.

Il y a deux façons d'obtenir presque le même effet en JavaScript.

- {{JSxRef("Object.prototype.valueOf()")}}&nbsp;: `Object.prototype.valueOf.call(x)` fait exactement les étapes de coercition d'objet expliquées ci-dessus pour convertir `x`.
- La fonction {{JSxRef("Object/Object", "Object()")}}&nbsp;: `Object(x)` utilise le même algorithme pour convertir `x`, sauf que `undefined` et `null` ne lèvent pas une {{JSxRef("TypeError")}}, mais retournent un objet ordinaire.

Les endroits qui utilisent la coercition d'objet incluent&nbsp;:

- Le paramètre `object` des boucles [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in).
- La valeur `this` des méthodes {{JSxRef("Array")}}.
- Les paramètres des méthodes `Object` telles que {{JSxRef("Object.keys()")}}.
- L'encapsulation automatique quand on accède à une propriété sur une valeur primitive, puisque les primitives n'ont pas de propriétés.
- La valeur [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) quand on appelle une fonction non-stricte. Les primitives sont encapsulées tandis que `null` et `undefined` sont remplacés par l'[objet global](/fr/docs/Glossary/Global_object).

Contrairement à la [conversion en primitives](/fr/docs/Web/JavaScript/Guide/Data_structures#primitive_coercion), le processus de coercition d'objet lui-même n'est observable en aucune façon, puisqu'il n'invoque pas de code personnalisé comme les méthodes `toString` ou `valueOf`.

## Constructeur

- {{JSxRef("Object/Object", "Object()")}}
  - : Convertit l'entrée en un objet.

## Méthodes statiques

- {{JSxRef("Object.assign()")}}
  - : Copie les valeurs de toutes les propriétés énumérables propres d'un ou plusieurs objets source vers un objet cible.
- {{JSxRef("Object.create()")}}
  - : Crée un nouvel objet avec l'objet prototype défini et les propriétés.
- {{JSxRef("Object.defineProperties()")}}
  - : Ajoute à un objet les propriétés nommées décrites par les descripteurs donnés.
- {{JSxRef("Object.defineProperty()")}}
  - : Ajoute à un objet la propriété nommée décrite par un descripteur donné.
- {{JSxRef("Object.entries()")}}
  - : Retourne un tableau contenant toutes les paires `[clé, valeur]` des propriétés de chaîne énumérables **propres** d'un objet donné.
- {{JSxRef("Object.freeze()")}}
  - : Gèle un objet. Le code tiers ne peut pas supprimer ou modifier ses propriétés.
- {{JSxRef("Object.fromEntries()")}}
  - : Retourne un nouvel objet à partir d'un itérable de paires `[clé, valeur]`. (C'est l'inverse de {{JSxRef("Object.entries")}}).
- {{JSxRef("Object.getOwnPropertyDescriptor()")}}
  - : Retourne le descripteur de propriété pour une propriété nommée sur un objet.
- {{JSxRef("Object.getOwnPropertyDescriptors()")}}
  - : Retourne un objet contenant tous les descripteurs de propriété propres d'un objet.
- {{JSxRef("Object.getOwnPropertyNames()")}}
  - : Retourne un tableau contenant les noms de toutes les propriétés énumérables et non-énumérables **propres** de l'objet donné.
- {{JSxRef("Object.getOwnPropertySymbols()")}}
  - : Retourne un tableau de tous les symboles de propriété trouvés directement sur un objet donné.
- {{JSxRef("Object.getPrototypeOf()")}}
  - : Retourne le prototype (la propriété interne `[[Prototype]]`) de l'objet défini.
- {{JSxRef("Object.groupBy()")}}
  - : Regroupe les éléments d'un itérable donné selon les valeurs de chaîne retournées par une fonction de rappel fournie. L'objet retourné a des propriétés séparées pour chaque groupe, contenant des tableaux avec les éléments du groupe.
- {{JSxRef("Object.hasOwn()")}}
  - : Retourne `true` si l'objet défini possède la propriété indiquée comme sa propriété _propre_, ou `false` si la propriété est héritée ou n'existe pas.
- {{JSxRef("Object.is()")}}
  - : Compare si deux valeurs sont la même valeur. Équivaut toutes les valeurs `NaN` (ce qui diffère à la fois de `IsLooselyEqual` utilisée par [`==`](/fr/docs/Web/JavaScript/Reference/Operators/Equality) et `IsStrictlyEqual` utilisée par [`===`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality)).
- {{JSxRef("Object.isExtensible()")}}
  - : Détermine si l'extension d'un objet est autorisée.
- {{JSxRef("Object.isFrozen()")}}
  - : Détermine si un objet a été gelé.
- {{JSxRef("Object.isSealed()")}}
  - : Détermine si un objet est scellé.
- {{JSxRef("Object.keys()")}}
  - : Retourne un tableau contenant les noms de toutes les propriétés de chaîne énumérables **propres** de l'objet donné.
- {{JSxRef("Object.preventExtensions()")}}
  - : Empêche toute extension d'un objet.
- {{JSxRef("Object.seal()")}}
  - : Empêche le code tiers de supprimer les propriétés d'un objet.
- {{JSxRef("Object.setPrototypeOf()")}}
  - : Définit le prototype de l'objet (sa propriété interne `[[Prototype]]`).
- {{JSxRef("Object.values()")}}
  - : Retourne un tableau contenant les valeurs qui correspondent à toutes les propriétés de chaîne énumérables **propres** d'un objet donné.

## Propriétés d'instance

Ces propriétés sont définies sur `Object.prototype` et partagées par tous les instances d'`Object`.

- [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) {{Deprecated_Inline}}
  - : Pointe vers l'objet qui a été utilisé comme prototype quand l'objet a été instancié.
- {{JSxRef("Object.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances d'`Object` ordinaires, la valeur initiale est le constructeur {{JSxRef("Object/Object", "Object")}}. Les instances d'autres constructeurs héritent chacune de la propriété `constructor` de l'objet `Constructor.prototype` respectif.

## Méthodes d'instance

- [`Object.prototype.__defineGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineGetter__) {{Deprecated_Inline}}
  - : Associe une fonction à une propriété qui, quand elle est accédée, exécute cette fonction et retourne sa valeur de retour.
- [`Object.prototype.__defineSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__) {{Deprecated_Inline}}
  - : Associe une fonction à une propriété qui, quand elle est définie, exécute cette fonction qui modifie la propriété.
- [`Object.prototype.__lookupGetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupGetter__) {{Deprecated_Inline}}
  - : Retourne la fonction liée comme accesseur à la propriété définie.
- [`Object.prototype.__lookupSetter__()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/__lookupSetter__) {{Deprecated_Inline}}
  - : Retourne la fonction liée comme mutateur à la propriété définie.
- {{JSxRef("Object.prototype.hasOwnProperty()")}}
  - : Retourne un booléen indiquant si un objet contient la propriété définie comme propriété directe de cet objet et non héritée via la chaîne de prototypes.
- {{JSxRef("Object.prototype.isPrototypeOf()")}}
  - : Retourne un booléen indiquant si l'objet sur lequel cette méthode est appelée est dans la chaîne de prototypes de l'objet défini.
- {{JSxRef("Object.prototype.propertyIsEnumerable()")}}
  - : Retourne un booléen indiquant si la propriété définie est la [propre propriété énumérable](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties) de l'objet.
- {{JSxRef("Object.prototype.toLocaleString()")}}
  - : Appelle {{JSxRef("Object/toString", "toString()")}}.
- {{JSxRef("Object.prototype.toString()")}}
  - : Returns a string representation of the object.
- {{JSxRef("Object.prototype.valueOf()")}}
  - : Retourne la valeur primitive de l'objet défini.

## Exemples

### Construction d'objets vides

L'exemple suivant crée des objets vides en utilisant le mot-clé `new` avec différents arguments&nbsp;:

```js
const o1 = new Object();
const o2 = new Object(undefined);
const o3 = new Object(null);
```

### Utiliser le constructeur `Object()` pour convertir les primitives en un `Object` de leur type respectif

Vous pouvez utiliser le constructeur {{JSxRef("Object/Object", "Object()")}} pour créer une enveloppe d'objet d'une valeur primitive.

Les exemples suivants créent les variables `o1` et `o2` qui sont des objets stockant des valeurs {{JSxRef("Boolean")}} et {{JSxRef("BigInt")}}:

```js
// Équivalent à const o1 = new Boolean(true)
const o1 = new Object(true);

// Pas d'équivalent parce que BigInt() ne peut pas être appelé comme constructeur,
// et l'appeler comme une fonction ordinaire ne crée pas d'objet
const o2 = new Object(1n);
```

### Prototypes d'objets

Quand on modifie le comportement de méthodes `Object.prototype` existantes, envisagez d'injecter du code en enveloppant votre extension avant ou après la logique existante. Par exemple, ce code (non testé) exécutera conditionnellement la logique personnalisée avant l'exécution de la logique intégrée ou de l'extension de quelqu'un d'autre.

Quand on modifie les prototypes avec des crochets, passer `this` et les arguments (l'état de l'appel) au comportement actuel en appelant `apply()` sur la fonction. Ce motif peut être utilisé pour tout prototype, tel que `Node.prototype`, `Function.prototype`, etc.

```js
const current = Object.prototype.valueOf;

// Puisque ma propriété "-prop-value" est transversale et n'est pas toujours
// sur la même chaîne de prototypes, je veux modifier Object.prototype :
Object.prototype.valueOf = function (...args) {
  if (Object.hasOwn(this, "-prop-value")) {
    return this["-prop-value"];
  }
  // Cela ne ressemble pas à l'un de mes objets, donc retomber
  // au comportement par défaut en reproduisant le comportement actuel au mieux.
  // L'apply se comporte comme "super" dans d'autres langages.
  // Bien que valueOf() ne prenne pas d'arguments, un autre crochet peut le faire.
  return current.apply(this, args);
};
```

> [!WARNING]
> Modifier la propriété `prototype` de tout constructeur intégré est considéré comme une mauvaise pratique et risque la compatibilité future.

Vous pouvez lire plus sur les prototypes dans [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Initialisation d'objet](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer)
- [Attaque par pollution de prototype](/fr/docs/Web/Security/Attacks/Prototype_pollution)
