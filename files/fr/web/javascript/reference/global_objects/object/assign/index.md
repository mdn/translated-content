---
title: "Object : méthode statique assign()"
short-title: assign()
slug: Web/JavaScript/Reference/Global_Objects/Object/assign
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Object.assign()`** copie toutes les {{JSxRef("Object/hasOwn", "propriétés propres", "", 1)}} et {{JSxRef("Object/propertyIsEnumerable", "énumérables", "", 1)}} d'un ou plusieurs _objets sources_ vers un _objet cible_. Elle retourne l'objet cible modifié.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.assign()")}}

```js interactive-example
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Résultat attendu : Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Résultat attendu : true
```

## Syntaxe

```js-nolint
Object.assign(target)
Object.assign(target, source1)
Object.assign(target, source1, source2)
Object.assign(target, source1, source2, /* …, */ sourceN)
```

### Paramètres

- `target`
  - : L'objet cible — sur lequel appliquer les propriétés des sources, qui est retourné après modification. Si une valeur primitive est fournie comme cible, elle est convertie en objet.
- `source1`, …, `sourceN`
  - : Le(s) objet(s) source(s) — objets contenant les propriétés que vous souhaitez appliquer.

### Valeur de retour

L'objet cible.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - Le paramètre `target` est {{JSxRef("null")}} ou {{JSxRef("undefined")}}.
    - L'affectation d'une propriété à l'objet cible échoue&nbsp;; par exemple, parce que la propriété n'est pas accessible en écriture sur l'objet cible, ou parce que son accesseur génère une erreur.

## Description

Les propriétés de l'objet cible sont remplacées par celles des objets sources si elles ont la même {{JSxRef("Object/keys", "clé", "", 1)}}. Elles sont remplacées par les propriétés des objets sources les plus récents.

La méthode `Object.assign()` ne copie que les propriétés _énumérables_ et _propres_ d'un objet source vers un objet cible. Elle utilise `[[Get]]` sur la source et `[[Set]]` sur la cible, donc elle invoque les [accesseurs](/fr/docs/Web/JavaScript/Reference/Functions/get) et les [mutateurs](/fr/docs/Web/JavaScript/Reference/Functions/set). Par conséquent, elle _assigne_ les propriétés, plutôt que de les copier ou de définir de nouvelles propriétés. Cela peut la rendre inappropriée pour fusionner de nouvelles propriétés dans un prototype si les sources de fusion contiennent des accesseurs.

Pour copier les définitions de propriétés (y compris leur énumérabilité) dans des prototypes, utilisez {{JSxRef("Object.getOwnPropertyDescriptor()")}} et {{JSxRef("Object.defineProperty()")}} à la place.

Les propriétés {{JSxRef("String")}} et {{JSxRef("Symbol")}} sont copiées.

En cas d'erreur, par exemple si une propriété n'est pas accessible en écriture, une {{JSxRef("TypeError")}} est levée, et l'objet `target` est modifié si des propriétés y ont été ajoutées avant que l'erreur ne soit levée.

> [!NOTE]
> `Object.assign()` ne génère pas d'exception pour des sources {{JSxRef("null")}} ou {{JSxRef("undefined")}}.

## Exemples

### Cloner un objet

```js
const obj = { a: 1 };
const copie = Object.assign({}, obj);
console.log(copie); // { a: 1 }
```

### Attention au clonage profond

Pour le [clonage profond](/fr/docs/Glossary/Deep_copy), nous devons utiliser des alternatives telles {{DOMxRef("Window.structuredClone", "structuredClone()")}}, parce que `Object.assign()`
copie les valeurs des propriétés.

Si la valeur source est une référence à un objet, seule la valeur de la référence est copiée.

```js
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 } }

obj1.a = 1;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 0, b: { c: 0 } }

obj2.a = 2;
console.log(obj1); // { a: 1, b: { c: 0 } }
console.log(obj2); // { a: 2, b: { c: 0 } }

obj2.b.c = 3;
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(obj2); // { a: 2, b: { c: 3 } }

// Copie profonde
const obj3 = { a: 0, b: { c: 0 } };
const obj4 = structuredClone(obj3);
obj3.a = 4;
obj3.b.c = 4;
console.log(obj4); // { a: 0, b: { c: 0 } }
```

### Fusionner des objets

```js
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1); // { a: 1, b: 2, c: 3 }, l'objet cible est aussi modifié
```

### Fusionner des objets partageant des propriétés

```js
const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
```

Ces propriétés sont surchargées par d'autres objets présentant les mêmes propriétés et figurant plus loin dans l'ordre des paramètres.

### Copier des propriétés symboliques

```js
const o1 = { a: 1 };
const o2 = { [Symbol("toto")]: 2 };

const obj = Object.assign({}, o1, o2);
console.log(obj); // { a : 1, [Symbol("toto")]: 2 } (voir bogue 1207182 sur Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(toto)]
```

### Les propriétés héritées et les propriétés non-énumérables ne peuvent être copiées

```js
const obj = Object.create(
  // toto est dans la chaîne de prototypes de obj.
  { toto: 1 },
  {
    truc: {
      value: 2, // truc est une propriété non-énumérable.
    },
    tata: {
      value: 3,
      enumerable: true, // tata est une propriété propre et énumérable.
    },
  },
);

const copy = Object.assign({}, obj);
console.log(copy); // { tata: 3 }
```

### Les types primitifs sont passés en objets

```js
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("toto");

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4);
// Les types primitifs sont encapsulés ; les valeurs null et undefined sont ignorées.
// Notez que, seuls les objets encapsulant des chaînes de caractères peuvent posséder leurs propres propriétés énumérables.
console.log(obj); // { "0": "a", "1": "b", "2": "c" }

// Les types primitifs en tant qu'objet cible sont également encapsulés en objets
const number = Object.assign(3, { a: 1 });
console.log(number); // Number {3, a: 1}
console.log(typeof number); // object
console.log(number.a); // 1

// null et undefined en tant qu'objet cible déclenchent TypeError
try {
  Object.assign(null, { a: 1 });
} catch (e) {
  console.log(e.message); // "Cannot convert undefined or null to object"
}
```

### Les exceptions interrompent la copie

```js
const cible = Object.defineProperty({}, "toto", {
  value: 1,
  writable: false,
}); // cible.toto est en lecture seule

Object.assign(cible, { truc: 2 }, { toto2: 3, toto: 3, toto3: 3 }, { truc: 4 });
// TypeError: "toto" est en lecture seule
// L'exception est levée lorsqu'on affecte cible.toto

console.log(cible.truc); // 2, le premier objet source est bien copié
console.log(cible.toto2); // 3, la première propriété du deuxième objet source est bien copiée
console.log(cible.toto); // 1, on a une exception ici
console.log(cible.toto3); // undefined, assign est terminé toto3 n'est pas copié
console.log(cible.bidule); // undefined, le troisième objet source n'est pas copié non plus.
```

### Copier des accesseurs

```js
const obj = {
  toto: 1,
  get truc() {
    return 2;
  },
};

let copie = Object.assign({}, obj);
console.log(copie);
// { toto: 1, truc: 2 }
// La valeur de copie.truc est la valeur retournée par l'accesseur de obj.truc.

// Ceci est une fonction assign qui copie les descripteurs dans leur intégralité
function completeAssign(cible, ...sources) {
  sources.forEach((source) => {
    const descripteurs = Object.keys(source).reduce((descripteurs, key) => {
      descripteurs[key] = Object.getOwnPropertyDescriptor(source, key);
      return descripteurs;
    }, {});

    // Par défaut, Object.assign copie également les symboles énumérables
    Object.getOwnPropertySymbols(source).forEach((sym) => {
      const descripteur = Object.getOwnPropertyDescriptor(source, sym);
      if (descripteur.enumerable) {
        descripteurs[sym] = descripteur;
      }
    });
    Object.defineProperties(cible, descripteurs);
  });
  return cible;
}

copie = completeAssign({}, obj);
console.log(copie);
// { toto:1, get truc() { return 2 } }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.assign` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [La prothèse d'émulation es-shims de `Object.assign` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.assign)
- La méthode {{JSxRef("Object.defineProperties()")}}
- [Énumérabilité et propriété des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- [Décomposition dans les littéraux objets](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax#décomposition_dans_les_littéraux_dobjets)
