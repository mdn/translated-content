---
title: "Object : méthode statique freeze()"
short-title: freeze()
slug: Web/JavaScript/Reference/Global_Objects/Object/freeze
l10n:
  sourceCommit: 7aba7d7cba898fe4d4a88df73183bb05f71a19a2
---

La méthode statique **`Object.freeze()`**_gèle_ un objet. Geler un objet [empêche les extensions](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions) et rend les propriétés existantes non modifiables et non configurables. Un objet gelé ne peut plus être modifié&nbsp;: de nouvelles propriétés ne peuvent pas être ajoutées, les propriétés existantes ne peuvent pas être supprimées, leur caractère énumérable, configurable, modifiable ou leur valeur ne peut pas être changé, et le prototype de l'objet ne peut pas être réassigné. `freeze()` retourne le même objet qui a été passé en argument.

Geler un objet est le niveau d'intégrité le plus élevé que JavaScript offre.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.freeze()")}}

```js interactive-example
const obj = {
  prop: 42,
};

Object.freeze(obj);

obj.prop = 33;
// Lève une exception en mode strict

console.log(obj.prop);
// Résultat attendu : 42
```

## Syntaxe

```js-nolint
Object.freeze(obj)
```

### Paramètres

- `obj`
  - : L'objet à geler.

### Valeur de retour

L'objet qui a été passé à la fonction.

## Description

Le gel d'un objet revient à [empêcher les extensions](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions), puis à définir tous les [descripteurs de propriétés](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty#description) `configurable` à `false` — et pour les propriétés de données, `writable` à `false` également. Rien ne peut être ajouté ou supprimé de l'ensemble des propriétés d'un objet gelé. Toute tentative en ce sens échoue, soit silencieusement, soit en levant une exception {{JSxRef("TypeError")}} (le plus souvent, mais pas exclusivement, lorsque l'on se trouve dans {{JSxRef("Strict_mode", "mode strict", "", 1)}}).

En ce qui concerne les propriétés de données d'un objet gelé, leurs valeurs ne peuvent pas être modifiées puisque les attributs `writable` et `configurable` sont définis sur `false`. Les propriétés des accesseurs (accesseurs et mutateurs) fonctionnent de la même manière — la valeur de la propriété retournée par l'accesseur peut toujours changer, et le mutateur peut toujours être appelé sans générer d'erreur lors de la définition de la propriété. Notez que les valeurs qui sont des objets peuvent toujours être modifiées, à moins qu'elles ne sont également gelées. En tant qu'objet, un tableau peut être gelé&nbsp;; une fois gelé, ses éléments ne peuvent plus être modifiés et aucun élément ne peut être ajouté ou supprimé du tableau.

Les [éléments privés](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements) ne sont pas des propriétés et ne relèvent pas du concept de descripteurs de propriétés. Le gel d'un objet comportant des éléments privés n'empêche pas la modification des valeurs de ces éléments privés. (Le gel des objets est généralement considéré comme une mesure de sécurité contre le code externe, mais celui-ci ne peut de toute façon pas accéder aux éléments privés.) Les éléments privés ne peuvent être ni ajoutés ni supprimés de l'objet, que celui-ci soit gelé ou non.

`freeze()` retourne le même objet que celui qui a été passé à la fonction. Elle _ne_ crée _pas_ de copie gelée.

Un tableau typé ({{JSxRef("TypedArray")}}) ou une vue de donnée ({{JSxRef("DataView")}}) contenant des éléments provoque une erreur {{JSxRef("TypeError")}}, car il s'agit de vues sur la mémoire, ce qui entraîne inévitablement d'autres problèmes potentiels&nbsp;:

```js
Object.freeze(new Uint8Array(0)); // Pas d'éléments
// Uint8Array []

Object.freeze(new Uint8Array(1)); // A des éléments
// TypeError: Cannot freeze array buffer views with elements

Object.freeze(new DataView(new ArrayBuffer(32))); // Pas d'éléments
// DataView {}

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 0)); // Pas d'éléments
// Float64Array []

Object.freeze(new Float64Array(new ArrayBuffer(64), 32, 2)); // Has elements
// TypeError: Cannot freeze array buffer views with elements
```

Notez que comme les trois propriétés standard (`buf.byteLength`, `buf.byteOffset` et `buf.buffer`) sont en lecture seule (tout comme celles d'un {{JSxRef("ArrayBuffer")}} ou d'un {{JSxRef("SharedArrayBuffer")}}), il n'y a aucune raison de tenter de geler ces propriétés.

Contrairement à {{JSxRef("Object.seal()")}}, les propriétés existantes des objets gelés avec `Object.freeze()` deviennent immuables et les propriétés de données ne peuvent pas être réassignées.

## Exemples

### Geler des objets

```js
const obj = {
  prop() {},
  toto: "truc",
};

// Avant le gel : de nouvelles propriétés peuvent être ajoutées,
// et les propriétés existantes peuvent être modifiées ou supprimées
obj.toto = "machin";
obj.bidule = "waf";
delete obj.prop;

// Gelé.
const o = Object.freeze(obj);

// La valeur retournée est exactement le même objet que celui passé en paramètre.
o === obj; // true

// L'objet est devenu gelé.
Object.isFrozen(obj); // === true

// Maintenant que l'objet est gelé, les changements échouent
obj.toto = "eheh"; // échoue silencieusement
// échoue silencieusement et n'ajoute pas la propriété
obj.roxor = "comme la guilde";

// En mode strict, l'échec se traduit par des exceptions TypeErrors
function echec() {
  "use strict";
  obj.toto = "bipbip"; // retourne une TypeError
  delete obj.toto; // retourne une TypeError
  delete obj.roxor; // retourne true, car l'attribut n'a pas été ajouté
  obj.bipbip = "arf"; // retourne une TypeError
}

echec();

// Tentatives de modification à l'aide de Object.defineProperty ;
// les deux instructions ci-dessous génèrent une erreur TypeError.
Object.defineProperty(obj, "ohoh", { value: 17 });
Object.defineProperty(obj, "toto", { value: "eit" });

// Il est également impossible de modifier le prototype
// deux instructions suivantes lèvent une TypeError.
Object.setPrototypeOf(obj, { x: 20 });
obj.__proto__ = { x: 20 };
```

### Geler un tableau

```js
const a = [0];
Object.freeze(a); // Le tableau ne peut plus être modifié

a[0] = 1; // échoue silencieusement

// en mode strict, ça lève des exceptions TypeError
function echec() {
  "use strict";
  a[0] = 1;
}

echec();

// Tente de pousser
a.push(2); // lève une TypeError
```

L'objet gelé devient _immuable_. Cependant, il n'est pas nécessairement _constant_. L'exemple suivant montre qu'un objet gelé n'est pas constant (le gel est superficiel).

```js
const obj1 = {
  internal: {},
};

Object.freeze(obj1);
obj1.internal.a = "valeurA";

obj1.internal.a; // 'valeurA'
```

Pour qu'un objet soit constant, l'ensemble du graphe de références (références directes et indirectes à d'autres objets) doit faire référence uniquement à des objets immuables et figés. L'objet figé est dit immuable, car l'ensemble de son _état_ (valeurs et références à d'autres objets) est fixe. Notez que les chaînes de caractères, les nombres et les booléens sont toujours immuables, et que les fonctions et les tableaux sont des objets.

### Gèle profond

Le résultat de l'appel à `Object.freeze(object)` ne s'applique qu'aux propriétés directes de `object` lui-même et empêche _uniquement_ les opérations futures d'ajout, de suppression ou de réaffectation de valeur sur `object`. Si la valeur de ces propriétés est elle-même un objet, ces objets ne sont pas gelés et peuvent faire l'objet d'opérations d'ajout, de suppression ou de réaffectation de valeur.

```js
const employe = {
  nom: "Leroy",
  designation: "Développeur",
  adresse: {
    cp: "72000",
    ville: "Le Mans",
  },
};

Object.freeze(employe);

employe.nom = "John"; // propriété directe, la réaffectation échoue en silence
employe.adresse.ville = "Paris"; // propriété d'un objet fils : modifiable

console.log(employe.adresse.ville); // affiche Paris
```

Pour rendre l'objet complètement immuable, on gèle chacun des objets qu'il contient. Voici un exemple simple de fonction pour parcourir les propriétés qui sont des objets et les geler (attention, cela ne gère pas le cas où on a des cycles de références, ce qui entraînerait une boucle infinie).

```js
function gelProfond(objet) {
  // On récupère les noms des propriétés définies sur obj
  const propNames = Reflect.ownKeys(objet);

  // On gèle les propriétés avant de geler l'objet
  for (const nom of propNames) {
    const valeur = objet[nom];

    if (
      (valeur && typeof valeur === "object") ||
      typeof valeur === "function"
    ) {
      gelProfond(valeur);
    }
  }

  return Object.freeze(objet);
}

const objet2 = {
  interne: {
    a: null,
  },
};

gelProfond(objet2);

objet2.interne.a = "valeurB"; // échoue silencieusement en mode non-strict
objet2.interne.a; // null
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Object.isFrozen()")}}
- La méthode statique {{JSxRef("Object.preventExtensions()")}}
- La méthode statique {{JSxRef("Object.isExtensible()")}}
- La méthode statique {{JSxRef("Object.seal()")}}
- La méthode statique {{JSxRef("Object.isSealed()")}}
