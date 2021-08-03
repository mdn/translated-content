---
title: Object.freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
tags:
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/freeze
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/freeze
---
{{JSRef}}

La méthode **`Object.freeze()`** permet de geler un objet, c'est-à-dire qu'on empêche d'ajouter de nouvelles propriétés, de supprimer ou d'éditer des propriétés existantes, y compris en ce qui concerne leur caractère énumérable, configurable ou pour l'accès en écriture. L'objet devient ainsi immuable. La méthode renvoie l'objet ainsi « gelé ».

{{EmbedInteractiveExample("pages/js/object-freeze.html")}}

## Syntaxe

    Object.freeze(obj)

### Paramètres

- `obj`
  - : L'objet à geler.

### Valeur de retour

L'objet qui a été passé à la fonction.

## Description

Rien ne pourra être ajouté ou supprimé dans l'ensemble des propriétés de l'objet gelé. Toute tentative échouera, silencieusement ou via une exception {{jsxref("TypeError")}} (la plupart du temps en {{jsxref("Strict_mode", "mode strict", "", 1)}}).

Les propriétés qui sont des données ne pourront pas être changées et les attributs `writable` et `configurable` vaudront `false`. Les propriétés qui sont des accesseurs ou des mutateurs fonctionneront de la même façon (et ne changeront pas la valeur associée malgré le fait qu'il n'y ait pas d'erreur). Les propriétés dont les valeurs sont des objets pourront être modifiées si ces objets ne sont pas gelés. Les tableaux peuvent également être gelés ce qui empêche alors d'ajouter ou de retirer des éléments ou de modifier les éléments existants si ceux-ci ne sont pas des objets.

La fonction renvoie l'objet passé en argument, elle ne crée pas une copie « gelée ».

## Exemples

### Geler des objets

```js
var obj = {
  prop: function (){},
  toto: "truc"
};

// On peut ajouter de nouvelles propriétés,
// éditer ou supprimer celles existantes
obj.toto = "machin";
obj.bidule = "woof";
delete obj.prop;

// L'argument et la valeur renvoyée correspondent au
// même objet.
// Il n'est pas nécessaire d'utiliser la valeur renvoyée
// pour geler l'objet original.
var o = Object.freeze(obj);

o === obj; // true
Object.isFrozen(obj); // true

// Maintenant que l'objet est gelé, les changements échoueront
obj.toto = "eheh"; // échoue silencieusement
obj.roxor = "ga bu zo meu"; // échoue silencieusement et n'ajoute
                            // pas la propriété

// ...en mode strict, l'échec se traduira par une exception TypeErrors
function echec(){
  "use strict";
  obj.toto = "bipbip"; // renvoie une TypeError
  delete obj.toto;     // renvoie une TypeError
  delete obj.roxor;    // renvoie true car l'attribut n' a pas été ajouté
  obj.bipbip = "arf";  // renvoie une  TypeError
}

echec();

// Les changements via Object.defineProperty échoueront également
// renvoie une TypeError
Object.defineProperty(obj, "ohoh", { value: 17 });
// renvoie une TypeError
Object.defineProperty(obj, "toto", { value: "eit" });

// Il est également impossible de modifier le prototype.
// Les deux instructions suivantes déclencheront une TypeError.
Object.setPrototypeOf(obj, { x: 20 });
obj.__proto__ = { x: 20 };
```

### Geler un tableau

```js
let a = [0];
Object.freeze(a);
// Le tableau ne peut plus être modifié

a[0] = 1;  // échoue silencieusement
a.push(2); // échoue silencieusement

// en mode strict, de telles tentatives
// déclencheront des exceptions TypeError
function echec() {
  "use strict"
  a[0] = 1;
  a.push(2);
}

echec();
```

L'exemple qui suit illustre comment les propriétés qui sont des objets peuvent être éditées (la méthode `freeze` ne s'applique que sur l'objet courant et de façon superficielle).

```js
obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'valeurA';

obj1.internal.a // 'valeurA'
```

L'objet qui est gelé est immuable mais ce n'est pas nécessairement une constante. Pour obtenir une constante, il faut que l'ensemble des références (directes et indirectes) pointe vers des objets immuables. Les chaînes de caractères, les nombres et les booléens sont toujours immuables. La plupart du temps, on aura besoin de créer des constantes au cas par cas (et non de façon générale).

### Qu'est-ce que le gel « superficiel » ? (_shallow freeze_)

Lorsqu'on appelle `Object.freeze(monObjet)`, le gel ne s'applique qu'aux propriétés directement rattachées à `monObjet`. L'ajout, la suppression ou la réaffectation ne sont empêchées que sur l'objet directement. Si les valeurs de ces propriétés sont également des objets, ces derniers ne sont pas gelés et on peut leur ajouter/supprimer/réaffecter des valeurs.

```js
var employé = {
  nom: "Leroy",
  designation: "Développeur",
  adresse: {
    cp: "72000",
    ville: "Le Mans"
  }
};

Object.freeze(employé);

employé.nom = "John"; // propriété directe, la réaffectation échoue en silence
employé.adresse.ville = "Paris"; // propriété d'un objet fils : modifiable

console.log(employé.adresse.ville); // affichera Paris
```

Pour rendre l'objet complètement immuable, on gèle chacun des objets qu'il contient. Voici un exemple simple de fonction pour parcourir les propriétés qui sont des objets et les geler (attention, cela ne gère pas le cas où on a des cycles de références, ce qui entraînerait une boucle infinie).

```js
function deepFreeze(obj) {

  // On récupère les noms des propriétés définies sur obj
  var propNames = Object.getOwnPropertyNames(obj);

  // On gèle les propriétés avant de geler l'objet
  for(let name of propNames){
    let value = obj[name];
    obj[name] = value && typeof value === "object" ?
      deepFreeze(value) : value;
  }

  // On gèle l'objet initial
  return Object.freeze(obj);
}

obj2 = {
  internal: {
    a: null
  }
};

deepFreeze(obj2);
obj2.internal.a = 'valeurB'; // échouera silencieusement en mode non-strict
obj2.internal.a; // null
```

## Notes

Pour ES5, si l'argument passé à la méthode n'est pas un objet mais est d'un autre type primitif, cela entraînera une exception {{jsxref("TypeError")}}. Pour ECMAScript 2015 (ES2015), un argument qui n'est pas un objet sera traité comme un objet ordinaire gelé et sera renvoyé tel quel par la méthode.

```js
Object.freeze(1);
// TypeError: 1 is not an object - code ES5

Object.freeze(1);
// 1                             - code ES2015
```

Geler un {{domxref("ArrayBufferView")}} contenant des éléments entraînera une exception {{jsxref("TypeError")}} car ce sont des vues sur des zones mémoires.

```js
> Object.freeze(new Uint8Array(0)) // Aucun élément
Uint8Array []

> Object.freeze(new Uint8Array(1)) // Avec des éléments
TypeError: Cannot freeze array buffer views with elements

> Object.freeze(new DataView(new ArrayBuffer(32))) // Aucun élément
DataView {}

> Object.freeze(new Float64Array(new ArrayBuffer(64), 63, 0)) // Aucun élément
Float64Array []

> Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)) // Avec des éléments
TypeError: Cannot freeze array buffer views with elements
```

On notera que les trois propriétés standard (`buf.byteLength`, `buf.byteOffset` et `buf.buffer`) sont en lecture seule (comme pour {{jsxref("ArrayBuffer")}} et {{jsxref("SharedArrayBuffer")}}) : il n'y a donc aucune raison de vouloir geler ces propriétés.

### Comparaison avec `Object.seal()`

Lorsqu'on utilise la méthode `Object.freeze()`, les propriétés existantes d'un objet deviennent immuables. En revanche, avec {{jsxref("Object.seal()")}}, il est toujours possible de modifier la valeur des propriétés existantes d'un objet scellé.

## Spécifications

| Spécification                                                                        | État                         | Commentaires                                           |
| ------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------------------------ |
| {{SpecName('ES5.1', '#sec-15.2.3.9', 'Object.freeze')}}             | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée avec JavaScript 1.8.5 |
| {{SpecName('ES6', '#sec-object.freeze', 'Object.freeze')}}         | {{Spec2('ES6')}}         |                                                        |
| {{SpecName('ESDraft', '#sec-object.freeze', 'Object.freeze')}} | {{Spec2('ESDraft')}} |                                                        |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.freeze")}}

## Voir aussi

- {{jsxref("Object.isFrozen()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
